const countLetter = require("./countLetter");

test("pass 1 sentence and 1 character  count how many matching char in sentence", () => {
  expect(countLetter("Hello World", "l")).toBe(3);
  expect(countLetter("HeLLo", "L")).toBe(2);
});
