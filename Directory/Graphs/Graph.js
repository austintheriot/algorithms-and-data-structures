module.exports = class Node {
	constructor(data = null) {
		this.data = data;
		this.children = [];
		this.visited = false;
	}
};

class Graph {
	constructor() {
		this.children = [];
	}
}
