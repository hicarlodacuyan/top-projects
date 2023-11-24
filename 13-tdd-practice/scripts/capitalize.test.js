import capitalize from "./capitalize";

test("convert hello to Hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("capitalize i am human", () => {
  expect(capitalize("i am human")).toBe("I am human");
});
