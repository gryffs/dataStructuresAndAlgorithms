const expect = require('chai').expect;
const isPalindrome = require('../exercises/stackEx.js').isPalindrome;
const factorial = require('../exercises/stackEx.js').factorial;
const noLemonPez = require('../exercises/stackEx.js').noLemonPez;

let word = 'racecar'

describe('isPalindrome', function () {

  it('should exist', function () {
    expect(isPalindrome).to.exist;
  });

  it('should be a function', function () {
    expect(isPalindrome).to.be.a('function');
  });

  it('should return true if a word is a palindrome', function () {
    expect(isPalindrome(word)).to.equal(true);
  });

  it('should return false if a word is not a palindrome', function () {
    word = 'chicken'
    expect(isPalindrome(word)).to.equal(false);
  });

});

describe('factorial', function () {

  it('should exist', function () {
    expect(factorial).to.exist;
  });

  it('should be a function', function () {
    expect(factorial).to.be.a('function');
  });

  it('should return the factorial of a given number', function () {
    let numbers = [1, 2, 3, 4, 5, 6];
    let facts = numbers.map(factorial);
    expect(facts).to.deep.equal([1, 2, 6, 24, 120, 720]);
  });

});

describe('noLemonPez', function () {

  it('should exist', function () {
    expect(noLemonPez).to.exist;
  });

  it('should be a function', function () {
    expect(noLemonPez).to.be.a('function');
  });

  it('should return the passed in pez array in order but with no lemon pez', function () {
    let pez = ['cherry', 'cherry', 'lemon', 'mango', 'lemon', 'orange', 'cherry', 'orange', 'lemon', 'mango', 'mango'];
    expect(noLemonPez(pez)).to.deep.equal(['cherry', 'cherry', 'mango', 'orange', 'cherry', 'orange', 'mango', 'mango']);
  });

});