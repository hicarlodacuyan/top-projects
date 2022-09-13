import React from "react";
import "../styles/GameOver.css";

const GameOver = (props) => {
  return (
    <div className="game-over">
      <h1 className="game-over-text">Game is Over!</h1>
      <button className="action-btn restart-btn" onClick={props.handleRestart}>Restart</button>
      <button className="action-btn newgame-btn">New Game</button>
    </div>
  );
};

export default GameOver;