import BinaryTreeNode from '../Binary Tree Node/BinaryTreeNode.solution';

//insertInOrder(data)

export default class BinarySearchTreeNode extends BinaryTreeNode {
	insertInOrder(data) {
		const node = new BinarySearchTreeNode(data);
		if (data <= this.data) {
			this.left ? this.left.insertInOrder(node) : this.setLeft(node);
		} else if (data > this.data) {
			this.right ? this.right.insertInOrder(node) : this.setRight(node);
		}
		return this;
	}
}
