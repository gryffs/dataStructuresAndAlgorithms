const expect = require('chai').expect;
const isPalindrome = require('../exercises/stackEx.js').isPalindrome;

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
