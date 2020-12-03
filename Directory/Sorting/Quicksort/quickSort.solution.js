let quickSort;
let partition;

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

//McDowell's Quick Sort
quickSort = (array, leftIndex, rightIndex) => {
	let pivotIndex = partition(array, leftIndex, rightIndex);

	//sort left half
	if (leftIndex < pivotIndex - 1) {
		quickSort(array, leftIndex, pivotIndex - 1);
	}

	//sort right half
	if (rightIndex > pivotIndex) {
		quickSort(array, pivotIndex, rightIndex);
	}

	return array;
};

//Choose a pivot and swap elements
partition = (array, leftIndex, rightIndex) => {
	//get center index between the left and right indexes
	const pivotIndex = Math.floor(leftIndex + (rightIndex - leftIndex) / 2);
	//get center value
	let pivotValue = array[pivotIndex];

	//scan array for items that need to be swapped
	while (leftIndex <= rightIndex) {
		//find element on left that should be on right
		while (array[leftIndex] < pivotValue) leftIndex++;

		//find element on rightIndex that should be on leftIndex
		while (array[rightIndex] > pivotValue) rightIndex--;

		//if left and right pointers both found an element to swap,
		//swap elements, and move leftIndex and rightIndex indices
		if (leftIndex <= rightIndex) {
			//swap elements
			[array[leftIndex], array[rightIndex]] = [
				array[rightIndex],
				array[leftIndex],
			];

			//ignore previously viewed/swapped elements and continue searching
			leftIndex++;
			rightIndex--;
		}
	}
	return leftIndex;
};

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

//Lomuto Partition Scheme (Original syntax)
quicksort = (A, lo, hi) => {
	if (lo < hi) {
		p = partition(A, lo, hi);
		quicksort(A, lo, p - 1);
		quicksort(A, p + 1, hi);
	}
	return A;
};

partition = (A, lo, hi) => {
	pivot = A[hi];
	i = lo;
	for (let j = lo; j <= hi; j++) {
		if (A[j] < pivot) {
			[A[i], A[j]] = [A[j], A[i]];
			i++;
		}
	}
	[A[i], A[hi]] = [A[hi], A[i]];
	return i;
};

module.exports = quickSort;

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

//Lomuto Partition Scheme (Legible syntax)
quicksort = (array, lowIndex, hiIndex) => {
	if (lowIndex < hiIndex) {
		const partitionIndex = partition(array, lowIndex, hiIndex);
		quicksort(array, lowIndex, partitionIndex - 1);
		quicksort(array, partitionIndex + 1, hiIndex);
	}
	return array;
};

partition = (array, lowIndex, hiIndex) => {
	let swapIndex = lowIndex;
	for (let j = lowIndex; j <= hiIndex; j++) {
		if (array[j] < array[hiIndex]) {
			[array[swapIndex], array[j]] = [array[j], array[swapIndex]];
			swapIndex++;
		}
	}
	[array[swapIndex], array[hiIndex]] = [array[hiIndex], array[swapIndex]];
	return swapIndex;
};

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

//Hoare Partition Scheme (Original syntax)

function partition(arr, low, high) {
	let pivot = arr[low];
	let i = low - 1,
		j = high + 1;

	while (true) {
		do {
			i++;
		} while (arr[i] < pivot);
		do {
			j--;
		} while (arr[j] > pivot);
		if (i >= j) return j;
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
}

module.exports = function quickSort(arr, low, high) {
	if (low < high) {
		let pi = partition(arr, low, high);
		quickSort(arr, low, pi);
		quickSort(arr, pi + 1, high);
	}
	return arr;
};

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

//Hoare Partition Scheme (Legible Syntax)

function partition(arr, low, high) {
	let pivot = arr[low];
	let i = low - 1;
	j = high + 1;

	while (true) {
		do {
			i++;
		} while (arr[i] < pivot);
		do {
			j--;
		} while (arr[j] > pivot);
		if (i >= j) return j;
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
}

function quickSort(arr, low, high) {
	if (low < high) {
		let partitionIndex = partition(arr, low, high);

		// Separately sort elements before
		// partition and after partition
		quickSort(arr, low, partitionIndex);
		quickSort(arr, partitionIndex + 1, high);
	}
	return arr;
}

module.exports = function runQuickSort(arr) {
	quickSort(arr, 0, arr.length - 1);
};
