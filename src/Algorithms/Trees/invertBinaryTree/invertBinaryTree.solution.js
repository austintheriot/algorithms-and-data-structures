/* 
  Given the root node of a binary tree,
  implement an algorithm to flip the tree horizontally
  (invert the binary tree).
*/

export default function invert(node) {
  if (!node) return;
  const left = node.left;
  node.left = node.right;
  node.right = left;
  invert(node.left);
  invert(node.right);
}