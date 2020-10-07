import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import Navigator from "./Components/Navigator";
import About from "./Components/About";

function App() {
  return (
    <HashRouter>
      <div className="entirePage">
        <Navigator />
        <About />
      </div>
    </HashRouter>
  );
}

export default App;
