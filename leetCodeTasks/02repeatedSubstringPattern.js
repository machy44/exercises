// https://leetcode.com/problems/repeated-substring-pattern/

/**
 * @param {string}
 * @return {boolean}
 */

var repeatedSubstringPattern = function (s) {
  let i = 1,
    len = s.length;
  while (i <= Math.floor(len / 2)) {
    if (s.slice(0, i).repeat(len / i) == s) return true;
    i++;
  }
  return false;
};

console.log(repeatedSubstringPattern("abab"));
console.log(repeatedSubstringPattern("aba"));
console.log(repeatedSubstringPattern("abcabcabcabc"));
console.log(repeatedSubstringPattern("ababab"));
