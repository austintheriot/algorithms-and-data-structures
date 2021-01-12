//Returns the kth to last element of a singly linked list
//runtime O(n)

const LinkedList = require('../SinglyLinkedList.solution');

function nthToLast(ll, k) {
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
