// Task: Insert a node at the end of a linked list

function insertAtEnd(head, value) {
  let newNode = new ListNode(value);
  if (!head) return newNode;

  let current = head;
  while (current.next !== null) {
    current = current.next;
  }
  current.next = newNode;
  return head;
}