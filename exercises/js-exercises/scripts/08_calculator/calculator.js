const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
  let total = 0;

	for (let num of nums) {
    total += num;
  }

  return total;
};

const multiply = function(nums) {
  let total = 1;

	for (let num of nums) {
    total *= num;
  }

  return total;
};

const power = function(num, exponent) {
	let total = 1;

  for (i = 1; i <= exponent; i++) {
    total *= num;
  }

  return total;
};

const factorial = function(num) {
	let total = 1;
  let i = num;

  if (num === 0) return total;

  while (i >= 1) {
    total *= i;
    i--;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
