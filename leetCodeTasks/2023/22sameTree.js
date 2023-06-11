// https://leetcode.com/problems/same-tree/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// recursion

const traverse = (p, arr = [], leaf) => {
  if (!p) {
    arr.push(p);
    return p;
  }

  arr.push(p.val + (leaf || ''));
  traverse(p.left, arr, 'l');
  traverse(p.right, arr, 'r');
  return arr;
};
var isSameTree = function (p, q) {
  const arr1 = traverse(p);
  const arr2 = traverse(q);

  console.log({ arr1 });
  console.log({ arr2 });

  if (!arr1 || !arr2) {
    return arr1 === arr2;
  }

  return arr1.toString() === arr2.toString();
};

// const treeNode1 = new TreeNode(1);
// treeNode1.left = new TreeNode(2);
// treeNode1.right = new TreeNode(3);

// const treeNode2 = new TreeNode(1);
// treeNode2.left = new TreeNode(2);
// treeNode2.right = new TreeNode(3);

const treeNode1 = new TreeNode(1);
treeNode1.left = new TreeNode(1);
const treeNode2 = new TreeNode(1);
// treeNode2.left = new TreeNode(null);
treeNode2.right = new TreeNode(1);

console.log(isSameTree(treeNode1, treeNode2));
