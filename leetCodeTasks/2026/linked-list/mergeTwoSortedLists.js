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
var mergeTwoLists = function (list1, list2) {
  console.log("🚀 ~ mergeTwoLists ~ list2:", list2);
  console.log("🚀 ~ mergeTwoLists ~ list1:", list1);
  // TODO: implement with a dummy head + tail pointer, picking the smaller of list1/list2 each step
  let dummy = new ListNode(0);

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

const list1 = buildList([1, 2, 4]);
const list2 = buildList([1, 3, 4]);
const result = mergeTwoLists(list1, list2);
console.log(listToArray(result)); // expected: [1, 1, 2, 3, 4, 4]
