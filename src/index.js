import "./style.css";
import shipFactory from "./factories/shipFactory";
import gameboardFactory from "./factories/gameboardFactory";

const playerBoard = gameboardFactory();

const carrier = shipFactory(5);

playerBoard.placeShip(0, 0, carrier);
console.log(playerBoard.board);

playerBoard.receiveAttack(0, 0);
console.log(playerBoard.board);
