const search = require('./binarySearchBST');
const root = require('../../Trees/Binary Tree/Examples/perfectBinarySearchTree');

describe('Binary Search (Binary Search Tree)', () => {
	it('Should find the node of a number in the tree', () => {
		let node4 = root.left.right;
		expect(search(node4.data)).toBe(node4);
	});

	it('Should return undefined when number is not found', () => {});
});
