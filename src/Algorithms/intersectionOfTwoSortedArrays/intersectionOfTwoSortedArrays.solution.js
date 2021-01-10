export default function searchArrays(first, second) {
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
}
