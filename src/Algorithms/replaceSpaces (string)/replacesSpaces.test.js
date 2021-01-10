import replaceSpaces from './replaceSpaces';

it(`Should replace all spaces in a string with '%20'`, () => {
	expect(replaceSpaces('hello there')).toBe('hello%20there');
	expect(replaceSpaces('    Mr John Smith      ')).toBe(
		'%20Mr%20John%20Smith%20'
	);
	expect(replaceSpaces(' ')).toBe('%20');
	expect(replaceSpaces('  a b c d e f g  ')).toBe(
		'%20a%20b%20c%20d%20e%20f%20g%20'
	);
	expect(replaceSpaces('')).toBe('');
});
