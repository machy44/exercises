// https://www.freecodecamp.org/challenges/symmetric-difference
/*Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) 
of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}),
 the mathematical term "symmetric difference" of two sets is the set
  of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}).
   For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with
 elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4})*/


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
