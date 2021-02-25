/* 
  Give the first node of a binary tree, implement an algorithm
  that returns the maximum width of the binary tree.
*/

export default function maxWidth(node, layer = 0, widths = []) {
  if (!node) return;
  widths[layer] ??= 0;
  widths[layer]++;
  maxWidth(node.left, layer + 1, widths);
  maxWidth(node.right, layer + 1, widths);
  if (layer === 0) return Math.max(...widths);
}