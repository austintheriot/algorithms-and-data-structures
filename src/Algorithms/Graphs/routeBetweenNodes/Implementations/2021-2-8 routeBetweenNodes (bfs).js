// optional data structures
import Queue from '../../../Data Structures/Queues/Queue.solution';
import Stack from '../../../Data Structures/Stacks/Stack.solution';

export default function routeBetweenNodes(node1, node2) {
  const queue = new Queue();
  queue.add(node1);

  while (!queue.isEmpty()) {
    const dequeuedNode = queue.remove();
    if (dequeuedNode === node2) return true;
    dequeuedNode.visited = true;

    for (let child of dequeuedNode.children) {
      if (!child.visited) queue.add(child);
    }
  }

  return false;
}
