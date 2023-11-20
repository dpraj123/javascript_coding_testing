function maxNumber(array) {
  return Math.max(...array);
}

function maxNumberReducer(array) {
  return array.reduce((max, current) => (current > max ? current : max));
}

module.exports = {
  maxNumber,
  maxNumberReducer,
};
