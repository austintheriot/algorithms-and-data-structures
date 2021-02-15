export default function makeSearchFunction(visitCallback) {
	return function search(node) {
		if (node === null) return;
		visitCallback(node);
		node.visited = true;
		for (const each of node.children) {
			if (each.visited === false) {
				search(each);
			}
		}
	};
}