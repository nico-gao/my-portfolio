import React, { useEffect, useState } from "react";

import { HiMenuAlt3 } from "react-icons/hi";

import useThrottle from "../../hooks/useThrottle";
import useDisableScroll from "../../hooks/useDisableScroll";

import "./Navigation.scss";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [, setScrollPos] = useState(window.scrollY);
  const [throttle] = useThrottle();
  useDisableScroll(isOpen);

  const menuToggleHandler = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const scrollHandler = () => {
      const currentPos = window.scrollY;
      setScrollPos((prev) => {
        if (currentPos > prev) {
          setShowNav(false);
        } else if (currentPos <= prev - 300 || currentPos === 0) {
          setShowNav(true);
        }
        return currentPos;
      });
    };
    const throttledScroll = throttle(scrollHandler, 500);
    window.addEventListener("scroll", throttledScroll);
    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [throttle, setScrollPos]);

  return (
    <nav className={`nav ${showNav ? "active" : "hidden"}`}>
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
