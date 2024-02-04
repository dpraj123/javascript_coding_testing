const reverseString = (strg) => strg.split(' ').map(item => (item.split('').reverse().join(''))).join(' ');
console.log(reverseString('ram is a boy'))