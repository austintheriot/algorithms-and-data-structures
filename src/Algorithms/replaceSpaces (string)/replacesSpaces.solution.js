/* 

  Implement an algorithm to replace every space in a string with '%20'.

  runtime: O(n)

  If no double spaces are expected, this can be performed trivially
  in JavaScript with string.split(' ').join('%20');

  If double spaces are expected and neeed to be replaced with a single %20:
    convert string to array
    keep track of if the last character(s) were a space
    replace spaces with %20
    convert the array back to a string
    return the string
  This could be performed in one line with a ternary operator.

*/

export default function replacesSpaces1(string) {
	const arr = string.split('');
	let spaceFound = false;
	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i] === ' ' && !spaceFound) {
			spaceFound = true;
			arr[i] = '%20';
			continue;
		} else if (arr[i] === ' ' && spaceFound) {
			arr[i] = '';
			continue;
		} else {
			spaceFound = false;
		}
	}
	return arr.join('');
}

//This method can be done in one line:
function replacesSpaces3(string) {
	return string
		.split('')
		.map((ch, i, arr) =>
			ch === ' ' && arr[i - 1] !== ' '
				? '%20'
				: ch === ' ' && arr[i - 1] === ' '
				? ''
				: ch
		)
		.join('');
}

//Could also be done in a single pass without converting types:
//(just construct a new string)
function replacesSpaces2(string) {
	let newString = '';
	let spaceFound = false;
	for (let ch of string) {
		if (ch === ' ' && !spaceFound) {
			spaceFound = true;
			newString += '%20';
			continue;
		} else if (ch === ' ' && spaceFound) {
			continue;
		} else {
			spaceFound = false;
			newString += ch;
		}
	}
	return newString;
}
