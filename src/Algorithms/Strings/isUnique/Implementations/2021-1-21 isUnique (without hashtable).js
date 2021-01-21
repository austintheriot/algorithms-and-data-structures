/* 

  Determine whether a given string contains only a single occurence of each letter.

  You can choose to implement with or without a secondary data structure.

*/

export default function isUnique(string) {
	string = string.split('').sort();
	for (let i = 1; i < string.length; i++) {
		if (string[i - 1] === string[i]) return false;
	}
	return true;
}
