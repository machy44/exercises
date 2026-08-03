// Task: Find the length of a linked list

function getLength(head) {
  let length = 0;
  let current = head;
  while (current !== null) {
    length++;
    current = current.next;
  }
  return length;
}