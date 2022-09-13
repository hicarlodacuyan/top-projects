import React from "react";
import Card from "./Card";
import GameOver from "./GameOver";
import "../styles/Main.css";

const Main = (props) => {
  return (
    <main>
      {props.isGameOver ? 
        <GameOver handleRestart={props.handleRestart} /> :
        props.characters.map((character, index) => {
          return (
            <Card 
              key={index}
              character={character}  
              handleClick={() => { 
                props.handleClick(character) 
              }} 
            />
          );
        })
      }
    </main>
  );
};

export default Main;

