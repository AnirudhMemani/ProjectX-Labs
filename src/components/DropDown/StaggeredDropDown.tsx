/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from "framer-motion";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from "react";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "@/hooks/hooks";
import DropDownButton from "./DropDownButton";
import { twMerge } from "tailwind-merge";

type staggeredDropDownProps = {
  title: string;
  activeRoute: string | null;
  setActiveRoute: Dispatch<SetStateAction<string | null>>;
  routeName: string[];
};

const StaggeredDropDown: React.FC<staggeredDropDownProps> = ({
  title,
  routeName,
  setActiveRoute
}): React.JSX.Element => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [isIpad, setIsIpad] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const closeDropdown = (event: MouseEvent) => {
      // dropdownRef.current.contains(event.target as Node) ==> this checks if the element that triggered the mouse click is a descendant of the element the ref is pointing to
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", closeDropdown);

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    function isScreenIpadOrLower() {
      width >= 1024 ? setIsIpad(false) : setIsIpad(true);
    }

    isScreenIpadOrLower();
  }, [width]);

  const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    closed: {
      scaleY: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0
      }
    }
  };

  const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 }
  };

  const checkIsActive = () => {
    return open ? true : false;
  };

  return (
    <div
      className={twMerge(
        "flex items-center justify-center bg-transparent lg:py-0",
        open ? "py-0" : "py-2"
      )}
    >
      <motion.div
        animate={open ? "open" : "closed"}
        className="relative"
        ref={dropdownRef}
      >
        <DropDownButton
          title={title}
          checkIsActive={checkIsActive}
          onClick={() => setOpen((pv) => !pv)}
          iconVariants={iconVariants}
          isIpad={false}
          className="ml-4 lg:ml-0"
        />

        {!isIpad ? (
          <motion.ul
            key={title}
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%" }}
            className="absolute z-50 flex w-48 flex-col gap-2 overflow-hidden rounded-lg bg-neutral-700 py-1 md:shadow-sm md:shadow-sky-600 lg:left-[80%] lg:top-[200%] lg:bg-black"
          >
            {routeName.map((route) => (
              <Option
                key={route}
                text={route}
                onClick={() => {
                  setActiveRoute(route);
                  setOpen(false);
                  navigate(route);
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              />
            ))}
          </motion.ul>
        ) : checkIsActive() ? (
          <motion.div
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
          >
            {routeName.map((route, index) => (
              <DropDownButton
                key={index}
                title={route}
                onClick={() => {
                  setOpen(false);
                  navigate(route);
                  setActiveRoute(route);
                }}
                checkIsActive={checkIsActive}
                iconVariants={iconVariants}
                isIpad={isIpad}
                route={route}
                className={twMerge("ml-8 py-1")}
              />
            ))}
          </motion.div>
        ) : (
          <></>
        )}
      </motion.div>
    </div>
  );
};

const Option = ({ text, onClick }: { text: string; onClick: () => void }) => {
  const currentPath = decodeURIComponent(window.location.pathname);

  const [isActive, setIsActive] = useState<boolean>(false);

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren"
      }
    },
    closed: {
      opacity: 0,
      y: -15,
      transition: {
        when: "afterChildren"
      }
    }
  };

  useEffect(() => {
    const parts = currentPath.split("/");
    const firstPath = parts[parts.length - 1].toString();
    const secondPath =
      parts.length > 1 ? parts[parts.length - 2].toString() : null;
    if (text.toString() === firstPath || text.toString() === secondPath) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [currentPath]);

  return (
    <motion.li
      variants={itemVariants}
      onClick={onClick}
      className={twMerge(
        "flex w-full cursor-pointer items-center gap-2 whitespace-nowrap text-sm font-normal transition-colors hover:bg-sky-600 hover:text-white md:text-white",
        isActive ? "md:text-sky-600" : ""
      )}
    >
      <span className="px-4 py-2">{text}</span>
    </motion.li>
  );
};

export default StaggeredDropDown;
