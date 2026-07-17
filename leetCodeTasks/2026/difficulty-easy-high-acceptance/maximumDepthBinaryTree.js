// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// this is depth-first traversal solution
var maxDepth = function (root) {
    
  if(root === null) return 0;
  let leftSide = maxDepth(root.left);
  let rightSide = maxDepth(root.right);

  return 1 + Math.max(leftSide, rightSide);
};

console.log(maxDepth({
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}));
// console.log(maxDepth({ val: 5, left: null, right: null }));
// console.log(maxDepth([1,null,2]))

//TODO:  breadth-first traversal solution provide here