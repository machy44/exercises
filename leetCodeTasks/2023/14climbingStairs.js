//https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
// had to memoize it because of Time Limit Exceeded error in leetcode
var climbStairs = ((memoize = {}) =>
  function fibonacci(n) {
    if (memoize[n]) return memoize[n];

    return (memoize[n] = fibonacci(n - 1) + fibonacci(n - 2));
  })({
  0: 1,
  1: 1,
  2: 2,
});

// provided solution
// var climbStairs = function (n) {
//   let count = [];
//   count[0] = 0;
//   count[1] = 1;
//   count[2] = 2;
//   for (let i = 3; i <= n; ++i) {
//     count[i] = count[i - 1] + count[i - 2];
//   }

//   return count[n];
// };

// console.log(climbStairs(2));
//1. 1 step + 1 step
// 2. 2 steps
// console.log(climbStairs(3));
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// // 3. 2 steps + 1 step
console.log(climbStairs(5));
console.log(climbStairs(10));
// console.log(climbStairs(20));
// console.log(climbStairs(44));
