import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Score from "./Score";
import Platform from "./Platform";

function App() {
  return (
    <div className="App-header">
      <Score />
      <Platform />

      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
