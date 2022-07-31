import Board from "../factories/Board";
import Ship from "../factories/Ship";
import Coordinate from "../factories/Coordinate";

const playerBoard = new Board(10);
const destroyer = new Ship([
    new Coordinate(0, 0),
    new Coordinate(0, 1)
], "destroyer");

test("board is type of object", () => {
    expect(typeof playerBoard === "object").toBe(true);
});

test("board must return given coords status", () => {
    expect(playerBoard.getFieldStatus(0, 0)).toBe(0);
});

test("board can check if it's OK to place ship", () => {
    expect(playerBoard.canPlaceShip(destroyer)).toBe(true);
});
