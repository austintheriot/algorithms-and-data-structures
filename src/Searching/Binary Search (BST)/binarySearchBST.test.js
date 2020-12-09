const search = require('./binarySearchBST');
const root = require('../../Trees/Binary Tree/Examples/perfectBinarySearchTree');

describe('Binary Search (Binary Search Tree)', () => {
	it('Should find the node of a number in the tree', () => {
		let node9 = root.left.right.left; //6
		expect(search(root, node9.data)).toBe(node9);

		let node14 = root.right.right.right; //18
		expect(search(root, node14.data)).toBe(node14);
	});

	it('Should return undefined when number is not found', () => {
		expect(search(root, 2)).toBe(undefined);
		expect(search(root, 7)).toBe(undefined);
		expect(search(root, 19)).toBe(undefined);
	});
});
