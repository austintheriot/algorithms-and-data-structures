import LinkedList from '../../../Data Structures/Linked Lists/Singly Linked List/SinglyLinkedList.solution';
import removeDuplicates from './removeDuplicates';

it('Should remove all duplicate strings from the Linked List', () => {
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

it('Should remove all duplicate 0s', () => {
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

	//For logging data inside of linkedList:
	let currentNode = filteredLinkedList.head;
	let array = [];
	while (currentNode) {
		array.push(currentNode.data);
		currentNode = currentNode.next;
	}
	console.log('LinkedList Data: ', array);
});
