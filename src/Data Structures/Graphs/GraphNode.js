export default class Node {
	constructor(data = null) {
		this.data = data;
		this.children = [];
		this.visited = false;
	}
	createUndirectedEdge(node) {
		if (!this.children.find((child) => child === node)) {
			this.children.push(node);
		}
		if (!node.children.find((child) => child === this)) {
			node.children.push(this);
		}
		return this;
	}

	createDirectedEdge(node) {
		//add edge to node (ignore if it already exists)
		if (!this.children.find((child) => child === node)) {
			this.children.push(node);
		}
		//if an edge exists back to this, delete it
		if (node.children.find((child) => child === this)) {
			const indexOfThis = node.children.findIndex((child) => child === this);
			node.children.splice(indexOfThis, 1);
		}
		return this;
	}
}
