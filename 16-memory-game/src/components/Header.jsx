import React from "react";
import Menu from "./Menu";
import "../styles/Header.css";

const Header = (props) => {
  return (
    <header>
      <h1>memoryXmemory</h1>
      <Menu handleRestart={props.handleRestart} handleNewGame={props.handleNewGame} />
    </header>
  );
};

export default Header;