// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

// TODO: recursion solution


// implemented with two pointers - advance "fast" n steps ahead of "slow", then move both until fast hits the end
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {

  const dummy = new ListNode(0);
  dummy.next = head;
  let fastPointer = dummy;
  let slowPointer = dummy;

  for (let i = 0; i < n; i++) {
    fastPointer = fastPointer.next;
  }

  while (fastPointer.next !== null) {
    fastPointer = fastPointer.next;
    slowPointer = slowPointer.next;
  }


  slowPointer.next = slowPointer.next.next;


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

const head = buildList([1, 2, 3, 4, 5]);
const result = removeNthFromEnd(head, 2);
console.log(listToArray(result)); // expected: [1, 2, 3, 5]
