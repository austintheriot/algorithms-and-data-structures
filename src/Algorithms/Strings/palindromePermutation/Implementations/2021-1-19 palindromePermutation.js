export default function palindromePermutation(string) {
	string = string.toLowerCase().replace(/[^A-Za-z]/g, '');
	console.log(string);
	const flipBit = (num, i) => num ^ (1 << i);
	const ASCII_OFFSET = 97;
	let num = 0;

	for (let i = 0; i < string.length; i++) {
		num = flipBit(num, string.charCodeAt(i) - ASCII_OFFSET);
	}

	return ((num - 1) & num) === 0 ? true : false;
}
