/* 
  Given a random node from a connected graph, 
  implement an algorithm to determine whether the graph 
  is a tree or not.
*/

import Queue from '../../../Data Structures/Queues/Queue.solution';

export default function isGraphATree(node) {
  const queue = new Queue();
  queue.add(node);

  while (!queue.isEmpty()) {
    const dequeued = queue.remove();
    if (dequeued.visited) return false;
    dequeued.visited = true;
    for (let child of dequeued.children) {
      if (!child.visited) {
        child.visited = true;
        queue.add(child);
      }
    }
  }
}