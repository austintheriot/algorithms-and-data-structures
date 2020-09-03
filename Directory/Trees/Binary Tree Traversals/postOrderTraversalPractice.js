const perfectBinarySearchTree = require('./perfectBinarySearchTree');

const postOrderTraversal = (node) => {
	if (node !== null) {
		postOrderTraversal(node.left);
		postOrderTraversal(node.right);
		console.log(node.data);
	}
};

postOrderTraversal(perfectBinarySearchTree);
