//Reduce - Accumulate a value by doing something to each item in an array.
let numbers = [3, 56, 2, 48, 5];

// let newNumber = 0;

// numbers.forEach(function(currentNumber){
//   // newNumber += currentNumber
//   newNumber = newNumber + currentNumber
// })

let newNumber = numbers.reduce(function (accumulator, currentNumber) {
  console.log("accumulator = " + accumulator);
  console.log("currentNumber =" + currentNumber);
  return accumulator + currentNumber;
});
console.log(newNumber);

let newNumbers = numbers.reduce((accumulator, currentNumber) => {
  accumulator + currentNumber;
});
console.log(newNumbers);

//accumulator = equivalent to previous number
//currentNumber will 3,56,2,48,5
