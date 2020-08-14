import React, { useState } from "react";
import cards from "./card.json";

const Platform = () => {
  const [gameCards, setGameCards] = useState(cards);
  let cardChosen = [];
  let cardChosenIndex = [];

  return (
    <div className="grid">
      {gameCards ? (
        gameCards.map((x, i) => {
          return (
            <img
              src="images/react.png"
              alt="card"
              className="App-logo"
              key={i}
              onClick={(e) => {
                console.log(i, x, e.target);
                cardChosen.push(x);
                cardChosenIndex.push(i);
                e.target.src = x.image;
                if (cardChosen.length === 2) {
                  setTimeout(() => {
                    if (cardChosen[0].name === cardChosen[1].name) {
                      alert("you found a match");
                      // console.log(i, x, cards[cardChosenIndex[0]]);
                      let notMatched = cards.filter((card) => {
                        return card.names !== cardChosen[0].name;
                      });
                      cardChosen[0].image = "images/blank.png";
                      cardChosen[1].image = "images/blank.png";
                      return (
                        // (cards[cardChosenIndex[0]].image = "images/blank.png"),
                        // (cards[cardChosenIndex[1]].image = "images/blank.png"),
                        // console.log(notMatched),
                        setGameCards(notMatched),
                        (cardChosen = []),
                        (cardChosenIndex = [])
                      );

                      // cards = [...matchesRemove, ]
                      // x.image.src = "images/blank.png";
                      // setImageTwo("images/blank.png");
                      // console.log(cards[cardChosenIndex[0]]);
                    }
                  }, 500);
                }
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
