const llNode = require('../LinkedList').Node;
const LinkedList = require('../LinkedList').LinkedList;

class Node extends llNode {
  constructor(element) {
    super(element);
    this.previous = null;
  };
};

class DoublyLinkedList extends LinkedList {
  constructor() {
    let _count = 0;
    super();

    this.insert = (newElement, itemToInsertAfter) => {
      let newNode = new Node(newElement);
      let current = this.find(itemToInsertAfter);
      newNode.next = current.next;
      newNode.previous = current;
      current.next = newNode;
      _count++;
    };

  };

};

module.exports = { DoublyLinkedList : DoublyLinkedList, Node : Node };