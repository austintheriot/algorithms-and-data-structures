const LinkedList = require('./SinglyLinkedList');

describe('LinkedList', () => {
	test('Should add data to the head', () => {
		const linkedList = new LinkedList();
		linkedList.prepend(3).prepend(2).prepend(1);
		expect(linkedList.head.data).toBe(1);
		expect(linkedList.head.next.data).toBe(2);
		expect(linkedList.head.next.next.data).toBe(3);
	});

	test('Should update length when given new data', () => {
		let linkedList = new LinkedList();
		expect(linkedList.length).toBe(0);

		linkedList = new LinkedList();
		linkedList.prepend(3).prepend(2).prepend(1);
		expect(linkedList.length).toBe(3);

		linkedList = new LinkedList();
		linkedList.prepend(5).prepend(4).prepend(3).prepend(2).prepend(1);
		expect(linkedList.length).toBe(5);
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
