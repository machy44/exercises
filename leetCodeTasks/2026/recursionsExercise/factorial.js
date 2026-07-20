// Task: compute the factorial of a number, recursively.
// Rules: no loops (for/while) — recursion only.
//
// Examples:
// factorial(0) -> 1
// factorial(1) -> 1
// factorial(5) -> 120

var factorial = function (n) {
  if(n === 1 || n === 0) return 1;

  return n * factorial(n -1);

};

console.log(factorial(0)); // expect 1
console.log(factorial(1)); // expect 1
console.log(factorial(5)); // expect 120
console.log(factorial(3)); // expect 6
