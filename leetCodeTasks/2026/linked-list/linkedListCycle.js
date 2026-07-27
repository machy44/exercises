// https://leetcode.com/problems/linked-list-cycle/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// TODO: recursive approach

// implement with slow/fast (tortoise & hare) pointers // Floyd’s cycle-finding algorithm
// This algorithm is used to find a loop in a linked list. 
// It uses two pointers one moving twice as fast as the other one
// iterative approach
var hasCycle = function (head) {
  if (!head) return false;
  let slowPointer = head;
  let fastPointer = head.next;
  while (fastPointer && fastPointer.next) {
    if (fastPointer === slowPointer) {
      return true;
    }

    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;

  }
  return false;
};

// --- test setup ---
function ListNode(val) {
  this.val = val;
  this.next = null;
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

function makeCyclicAt(head, pos) {
  if (pos < 0) return head;
  let cycleNode = null;
  let curr = head;
  let i = 0;
  let tail = head;
  while (tail.next) {
    if (i === pos) cycleNode = tail;
    tail = tail.next;
    i++;
  }
  if (pos === 0) cycleNode = head;
  tail.next = cycleNode;
  return head;
}

const head1 = buildList([3, 2, 0, -4]);
makeCyclicAt(head1, 1); // cycle back to node with value 2
console.log(hasCycle(head1)); // expected: true

const head2 = buildList([1, 2]);
console.log(hasCycle(head2)); // expected: false
