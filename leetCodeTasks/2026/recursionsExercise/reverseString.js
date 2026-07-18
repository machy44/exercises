// Task: reverse a string, recursively.
// Rules: no loops (for/while), no [...str].reverse().join('') shortcuts — recursion only.
//
// Examples:
// reverseString("hello") -> "olleh"
// reverseString("a") -> "a"
// reverseString("") -> ""
//
// Hints:
// - What should the base case return for an empty string?
// - str[0] is the first character. str.slice(1) is "everything else" (a smaller version of the same problem).
// - Where should the first character end up in the final reversed string — start, or end?

// peel from the end
// var reverseString = function(str) {
//   if(str.length === 0) return "";

//   const lastElement = str[str.length - 1];

//   return lastElement + reverseString(str.slice(0, -1))

// };

// peel from the front
// var reverseString = function(str) {
//     if(str.length === 0) return "";

//     const firstElement = str[0];

//     return reverseString(str.slice(1)) + firstElement;

//   };

// tail recursion
var reverseString = function (str) {


  const reverse = (str, acc) => {
    if(str.length === 0) return acc;
    return reverse(str.slice(0, -1), acc + str[str.length - 1])
  };

  return reverse(str, "");
};

console.log(reverseString("hello")); // expect "olleh"
console.log(reverseString("a")); // expect "a"
console.log(reverseString("")); // expect ""
