//implement push(), pop(), and min() function in O(1) time
//return null for nonexistent peek() and pop() calls, etc.

class Node {
	constructor(data, min) {
		this.data = data;
		this.min = min;
	}
}
export default class Stack {
	constructor() {
		this.array = [];
	}

	push(data) {
		const min = this.array.slice(-1)[0]
			? Math.min(this.array.slice(-1)[0].min, data)
			: data;
		this.array.push(new Node(data, min));
		return this;
	}

	pop() {
		const last = this.array.pop()?.data;
		return last ?? null;
	}

	peek() {
		return this.array.slice(-1)[0]?.data ?? null;
	}

	isEmpty() {
		return this.array[0] == undefined ? true : false;
	}

	min() {
		return this.array.slice(-1)[0]?.min ?? null;
	}
}
