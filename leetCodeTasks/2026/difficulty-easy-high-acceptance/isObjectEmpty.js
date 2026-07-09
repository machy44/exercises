// https://leetcode.com/problems/is-object-empty/

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    return !Object.keys(obj).length;
};


// console.log(isEmpty({"x": 5, "y": 42}));
// console.log(isEmpty({}));
console.log(isEmpty([null, false, 0]));
console.log(isEmpty([]));