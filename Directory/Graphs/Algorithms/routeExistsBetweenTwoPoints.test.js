const dirGL = require('../Examples/directedGraphLarge');
const undirGL = require('../Examples/undirectedGraphLarge');
const Node = require('../Graph');

const resetGraph = (graph) => {
	for (let node in graph) {
		graph[node].visited = false;
		graph[node].visited1 = false;
		graph[node].visited2 = false;
	}
};

//Breadth First Search (using a queue)
const BFS = (xI, xG) => {
	const queue = [];
	xI.visited = true;
	queue.push(xI);

	while (queue.length !== 0) {
		const dequeuedNode = queue.shift();
		if (dequeuedNode === xG) return true;
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
const DFS = (xI, xG) => {
	const stack = [];
	xI.visited = true;
	stack.push(xI);

	while (stack.length !== 0) {
		const poppedNode = stack.pop();
		if (poppedNode === xG) return true;
		for (let child of poppedNode.children) {
			if (child.visited === false) {
				child.visited = true;
				stack.push(child);
			}
		}
	}
	return false;
};

//Bidirectional BFS
const bidirectionalSearch = (root1, root2) => {
	const queue1 = [];
	const queue2 = [];

	queue1.push(root1);
	root1.visited1 = true;
	queue2.push(root2);
	root2.visited2 = true;

	while (queue1.length !== 0 && queue2.length !== 0) {
		const dequeued1 = queue1.pop();
		if (dequeued1.visited2) {
			return true;
		} else {
			for (let childOf1 of dequeued1.children) {
				if (!childOf1.visited1) {
					childOf1.visited1 = true;
					queue1.push(childOf1);
				}
			}
		}
		const dequeued2 = queue2.pop();
		if (dequeued2.visited1) {
			return true;
		} else {
			for (let childOf2 of dequeued2.children) {
				if (!childOf2.visited2) {
					childOf2.visited2 = true;
					queue2.push(childOf2);
				}
			}
		}
	}
	return false;
};

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

describe('Bidirectional Search', () => {
	describe('Undirected Graph', () => {
		it('Should return true if a path exists between two nodes', () => {
			resetGraph(undirGL);
			expect(bidirectionalSearch(undirGL.node0, undirGL.node17)).toBe(true);

			resetGraph(undirGL);
			expect(bidirectionalSearch(undirGL.node19, undirGL.node15)).toBe(true);

			//Create a new node that is connected
			resetGraph(undirGL);
			undirGL.node34 = new Node(34);
			undirGL.node34.createUndirectedEdge(undirGL.node0);
			expect(bidirectionalSearch(undirGL.node0, undirGL.node34)).toBe(true);
		});

		it('Should return false if a path does not exist between two nodes', () => {
			//Create a new node that is not connected
			resetGraph(undirGL);
			undirGL.node35 = new Node(35);
			expect(bidirectionalSearch(undirGL.node0, undirGL.node35)).toBe(false);
		});
	});

	describe('Directed Graph', () => {
		it('Should return true if a path exists between two nodes', () => {
			resetGraph(dirGL);
			expect(bidirectionalSearch(dirGL.node0, dirGL.node17)).toBe(true);

			resetGraph(dirGL);
			expect(bidirectionalSearch(dirGL.node17, dirGL.node0)).toBe(true);

			resetGraph(dirGL);
			expect(bidirectionalSearch(dirGL.node16, dirGL.node21)).toBe(true);
		});

		it('Should return false if a path does not exist between two nodes', () => {
			resetGraph(dirGL);
			expect(bidirectionalSearch(dirGL.node20, dirGL.node1)).toBe(false);

			resetGraph(dirGL);
			expect(bidirectionalSearch(dirGL.node4, dirGL.node9)).toBe(false);
		});
	});
});
