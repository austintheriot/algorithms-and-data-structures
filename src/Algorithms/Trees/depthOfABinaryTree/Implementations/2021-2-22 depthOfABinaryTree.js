/* 
  Implement an algorithm to return the maximum depth of a binary tree.
*/

// bottom-up
function depth1(node) {
  return !node ? 0
    : !node.left && !node.right ? 1
      : Math.max(depth(node.left), depth(node.right)) + 1;
}

export default function depth2(node, depth = 0) {
  return !node ? depth : Math.max(depth2(node.left, depth), depth2(node.right, depth)) + 1;
}