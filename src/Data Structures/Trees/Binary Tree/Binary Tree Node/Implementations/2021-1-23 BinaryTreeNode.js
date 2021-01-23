//uninitialized data on nodes should be null
// setLeft(node){}
// setRight(node){}
// find(data){}

export default class BinaryTreeNode {
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
  find(data) {
    if (data === this.data) return this;
    else if (data < this.data) return this.left?.find(data) ?? this.left;
    else if (data > this.data) return this.right?.find(data) ?? this.right;
  }
}
