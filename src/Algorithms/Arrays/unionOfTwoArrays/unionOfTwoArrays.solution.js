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

//unsorted arrays
export default function unionOfTwoArrays(r1, r2) {
	const hashTable = {};
	const union = [];
	r1 = r1.sort((a, b) => a - b);
	r2 = r2.sort((a, b) => a - b);

	r1.forEach((el) => {
		if (!hashTable[el]) {
			hashTable[el] = true;
			union.push(el);
		}
	});

	r2.forEach((el) => {
		if (!hashTable[el]) {
			hashTable[el] = true;
			union.push(el);
		}
	});

	return union;
}
