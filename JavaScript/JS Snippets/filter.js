//Filter - Create a new array by keeping the items that return true.

let numbers = [3, 56, 2, 48, 5];

//Newest version
const newNumbers = numbers.filter((number) => number < 10);
console.log(newNumbers); //[2,3,5]

//forEach
var newNumbersForEach = [];
numbers.forEach(function (num) {
  if (num < 10) {
    newNumbers.push(num);
  }
});
console.log(newNumbersForEach); //[2,3,5]
