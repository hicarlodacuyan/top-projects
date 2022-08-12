import "./style.css";
import Board from "./factories/Board";
import Ship from "./factories/Ship";
import Coordinate from "./factories/Coordinate";
import boardComponent from "./components/boardComponent";
import shipyardComponent from "./components/shipyardComponent";
import render from "./lib/render";
import randomNumber from "./lib/randomNumber";
import { dragStart, dragEnter, dragOver, dragLeave } from "./lib/drag";

const ships = document.querySelectorAll(".ship");
const gameContainer = document.querySelector(".game");
const menuContainer = document.querySelector(".menu-container");

// Initialization of Human Player Board
const playerBoard = new Board(10);

// Initialization of AI Player Board and Ships
const AIBoard     = new Board(10);
const cruiser2    = new Ship([new Coordinate(3, 6), new Coordinate(3, 7)], "cruiser");
const submarine2  = new Ship([new Coordinate(6, 9), new Coordinate(7, 9), new Coordinate(8, 9)], "submarine");
const destroyer2  = new Ship([new Coordinate(5, 0), new Coordinate(5, 1), new Coordinate(5, 2)], "destroyer");
const battleship2 = new Ship([new Coordinate(1, 3), new Coordinate(1, 4), new Coordinate(1, 5), new Coordinate(1, 6)], "battleship");
const carrier2    = new Ship([new Coordinate(8, 1), new Coordinate(8, 2), new Coordinate(8, 3), new Coordinate(8, 4), new Coordinate(8, 5)], "carrier");

// Place initial Ships to AI Player Board
AIBoard.placeShip(cruiser2);
AIBoard.placeShip(submarine2);
AIBoard.placeShip(destroyer2);
AIBoard.placeShip(battleship2);
AIBoard.placeShip(carrier2);

// Render to the DOM the initial Human Player Board State for Menu
render(boardComponent(playerBoard, 1), document.querySelector(".board-player-1-menu"));

// Render to the DOM the initial AI Player Board and Ships State
render(boardComponent(AIBoard, 2), document.querySelector(".board-player-2"));
render(shipyardComponent(AIBoard.fleet), document.querySelector(".ships-2"));

// Attach event listeners to the Human Player Fields and Ships for drag/drop functionality
fieldsAddEventListener();
ships.forEach((ship) => ship.addEventListener("dragstart", dragStart));

function drop(e) {
  const id = e.dataTransfer.getData("text/plain");
  const draggable = document.getElementById(id);

  let shipCoords = [];
  let coordX = parseInt(e.target.dataset.coordx);
  let coordY = parseInt(e.target.dataset.coordy);
  let shipLength = draggable.dataset.shiplength;

  for (let i = 0; i < shipLength; i++) {
    shipCoords.push(new Coordinate(coordX, coordY + i));
  }
  
  const ship = new Ship(shipCoords, `${id}`);
  
  if (playerBoard.canPlaceShip(ship)) {
    playerBoard.placeShip(ship);
    draggable.style.display = "none";
  } else return;

  if (playerBoard.fleet.length === 5) {
    menuContainer.style.display = "none";
    gameContainer.style.display = "flex";
  }

  shipCoords = [];
  render(boardComponent(playerBoard, 1), document.querySelector(".board-player-1-menu"));
  render(boardComponent(playerBoard, 1), document.querySelector(".board-player-1"));
  render(shipyardComponent(playerBoard.fleet), document.querySelector(".ships-1"));

  fieldsAddEventListener();
}

function fieldsAddEventListener() {
  document.querySelectorAll(".board-cell-1").forEach(cell => {
    cell.addEventListener("dragenter", dragEnter)
    cell.addEventListener("dragover", dragOver);
    cell.addEventListener("dragleave", dragLeave);
    cell.addEventListener("drop", drop);
  });
}

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
        return setTimeout(() => alert(`Game Over! You won!`), 100);
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
  let coords = new Coordinate(randomNumber(0, 9), randomNumber(0, 9));

  /**
   * If the shot is valid, place the shot.
   * Else, generate a new coords while shot is invalid and try again.
   */
  if (playerBoard.canPlaceShot(coords)) {
    playerBoard.placeShot(coords);
    playerBoard.getFleetStatus();
  } else {
    let invalidShot = true;

    while (invalidShot) {
      coords = new Coordinate(randomNumber(0, 9), randomNumber(0, 9));

      if (playerBoard.canPlaceShot(coords)) {
        playerBoard.placeShot(coords);
        playerBoard.getFleetStatus();
        invalidShot = false;
      }
    }
  }

  render(boardComponent(playerBoard, 1), document.querySelector(".board-player-1"));
  render(shipyardComponent(playerBoard.fleet), document.querySelector(".ships-1"));

  if (playerBoard.isGameOver()) {
    return setTimeout(() => alert(`Game Over! Opponent won!`), 100);
  }

  // Pass the current turn to Human Player Game Controller
  handlePlayerTurn();
}

handlePlayerTurn();