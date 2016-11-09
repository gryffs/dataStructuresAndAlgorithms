class Stack {
  // last in, first out (LIFO) / first in, last out (FILO)
  constructor() {
    this.dataStore = [];
    this.top = 0;
  };

  push(element) {
    this.dataStore[this.top++] = element;
  };

  pop() {
    return this.dataStore[--this.top];
  };

  peek() {
    return this.dataStore[this.top - 1];
  };
}

module.exports = Stack;