import React from "react";

import "./BackgroundWrapper.scss";

const BackgroundWrapper = ({ children }) => {
  return <div className="bg-wrapper">{children}
    <ul className="bg-wrapper__squares">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>;
};

export default BackgroundWrapper;
