/* 

  Implement an algorithm to determine if two strings are 
  one edit away from each other (by adding, removing,
  or editing a character).

*/

export default function oneEditAway(s1, s2) {
	//identical strings
	if (s1 === s2) return false;
	//more than one addition/subtraction away
	if (Math.abs(s2.length - s1.length) > 1) return false;

	//iterate through both arrays at once
	const [bigS, smallS] = s2.length > s1.length ? [s2, s1] : [s1, s2];
	let bigI = 0,
		smallI = 0,
		differenceFound = false;
	while (smallI < smallS.length && bigI < bigS.length) {
		if (smallS[smallI] === bigS[bigI]) smallI++, bigI++;
		else if (!differenceFound) {
			differenceFound = true;
			bigI++;
			if (Math.abs(s2.length - s1.length) === 0) smallI++;
		} else return false;
	}
	return true;
}
