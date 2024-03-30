import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { NavRoutes, WorkshopNavRoutes } from "../constants";

type WorkshopNavbarProps = {
  routeName: string;
  onClick: () => void;
  className?: string;
};

export const WorkshopNavlinks: React.FC<WorkshopNavbarProps> = ({
  routeName,
  className,
  onClick
}): React.JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const currentPath = decodeURIComponent(useLocation().pathname);

  useEffect(() => {
    const parts = currentPath.split("/");

    if (
      routeName.toString() === parts[parts.length - 1].toString() ||
      (routeName.toString() === WorkshopNavRoutes.ADDITIVE_MANUFACTURING &&
        parts[parts.length - 1].toString() === NavRoutes.UNIVERSITY) ||
      (routeName.toString() === WorkshopNavRoutes.PRINTING_3D &&
        parts[parts.length - 1].toString() === NavRoutes.HIGH_SCHOOL)
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [currentPath]);

  return (
    <>
      <Link
        to={routeName}
        className={twMerge(
          "text-2xl text-white transition-colors duration-200 ease-in-out hover:text-sky-500 active:scale-90 xl:text-3xl",
          isActive ? "text-sky-500" : "",
          className
        )}
        onClick={onClick}
      >
        {routeName}
      </Link>
    </>
  );
};
