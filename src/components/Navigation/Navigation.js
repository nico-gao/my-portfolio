import React, { useState } from "react";

import { HiMenuAlt3 } from "react-icons/hi";

import "./Navigation.scss";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuToggleHandler = () => {
    console.log("button clicked");

    setIsOpen((prev) => !prev);
  };
  return (
    <nav className="nav">
      <div className="nav__content">
        <h2 className="nav__content__logo">Nicole G</h2>
        <div className={`nav__content__menu ${isOpen ? "isOpen" : ""}`}>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>

        <div className="nav__content__toggle">
          <HiMenuAlt3 onClick={menuToggleHandler} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
