export default function nthToLast(linkedList, n) {
	if (!linkedList.head || n < 0) return null;
	//increment runner by n
	let current = linkedList.head;
	let runner = linkedList.head;
	for (let i = 0; i < n; i++) {
		runner = runner.next;
		if (!runner) return null;
	}

	//increment both until runner.next is null
	while (runner.next) {
		runner = runner.next;
		current = current.next;
	}

	return current;
}
