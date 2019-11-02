import React from "react";
import logo from "./logo.svg";
import "./App.css";
import upper, { text1, text2, text3 } from "./file1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{text3}</p>
        <p>{upper("To upper")}</p>
      </header>
    </div>
  );
}

export default App;
