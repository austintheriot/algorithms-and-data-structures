const dirGL = require('../Examples/directedGraphLarge');
const undirGL = require('../Examples/undirectedGraphLarge');
const Node = require('../Graph');

const resetGraph = (graph) => {
	for (let node in graph) {
		graph[node].visited = false;
	}
};

//Breadth First Search (using a queue)
const BFS = (nodeA, nodeB) => {
	const queue = [];
	nodeA.visited = true;
	queue.push(nodeA);

	while (queue.length !== 0) {
		const dequeuedNode = queue.shift();
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

//Depth First Search (using a stack)
const DFS = (nodeA, nodeB) => {
	const stack = [];
	nodeA.visited = true;
	stack.push(nodeA);

	while (stack.length !== 0) {
		const poppedNode = stack.pop();
		if (poppedNode === nodeB) return true;
		for (let child of poppedNode.children) {
			if (child.visited === false) {
				child.visited = true;
				stack.push(child);
			}
		}
	}
	return false;
};

describe('Breadth First Search', () => {
	describe('Directed Graph', () => {
		it('Should return true if a path exists between two nodes', () => {
			resetGraph(dirGL);
			expect(BFS(dirGL.node0, dirGL.node17)).toBe(true);

			resetGraph(dirGL);
			expect(BFS(dirGL.node17, dirGL.node0)).toBe(true);

			resetGraph(dirGL);
			expect(BFS(dirGL.node16, dirGL.node21)).toBe(true);
		});

		it('Should return false if a path does not exist between two nodes', () => {
			resetGraph(dirGL);
			expect(BFS(dirGL.node20, dirGL.node1)).toBe(false);

			resetGraph(dirGL);
			expect(BFS(dirGL.node4, dirGL.node9)).toBe(false);
		});
	});

	describe('Undirected Graph', () => {
		it('Should return true if a path exists between two nodes', () => {
			resetGraph(undirGL);
			expect(BFS(undirGL.node0, undirGL.node16)).toBe(true);

			resetGraph(undirGL);
			expect(BFS(undirGL.node19, undirGL.node15)).toBe(true);

			//Create a new node that is connected
			resetGraph(undirGL);
			undirGL.node34 = new Node(34);
			undirGL.node34.createUndirectedEdge(undirGL.node0);
			expect(BFS(undirGL.node0, undirGL.node34)).toBe(true);
		});

		it('Should return false if a path does not exist between two nodes', () => {
			//Create a new node that is not connected
			resetGraph(undirGL);
			undirGL.node35 = new Node(35);
			expect(BFS(undirGL.node0, undirGL.node35)).toBe(false);
		});
	});
});

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

describe('Depth First Search', () => {
	describe('Directed Graph', () => {
		it('Should return true if a path exists between two nodes', () => {
			resetGraph(dirGL);
			expect(DFS(dirGL.node0, dirGL.node17)).toBe(true);

			resetGraph(dirGL);
			expect(DFS(dirGL.node17, dirGL.node0)).toBe(true);

			resetGraph(dirGL);
			expect(DFS(dirGL.node16, dirGL.node21)).toBe(true);
		});

		it('Should return false if a path does not exist between two nodes', () => {
			resetGraph(dirGL);
			expect(DFS(dirGL.node20, dirGL.node1)).toBe(false);

			resetGraph(dirGL);
			expect(DFS(dirGL.node4, dirGL.node9)).toBe(false);
		});
	});

	describe('Undirected Graph', () => {
		it('Should return true if a path exists between two nodes', () => {
			resetGraph(undirGL);
			expect(DFS(undirGL.node0, undirGL.node17)).toBe(true);

			resetGraph(undirGL);
			expect(DFS(undirGL.node19, undirGL.node15)).toBe(true);

			//Create a new node that is connected
			resetGraph(undirGL);
			undirGL.node34 = new Node(34);
			undirGL.node34.createUndirectedEdge(undirGL.node0);
			expect(DFS(undirGL.node0, undirGL.node34)).toBe(true);
		});

		it('Should return false if a path does not exist between two nodes', () => {
			//Create a new node that is not connected
			resetGraph(undirGL);
			undirGL.node35 = new Node(35);
			expect(DFS(undirGL.node0, undirGL.node35)).toBe(false);
		});
	});
});
