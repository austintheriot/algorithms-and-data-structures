export default function countDigits(num) {
	return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
}
