const expect = require('chai').expect;
const Person = require('../exercises/listEx.js').Person;
const sameGenderList = require('../exercises/listEx.js').sameGenderList;

let me = new Person('Chad Griffis', 'Male');

describe('Person', function () {

  it('should exist', function () {
    expect(me).to.exist;
  });

  it('should be an object', function () {
    expect(me).to.be.a('object');
  });

  it('should have a name property', function () {
    expect(me.name).to.exist;
  });

  it('should have a gender property', function () {
    expect(me.gender).to.exist;
  });

  it('should set the name property', function () {
    expect(me.name).to.equal('Chad Griffis');
  });

  it('should set the gender property', function () {
    expect(me.gender).to.equal('Male');
  });

});