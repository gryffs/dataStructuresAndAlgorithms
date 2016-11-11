const Deque = require('./Deque.js');

const isPalindrome = word => {

  let revWord = '';
  let q = new Deque();
  for(let i of word) {
    q.cut(i);
  }
  while(!q.empty()) {
    revWord += q.dequeue();
  }
  if(word === revWord) {
    return true;
  }
  return false;

};

module.exports = { isPalindrome : isPalindrome };