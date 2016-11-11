const expect = require('chai').expect;
const Node = require('../LinkedList').Node;
const LinkedList = require('../LinkedList').LinkedList;

let myNode = new Node('bacon');
let myLinkedList = new LinkedList();

describe('Node', function () {

  it('should exist', function () {
    expect(myNode).to.exist;
  });

  it('should be an object', function () {
    expect(myNode).to.be.a('object');
  });

  it('should have an element property', function () {
    expect(myNode.element).to.exist;
  });

  it('should have a next property set to null', function () {
    expect(myNode.next).to.equal(null);
  });

});

describe('LinkedList', function () {

  it('should exist', function () {
    expect(myLinkedList).to.exist;
  });

  it('should be an object', function () {
    expect(myLinkedList).to.be.a('object');
  });

  it('should have a head property', function () {
    expect(myLinkedList.head).to.exist;
  });

});