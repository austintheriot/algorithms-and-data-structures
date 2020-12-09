//implement a simple queue with the following functionalities:
//(use a linked list)
//add()
//remove()
//peek()
//isEmpty()

class Node {
	constructor(data, next) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	append(data) {
		const newNode = new Node(data, null);
		if (this.tail) this.tail.next = newNode;
		this.tail = newNode;
		if (!this.head) this.head = newNode;
		return this;
	}

	deleteHead() {
		if (!this.head) return this;

		if (this.head === this.tail) {
			this.head = null;
			this.tail = null;
			return this;
		}

		this.head = this.head.next;
		return this;
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
		const deletedHead = this.linkedList.head ? this.linkedList.head.data : null;
		this.linkedList.deleteHead();
		return deletedHead;
	}

	peek() {
		return this.linkedList.head ? this.linkedList.head.data : null;
	}

	isEmpty() {
		return this.linkedList.head === null ? true : false;
	}
};
