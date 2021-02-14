/* 
  Give the first node of a binary tree, implement an algorithm
  that returns the maximum width of the binary tree.
*/

export default function maxWidth(node, layerWidths = [1]) {
  node.layer = node.layer ?? 1;
  layerWidths[node.layer] ??= 0;
  layerWidths[node.layer]++;
  if (node.left) {
    node.left.layer = node.layer + 1;
    maxWidth(node.left, layerWidths);
  }
  if (node.right) {
    node.right.layer = node.layer + 1;
    maxWidth(node.right, layerWidths);
  }
  if (node.layer === 1) return Math.max(...layerWidths);
}