// https://leetcode.com/problems/convert-callback-based-function-to-promise-based-function/

/**
 * @param {Function} fn
 * @return {Function<Promise<number>>}
 */
var promisify = function (fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      const handleValueAndError = (value, error) => {
        if (error) {
          reject(error);
        } else {
          resolve(value);
        }
      };

      fn(handleValueAndError, ...args);
    });
  };
};

const asyncFunc = promisify((callback) => callback(42));
// asyncFunc().then(console.log); // 42

const example1 = (callback, a, b, c) => {
  return callback(a * b * c);
};
const promisifed = promisify(example1);

// promisifed(1, 2, 3).then(console.log);

const example2 = (callback, a, b, c) => {
  callback(a * b * c, 'Promise Rejected');
};

const promisifed1 = promisify(example2);

promisifed1(1, 2, 3).then(console.log);
