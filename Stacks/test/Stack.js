const expect = require('chai').expect;
const Stack = require('../Stack.js');

let myStack = new Stack();

describe('Stack', function () {

  it('should exist', function () {
    expect(myStack).to.exist;
  });

  it('should be an object', function () {
    expect(myStack).to.be.a('object');
  });

  it('should have a dataStore property', function () {
    expect(myStack.dataStore).to.exist;
  });

  it('should have a top property', function () {
    expect(myStack.top).to.exist;
  });

});

describe('Stack.push', function () {

  it('should exist', function () {
    expect(myStack.push).to.exist;
  });

  it('should be a function', function () {
    expect(myStack.push).to.be.a('function');
  });

  it('should incrament the top property with each element pushed', function () {
    myStack.push('one');
    myStack.push('two');
    expect(myStack.top).to.equal(2);
  });

  it('should add the element to the dataStore', function () {
    expect(myStack.dataStore[1]).to.equal('two');
  });

});