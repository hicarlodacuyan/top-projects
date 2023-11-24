import caesarCipher from "./caesarCipher";

test("defend the east wall of the castle", () => {
  expect(caesarCipher("defend the east wall of the castle", 1)).toBe(
    "efgfoe uif fbtu xbmm pg uif dbtumf"
  );
});

test("abcdefghijklmnopqrstuvwxyz", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 1)).toBe(
    "bcdefghijklmnopqrstuvwxyza"
  );
});

test("attack at dawn", () => {
  expect(caesarCipher("attack at dawn", 5)).toBe("fyyfhp fy ifbs");
});

test("attack at dawn", () => {
  expect(caesarCipher("fyyfhp fy ifbs", -5)).toBe("attack at dawn");
});
