//implement a simple queue with the following functionalities:
//use a linked list
//return null for nonexistent peek() calls, etc.
//add(){}
//remove(){}
//peek(){}
//isEmpty(){}

class Node {
	constructor(data, next) {
		this.data = data ?? null;
		this.next = next || null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	append(data) {
		const newNode = new Node(data, null);
		if (this.tail) this.tail.next = newNode;
		this.tail = newNode;
		if (!this.head) this.head = newNode;
		this.length++;
		return this;
	}

	deleteHead() {
		if (!this.head) return this;

		if (this.head === this.tail) {
			this.head = null;
			this.tail = null;
			this.length--;
			return this;
		}

		this.head = this.head.next;
		this.length--;
		return this;
	}

	isEmpty() {
		return !!this.head;
	}
}

module.exports = class Queue {
	constructor() {
		this.linkedList = new LinkedList();
	}
	add(data) {
		this.linkedList.append(data);
		return this;
	}
	remove() {
		if (!this.linkedList.head) return null;
		const head = this.linkedList.head.data;
		this.linkedList.deleteHead();
		return head;
	}
	peek() {
		return this.linkedList.head ? this.linkedList.head.data : null;
	}
	isEmpty() {
		return !this.linkedList.head;
	}
};
