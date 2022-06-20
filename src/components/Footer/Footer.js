import React from "react";

import { MdOutlineEmail } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left"></div>
      <ul className="footer__right">
        <li>
          <a href="https://github.com/nico-gao" target="_blank" rel="noreferrer">
            <AiFillGithub />
          </a>
          <p>nico-gao</p>
        </li>
        <li>
          <MdOutlineEmail />
          <p>nicolegao03@gmail.com</p>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
