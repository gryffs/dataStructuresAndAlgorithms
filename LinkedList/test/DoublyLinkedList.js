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

  it("should set the new node's previous property to point the previous node", function () {
    myDoublyLinkedList.insert('CB', 'head');
    myDoublyLinkedList.insert('Victor', 'CB')
    let vicNode = myDoublyLinkedList.find('Victor');
    expect(vicNode.previous).to.deep.equal(myDoublyLinkedList.find('CB'));
  });

});