import BinaryTreeNode from '../Binary Tree Node/BinaryTreeNode.solution';

//implement the following methods:
//insertInOrder

export default class BinarySearchTreeNode extends BinaryTreeNode {
	insertInOrder(node) {
		if (node.data < this.data) {
			if (!this.left) this.setLeft(node);
			else this.left.insertInOrder(node);
		} else if (node.data > this.data) {
			if (!this.right) this.setRight(node);
			else this.right.insertInOrder(node);
		} else return this;
	}
}
