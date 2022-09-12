import React from "react";

const scoreStyle = {
  display: "flex",
  border: "5px solid lightblue"
};

const currentScoreStyle = {
  border: "5px solid darkblue", 
  flex: "1" 
};

const highestScoreStyle = {
  border: "5px solid lightgreen", 
  flex: "1" 
};

const Score = () => {
  return (
    <section
      style={scoreStyle}
    >
      <div 
        style={currentScoreStyle}
      >
        Score: 26
      </div>

      <div 
        style={highestScoreStyle}
      >
        High Score: 30
      </div>
    </section>
  );
};

export default Score;