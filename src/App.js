import React from "react";
import "./App.css";
import Navigator from "./Components/Navigator";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Works from "./Components/Works";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
import {withTranslation} from "react-i18next";

const intro = "%cHi, there! \nI'm J1 who's a front-end dev, a coffee lover and an aspiring writer!\n👩‍💻 ☕️ 📝";


function App({t, i18n}) {
  console.log(intro, "color: rgb(106, 106, 106); font-size:15px");

  document.title = "J1 - FrontEndDev";

  return (
      <div className="entirePage">
        <Navigator i18n={i18n} />
        <section className="perforatedLine"></section>
        <About t={t}/>
        <section className="perforatedLine"></section>
        <Skills />
        <section className="perforatedLine"></section>
        <Works t={t} />
        <section className="perforatedLine"></section>
        <Contacts />
        <Footer />
      </div>
  );
}

export default withTranslation()(App);
