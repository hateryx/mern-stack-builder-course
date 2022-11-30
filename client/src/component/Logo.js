import React from "react";
import logo from "../assets/images/logo.svg";

export const Logo = () => {
  return (
    <nav>
      <img src={logo} alt="joblify" className="logo" />
    </nav>
  );
};

export default Logo;
