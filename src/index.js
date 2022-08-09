import "./style.css";
import Board from "./factories/Board";
import Ship from "./factories/Ship";
import Coordinate from "./factories/Coordinate";
import boardComponent from "./components/boardComponent";
import shipyardComponent from "./components/shipyardComponent";
import render from "./lib/render";
import randomNumber from "./lib/randomNumber";

// Initialization of Human Player Board and Ships
const playerBoard = new Board(10);
const cruiser     = new Ship([new Coordinate(0, 0), new Coordinate(0, 1)], "cruiser");
const submarine   = new Ship([new Coordinate(2, 0), new Coordinate(2, 1), new Coordinate(2, 2)], "submarine");
const destroyer   = new Ship([new Coordinate(4, 0), new Coordinate(4, 1), new Coordinate(4, 2)], "destroyer");
const battleship  = new Ship([new Coordinate(6, 0), new Coordinate(6, 1), new Coordinate(6, 2), new Coordinate(6, 3)], "battleship");
const carrier     = new Ship([new Coordinate(8, 0), new Coordinate(8, 1), new Coordinate(8, 2), new Coordinate(8, 3), new Coordinate(8, 4)], "carrier");

// Place initial Ships to Human Player Board
playerBoard.placeShip(cruiser);
playerBoard.placeShip(submarine);
playerBoard.placeShip(destroyer);
playerBoard.placeShip(battleship);
playerBoard.placeShip(carrier);

// Render to the DOM the initial Human Player Board State
render(boardComponent(playerBoard, 1), document.querySelector(".board-player-1"));

// Initialization of AI Player Board and Ships
const AIBoard     = new Board(10);
const cruiser2    = new Ship([new Coordinate(0, 0), new Coordinate(0, 1)], "cruiser");
const submarine2  = new Ship([new Coordinate(2, 0), new Coordinate(2, 1), new Coordinate(2, 2)], "submarine");
const destroyer2  = new Ship([new Coordinate(4, 0), new Coordinate(4, 1), new Coordinate(4, 2)], "destroyer");
const battleship2 = new Ship([new Coordinate(6, 0), new Coordinate(6, 1), new Coordinate(6, 2), new Coordinate(6, 3)], "battleship");
const carrier2    = new Ship([new Coordinate(8, 0), new Coordinate(8, 1), new Coordinate(8, 2), new Coordinate(8, 3), new Coordinate(8, 4)], "carrier");

// Place initial Ships to AI Player Board
AIBoard.placeShip(cruiser2);
AIBoard.placeShip(submarine2);
AIBoard.placeShip(destroyer2);
AIBoard.placeShip(battleship2);
AIBoard.placeShip(carrier2);

// Render to the DOM the initial AI Player Board State
render(boardComponent(AIBoard, 2), document.querySelector(".board-player-2"));

// Human Player Game Controller
function handlePlayerTurn() {
  document.querySelectorAll(".board-cell-2").forEach((cell, index) => {
    cell.addEventListener("click", (e) => {
      let coords = Array.from(String(index), Number);

      if (coords.length === 1) {
        coords.unshift(0);
      }

      AIBoard.placeShot(new Coordinate(coords[0], coords[1]));
      AIBoard.getFleetStatus();

      render(boardComponent(AIBoard, 2), document.querySelector(".board-player-2"));
      render(shipyardComponent(AIBoard.fleet), document.querySelector(".ships-2"));

      if (AIBoard.isGameOver()) {
        console.log(`Game Over! You won!`);
        return;
      }

      // Pass the current turn to AI Player Game Controller after 1 second delay
      setTimeout(() => {
        handleOpponentTurn();
      }, 1000);
    });
  });
}

// AI Player Game Controller
function handleOpponentTurn() {
  const coords = new Coordinate(randomNumber(0, 9), randomNumber(0, 9));

  if (!playerBoard.canPlaceShot(coords)) {
    /**
     * If placing a shot at random coords failed,
     * recursively call the function until a shot has made.
     */
    console.log(`Can't place shot there! Trying again.`);
    handleOpponentTurn();
  } else {
    try {
      playerBoard.placeShot(coords);
      playerBoard.getFleetStatus();

      render(boardComponent(playerBoard, 1), document.querySelector(".board-player-1"));
      render(shipyardComponent(playerBoard.fleet), document.querySelector(".ships-1"));
    } catch (err) {
      console.log(err);
    }
  }

  if (playerBoard.isGameOver()) {
    console.log("Game Over! AI won.");
    return;
  }

  // Pass the current turn to Human Player Game Controller
  handlePlayerTurn();
}

handlePlayerTurn();

// Render to the DOM initial state of the Ships of both players
render(shipyardComponent(playerBoard.fleet), document.querySelector(".ships-1"));
render(shipyardComponent(AIBoard.fleet), document.querySelector(".ships-2"));
