module.exports = class BinaryTreeNode {
	constructor(data = null) {
		this.data = data;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	setLeft(node) {
		// Reset parent for left node since it is going to be detached.
		if (this.left) {
			this.left.parent = null;
		}

		// Attach new node to the left.
		this.left = node;

		// Make current node to be a parent for new left one.
		if (this.left) {
			this.left.parent = this;
		}

		return this;
	}

	setRight(node) {
		// Reset parent for right node since it is going to be detached.
		if (this.right) {
			this.right.parent = null;
		}

		// Attach new node to the right.
		this.right = node;

		// Make current node to be a parent for new right one.
		if (node) {
			this.right.parent = this;
		}

		return this;
	}
};
