// https://leetcode.com/problems/merge-two-sorted-lists
// pros and cons
// An advantage of Linked Lists Nodes can easily be removed or added from
// a linked list without reorganizing the entire data structure.
// This is one advantage it has over arrays.
// Search operations are slow in linked lists. Unlike arrays,
// random access of data elements is not allowed. Nodes are accessed sequentially starting from the first node.
// It uses more memory than arrays because of the storage of the pointers.

//useful if you want to add or delete data.
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// this is accepted solution but I dont like it. Take a look on other solutions
var mergeTwoSortedLists = function (list1, list2) {
  let current1 = list1;
  let current2 = list2;
  let sorted = [];
  let newList = null;
  while (current1 !== null) {
    if (current2 === null || current1.val <= current2.val) {
      sorted.push(current1.val);
      current1 = current1.next;
      continue;
    }
    if (current2.val < current1.val) {
      sorted.push(current2.val);
      current2 = current2.next;
      continue;
    }
  }

  while (current2 !== null) {
    sorted.push(current2.val);
    current2 = current2.next;
  }

  for (let i = sorted.length - 1; i >= 0; i--) {
    const value = sorted[i];
    newList = {
      val: value,
      next: newList,
    };
  }

  return newList;
};

// const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
// const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

const list1 = new ListNode(5, new ListNode(10, new ListNode(15)));
// const list1 = new ListNode(5, new ListNode(10));
// const list2 = new ListNode(2, new ListNode(3, new ListNode(20)));
const list2 = new ListNode(2, new ListNode(3));

// console.log(mergeTwoSortedLists(new ListNode(), new ListNode(0)));
// console.log(mergeTwoSortedLists([], [0]));
console.log(mergeTwoSortedLists(list1, list2));

// other solutions

// with recursion https://leetcode.com/problems/merge-two-sorted-lists/solutions/2705782/js-recursion-with-exlanation/
// with loop https://leetcode.com/problems/merge-two-sorted-lists/solutions/9963/simple-javascript-solution/
