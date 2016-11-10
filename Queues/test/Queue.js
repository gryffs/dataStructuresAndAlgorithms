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