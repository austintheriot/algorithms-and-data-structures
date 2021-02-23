/* 
interface Node {
	visited: boolean;
	children: Node[];
} 
*/

function makeSearchFunction1(visitCallback) {
	return function search(node) {
		if (!node || node.visited) return;
		node.visited = true;
		visitCallback(node);
		node.children.forEach(child => !child.visited && search(child))
	};
}


export default function makeSearchFunction2(visitCallback) {
	return function search(node) {
		node && !node.visited && (node.visited = true), visitCallback(node), node.children.forEach(child => !child.visited && search(child));
	};
}
