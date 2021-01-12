//doubly linked list implementation (with hash table)

const LinkedList = require('../DoublyLinkedList.solution');
function removeDuplicates(linkedList) {
	//what kind of data can we assume from the linked list? is it always a string?

	const hashTable = {};
	let currentNode = linkedList.head;

	while (currentNode) {
		//if the current node is in the hash table, delete it
		if (hashTable[currentNode.data]) {
			if (currentNode.prev) currentNode.prev.next = currentNode.next;
			if (currentNode.next) currentNode.next.prev = currentNode.prev;
			linkedList.length--;
		}
		//else add the current node to the hash table
		else hashTable[currentNode.data] = true;
		//if next node is not defined end the loop
		currentNode = currentNode.next;
	}
	return linkedList;
}
