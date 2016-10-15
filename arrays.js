//  A JavaScript Array is a specialized JS object.  A standard array is a linear collection of elements 
//  where the elements can be accessed via indices.  These indices are usually integers used to compute offsets.
//  Because JS arrays are just objects, they are not quite as efficient as the arrays of other programming
//  languages.  One reason this occurs is because the indices are converted to strings internally in order
//  to conform to the requirements for JS objects.

// Creating Arrays

var nums = [];
var nums = [1, 2, 3, 4, 5];
console.log(nums.length);  // logs 5

//  elemnts do not have to be of the same type

var stuff = [42, 'chad', true, null];

//  Array.isArray() will verify if an object is an array

var num = 42;
console.log(Array.isArray(num));  // logs false
console.log(Array.isArray(stuff));  // logs true

//  bracket notation can be used to assign and to access

var numbers = [];
for(var i = 0; i < 5; i++) {
  numbers[i] = i + 1;
}
console.log(numbers); // logs [1, 2, 3, 4, 5]

var sum = numbers[0] + numbers[1] + numbers[2];
console.log(sum) // logs 6

//  thanks to the length property, we can always access the number of elements currently in the array

var total = 0;
for(var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total); // logs 15

//  Creating Arrays from Strings

var statement = "How much wood would a woodchuck chuck";
var statementArray = statement.split(' ');
console.log(statementArray) // logs ["How", "much", "wood", "would", "a", "woodchuck", "chuck"]

//  Accessor Functions
// indexOf() returns the index of the item you are looking for in the array uncless it is not in the array
// then it will return -1

var names = ['Chad', 'Jill', 'Haley', 'Emma', 'Leah', 'Eli', 'Ezra', 'Jill', 'Charli'];
console.log(names.indexOf('Tom')); // logs -1
console.log(names.indexOf('Eli')); // logs 5

//  indexOf() will always give the first occurence of the item you are looking for in the array.
console.log(names.indexOf('Jill')); // logs 1
//  lastIndexOf() will return the position of the last occurence
console.log(names.lastIndexOf('Jill')); // logs 7

// join() and toString() both return a string containing elements of the array
var namestring = names.join();
var namestring2 = names.toString();
console.log(namestring); // logs "Chad,Jill,Haley,Emma,Leah,Eli,Ezra,Jill,Charli"
console.log(namestring2); // logs "Chad,Jill,Haley,Emma,Leah,Eli,Ezra,Jill,Charli"

// concat() joins two arrays together.  It is done by calling the function from an existing array with its 
//  argument being another existing array.
var names1 = ['Chad', 'Jill', 'Haley', 'Emma', 'Leah', 'Eli', 'Ezra', 'Jill', 'Charli'];
var names2 = ['David', 'Victor', 'Debbie', 'Genevieve'];
var namesJoined = names1.concat(names2);
console.log(namesJoined); // logs ["Chad", "Jill", "Haley", "Emma", "Leah", "Eli", "Ezra", "Jill", "Charli", "David", "Victor", "Debbie", "Genevieve"]





