/* 
  Implement an algorithm to return the maximum depth of a binary tree.
*/

// top down
function depthOfABinaryTree1(node, depth = 1) {
  return Math.max(
    node.left ? depthOfABinaryTree(node.left, depth + 1) : depth,
    node.right ? depthOfABinaryTree(node.right, depth + 1) : depth,
  )
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