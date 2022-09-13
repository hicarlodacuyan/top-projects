import React from "react";
import "../styles/Card.css";

const Card = (props) => {
  return (
    <div className="card-container" onClick={props.handleClick}>
      <img src={props.character.image} alt="A HunterXHunter Character"></img>
      <p>{props.character.name}</p>
    </div>
  );
};

export default Card;