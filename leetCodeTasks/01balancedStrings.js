//https://leetcode.com/problems/split-a-string-in-balanced-strings

/**
 * @param {string}
 * @return {number}
 */
var balancedStringSplit = function (word) {
  let balance = 0;
  let r = 0;
  let l = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === "R") {
      r++;
    } else {
      l++;
    }
    if (r === l) {
      balance++;
      r = l = 0;
    }
  }

  return balance;
};

console.log(balancedStringSplit("RLRRLLRLRL"));
console.log(balancedStringSplit("LLLLRRRR"));
