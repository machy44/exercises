// https://leetcode.com/problems/merge-two-sorted-lists/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// TODO: recursive way
// iterative way
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(0);
  let tail = dummy;
  let p1 = list1;
  let p2 = list2;
  while (p1 !== null && p2 !== null) {
    if(p1.val <= p2.val) {
      tail.next = p1;
      tail = tail.next;
      p1 = p1.next
    } else if(p1.val > p2.val) {
      tail.next = p2;
      tail = tail.next;
      p2 = p2.next;
    }

  }

  tail.next = p1 !== null ? p1 : p2;

  return dummy.next;

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

// const list1 = buildList([1, 2]);
// const list2 = buildList([1, 2]);
const list1 = buildList([1, 2, 4]);
const list2 = buildList([1, 2, 4]);
const result = mergeTwoLists(list1, list2);
console.log(listToArray(result)); // expected: [1, 1, 2, 3, 4, 4]
