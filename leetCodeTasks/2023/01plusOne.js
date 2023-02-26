// https://leetcode.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let increasedNumber = BigInt(digits.join('')) + BigInt(1);
  return String(increasedNumber).split('');
};
