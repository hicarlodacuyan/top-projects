import './App.css';
import React from 'react';
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
  
  return (
    <div className="App">
      <Header />
      <Main characters={HUNTER_CHARACTERS} />
      <Score />
    </div>
  );
}

export default App;
