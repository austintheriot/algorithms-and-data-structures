import Node from '../GraphNode';

const NUMBER_OF_NODES = 1000;

//Instantiate nodes (using dynamic variable names)
for (let i = 0; i < NUMBER_OF_NODES; i++) {
	global[`node${i}`] = new Node(i);
}

for (let i = 0; i < NUMBER_OF_NODES; i++) {
  // do not create a cycle between a node and itself
  if (i % 6 !== 0) {
    // get most recent instantiated node
    const parentNode = global[`node${Math.floor(i / 6)}`];
    const leafNode = global[`node${i}`];
    parentNode.createDirectedEdge(leafNode);
  }
};

//assign nodes to graph
const graph = {};
for (let i = 0; i < NUMBER_OF_NODES; i++) {
	graph[`node${i}`] = global[`node${i}`];
}

//node0 and node17 should be reacheable from a bi-directional search
export default graph;
