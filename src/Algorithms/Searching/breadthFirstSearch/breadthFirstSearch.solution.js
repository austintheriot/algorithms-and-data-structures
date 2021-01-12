/* 
interface Node {
	visited: boolean;
	children: Node[];
} 
*/

import Queue from '../../../Data Structures/Queues/Queue.solution';

export default function makeSearch(visitCallback) {
	return function search(node) {
		//THIS DOES *NOT* REQUIRE A RECURSIVE SOLUTION
		//"visit" a node and add to the queue
		//do not "process" the node until it is taken from the queue

		const queue = new Queue(); //queue keeps track of the proper order
		queue.add(node);

		//start taking nodes from the queue and processing them
		while (!queue.isEmpty()) {
			const dequeuedNode = queue.remove();
			dequeuedNode.visited = true;
			visitCallback(dequeuedNode);

			//visit each of the node's children and add them to the queue
			for (let child of dequeuedNode.children) {
				if (!child.visited) {
					child.visited = true;
					queue.add(child);
				}
			}
		}
	};
}
