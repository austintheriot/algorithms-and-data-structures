import BinaryTreeNode from '../Binary Tree Node/BinaryTreeNode.solution';

export default class BinarySearchTreeNode extends BinaryTreeNode {
	insertInOrder(node) {
		if (node.data < this.data) {
			if (!this.left) this.setLeft(node);
			else this.left.insertNode(node);
		} else if (node.data > this.data) {
			if (!this.right) this.setRight(node);
			else this.right.insertNode(node);
		} else return this;
	}
}
