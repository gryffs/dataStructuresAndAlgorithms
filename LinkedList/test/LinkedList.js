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

describe('LinkedList.find', function () {

  it('should exist', function () {
    expect(myLinkedList.find).to.exist;
  });

  it('should be a function', function () {
    expect(myLinkedList.find).to.be.a('function');
  });

  it('should return null if the element is not found', function () {
    myLinkedList.insert('bacon', 'head');
    expect(myLinkedList.find('tofu')).to.equal(null);
  });

  it('should return the node that has the data being searched for', function () {
    expect(myLinkedList.find('bacon')).to.deep.equal(myNode);
  });

});

describe('LinkedList.insert', function () {

  it('should exist', function () {
    expect(myLinkedList.insert).to.exist;
  });

  it('should be a function', function () {
    expect(myLinkedList.insert).to.be.a('function');
  });

  it('should insert the new element after the passed in element', function () {
    myLinkedList.insert('lettuce', 'bacon');
    expect(myLinkedList.find('head')).to.deep.equal(myLinkedList.head);
  });

});

describe('LinkedList.length', function () {

  it('should exist', function () {
    expect(myLinkedList.length).to.exist;
  });

  it('should be a function', function () {
    expect(myLinkedList.length).to.be.a('function');
  });

  it('should return the length of the LinkedList', function () {
    myLinkedList.insert('tomato', 'lettuce');
    expect(myLinkedList.length()).to.equal(3);
  });

});

describe('LinkedList.findPrevious', function () {

  it('should exist', function () {
    expect(myLinkedList.findPrevious).to.exist;
  });

  it('should be a function', function () {
    expect(myLinkedList.findPrevious).to.be.a('function');
  });

  it('should return null if the passed in node is not found', function () {
    expect(myLinkedList.findPrevious('tofu')).to.equal(null);
  });

  it('should return the previous node of the passed in node', function () {
    let testList = new LinkedList();
    testList.insert('lettuce', 'head');
    testList.insert('tomato', 'lettuce');
    expect(myLinkedList.findPrevious('tomato')).to.deep.equal(testList.head.next);
  });

});