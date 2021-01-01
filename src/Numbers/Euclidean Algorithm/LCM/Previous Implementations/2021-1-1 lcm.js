const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

export default function lcm(a, b) {
	return (a * b) / gcd(a, b);
}
