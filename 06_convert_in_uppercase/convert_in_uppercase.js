
function convertInUpperCase(sentence) {
    return sentence.trim().split(' ').map((words) => words[0].toUpperCase() + words.slice(1)).join(' ')
}

module.exports = convertInUpperCase;