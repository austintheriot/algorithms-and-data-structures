/* 

  Implement an algorithm to merge sorted arrayB into sortedA, which
  has enough empty room at the end to accomodate the new elements.

*/

/* 

  My first solution (use insertion-sort style insertions)
  Runtime: O(ab) at worst 
  Space: O(1)

*/
function sortedMerge1(arrA, arrB) {
	for (let i = arrB.length - 1; i >= 0; i--) {
		//insert element from B at the end of A
		arrA[arrA.length - 1] = arrB[i];

		//insertion-sort style switch elements until it's in its correct place
		for (
			let j = arrA.length - 1;
			(arrA[j - 1] > arrA[j] || arrA[j - 1] == null) && j - 1 >= 0;
			j--
		) {
			[arrA[j - 1], arrA[j]] = [arrA[j], arrA[j - 1]];
		}
	}

	return arrA;
}

/* 

  McDowell-Style solution:
  Runtime: O(b)
  Space: O(1)

*/
export default function sortedMerge2(arrA, arrB) {
	let endOfA = arrA.length - 1;
	let iA = arrA.findIndex((el) => el == null) - 1;
	let iB = arrB.length - 1;

	//iterate from the end of known array values
	//if A is bigger than B, move to the end of the array and insert B
	//else put B at the end of the array.
	//No matter what, SOME element is always going to be moved to the end of the array
	while (iB >= 0) {
		if (iA >= 0 && arrA[iA] > arrB[iB]) {
			arrA[endOfA] = arrA[iA];
			iA--;
		} else {
			arrA[endOfA] = arrB[iB];
			iB--;
		}
		endOfA--;
	}
	return arrA;
}
