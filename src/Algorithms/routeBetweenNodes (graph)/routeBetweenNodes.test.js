import dirGL from '../../../Data Structures/Graphs/Examples/directedGraphLarge';
import undirGL from '../../../Data Structures/Graphs/Examples/undirectedGraphLarge';
import Node from '../../../Data Structures/Graphs/GraphNode';
import search from './routeBetweenNodes';

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
			expect(search(dirGL.node0, dirGL.node17)).toBe(true);

			resetGraph(dirGL);
			expect(search(dirGL.node17, dirGL.node0)).toBe(true);

			resetGraph(dirGL);
			expect(search(dirGL.node16, dirGL.node21)).toBe(true);
		});

		it('Should return false if a path does not exist between two nodes', () => {
			resetGraph(dirGL);
			expect(search(dirGL.node20, dirGL.node1)).toBe(false);

			resetGraph(dirGL);
			expect(search(dirGL.node4, dirGL.node9)).toBe(false);
		});
	});

	describe('Undirected Graph', () => {
		it('Should return true if a path exists between two nodes', () => {
			resetGraph(undirGL);
			expect(search(undirGL.node0, undirGL.node16)).toBe(true);

			resetGraph(undirGL);
			expect(search(undirGL.node19, undirGL.node15)).toBe(true);

			//Create a new node that is connected
			resetGraph(undirGL);
			undirGL.node34 = new Node(34);
			undirGL.node34.createUndirectedEdge(undirGL.node0);
			expect(search(undirGL.node0, undirGL.node34)).toBe(true);
		});

		it('Should return false if a path does not exist between two nodes', () => {
			//Create a new node that is not connected
			resetGraph(undirGL);
			undirGL.node35 = new Node(35);
			expect(search(undirGL.node0, undirGL.node35)).toBe(false);
		});
	});
});
