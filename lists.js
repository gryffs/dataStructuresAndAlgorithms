// this is a creation of a simple list class.  
// ADT = Abstract Data Type
// problems best solved with lists.

// A list is an ordered sequence of data.  Each data item stored in a list is called an element.  

// list abstract data type (ADT)

class List {
  constructor() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
  };

  append(element) {
    this.dataStore[this.listSize++] = element;
  };

  find(element) {
    return this.dataStore.indexOf(element);
  };

  remove(element) {
    let foundAt = this.find(element);
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      this.listSize--;
      return true;
    }
    return false;
  };
}

module.exports = List;