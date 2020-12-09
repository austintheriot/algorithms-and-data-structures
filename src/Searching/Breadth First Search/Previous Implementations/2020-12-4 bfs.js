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
			let dequeuedNode = queue.remove();
			dequeuedNode.visited = true;
			visitCallback(dequeuedNode.data);
			for (let child of dequeuedNode.children) {
				if (!child.visited) {
					child.visited = true;
					queue.add(child);
				}
			}
		}
	});
};
