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
    for(const data of this.dataStore) {
      if (data === element) {
        return data;
      }
    }
    return -1;
  };
}