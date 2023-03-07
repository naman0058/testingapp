import React from "react";
import { Link } from "react-router-dom";
import logoImg from "images/newlogo.webp";
import logoLightImg from "images/newlogo.webp";
// import LogoSvgLight from "./LogoSvgLight";
// import LogoSvg from "./LogoSvg";

export interface LogoProps {
  img?: string;
  imgLight?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoLightImg,
  className = "",
}) => {
  return (
    <Link
      to="/"
      className={`ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0 ${className}`}
    >
      {/* <LogoSvgLight />
      <LogoSvg /> */}

      {/* THIS USE FOR MY CLIENT */}
      {/* PLEASE UN COMMENT BELLOW CODE AND USE IT */}
      {img ? (
        <img
          className={`block max-h-12 ${imgLight ? "dark:hidden" : ""}`}
          src={img}
          alt="Logo123"
          style={{maxHeight:'6rem'}}
        />
      ) : (
        "Logo Here"
      )}
      {imgLight && (
        <img
          className="hidden max-h-12 dark:block"
          src={img}
          alt="Logo-Light"
          style={{maxHeight:'6rem'}}
        />
      )}
    </Link>
  );
};

export default Logo;
