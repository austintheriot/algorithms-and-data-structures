/* 
  Give the first node of a binary tree, implement an algorithm
  that returns the maximum width of the binary tree.
*/


import Queue from '../../../Data Structures/Queues/Queue.solution';
export default function maxWidth(node) {

  /* 
    Use any search to count the number of children in each layer.
    Keep track of which layer each node is in, and add 1 
    to a node's layer property when adding a child into the queue. 

    At each visit, increment the index of an array corresponding 
    to that node's layer by 1. 

  */
  
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