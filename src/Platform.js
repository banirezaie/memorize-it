import React from "react";
import cards from "./card.json";

const Platform = () => {
  return (
    <div className="grid">
      {cards.map((x, i) => {
        console.log(i);
        return (
          <img
            src="images/react.png"
            alt="card cover"
            className="App-logo"
            key={i}
          />
        );
      })}
    </div>
  );
};

export default Platform;
