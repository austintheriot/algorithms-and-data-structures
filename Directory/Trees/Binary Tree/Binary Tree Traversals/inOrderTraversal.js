const perfectBinarySearchTree = require('./perfectBinarySearchTree');

const inOrderTraversal = (node) => {
	if (node !== null) {
		inOrderTraversal(node.left);
		console.log(node.data);
		inOrderTraversal(node.right);
	}
};

inOrderTraversal(perfectBinarySearchTree);
