const BinaryTreeNode = require('./BinaryTreeNode.solution');

describe('BinaryTreeNode', () => {
	test('Should create node', () => {
		let node = new BinaryTreeNode();

		expect(node.parent).toBeNull();
		expect(node.data).toBeNull();
		expect(node.left).toBeNull();
		expect(node.right).toBeNull();

		node = new BinaryTreeNode(5);

		expect(node.parent).toBeNull();
		expect(node.data).toBe(5);
		expect(node.left).toBeNull();
		expect(node.right).toBeNull();
	});

	// setLeft
	test('Should set the left node', () => {
		let node0 = new BinaryTreeNode(0);
		let node1 = new BinaryTreeNode(5);
		node0.setLeft(node1);

		expect(node0.data).toBe(0);
		expect(node0.left).toBe(node1);
		expect(node1.data).toBe(5);
		expect(node1.parent).toBe(node0);
	});

	// setRight
	test('Should set the right node', () => {
		let node0 = new BinaryTreeNode(0);
		let node2 = new BinaryTreeNode(5);
		node0.setRight(node2);

		expect(node0.data).toBe(0);
		expect(node0.right).toBe(node2);
		expect(node2.data).toBe(5);
		expect(node2.parent).toBe(node0);
	});
});
