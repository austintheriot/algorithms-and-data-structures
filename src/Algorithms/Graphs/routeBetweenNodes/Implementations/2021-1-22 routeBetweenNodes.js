// optional data structures
import Queue from '../../../Data Structures/Queues/Queue.solution';
import Stack from '../../../Data Structures/Stacks/Stack.solution';

export default function routeBetweenNodes(node1, node2) {
  const queue = new Queue();
  queue.add(node1);
  node1.visited = true;

  while (!queue.isEmpty()) {
    const dequeued = queue.remove();
    if (dequeued === node2) return true;
    for (const child of dequeued.children) {
      if (!child.visited) {
        child.visited = true;
        queue.add(child);
      }
    }
  }
  return false;
}
