/* 
interface Node {
	visited: boolean;
	children: Node[];
} 
*/

const Queue = require('../../Queues/Queue.solution');

module.exports = makeBreadthFirstSearchFunction = (visitCallback) => {
	return (search = (root) => {
		//implement search function here
		const queue = new Queue();

		queue.add(root);
		root.visited = true;

		while (!queue.isEmpty()) {
			const dequeuedNode = queue.remove();
			visitCallback(dequeuedNode.data);
			for (let child of dequeuedNode.children) {
				if (!child.visited) {
					queue.add(child);
					child.visited = true;
				}
			}
		}
	});
};
