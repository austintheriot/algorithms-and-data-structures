import BinaryTreeNode from '../Binary Tree Node/BinaryTreeNode.solution';

export default class BinarySearchTreeNode extends BinaryTreeNode {
	insertInOrder(data) {
		if (data < this.data) {
			if (!this.left) this.setLeft(new BinarySearchTreeNode(data));
			else this.left.insertInOrder(data);
		} else if (data > this.data) {
			if (!this.right) this.setRight(new BinarySearchTreeNode(data));
			else this.right.insertInOrder(data);
		} else return this;
	}

	// inserts nodes from right to left instead of left to right
	insertInReverseOrder(data) {
		if (data > this.data) {
			if (!this.left) this.setLeft(new BinarySearchTreeNode(data));
			else this.left.insertInReverseOrder(data);
		} else if (data < this.data) {
			if (!this.right) this.setRight(new BinarySearchTreeNode(data));
			else this.right.insertInReverseOrder(data);
		} else return this;
	}
}
