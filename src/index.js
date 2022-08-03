import "./style.css";
import Board from "./factories/Board";
import Ship from "./factories/Ship";
import Player from "./factories/Player";
import Coordinate from "./factories/Coordinate";

// Player 1
const player1 = new Player("player1");
const playerBoard = new Board(10);
const carrier = new Ship(
  [
    new Coordinate(0, 0),
    new Coordinate(0, 1),
    new Coordinate(0, 2),
    new Coordinate(0, 3),
    new Coordinate(0, 4),
  ],
  "carrier"
);
playerBoard.placeShip(carrier);

const battleship = new Ship(
  [
    new Coordinate(1, 0),
    new Coordinate(1, 1),
    new Coordinate(1, 2),
    new Coordinate(1, 3),
  ],
  "battleship"
);
playerBoard.placeShip(battleship);

const destroyer = new Ship(
  [new Coordinate(2, 0), new Coordinate(2, 1), new Coordinate(2, 2)],
  "destroyer"
);
playerBoard.placeShip(destroyer);

const submarine = new Ship(
  [new Coordinate(3, 0), new Coordinate(3, 1), new Coordinate(3, 2)],
  "submarine"
);
playerBoard.placeShip(submarine);

const patrol = new Ship([new Coordinate(4, 0), new Coordinate(4, 1)], "patrol");
playerBoard.placeShip(patrol);

// Player 2
const player2 = new Player("player2");
const player2Board = new Board(10);
const carrier2 = new Ship(
  [
    new Coordinate(0, 0),
    new Coordinate(0, 1),
    new Coordinate(0, 2),
    new Coordinate(0, 3),
    new Coordinate(0, 4),
  ],
  "carrier"
);
player2Board.placeShip(carrier2);

const battleship2 = new Ship(
  [
    new Coordinate(1, 0),
    new Coordinate(1, 1),
    new Coordinate(1, 2),
    new Coordinate(1, 3),
  ],
  "battleship"
);
player2Board.placeShip(battleship2);

const destroyer2 = new Ship(
  [new Coordinate(2, 0), new Coordinate(2, 1), new Coordinate(2, 2)],
  "destroyer"
);
player2Board.placeShip(destroyer2);

const submarine2 = new Ship(
  [new Coordinate(3, 0), new Coordinate(3, 1), new Coordinate(3, 2)],
  "submarine"
);
player2Board.placeShip(submarine2);

const patrol2 = new Ship(
  [new Coordinate(4, 0), new Coordinate(4, 1)],
  "patrol"
);
player2Board.placeShip(patrol2);

let gameOver = false;
let turn = 1;

// Battle Simulation
while (!gameOver) {
  let randomX = randomInteger(0, 9);
  let randomY = randomInteger(0, 9);
  let targetCoord = new Coordinate(randomX, randomY);

  switch (turn % 2 === 1) {
    // Player 1 turn
    case true:
      if (player2Board.canPlaceShot(targetCoord)) {
        try {
          player2Board.placeShot(targetCoord);
          player2Board.getFleetStatus();
          gameOver = player2Board.isGameOver();
        } catch (err) {
          console.log(err);
        }
        if (gameOver) console.log(`Game over! Winner: Player 1`);
      } else {
        console.log(`You can't shoot here!`);
      }
      turn++;
      break;

    // Player 2 turn
    case false:
      if (playerBoard.canPlaceShot(targetCoord)) {
        try {
          playerBoard.placeShot(targetCoord);
          playerBoard.getFleetStatus();
          gameOver = playerBoard.isGameOver();
        } catch (err) {
          console.log(err);
        }

        if (gameOver) console.log(`Game over! Winner: Player 2`);
      } else {
        console.log(`You can't shoot here!`);
      }
      turn++;
      break;
  }
}

console.log(playerBoard.isGameOver());
console.log(player2Board.isGameOver());

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
