/* 

  Implement an algorithm to remove the duplicates from a singly linked list.
  (Optionally: do so without any secondary data structure)
  Return the linked list.

*/

export default function removeDuplicates(linkedList) {
  let current = linkedList.head;
  const hashtable = { [current?.data]: true };
  while (current?.next) {
    if (!hashtable[current.next.data]) {
      hashtable[current.next.data] = true;
      current = current.next;
    } else {
      current.next = current.next.next;
      linkedList.length--;
    }
  }
  return linkedList;
}
