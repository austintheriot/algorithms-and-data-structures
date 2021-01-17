import makePreOrderTraversalFunction from './preOrderTraversal';
import perfectBinarySearchTreeRoot from '../../../Data Structures/Trees/Binary Tree/Examples/perfectBinarySearchTree (new)';

describe('Pre-Order Traversal', () => {
	it('Should visit all nodes in the correct order', () => {
		const arr = [];
		const preOrderTraversal = makePreOrderTraversalFunction((node) =>
			arr.push(node.data)
		);
		preOrderTraversal(perfectBinarySearchTreeRoot);
		expect(arr).toEqual([10, 5, 3, 1, 4, 8, 6, 9, 15, 13, 11, 14, 17, 16, 18]);
	});
});
