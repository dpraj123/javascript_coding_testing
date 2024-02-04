// function countLetter(Sentence, letter) {

//   const characters = Sentence.trim().split("");
//   let count = 0;
//   for (const char of characters) {
//     if (char === letter) {
//       count++;
//     }
//   }
//   return count;
// }


function countLetter(Sentence, letter) {
  const characters = Sentence.trim().split("");
  const count = characters.reduce((accumulator, currentChar) => {
    return currentChar === letter ? accumulator + 1 : accumulator;
  }, 0);
  return count;
}

module.exports = countLetter;

