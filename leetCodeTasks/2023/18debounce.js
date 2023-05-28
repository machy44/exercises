// https://leetcode.com/problems/debounce/

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
  let timeoutId = null;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => fn(...args), t);
  };
};

const log = debounce(console.log, 1000);
console.log({ log });
log('Hello'); // cancelled
log('Hello 2'); // cancelled
log('Hello 3'); // Logged at t=100ms
