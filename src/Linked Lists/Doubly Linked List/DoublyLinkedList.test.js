import LinkedList from './DoublyLinkedList.solution';

describe('LinkedList', () => {
	it('Should prepend data to the head', () => {
		const linkedList = new LinkedList();
		linkedList.prepend(3).prepend(2).prepend(1);
		expect(linkedList.head.data).toBe(1);
		expect(linkedList.head.next.data).toBe(2);
		expect(linkedList.head.next.next.data).toBe(3);
	});

	it('Should append data to the tail', () => {
		let linkedList = new LinkedList();
		expect(linkedList.length).toBe(0);

		linkedList.append(1).append(2).append(3);
		expect(linkedList.length).toBe(3);
		expect(linkedList.tail.data).toBe(3);

		linkedList = new LinkedList();
		linkedList.append('This').append('is').append('an').append('example.');
		expect(linkedList.length).toBe(4);
		expect(linkedList.tail.data).toBe('example.');
	});

	it('Should return the head value', () => {
		let linkedList = new LinkedList();
		linkedList.prepend(3).prepend(2).prepend(1);
		expect(linkedList.head.data).toBe(1);

		linkedList = new LinkedList();
		linkedList.prepend('example.').prepend('an').prepend('What');
		expect(linkedList.head.data).toBe('What');
	});

	it('Should return the tail value', () => {
		let linkedList = new LinkedList();
		linkedList.prepend(3).prepend(2).prepend(1);
		expect(linkedList.tail.data).toBe(3);

		linkedList = new LinkedList();
		linkedList.prepend('example.').prepend('an').prepend('What');
		expect(linkedList.tail.data).toBe('example.');
	});

	it('Should allow node.prev movement', () => {
		let linkedList = new LinkedList();
		linkedList.prepend(3).prepend(2).prepend(1);
		expect(linkedList.tail.data).toBe(3);
		expect(linkedList.tail.prev.data).toBe(2);
		expect(linkedList.tail.prev.prev.data).toBe(1);
		expect(linkedList.head.next.next.data).toBe(3);
		expect(linkedList.head.next.next.prev.prev.data).toBe(1);
	});

	it('Should update length on prepend', () => {
		let linkedList = new LinkedList();
		expect(linkedList.length).toBe(0);

		linkedList = new LinkedList();
		linkedList.prepend(3).prepend(2).prepend(1);
		expect(linkedList.length).toBe(3);

		linkedList = new LinkedList();
		linkedList.prepend(5).prepend(4).prepend(3).prepend(2).prepend(1);
		expect(linkedList.length).toBe(5);
	});

	it('Should update length on append', () => {
		let linkedList = new LinkedList();
		expect(linkedList.length).toBe(0);

		linkedList = new LinkedList();
		linkedList.append(3).append(2).append(1);
		expect(linkedList.length).toBe(3);

		linkedList = new LinkedList();
		linkedList.append(5).append(4).append(3).append(2).append(1);
		expect(linkedList.length).toBe(5);
	});

	it('Should update length on delete', () => {
		let linkedList = new LinkedList();
		expect(linkedList.length).toBe(0);

		linkedList = new LinkedList();
		linkedList.prepend(2).prepend(1).prepend(0);
		expect(linkedList.length).toBe(3);
		linkedList.delete(2).delete(1).delete(0);
		expect(linkedList.length).toBe(0);

		linkedList = new LinkedList();
		linkedList.append(5).append(4).append(3).append(2).append(1);
		expect(linkedList.length).toBe(5);
		linkedList.delete(0).delete(0).delete(0);
		expect(linkedList.length).toBe(2);

		linkedList = new LinkedList();
		linkedList.append(5).append(4).append(3).append(2).append(1);
		expect(linkedList.length).toBe(5);
		linkedList.delete(0);
		expect(linkedList.length).toBe(4);
	});

	it('Should find and return a node, given a value', () => {
		const linkedList = new LinkedList();
		linkedList.prepend(3).prepend(2).prepend(1);
		expect(linkedList.find(1).data).toBe(1);
		expect(linkedList.find(2).data).toBe(2);
		expect(linkedList.find(3).data).toBe(3);
	});

	it('Should find and return a node, given a callback', () => {
		const linkedList = new LinkedList();
		linkedList
			.prepend({
				key: '2',
				value: 2,
			})
			.prepend({
				key: '1',
				value: 1,
			})
			.prepend({
				key: '0',
				value: 0,
			});
		expect(linkedList.find((node) => node.data.key === '2').data.value).toBe(2);
		expect(linkedList.find((node) => node.data.key === '1').data.value).toBe(1);
		expect(linkedList.find((node) => node.data.key === '0').data.value).toBe(0);
	});

	it('Should return undefined when node not found', () => {
		const linkedList = new LinkedList();
		linkedList.prepend(3).prepend(2).prepend(1);
		expect(linkedList.find(4)).toBeUndefined();
		expect(linkedList.find(5)).toBeUndefined();
		expect(linkedList.find(6)).toBeUndefined();
	});

	it('Should retrieve values by index', () => {
		const linkedList = new LinkedList();
		linkedList
			.prepend('sentence.')
			.prepend('a')
			.prepend('of')
			.prepend('example')
			.prepend('an')
			.prepend('is')
			.prepend('This');
		expect(linkedList.get(0).data).toBe('This');
		expect(linkedList.get(3).data).toBe('example');
		expect(linkedList.get(6).data).toBe('sentence.');
	});

	it('Should return undefined for indexes outside of range', () => {
		const linkedList = new LinkedList();
		linkedList
			.prepend('sentence.')
			.prepend('a')
			.prepend('of')
			.prepend('example')
			.prepend('an')
			.prepend('is')
			.prepend('This');
		expect(linkedList.get(-1)).toBeUndefined();
		expect(linkedList.get(7)).toBeUndefined();
	});

	it('Should delete a node, given an index', () => {
		const linkedList = new LinkedList();
		linkedList
			.prepend('sentence.')
			.prepend('a')
			.prepend('of')
			.prepend('example')
			.prepend('an')
			.prepend('is')
			.prepend('This');
		//test original length
		expect(linkedList.length).toBe(7);
		//test head data
		expect(linkedList.get(0).data).toBe('This');
		//test tail data
		expect(linkedList.get(linkedList.length - 1).data).toBe('sentence.');

		linkedList.delete(0);
		//test length
		expect(linkedList.length).toBe(6);
		//test head data
		expect(linkedList.get(0).data).toBe('is');

		linkedList.delete(linkedList.length - 1);
		//test length
		expect(linkedList.length).toBe(5);
		//test tail data
		expect(linkedList.get(linkedList.length - 1).data).toBe('a');
	});

	it('Should not be able to access head or tail after deleting a single node Linked List', () => {
		const linkedList = new LinkedList();
		linkedList.prepend('data');
		expect(linkedList.length).toBe(1);
		expect(linkedList.head.data).toBe('data');
		expect(linkedList.tail.data).toBe('data');

		linkedList.delete(0);
		expect(linkedList.length).toBe(0);
		expect(linkedList.head).toBe(null);
		expect(linkedList.tail).toBe(null);
	});

	it('Should change head after deletion', () => {
		const linkedList = new LinkedList();
		linkedList.append(0).append(1).append(2);
		expect(linkedList.head.data).toBe(0);
		expect(linkedList.head.prev).toBe(null);

		linkedList.delete(0);
		expect(linkedList.head.data).toBe(1);
		expect(linkedList.head.prev).toBe(null);
	});

	it('Should change tail after deletion', () => {
		const linkedList = new LinkedList();
		linkedList.append(0).append(1).append(2);
		expect(linkedList.tail.data).toBe(2);
		expect(linkedList.tail.next).toBe(null);

		//delete head
		linkedList.delete(0);
		expect(linkedList.tail.data).toBe(2);
		expect(linkedList.tail.next).toBe(null);

		//delete tail
		linkedList.delete(1);
		expect(linkedList.tail.data).toBe(1);
		expect(linkedList.tail.next).toBe(null);
		expect(linkedList.length).toBe(1);
	});

	it('Head and tail should be equivalent after deleting down to 1 node', () => {
		const linkedList = new LinkedList();
		linkedList.append(0).append(1);
		expect(linkedList.head.prev).toBe(null);
		expect(linkedList.head.data).toBe(0);
		expect(linkedList.tail.data).toBe(1);
		expect(linkedList.tail.next).toBe(null);

		//delete head
		linkedList.delete(0);
		expect(linkedList.length).toBe(1);
		expect(linkedList.head.prev).toBe(null);
		expect(linkedList.head.data).toBe(1);
		expect(linkedList.head.next).toBe(null);

		expect(linkedList.tail.prev).toBe(null);
		expect(linkedList.tail.data).toBe(1);
		expect(linkedList.tail.next).toBe(null);

		expect(linkedList.head.data).toBe(linkedList.tail.data);
	});

	it('Should be traversable forward and backward after a deletion', () => {
		const linkedList = new LinkedList();
		linkedList.append(0).append(1).append(2).append(3).append(4).append(5);
		linkedList.delete(3);
		expect(linkedList.head.data).toBe(0);
		expect(linkedList.head.next.data).toBe(1);
		expect(linkedList.head.next.next.data).toBe(2);
		expect(linkedList.head.next.next.next.data).toBe(4);
		expect(linkedList.head.next.next.next.next.data).toBe(5);

		expect(linkedList.tail.data).toBe(5);
		expect(linkedList.tail.prev.data).toBe(4);
		expect(linkedList.tail.prev.prev.data).toBe(2);
		expect(linkedList.tail.prev.prev.prev.data).toBe(1);
		expect(linkedList.tail.prev.prev.prev.prev.data).toBe(0);
	});

	it('Should return undefined for deletions outside of index', () => {
		const linkedList = new LinkedList();
		linkedList
			.prepend('sentence.')
			.prepend('a')
			.prepend('of')
			.prepend('example')
			.prepend('an')
			.prepend('is')
			.prepend('This');
		expect(linkedList.delete(-1)).toBeUndefined();
		expect(linkedList.delete(7)).toBeUndefined();
	});

	it('Should allow chaining of methods', () => {
		const linkedList = new LinkedList();
		linkedList
			.prepend(0)
			.delete(0)
			.prepend(1)
			.delete(0)
			.prepend(2)
			.prepend(1)
			.prepend(0);
		expect(linkedList.get(2).data).toBe(2);
	});

	it('Should return an array', () => {
		const linkedList = new LinkedList();
		linkedList.append(0).append(1).append(2).append(3).append(4).append(5);
		const array = linkedList.toArray();
		expect(Array.isArray(array)).toBe(true);
	});

	it('Should return an array of correct length', () => {
		const linkedList = new LinkedList();
		let array = linkedList.toArray();
		expect(array.length).toBe(0);

		linkedList.append(0).append(1).append(2).append(3).append(4).append(5);
		array = linkedList.toArray();
		expect(array.length).toBe(6);
	});

	it('Should return an array in which the values match the original linked list', () => {
		const linkedList = new LinkedList();
		linkedList.append(0).append(1).append(2).append(3).append(4).append(5);
		const array = linkedList.toArray();
		expect(array[0]).toBe(linkedList.get(0).data);
		expect(array[1]).toBe(linkedList.get(1).data);
		expect(array[2]).toBe(linkedList.get(2).data);
		expect(array[3]).toBe(linkedList.get(3).data);
		expect(array[4]).toBe(linkedList.get(4).data);
	});
});
