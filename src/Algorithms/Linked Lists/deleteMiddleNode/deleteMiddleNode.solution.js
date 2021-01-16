/* 

  Given the first node of a singly linked list, implement an algorithm
  to delete the middle node of a list. If the linked list has an even
  number of nodes, delete the rightmost middle node.



  Time: O(n), where n is the length of the linked list
  Space: O(1)

  

  Even number of nodes:
  null 0 1 2 | 3 4 5 null

  0 (current)
  0 (runner)

  1
  2

  2 <-- selected node
  4

  3 <-- deleted node
  null



  -----

  null 0 1 2 3 4 5 6 null

  0 (current)
  0 (runner)

  1
  2

  2 
  4

  3 <-- selected node
  6

  4 <-- deleted node
  null



*/

export default function deleteMiddleNode(node) {
	let current = node;
	//starting the runner 1 node ahead gives
	//us the PREVIOUS node to the one to be deleted
	let runner = current.next;

	while (runner?.next?.next) {
		current = current.next;
		runner = runner.next.next;
	}

	current.next = current.next?.next ?? null;
}
