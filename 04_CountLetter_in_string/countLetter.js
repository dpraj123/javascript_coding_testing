function countLetter(Sentence, letter) {
  const characters = Sentence.replace(/\s/g, "").split("");
  let count = 0;
  for (const char of characters) {
    if (char === letter) {
      count++;
    }
  }
  return count;
}
module.exports = countLetter;
