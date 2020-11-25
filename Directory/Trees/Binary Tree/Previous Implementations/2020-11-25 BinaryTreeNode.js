// setLeft(node){}
// setRight(node){}

module.exports = class BinaryTreeNode {
	constructor(data) {
		this.parent = null;
		this.data = data ?? null;
		this.left = null;
		this.right = null;
	}

	setLeft(node) {
		if (this.left) this.left.parent = null;
		this.left = node;
		this.left.parent = this;
		return this;
	}

	setRight(node) {
		if (this.right) this.right.parent = null;
		this.right = node;
		this.right.parent = this;
		return this;
	}
};
