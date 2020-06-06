// my solution
let array = [1, 2, 3, 4, 4, 5, 2, 9, 7, 8, 8];

const filterValues = (param) => {
  let lookup = {};
  param.forEach((number) => {
    lookup[number] ? delete lookup[number] : (lookup[number] = 1);
  });

  return Object.keys(lookup);
};

console.log(filterValues(array));

//better solution which I found
