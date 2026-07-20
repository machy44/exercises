// Task: check whether a string is a palindrome, recursively.
// Rules: no loops (for/while), no str === str.split('').reverse().join('') shortcuts — recursion only.
//
// Examples:
// isPalindrome("racecar") -> true
// isPalindrome("a") -> true
// isPalindrome("") -> true
// isPalindrome("hello") -> false
//

var isPalindrome = function (str) {
  if (str.length <= 1) return true;
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, -1));
  }

  return false;

};

console.log(isPalindrome("racecar")); // expect true
console.log(isPalindrome("a")); // expect true
console.log(isPalindrome("")); // expect true
console.log(isPalindrome("hello")); // expect false
