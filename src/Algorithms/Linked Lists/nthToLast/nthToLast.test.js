import LinkedList from '../../../Data Structures/Linked Lists/Singly Linked List/SinglyLinkedList.solution';
import nthToLast from './nthToLast';

it('Should return the kth to last element of a singly linked list', () => {
	let linkedList = new LinkedList();
	linkedList
		.prepend(10)
		.prepend(9)
		.prepend(8)
		.prepend(7)
		.prepend(6)
		.prepend(5)
		.prepend(4)
		.prepend(3)
		.prepend(2)
		.prepend(1)
		.prepend(0);

	expect(nthToLast(linkedList, 0).data).toBe(10);
	expect(nthToLast(linkedList, 2).data).toBe(8);
	expect(nthToLast(linkedList, 4).data).toBe(6);
	expect(nthToLast(linkedList, 6).data).toBe(4);
	expect(nthToLast(linkedList, 8).data).toBe(2);
	expect(nthToLast(linkedList, 10).data).toBe(0);

	linkedList = new LinkedList();
	linkedList.prepend(1);
	expect(nthToLast(linkedList, 0).data).toBe(1);
	expect(nthToLast(linkedList, 1)).toBe(null);

	//edge cases
	expect(nthToLast(linkedList, -1)).toBe(null);
	expect(nthToLast(linkedList, 11)).toBe(null);
});
