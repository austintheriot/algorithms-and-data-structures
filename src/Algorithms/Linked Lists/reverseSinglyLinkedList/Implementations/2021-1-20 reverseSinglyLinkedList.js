/* 

  Given the first node of a singly linked list,
  implement an algorithm to reverse the linked list in place.

*/

export default function reverseSinglyLinkedList(node) {
	let prev = null;
	let current = node;
	while (current) {
		const next = current.next;
		current.next = prev;
		prev = current;
		current = next;
	}
}
