import Stack from './stackMin';

describe('Stack', () => {
	it('Should implement push, pop, peek, and min in O(1) time,', () => {
		const stack = new Stack();

		//empty stack
		expect(stack.peek()).toBe(null);
		expect(stack.pop()).toBe(null);

		//initialize stack
		stack.push(5).push(15).push(0).push(-20).push(75).push(-100);

		//begin popping
		expect(stack.peek()).toBe(-100);
		expect(stack.min()).toBe(-100);
		expect(stack.pop()).toBe(-100);

		expect(stack.peek()).toBe(75);
		expect(stack.min()).toBe(-20);
		expect(stack.pop()).toBe(75);

		//push some back on
		stack.push(-1000).push(5000);
		expect(stack.peek()).toBe(5000);
		expect(stack.min()).toBe(-1000);
		expect(stack.pop()).toBe(5000);

		expect(stack.peek()).toBe(-1000);
		expect(stack.min()).toBe(-1000);
		expect(stack.pop()).toBe(-1000);

		//continue popping
		expect(stack.peek()).toBe(-20);
		expect(stack.min()).toBe(-20);
		expect(stack.pop()).toBe(-20);

		expect(stack.peek()).toBe(0);
		expect(stack.min()).toBe(0);
		expect(stack.pop()).toBe(0);

		expect(stack.peek()).toBe(15);
		expect(stack.min()).toBe(5);
		expect(stack.pop()).toBe(15);

		expect(stack.peek()).toBe(5);
		expect(stack.min()).toBe(5);
		expect(stack.pop()).toBe(5);

		//empty stack
		expect(stack.peek()).toBe(null);
		expect(stack.min()).toBe(null);
		expect(stack.pop()).toBe(null);
	});
});
