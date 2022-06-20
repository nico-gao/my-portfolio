import React from "react";
import About from "./components/About/About";
import BackgroundWrapper from "./components/BackgroundWrapper/BackgroundWrapper";
import Header from "./components/Header/Header";

import Navigation from "./components/Navigation/Navigation";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Header />
      <BackgroundWrapper>
        <About />
        <Projects />
      </BackgroundWrapper>
    </div>
  );
};

export default App;
