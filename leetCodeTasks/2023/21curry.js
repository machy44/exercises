//https://leetcode.com/problems/curry/

/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function (fn) {
  let prevArgs = [];
  return function curried(...args) {
    prevArgs = [...prevArgs, ...args];
    while (prevArgs.length < fn.length) {
      return curried;
    }
    return fn(...prevArgs);
  };
};

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

console.log(csum2()()(1, 2, 3));
