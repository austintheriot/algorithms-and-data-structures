const LinkedList = require('./SinglyLinkedList');

describe('LinkedList', () => {
	test('Should add values to the head', () => {
		const linkedList = new LinkedList();
		linkedList.prepend(3).prepend(2).prepend(1);
		expect(linkedList.head.value).toBe(1);
		expect(linkedList.head.next.value).toBe(2);
		expect(linkedList.head.next.next.value).toBe(3);
	});

	test('Should update length when given new values', () => {
		let linkedList = new LinkedList();
		expect(linkedList.length).toBe(0);

		linkedList = new LinkedList();
		linkedList.prepend(3).prepend(2).prepend(1);
		expect(linkedList.length).toBe(3);

		linkedList = new LinkedList();
		linkedList.prepend(5).prepend(4).prepend(3).prepend(2).prepend(1);
		expect(linkedList.length).toBe(5);
	});

	test('Should find a node, given a value', () => {
		const linkedList = new LinkedList();
		linkedList.prepend(3).prepend(2).prepend(1);
		expect(linkedList.find(1).value).toBe(1);
		expect(linkedList.find(2).value).toBe(2);
		expect(linkedList.find(3).value).toBe(3);
	});

	test('Should find a node, given a callback', () => {
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
		expect(linkedList.find((nodeValue) => nodeValue.key === '2').value).toBe(2);
		expect(linkedList.find((nodeValue) => nodeValue.key === '1').value).toBe(1);
		expect(linkedList.find((nodeValue) => nodeValue.key === '0').value).toBe(0);
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
		expect(linkedList.get(0).value).toBe('This');
		expect(linkedList.get(3).value).toBe('example');
		expect(linkedList.get(6).value).toBe('sentence.');
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
		//test head value
		expect(linkedList.get(0).value).toBe('This');
		//test tail value
		expect(linkedList.get(linkedList.length - 1).value).toBe('sentence.');

		linkedList.delete(0);
		//test length
		expect(linkedList.length).toBe(6);
		//test head value
		expect(linkedList.get(0).value).toBe('is');

		linkedList.delete(linkedList.length - 1);
		//test length
		expect(linkedList.length).toBe(5);
		//test tail value
		expect(linkedList.get(linkedList.length - 1).value).toBe('a');
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
		expect(linkedList.get(2).value).toBe(2);
	});
});
