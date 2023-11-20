const calculator = require("./calculator.js");

test("pass 2 number and 1 operator check Output as operator", () => {
  const result1 = calculator(5, 5, "*");
  const result2 = calculator(5, 5, "+");
  const result3 = calculator(5, 5, "-");
  const result4 = calculator(5, 5, "/");
  expect(result1).toBe(25);
  expect(result2).toBe(10);
  expect(result3).toBe(0);
  expect(result4).toBe(1);
});
