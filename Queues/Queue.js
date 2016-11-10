class Queue {

  constructor() {
    this.dataStore = [];
  };

  enqueue(element) {
    this.dataStore.push(element);
  };

  dequeue() {
    return this.dataStore.shift();
  };
}

module.exports = Queue;