/* 
interface Node {
	visited: boolean;
	children: Node[];
} 
*/

//implement using an array instead of a Queue proper

module.exports = makeBreadthFirstSearchFunction = (visitCallback) => {
	return (search = (root) => {
		const queue = [];

		root.visited = true;
		queue.push(root);

		while (queue.length !== 0) {
			const queuedNode = queue.shift();
			visitCallback(queuedNode.data);

			for (let child of queuedNode.children) {
				if (child.visited === false) {
					child.visited = true;
					queue.push(child);
				}
			}
		}
	});
};
