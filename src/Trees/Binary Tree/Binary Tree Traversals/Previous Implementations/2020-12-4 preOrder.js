module.exports = makePreOrderTraversalFunction = (visitCallback) => {
	return (preOrderTraversal = (node) => {
		if (node == null) return;
		visitCallback(node);
		preOrderTraversal(node.left);
		preOrderTraversal(node.right);
	});
};
