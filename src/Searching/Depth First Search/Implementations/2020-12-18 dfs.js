export default function makeSearchFunction(visitCallback) {
	return function search(node) {
		node.visited = true;
		visitCallback(node);
		node.children.forEach((child) => (!child.visited ? search(child) : null));
	};
}
