import React from "react";
import cards from "./card.json";

const Platform = () => {
  let cardChosen = [];
  return (
    <div className="grid">
      {cards ? (
        cards.map((x, i) => {
          return (
            <img
              src="images/react.png"
              id={i}
              alt="card"
              className="App-logo"
              key={i}
              onClick={(e) => {
                console.log(cards[e.target.id].image, i, x, e.target);
                e.target.src = x.image;
                cardChosen.push(x.name);
                console.log(cardChosen);
                // if (cardChosen.length === 2) {
                //   setTimeout(checkForMatch, 5000);
                // }
              }}
            />
          );
        })
      ) : (
        <p>LOADING...</p>
      )}
    </div>
  );
};

export default Platform;
