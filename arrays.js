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

var total = 0;
for(var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total); // logs 15




