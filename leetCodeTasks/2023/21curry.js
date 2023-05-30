//https://leetcode.com/problems/curry/

/**
 * @param {Function} fn
 * @return {Function}
 */

// my solution
var curry = function (fn) {
  let prevArgs = [];
  return function curried(...args) {
    prevArgs = [...prevArgs, ...args];
    while (prevArgs.length < fn.length) {
      return curried;
    }
    let result = fn(...prevArgs);
    prevArgs = [];
    return result;
  };
};
// i like this solution better https://leetcode.com/problems/curry/solutions/3522579/currying-use-case-dry-run-beginner-friendly-o-fn-js-ts-day10/
// var curry = function (fn) {
//   return function curried(...args) {
//     if (args.length < fn.length) {
//       return function (...args2) {
//         return curried(...args, ...args2);
//       };
//     }
//     return fn(...args);
//   };
// };

function sum(a, b) {
  return a + b;
}

function sum2(a, b, c) {
  return a + b + c;
}
// const csum = curry(sum);
// console.log(csum(1)(2)); // 3

const csum2 = curry(sum2);
// console.log(csum2(1, 2)(3));
console.log(csum2(1)(2)(3));

console.log(csum2()()(1, 2, 3));
