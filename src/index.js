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
const playerMenuContainer = document.querySelector(".board-player-1-menu");
const playerBoardContainer = document.querySelector(".board-player-1");
const playerShipsContainer = document.querySelector(".ships-1");
const aiBoardContainer = document.querySelector(".board-player-2");
const aiShipsContainer = document.querySelector(".ships-2");
const resultsContainer = document.querySelector(".results");
const gameAndQuitBtnContainer = document.querySelector(".game-container");
const winner = document.querySelector(".winner");
const playerWinner = document.querySelector(".player-winner");
const quitBtn = document.querySelector(".quit");
const reviewBtn = document.querySelector(".next-round");
const menuCarrier = document.getElementById("carrier");
const menuBattleship = document.getElementById("battleship");
const menuDestroyer = document.getElementById("destroyer");
const menuSubmarine = document.getElementById("submarine");
const menuCruiser = document.getElementById("cruiser");
const restartBtn = document.querySelector(".restart");

// Initialization of Human Player Board
let playerBoard = new Board(10);

// Initialization of AI Player Board and Ships
let AIBoard     = new Board(10);
let cruiser2    = new Ship([new Coordinate(3, 6), new Coordinate(3, 7)], "cruiser");
let submarine2  = new Ship([new Coordinate(6, 9), new Coordinate(7, 9), new Coordinate(8, 9)], "submarine");
let destroyer2  = new Ship([new Coordinate(5, 0), new Coordinate(5, 1), new Coordinate(5, 2)], "destroyer");
let battleship2 = new Ship([new Coordinate(1, 3), new Coordinate(1, 4), new Coordinate(1, 5), new Coordinate(1, 6)], "battleship");
let carrier2    = new Ship([new Coordinate(8, 1), new Coordinate(8, 2), new Coordinate(8, 3), new Coordinate(8, 4), new Coordinate(8, 5)], "carrier");

// Place initial Ships to AI Player Board
AIBoard.placeShip(cruiser2);
AIBoard.placeShip(submarine2);
AIBoard.placeShip(destroyer2);
AIBoard.placeShip(battleship2);
AIBoard.placeShip(carrier2);

// Render to the DOM the initial Human Player Board State for Menu
render(boardComponent(playerBoard, 1), playerMenuContainer);

// Render to the DOM the initial AI Player Board and Ships State
render(boardComponent(AIBoard, 2), aiBoardContainer);
render(shipyardComponent(AIBoard.fleet), aiShipsContainer);

// Attach event listeners to the Human Player Fields and Ships for drag/drop functionality
fieldsAddEventListener();
ships.forEach((ship) => ship.addEventListener("dragstart", dragStart));

function drop(e) {
  const id = e.dataTransfer.getData("text/plain");
  const ship = new Ship([], `${id}`);
  const draggable = document.getElementById(id);
  const shipLength = draggable.dataset.shiplength;
  let coordX = parseInt(e.target.dataset.coordx);
  let coordY = parseInt(e.target.dataset.coordy);

  for (let i = 0; i < shipLength; i++) {
    ship.coords.push(new Coordinate(coordX, coordY + i));
  }
  
  if (playerBoard.canPlaceShip(ship)) {
    playerBoard.placeShip(ship);
    draggable.style.display = "none";
  } else return;

  if (playerBoard.fleet.length === 5) {
    menuContainer.style.display = "none";
    gameContainer.style.display = "flex";
    gameAndQuitBtnContainer.style.display = "flex";
  }

  render(boardComponent(playerBoard, 1), playerMenuContainer);
  render(boardComponent(playerBoard, 1), playerBoardContainer);
  render(shipyardComponent(playerBoard.fleet), playerShipsContainer);

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

      render(boardComponent(AIBoard, 2), aiBoardContainer);
      render(shipyardComponent(AIBoard.fleet), aiShipsContainer);

      if (AIBoard.isGameOver()) {
        winner.textContent = "YOU WON!";
        playerWinner.textContent = "Player 1 takes the round";
        setTimeout(() => resultsContainer.style.display = "flex", 500);
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

  render(boardComponent(playerBoard, 1), playerBoardContainer);
  render(shipyardComponent(playerBoard.fleet), playerShipsContainer);

  if (playerBoard.isGameOver()) {
    winner.textContent = "YOU LOSE!";
    playerWinner.textContent = "Computer takes the round";
    setTimeout(() => resultsContainer.style.display = "flex", 500);
    return;
  }

  // Pass the current turn to Human Player Game Controller
  handlePlayerTurn();
}

handlePlayerTurn();

quitBtn.addEventListener("click", () => {
  resultsContainer.style.display = "none";
  gameContainer.style.display = "none";
  gameAndQuitBtnContainer.style.display = "none";
  menuContainer.style.display = "flex";

  // Reinitialization of Human Player Board
  playerBoard = new Board(10);

  // Reinitialization of AI Player Board and Ships
  AIBoard     = new Board(10);
  cruiser2    = new Ship([new Coordinate(3, 6), new Coordinate(3, 7)], "cruiser");
  submarine2  = new Ship([new Coordinate(6, 9), new Coordinate(7, 9), new Coordinate(8, 9)], "submarine");
  destroyer2  = new Ship([new Coordinate(5, 0), new Coordinate(5, 1), new Coordinate(5, 2)], "destroyer");
  battleship2 = new Ship([new Coordinate(1, 3), new Coordinate(1, 4), new Coordinate(1, 5), new Coordinate(1, 6)], "battleship");
  carrier2    = new Ship([new Coordinate(8, 1), new Coordinate(8, 2), new Coordinate(8, 3), new Coordinate(8, 4), new Coordinate(8, 5)], "carrier");

  // Place initial Ships to AI Player Board
  AIBoard.placeShip(cruiser2);
  AIBoard.placeShip(submarine2);
  AIBoard.placeShip(destroyer2);
  AIBoard.placeShip(battleship2);
  AIBoard.placeShip(carrier2);

  menuCarrier.style.display = "flex";
  menuBattleship.style.display = "flex";
  menuDestroyer.style.display = "flex";
  menuSubmarine.style.display = "flex";
  menuCruiser.style.display = "flex";
  restartBtn.style.display = "none";

  // Render to the DOM the initial Human Player Board State for Menu
  render(boardComponent(playerBoard, 1), playerMenuContainer);

  // Render to the DOM the initial AI Player Board and Ships State
  render(boardComponent(AIBoard, 2), aiBoardContainer);
  render(shipyardComponent(AIBoard.fleet), aiShipsContainer);

  // Attach event listeners to the Human Player Fields and Ships for drag/drop functionality
  fieldsAddEventListener();
  ships.forEach((ship) => ship.addEventListener("dragstart", dragStart));

  handlePlayerTurn();
});

restartBtn.addEventListener("click", () => {
  resultsContainer.style.display = "none";
  gameContainer.style.display = "none";
  gameAndQuitBtnContainer.style.display = "none";
  menuContainer.style.display = "flex";

  // Reinitialization of Human Player Board
  playerBoard = new Board(10);

  // Reinitialization of AI Player Board and Ships
  AIBoard     = new Board(10);
  cruiser2    = new Ship([new Coordinate(3, 6), new Coordinate(3, 7)], "cruiser");
  submarine2  = new Ship([new Coordinate(6, 9), new Coordinate(7, 9), new Coordinate(8, 9)], "submarine");
  destroyer2  = new Ship([new Coordinate(5, 0), new Coordinate(5, 1), new Coordinate(5, 2)], "destroyer");
  battleship2 = new Ship([new Coordinate(1, 3), new Coordinate(1, 4), new Coordinate(1, 5), new Coordinate(1, 6)], "battleship");
  carrier2    = new Ship([new Coordinate(8, 1), new Coordinate(8, 2), new Coordinate(8, 3), new Coordinate(8, 4), new Coordinate(8, 5)], "carrier");

  // Place initial Ships to AI Player Board
  AIBoard.placeShip(cruiser2);
  AIBoard.placeShip(submarine2);
  AIBoard.placeShip(destroyer2);
  AIBoard.placeShip(battleship2);
  AIBoard.placeShip(carrier2);

  menuCarrier.style.display = "flex";
  menuBattleship.style.display = "flex";
  menuDestroyer.style.display = "flex";
  menuSubmarine.style.display = "flex";
  menuCruiser.style.display = "flex";
  restartBtn.style.display = "none";

  // Render to the DOM the initial Human Player Board State for Menu
  render(boardComponent(playerBoard, 1), playerMenuContainer);

  // Render to the DOM the initial AI Player Board and Ships State
  render(boardComponent(AIBoard, 2), aiBoardContainer);
  render(shipyardComponent(AIBoard.fleet), aiShipsContainer);

  // Attach event listeners to the Human Player Fields and Ships for drag/drop functionality
  fieldsAddEventListener();
  ships.forEach((ship) => ship.addEventListener("dragstart", dragStart));

  handlePlayerTurn();
});

reviewBtn.addEventListener("click", () => {
  resultsContainer.style.display = "none";
  gameContainer.style.display = "flex";
  restartBtn.style.display = "block";
});