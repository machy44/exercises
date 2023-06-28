// https://leetcode.com/problems/infinite-method-object/

/**
 * @return {Object}
 */
var createInfiniteObject = function () {
  const handler = {
    get(target, prop, receiver) {
      return () => prop;
    },
  };
  return new Proxy({}, handler);
};

/**
 * const obj = createInfiniteObject();
 * obj['abc123'](); // "abc123"
 */
const obj = createInfiniteObject();
// console.log(obj);
console.log(obj['abc123']());
