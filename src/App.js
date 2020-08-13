import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Score from "./Score";
import Platform from "./Platform";
import FlipCard from "./FlitCard";

function App() {
  return (
    <div className="App-header">
      <h1>DIZZY MATCH</h1>
      <Score />
      <Platform />
      <FlipCard />
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
