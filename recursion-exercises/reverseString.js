// Write a recursive function called reverseString

// Takes a string as input.

// Returns the same string but reversed.

// You cannot use .reverse() or loops — only recursion.

const reverseString = (input) => {
  // if (input.length === 1) return input; I had this solution but this didnt work with empty string
  if (input.length <= 1) return input;

  return input[input.length - 1] + reverseString(input.slice(0, -1));
};


// console.log(reverseString("hello")); // olleh
// console.log(reverseString("abc"));   // → "cba"
// console.log(reverseString("racecar")); // "racecar"

console.log(reverseString(""))
