// https://leetcode.com/problems/find-the-degree-of-each-vertex/description/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function (matrix) {
  const output = [];

  for (let i = 0; i < matrix.length; i++) {
    const arrayInMatrix = matrix[i];

    let storeVertex = 0;

    for (let j = 0; j < arrayInMatrix.length; j++) {
      const element = arrayInMatrix[j];

      storeVertex += element;

    }

    console.log({ storeVertex });
    output.push(storeVertex);

  }
  return output;
};


console.log(findDegrees([[0, 1, 1], [1, 0, 1], [1, 1, 0]])); // [2,2,2]
console.log(findDegrees([[0,1,0],[1,0,0],[0,0,0]])); // [1,1,0]
console.log(findDegrees([[0]]));