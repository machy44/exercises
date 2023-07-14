// https://leetcode.com/problems/bind-function-to-context/

/**
 * @param {Object} obj
 * @return {Function}
 */
Function.prototype.bindPolyfill = function (obj) {
  let that = this;
  return function (...args) {
    function TempNewContextFunction() {}
    TempNewContextFunction.prototype.fn = that;

    const newContext = Object.assign(new TempNewContextFunction(), obj);

    console.log(newContext);

    return newContext.fn(...args);
  };
};

// nice article https://javascript.plainenglish.io/writing-polyfills-for-call-apply-and-bind-methods-in-javascript-13b4ba313273

// solution using call
// Function.prototype.bindPolyfill = function (obj) {
//   const context = this;
//   return function (...newArgs) {
//     return context.call(obj, ...newArgs);
//   };
// };

// function f() {
//   console.log('My context is ' + this.ctx);
// }

// const boundFunc = f.bindPolyfill({ ctx: 'My Object' });
// boundFunc();

// function f(multiplier) {
//   console.log('this.x', this.x);
//   console.log({ multiplier });
//   return this.x * multiplier;
// }

// function speak() {
//   return 'My name is ' + this.name;
// }

// const boundFunc = speak.bindPolyfill({ name: 'Kathy' });
// console.log(boundFunc());

// there is an issue because this has a lot of other props
// which will be joined together by keys function. Thats why this
// approach wont work
// Function.prototype.bindPolyfill = function (obj) {
//   let that = this;
//   return function (...args) {
//     const key = Object.keys(obj)[0];

//     this[key] = obj[key];
//     return that(...args);
//   };
// };

function keys() {
  return Object.keys(this).join(',');
}

const boundFunc = keys.bindPolyfill({ a: 1, b: 2, c: 3 });
console.log(boundFunc());
