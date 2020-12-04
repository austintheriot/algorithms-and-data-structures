module.exports = makePreOrderTraversalFunction = (visitCallback) => {
	return (preOrderTraversal = (node) => {
		if (node == null) return;
		visitCallback(node.data);
		preOrderTraversal(node.left);
		preOrderTraversal(node.right);
	});
};
