import Node from './BinarySearchTreeNode';
import perfectBinarySearchTree from '../Examples/perfectBinarySearchTree (old)';

describe('Binary Search Tree Node', () => {
	it('Should create node', () => {
		let node = new Node();

		expect(node.parent).toBeNull();
		expect(node.data).toBeNull();
		expect(node.left).toBeNull();
		expect(node.right).toBeNull();

		node = new Node(5);

		expect(node.parent).toBeNull();
		expect(node.data).toBe(5);
		expect(node.left).toBeNull();
		expect(node.right).toBeNull();
	});

	// setLeft
	it('Should set the left node', () => {
		let node0 = new Node(0);
		let node1 = new Node(5);
		node0.setLeft(node1);

		expect(node0.data).toBe(0);
		expect(node0.left).toBe(node1);
		expect(node1.data).toBe(5);
		expect(node1.parent).toBe(node0);
	});

	// setRight
	it('Should set the right node', () => {
		let node0 = new Node(0);
		let node1 = new Node(5);
		node0.setRight(node1);

		expect(node0.data).toBe(0);
		expect(node0.right).toBe(node1);
		expect(node1.data).toBe(5);
		expect(node1.parent).toBe(node0);
	});

	//
	it('Should delete old references to parents', () => {
		let node0 = new Node(0);
		let node1 = new Node(5);
		let node2 = new Node(10);
		node0.setRight(node1);

		//parent should be initialized correctly
		expect(node0.data).toBe(0);
		expect(node0.right).toBe(node1);

		//right child should be initialized correctly
		expect(node1.data).toBe(5);
		expect(node1.parent).toBe(node0);

		//overwrite right child
		node0.setRight(node2);
		//right child should be initialized correctly
		expect(node0.right).toBe(node2);
		expect(node2.data).toBe(10);
		expect(node2.parent).toBe(node0);
		//old right child's reference to parent should be overwritten
		expect(node1.parent).toBeNull();
	});

	it('Should find a node, given some data', () => {
		/*
	              10
	            /    \
	           5       15
	         /  \    /    \
	        3     8  13     17
	       /|   / |  | \   |  \
	      1 4  6  9  11 14 16 18
	*/

		const root = new Node(10);

		const node1 = new Node(5);
		const node2 = new Node(15);

		const node3 = new Node(3);
		const node4 = new Node(8);
		const node5 = new Node(13);
		const node6 = new Node(17);

		const node7 = new Node(1);
		const node8 = new Node(4);
		const node9 = new Node(6);
		const node10 = new Node(9);
		const node11 = new Node(11);
		const node12 = new Node(14);
		const node13 = new Node(16);
		const node14 = new Node(18);

		//perfect, binary search tree:
		root.setLeft(node1);
		root.setRight(node2);

		node1.setLeft(node3);
		node1.setRight(node4);

		node2.setLeft(node5);
		node2.setRight(node6);

		node3.setLeft(node7);
		node3.setRight(node8);

		node4.setLeft(node9);
		node4.setRight(node10);

		node5.setLeft(node11);
		node5.setRight(node12);

		node6.setLeft(node13);
		node6.setRight(node14);

		expect(root.find(5)).toBe(node1);
		expect(root.find(4)).toBe(node8);
		expect(root.find(17)).toBe(node6);
	});

	it('Should insert nodes in the proper location', () => {
		const root = new Node(10);
		root.insertInOrder(5);
		root.insertInOrder(15);
		root.insertInOrder(3);
		root.insertInOrder(8);
		root.insertInOrder(13);
		root.insertInOrder(17);
		root.insertInOrder(1);
		root.insertInOrder(4);
		root.insertInOrder(6);
		root.insertInOrder(9);
		root.insertInOrder(11);
		root.insertInOrder(14);
		root.insertInOrder(16);
		root.insertInOrder(18);

		expect(root).toEqual(perfectBinarySearchTree);
	});
});
