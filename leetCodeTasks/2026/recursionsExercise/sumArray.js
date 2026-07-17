// Task: sum all numbers in an array recursively.
// Rules: no loops (for/while), no .reduce, no .sum — recursion only.
//
// Examples:
// sumArray([1,2,3,4]) -> 10
// sumArray([5]) -> 5
// sumArray([]) -> 0
//
// Hints:
// - What should the base case return when the array is empty?
// - arr[0] is "the current item". arr.slice(1) is "everything else" (a smaller version of the same problem).

var sumArray = function (arr) {
  let counter = 0;
  if (arr.length === 0) return 0;
  counter = arr[0] + sumArray(arr.slice(1));
  return counter;
};

console.log(sumArray([1, 2, 3, 4])); // expect 10
console.log(sumArray([5])); // expect 5
console.log(sumArray([])); // expect 0
console.log(sumArray([0,5,3]));
