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

// I like this solution also because it uses while loop
//https://leetcode.com/problems/length-of-last-word/solutions/2875428/javascript-multiple-approaches-easy-to-understand/
// var lengthOfLastWord = function(s) {

//     let index = s.length - 1;
//     let output = 0;

//     while (s[index] === ' ' && index >= 0) index -= 1;

//     while (s[index] !== ' ' && index >= 0) {

//         output += 1;
//         index -= 1;

//     }
//     return output;
// };
