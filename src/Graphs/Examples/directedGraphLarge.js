const Node = require('../GraphNode');

//Instantiate nodes (using dynamic variable names)
for (let i = 0; i < 34; i++) {
	global[`node${i}`] = new Node(i);
}

node0
	.createDirectedEdge(node1)
	.createDirectedEdge(node2)
	.createUndirectedEdge(node3)
	.createDirectedEdge(node4)
	.createDirectedEdge(node5)
	.createDirectedEdge(node6)
	.createDirectedEdge(node7);

node2.createDirectedEdge(node32);

node3.createDirectedEdge(node31);
node31
	.createDirectedEdge(node30)
	.createDirectedEdge(node29)
	.createDirectedEdge(node24);

node24
	.createDirectedEdge(node28)
	.createDirectedEdge(node27)
	.createDirectedEdge(node26);

node26.createDirectedEdge(node25);
node25.createDirectedEdge(node33);
node33.createDirectedEdge(node21);
node21.createDirectedEdge(node16);
node16
	.createDirectedEdge(node20)
	.createDirectedEdge(node19)
	.createDirectedEdge(node18)
	.createDirectedEdge(node17);
node17.createDirectedEdge(node23);
node23.createDirectedEdge(node22).createDirectedEdge(node32);
node22.createDirectedEdge(node33);

node32.createDirectedEdge(node13).createDirectedEdge(node3);
node13.createDirectedEdge(node12);
node12.createDirectedEdge(node14);
node14.createDirectedEdge(node15);
node15.createDirectedEdge(node8);
node8.createDirectedEdge(node9);
node9.createDirectedEdge(node10);
node10.createDirectedEdge(node8).createDirectedEdge(node11);
node11.createDirectedEdge(node23);

const graph = {};

for (let i = 0; i < 34; i++) {
	graph[`node${i}`] = global[`node${i}`];
}

//node0 and node17 should be reacheable from a bi-directional search
module.exports = graph;
