const Queue = require('../Queue.js');

class Deque extends Queue {
  que(element) {
    this.dataStore.unshift(element);
  }
};

module.exports = Deque;