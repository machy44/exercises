// https://leetcode.com/problems/reorder-list/description/

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let slowPointer = head;
  let fastPointer = head;
  // 1) find the middle with slow/fast pointers
  while (fastPointer !== null && fastPointer.next !== null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  };

  // 2) reverse the second half
  let prev = null;
  let curr = slowPointer.next;
  slowPointer.next = null; // Break the list into two halves
  

  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // 3) merge the two halves alternately
  let firstHalf = head;
  let secondHalf = prev;

  while (secondHalf !== null) {
    let temp1 = firstHalf.next; // Save next node of first half
    let temp2 = secondHalf.next; // Save next node of second half
  
    firstHalf.next = secondHalf; // Link first half to second half
    secondHalf.next = temp1; // Link second half to the next node of first half
  
    firstHalf = temp1; // Move first pointer forward
    secondHalf = temp2; // Move second pointer forward
  }
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

// const head1 = buildList([1, 2, 3, 4]);
// reorderList(head1);
// console.log(listToArray(head1)); // expected: [1, 4, 2, 3]

const head2 = buildList([1, 2, 3, 4, 5]);
reorderList(head2);
console.log(listToArray(head2)); // expected: [1, 5, 2, 4, 3]
