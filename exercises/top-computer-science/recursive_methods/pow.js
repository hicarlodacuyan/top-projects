// Iterative function
const pow = (number, n) => {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= number;
  }

  return result;
};

console.log(pow(2, 3));

// Recursive function
const recursivePow = (number, n) => {
  if (n === 1) {
    return number;
  } else {
    return number * recursivePow(number, n - 1);
  }
};

console.log(recursivePow(2, 3));

// Shorter recursive function
const shorterPow = (number, n) =>
  n === 1 ? number : number * shorterPow(number, n - 1);

console.log(shorterPow(2, 3));
