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

  length() {
    return this.listSize;
  };

  returnList() {
    return this.dataStore;
  };

  insert(element, after) {
    let insertPosition = this.find(after);
    if (insertPosition > -1) {
      this.dataStore.splice(insertPosition + 1, 0, element);
      this.listSize++;
      return true;
    }
    return false;
  };

  contains(element) {
    return this.dataStore.includes(element);
  };

  clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
  };

  front() {
    this.pos = 0;
  };

  end() {
    this.pos = this.listSize - 1;
  };

  prev() {
    if (this.pos > 0) {
      this.pos--;
    }
  };

  next() {
    if (this.pos < this.listSize - 1) {
      this.pos++;
    }
  };

  currPos() {
    return this.pos;
  };

  moveTo(position) {
    this.pos = position;
  };

  getElement() {
    return this.dataStore[this.pos];
  };

}

module.exports = List;