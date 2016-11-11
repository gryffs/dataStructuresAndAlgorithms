const Queue = require('../Queue.js');

class Deque extends Queue {
  cut(element) {
    this.dataStore.unshift(element);
  }
};

module.exports = Deque;