import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import Navigator from "./Components/Navigator";

function App() {
  return (
    <HashRouter>
      <div className="entirePage">
        <Navigator />
      </div>
    </HashRouter>
  );
}

export default App;
