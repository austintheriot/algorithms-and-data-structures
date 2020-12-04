const makePostOrderTraversalFunction = require('./postOrderTraversal');
const perfectBinarySearchTreeRoot = require('./perfectBinarySearchTree');

describe('Post-Order Traversal', () => {
	it('Should visit all nodes in the correct order', () => {
		const arr = [];
		const postOrderTraversal = makePostOrderTraversalFunction((node) =>
			arr.push(node.data)
		);
		postOrderTraversal(perfectBinarySearchTreeRoot);
		expect(arr).toEqual([1, 4, 3, 6, 9, 8, 5, 11, 14, 13, 16, 18, 17, 15, 10]);
	});
});
