const BinaryTreeNode = require('../BinaryTreeNode.solution');
const node0 = new BinaryTreeNode(10);
const node1 = new BinaryTreeNode(5);
const node2 = new BinaryTreeNode(15);
const node3 = new BinaryTreeNode(3);
const node4 = new BinaryTreeNode(8);
const node5 = new BinaryTreeNode(13);
const node6 = new BinaryTreeNode(17);
const node7 = new BinaryTreeNode(1);
const node8 = new BinaryTreeNode(4);
const node9 = new BinaryTreeNode(6);
const node10 = new BinaryTreeNode(9);
const node11 = new BinaryTreeNode(11);
const node12 = new BinaryTreeNode(14);
const node13 = new BinaryTreeNode(16);
const node14 = new BinaryTreeNode(18);

//perfect, binary search tree:
node0.setLeft(node1);
node0.setRight(node2);

node1.setLeft(node3);
node1.setRight(node4);

node2.setLeft(node5);
node2.setRight(node6);

node3.setLeft(node7);
node3.setRight(node8);

node4.setLeft(node9);
node4.setRight(node10);

node5.setLeft(node11);
node5.setRight(node12);

node6.setLeft(node13);
node6.setRight(node14);

module.exports = node0;
