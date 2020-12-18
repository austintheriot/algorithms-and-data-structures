import Queue from './Queue';

describe('Queue', () => {
	it('Should add item to the end of the queue', () => {
		const queue = new Queue();
		queue.add(0);
		expect(queue.linkedList.tail.data).toBe(0);

		queue.add('another');
		expect(queue.linkedList.tail.data).toBe('another');

		queue.add(null);
		expect(queue.linkedList.tail.data).toBe(null);
	});

	it('Should return the queue when add() is called', () => {
		const queue = new Queue();
		expect(queue.add(0)).toBe(queue);
	});

	it('Should remove items from the front of the queue', () => {
		const queue = new Queue();
		queue.add(0).add(1).add(2).add(3).add(4);
		expect(queue.linkedList.head.data).toBe(0);
		expect(queue.linkedList.tail.data).toBe(4);

		queue.remove();
		expect(queue.linkedList.head.data).toBe(1);
		expect(queue.linkedList.tail.data).toBe(4);

		queue.remove();
		expect(queue.linkedList.head.data).toBe(2);
		expect(queue.linkedList.tail.data).toBe(4);

		queue.remove();
		expect(queue.linkedList.head.data).toBe(3);
		expect(queue.linkedList.tail.data).toBe(4);

		queue.remove();
		expect(queue.linkedList.head.data).toBe(4);
		expect(queue.linkedList.tail.data).toBe(4);
		expect(queue.linkedList.head).toBe(queue.linkedList.tail);

		queue.remove();
		expect(queue.linkedList.head).toBe(null);
		expect(queue.linkedList.tail).toBe(null);
	});

	it('Should return the removed item when remove() is called', () => {
		const queue = new Queue();
		queue.add(0).add(1).add(2).add(3).add(4);
		expect(queue.linkedList.head.data).toBe(0);
		expect(queue.linkedList.tail.data).toBe(4);

		expect(queue.remove()).toBe(0);
		expect(queue.remove()).toBe(1);
		expect(queue.remove()).toBe(2);
		expect(queue.remove()).toBe(3);
		expect(queue.remove()).toBe(4);
		expect(queue.remove()).toBe(null);
	});

	it('Should return the front item when peek() is called', () => {
		let queue = new Queue();
		queue.add(0).add(1).add(2).add(3).add(4);
		expect(queue.peek()).toBe(0);

		queue = new Queue();
		queue.add(4).add(3).add(2).add(1).add(0);
		expect(queue.peek()).toBe(4);

		queue = new Queue();
		queue.peek();
		expect(queue.peek()).toBe(null);
	});

	it('Should return true when queue is empty', () => {
		let queue = new Queue();
		expect(queue.isEmpty()).toBe(true);
	});

	it('Should return false when queue is not empty', () => {
		queue = new Queue();
		queue.add(1);
		expect(queue.isEmpty()).toBe(false);

		queue = new Queue();
		queue.add(4).add(3).add(2).add(1).add(0);
		expect(queue.isEmpty()).toBe(false);
	});

	it('Should work when methods follow one another', () => {
		queue = new Queue();
		expect(queue.peek()).toBe(null);
		expect(queue.isEmpty()).toBe(true);
		expect(queue.remove()).toBe(null);

		queue.add(0);
		expect(queue.peek()).toBe(0);
		expect(queue.isEmpty()).toBe(false);

		queue.add(1).remove();
		expect(queue.peek()).toBe(1);
		expect(queue.isEmpty()).toBe(false);

		queue.add(2).remove();
		expect(queue.peek()).toBe(2);
		expect(queue.isEmpty()).toBe(false);

		queue.add(3);
		expect(queue.peek()).toBe(2);
		expect(queue.isEmpty()).toBe(false);
		expect(queue.linkedList.head.data).toBe(2);
		expect(queue.linkedList.tail.data).toBe(3);

		queue.remove();
		queue.remove();
		expect(queue.isEmpty()).toBe(true);
		expect(queue.remove()).toBe(null);
		expect(queue.isEmpty()).toBe(true);
	});
});
