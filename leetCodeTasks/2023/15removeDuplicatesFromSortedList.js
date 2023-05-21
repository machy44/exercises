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
  let current = head;

  while (head.next !== null) {
    // console.log(head.next);
    if (head.val !== head.next.val) {
      head = head.next;
    }
    head = head.next;
  }
  return current.next;
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
