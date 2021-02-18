/* 
  Give the first node of a binary tree, implement an algorithm
  that returns the maximum width of the binary tree.
*/

export default function maxWidth(node, levels = []) {
  if (!node) return;
  node.level ??= 0;
  levels[node.level] ??= 0;
  levels[node.level]++;
  if (node.left) {
    node.left.level = node.level + 1;
    maxWidth(node.left, levels);
  }
  if (node.right) {
    node.right.level = node.level + 1;
    maxWidth(node.right, levels);
  }
  if (node.level === 0) return Math.max(...levels);
}