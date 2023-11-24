import Ship from "../factories/Ship";
import Coordinate from "../factories/Coordinate";

const boat = new Ship([new Coordinate(0, 0), new Coordinate(0, 1)], "boat");

test("ship is type of object", () => {
  expect(typeof boat === "object").toBe(true);
});

test("ship must have length", () => {
  expect(boat.coords.length).toBe(2);
});

test("ship length is type of number", () => {
  expect(typeof boat.coords.length === "number").toBe(true);
});

test("ship must remove coords where it has been hit", () => {
  boat.isHit(new Coordinate(0, 0));

  expect(boat.coords.length).toBe(1);
});

test("ship must return true if it is destroyed", () => {
  boat.isHit(new Coordinate(0, 1));

  expect(boat.hasSunk()).toBe(true);
});

test("destroyed ship return status is type of boolean", () => {
  expect(typeof boat.hasSunk() === "boolean").toBe(true);
});

test("ship must return true if it has been placed on the given coords", () => {
  const boat1 = new Ship([new Coordinate(0, 0), new Coordinate(0, 1)], "boat1");
  const coord = new Coordinate(0, 0);

  expect(boat1.hasCoordinates(coord)).toBe(true);
});

test("placed ship return status is type of boolean", () => {
  const boat2 = new Ship([new Coordinate(0, 0), new Coordinate(0, 1)], "boat2");
  const coord = new Coordinate(0, 0);

  expect(typeof boat2.hasCoordinates(coord) === "boolean").toBe(true);
});
