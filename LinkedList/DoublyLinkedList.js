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

    this.remove = (element) => {
      let currNode = this.find(element);
      if (!(currNode.next === null)) {
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
        _count--;
        return element;
      } else {
        return null;
      }
    };

  };


  findLast() {
    let currNode = this.head;
    while(!(currNode.next === null)) {
      currNode = currNode.next;
    }
    return currNode;
  };

};

module.exports = { DoublyLinkedList : DoublyLinkedList, Node : Node };