import React, { useEffect, useRef, useState, useCallback } from "react";
import "../../styles/index.css";
import { NavRoutes } from "../constants";
import { NavLinks } from "./NavLinks";
import logo from "../../assets/images/xlabs_logo_white.png";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { Divide as Hamburger } from "hamburger-react";
import StaggeredDropDown from "../DropDown/StaggeredDropDown";
import { motion, useScroll } from "framer-motion";
import { useDebounce } from "../../CustomHooks/useDebounce";

export const Navbar: React.FC = (): React.JSX.Element => {
  const [activeRoute, setActiveRoute] = useState<string | null>(null);
  const [isNavMenuVisible, setIsNavMenuVisible] = useState<boolean>(false);
  const handleLinkClick = (routeName: string) => {
    setActiveRoute(routeName);
    setIsNavMenuVisible(false);
  };
  const [isVisible, setIsVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const dbScrollY = useDebounce(scrollY, 50);
  const { scrollYProgress } = useScroll();
  const navMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const cur = window.scrollY;
    setIsVisible(dbScrollY > cur || cur < 10);
    setScrollY(cur);
  }, [dbScrollY]);

  useEffect(() => {
    if (isNavMenuVisible) {
      setIsNavMenuVisible(false);
    }
  }, [activeRoute]);

  useEffect(() => {
    const closeNavMenu = (event: MouseEvent) => {
      if (
        navMenuRef.current &&
        !navMenuRef.current.contains(event.target as Node)
      ) {
        setIsNavMenuVisible(false);
      }
    };
    document.addEventListener("mousedown", closeNavMenu);

    return () => document.removeEventListener("mousedown", closeNavMenu);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <nav
      className={twMerge(
        "relative top-0 z-50 flex w-full items-center justify-center text-black shadow-md shadow-[#374151] transition-all duration-300 ease-in-out lg:sticky lg:h-24 lg:bg-black",
        !isVisible ? "pointer-events-none opacity-0 lg:opacity-0" : ""
      )}
      ref={navMenuRef}
    >
      <div
        className={twMerge(
          "relative flex w-full flex-col items-center bg-transparent transition-all duration-300 ease-in-out lg:h-full lg:w-[90%] lg:flex-row lg:justify-between xl:w-9/12",
          !isNavMenuVisible
            ? "flex flex-row items-center justify-center py-0"
            : ""
        )}
      >
        <div className="z-10 flex w-full items-center justify-between bg-black px-2 lg:hidden lg:px-6">
          <Link
            className="inline lg:hidden"
            to={NavRoutes.HOME}
            onClick={() => setActiveRoute(NavRoutes.HOME)}
          >
            <img
              className="inline h-32 w-32 lg:h-0 lg:w-0"
              src={logo}
              alt="Logo"
            />
          </Link>
          <Hamburger
            toggled={isNavMenuVisible}
            toggle={setIsNavMenuVisible}
            easing="ease-in-out"
            size={28}
            label="Show menu"
            color="white"
          />
        </div>
        <div
          className={`${
            isNavMenuVisible
              ? "absolute top-32 w-full flex-col border-b border-t border-[#374151] py-2 opacity-100 ease-in-out"
              : "absolute -top-44 -z-50 w-full flex-col opacity-100 transition-all duration-300 ease-in-out"
          } flex items-start justify-center bg-black transition-all duration-300 ease-in-out lg:relative lg:top-0 lg:z-0 lg:flex lg:w-full lg:flex-row lg:items-center lg:justify-between lg:bg-transparent lg:py-0 lg:opacity-100`}
        >
          <StaggeredDropDown
            title={NavRoutes.WORKSHOP}
            setActiveRoute={setActiveRoute}
            routeName={[NavRoutes.HIGH_SCHOOL, NavRoutes.UNIVERSITY]}
            activeRoute={activeRoute}
          />
          <NavLinks
            routeName={NavRoutes.INTERNSHIP}
            onClick={() => handleLinkClick(NavRoutes.INTERNSHIP)}
          />
          <NavLinks
            routeName={NavRoutes.SERVICES}
            onClick={() => handleLinkClick(NavRoutes.SERVICES)}
          />
          <Link
            to={NavRoutes.HOME}
            className="overflow-clip lg:flex lg:h-24 lg:items-center lg:justify-center"
            onClick={() => {
              setActiveRoute(NavRoutes.HOME);
            }}
          >
            <img
              className="hidden lg:inline lg:h-32 lg:w-32"
              src={logo}
              alt="Logo"
            />
          </Link>
          <NavLinks
            routeName={NavRoutes.HOME}
            onClick={() => handleLinkClick(NavRoutes.HOME)}
            className="lg:hidden"
          />
          <NavLinks
            routeName={NavRoutes.BLOGS}
            onClick={() => handleLinkClick(NavRoutes.BLOGS)}
          />
          <NavLinks
            routeName={NavRoutes.ABOUT_US}
            onClick={() => handleLinkClick(NavRoutes.ABOUT_US)}
          />
          <NavLinks
            routeName={NavRoutes.CONTACT_US}
            onClick={() => handleLinkClick(NavRoutes.CONTACT_US)}
          />
        </div>
      </div>
      <motion.div
        style={{
          position: "absolute",
          scaleX: scrollYProgress,
          height: "2px",
          bottom: "0px",
          right: "0px",
          left: "0px",
          transformOrigin: "0%",
          backgroundColor: "rgb(14 165 233)",
          zIndex: -1
        }}
        className="hidden lg:inline-block"
      />
    </nav>
  );
};
