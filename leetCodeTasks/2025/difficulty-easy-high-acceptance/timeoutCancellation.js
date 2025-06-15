// https://leetcode.com/problems/timeout-cancellation/

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

// const cancellable = function (fn, args, t) {

//   const timer = setTimeout(() => {
//     console.log(fn(...args));
//   }, t);

//   const cancelFn = function () {
//     clearTimeout(timer);
//   };

//   return cancelFn;
// };


// const cancelFn = cancellable((x) => x * 5, [2]);
// console.log(setTimeout(cancelFn, 50));
// console.log(cancelFn())


// timeout has also third parameter 

var cancellable = function(fn, args, t) {
  const timerId = setTimeout(fn, t, ...args);
  const cancelFn = () => {
      clearTimeout(timerId);
  }
  return cancelFn;
};

const cancelFn = cancellable((x) => x * 5, [2], 20);

setTimeout(cancelFn, 50);


// 3rd solutiuon /** with boolean flag

// var cancellable = function(fn, args, t) {
//  let isCancelled = false;
//  setTimeout(() => {
//      if(!isCancelled)
//          fn(...args);
//  }, t);

//  return () => {
//    isCancelled = true;
//  };
// }