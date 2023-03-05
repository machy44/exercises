// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */

const validPairs = ['()', '{}', '[]'];
var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (!stack.length) {
      stack.push(element);
      continue;
    }
    const prevElement = stack[stack.length - 1];
    if (validPairs.includes(`${prevElement}${element}`)) {
      stack.pop();
    } else {
      stack.push(element);
    }
  }

  return stack.length ? false : true;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('[()]{}')); // valid
// console.log(isValid('([]{})')); // valid
