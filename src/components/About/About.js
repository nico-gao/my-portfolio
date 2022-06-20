import React from "react";
import { tech_stack } from "../../data/images";
import "./About.scss";

const About = () => {
  return (
    <div className="about" id="about">
      <h1 className="about__heading heading">About Me</h1>
      <div className="about__content">
        <div className="about__left">
          <p>Hi, I'm Nicole Gao, </p>
          <p>
            a frontend developer who enjoys writing code and turning designs into
            web applications that users can interact with. I primarily work with
            the React tech stack and some backend with Node.js and Express.js
          </p>
        </div>
        <div className="about__right">
          <img src={tech_stack} alt="my tech stack" />
        </div>
      </div>
    </div>
  );
};

export default About;
