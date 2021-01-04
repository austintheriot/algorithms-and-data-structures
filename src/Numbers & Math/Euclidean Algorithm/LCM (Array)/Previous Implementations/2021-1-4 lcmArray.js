const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const lcm = (a, b) => (a * b) / gcd(a, b);

export default function lcmArray(array) {
	for (let i = 1; i < array.length; i++) {
		array[i] = lcm(array[i], array[i - 1]);
	}
	return array[array.length - 1];
}
