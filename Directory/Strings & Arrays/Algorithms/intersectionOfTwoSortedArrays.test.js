//Intersection of 2 sorted arrays (run through both in linear time)
//search two arrays in O(a + b) time if both are sorted
const searchArrays = (first, second) => {
	const newArray = [];
	let j = 0;
	outer: for (let i = 0; i < first.length; i++) {
		//iterate through first array
		while (second[j] <= first[i]) {
			//search second array until reaching a larger element
			if (second[j] === first[i]) {
				//if equal, add to new array, and iterate both arrays forward
				newArray.push(first[i]);
				j++;
				continue outer;
			} else {
				//if less than element, iterate second array forward (until reaching larger element)
				j++;
			}
		}
	}
	return newArray;
};

test('Intersection of 2 sorted arrays', () => {
	let first = [0, 1, 1, 3, 5, 7, 7, 8];
	let second = [7, 8];
	expect(searchArrays(first, second)).toEqual([7, 8]);

	first = [7, 8];
	second = [0, 1, 1, 3, 5, 7, 7, 8];
	expect(searchArrays(first, second)).toEqual([7, 8]);

	first = [5, 6, 7];
	second = [1, 2, 3];
	expect(searchArrays(first, second)).toEqual([]);

	first = [1, 1, 1, 1, 1, 2];
	second = [1, 1, 1, 1, 2];
	expect(searchArrays(first, second)).toEqual([1, 1, 1, 1, 2]);

	first = [9];
	second = [3, 7, 9];
	expect(searchArrays(first, second)).toEqual([9]);

	first = [1, 5, 8, 8];
	second = [8];
	expect(searchArrays(first, second)).toEqual([8]);
});
