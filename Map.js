//Map -Create a new array by doing something with each item in an array.

let numbers = [3, 56, 2, 48, 5];

function double(x) {
  return x * 2;
}

const newNumbersAngelaStyle = numbers.map(double);
console.log(newNumbersAngelaStyle); //[6, 112, 4, 96, 10]

//Older version
const newNumbersOldVersion = numbers.map(function (x) {
  return x * 2;
});
console.log(newNumbersOldVersion); //[6, 112, 4, 96, 10]

//Newest version
const newNumbers = numbers.map(x => x * 2);
console.log(newNumbers); //[6, 112, 4, 96, 10]
