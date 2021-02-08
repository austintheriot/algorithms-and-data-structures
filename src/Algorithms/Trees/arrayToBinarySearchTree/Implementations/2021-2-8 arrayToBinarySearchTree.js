import Node from "../../../Data Structures/Trees/Binary Tree/Binary Search Tree Node/BinarySearchTreeNode.solution";

/* 

  Implement an algorithm that converts a sorted array into
  a binary search tree with minimal height.

*/

export default function arrayToBinarySearchTree(arr, low, high) {
  low = low ?? 0;
  high = high ?? arr.length - 1;

  if (low > high) return null;
  const middle = Math.floor(low + (high - low) / 2);
  const node = new Node(arr[middle]);

  const leftBranch = arrayToBinarySearchTree(arr, low, middle - 1);
  if (leftBranch) node.setLeft(leftBranch);

  const rightBranch = arrayToBinarySearchTree(arr, middle + 1, high);
  if (rightBranch) node.setRight(rightBranch);

  return node;
}
