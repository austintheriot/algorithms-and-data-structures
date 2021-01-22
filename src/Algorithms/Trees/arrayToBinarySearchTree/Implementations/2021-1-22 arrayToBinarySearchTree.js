import Node from "../../../Data Structures/Trees/Binary Tree/Binary Search Tree Node/BinarySearchTreeNode.solution";

/* 

  Implement an algorithm that converts a sorted array into
  a binary search tree with minimal height.

*/

export default function arrayToBinarySearchTree(array, low, high) {
  low = low ?? 0;
  high = high ?? array.length - 1;

  if (low > high) return;
  const middle = Math.floor(low + (high - low) / 2);
  const node = new Node(array[middle]);

  const leftBranch = arrayToBinarySearchTree(array, low, middle - 1);
  if (leftBranch) node.setLeft(leftBranch);

  const rightBranch = arrayToBinarySearchTree(array, middle + 1, high);
  if (rightBranch) node.setRight(rightBranch);

  return node;
}
