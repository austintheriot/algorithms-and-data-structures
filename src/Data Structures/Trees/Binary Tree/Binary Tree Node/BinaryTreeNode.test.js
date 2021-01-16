import BinaryTreeNode from './BinaryTreeNode';

describe('BinaryTreeNode', () => {
	it('Should create node', () => {
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
	it('Should set the left node', () => {
		let node0 = new BinaryTreeNode(0);
		let node1 = new BinaryTreeNode(5);
		node0.setLeft(node1);

		expect(node0.data).toBe(0);
		expect(node0.left).toBe(node1);
		expect(node1.data).toBe(5);
		expect(node1.parent).toBe(node0);
	});

	// setRight
	it('Should set the right node', () => {
		let node0 = new BinaryTreeNode(0);
		let node1 = new BinaryTreeNode(5);
		node0.setRight(node1);

		expect(node0.data).toBe(0);
		expect(node0.right).toBe(node1);
		expect(node1.data).toBe(5);
		expect(node1.parent).toBe(node0);
	});

	//
	it('Should delete old references to parents', () => {
		let node0 = new BinaryTreeNode(0);
		let node1 = new BinaryTreeNode(5);
		let node2 = new BinaryTreeNode(10);
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

	//find
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

		const root = new BinaryTreeNode(10);

		const node1 = new BinaryTreeNode(5);
		const node2 = new BinaryTreeNode(15);

		const node3 = new BinaryTreeNode(3);
		const node4 = new BinaryTreeNode(8);
		const node5 = new BinaryTreeNode(13);
		const node6 = new BinaryTreeNode(17);

		const node7 = new BinaryTreeNode(1);
		const node8 = new BinaryTreeNode(4);
		const node9 = new BinaryTreeNode(6);
		const node10 = new BinaryTreeNode(9);
		const node11 = new BinaryTreeNode(11);
		const node12 = new BinaryTreeNode(14);
		const node13 = new BinaryTreeNode(16);
		const node14 = new BinaryTreeNode(18);

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
});