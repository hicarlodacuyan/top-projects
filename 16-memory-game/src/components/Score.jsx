import React from "react";
import "../styles/Score.css";

const Score = (props) => {
  return (
    <section className="scores-container">
      <div>
        Score:&nbsp; <span className="current-score-points">{props.state.score}</span>
      </div>

      <div>
        High Score:&nbsp; <span className="current-score-points">{props.state.highScore}</span>
      </div>
    </section>
  );
};

export default Score;