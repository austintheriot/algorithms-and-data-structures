const directedGraphLarge = require('../Examples/directedGraphLarge');
const undirectedGraphLarge = require('../Examples/undirectedGraphLarge');
const Node = require('../Graph');

const resetGraph = (graph) => {
	for (let node in graph) {
		graph[node].visited = false;
	}
};

//Breadth First Search
let routeExistsBetweenTwoPoints = (nodeA, nodeB) => {
	const queue = [];
	nodeA.visited = true;
	queue.push(nodeA);

	let searches = 0;

	while (queue.length !== 0) {
		const dequeuedNode = queue.shift();
		searches++;
		if (dequeuedNode === nodeB) return true;
		for (let child of dequeuedNode.children) {
			if (child.visited === false) {
				child.visited = true;
				queue.push(child);
			}
		}
	}
	return false;
};

describe('Breadth First Search', () => {
	describe('Directed Graph', () => {
		it('Should return true if a path exists between two nodes', () => {
			resetGraph(directedGraphLarge);
			expect(
				routeExistsBetweenTwoPoints(
					directedGraphLarge.node0,
					directedGraphLarge.node17
				)
			).toBe(true);

			resetGraph(directedGraphLarge);
			expect(
				routeExistsBetweenTwoPoints(
					directedGraphLarge.node17,
					directedGraphLarge.node0
				)
			).toBe(true);

			resetGraph(directedGraphLarge);
			expect(
				routeExistsBetweenTwoPoints(
					directedGraphLarge.node16,
					directedGraphLarge.node21
				)
			).toBe(true);
		});

		it('Should return false if a path does not exist between two nodes', () => {
			resetGraph(directedGraphLarge);
			expect(
				routeExistsBetweenTwoPoints(
					directedGraphLarge.node20,
					directedGraphLarge.node1
				)
			).toBe(false);

			resetGraph(directedGraphLarge);
			expect(
				routeExistsBetweenTwoPoints(
					directedGraphLarge.node4,
					directedGraphLarge.node9
				)
			).toBe(false);
		});
	});

	describe('Undirected Graph', () => {
		it('Should return true if a path exists between two nodes', () => {
			resetGraph(undirectedGraphLarge);
			expect(
				routeExistsBetweenTwoPoints(
					undirectedGraphLarge.node0,
					undirectedGraphLarge.node16
				)
			).toBe(true);

			resetGraph(undirectedGraphLarge);
			expect(
				routeExistsBetweenTwoPoints(
					undirectedGraphLarge.node19,
					undirectedGraphLarge.node15
				)
			).toBe(true);

			//Create a new node that is connected
			resetGraph(undirectedGraphLarge);
			undirectedGraphLarge.node34 = new Node(34);
			undirectedGraphLarge.node34.createUndirectedEdge(
				undirectedGraphLarge.node0
			);
			expect(
				routeExistsBetweenTwoPoints(
					undirectedGraphLarge.node0,
					undirectedGraphLarge.node34
				)
			).toBe(true);
		});

		it('Should return false if a path does not exist between two nodes', () => {
			//Create a new node that is not connected
			resetGraph(undirectedGraphLarge);
			undirectedGraphLarge.node35 = new Node(35);
			expect(
				routeExistsBetweenTwoPoints(
					undirectedGraphLarge.node0,
					undirectedGraphLarge.node35
				)
			).toBe(false);
		});
	});
});
