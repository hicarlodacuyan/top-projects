import shipFactory from "../factories/shipFactory";

test("ship must be type of object", () => {
  expect(typeof shipFactory(5) === "object").toBe(true);
});

test("ships must have length", () => {
  expect(shipFactory(5).length).toBeTruthy();
});

test("ships length be type of number", () => {
  expect(typeof shipFactory(5).length).toBe("number");
});

test("ship should return where it has been hit", () => {
  const carrier = shipFactory(5);
  carrier.hit(5);

  expect(carrier.state[5]).toBe(1);
});

test("ship should detect if it has been sunk", () => {
  const destroyer = shipFactory(3);
  destroyer.hit(0);
  destroyer.hit(1);
  destroyer.hit(2);

  expect(destroyer.isSunk()).toBe(true);
});
