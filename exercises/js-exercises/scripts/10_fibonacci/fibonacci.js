const fibonacci = function(num) {
	if (num < 0) return 'OOPS';
  
	const GOLDEN_RATIO = 1.618034;
  const newNum = parseInt(num);
  let total = [Math.pow(GOLDEN_RATIO, num) - Math.pow(1 - GOLDEN_RATIO, num)] / Math.sqrt(5);
  
  return Math.round(total);
};

// Do not edit below this line
module.exports = fibonacci;
