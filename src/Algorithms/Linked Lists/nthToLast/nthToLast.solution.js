/*  

  Implement an algorithm to return the nth to last node in a linked list.
  Return null for nonexistent nodes.

  Time: O(n)
  Space: O(1)

*/

export default function nthToLast(linkedList, n) {
	if (n < 0) return null;

	let current = linkedList.head;
	let runner = linkedList.head;

	//move runner node ahead by n spaces
	for (let i = 0; i < n; i++) {
		runner = runner.next;
		if (!runner) return null;
	}

	//once the runner reaches the end, return the current node
	while (runner) {
		if (!runner.next) return current;
		runner = runner.next;
		current = current.next;
	}
}
