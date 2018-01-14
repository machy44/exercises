
function sym(args) {
  let receivedArrays = Object.values(arguments);
  let symmetricDiff = receivedArrays.reduce((a, b) => {
    let symmetric = a.filter((num) => {
      return b.indexOf(num) === -1;
    });
    b.filter((num) => {
      if(a.indexOf(num) === -1) symmetric.push(num);
    });
  return symmetric;
  });

  symmetricDiff = symmetricDiff.filter((num, index, array) => {
    return symmetricDiff.indexOf(num) === index;
  });
  return symmetricDiff;
}
console.log(
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]),
//sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]),
//sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])
);
