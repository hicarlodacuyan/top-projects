import React from "react";
import "../styles/Score.css";

const Score = () => {
  return (
    <section className="scores-container">
      <div>
        Score:&nbsp; <span className="current-score-points">26</span>
      </div>

      <div>
        High Score:&nbsp; <span className="current-score-points">30</span>
      </div>
    </section>
  );
};

export default Score;