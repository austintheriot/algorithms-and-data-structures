/* 

  Implement an algorithm to remove the duplicates from a singly linked list.
	(Optionally: do so without any secondary data structure)
	
	Do it in O(n^2) by checking the entire list for every value

	Sort the list and iterate one at a time O(nlogn)

*/

export default function removeDuplicates(linkedList) {
	let current = linkedList.head;
	while (current) {
		let runner = current;
		while (runner.next) {
			if (runner.next.data === current.data) {
				runner.next = runner.next.next;
				linkedList.length--;
			} else runner = runner.next;
		}
		current = current.next;
	}
	return linkedList;
}
