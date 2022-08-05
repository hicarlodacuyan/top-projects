import "./style.css";
import render from "./lib/render";
import Board from "./factories/Board";
import Ship from "./factories/Ship";
import Coordinate from "./factories/Coordinate";
import boardComponent from "./components/boardComponent";

const playerBoard = new Board(10);
render(boardComponent(playerBoard), document.querySelector(".board-player-1"));

const AIBoard = new Board(10);
render(boardComponent(AIBoard), document.querySelector(".board-player-2"));
