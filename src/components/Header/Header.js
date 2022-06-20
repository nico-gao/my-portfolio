import React from "react";
import {IoIosArrowDown} from "react-icons/io"

import "./Header.scss";

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="header__img" />
      <div className="header__text">
        <h1>Nicole Gao</h1>
        <p>Web Developer</p>
      </div>
      <div className="header__arrow">
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default Header;
