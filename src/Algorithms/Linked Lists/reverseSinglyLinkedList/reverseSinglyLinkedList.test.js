import LinkedList from '../../../Data Structures/Linked Lists/Singly Linked List/SinglyLinkedList.solution';
import reverseSinglyLinkedList from './reverseSinglyLinkedList';

it('Should reverse a linked list, given the first node', () => {
	//init linkedList
	let linkedList = new LinkedList();
	linkedList.prepend(4);
	linkedList.prepend(3);
	linkedList.prepend(2);
	linkedList.prepend(1);
	linkedList.prepend(0);

	//validate linkedList before alteration
	expect(linkedList.get(0)?.data).toBe(0);
	expect(linkedList.get(1)?.data).toBe(1);
	expect(linkedList.get(2)?.data).toBe(2);
	expect(linkedList.get(3)?.data).toBe(3);
	expect(linkedList.get(4)?.data).toBe(4);
	//save for later (since we don't have direct access to the head)
	const node4 = linkedList.get(4);
	reverseSinglyLinkedList(linkedList.head);

	//iterate through linkedList in new order
	let currentNode = node4;
	expect(currentNode?.data).toBe(4);
	currentNode = currentNode.next;
	expect(currentNode?.data).toBe(3);
	currentNode = currentNode.next;
	expect(currentNode?.data).toBe(2);
	currentNode = currentNode.next;
	expect(currentNode?.data).toBe(1);
	currentNode = currentNode.next;
	expect(currentNode?.data).toBe(0);
	currentNode = currentNode.next;
	expect(currentNode).toBe(null);
});
