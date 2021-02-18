/* 
  Give the first node of a binary tree, implement an algorithm
  that returns the maximum width of the binary tree.
*/


import Queue from '../../../Data Structures/Queues/Queue.solution';


/* 
  Use any search to count the number of children in each layer.
  Keep track of which layer each node is in, and add 1 
  to a node's layer property when adding a child into the queue. 

  At each visit, increment the index of an array corresponding 
  to that node's layer by 1. 

  Since the structure is a tree, it doesn't matter what type of search
  we use, so long as the search visits every node, since there 
  are no cycles in a tree, and the order of the visit doesn't matter/
*/

// iterative (BFS) solution
export default function maxWidth1(node) {

  
  const queue = new Queue();
  const layerWidths = [];
  queue.add(node);
  node.layer = 0;

  while (!queue.isEmpty()) {
    const dequeued = queue.remove();
    dequeued.visited = true;

    // incremenet the count of nodes in that layer
    if (!layerWidths[dequeued.layer]) {
      layerWidths[dequeued.layer] = 0;
    }
    layerWidths[dequeued.layer]++;

    if (dequeued.left && !dequeued.left.visited) {
      dequeued.left.layer = dequeued.layer + 1;
      queue.add(dequeued.left);
    }
    if (dequeued.right && !dequeued.right.visited) {
      dequeued.right.layer = dequeued.layer + 1;
      queue.add(dequeued.right);
    }
  }
  console.log(layerWidths)
  return Math.max(...layerWidths);
}
 
// recursive (DFS) solution
export function maxWidth2(node, layerWidths = [1]) {
  node.layer = node.layer ?? 1;
  layerWidths[node.layer] ??= 0;
  layerWidths[node.layer]++;
  if (node.left) {
    node.left.layer = node.layer + 1;
    maxWidth(node.left, layerWidths);
  }
  if (node.right) {
    node.right.layer = node.layer + 1;
    maxWidth(node.right, layerWidths);
  }
  if (node.layer === 1) return Math.max(...layerWidths);
}