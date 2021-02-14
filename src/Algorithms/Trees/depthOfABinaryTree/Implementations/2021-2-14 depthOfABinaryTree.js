/* 
  Implement an algorithm to return the maximum depth of a binary tree.
*/

export default function depth(node) {
  return !node ? 0 
    : !node.left && !node.right ? 1
    : Math.max(depth(node.left), depth(node.right)) + 1;
}