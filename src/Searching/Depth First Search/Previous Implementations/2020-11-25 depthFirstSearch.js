module.exports = makeSearchFunction = (visitCallback) => {
	return (search = (node) => {
		//implement a depth-first function here that
		//calls the visitCallback() function for each node
		if (node === null) return;
		visitCallback(node);
		node.visited = true;
		for (const child of node.children) {
			if (child.visited === false) {
				search(child);
			}
		}
	});
};
