function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5)); // [1, 2, 3, 4, 5]

// countup(5);
// const countArray = countup(4);
// const countArray = countup(3);
// const countArray = countup(2);
// const countArray = countup(1);
// const countArray = []; or countup(0)

// after we reached countup(0) countArray=[] will be created and then countup(1), countup(2), countup(3), countup(4) and countup(5) will be executed.

//At first, this seems counterintuitive since the value of n decreases, but the values in the final array are increasing. This happens because the push happens last, after the recursive call has returned. At the point where n is pushed into the array, countup(n - 1) has already been evaluated and returned [1, 2, ..., n - 1].
