module.exports = makePostOrderTraversalFunction = (visitCallback) => {
	return (postOrderTraversal = (node) => {
		if (node !== null) {
			postOrderTraversal(node.left);
			postOrderTraversal(node.right);
			visitCallback(node);
		}
	});
};
