import makeInOrderTraversalFunction from './inOrderTraversal';
import perfectBinarySearchTreeRoot from '../../../Data Structures/Trees/Binary Tree/Examples/perfectBinarySearchTree (new)';

describe('In-Order Traversal', () => {
	it('Should visit all nodes in the correct order', () => {
		const arr = [];
		const inOrderTraversal = makeInOrderTraversalFunction((node) =>
			arr.push(node.data)
		);
		inOrderTraversal(perfectBinarySearchTreeRoot);
		expect(arr).toEqual([1, 3, 4, 5, 6, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18]);
	});
});
