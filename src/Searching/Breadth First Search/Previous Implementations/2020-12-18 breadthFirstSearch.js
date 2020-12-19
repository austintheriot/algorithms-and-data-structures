/* 
interface Node {
	visited: boolean;
	children: Node[];
} 
*/

import Queue from '../../Queues/Queue.solution';

export default function makeSearch(visitCallback) {
	return function search(node) {
		const queue = new Queue();
		queue.add(node);

		while (!queue.isEmpty()) {
			const dequeuedNode = queue.remove();
			dequeuedNode.visited = true;
			visitCallback(dequeuedNode);

			for (let child of dequeuedNode.children) {
				if (!child.visited) {
					child.visited = true;
					queue.add(child);
				}
			}
		}
	};
}
