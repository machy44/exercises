// https://leetcode.com/problems/fizz-buzz/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let res = [];
  for (let i = 1; i <= n; i++) {
    let text = '';
    if (i % 3 === 0) {
      text = 'Fizz';
    }
    if (i % 5 === 0) {
      text += 'Buzz';
    }
    res.push(text || String(i));
  }
  return res;
};

// console.log(fizzBuzz(3));
// console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
