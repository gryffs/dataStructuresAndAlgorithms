const expect = require('chai').expect;
const Queue = require('../Queue.js');
const Deque = require('../exercise/Deque.js');

let myDeque = new Deque();

describe('Deque', function () {

  it('should exist', function () {
    expect(myDeque).to.exist;
  });

  it('should be an object', function () {
    expect(myDeque).to.be.a('object');
  });

  it('should have a dataStore property', function () {
    expect(myDeque.dataStore).to.exist;
  });

  it('should be an extension of Queue', function () {
    expect(myDeque).to.be.instanceof(Queue);
  });

});

describe('Deque.que', function () {

  it('should exist', function () {
    expect(myDeque.que).to.exist;
  });

  it('should be a function', function () {
    expect(myDeque.que).to.be.a('function');
  });

  it('should add an element to the front of the queue', function () {
    myDeque.enqueue('this');
    myDeque.enqueue('that');
    myDeque.que('other');
    expect(myDeque.dataStore[0]).to.equal('other');
  });

});