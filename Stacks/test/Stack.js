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

});