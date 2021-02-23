/* 
  Given the root node of a binary tree,
  implement an algorithm to flip the tree horizontally
  (invert the binary tree).
*/

function invert0(node) {
  if (!node) return;
  const left = node.left;
  node.left = node.right;
  node.right = left;
  invert(node.left), invert(node.right);
}

export default function invert(node) {
  return node ? ([node.left, node.right] = [node.right, node.left], invert(node.left), invert(node.right)) : null;
}