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

var mergeTwoLists = function (list1, list2) {
  console.log(list1);
  console.log(list2);
  const nextInList1 = list1.next;
  const nextInList2 = list2.next;
    // if(list1.val < list2.val) {

    // }

    if(list2.val > list1.val) {
        list
    }

  //   console.log(list1.next.val);
};

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

// const list1 = new ListNode(5, new ListNode(10, new ListNode(15)));
// const list2 = new ListNode(2, new ListNode(3, new ListNode(20)));

console.log(mergeTwoLists(list1, list2));
// console.log(mergeTwoLists([], []));
// console.log(mergeTwoLists([], [0])),
