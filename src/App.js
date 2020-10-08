import React from "react";
import "./App.css";
import Navigator from "./Components/Navigator";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Works from "./Components/Works";
import Contacts from "./Components/Contacts";

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
        <section className="perforatedLine"></section>
        <Contacts />
      </div>
  );
}

export default App;
