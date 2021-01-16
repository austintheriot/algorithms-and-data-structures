/* 

  Implement an algorithm to determine if two strings are 
  one edit away from each other (by adding, removing,
  or editing a character).

  Runtime: O(n), where n is the length of the shortest string.
  Space: O(1)
*/

export default function oneEditAway(s1, s2) {
	//determine the larger string, if any
	const [bigString, smallString] =
		s2.length - s1.length > 0 ? [s2, s1] : [s1, s2];

	//indentical strings
	if (s1 === s2) return false;
	//string length is 2 or more
	if (bigString.length - smallString.length > 1) return false;

	let smallIndex = 0;
	let bigIndex = 0;
	let differenceFound = false;
	//iterate through both, incrementing the larger index once
	//or, if lengths are equal, incrementing both at the same time
	while (smallIndex < smallString.length && bigIndex < bigString.length) {
		if (smallString[smallIndex] === bigString[bigIndex])
			smallIndex++, bigIndex++;
		//characters differ, and a difference has not yet been found
		//continue iterating
		else if (!differenceFound) {
			differenceFound = true;
			bigIndex++;
			//only incremenent both indexes when length is equal
			if (bigString.length - smallString.length === 0) smallIndex++;
		}
		//characters differ and a difference has already been found
		else return false;
	}

	return true;
}
