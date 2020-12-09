const Node = require('./GraphNode');

describe('Node', () => {
	it('Should instantiate a node', () => {
		const node = new Node();
		expect(node).toBeInstanceOf(Node);
	});

	it('Should create a node with initialized data', () => {
		const node = new Node(0);
		expect(node.data).toBe(0);
	});

	it('Should have properties data, children, and visited', () => {
		const node = new Node();
		expect(node).toHaveProperty('data');
		expect(node).toHaveProperty('children');
		expect(node).toHaveProperty('visited');
	});

	describe('createUndirectedEdge()', () => {
		it('Should create an edge between two nodes', () => {
			const node0 = new Node(0);
			const node1 = new Node(0);
			node0.createUndirectedEdge(node1);

			expect(node0.children).toEqual([node1]);
			expect(node1.children).toEqual([node0]);
		});

		it('Should ignore if an edge already exists', () => {
			const node0 = new Node(0);
			const node1 = new Node(0);
			node0.createUndirectedEdge(node1);
			node1.createUndirectedEdge(node0);
			node0.createUndirectedEdge(node1);

			expect(node0.children).toEqual([node1]);
			expect(node1.children).toEqual([node0]);
		});
	});

	describe('createDirectedEdge()', () => {
		it('Should create a directed edge between two nodes', () => {
			const node0 = new Node(0);
			const node1 = new Node(0);
			node0.createDirectedEdge(node1);

			expect(node0.children).toEqual([node1]);
		});

		it('Should not create an edge back to the original node', () => {
			const node0 = new Node(0);
			const node1 = new Node(0);
			node0.createDirectedEdge(node1);

			expect(node1.children).not.toEqual([node0]);
		});

		it('Should delete an existing undirected edge', () => {
			const node0 = new Node(0);
			const node1 = new Node(0);

			//first, create undirected edge
			node0.createUndirectedEdge(node1);
			expect(node1.children).toEqual([node0]);

			//overwrite with a directed edge
			node0.createDirectedEdge(node1);
			expect(node0.children).toEqual([node1]);
			expect(node1.children).not.toEqual([node0]);
		});
	});
});
