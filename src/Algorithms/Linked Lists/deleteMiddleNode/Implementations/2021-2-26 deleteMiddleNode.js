/* 

  Given the first node of a singly linked list, implement an algorithm
  to delete the middle node of a list. If the linked list has an even
  number of nodes, delete the rightmost middle node.

*/

export default function deleteMiddleNode(node) {
  let current = node;
  let runner = current?.next;
  while (runner?.next?.next) {
    runner = runner.next.next;
    current = current.next;
  }
  current.next = current.next.next;
}
