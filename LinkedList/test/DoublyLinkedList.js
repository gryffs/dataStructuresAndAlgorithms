const expect = require('chai').expect;
const llNode = require('../LinkedList').Node;
const LinkedList = require('../LinkedList').LinkedList;
const Node = require('../DoublyLinkedList').Node;
const DoublyLinkedList = require('../DoublyLinkedList').DoublyLinkedList;

let myNode = new Node('Chad');
let myDoublyLinkedList = new DoublyLinkedList();

describe('DoublyLinkedList Node', function () {

  it('should exist', function () {
    expect(myNode).to.exist;
  });

  it('should be an object', function () {
    expect(myNode).to.be.a('object');
  });

  it('should have a previous property set to null', function () {
    expect(myNode.previous).to.equal(null);
  });

  it("should be an extension of LinkedList's Node", function () {
    expect(myNode).to.be.instanceof(llNode);
  });

});

describe('DoublyLinkedList', function () {

  it('should exist', function () {
    expect(myDoublyLinkedList).to.exist;
  });

  it('should be an object', function () {
    expect(myDoublyLinkedList).to.be.a('object');
  });

  it("should be an extension of LinkedList", function () {
    expect(myDoublyLinkedList).to.be.instanceof(LinkedList);
  });

});

describe('DoublyLinkedList.insert', function () {

  it("should set the new node's previous property to point to the previous node", function () {
    myDoublyLinkedList.insert('CB', 'head');
    myDoublyLinkedList.insert('Victor', 'CB')
    let vicNode = myDoublyLinkedList.find('Victor');
    expect(vicNode.previous).to.deep.equal(myDoublyLinkedList.find('CB'));
  });

});

describe('DoublyLinkedList.remove', function () {

  it('should remove the passed in element from the DoublyLinkedList', function () {
    myDoublyLinkedList.insert('Chad', 'Victor');
    myDoublyLinkedList.insert('Bob', 'Chad');
    myDoublyLinkedList.insert('Eli', 'Bob');
    myDoublyLinkedList.remove('Bob');
    expect(myDoublyLinkedList.find('Bob')).to.equal(null);
  });

  it('should set the node previous property of the following removed node to the correct previous node', function () {
    let testNode = myDoublyLinkedList.find('Eli');
    expect(testNode.previous).to.equal(myDoublyLinkedList.find('Chad'));
  });

});

describe('DoublyLinkedList.findLast', function () {

  it('should exist', function () {
    expect(myDoublyLinkedList.findLast).to.exist;
  });

  it('should be a function', function () {
    expect(myDoublyLinkedList.findLast).to.be.a('function');
  });

  it('should return the last node in the DoublyLinkedList', function () {
    expect(myDoublyLinkedList.findLast()).to.deep.equal(myDoublyLinkedList.find('Eli'));
  });

});

describe('DoublyLinkedList.reverseForEach', function () {

  it('should exist', function () {
    expect(myDoublyLinkedList.reverseForEach).to.exist;
  });

  it('should be a function', function () {
    expect(myDoublyLinkedList.reverseForEach).to.be.a('function');
  });

  it('should run a callback function on every item in list reverse order', function () {
    let testArray = [];
    let answerArray = [ 'Eli', 'Chad', 'Victor', 'CB' ];
    myDoublyLinkedList.reverseForEach( x => testArray.push(x) );
    expect(testArray).to.deep.equal(answerArray);
  });

});