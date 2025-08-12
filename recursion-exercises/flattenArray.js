// Write a recursive function flattenArray that:

// Takes an array, which may contain nested arrays of any depth.

// Returns a new array with all values flattened into a single level.

// You cannot use .flat() or loops — only recursion.

// this is my solution and it works
// const flattenArray = (array, flatten = []) => {
//   if(array.length === 0) return []

//   for (let i = 0; i < array.length; i++) {
//     if (!Array.isArray(array[i])) {
//       flatten.push(array[i]);
//     } else {
//       flattenArray(array[i], flatten);
//     }

//   }
//   return flatten;
// };

// but it has to be strictly recursive


const flattenArray = (array) => {
  if (array.length === 0) return [];

  const [first, ...rest] = array;

  if (Array.isArray(first)) {
    return [...flattenArray(first), ...flattenArray(rest)];
  } else {
    return [first, ...flattenArray(rest)];
  }

};

console.log(flattenArray([1, [2, [3, 4], 5]]));

// flattenArray([[1], [2, [3]], 4]) 
// → [1, 2, 3, 4]

// flattenArray([1, 2, 3]) 
