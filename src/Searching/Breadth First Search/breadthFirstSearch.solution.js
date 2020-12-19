/* 
interface Node {
	visited: boolean;
	children: Node[];
} 
*/

const Queue = require('../../Queues/Queue.solution');

export default function makeBreadthFirstSearchFunction(visitCallback) {
	return (search = (root) => {
		//THIS DOES *NOT* REQUIRE A RECURSIVE SOLUTION
		//"visit" a node and add to the queue
		//do not "process" the node until it is taken from the queue

		const queue = new Queue(); //queue keeps track of the proper order

		//"visit" the root node
		root.visited = true;
		queue.add(root);

		//start taking nodes from the queue and processing them
		while (!queue.isEmpty()) {
			const queuedNode = queue.remove(); //take next node from the front of the queue
			visitCallback(queuedNode.data);

			for (let node of queuedNode.children) {
				if (node.visited === false) {
					node.visited = true;
					queue.add(node);
				}
			}
		}
	});
}
