const llNode = require('../LinkedList').Node;
const LinkedList = require('../LinkedList').LinkedList;

class Node extends llNode {
  constructor(element) {
    super(element);
    this.previous = null;
  };
};

class DoublyLinkedList extends LinkedList {

};

module.exports = { DoublyLinkedList : DoublyLinkedList, Node : Node };