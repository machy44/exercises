//https://leetcode.com/problems/remove-duplicates-from-sorted-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  //because of testcase in leetcode
  if (head === null) return null;
  let current = head;
  let next = head.next;

  while (next !== null) {
    if (current.val === next.val) {
      current.next = next.next;
    } else {
      current = current.next;
    }
    next = next.next;
  }
  return head;
};

const first = new ListNode(1, new ListNode(1, new ListNode(2, null)));
const second = new ListNode(
  1,
  new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3, null))))
);

// console.log(JSON.stringify(deleteDuplicates(first)));
console.log(JSON.stringify(deleteDuplicates(second)));

// [1,1,2]
// [1,1,2,3,3]
