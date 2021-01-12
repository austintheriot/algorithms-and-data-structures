export default function makePreOrderTraversalFunction(visitCallback) {
	return function preOrderTraversal(node) {
		visitCallback(node);
		if (node.left) preOrderTraversal(node.left);
		if (node.right) preOrderTraversal(node.right);
	};
}
