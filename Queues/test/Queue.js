const expect = require('chai').expect;
const Queue = require('../Queue.js');

let myQueue = new Queue();

describe('Queue', function () {

  it('should exist', function () {
    expect(myQueue).to.exist;
  });

  it('should be an object', function () {
    expect(myQueue).to.be.a('object');
  });

  it('should have a dataStore property', function () {
    expect(myQueue.dataStore).to.exist;
  });

});

describe('Queue.enqueue', function () {

  it('should exist', function () {
    expect(myQueue.enqueue).to.exist;
  });

  it('should be an function', function () {
    expect(myQueue.enqueue).to.be.a('function');
  });

  it('should add an element to the end of the queue', function () {
    myQueue.enqueue('player1');
    myQueue.enqueue('player2');
    myQueue.enqueue('player3');
    expect(myQueue.dataStore[myQueue.dataStore.length - 1]).to.equal('player3');
  });

});

describe('Queue.dequeue', function () {

  it('should exist', function () {
    expect(myQueue.dequeue).to.exist;
  });

  it('should be an function', function () {
    expect(myQueue.dequeue).to.be.a('function');
  });

  it('should return the element at the front of the queue', function () {
    expect(myQueue.dequeue()).to.equal('player1');
  });

  it('should remove the element from the front of the queue', function () {
    expect(myQueue.dataStore[0]).to.equal('player2');
  });

});