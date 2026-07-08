// https://leetcode.com/problems/add-two-promises/description/

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  const res = await promise1;
  const res2 = await promise2;

  return Promise.resolve(res + res2);
};


addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4

addTwoPromises(new Promise(resolve => setTimeout(() => resolve(10), 50)), new Promise(resolve => setTimeout(() => resolve(-12), 30))
).then(console.log); // -2
