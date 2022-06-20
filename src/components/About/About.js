import React from "react";

import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <h1 className="about__heading heading">About Me</h1>
      <div className="about__content">
        <div className="about__left">
          <p>
            Hi, I'm Nicole Gao, a frontend developer who enjoy writing code and
            turning designs into web applications that users can interact with.
            I primarily work with the React tech stack, Node.js, and Express.js
          </p>
        </div>
        <div className="about__right">
          <p>Hi, I'm Nicole Gao.</p>
          <p>
            I'm a frontend developer who enjoy writing code and turning designs
            into web applications that users can interact with.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
