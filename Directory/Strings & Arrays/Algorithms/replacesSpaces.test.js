//replaces spaces with '%20'
//runtime: O(n)

//if no double spaces are expected, this can be performed trivially
//in JavaScript with string.split(' ').join('%20');

//if double spaces are expected and deeed to be replaced with a single %20:
//convert string to array
//keep track of if the last character(s) were a space
//replace spaces with %20
//convert the array back to a string
//return the string

//can also be performed in one line with a ternary operator

let replacesSpaces = (string) => {
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
};

it(`Replaces spaces with '%20'`, () => {
	expect(replacesSpaces('hello there')).toBe('hello%20there');
	expect(replacesSpaces('    Mr John Smith      ')).toBe(
		'%20Mr%20John%20Smith%20'
	);
	expect(replacesSpaces(' ')).toBe('%20');
	expect(replacesSpaces('  a b c d e f g  ')).toBe(
		'%20a%20b%20c%20d%20e%20f%20g%20'
	);
	expect(replacesSpaces('')).toBe('');
});

//could also be done in a single pass, without converting types
//(just construct a new string)
replacesSpaces = (string) => {
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
};
it(`Replaces spaces with '%20'`, () => {
	expect(replacesSpaces('hello there')).toBe('hello%20there');
	expect(replacesSpaces('    Mr John Smith      ')).toBe(
		'%20Mr%20John%20Smith%20'
	);
	expect(replacesSpaces(' ')).toBe('%20');
	expect(replacesSpaces('  a b c d e f g  ')).toBe(
		'%20a%20b%20c%20d%20e%20f%20g%20'
	);
	expect(replacesSpaces('')).toBe('');
});

//Can be done in one line:

replacesSpaces = (string) => {
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
};

it(`Replaces spaces with '%20'`, () => {
	expect(replacesSpaces('hello there')).toBe('hello%20there');
	expect(replacesSpaces('    Mr John Smith      ')).toBe(
		'%20Mr%20John%20Smith%20'
	);
	expect(replacesSpaces(' ')).toBe('%20');
	expect(replacesSpaces('  a b c d e f g  ')).toBe(
		'%20a%20b%20c%20d%20e%20f%20g%20'
	);
	expect(replacesSpaces('')).toBe('');
});
