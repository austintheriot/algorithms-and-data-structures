const MinHeap = require('./MinHeap');
//insert(), insert data, rearrange tree
//extractMin(), return min and remove it from the heap
//getMin(), return min

describe('Min Heap', () => {
	it('Should instantiate an empty array when called', () => {
		const minHeap = new MinHeap();
		expect(minHeap.array.length).toBe(0);
	});

	describe('getLeftChildIndex()', () => {
		it(`Should return the index of a node's left child`, () => {
			const minHeap = new MinHeap();
			expect(minHeap.getLeftChildIndex(0)).toBe(1);
			expect(minHeap.getLeftChildIndex(1)).toBe(3);
			expect(minHeap.getLeftChildIndex(2)).toBe(5);
			expect(minHeap.getLeftChildIndex(3)).toBe(7);
			expect(minHeap.getLeftChildIndex(4)).toBe(9);
		});
	});

	describe('getRightChildIndex()', () => {
		it(`Should return the index of a node's right child`, () => {
			const minHeap = new MinHeap();
			expect(minHeap.getRightChildIndex(0)).toBe(2);
			expect(minHeap.getRightChildIndex(1)).toBe(4);
			expect(minHeap.getRightChildIndex(2)).toBe(6);
			expect(minHeap.getRightChildIndex(3)).toBe(8);
			expect(minHeap.getRightChildIndex(4)).toBe(10);
		});
	});

	describe('getParentIndex()', () => {
		it(`Should return the index of a node's parent`, () => {
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
		it(`Should return the true if node has a parent`, () => {
			expect(minHeap.hasParent(1)).toBe(true);
			expect(minHeap.hasParent(5)).toBe(true);
			expect(minHeap.hasParent(10)).toBe(true);
			expect(minHeap.hasParent(14)).toBe(true);
		});
	});

	describe('hasParent()', () => {
		it(`Should return the false if node doesn't have a parent`, () => {
			const minHeap = new MinHeap();
			minHeap.array = [0];
			expect(minHeap.hasParent(0)).toBe(false);
		});
	});

	describe('hasLeftChild()', () => {
		it(`Should return the true if node has a left child`, () => {
			const minHeap = new MinHeap();
			minHeap.array = [0, 1, 3, 4, 7, 5, 8, 12, 8, 9, 11, 8, 7, 9, 12];
			expect(minHeap.hasLeftChild(0)).toBe(true);
			expect(minHeap.hasLeftChild(1)).toBe(true);
			expect(minHeap.hasLeftChild(2)).toBe(true);
			expect(minHeap.hasLeftChild(3)).toBe(true);
			expect(minHeap.hasLeftChild(4)).toBe(true);
			expect(minHeap.hasLeftChild(5)).toBe(true);
			expect(minHeap.hasLeftChild(6)).toBe(true);
		});

		it(`Should return the false if node doesn't have a left child`, () => {
			const minHeap = new MinHeap();
			minHeap.array = [0, 1, 3, 4, 7, 5, 8, 12, 8, 9, 11, 8, 7, 9, 12];
			expect(minHeap.hasLeftChild(7)).toBe(false);
			expect(minHeap.hasLeftChild(8)).toBe(false);
			expect(minHeap.hasLeftChild(9)).toBe(false);
			expect(minHeap.hasLeftChild(10)).toBe(false);
			expect(minHeap.hasLeftChild(11)).toBe(false);
			expect(minHeap.hasLeftChild(12)).toBe(false);
			expect(minHeap.hasLeftChild(13)).toBe(false);
			expect(minHeap.hasLeftChild(14)).toBe(false);
		});
	});

	describe('hasRightChild()', () => {
		it(`Should return the true if node has a right child`, () => {
			const minHeap = new MinHeap();
			minHeap.array = [0, 1, 3, 4, 7, 5, 8, 12, 8, 9, 11, 8, 7, 9, 12];
			expect(minHeap.hasRightChild(0)).toBe(true);
			expect(minHeap.hasRightChild(1)).toBe(true);
			expect(minHeap.hasRightChild(2)).toBe(true);
			expect(minHeap.hasRightChild(3)).toBe(true);
			expect(minHeap.hasRightChild(4)).toBe(true);
			expect(minHeap.hasRightChild(5)).toBe(true);
			expect(minHeap.hasRightChild(6)).toBe(true);
		});

		it(`Should return the false if node doesn't have a right child`, () => {
			const minHeap = new MinHeap();
			minHeap.array = [0, 1, 3, 4, 7, 5, 8, 12, 8, 9, 11, 8, 7, 9, 12];
			expect(minHeap.hasRightChild(7)).toBe(false);
			expect(minHeap.hasRightChild(8)).toBe(false);
			expect(minHeap.hasRightChild(9)).toBe(false);
			expect(minHeap.hasRightChild(10)).toBe(false);
			expect(minHeap.hasRightChild(11)).toBe(false);
			expect(minHeap.hasRightChild(12)).toBe(false);
			expect(minHeap.hasRightChild(13)).toBe(false);
			expect(minHeap.hasRightChild(14)).toBe(false);
		});
	});

	describe('leftChild()', () => {
		it(`Should return the node's left child`, () => {
			const minHeap = new MinHeap();
			minHeap.array = [0, 1, 3, 4, 7, 5, 8, 12, 8, 9, 11, 8, 7, 9, 12];
			expect(minHeap.leftChild(0)).toBe(1);
			expect(minHeap.leftChild(1)).toBe(4);
			expect(minHeap.leftChild(2)).toBe(5);
			expect(minHeap.leftChild(3)).toBe(12);
			expect(minHeap.leftChild(4)).toBe(9);
			expect(minHeap.leftChild(5)).toBe(8);
			expect(minHeap.leftChild(6)).toBe(9);
		});
	});

	describe('rightChild()', () => {
		it(`Should return the node's right child`, () => {
			const minHeap = new MinHeap();
			minHeap.array = [0, 1, 3, 4, 7, 5, 8, 12, 8, 9, 11, 8, 7, 9, 12];
			expect(minHeap.rightChild(0)).toBe(3);
			expect(minHeap.rightChild(1)).toBe(7);
			expect(minHeap.rightChild(2)).toBe(8);
			expect(minHeap.rightChild(3)).toBe(8);
			expect(minHeap.rightChild(4)).toBe(11);
			expect(minHeap.rightChild(5)).toBe(7);
			expect(minHeap.rightChild(6)).toBe(12);
		});
	});

	describe('parent()', () => {
		it(`Should return the node's parent`, () => {
			const minHeap = new MinHeap();
			minHeap.array = [0, 1, 3, 4, 7, 5, 8, 12, 8, 9, 11, 8, 7, 9, 12];
			expect(minHeap.parent(14)).toBe(8);
			expect(minHeap.parent(13)).toBe(8);
			expect(minHeap.parent(12)).toBe(5);
			expect(minHeap.parent(11)).toBe(5);
			expect(minHeap.parent(10)).toBe(7);
			expect(minHeap.parent(9)).toBe(7);
			expect(minHeap.parent(8)).toBe(4);
			expect(minHeap.parent(7)).toBe(4);
		});
	});

	describe('swap()', () => {
		it(`Should swap the two nodes`, () => {
			const minHeap = new MinHeap();
			minHeap.array = [0, 1, 3, 4, 7, 5, 8, 12, 8, 9, 11, 8, 7, 9, 12];

			expect(minHeap.array[0]).toBe(0);
			expect(minHeap.array[7]).toBe(12);
			minHeap.swap(0, 7);
			expect(minHeap.array[0]).toBe(12);
			expect(minHeap.array[7]).toBe(0);

			expect(minHeap.array[3]).toBe(4);
			expect(minHeap.array[14]).toBe(12);
			minHeap.swap(3, 14);
			expect(minHeap.array[3]).toBe(12);
			expect(minHeap.array[14]).toBe(4);
		});
	});

	describe('heapifyUp()', () => {
		it(`Should reorder the heap correctly`, () => {
			const minHeap = new MinHeap();
			minHeap.array = [0, 1, 3, 4, 7, 5, 8, 12, 8, 9, 11, 8, 7, 9, 12, 2];
			minHeap.heapifyUp();
			expect(minHeap.array).toEqual([
				0,
				1,
				3,
				2,
				7,
				5,
				8,
				4,
				8,
				9,
				11,
				8,
				7,
				9,
				12,
				12,
			]);
		});
	});

	describe('heapifyDown()', () => {
		it(`Should reorder the heap correctly`, () => {
			const minHeap = new MinHeap();
			minHeap.array = [12, 1, 3, 4, 7, 5, 8, 12, 8, 9, 11, 8, 7, 9];
			minHeap.heapifyDown();
			expect(minHeap.array).toEqual([
				1,
				4,
				3,
				8,
				7,
				5,
				8,
				12,
				12,
				9,
				11,
				8,
				7,
				9,
			]);
		});
	});

	describe('insert()', () => {
		it('Should insert elements into the array', () => {
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

		it('Should insert elements in the correct order', () => {
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
		it('Should return the min element', () => {
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
		it('Should return the min element', () => {
			let minHeap = new MinHeap();
			minHeap.insert(23);
			minHeap.insert(17);
			minHeap.insert(51);
			minHeap.insert(13);
			minHeap.insert(70);

			expect(minHeap.extractMin()).toBe(13);
		});

		it('Should delete the min element from the array', () => {
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

		it('Should rearrange tree correctly', () => {
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
