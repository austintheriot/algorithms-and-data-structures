const Stack = require('./Stack');

describe('Stack', () => {
	it('Should push item to the top of the stack', () => {
		const stack = new Stack();
		stack.push(0);
		expect(stack.linkedList.length).toBe(1);
		expect(stack.linkedList.head.data).toBe(0);

		stack.push('another');
		expect(stack.linkedList.length).toBe(2);
		expect(stack.linkedList.head.data).toBe('another');

		stack.push(null);
		expect(stack.linkedList.length).toBe(3);
		expect(stack.linkedList.head.data).toBe(null);
	});

	it('Should return the stack when push() is called', () => {
		const stack = new Stack();
		expect(stack.push(0)).toBe(stack);
	});

	it('Should pop items off the top of the stack', () => {
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

	it('Should return the popped item when pop() is called', () => {
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

	it('Should return the topmost item when peek() is called', () => {
		let stack = new Stack();
		stack.push(0).push(1).push(2).push(3).push(4);
		expect(stack.peek()).toBe(4);

		stack = new Stack();
		stack.push(4).push(3).push(2).push(1).push(0);
		expect(stack.peek()).toBe(0);

		stack = new Stack();
		stack.peek();
		expect(stack.peek()).toBe(null);
	});

	it('Should return true when stack is empty', () => {
		let stack = new Stack();
		expect(stack.isEmpty()).toBe(true);
	});

	it('Should return false when stack is not empty', () => {
		stack = new Stack();
		stack.push(1);
		expect(stack.isEmpty()).toBe(false);

		stack = new Stack();
		stack.push(4).push(3).push(2).push(1).push(0);
		expect(stack.isEmpty()).toBe(false);
	});

	it('Should work when methods follow one another', () => {
		stack = new Stack();
		expect(stack.peek()).toBe(null);
		expect(stack.isEmpty()).toBe(true);
		expect(stack.pop()).toBe(null);

		stack.push(0);
		expect(stack.peek()).toBe(0);
		expect(stack.isEmpty()).toBe(false);

		stack.push(1).pop();
		expect(stack.peek()).toBe(0);
		expect(stack.isEmpty()).toBe(false);

		stack.push(2).pop();
		expect(stack.peek()).toBe(0);
		expect(stack.isEmpty()).toBe(false);

		stack.pop();
		expect(stack.isEmpty()).toBe(true);
		expect(stack.pop()).toBe(null);
		expect(stack.isEmpty()).toBe(true);
	});
});
