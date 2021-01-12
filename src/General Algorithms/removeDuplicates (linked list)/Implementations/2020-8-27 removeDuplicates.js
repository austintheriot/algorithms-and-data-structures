const LinkedList = require('../../Linked Lists/Singly Linked List/SinglyLinkedList.solution');

//singly linked list implementation (with hash table)
function removeDuplicates(linkedList) {
	//what kind of data can we assume from the linked list? is it always a string?

	const hashTable = {};
	let currentNode = linkedList.head;
	hashTable[currentNode.data] = true;

	while (currentNode) {
		//if the next node is in the hash table, delete it & stay on current node
		if (currentNode.next && hashTable[currentNode.next.data]) {
			currentNode.next = currentNode.next.next;
			linkedList.length--;
		}
		//else add the next node to the hash table & move to next node
		else if (currentNode.next) {
			hashTable[currentNode.next.data] = true;
			currentNode = currentNode.next;
		}
		//if next node is not defined end the loop
		else break;
	}
	return linkedList;
}
