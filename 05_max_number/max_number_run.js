const { maxNumber, maxNumberReducer } = require("./max_number.js");

const array = [4, 80, 7, 90];
const resultMaxNumber = maxNumber(array);
const resultMaxNumberReducer = maxNumberReducer(array);
console.log("resultMaxNumber : ", resultMaxNumber);
console.log("resultMaxNumberReducer : ", resultMaxNumberReducer);
