const HashTable = require('./HashTable.solution');

let hashTable;

//dumb search for value (different implementation than .get())
let doesArrayIncludeValue = (hashTable, value) => {
	return !!hashTable.array.find((linkedList) => {
		//assumes a linked list implementation
		return linkedList.find(value);
	});
};

beforeAll(() => {
	hashTable = new HashTable(2);
	hashTable.set('hello', 'world');
	hashTable.set('one', 1);
	hashTable.set('true', true);
	hashTable.set('false', false);
});

describe(`Hash Tables:`, () => {
	test('Should create an empty array when not given an array length', () => {
		const emptyHashTable = new HashTable();
		expect(emptyHashTable.array.length).toBe(0);
	});

	test('HashTable._hash() should return an index within the length of the array', () => {
		expect(hashTable._hash('example')).toBeGreaterThanOrEqual(0);
		expect(hashTable._hash('example')).toBeLessThan(hashTable.array.length);
	});

	test('HashTable._hash() should return an even distribution', () => {
		//Create logic for testing uniform distribution of values at indexes
	});

	test('Should create an array of specified length.', () => {
		const hashTable1 = new HashTable(1);
		const hashTable5 = new HashTable(5);
		const hashTable100 = new HashTable(100);
		const hashTable1000 = new HashTable(1000);

		expect(hashTable1.array.length).toBe(1);
		expect(hashTable5.array.length).toBe(5);
		expect(hashTable100.array.length).toBe(100);
		expect(hashTable1000.array.length).toBe(1000);
	});

	test('HashTable.set() should add values to the array.', () => {
		const newHashTable = new HashTable(1);
		newHashTable.set('two', 2);
		newHashTable.set('three', 3);
		newHashTable.set('four', 4);
		newHashTable.set('five', 5);

		//SHOULD exist
		expect(doesArrayIncludeValue(newHashTable, 'two')).toBe(true);
		expect(doesArrayIncludeValue(newHashTable, 'three')).toBe(true);
		expect(doesArrayIncludeValue(newHashTable, 'four')).toBe(true);
		expect(doesArrayIncludeValue(newHashTable, 'five')).toBe(true);
	});

	test('HashTable.get() should retrieve values from the array.', () => {
		//SHOULD exist
		expect(hashTable.get('hello')).toMatch(/world/);
		expect(hashTable.get('one')).toBe(1);
		expect(hashTable.get('true')).toBe(true);
		expect(hashTable.get('false')).toBe(false);
	});

	test('HashTable.get() should return undefined for nonexistent keys', () => {
		expect(hashTable.get(1)).toBeUndefined();
		expect(hashTable.get('newLookup')).toBeUndefined();
		expect(hashTable.get(() => ({}))).toBeUndefined();
		expect(hashTable.get('this')).toBeUndefined();
	});
});
