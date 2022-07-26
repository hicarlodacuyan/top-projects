import shipFactory from "../factories/shipFactory";

test("ship must be type of object", () => {
  expect(typeof shipFactory("carrier", 5) === "object").toBe(true);
});

test("ships must have length", () => {
  expect(shipFactory("carrier", 5).length).toBeTruthy();
});

test("ships length be type of number", () => {
  expect(typeof shipFactory("carrier", 5).length).toBe("number");
});

test("ship should return where it has been hit", () => {
  const carrier = shipFactory("carrier", 5);
  carrier.hit(5);

  expect(carrier.state[5]).toBe(1);
});

test("ship should detect if it has been sunk", () => {
  const destroyer = shipFactory("destroyer", 3);
  destroyer.hit(0);
  destroyer.hit(1);
  destroyer.hit(2);

  expect(destroyer.isSunk()).toBe(true);
});
