import dirGL from '../../Graphs/Examples/directedGraphLarge';
import undirGL from '../../Graphs/Examples/undirectedGraphLarge';
import Node from '../../Graphs/GraphNode';

const resetGraph = (graph) => {
	for (let node in graph) {
		graph[node].visited = false;
		graph[node].visited1 = false;
		graph[node].visited2 = false;
	}
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
