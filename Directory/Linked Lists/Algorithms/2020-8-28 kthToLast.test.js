//Returns the kth to last element of a singly linked list
//runtime O(n)

const LinkedList = require('../SinglyLinkedList.solution');

function kthToLast(ll, k) {
	if (k < 0) return null;

	let cn = ll.head;
	let fn = ll.head;
	for (let i = 0; i < k; i++) {
		fn = fn.next;
		if (fn === null) return null;
	}
	while (cn && fn) {
		if (fn.next === null) {
			return cn;
		}
		cn = cn.next;
		fn = fn.next;
	}
}

test('Should return the kth to last element of a singly linked list', () => {
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
	expect(kthToLast(linkedList, 0).data).toBe(10);
	expect(kthToLast(linkedList, 2).data).toBe(8);
	expect(kthToLast(linkedList, 4).data).toBe(6);
	expect(kthToLast(linkedList, 6).data).toBe(4);
	expect(kthToLast(linkedList, 8).data).toBe(2);
	expect(kthToLast(linkedList, 10).data).toBe(0);

	linkedList = new LinkedList();
	linkedList.prepend(1);
	expect(kthToLast(linkedList, 0).data).toBe(1);
	expect(kthToLast(linkedList, 1)).toBe(null);

	//edge cases
	expect(kthToLast(linkedList, -1)).toBe(null);
	expect(kthToLast(linkedList, 11)).toBe(null);
});
