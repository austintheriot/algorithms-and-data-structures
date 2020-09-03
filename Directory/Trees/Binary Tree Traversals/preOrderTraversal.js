const perfectBinarySearchTree = require('./perfectBinarySearchTree');

const preOrderTraversal = (node) => {
	if (node !== null) {
		console.log(node.data);
		preOrderTraversal(node.left);
		preOrderTraversal(node.right);
	}
};

preOrderTraversal(perfectBinarySearchTree);
