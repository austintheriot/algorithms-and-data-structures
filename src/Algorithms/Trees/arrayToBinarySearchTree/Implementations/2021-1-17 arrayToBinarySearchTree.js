import Node from '../../../Data Structures/Trees/Binary Tree/Binary Search Tree Node/BinarySearchTreeNode.solution';

/* 

  Implement an algorithm that converts a sorted array into
  a binary search tree with minimal height.

*/

export default function arrayToBinarySearchTree(array, low, high) {
	low = low ?? 0;
	high = high ?? array.length - 1;

	//base case
	if (low > high) return null;

	//construct root node
	const middle = Math.floor(low + (high - low) / 2);
	const node = new Node(array[middle]);

	//construct left branch recursively
	const leftNode = arrayToBinarySearchTree(array, low, middle - 1);
	if (leftNode) node.setLeft(leftNode);

	//construct right branch recursively
	const rightNode = arrayToBinarySearchTree(array, middle + 1, high);
	if (rightNode) node.setRight(rightNode);

	return node;
}
