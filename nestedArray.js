
// const flatten = (arr) => {
//   const res = [];

//   arr.forEach((element) => {
//     if (Array.isArray(element)) {
//       res.push(...flatten(element)); // ✅ spread the result
//     } else {
//       res.push(element);
//     }
//   });

//   return res;
// };

const flatten = (arr) => {
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flatten(val) : val);
  }, []);
};

const nestedArray = [2, 1, [2, 3, [4, 5, 6]], [7, 8]];
// const nestedArray = [2, 1, [2, 3]];

console.log(flatten(nestedArray));