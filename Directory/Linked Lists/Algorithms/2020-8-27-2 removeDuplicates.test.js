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

test('Should remove all duplicate strings from the Linked List', () => {
	const linkedList = new LinkedList();
	linkedList
		.prepend('0')
		.prepend('100')
		.prepend('1')
		.prepend('0')
		.prepend('2')
		.prepend('3')
		.prepend('1');

	expect(linkedList.length).toBe(7);
	expect(linkedList.find('0').data).toBe('0');
	expect(linkedList.find('1').data).toBe('1');
	expect(linkedList.find('2').data).toBe('2');
	expect(linkedList.find('3').data).toBe('3');
	expect(linkedList.find('100').data).toBe('100');

	const filteredLinkedList = removeDuplicates(linkedList);
	expect(filteredLinkedList.length).toBe(5);
	expect(filteredLinkedList.find('0').data).toBe('0');
	expect(filteredLinkedList.find('1').data).toBe('1');
	expect(filteredLinkedList.find('2').data).toBe('2');
	expect(filteredLinkedList.find('3').data).toBe('3');
	expect(filteredLinkedList.find('100').data).toBe('100');
});

test('Should remove all duplicate 0s', () => {
	const linkedList = new LinkedList();
	linkedList
		.prepend(0)
		.prepend(0)
		.prepend(0)
		.prepend(0)
		.prepend(0)
		.prepend(0)
		.prepend(0);

	expect(linkedList.length).toBe(7);
	expect(linkedList.find(0).data).toBe(0);

	const filteredLinkedList = removeDuplicates(linkedList);
	expect(filteredLinkedList.length).toBe(1);
	expect(filteredLinkedList.find(0).data).toBe(0);
});
