const Node = require('../GraphNode');

//Instantiate nodes (using dynamic variable names)
for (let i = 0; i < 34; i++) {
	global[`node${i}`] = new Node(i);
}

node0
	.createUndirectedEdge(node1)
	.createUndirectedEdge(node2)
	.createUndirectedEdge(node3)
	.createUndirectedEdge(node4)
	.createUndirectedEdge(node5)
	.createUndirectedEdge(node6)
	.createUndirectedEdge(node7);

node2.createUndirectedEdge(node13).createUndirectedEdge(node32);

node3.createUndirectedEdge(node31);

node8
	.createUndirectedEdge(node9)
	.createUndirectedEdge(node10)
	.createUndirectedEdge(node11)
	.createUndirectedEdge(node12)
	.createUndirectedEdge(node13)
	.createUndirectedEdge(node14)
	.createUndirectedEdge(node15);

node12.createUndirectedEdge(node22);

node16
	.createUndirectedEdge(node17)
	.createUndirectedEdge(node18)
	.createUndirectedEdge(node19)
	.createUndirectedEdge(node20)
	.createUndirectedEdge(node21)
	.createUndirectedEdge(node22)
	.createUndirectedEdge(node23);

node22.createUndirectedEdge(node33);
node21.createUndirectedEdge(node25);

node24
	.createUndirectedEdge(node25)
	.createUndirectedEdge(node26)
	.createUndirectedEdge(node27)
	.createUndirectedEdge(node28)
	.createUndirectedEdge(node29)
	.createUndirectedEdge(node30)
	.createUndirectedEdge(node31);

const graph = {};

for (let i = 0; i < 34; i++) {
	graph[`node${i}`] = global[`node${i}`];
}

module.exports = graph;
