//implement a simple queue with the following functionalities:
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
		//if length === 0
		if (!this.head) return null;

		//if length === 1
		if (this.head === this.tail) {
			const deletedNode = this.head;
			this.head = null;
			this.tail = null;
			return deletedNode;
		}

		//if length > 1
		const deletedHead = this.head;
		this.head = this.head.next;
		return deletedHead;
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
		const deleteData = this.linkedList.head ? this.linkedList.head.data : null;
		this.linkedList.deleteHead();
		return deleteData;
	}

	peek() {
		return this.linkedList.head ? this.linkedList.head.data : null;
	}

	isEmpty() {
		return !this.linkedList.head;
	}
};
