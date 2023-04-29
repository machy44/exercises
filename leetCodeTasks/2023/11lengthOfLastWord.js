// https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  if (!s.length) return 0;
  let wordLength = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ' && wordLength !== 0) {
      break;
    }
    if (s[i] !== ' ') {
      wordLength += 1;
    }
  }
  return wordLength;
};

console.log(lengthOfLastWord('Hello World')); // 5
console.log(lengthOfLastWord('   fly me   to   the moon  ')); // 4
console.log(lengthOfLastWord('luffy is still joyboy')); // 6
console.log(lengthOfLastWord('a')); // 1
