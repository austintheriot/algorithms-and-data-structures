/*  

  Implement an algorithm to determine whether one string 
  is a permutation of a second string.

*/

export default function checkPermutation(s1, s2) {
	s1 = s1.split('').sort().join('');
	s2 = s2.split('').sort().join('');

	let i1 = 0;
	let i2 = 0;
	while (i1 < s1.length && i2 < s2.length) {
		if (s1[i1] !== s2[i2]) {
			return false;
		}
		i1++, i2++;
	}
	return true;
}
