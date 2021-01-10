/* 

  Implement an algorithm that returns the union 
  of two arrays (eliminating duplicates in the process).

  If the array is known to be sorted beforehand:
    Runtime: O(a + b)
    Space: O(a + b) at the worst (assuming each array contains all unique elements)

  If the array is not sorted:
    Runtime: O(alog(a) + blog(b) + a + b) = O(alog(a) + blog(b))
    Space: O(a + b) at the worst (assuming each array contains all unique elements)

*/

//unsorted
export default function unionOfTwoArrays(r1, r2) {
	//if unsorted, sort the arrays in nlog(n) time
	if (r1.find((el, i, arr) => arr[i - 1] > arr[i])) {
		r1 = [...r1].sort((a, b) => a - b);
	}
	if (r2.find((el, i, arr) => arr[i - 1] > arr[i])) {
		r2 = [...r2].sort((a, b) => a - b);
	}

	//keep track of what elements have already been added
	const hashTable = {};
	//ouput array
	const union = [];

	//iterate through both arrays at once,
	//increment the array index with the smaller index
	//or increment both when a match is found
	let i1 = 0;
	let i2 = 0;
	while (i1 < r1.length && i2 < r2.length) {
		if (r1[i1] < r2[i2]) {
			i1++;
		} else if (r1[i1] > r2[i2]) {
			i2++;
		} else if (r1[i1] === r2[i2]) {
			if (!hashTable[r1[i1]]) {
				union.push(r1[i1]);
				hashTable[r1[i1]] = true;
			}
			i1++;
			i2++;
		}
	}

	return union;
}

//sorted
function unionOfTwoSortedArrays(r1, r2) {
	const hashTable = {};
	const union = [];
	let i1 = 0;
	let i2 = 0;

	while (i1 < r1.length && i2 < r2.length) {
		if (r1[i1] < r2[i2]) {
			i1++;
		} else if (r1[i1] > r2[i2]) {
			i2++;
		} else if (r1[i1] === r2[i2]) {
			if (!hashTable[r1[i1]]) {
				union.push(r1[i1]);
				hashTable[r1[i1]] = true;
			}
			i1++;
			i2++;
		}
	}

	return union;
}
