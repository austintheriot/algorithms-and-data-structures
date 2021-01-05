//implement a simple queue with the following functionalities:
//return null for nonexistent peek() calls, etc.
//add(){}
//remove(){}
//peek(){}
//isEmpty(){}

//less performant but simpler
class Queue {
	constructor() {
		this.array = [];
	}

	isEmpty() {
		return this.array[0] == undefined ? true : false;
	}

	add(data) {
		this.array.push(data);
		return this;
	}

	remove() {
		return this.isEmpty() ? null : this.array.shift();
	}

	peek() {
		return this.isEmpty() ? null : this.array[0];
	}
}

//more performant but less simple
//implementing the queue directly using a quasi-linked list

class Node {
	constructor(data, next) {
		this.data = data ?? null;
		this.next = next ?? null;
	}
}

export default class Queue {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	isEmpty() {
		return this.head == null ? true : false;
	}

	add(data) {
		const node = new Node(data);
		if (this.tail) this.tail.next = node;
		this.tail = node;
		if (this.head == null) this.head = node;
		return this;
	}

	remove() {
		//empty case
		if (this.head == null && this.tail == null) return null;

		//covers the single node case
		if (this.head === this.tail) {
			const data = this.head.data;
			this.head = null;
			this.tail = null;
			return data;
		}

		//2 or more nodes
		const data = this.head.data;
		this.head = this.head.next;
		return data;
	}

	peek() {
		return this.head ? this.head.data : null;
	}
}
