import React, { useState, useEffect } from "react";
import { TNavLinksProps } from "../types";
import { twMerge } from "tailwind-merge";
import { Link, useLocation } from "react-router-dom";
import { NavRoutes } from "@/components/constants";

export const NavLinks: React.FC<TNavLinksProps> = ({
  routeName,
  onClick,
  className
}): React.JSX.Element => {
  const renderRouteName = String(routeName);

  const [isActiveRoute, setIsActiveRoute] = useState<boolean>(false);
  const currentPath = decodeURIComponent(useLocation().pathname);

  useEffect(() => {
    const parts = currentPath.split("/");
    const secondPath =
      parts.length > 1 ? parts[parts.length - 2].toString() : null;
    if (
      routeName.toString() === parts[parts.length - 1].toString() ||
      (routeName.toString() === NavRoutes.SERVICES &&
        routeName.toString() === secondPath) ||
      (routeName.toString() === NavRoutes.BLOGS &&
        routeName.toString() === secondPath)
    ) {
      setIsActiveRoute(true);
    } else {
      setIsActiveRoute(false);
    }
  }, [currentPath]);

  const checkIsActive = () => {
    return isActiveRoute ? "scale-x-1" : "scale-x-0";
  };

  return (
    <Link
      className={twMerge(
        "group relative ml-4 cursor-pointer py-2 text-white transition duration-1000 ease-in-out lg:ml-0 lg:inline-block lg:py-0",
        className
      )}
      to={routeName}
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        onClick();
      }}
    >
      {renderRouteName}
      <span
        className={twMerge(
          "absolute inset-x-0 -bottom-1 hidden h-0.5 scale-x-0 bg-sky-600 font-sans text-lg font-normal transition-all duration-300 group-hover:origin-center group-hover:scale-x-100 group-hover:transform lg:block",
          checkIsActive()
        )}
      />
    </Link>
  );
};
