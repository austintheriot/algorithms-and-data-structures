/* 
interface Node {
	visited: boolean;
	children: Node[];
} 
*/

module.exports = makeSearchFunction = (visitCallback) => {
	return (search = (node) => {
		if (node == null) return;
		node.visited = true;
		visitCallback(node);
		for (let child of node.children) {
			if (!child.visited) search(child);
		}
	});
};
