import React from "react";

const Score = () => {
  return (
    <section
      style={{
        display: "flex",
        border: "5px solid lightblue"
      }}
    >
      <div 
        style={{ 
          border: "5px solid darkblue", 
          flex: "1" 
        }}
      >
          Score: 26
      </div>

      <div 
        style={{ 
          border: "5px solid lightgreen", 
          flex: "1" 
        }}
      >
          High Score: 30
      </div>
    </section>
  );
};

export default Score;