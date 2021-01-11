import Node from './BinarySearchTreeNode';
import perfectBinarySearchTree from '../Examples/perfectBinarySearchTree';

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

	it('Should insert nodes in the proper location', () => {
		const root = new Node(10);
		root.insertInOrder(new Node(5));
		root.insertInOrder(new Node(15));
		root.insertInOrder(new Node(3));
		root.insertInOrder(new Node(8));
		root.insertInOrder(new Node(13));
		root.insertInOrder(new Node(17));
		root.insertInOrder(new Node(1));
		root.insertInOrder(new Node(4));
		root.insertInOrder(new Node(6));
		root.insertInOrder(new Node(9));
		root.insertInOrder(new Node(11));
		root.insertInOrder(new Node(14));
		root.insertInOrder(new Node(16));
		root.insertInOrder(new Node(18));

		expect(root).toEqual(perfectBinarySearchTree);
	});
});
