/* 

  Implement an algorithm to remove the duplicates from a singly linked list.
	(Optionally: do so without any secondary data structure)

*/

export default function removeDuplicates(linkedList) {
  const hashTable = {[linkedList.head.data]: true};
  let current = linkedList.head;
  while (current?.next) {
    if (hashTable[current.next.data]) {
      current.next = current.next.next;
      linkedList.length--;
    } else {
      hashTable[current.next.data] = true;
      current = current.next;
    }
  }
  return linkedList;
}
