import BinaryTreeNode from '../Binary Tree Node/BinaryTreeNode.solution';

export default class BinarySearchTreeNode extends BinaryTreeNode {
	insertInOrder(data) {
		if (data < this.data) {
			if (!this.left) this.setLeft(new BinarySearchTreeNode(data));
			else this.left.insertInOrder(new BinarySearchTreeNode(data));
		} else if (data > this.data) {
			if (!this.right) this.setRight(new BinarySearchTreeNode(data));
			else this.right.insertInOrder(new BinarySearchTreeNode(data));
		} else return this;
	}
}
