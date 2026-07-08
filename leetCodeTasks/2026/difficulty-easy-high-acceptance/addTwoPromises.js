// https://leetcode.com/problems/add-two-promises/description/

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
// var addTwoPromises = async function (promise1, promise2) {
//   const res = await promise1;
//   const res2 = await promise2;

//   return res + res2;
// };

var addTwoPromises = (promise1, promise2) => new Promise((resolve, reject) => {
    let sum = 0;
    let count = 0;

    const onResolved = (value) => {
      sum += value;
      count++;
      if (count === 2) resolve(sum);
    };

    promise1.then(onResolved).catch(reject);
    promise2.then(onResolved).catch(reject);
})



addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4

addTwoPromises(new Promise(resolve => setTimeout(() => resolve(10), 50)), new Promise(resolve => setTimeout(() => resolve(-12), 30))
).then(console.log); // -2
