import reverseString from "./reverseString";

test("reverse hello to olleh", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("reverse I am human to namuh ma I", () => {
  expect(reverseString("I am human")).toBe("namuh ma I");
});
