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

describe('Stack.pop', function () {

  it('should exist', function () {
    expect(myStack.pop).to.exist;
  });

  it('should be a function', function () {
    expect(myStack.pop).to.be.a('function');
  });

  it('should decrament the top property with each element poped', function () {
    myStack.push('three')
    myStack.pop();
    myStack.pop();
    expect(myStack.top).to.equal(1);
  });

  it('should return the poped element', function () {
    expect(myStack.pop()).to.equal('one');
  });

});

describe('Stack.peek', function () {

  it('should exist', function () {
    expect(myStack.peek).to.exist;
  });

  it('should be a function', function () {
    expect(myStack.peek).to.be.a('function');
  });

  it('should return the top element of the stack', function () {
    myStack.push('platter');
    myStack.push('saucer');
    myStack.push('bowl');
    myStack.push('cup')
    expect(myStack.peek()).to.equal('cup');
  });

  it('should return undefined for on an empty stack', function () {
    let emptyStack = new Stack();
    expect(emptyStack.peek()).to.equal(undefined);
  });

});