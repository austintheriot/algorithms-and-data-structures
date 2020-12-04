//implement a doubly linked list with the following functionalities:
//return undefined for nonexistent indexes, etc.

//prepend(data){}
//append(data){}
//get(index){}
//find(callback || value){}
//delete(index){}
//toArray(){} //create array filled with node data

class Node {
	constructor(data, prev, next) {
		this.data = data ?? null;
		this.prev = prev ?? null;
		this.next = next ?? null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	prepend(data) {
		const node = new Node(data, null, this.head);
		if (this.head) this.head.prev = node;
		this.head = node;
		if (!this.tail) this.tail = node;
		this.length++;
		return this;
	}
	append(data) {
		const node = new Node(data, this.tail, null);
		if (this.tail) this.tail.next = node;
		this.tail = node;
		if (!this.head) this.head = node;
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
			while (currentNode) {
				if (search(currentNode)) {
					return currentNode;
				}
				currentNode = currentNode.next;
			}
			return undefined;
		} else {
			while (currentNode) {
				if (currentNode.data === search) {
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
		currentNode.prev.next = currentNode.next;
		currentNode.next.prev = currentNode.prev;
		currentNode.length--;
		return this;
	}
	toArray() {
		const arr = [];
		let currentNode = this.head;
		while (currentNode) {
			arr.push(currentNode.data);
			currentNode = currentNode.next;
		}
		return arr;
	} //create array filled with node data
}

module.exports = LinkedList;
