/* 
  Given a node from a connected graph, implement an algorithm
  to determine whether the graph is a tree or not.
*/

//recursive (DFS) implementation
function isGraphATree1(node, isATree = true) {
  if (node.visited) return false;
  node.visited = true;
  node.children.forEach((child) => (isATree = isGraphATree(child, isATree)))
  return isATree;
}


// iterative (BFS) implementation
import Queue from '../../../Data Structures/Queues/Queue.solution';
export default function isGraphATree2(node) {
  const queue = new Queue();
  queue.add(node);

  while (!queue.isEmpty()) {
    const dequeued = queue.remove();
    if (dequeued.visited) return false;
    dequeued.visited = true;
    for (let child of dequeued.children) {
      if (!child.visited) {
        queue.add(child);
      }
    }
  }
  return true;
}