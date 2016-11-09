const fs = require('fs');
// Create a person class that stores a person's name and their gender.

class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  };
}

// Write a function that builds a list from a text file.

const listBuilder = (listFile, list) => {
  let listImport = fs.readFileSync(listFile).toString().trim().split('\n')
                    .map(name => {return name.split(', ');});
  listImport.forEach(name => {
    let member = new Person(name[0], name[1]);
    list.append(member);
  });
};

// Write a function that displays all the people in the list of the same gender.

const sameGenderListBuilder = (personList, gender) => {
  const people = [];
  let count = 0
  personList.front();

  while(count < personList.length()) {
    let person = personList.getElement();
    if(person.gender === gender) {
      people.push(person.name);
    }
    personList.next();
    count++;
  };

  return people;
};


module.exports = {Person : Person, listBuilder : listBuilder, sameGenderListBuilder : sameGenderListBuilder};