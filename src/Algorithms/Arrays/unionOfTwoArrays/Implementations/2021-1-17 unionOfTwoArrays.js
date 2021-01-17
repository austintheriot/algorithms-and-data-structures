/* 

  Implement an algorithm that returns the union 
  of two arrays (eliminating duplicates in the process).
  The arrays are not necessarily sorted.

*/

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
