//Very basic, doubly Linked List

class Node {
	constructor(data, prev, next) {
		this.data = data;
		this.prev = prev;
		this.next = next;
	}
}

export default class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	prepend(data) {
		const newNode = new Node(data, null, this.head);
		if (this.head) this.head.prev = newNode; //point existing head to new head
		this.head = newNode; //add new head
		if (!this.tail) this.tail = newNode; //init tail if not already
		this.length++;
		return this;
	}

	append(data) {
		const newNode = new Node(data, this.tail, null);
		if (this.tail) this.tail.next = newNode; //point existing tail to new tail
		this.tail = newNode; //add new head
		if (!this.head) this.head = newNode; //init head if not already
		this.length++;
		return this;
	}

	get(index) {
		if (index < 0 || index > this.length - 1) return undefined;

		let currentNode = this.head;
		for (let i = 0; i < index; i++) {
			currentNode = currentNode.next;
		}
		return currentNode;
	}

	find(search) {
		if (this.length === 0) return undefined;
		let currentNode = this.head;

		//search using callback
		if (typeof search === 'function') {
			let callback = search;
			while (currentNode) {
				if (callback(currentNode)) {
					return currentNode;
				}
				currentNode = currentNode.next;
			}
			return undefined;
		}

		//search using value
		else {
			let value = search;
			while (currentNode) {
				if (currentNode.data === value) {
					return currentNode;
				}
				currentNode = currentNode.next;
			}
			return undefined;
		}
	}

	delete(index) {
		if (index < 0 || index > this.length - 1) return undefined;
		if (this.length === 0) return undefined;

		//linked list is only one node
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
			this.length--;
			return this;
		}

		//else if linked list is multiple nodes:
		//delete head node
		if (index === 0) {
			this.head = this.head.next;
			this.head.prev = null;
			this.length--;
			return this;
		}

		//delete tail node
		if (index === this.length - 1) {
			this.tail = this.tail.prev;
			this.tail.next = null;
			this.length--;
			return this;
		}

		//go to the indicated note
		let currentNode = this.head;
		for (let i = 0; i < index; i++) {
			currentNode = currentNode.next;
		}
		//point the previous node to the next node
		//and point the next node to the previous node
		currentNode.next.prev = currentNode.next.prev.prev;
		currentNode.prev.next = currentNode.prev.next.next;
		this.length--;
		return this;
	}
	toArray() {
		const array = [];
		let currentNode = this.head;
		while (currentNode) {
			array.push(currentNode.data);
			currentNode = currentNode.next;
		}
		return array;
	}
}
