/* 

  Given the first node of a singly linked list,
  implement an algorithm to reverse the linked list in place.

*/

export default function reverseSinglyLinkedList(node) {
	//must begin with previous set to null
	//or else the new "final node" will
	//not have its .next set to null
	let prev = null;
	let current = node;

	while (current) {
		const next = current.next;
		current.next = prev;
		prev = current;
		current = next;
	}
}
