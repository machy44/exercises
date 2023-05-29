// https://leetcode.com/problems/binary-tree-inorder-traversal/
//  Definition for a binary tree node.
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 1. inorder traversal
// 2. preorder traversal
// 3. postorder traversal

// recursive - solution
// var inorderTraversal = function (root, temp = []) {
//   if (!root) {
//     return;
//   }

//   inorderTraversal(root.left, temp);

//   temp.push(root.val);

//   inorderTraversal(root.right, temp);

//   return temp;
// };

// iterative
var inorderTraversal = function (root) {
  let curr = root;
  let stack = [];
  let output = [];

  while (curr !== null || stack.length > 0) {
    if (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack.pop();
      output.push(curr.val);
      curr = curr.right;
    }
  }

  return output;
};

const binTree2 = new TreeNode(1, undefined, new TreeNode(2, new TreeNode(3)));

let binTree = new TreeNode(1);
binTree.right = new TreeNode(2);
binTree.right.left = new TreeNode(3);

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// console.log(inorderTraversal(binTree));
console.log(inorderTraversal(root));
