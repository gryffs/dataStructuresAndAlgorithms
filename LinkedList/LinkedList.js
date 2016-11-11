class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  };
};

class LinkedList {
  constructor() {
    this.head = new Node('head');
  };
};

module.exports = {Node : Node, LinkedList : LinkedList};