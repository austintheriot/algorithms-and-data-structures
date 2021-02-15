/* 
  Give the first node of a binary tree, implement an algorithm
  that returns the maximum width of the binary tree.
*/

export default function maxWidth(node, layers = []) {
  node.layer ??= 0;
  layers[node.layer] ??= 0;
  layers[node.layer]++;
  if (node.left) {
    node.left.layer = node.layer + 1;
    maxWidth(node.left, layers);
  }
  if (node.right) {
    node.right.layer = node.layer + 1;
    maxWidth(node.right, layers);
  }
  if (node.layer === 0) return Math.max(...layers);
}s