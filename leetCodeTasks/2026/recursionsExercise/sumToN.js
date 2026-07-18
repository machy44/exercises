// Task: sum all numbers from 1 to n, recursively.
// Rules: no loops (for/while) — recursion only.
//
// Examples:
// sumToN(5) -> 15   (1+2+3+4+5)
// sumToN(1) -> 1
// sumToN(0) -> 0
//
// Hints:
// - What should the base case return when n is 0?
// - How does sumToN(n) relate to sumToN(n - 1)?

var sumToN = function(n) {
 if(n === 0) return 0;
 const sum = n + sumToN(n -1);
 return sum;
};

console.log(sumToN(5)); // expect 15
console.log(sumToN(1)); // expect 1
console.log(sumToN(0)); // expect 0
