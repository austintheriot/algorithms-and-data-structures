/* 

  Given the first node of a doubly linked list,
  implement an algorithm to reverse the linked list in place.

*/

export default function reverseDoublyLinkedList(node) {
	let current = node;

	while (current) {
		//save for later
		let nextNode = current.next;
		//reassign nodes
		//prev hasn't been overwritten yet
		current.next = current.prev;
		//next has been overwritten, so use stored variable
		current.prev = nextNode;
		//increment to next node
		current = nextNode;
	}
}
