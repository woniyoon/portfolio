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
        <section className="perforatedLine"></section>
        <About />
        <section className="perforatedLine"></section>
        <Skills />
        <section className="perforatedLine"></section>
        <Works />
      </div>
  );
}

export default App;
