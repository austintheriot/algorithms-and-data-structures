const LinkedList = require('./DoublyLinkedList');

//return undefined for out of range indexes

describe('LinkedList (Black Box Test)', () => {
	it('Should implement .prepend(), .append(), .get(index), .delete(index) & .find(search)', () => {
		const linkedList = new LinkedList();
		expect(linkedList.get(-1)).toBeUndefined();
		expect(linkedList.get(0)).toBeUndefined();
		expect(linkedList.get(1)).toBeUndefined();

		expect(linkedList.find(-100)).toBeUndefined();
		expect(linkedList.find(0)).toBeUndefined();
		expect(linkedList.find(200)).toBeUndefined();
		expect(linkedList.find((node) => node)).toBeUndefined();

		linkedList.prepend(100).prepend(50).prepend(0);

		expect(linkedList.get(-1)).toBeUndefined();
		expect(linkedList.get(0)).toBe(0);
		expect(linkedList.get(1)).toBe(50);
		expect(linkedList.get(2)).toBe(100);
		expect(linkedList.get(3)).toBeUndefined();

		//use plain value
		expect(linkedList.find(0)).toBeTruthy();
		expect(linkedList.find(0).data).toBe(0);
		expect(linkedList.find(50)).toBeTruthy();
		expect(linkedList.find(0).data).toBe(50);
		expect(linkedList.find(200)).toBeTruthy();
		expect(linkedList.find(0).data).toBe(200);

		//use search term
		expect(linkedList.find((node) => node)).toBeTruthy();
		expect(linkedList.find((node) => node.data === 0)).toBeTruthy();
		expect(linkedList.find((node) => node.data === 200)).toBeUndefined();

		//out of range deletions
		linkedList.delete(-1).delete(5).delete(100);
		expect(linkedList.get(-1)).toBeUndefined();
		expect(linkedList.get(0)).toBe(0);
		expect(linkedList.get(1)).toBe(50);
		expect(linkedList.get(2)).toBe(100);
		expect(linkedList.get(3)).toBeUndefined();

		//in range deletions
		linkedList.delete(2);
		expect(linkedList.get(2)).toBeUndefined();
		expect(linkedList.get(1)).toBe(50);
		expect(linkedList.get(0)).toBe(0);
		linkedList.delete(1);
		expect(linkedList.get(2)).toBeUndefined();
		expect(linkedList.get(1)).toBeUndefined();
		expect(linkedList.get(0)).toBe(0);
		linkedList.delete(0);
		expect(linkedList.get(2)).toBeUndefined();
		expect(linkedList.get(1)).toBeUndefined();
		expect(linkedList.get(0)).toBeUndefined();
	});
});
