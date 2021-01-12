import Node from '../../../Data Structures/Trees/Binary Tree/Binary Tree Node/BinaryTreeNode.solution';

/* 

  Implement an algorithm that converts a sorted array into
  a binary search tree with minimal height.

  Take the middle element as the root of the binary tree.
  Iterate through the array in reverse order, traversing the binary
  tree each time to insert the element in its correct place.
    Runtime: O(n log(n))
    Space: O(n)


  Iterate through the array in binary search order.
  Center of the array = root node.
  Left node = middle of the left side of the array.
    Recurse to create left node.
  Right node = middle of the right side of the array.
    Recurse to create right node.
  Runtime: O(n)
  Space: O(n)
  
  We could also do this iteratively by using a stack instead.  

*/

function arrayToBinarySearchTree(array, low, high) {
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

export default function runArrToBST(array) {
	//you must pass (array.length - 1) for high, or else
	//it will try to construct a node for the index at
	//array.length, which is undefined.
	return arrayToBinarySearchTree(array, 0, array.length - 1);
}
