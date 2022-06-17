import React from "react";
import Header from "./components/Header/Header";

import Navigation from "./components/Navigation/Navigation";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Header />
      <Projects />
      
    </div>
  );
};

export default App;
