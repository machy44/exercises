// https://leetcode.com/problems/reverse-linked-list/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let stack = [];
  let reversedList = new ListNode(-1);
  let dummyHead = reversedList;
  while (head) {
    stack.push(head.val);
    head = head.next;
  }
  for (let i = stack.length - 1; i >= 0; i--) {
    dummyHead.next = new ListNode(stack[i]);
    dummyHead = dummyHead.next;
  }

  return reversedList.next;
};

const list = new ListNode(1, new ListNode(2, new ListNode(3)));

console.log(reverseList(list));
