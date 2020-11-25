module.exports = makePreOrderTraversalFunction = (visitCallback) => {
	return (preOrderTraversal = (node) => {
		if (node !== null) {
			visitCallback(node.data);
			preOrderTraversal(node.left);
			preOrderTraversal(node.right);
		}
	});
};
