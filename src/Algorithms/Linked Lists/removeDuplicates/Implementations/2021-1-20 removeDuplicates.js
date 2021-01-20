/* 

  Implement an algorithm to remove the duplicates from a singly linked list.
  (Optionally: do so without any secondary data structure)

*/

export default function removeDuplicates(linkedList) {
	const hashTable = { [linkedList.head.data]: true };
	let prev = linkedList.head;
	let current = linkedList.head.next;
	while (current) {
		if (hashTable[current.data]) {
			prev.next = prev.next.next;
			linkedList.length--;
		} else hashTable[current.data] = true;
		prev = current;
		current = current.next;
	}
	return linkedList;
}
