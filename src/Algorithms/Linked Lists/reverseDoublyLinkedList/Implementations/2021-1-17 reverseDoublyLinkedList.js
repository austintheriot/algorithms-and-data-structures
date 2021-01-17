/* 

  Given the first node of a doubly linked list,
  implement an algorithm to reverse the linked list in place.

*/

export default function reverseDoublyLinkedList(node) {
	let current = node;
	while (current) {
		const nextNode = current.next;
		current.next = current.prev;
		current.prev = nextNode;
		current = nextNode;
	}
}
