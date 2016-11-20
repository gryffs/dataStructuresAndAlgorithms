const expect = require('chai').expect;
const llNode = require('../LinkedList').Node;
const LinkedList = require('../LinkedList').LinkedList;
const Node = require('../DoublyLinkedList').Node;
const DoublyLinkedList = require('../DoublyLinkedList').DoublyLinkedList;

let myNode = new Node('Chad');

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