import BinaryTreeNode from '../Binary Tree Node/BinaryTreeNode.solution';

//insertInOrder(data)

export default class BinarySearchTreeNode extends BinaryTreeNode {
	insertInOrder(data) {
		const newNode = new BinarySearchTreeNode(data);
		if (data <= this.data)
			this.left ? this.left.insertInOrder(data) : this.setLeft(newNode);
		else if (data > this.data)
			this.right ? this.right.insertInOrder(data) : this.setRight(newNode);
		return this;
	}
}
