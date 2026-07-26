// https://leetcode.com/problems/remove-linked-list-elements/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// var removeElements = function (head, val) {
//   if (head === null) return null;

//   const restOfList = removeElements(head.next, val);

//   if (head.val === val) {
//     return restOfList;
//   } else {
//     head.next = restOfList;
//     return head;
//   }
// };

// --- test setup ---
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

// iteratively
var removeElements = function (head, val) {
  const dummy = new ListNode(0);
  let tail = dummy;
  let curr  = head;
  while (curr !== null) {
    if(curr.val !== val) {
      tail.next = curr;
      tail = curr;
    }
    curr = curr.next;
  }

  tail.next = null;

  return dummy.next;
};



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

const head = buildList([1, 2, 6, 3, 4, 5, 6]);
// const head = buildList([6, 1, 6]);
const val = 6;
const result = removeElements(head, val);
console.log(listToArray(result)); // expected: [1, 2, 3, 4, 5]