/* 
interface Node {
	visited: boolean;
	children: Node[];
} 
*/

function makeSearchFunction(visitCallback) {
	return function search(node) {
		if (!node) return;
		node.visited = true;
		visitCallback(node);
		for (let child of node.children) {
			if (!child.visited) search(child);
		}
	};
}