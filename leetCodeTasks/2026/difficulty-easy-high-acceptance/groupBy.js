// https://leetcode.com/problems/group-by/description/

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    const hashMap = {};

    for (let i = 0; i < this.length; i++) {
        const key = fn(this[i]);
        console.log(key);
        if (!hashMap[key]) {
            hashMap[key] = [];
        }
        hashMap[key].push(this[i]);
    }
    return hashMap;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

console.log([1, 2, 3].groupBy(String)) // {"1":[1],"2":[2],"3":[3]}

// console.log([
//   {"id":"1"},
//   {"id":"1"},
//   {"id":"2"}
// ].groupBy(item => item.id)); // {"1":[{"id":"1"},{"id":"1"}],"2":[{"id":"2"}]}

// console.log([[1, 2, 3],
// [1, 3, 5],
// [1, 5, 9]].groupBy(function (list) {
//     return String(list[0])
// })); //{ "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]] }

// console.log(
//     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].groupBy(function (n) {
//        return String(n > 5);
//     })
// ); 
// {
//   "true": [6, 7, 8, 9, 10],
//   "false": [1, 2, 3, 4, 5]
// }

console.log(
    ["one", "two", "three"].groupBy(function (s) {
        return String(s.length);
    })
);