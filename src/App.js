import React from "react";
import "./App.css";
import Navigator from "./Components/Navigator";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Works from "./Components/Works";

function App() {
  return (
      <div className="entirePage">
        <Navigator />
        <div className="perforatedLine"></div>
        <About />
        <div className="perforatedLine"></div>
        <Skills />
        <div className="perforatedLine"></div>
        <Works />
      </div>
  );
}

export default App;
