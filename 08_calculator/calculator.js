const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((sum, number) => sum += number, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((total, number) => total *= number);
};

const power = function(number, pow) {
	return number ** pow;
};

const factorial = function(number) {
	if (number === 0) {return 1}
  let factor = 1;
  for (let i = number; i > 0; i--) {
    factor *= i;
  }
  return factor;
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
