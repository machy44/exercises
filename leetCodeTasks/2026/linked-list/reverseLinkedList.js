// https://leetcode.com/problems/reverse-linked-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // TODO: implement iteratively (prev/curr pointers), then try recursively
  let prev = null;
  let curr = head;

  while(curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev= curr;
    curr = next;
  }
  return prev;
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

const head = buildList([1, 2, 3, 4, 5]);
const result = reverseList(head);
console.log(listToArray(result)); // expected: [5, 4, 3, 2, 1]
