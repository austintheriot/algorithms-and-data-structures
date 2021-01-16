import LinkedList from '../../../Data Structures/Linked Lists/Singly Linked List/SinglyLinkedList.solution';
import deleteMiddleNode from './deleteMiddleNode';

describe('Delete Middle Node', () => {
	it('Should delete the middle node of a singly linked list', () => {
		//odd number of nodes
		let linkedList = new LinkedList();
		linkedList.prepend(4);
		linkedList.prepend(3);
		linkedList.prepend(2);
		linkedList.prepend(1);
		linkedList.prepend(0);

		expect(linkedList.get(1)?.data).toBe(1);
		expect(linkedList.get(2)?.data).toBe(2);
		expect(linkedList.get(3)?.data).toBe(3);
		deleteMiddleNode(linkedList.head);
		expect(linkedList.get(1)?.data).toBe(1);
		expect(linkedList.get(2)?.data).toBe(3);
		expect(linkedList.get(3)?.data).toBe(4);

		//even number of nodes
		linkedList = new LinkedList();
		linkedList.prepend(5);
		linkedList.prepend(4);
		linkedList.prepend(3);
		linkedList.prepend(2);
		linkedList.prepend(1);
		linkedList.prepend(0);

		expect(linkedList.get(1)?.data).toBe(1);
		expect(linkedList.get(2)?.data).toBe(2);
		expect(linkedList.get(3)?.data).toBe(3);
		deleteMiddleNode(linkedList.head);
		expect(linkedList.get(1)?.data).toBe(1);
		expect(linkedList.get(2)?.data).toBe(2);
		expect(linkedList.get(3)?.data).toBe(4);

		//3 nodes
		linkedList = new LinkedList();
		linkedList.prepend(2);
		linkedList.prepend(1);
		linkedList.prepend(0);

		expect(linkedList.get(0)?.data).toBe(0);
		expect(linkedList.get(1)?.data).toBe(1);
		expect(linkedList.get(2)?.data).toBe(2);
		deleteMiddleNode(linkedList.head);
		expect(linkedList.get(0)?.data).toBe(0);
		expect(linkedList.get(1)?.data).toBe(2);

		//2 nodes
		linkedList = new LinkedList();
		linkedList.prepend(1);
		linkedList.prepend(0);

		expect(linkedList.get(0)?.data).toBe(0);
		expect(linkedList.get(1)?.data).toBe(1);
		deleteMiddleNode(linkedList.head);
		expect(linkedList.get(0)?.data).toBe(0);
		expect(linkedList.get(1)?.data).toBe(undefined);
	});
});
