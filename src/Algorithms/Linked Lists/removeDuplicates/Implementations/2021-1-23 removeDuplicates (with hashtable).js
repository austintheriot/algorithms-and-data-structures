/* 

  Implement an algorithm to remove the duplicates from a singly linked list.
	(Optionally: do so without any secondary data structure)

*/

export default function removeDuplicates(linkedList) {
  let current = linkedList.head;
  const hashTable = { [current.data]: true };
  while (current.next) {
    if (!hashTable[current.next.data]) {
      hashTable[current.next.data] = true;
      current = current.next;
    } else {
      current.next = current.next.next;
      linkedList.length--;
    }
  }
  return linkedList;
}
