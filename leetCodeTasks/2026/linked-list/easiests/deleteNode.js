// Task: Delete the first occurrence of a node with a given value

function deleteNode(head, value) {
  if (!head) return null;
  if (head.val === value) return head.next;

  let current = head;
  while (current.next !== null && current.next.val !== value) {
    current = current.next;
  }
  if (current.next !== null) {
    current.next = current.next.next;
  }
  return head;
}