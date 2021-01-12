//implement push(), pop(), and min() function in O(1) time
//return null for nonexistent peek() and pop() calls, etc.

class Node {
	constructor(data, min) {
		this.data = data ?? null;
		this.min = min ?? null;
	}
}

export default class Stack {
	constructor() {
		this.array = [];
	}

	push(data) {
		const min = this.min() ? Math.min(this.min(), data) : data;
		this.array.push(new Node(data, min));
		return this;
	}

	pop() {
		return this.array.length > 0 ? this.array.pop().data : null;
	}

	peek() {
		return this.array.length > 0
			? this.array[this.array.length - 1].data
			: null;
	}

	min() {
		return this.array.length > 0 ? this.array[this.array.length - 1].min : null;
	}
}
