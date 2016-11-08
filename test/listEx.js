const expect = require('chai').expect;
const fs = require('fs');
const List = require('../List.js');
const Person = require('../exercises/listEx.js').Person;
const sameGenderListBuilder = require('../exercises/listEx.js').sameGenderListBuilder;
const listFile = __dirname + '/listFiles/fam.txt';

let me = new Person('Chad Griffis', 'Male');

let myFamily = new List();
const listBuilder = listFile => {. // move this
  let listImport = fs.readFileSync(listFile).toString().trim().split('\n')
                    .map(name => {return name.split(', ');});
  listImport.forEach(name => {
    let member = new Person(name[0], name[1]);
    myFamily.append(member);
  });
};
listBuilder(listFile);

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

describe('sameGenderListBuilder', function () {

  it('should exist', function () {
    expect(sameGenderListBuilder).to.exist;
  });

  it('should be a function', function () {
    expect(sameGenderListBuilder).to.be.a('function');
  });

  it('should return an array of all the people in a list of the same gender', function () {
    expect(sameGenderListBuilder(myFamily, 'female')).to.deep.equal(['Jill', 'Haley', 'Emma', 'Leah', 'Charlotte']);
  });

});
