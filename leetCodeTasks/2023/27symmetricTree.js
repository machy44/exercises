// https://leetcode.com/problems/symmetric-tree/

// traverse tree:
// commonly used Breadth-first search (BFS) and Depth-first Search (DFS)
// depth-first search algorithms:
// 1. inorder traversal (left -> root -> right)
// 2. preorder traversal (root -> left -> right)
// 3. postorder traversal (left -> right -> root)

// reverse traverse is for example:
// 1. inorder traversal (right -> root -> left)

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function isMirror(t1, t2) {
  if (t1 == null && t2 == null) return true;
  if (t1 == null || t2 == null) return false;
  return (
    t1.val == t2.val &&
    isMirror(t1.right, t2.left) &&
    isMirror(t1.left, t2.right)
  );
}

var isSymmetric = function (root) {
  return isMirror(root.left, root.right);
};

const test = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(2, new TreeNode(4), new TreeNode(3))
);

// const test = new TreeNode(
//   1,
//   new TreeNode(2, new TreeNode(2)),
//   new TreeNode(2, null, new TreeNode(2))
// );

console.log(isSymmetric(test));
