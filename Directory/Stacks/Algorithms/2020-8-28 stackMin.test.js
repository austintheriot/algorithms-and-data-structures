//Very basic, doubly Linked List

class Node {
	constructor(data, prev, next, min) {
		this.data = data;
		this.prev = prev;
		this.next = next;
		this.min = min;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	prepend(data, min) {
		const newNode = new Node(data, null, this.head, min);
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
				if (currentNode.data.value === value) {
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
//STACK IMPLEMENTATION /////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

//implements a push(), pop(), and min() function in O(1) time

class Stack {
	constructor() {
		this.linkedList = new LinkedList();
	}

	push(value) {
		//if head is defined, compare to its current min, else set new value as min
		let min = this.linkedList.head
			? Math.min(this.linkedList.head.min, value)
			: value;
		this.linkedList.prepend(value, min);
		return this;
	}
	pop() {
		let poppedData = this.linkedList.head ? this.linkedList.head.data : null;
		this.linkedList.delete(0);
		return poppedData;
	}
	min() {
		return this.linkedList.head ? this.linkedList.head.min : null;
	}
}

// UNIT TESTS /////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

describe('Stack', () => {
	test('Should push item to the top of the stack', () => {
		const stack = new Stack();
		stack.push(0);
		expect(stack.linkedList.length).toBe(1);
		expect(stack.linkedList.head.data).toBe(0);

		stack.push(1);
		expect(stack.linkedList.length).toBe(2);
		expect(stack.linkedList.head.data).toBe(1);

		stack.push(null);
		expect(stack.linkedList.length).toBe(3);
		expect(stack.linkedList.head.data).toBe(null);
	});

	test('Should return the stack when push() is called', () => {
		const stack = new Stack();
		expect(stack.push(0)).toBe(stack);
	});

	test('Should pop items off the top of the stack', () => {
		const stack = new Stack();
		stack.push(0).push(1).push(2).push(3).push(4);
		expect(stack.linkedList.length).toBe(5);
		expect(stack.linkedList.head.data).toBe(4);

		stack.pop();
		expect(stack.linkedList.length).toBe(4);
		expect(stack.linkedList.head.data).toBe(3);

		stack.pop();
		expect(stack.linkedList.length).toBe(3);
		expect(stack.linkedList.head.data).toBe(2);

		stack.pop();
		expect(stack.linkedList.length).toBe(2);
		expect(stack.linkedList.head.data).toBe(1);

		stack.pop();
		expect(stack.linkedList.length).toBe(1);
		expect(stack.linkedList.head.data).toBe(0);

		stack.pop();
		expect(stack.linkedList.length).toBe(0);
		expect(stack.linkedList.head).toBe(null);
	});

	test('Should return the popped item when pop() is called', () => {
		const stack = new Stack();
		stack.push(0).push(1).push(2).push(3).push(4);
		expect(stack.linkedList.length).toBe(5);
		expect(stack.linkedList.head.data).toBe(4);

		expect(stack.pop()).toBe(4);
		expect(stack.pop()).toBe(3);
		expect(stack.pop()).toBe(2);
		expect(stack.pop()).toBe(1);
		expect(stack.pop()).toBe(0);
		expect(stack.pop()).toBe(null);
	});

	test('Should return the minimum of the stack', () => {
		stack = new Stack();
		stack.push(5).push(15).push(0).push(-20).push(75).push(-100);
		expect(stack.min()).toBe(-100); //top === -100
		stack.pop();
		expect(stack.min()).toBe(-20); //top === 75
		stack.pop();
		expect(stack.min()).toBe(-20); //top === -20
		stack.pop();
		expect(stack.min()).toBe(0); //top === 0
		stack.pop();
		expect(stack.min()).toBe(5); //top === 15
		stack.pop();
		expect(stack.min()).toBe(5); //top === 5
		stack.pop();
		expect(stack.min()).toBe(null); //top === null
	});
});
