const LinkedList = require('./DoublyLinkedList.solution');

describe('LinkedList', () => {
	test('Should prepend data to the head', () => {
		const linkedList = new LinkedList();
		linkedList.prepend(3).prepend(2).prepend(1);
		expect(linkedList.head.data).toBe(1);
		expect(linkedList.head.next.data).toBe(2);
		expect(linkedList.head.next.next.data).toBe(3);
	});

	test('Should append data to the tail', () => {
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

	test('Should return the head value', () => {
		let linkedList = new LinkedList();
		linkedList.prepend(3).prepend(2).prepend(1);
		expect(linkedList.head.data).toBe(1);

		linkedList = new LinkedList();
		linkedList.prepend('example.').prepend('an').prepend('What');
		expect(linkedList.head.data).toBe('What');
	});

	test('Should return the tail value', () => {
		let linkedList = new LinkedList();
		linkedList.prepend(3).prepend(2).prepend(1);
		expect(linkedList.tail.data).toBe(3);

		linkedList = new LinkedList();
		linkedList.prepend('example.').prepend('an').prepend('What');
		expect(linkedList.tail.data).toBe('example.');
	});

	test('Should allow node.prev movement', () => {
		let linkedList = new LinkedList();
		linkedList.prepend(3).prepend(2).prepend(1);
		expect(linkedList.tail.data).toBe(3);
		expect(linkedList.tail.prev.data).toBe(2);
		expect(linkedList.tail.prev.prev.data).toBe(1);
		expect(linkedList.head.next.next.data).toBe(3);
		expect(linkedList.head.next.next.prev.prev.data).toBe(1);
	});

	test('Should update length on prepend', () => {
		let linkedList = new LinkedList();
		expect(linkedList.length).toBe(0);

		linkedList = new LinkedList();
		linkedList.prepend(3).prepend(2).prepend(1);
		expect(linkedList.length).toBe(3);

		linkedList = new LinkedList();
		linkedList.prepend(5).prepend(4).prepend(3).prepend(2).prepend(1);
		expect(linkedList.length).toBe(5);
	});

	test('Should update length on append', () => {
		let linkedList = new LinkedList();
		expect(linkedList.length).toBe(0);

		linkedList = new LinkedList();
		linkedList.append(3).append(2).append(1);
		expect(linkedList.length).toBe(3);

		linkedList = new LinkedList();
		linkedList.append(5).append(4).append(3).append(2).append(1);
		expect(linkedList.length).toBe(5);
	});

	test('Should update length on delete', () => {
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

	test('Should find and return a node, given a value', () => {
		const linkedList = new LinkedList();
		linkedList.prepend(3).prepend(2).prepend(1);
		expect(linkedList.find(1).data).toBe(1);
		expect(linkedList.find(2).data).toBe(2);
		expect(linkedList.find(3).data).toBe(3);
	});

	test('Should find and return a node, given a callback', () => {
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

	test('Should return undefined when node not found', () => {
		const linkedList = new LinkedList();
		linkedList.prepend(3).prepend(2).prepend(1);
		expect(linkedList.find(4)).toBeUndefined();
		expect(linkedList.find(5)).toBeUndefined();
		expect(linkedList.find(6)).toBeUndefined();
	});

	test('Should retrieve values by index', () => {
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

	test('Should return undefined for indexes outside of range', () => {
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

	test('Should delete a node, given an index', () => {
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

	test('Should be traversable forward and backward after a deletion', () => {
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

	test('Should return undefined for deletions outside of index', () => {
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

	test('Should allow chaining of methods', () => {
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
});