function calculator(num1, num2, operator) {
  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  if (operators.hasOwnProperty(operator)) {
    return operators[operator](num1, num2);
  } else {
    return "Invalid operator";
  }
}
calculator(5, 5, "*");
module.exports = calculator;
