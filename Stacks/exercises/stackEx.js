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

const noLemonPez = pezArry => {
  let newPez = [];
  let pezStack1 = new Stack();
  let pezStack2 = new Stack();

  for (let pez of pezArry) {
    if (pez !== 'lemon') {
      pezStack1.push(pez);
    }
  }
  while(pezStack1.length() > 0) {
    pezStack2.push(pezStack1.pop());
  }
  while(pezStack2.length() > 0) {
    newPez.push(pezStack2.pop())
  }

  return newPez;
};

module.exports = {isPalindrome : isPalindrome, factorial : factorial, noLemonPez : noLemonPez };