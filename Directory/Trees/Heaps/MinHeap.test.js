const MinHeap = require('./MinHeap.solution');
//insert(), insert data, rearrange tree
//extractMin(), return min and remove it from the heap
//getMin(), return min

describe('Min Heap', () => {
	test('Should instantiate an empty array when called', () => {
		const minHeap = new MinHeap();
		expect(minHeap.array.length).toBe(0);
	});

	describe('getLeftChildIndex()', () => {
		test(`Should return the index of a node's left child`, () => {
			const minHeap = new MinHeap();
			expect(minHeap.getLeftChildIndex(0)).toBe(1);
			expect(minHeap.getLeftChildIndex(1)).toBe(3);
			expect(minHeap.getLeftChildIndex(2)).toBe(5);
			expect(minHeap.getLeftChildIndex(3)).toBe(7);
			expect(minHeap.getLeftChildIndex(4)).toBe(9);
		});
	});

	describe('getRightChildIndex()', () => {
		test(`Should return the index of a node's right child`, () => {
			const minHeap = new MinHeap();
			expect(minHeap.getRightChildIndex(0)).toBe(2);
			expect(minHeap.getRightChildIndex(1)).toBe(4);
			expect(minHeap.getRightChildIndex(2)).toBe(6);
			expect(minHeap.getRightChildIndex(3)).toBe(8);
			expect(minHeap.getRightChildIndex(4)).toBe(10);
		});
	});

	describe('getParentIndex()', () => {
		test(`Should return the index of a node's parent`, () => {
			const minHeap = new MinHeap();
			expect(minHeap.getParentIndex(10)).toBe(4);
			expect(minHeap.getParentIndex(7)).toBe(3);
			expect(minHeap.getParentIndex(4)).toBe(1);
			expect(minHeap.getParentIndex(1)).toBe(0);
			expect(minHeap.getParentIndex(0)).toBe(-1);
		});
	});

	describe('hasParent()', () => {
		const minHeap = new MinHeap();
		minHeap.array = [0, 1, 3, 4, 7, 5, 8, 12, 8, 9, 11, 8, 7, 9, 12];
		test(`Should return the true if node has a parent`, () => {});
	});

	describe('hasParent()', () => {
		test(`Should return the false if node doesn't have a parent`, () => {});
	});

	describe('hasLeftChild()', () => {
		test(`Should return the true if node has a left child`, () => {});
	});

	describe('hasLeftChild()', () => {
		test(`Should return the false if node doesn't have a left child`, () => {});
	});

	describe('hasRightChild()', () => {
		test(`Should return the true if node has a right child`, () => {});
	});

	describe('hasRightChild()', () => {
		test(`Should return the false if node doesn't have a right child`, () => {});
	});

	describe('leftChild()', () => {
		test(`Should return the node's left child`, () => {});
	});

	describe('rightChild()', () => {
		test(`Should return the node's right child`, () => {});
	});

	describe('parent()', () => {
		test(`Should return the node's parent`, () => {});
	});

	describe('swap()', () => {
		test(`Should swap the two nodes`, () => {});
	});

	describe('heapifyUp()', () => {
		test(`Should reorder the heap correctly`, () => {});
	});

	describe('heapifyDown()', () => {
		test(`Should reorder the heap correctly`, () => {});
	});

	describe('insert()', () => {
		test('Should insert elements into the array', () => {
			const minHeap = new MinHeap();
			minHeap.insert(0);

			expect(minHeap.array.length).toBe(1);
			expect(minHeap.array.includes(0)).toBe(true);
			expect(minHeap.array.includes(5)).toBe(false);
			expect(minHeap.array.includes(7)).toBe(false);

			minHeap.insert(5);
			expect(minHeap.array.length).toBe(2);
			expect(minHeap.array.includes(0)).toBe(true);
			expect(minHeap.array.includes(5)).toBe(true);
			expect(minHeap.array.includes(7)).toBe(false);

			minHeap.insert(7);
			expect(minHeap.array.length).toBe(3);
			expect(minHeap.array.includes(0)).toBe(true);
			expect(minHeap.array.includes(5)).toBe(true);
			expect(minHeap.array.includes(7)).toBe(true);
		});

		test('Should insert elements in the correct order', () => {
			const minHeap = new MinHeap();
			minHeap.insert(7);
			minHeap.insert(0);
			minHeap.insert(5);

			expect(minHeap.array[0]).toBe(0);
			expect(minHeap.array[1]).toBe(7);
			expect(minHeap.array[2]).toBe(5);

			minHeap.insert(1);
			minHeap.insert(15);
			expect(minHeap.array[0]).toBe(0);
			expect(minHeap.array[1]).toBe(1);
			expect(minHeap.array[2]).toBe(5);
			expect(minHeap.array[3]).toBe(7);
			expect(minHeap.array[4]).toBe(15);
		});
	});

	describe('getMin()', () => {
		test('Should return the min element', () => {
			let minHeap = new MinHeap();
			minHeap.insert(0);
			minHeap.insert(7);
			minHeap.insert(5);
			expect(minHeap.getMin()).toBe(0);

			minHeap = new MinHeap();
			minHeap.insert(1000);
			minHeap.insert(1);
			minHeap.insert(-50);

			expect(minHeap.getMin()).toBe(-50);
		});
	});

	describe('extractMin()', () => {
		test('Should return the min element', () => {
			let minHeap = new MinHeap();
			minHeap.insert(23);
			minHeap.insert(17);
			minHeap.insert(51);
			minHeap.insert(13);
			minHeap.insert(70);

			expect(minHeap.extractMin()).toBe(13);
		});

		test('Should delete the min element from the array', () => {
			let minHeap = new MinHeap();
			minHeap.insert(23);
			minHeap.insert(17);
			minHeap.insert(51);
			minHeap.insert(13);
			minHeap.insert(70);
			expect(minHeap.array.length).toBe(5);
			expect(minHeap.array.includes(13)).toBe(true);

			minHeap.extractMin();
			expect(minHeap.array.length).toBe(4);
			expect(minHeap.array.includes(13)).toBe(false);
		});

		test('Should rearrange tree correctly', () => {
			let minHeap = new MinHeap();
			minHeap.insert(23);
			minHeap.insert(17);
			minHeap.insert(51);
			minHeap.insert(13);
			minHeap.insert(70); //[13, 17, 51, 23, 70]
			minHeap.extractMin(); //[17, 23, 51, 70]

			expect(minHeap.array[0]).toBe(17);
			expect(minHeap.array[1]).toBe(23);
			expect(minHeap.array[2]).toBe(51);
			expect(minHeap.array[3]).toBe(70);
		});
	});
});
