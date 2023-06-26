// https://leetcode.com/problems/interval-cancellation/
const { performance } = require('perf_hooks');

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

// I had to take a look. I didnt understand explanation
var cancellable = function (fn, args, t) {
  let countInterval = t;
  let intervalId = null;
  const getResult = fn(...args);

  intervalId = setInterval(() => {
    fn(...args);
  }, t);

  return () => {
    return clearInterval(intervalId);
  };
};

const result = [];
const fn = (x) => x * 2;
const args = [4],
  t = 20,
  cancelT = 110;

const start = performance.now();
const log = (...argsArr) => {
  const val = fn(...argsArr);
  result.push({
    time: Math.floor(performance.now() - start),
    returned: fn(...argsArr),
  });
};
const cancel = cancellable(log, args, t);

setTimeout(() => {
  cancel();
  console.log(result); // [
  //      {"time":0,"returned":8},
  //      {"time":20,"returned":8},
  //      {"time":40,"returned":8},
  //      {"time":60,"returned":8},
  //      {"time":80,"returned":8},
  //      {"time":100,"returned":8}
  //  ]
}, cancelT);
