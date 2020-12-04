module.exports = makeInOrderTraversalFunction = (visitCallback) => {
	return (inOrderTraversal = (node) => {
		//Implement Post-Order Traversal Function here
		if (node !== null) {
			inOrderTraversal(node.left);
			visitCallback(node);
			inOrderTraversal(node.right);
		}
	});
};
