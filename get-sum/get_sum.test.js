const sum = require("./get_sum.js");
test("test sum of 2 number", () => {
  const result = sum(5, 5);
  expect(result).toBe(10);
});
