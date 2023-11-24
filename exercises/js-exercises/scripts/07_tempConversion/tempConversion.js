const ftoc = function(temp) {
  const result = (temp - 32) * .5556;

  return Math.round(result * 10) / 10;
};

const ctof = function(temp) {
  const result = (temp * 1.8) + 32;

  return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
