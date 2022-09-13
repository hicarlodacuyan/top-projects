import React, { useState, useEffec, useEffect } from "react";
import Card from "./Card";
import GameOver from "./GameOver";
import "../styles/Main.css";

const Main = (props) => {
  const [randomHunterCharacters, setRandomHunterCharacters] = useState([
    {name: props.characters[0].name, image: props.characters[0].image},
    {name: props.characters[1].name, image: props.characters[1].image},
    {name: props.characters[2].name, image: props.characters[2].image},
    {name: props.characters[3].name, image: props.characters[3].image},
    {name: props.characters[4].name, image: props.characters[4].image},
    {name: props.characters[5].name, image: props.characters[5].image},
    {name: props.characters[6].name, image: props.characters[6].image},
    {name: props.characters[7].name, image: props.characters[7].image},
    {name: props.characters[8].name, image: props.characters[8].image},
    {name: props.characters[9].name, image: props.characters[9].image},
    {name: props.characters[10].name, image: props.characters[10].image},
    {name: props.characters[11].name, image: props.characters[11].image}
  ]);
  const [chosenHunterCharacters, setChosenHunterCharacters] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const chosenHunterCharactersName = chosenHunterCharacters.map((character) => character.name);
    const isThereDuplicate = chosenHunterCharactersName.some((name, index) => chosenHunterCharactersName.indexOf(name) !== index);

    if (isThereDuplicate) setIsGameOver(true);
  }, [chosenHunterCharacters]);

  const generateRandomHunterCharacters = (character) => {
    const characters = props.characters.sort(() => Math.random() - 0.5).slice(0, 12);
    
    setChosenHunterCharacters([...chosenHunterCharacters].concat(character));
    setRandomHunterCharacters([...characters]);
  };

  return (
    <main>
      {isGameOver ? 
        <GameOver /> :
        randomHunterCharacters.map((character, index) => {
          return (
            <Card 
              key={index}
              character={character}  
              handleClick={() => { 
                generateRandomHunterCharacters(character) 
              }} 
            />
          );
        })
      }
    </main>
  );
};

export default Main;

