/* 
  Implement an algorithm to return the maximum depth of a binary tree.
*/

// top down
function depthOfABinaryTree1(node, depth = 1) {
  return !node ? depth : Math.max(depth2(node.left, depth), depth2(node.right, depth)) + 1;
}

// bottom up
export default function depthOfABinaryTree2(node) {
  return !node ? 0
    : !node.left && !node.right ? 1
      : Math.max(
        depthOfABinaryTree2(node.left),
        depthOfABinaryTree2(node.right)
      ) + 1;
}