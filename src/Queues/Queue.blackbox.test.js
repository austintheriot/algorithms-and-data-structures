import Queue from './Queue';

//return null for nonexistent peek() calls, etc.
//add(){}
//remove(){}
//peek(){}
//isEmpty(){}

describe('Queue', () => {
	it('Should implement add() & remove()', () => {
		const queue = new Queue();
		expect(queue.remove()).toBe(null);
		queue.add(10);
		expect(queue.remove()).toBe(10);
		expect(queue.remove()).toBe(null);
		queue.add(9).add(8).add(7).add(6).add(5);
		expect(queue.remove()).toBe(9);
		expect(queue.remove()).toBe(8);
		expect(queue.remove()).toBe(7);
		expect(queue.remove()).toBe(6);
		expect(queue.remove()).toBe(5);
		expect(queue.remove()).toBe(null);
	});

	it('Should implement peek() with add() & remove()', () => {
		const queue = new Queue();
		//empty
		expect(queue.peek()).toBe(null);
		queue.add(10); //10
		expect(queue.peek()).toBe(10);
		queue.add(9); //10, 9
		expect(queue.peek()).toBe(10);
		queue.remove(); //9
		expect(queue.peek()).toBe(9);
		queue.remove(); //empty
		expect(queue.peek()).toBe(null);
	});

	it('Should implement isEmpty() with peek(), add(), and remove()', () => {
		const queue = new Queue();
		//empty
		expect(queue.isEmpty()).toBe(true);
		queue.add(10); //10
		expect(queue.isEmpty()).toBe(false);
		queue.add(9); //10, 9
		expect(queue.isEmpty()).toBe(false);
		queue.remove(); //9
		expect(queue.isEmpty()).toBe(false);
		queue.remove(); //empty
		expect(queue.isEmpty()).toBe(true);
	});
});
