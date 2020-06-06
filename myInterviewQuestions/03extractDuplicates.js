// my solution
let array = [1, 2, 3, 4, 4, 5, 2, 9, 7, 8, 8];

const extractDuplicates = (param) => {
  let lookup = {};
  param.forEach((number) => {
    if (lookup[number]) {
      lookup[number] += 1;
    } else {
      lookup[number] = 1;
    }
  });
  return Object.keys(lookup).filter((key) => lookup[key] > 1);
};

console.log(extractDuplicates(array));

//better solution which I found
