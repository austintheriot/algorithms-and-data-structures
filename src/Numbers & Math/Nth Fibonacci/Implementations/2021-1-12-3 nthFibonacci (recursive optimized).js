export default function fibonacci(n, a = 0, b = 1) {
	return n === 0 ? a : fibonacci(n - 1, b, a + b);
}
