import calculatorFactory from "./calculator";

const calculator = calculatorFactory();

test("1 + 1 to 2", () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test("1 * 100 to 100", () => {
  expect(calculator.multiply(1, 100)).toBe(100);
});

test("1 - 100 to 99", () => {
  expect(calculator.subtract(1, 100)).toBe(99);
});

test("100 / 5 to 20", () => {
  expect(calculator.divide(100, 5)).toBe(20);
});

test("5 / 100 to 0.05", () => {
  expect(calculator.divide(5, 100)).toBe(0.05);
});
