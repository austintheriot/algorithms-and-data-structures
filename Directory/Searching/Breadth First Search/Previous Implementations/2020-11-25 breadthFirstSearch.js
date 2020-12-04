/* 
interface Node {
	visited: boolean;
	children: Node[];
} 
*/

const Queue = require('../../Queues/Queue.solution');

module.exports = makeBreadthFirstSearchFunction = (visitCallback) => {
	return (search = (root) => {
		const queue = new Queue();

		root.visited = true;
		queue.add(root);

		while (!queue.isEmpty()) {
			const queuedNode = queue.remove();
			visitCallback(queuedNode.data);

			for (let child of queuedNode.children) {
				if (child.visited === false) {
					child.visited = true;
					queue.add(child);
				}
			}
		}
	});
};
