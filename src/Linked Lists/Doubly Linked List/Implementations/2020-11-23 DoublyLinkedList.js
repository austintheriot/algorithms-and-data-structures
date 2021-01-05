//implement a doubly linked list with the following functionalities:
//return undefined for nonexistent indexes, etc.

//prepend(){}
//append(){}
//get(index){}
//find(callback || value){}
//delete(index){}
//toArray(){} //create array filled with node data

class Node {
	constructor(data, prev, next) {
		this.data = data;
		this.prev = prev;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	//prepend
	prepend(data) {
		const newNode = new Node(data, null, this.head);
		if (this.head) this.head.prev = newNode;
		this.head = newNode;
		if (!this.tail) this.tail = newNode;
		this.length++;
		return this;
	}
	append(data) {
		const newNode = new Node(data, this.tail, null);
		if (this.tail) this.tail.next = newNode;
		this.tail = newNode;
		if (!this.head) this.head = newNode;
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
		let currentNode = this.head;
		if (typeof search === 'function') {
			const callback = search;
			while (currentNode) {
				if (callback(currentNode)) {
					return currentNode;
				}
				currentNode = currentNode.next;
			}
			return undefined;
		} else {
			const value = search;
			while (currentNode) {
				if (value === currentNode.data) {
					return currentNode;
				}
				currentNode = currentNode.next;
			}
			return undefined;
		}
	}
	delete(index) {
		if (index < 0 || index > this.length - 1) return undefined;
		if (this.head === this.tail) {
			this.head = null;
			this.tail = null;
			this.length--;
			return this;
		}
		if (index === 0) {
			this.head = this.head.next;
			this.head.prev = null;
			this.length--;
			return this;
		}
		if (index === this.length - 1) {
			this.tail = this.tail.prev;
			this.tail.next = null;
			this.length--;
			return this;
		}
		let currentNode = this.head;
		for (let i = 0; i < index; i++) {
			currentNode = currentNode.next;
		}
		if (currentNode.prev) currentNode.prev.next = currentNode.next;
		if (currentNode.next) currentNode.next.prev = currentNode.prev;
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

module.exports = LinkedList;
