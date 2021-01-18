/* 
interface Node {
	visited: boolean;
	children: Node[];
} 
*/

import Queue from '../../../Data Structures/Queues/Queue.solution';

export default function makeSearch(visitCallback) {
	return function search(node) {
		//implement search here
		const queue = new Queue();
		queue.add(node);

		while (!queue.isEmpty()) {
			const dequeued = queue.remove();
			visitCallback(dequeued);
			for (let child of dequeued.children) {
				if (!child.visited) {
					child.visited = true;
					queue.add(child);
				}
			}
		}
	};
}
