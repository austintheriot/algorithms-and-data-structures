/* 
  Given a node from a connected graph, implement an algorithm
  to determine whether the graph is a tree or not.
*/

export default function isGraphATree(node, isATree = true) {
  if (!node) return isATree;
  if (node.visited) return false;
  node.visited = true;
  for (let child of node.children) {
    isATree = isGraphATree(child, isATree);
  }
  return isATree;
}