const Stack = require('../Stack.js');

const isPalindrome = word => {
  let rev = new Stack();
  let revWord = '';
  for (let letter of word) {
    rev.push(letter);
  }
  while (rev.length() > 0) {
    revWord += rev.pop();
  }
  if (word === revWord) {
    return true;
  }
  return false;
}

module.exports = {isPalindrome : isPalindrome }