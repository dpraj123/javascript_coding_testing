const helloWorld = require("./hello_world.js");
test("Running 'Hello, World !' as a string", () => {
  const result = helloWorld();
  expect(result).toBe("Hello World");
});
