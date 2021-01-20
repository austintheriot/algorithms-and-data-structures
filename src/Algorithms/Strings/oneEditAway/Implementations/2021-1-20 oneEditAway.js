/* 

  Implement an algorithm to determine if two strings are 
  one edit away from each other (by adding, removing,
  or editing a character).

*/

export default function oneEditAway(s1, s2) {
	if (s1 === s2) return false;
	if (Math.abs(s1.length - s2.length) > 1) return false;

	const [bigS, smallS] = s1.length > s2.length ? [s1, s2] : [s2, s1];
	for (
		let bigI = 0, smallI = 0, differenceFound = false;
		bigI < bigS.length && smallI < smallS.length;

	) {
		if (bigS[bigI] === smallS[smallI]) bigI++, smallI++;
		else if (!differenceFound) {
			differenceFound = true;
			bigI++;
			if (Math.abs(s2.length - s1.length) === 0) smallI++;
		} else return false;
	}
	return true;
}
