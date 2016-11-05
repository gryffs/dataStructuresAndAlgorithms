const expect = require('chai').expect;
const List = require('../lists.js');

let myList = new List;

describe('List', function () {

  it('should exist', function () {
    expect(myList).to.exist;
  });

  it('should be an object', function () {
    expect(myList).to.be.a('object');
  });

  it('should have a listSize property', function () {
    expect(myList.listSize).to.exist;
  });

  it('should have a pos property', function () {
    expect(myList.pos).to.exist;
  });

  it('should have a dataStore Array', function () {
    expect(myList.dataStore).to.be.an.instanceOf(Array);
  });

});

describe('List.append', function () {

  it('should exist', function () {
    expect(myList.append).to.exist;
  });

  it('should be a function', function () {
    expect(myList.append).to.be.a('function');
  });

  it('should append an item to the list', function () {
    myList.append('grape');
    expect(myList.dataStore[0]).to.equal('grape');
  });

  it('should increase the listSize property', function () {
    expect(myList.listSize).to.equal(1);
  });

  it('should append additional items to the list', function () {
    myList.append('apple');
    myList.append('kiwi');
    expect(myList.dataStore).to.deep.equal(['grape', 'apple', 'kiwi']);
  });

  it('should continue to increase the listSize property', function () {
    expect(myList.listSize).to.equal(3);
  });

});

describe('List.find', function () {

  it('should exist', function () {
    expect(myList.find).to.exist;
  });

  it('should be a function', function () {
    expect(myList.find).to.be.a('function');
  });

  it('should return -1 of the item is not found', function () {
    expect(myList.find('chicken')).to.equal(-1);
  });

  it('should return the index of the item if found', function () {
    expect(myList.find('apple')).to.equal(1);
  });

});

describe('List.remove', function () {

  it('should exist', function () {
    expect(myList.remove).to.exist;
  });

  it('should be a function', function () {
    expect(myList.remove).to.be.a('function');
  });

  it('should return false if it can not remove the item', function () {
    expect(myList.remove('chicken')).to.equal(false);
  });

  it('should return true if it removes the item', function () {
    expect(myList.remove('apple')).to.equal(true);
  });

  it('should decrease the listSize property on removal', function () {
    expect(myList.listSize).to.equal(2);
  });

  it('should remove the item from the list', function () {
    expect(myList.dataStore).to.deep.equal(['grape', 'kiwi']);
  });

});