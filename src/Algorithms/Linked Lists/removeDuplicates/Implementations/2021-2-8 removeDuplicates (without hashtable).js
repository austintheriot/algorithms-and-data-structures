/* 

  Implement an algorithm to remove the duplicates from a singly linked list.
  (Optionally: do so without any secondary data structure)
  Return the linked list.

*/

export default function removeDuplicates(linkedList) {
  let current = linkedList.head;
  while (current) {
    let runner = current;
    while (runner.next) {
      if (runner.next.data === current.data) {
        runner.next = runner.next.next;
        linkedList.length--;
      } else {
        runner = runner.next;
      }
    }
    current = current.next;
  }
  return linkedList;
}
