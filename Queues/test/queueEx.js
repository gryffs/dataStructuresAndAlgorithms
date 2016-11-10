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