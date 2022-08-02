import Board from "../factories/Board";
import Ship from "../factories/Ship";
import Coordinate from "../factories/Coordinate";

const playerBoard = new Board(10);
const destroyer = new Ship(
  [new Coordinate(0, 0), new Coordinate(0, 1)],
  "destroyer"
);

const ski = new Ship([new Coordinate(0, 1), new Coordinate(0, 2)], "ski");

test("board is type of object", () => {
  expect(typeof playerBoard === "object").toBe(true);
});

test("board must return given coords status", () => {
  expect(playerBoard.getFieldStatus(0, 0)).toBe(0);
});

test("board can check if it's OK to place ship", () => {
  expect(playerBoard.canPlaceShip(destroyer)).toBe(true);
});

test("board can place ship", () => {
  playerBoard.placeShip(destroyer);

  expect(playerBoard.fleet.length !== 0).toBe(true);
});

test("board can't place ship on occupied field", () => {
  const placeShip = () => playerBoard.placeShip(ski);

  expect(placeShip).toThrowError(new Error("Field is already occupied"));
});

test("board can place shot if field value is 0 or 2", () => {
  expect(playerBoard.canPlaceShot(new Coordinate(0, 0))).toBe(true);
});

test("board can't place shot if field value is 1 or 3", () => {
  playerBoard.placeShot(new Coordinate(0, 0));

  expect(playerBoard.canPlaceShot(new Coordinate(0, 0))).toBe(false);
});

test("board return 1 if shot is place on empty field", () => {
  expect(playerBoard.placeShot(new Coordinate(0, 3))).toBe(1);
});

test("board return 3 if shot is place on field with ship but not hit yet", () => {
  expect(playerBoard.placeShot(new Coordinate(0, 1))).toBe(3);
});

test("board return name of the ship that has been destroyed", () => {
  const aiBoard = new Board(10);
  const destroyer = new Ship(
    [new Coordinate(0, 0), new Coordinate(0, 1)],
    "destroyer"
  );

  aiBoard.placeShip(destroyer);
  aiBoard.placeShot(new Coordinate(0, 0));
  aiBoard.placeShot(new Coordinate(0, 1));

  expect(aiBoard.getFleetStatus()).toBe("destroyer");
});

test("board return empty string if no ship has been destroyed", () => {
  const aiBoard = new Board(10);
  const destroyer = new Ship(
    [new Coordinate(0, 0), new Coordinate(0, 1)],
    "destroyer"
  );

  aiBoard.placeShip(destroyer);
  aiBoard.placeShot(new Coordinate(0, 0));

  expect(aiBoard.getFleetStatus()).toBe("");
});

test("board return true if game is over", () => {
  const gameOverBoard = new Board(10);
  const destroyer = new Ship(
    [new Coordinate(0, 0), new Coordinate(0, 1)],
    "destroyer"
  );

  gameOverBoard.placeShip(destroyer);
  gameOverBoard.placeShot(new Coordinate(0, 0));
  gameOverBoard.getFleetStatus();
  gameOverBoard.placeShot(new Coordinate(0, 1));
  gameOverBoard.getFleetStatus();

  expect(gameOverBoard.isGameOver()).toBe(true);
});
