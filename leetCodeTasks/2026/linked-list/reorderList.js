// https://leetcode.com/problems/reorder-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  // TODO: 1) find the middle with slow/fast pointers
  //       2) reverse the second half
  //       3) merge the two halves alternately
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

const head1 = buildList([1, 2, 3, 4]);
reorderList(head1);
console.log(listToArray(head1)); // expected: [1, 4, 2, 3]

const head2 = buildList([1, 2, 3, 4, 5]);
reorderList(head2);
console.log(listToArray(head2)); // expected: [1, 5, 2, 4, 3]
