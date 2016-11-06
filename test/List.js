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

describe('List.length', function () {

  it('should exist', function () {
    expect(myList.length).to.exist;
  });

  it('should be a function', function () {
    expect(myList.length).to.be.a('function');
  });

  it('should return the length of the list', function () {
    expect(myList.length()).to.equal(2);
  });

  it('should return the correct length after appending and removing multiple items', function () {
    myList.append('onion');
    myList.append('banana');
    myList.append('fish');
    myList.remove('onion');
    myList.remove('fish');
    expect(myList.length()).to.equal(3);
  });

});

describe('List.returnList', function () {

  it('should exist', function () {
    expect(myList.returnList).to.exist;
  });

  it('should be a function', function () {
    expect(myList.returnList).to.be.a('function');
  });

  it('should return an Array', function () {
    expect(myList.returnList()).to.be.an.instanceOf(Array);
  });

  it('should return the list of items', function () {
    expect(myList.returnList()).to.deep.equal(['grape', 'kiwi', 'banana']);
  });

});

describe('List.insert', function () {

  it('should exist', function () {
    expect(myList.insert).to.exist;
  });

  it('should be a function', function () {
    expect(myList.insert).to.be.a('function');
  });

  it('should return false on an unsuccessful insertion', function () {
    expect(myList.insert('cow', 'chicken')).to.equal(false);
  });

  it('should return true on a successful insertion', function () {
    expect(myList.insert('apple', 'kiwi')).to.equal(true);
  });

  it('should insert the element after the specified item', function () {
    expect(myList.returnList()).to.deep.equal(['grape', 'kiwi', 'apple', 'banana']);
  });

});

describe('List.contains', function () {

  it('should exist', function () {
    expect(myList.contains).to.exist;
  });

  it('should be a function', function () {
    expect(myList.contains).to.be.a('function');
  });

  it('should return false if the element is not in the list', function () {
    expect(myList.contains('salt')).to.equal(false);
  });

  it('should return true if the element is in the list', function () {
    expect(myList.contains('kiwi')).to.equal(true);
  });

});

describe('List.front', function () {

  it('should exist', function () {
    expect(myList.front).to.exist;
  });

  it('should be a function', function () {
    expect(myList.front).to.be.a('function');
  });

  it('should set the pos to 0', function () {
    myList.pos = 99;
    myList.front();
    expect(myList.pos).to.equal(0);
  });

});

describe('List.end', function () {

  it('should exist', function () {
    expect(myList.end).to.exist;
  });

  it('should be a function', function () {
    expect(myList.end).to.be.a('function');
  });

  it('should set the pos to the index of the last item in dataStore', function () {
    myList.end();
    expect(myList.pos).to.equal(myList.dataStore.length - 1);
  });

});

describe('List.next', function () {

  it('should exist', function () {
    expect(myList.next).to.exist;
  });

  it('should be a function', function () {
    expect(myList.next).to.be.a('function');
  });

  it('should incrament pos by one', function () {
    myList.front();
    myList.next();
    myList.next();
    expect(myList.pos).to.equal(2);
  });

  it('should not incrament past the last element in the list', function () {
    myList.next();
    myList.next();
    myList.next();
    expect(myList.pos).to.equal(myList.dataStore.length - 1);
  });

});

describe('List.prev', function () {

  it('should exist', function () {
    expect(myList.prev).to.exist;
  });

  it('should be a function', function () {
    expect(myList.prev).to.be.a('function');
  });

  it('should decrament pos by one', function () {
    myList.prev();
    myList.prev();
    expect(myList.pos).to.equal(1);
  });

  it('should not decrament past 0', function () {
    myList.prev();
    myList.prev();
    myList.prev();
    myList.prev();
    expect(myList.pos).to.equal(0);
  });

});

describe('List.currPos', function () {

  it('should exist', function () {
    expect(myList.currPos).to.exist;
  });

  it('should be a function', function () {
    expect(myList.currPos).to.be.a('function');
  });

  it('should return the current position', function () {
    myList.next();
    expect(myList.currPos()).to.equal(1);
  });

});

describe('List.moveTo', function () {

  it('should exist', function () {
    expect(myList.moveTo).to.exist;
  });

  it('should be a function', function () {
    expect(myList.moveTo).to.be.a('function');
  });

  it('should move to a position', function () {
    myList.moveTo(3);
    expect(myList.pos).to.equal(3);
  });

});

describe('List.getElement', function () {

  it('should exist', function () {
    expect(myList.getElement).to.exist;
  });

  it('should be a function', function () {
    expect(myList.getElement).to.be.a('function');
  });

  it('should return the current position element', function () {
    expect(myList.getElement()).to.equal('banana');
  });

});

describe('List.clear', function () {

  it('should exist', function () {
    expect(myList.clear).to.exist;
  });

  it('should be a function', function () {
    expect(myList.clear).to.be.a('function');
  });

  it('should remove all elements from the list', function () {
    myList.clear();
    expect(myList.returnList()).to.deep.equal([]);
  });

  it('should reset the listSize to 0', function () {
    expect(myList.listSize).to.equal(0);
  });

  it('should reset the pos to 0', function () {
    expect(myList.pos).to.equal(0);
  });

});