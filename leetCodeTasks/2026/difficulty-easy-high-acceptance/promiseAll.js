// https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/description/

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  console.log("🚀 ~ promiseAll ~ functions:", functions.length);

  return new Promise((resolve, reject) => {
    let results = [];
    let completedCount = 0;

    const promises = functions.map(fn => fn());

    promises.forEach((promise, index) => {
      promise.then(value => {
        results[index] = value;
        completedCount += 1;
        if (completedCount === functions.length) {
          resolve(results);
        }
      },
        error => {
          reject(error);
        }
      );
    });
  });
};


// const promise = promiseAll([() => new Promise(res => {
//   console.log({res});
//   return res(42);
// })]);
// promise.then(console.log); // [42]


// const promise = promiseAll([
//   () => new Promise(resolve => setTimeout(() => resolve(5), 200))
// ])

// functions = [
//   () => new Promise(resolve => setTimeout(() => resolve(1), 200)),
//   () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
// ];


functions = [
  () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
  () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
  () => new Promise(resolve => setTimeout(() => resolve(16), 100))
];

const promise = promiseAll(functions);

promise.then(console.log);

