/* 

  Given the first node of a doubly linked list,
  implement an algorithm to reverse the linked list in place.

*/

export default function reverseDoublyLinkedList(node) {
  let current = node;
  while (current) {
    const next = current.next;
    current.next = current.prev;
    current.prev = current = next;
  }
}
