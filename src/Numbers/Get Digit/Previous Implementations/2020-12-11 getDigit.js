import countDigits from '../Count Digits/countDigits.solution';

//return 0 for indixes out of range
//return negative digit from negative numbers

export default function getDigit(num, i) {
	if (i < 0 || i > countDigits(num)) return 0;
	return Math.floor((Math.abs(num) / 10 ** i) % 10) * (num < 0 ? -1 : 1);
}
