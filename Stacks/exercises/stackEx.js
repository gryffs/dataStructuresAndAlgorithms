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
};

const factorial = num => {
  let n = new Stack();
  while (num > 1) {
    n.push(num--);
  }
  let product = 1;
  while (n.length() > 0) {
    product *= n.pop();
  }
  return product;
};

module.exports = {isPalindrome : isPalindrome, factorial : factorial };