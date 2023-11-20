const { maxNumber, maxNumberReducer } = require("./max_number.js");
test("find Max number in array", () => {
  expect(maxNumber([4, 8, 90])).toBe(90);
  expect(maxNumberReducer([4, 8, 90])).toBe(90);
});
