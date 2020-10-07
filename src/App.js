import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import Navigator from "./Components/Navigator";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Works from "./Components/Works";

function App() {
  return (
    <HashRouter>
      <div className="entirePage">
        <Navigator />
        <About />
        <Skills />
        <Works />
      </div>
    </HashRouter>
  );
}

export default App;
