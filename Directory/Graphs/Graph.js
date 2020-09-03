export class Node {
	constructor(data = null) {
		this.data = data;
		this.children = [];
		this.visited = false;
	}
}

export class Graph {
	constructor() {
		this.nodes = [];
	}
}
