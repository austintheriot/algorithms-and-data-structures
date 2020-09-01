//insert(), insert data, rearrange tree
//extractMin(), return min and remove it from the heap
//getMin(), return min
// array[(i -1) / 2] returns its parent node.
// array[(2 * i) + 1] returns its left child node.
// array[(2 * i) + 2] returns its right child node.

module.exports = class MinHeap {
	constructor() {
		this.array = [];
	}

	getLeftChildIndex(parentIndex) {
		return 2 * parentIndex + 1;
	}

	getRightChildIndex(parentIndex) {
		return 2 * parentIndex + 2;
	}

	getParentIndex(childIndex) {
		return Math.floor((childIndex - 1) / 2);
	}

	//ie not the root node
	hasParent(childIndex) {
		return this.getParentIndex(childIndex) >= 0;
	}

	//if it doesn't have a left child,
	//the calculated position will be more than the array length
	hasLeftChild(parentIndex) {
		return this.getLeftChildIndex(parentIndex) < this.array.length;
	}

	//if it doesn't have a right child,
	//the calculated position will be more than the array length
	hasRightChild(parentIndex) {
		return this.getRightChildIndex(parentIndex) < this.array.length;
	}

	leftChild(parentIndex) {
		return this.array[this.getLeftChildIndex(parentIndex)];
	}

	rightChild(parentIndex) {
		return this.array[this.getRightChildIndex(parentIndex)];
	}

	parent(childIndex) {
		return this.array[this.getParentIndex(childIndex)];
	}

	swap(indexOne, indexTwo) {
		const tmp = this.array[indexTwo];
		this.array[indexTwo] = this.array[indexOne];
		this.array[indexOne] = tmp;
	}

	heapifyUp() {
		// Take the last element (last in array or the bottom left in a tree)
		// in the heap container and lift it up until it is in the correct
		// order with respect to its parent element.
		let currentIndex = this.array.length - 1;

		//if parent is larger than child
		while (
			this.hasParent(currentIndex) &&
			this.parent(currentIndex) > this.array[currentIndex]
		) {
			this.swap(currentIndex, this.getParentIndex(currentIndex));
			currentIndex = this.getParentIndex(currentIndex);
		}
	}

	heapifyDown() {
		// Compare the parent element to its children
		//if parent is larger than child, swap them
		//repeat for any children
		let currentIndex = 0;
		let nextIndex;

		while (this.hasLeftChild(currentIndex)) {
			//set left child as default
			nextIndex = this.getLeftChildIndex(currentIndex);

			//if the node has a right child, compare them and choose the index of the node with the smaller value
			if (this.hasRightChild(currentIndex)) {
				nextIndex =
					this.leftChild(currentIndex) < this.rightChild(currentIndex)
						? this.getLeftChildIndex(currentIndex)
						: this.getRightChildIndex(currentIndex);
			}

			//if already in correct order, end the heapify
			if (this.array[currentIndex] < this.array[nextIndex]) {
				break;
			}

			//if parent is larger than child,
			//swap parent with either left or right child
			this.swap(currentIndex, nextIndex);
			currentIndex = nextIndex;
		}
	}

	insert(item) {
		this.array.push(item);
		this.heapifyUp();
		return this;
	}

	getMin() {
		if (this.array.length === 0) {
			return null;
		}
		return this.array[0];
	}

	extractMin() {
		if (this.array.length === 0) {
			return null;
		}

		if (this.array.length === 1) {
			return this.array.pop();
		}

		const item = this.array[0];

		// Move the last element from the end to the head.
		this.array[0] = this.array.pop();
		this.heapifyDown();

		return item;
	}
};
