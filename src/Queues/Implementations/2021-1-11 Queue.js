//implement a simple queue with the following functionalities:
//return null for nonexistent peek() calls, etc.
//add(){}
//remove(){}
//peek(){}
//isEmpty(){}

class Node {
	constructor(data) {
		this.next = null;
		this.data = data ?? null;
	}
}

export default class Queue {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	add(data) {
		const node = new Node(data);
		if (!this.head) this.head = node;
		if (this.tail) {
			this.tail.next = node;
			this.tail.next.prev = this.tail;
		}
		this.tail = node;
		return this;
	}

	remove() {
		//empty
		if (!this.head && !this.tail) {
			return null;
		}

		//one node
		if (this.head === this.tail) {
			const data = this.head.data;
			this.head = null;
			this.tail = null;
			return data;
		}

		//more than one node
		const data = this.head.data;
		this.head = this.head.next;
		this.head.prev = null;
		return data;
	}

	peek() {
		return this.head?.data ?? null;
	}

	isEmpty() {
		return !this.head;
	}
}
