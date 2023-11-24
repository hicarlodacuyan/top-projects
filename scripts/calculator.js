export default function calculatorFactory() {
  function add(num1, num2) {
    return num1 + num2;
  }

  function subtract(num1, num2) {
    return num1 > num2 ? num1 - num2 : num2 - num1;
  }

  function multiply(num1, num2) {
    return num1 * num2;
  }

  function divide(num1, num2) {
    return num1 / num2;
  }

  return { add, subtract, multiply, divide };
}
