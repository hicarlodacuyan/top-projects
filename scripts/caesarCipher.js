export default function caesarCipher(string, offset) {
  let convertedString = [];
  let result = [];

  /* 
    Convert the string param to iterable array 
    Transform each character to a number(with the given param offset modulo of 26)
  */
  [...string].forEach((char) =>
    convertedString.push(mod(charToNum(char) + offset, 26))
  );

  /* 
    Check each number:
      If it's not a number, push an empty space
      Else simply push it to the resulting array
  */
  convertedString.forEach((num) =>
    isNaN(num) ? result.push(" ") : result.push(numToChar(num))
  );

  // Join resulting array
  return result.join("");
}

function charToNum(char) {
  const charNumPairs = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
  };

  return charNumPairs[char];
}

function numToChar(num) {
  const numCharPairs = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
    6: "g",
    7: "h",
    8: "i",
    9: "j",
    10: "k",
    11: "l",
    12: "m",
    13: "n",
    14: "o",
    15: "p",
    16: "q",
    17: "r",
    18: "s",
    19: "t",
    20: "u",
    21: "v",
    22: "w",
    23: "x",
    24: "y",
    25: "z",
  };

  return numCharPairs[num];
}

function mod(n, m) {
  return ((n % m) + m) % m;
}
