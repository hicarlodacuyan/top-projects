import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Score from './components/Score';
import { alluka, beyond, biscuit, chrollo, dalzollene, genthru, ging, gon, hisoka, illumi, johness, kalluto, killua, kite, kurapika, leol, leorio, meleoron, meruem, neferpitou, netero, palm, phinks, shalnark, shizuku, silva, welfin, zeno } from "./images/index";

const App = () => {
  const HUNTER_CHARACTERS = [
    {name: "Alluka", image: alluka},
    {name: "Beyond", image: beyond},
    {name: "Biscuit", image: biscuit},
    {name: "Chrollo", image: chrollo},
    {name: "Dalzollene", image: dalzollene},
    {name: "Genthru", image: genthru},
    {name: "Ging", image: ging},
    {name: "Gon", image: gon},
    {name: "Hisoka", image: hisoka},
    {name: "Illumi", image: illumi},
    {name: "Johness", image: johness},
    {name: "Kalluto", image: kalluto},
    {name: "Killua", image: killua},
    {name: "Kite", image: kite},
    {name: "Kurapika", image: kurapika},
    {name: "Leol", image: leol},
    {name: "Leorio", image: leorio},
    {name: "Meleoron", image: meleoron},
    {name: "Meruem", image: meruem},
    {name: "Neferpitou", image: neferpitou},
    {name: "Netero", image: netero},
    {name: "Palm", image: palm},
    {name: "Phinks", image: phinks},
    {name: "Shalnark", image: shalnark},
    {name: "Shizuku", image: shizuku},
    {name: "Silva", image: silva},
    {name: "Welfin", image: welfin},
    {name: "Zeno", image: zeno}
  ];
  const [randomHunterCharacters, setRandomHunterCharacters] = useState([
    {name: HUNTER_CHARACTERS[0].name, image: HUNTER_CHARACTERS[0].image},
    {name: HUNTER_CHARACTERS[1].name, image: HUNTER_CHARACTERS[1].image},
    {name: HUNTER_CHARACTERS[2].name, image: HUNTER_CHARACTERS[2].image},
    {name: HUNTER_CHARACTERS[3].name, image: HUNTER_CHARACTERS[3].image},
    {name: HUNTER_CHARACTERS[4].name, image: HUNTER_CHARACTERS[4].image},
    {name: HUNTER_CHARACTERS[5].name, image: HUNTER_CHARACTERS[5].image},
    {name: HUNTER_CHARACTERS[6].name, image: HUNTER_CHARACTERS[6].image},
    {name: HUNTER_CHARACTERS[7].name, image: HUNTER_CHARACTERS[7].image},
    {name: HUNTER_CHARACTERS[8].name, image: HUNTER_CHARACTERS[8].image},
    {name: HUNTER_CHARACTERS[9].name, image: HUNTER_CHARACTERS[9].image},
    {name: HUNTER_CHARACTERS[10].name, image: HUNTER_CHARACTERS[10].image},
    {name: HUNTER_CHARACTERS[11].name, image: HUNTER_CHARACTERS[11].image}
  ]);
  const [chosenHunterCharacters, setChosenHunterCharacters] = useState([]);
  const [scores, setScores] = useState({
    score: 0,
    highScore: 0
  })
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const chosenHunterCharactersName = chosenHunterCharacters.map((character) => character.name);
    const isThereDuplicate = chosenHunterCharactersName.some((name, index) => chosenHunterCharactersName.indexOf(name) !== index);

    if (isThereDuplicate) {
      setIsGameOver(true);
    } 
  }, [chosenHunterCharacters]);

  const generateRandomHunterCharacters = (character) => {
    const characters = HUNTER_CHARACTERS.sort(() => Math.random() - 0.5).slice(0, 12);
    
    setChosenHunterCharacters([...chosenHunterCharacters].concat(character));
    setRandomHunterCharacters([...characters]);
  };

  const handleRestart = () => {
    setIsGameOver(false);
    setChosenHunterCharacters([]);
  };
  
  return (
    <div className="App">
      <Header handleRestart={handleRestart} />
      <Main 
        characters={randomHunterCharacters} 
        scores={scores}
        isGameOver={isGameOver}
        handleClick={generateRandomHunterCharacters}
        handleRestart={handleRestart}
      />
      <Score 
        state={scores}
        isGameOver={isGameOver} 
      />
    </div>
  );
}

export default App;
