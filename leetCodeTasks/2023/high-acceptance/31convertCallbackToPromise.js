// https://leetcode.com/problems/convert-callback-based-function-to-promise-based-function/

/**
 * @param {Function} fn
 * @return {Function<Promise<number>>}
 */
var promisify = function (fn) {
  return async function (...args) {
    return fn((res, err) => {
      if (err) throw err;
      return res;
    }, ...args);
  };
};

const asyncFunc = promisify((callback) => callback(42));
// asyncFunc().then(console.log); // 42

const example1 = (callback, a, b, c) => {
  return callback(a * b * c);
};
const promisifed = promisify(example1);

promisifed(1, 2, 3).then(console.log);

// const example2 = (callback, a, b, c) => {
//   callback(a * b * c, 'Promise Rejected');
// };

// const promisifed1 = promisify(example2);

// promisifed1(1, 2, 3).then(console.log);

// dont quite understand this solution https://leetcode.com/problems/convert-callback-based-function-to-promise-based-function/solutions/3781188/simple-solution/
