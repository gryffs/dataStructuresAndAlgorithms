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

  it('should be a function', function () {
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

  it('should be a function', function () {
    expect(myQueue.dequeue).to.be.a('function');
  });

  it('should return the element at the front of the queue', function () {
    expect(myQueue.dequeue()).to.equal('player1');
  });

  it('should remove the element from the front of the queue', function () {
    expect(myQueue.dataStore[0]).to.equal('player2');
  });

});

describe('Queue.front', function () {

  it('should exist', function () {
    expect(myQueue.front).to.exist;
  });

  it('should be a function', function () {
    expect(myQueue.front).to.be.a('function');
  });

  it('should return the element at the front of the queue', function () {
    expect(myQueue.front()).to.equal('player2');
  });

  it('should not remove the element from the front of the queue', function () {
    expect(myQueue.dataStore[0]).to.equal('player2');
  });

});

describe('Queue.back', function () {

  it('should exist', function () {
    expect(myQueue.back).to.exist;
  });

  it('should be a function', function () {
    expect(myQueue.back).to.be.a('function');
  });

  it('should return the element at the back of the queue', function () {
    expect(myQueue.back()).to.equal('player3');
  });

  it('should not remove the element from the back of the queue', function () {
    expect(myQueue.dataStore[myQueue.dataStore.length - 1]).to.equal('player3');
  });

});

describe('Queue.toString', function () {

  it('should return all the Queue elements in a string', function () {
    myQueue.enqueue('player1');
    expect(myQueue.toString()).to.equal('player2,player3,player1');
  });

  it('should not modify or remove any elements in the queue', function () {
    expect(myQueue.dataStore).to.deep.equal(['player2', 'player3', 'player1']);
  });

});

describe('Queue.empty', function () {

  it('should exist', function () {
    expect(myQueue.empty).to.exist;
  });

  it('should be a function', function () {
    expect(myQueue.empty).to.be.a('function');
  });

  it('should return true if the Queue is empty', function () {
    let anotherQueue = new Queue;
    expect(anotherQueue.empty()).to.equal(true);
  });

  it('should return false if the Queue contains elements', function () {
    expect(myQueue.empty()).to.equal(false);
  });

});

describe('Queue.count', function () {

  it('should exist', function () {
    expect(myQueue.count).to.exist;
  });

  it('should be a function', function () {
    expect(myQueue.count).to.be.a('function');
  });

  it('should return the number of elemens in the Queue', function () {
    expect(myQueue.count()).to.equal(3);
  });

});