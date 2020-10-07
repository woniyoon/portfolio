import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import Navigator from "./Components/Navigator";
import About from "./Components/About";
import Skills from "./Components/Skills";

function App() {
  return (
    <HashRouter>
      <div className="entirePage">
        <Navigator />
        <About />
        <Skills />
      </div>
    </HashRouter>
  );
}

export default App;
