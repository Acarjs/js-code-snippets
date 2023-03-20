//Find - find the first item that matches from an array.
//FindIndex - find the index of the first item that matches.

var numbers = [3, 56, 2, 48, 5];

const newNumber = numbers.find((num) => num > 10);
console.log(newNumber); //56(only first item!!!)

const newNumbers = numbers.findIndex((no) => no > 10);
console.log(newNumbers); // 1(only fist's item index!!!)
