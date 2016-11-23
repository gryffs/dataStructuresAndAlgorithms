class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  };
};

class LinkedList {
  constructor() {
    let _count = 0;
    this.head = new Node('head');

    this.length = () => {
      return _count;
    };

    this.insert = (newElement, itemToInsertAfter) => {
      let newNode = new Node(newElement);
      let current = this.find(itemToInsertAfter);
      newNode.next = current.next;
      current.next = newNode;
      _count++;
    };

    this.remove = (element) => {
      let prevNode = this.findPrevious(element);
      if (prevNode) {
        prevNode.next = prevNode.next.next;
        _count--;
        return element;
      } else {
        return null;
      }
    };
  };

  find(item) {
    let currNode = this.head;
    while (currNode.element != item) {
      if(currNode.next === null) {
        return null;
      }
      currNode = currNode.next;
    }
    return currNode;
  };

  findPrevious(item) {
    let currNode = this.head;
    while(currNode.next !== null) {
      if(currNode.next.element === item) {
        return currNode;
      }
      currNode = currNode.next;
    }
    return null;
  };

  forEach(callback) {
    let currNode = this.head;
    while (currNode.next !== null) {
      currNode = currNode.next;
      callback(currNode.element);
    }
  };

};

module.exports = {Node : Node, LinkedList : LinkedList};