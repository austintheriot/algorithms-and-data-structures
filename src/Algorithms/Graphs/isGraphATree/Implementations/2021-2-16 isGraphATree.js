/* 
  Given a node from a connected graph, implement an algorithm
  to determine whether the graph is a tree or not.
*/

export default function isGraphATree(node, isATree = true) {
  if (!node || !isATree) return isATree;
  if (node.visited) return false;
  node.visited = true;
  node.children.forEach((node) => (isATree = isGraphATree(node, isATree)));
  return isATree;
}