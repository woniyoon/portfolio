import React from "react";
import "./App.css";
import Navigator from "./Components/Navigator";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Works from "./Components/Works";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";

const intro = "%cHi, there! \nI'm J1 who's a front-end dev, a coffee lover and an aspiring writer!\n👩‍💻 ☕️ 📝";


function App() {
  console.log(intro, "color: rgb(106, 106, 106); font-size:15px");

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
        <Footer />
      </div>
  );
}

export default App;
