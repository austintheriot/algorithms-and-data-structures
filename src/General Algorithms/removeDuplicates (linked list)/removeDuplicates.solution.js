/* 

  Implement an algorithm to remove the duplicates from a linked list.
  (Optionally: do so without any secondary data structure)

  With hash table:
  Iterate through linkedList two at a time
  Add elements to hashtable
  If element next element already found, delete next node

  Without hash table: 
  Iterate through linkedList (at most) once for every node in the list
  Once a duplicate is found compared to the current node, delete it
  O(n^2)


*/

//with hash table
function removeDuplicates1(linkedList) {
	const hashTable = {};
	let currentNode = linkedList.head;
	hashTable[currentNode.data] = true;

	while (currentNode && currentNode.next) {
		if (hashTable[currentNode.next.data]) {
			currentNode.next = currentNode.next.next;
			linkedList.length--;
		} else {
			hashTable[currentNode.next.data] = true;
			currentNode = currentNode.next;
		}
	}
	return linkedList;
}

//without a hash table
export default function removeDuplicates2(linkedList) {
	let current = linkedList.head;
	while (current) {
		let runner = current;
		while (runner.next) {
			if (current.data === runner.next.data) {
				runner.next = runner.next.next;
				linkedList.length--;
			} else {
				runner = runner.next;
			}
		}
		current = current.next;
	}

	return linkedList;
}
