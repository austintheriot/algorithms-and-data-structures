import LinkedList from '../../../Data Structures/Linked Lists/Doubly Linked List/DoublyLinkedList.solution';
import reverseDoublyLinkedList from './reverseDoublyLinkedList';

it('Should reverse a doubly linked list, given the first node', () => {
	//init linkedList
	let linkedList = new LinkedList();
	linkedList.prepend(4);
	linkedList.prepend(3);
	linkedList.prepend(2);
	linkedList.prepend(1);
	linkedList.prepend(0);

	//save for later (since we shouldn't assume we have direct access to the head)
	const node4 = linkedList.get(4);
	reverseDoublyLinkedList(linkedList.head);

	//iterate through linkedList in new order
	let currentNode = node4;
	expect(currentNode?.prev).toBe(null);
	expect(currentNode?.data).toBe(4);
	currentNode = currentNode.next;
	expect(currentNode?.prev?.data).toBe(4);
	expect(currentNode?.data).toBe(3);
	currentNode = currentNode.next;
	expect(currentNode?.prev?.data).toBe(3);
	expect(currentNode?.data).toBe(2);
	currentNode = currentNode.next;
	expect(currentNode?.prev?.data).toBe(2);
	expect(currentNode?.data).toBe(1);
	currentNode = currentNode.next;
	expect(currentNode?.prev?.data).toBe(1);
	expect(currentNode?.data).toBe(0);
	expect(currentNode.next).toBe(null);
});
