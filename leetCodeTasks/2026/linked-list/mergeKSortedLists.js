// https://leetcode.com/problems/merge-k-sorted-lists/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  // TODO: try two approaches -
  //   1) reuse mergeTwoLists and fold the array pairwise/sequentially
  //   2) push all vals into an array, sort, rebuild the list
  // then think about which is more efficient and why
};

// --- test setup ---
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

function buildList(arr) {
  let dummy = new ListNode(0);
  let curr = dummy;
  for (const v of arr) {
    curr.next = new ListNode(v);
    curr = curr.next;
  }
  return dummy.next;
}

function listToArray(head) {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
}

const lists = [
  buildList([1, 4, 5]),
  buildList([1, 3, 4]),
  buildList([2, 6]),
];
const result = mergeKLists(lists);
console.log(listToArray(result)); // expected: [1, 1, 2, 3, 4, 4, 5, 6]
