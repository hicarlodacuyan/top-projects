import React from "react";
import "../styles/GameOver.css";

const GameOver = (props) => {
  return (
    <div className="game-over">
      <p className="game-over-text">Game is Over! Here's how you did...</p>
      <div className="game-over-scores-container">
        <div className="game-over-scores-label">
          <p className="game-over-scores-labels">Your score</p>
          <p className="game-over-scores">{props.scores.score}&nbsp; {props.scores.score > 1 ? "Points" : "Point"}</p>
        </div>
        <div className="game-over-scores-label">
          <p className="game-over-scores-labels">High score</p>
          <p className="game-over-scores">{props.scores.highScore}&nbsp; {props.scores.highScore > 1 ? "Points" : "Point"}</p>
        </div>
      </div>
      <button className="action-btn restart-btn" onClick={props.handleRestart}>Restart</button>
      <button className="action-btn newgame-btn">New Game</button>
    </div>
  );
};

export default GameOver;