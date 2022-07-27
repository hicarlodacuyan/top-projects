import gameboardFactory from "../factories/gameboardFactory";
import shipFactory from "../factories/shipFactory";

test("gameboard must be type of object", () => {
  expect(typeof gameboardFactory() === "object").toBe(true);
});

test("gameboard must be able to place ships at specific coordinates", () => {
  const playerBoard = gameboardFactory();
  const carrier = shipFactory(5);

  playerBoard.placeShip(0, 0, carrier);

  expect(playerBoard.board[0][0]).toBe(0);
});

test("gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot", () => {
  const playerBoard = gameboardFactory();
  const carrier = shipFactory(5);

  playerBoard.placeShip(0, 0, carrier);

  expect(playerBoard.receiveAttack(0, 0)).toBe(1);
});
