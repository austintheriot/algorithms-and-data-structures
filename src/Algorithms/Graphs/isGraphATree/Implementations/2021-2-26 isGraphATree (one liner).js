/* 
  Given a node from a connected graph, implement an algorithm
  to determine whether the graph is a tree or not.
*/

export default function isGraphATree(node) {
  if (!node) return isATree;
  if (node.visited) return false;
  node.visited = true;
  for (let child of node.children) {
    if (!isGraphATree(child)) return false;
  }
  return true;
}

// dumb one liner:
export default function isGraphATree2(node, isATree = true) {
  return (!node || node.visited) ? false : ((node.visited = true), node.children.forEach(child => isATree = isGraphATree2(child, isATree)), isATree)
}