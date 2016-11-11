const expect = require('chai').expect;
const Queue = require('../Queue.js');
const Deque = require('../exercise/Deque.js');
const ex = require('../exercise/queueEx');

let myDeque = new Deque();
let word = 'racecar';

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

describe('Deque.cut', function () {

  it('should exist', function () {
    expect(myDeque.cut).to.exist;
  });

  it('should be a function', function () {
    expect(myDeque.cut).to.be.a('function');
  });

  it('should add an element to the front of the queue', function () {
    myDeque.enqueue('this');
    myDeque.enqueue('that');
    myDeque.cut('other');
    expect(myDeque.dataStore[0]).to.equal('other');
  });

});

describe('ex.isPalindrome', function () {

  it('should exist', function () {
    expect(ex.isPalindrome).to.exist;
  });

  it('should be a function', function () {
    expect(ex.isPalindrome).to.be.a('function');
  });

  it('should return true if a word is a palindrome', function () {
    expect(ex.isPalindrome(word)).to.equal(true);
  });

  it('should return false if a word is not a palindrome', function () {
    word = 'chicken'
    expect(ex.isPalindrome(word)).to.equal(false);
  });

});