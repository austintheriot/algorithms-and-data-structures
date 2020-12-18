export default class BinaryTreeNode {
	constructor(data) {
		this.parent = null;
		this.data = data ?? null;
		this.left = null;
		this.right = null;
	}

	setLeft(node) {
		//remove reference to parent for existing node
		if (this.left) this.left.parent = null;
		//set left node
		this.left = node;
		//link left node to parent
		this.left.parent = this;
		return this;
	}

	setRight(node) {
		//remove reference to parent for existing node
		if (this.right) this.right.parent = null;
		//set right node
		this.right = node;
		//link right node to parent
		this.right.parent = this;
		return this;
	}
}
