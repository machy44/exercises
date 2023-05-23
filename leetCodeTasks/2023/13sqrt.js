// https://leetcode.com/problems/sqrtx/

/**
 * @param {number} x
 * @return {number}
 */
// how to calculate?
// 1. prime number factorization
// 2. long division method
// 3. repeated substraction - this mthod works only for perfect square numbers.
// https://www.cuemath.com/algebra/square-root-1-to-100/
var mySqrt = function (x) {
  var left = 1;
  var right = Math.floor(x / 2) + 1;
  var mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (mid * mid > x) {
      right = mid - 1;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return right;
};

// console.log(mySqrt(4));
// console.log(mySqrt(8));
console.log(mySqrt(10));
