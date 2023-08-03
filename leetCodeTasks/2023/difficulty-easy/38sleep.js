// https://leetcode.com/problems/sleep/

/**
 * @param {number} millis
 */

const sleep = (millis) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('foo');
    }, millis);
  });

let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // 100
