export default function sieve(max) {
	const numbers = new Array(max + 1).fill(true);
	const primes = [];

	numbers[0] = numbers[1] = false;

	for (let i = 2; i <= max; i++) {
		if (numbers[i] === true) {
			primes.push(i);
		}

		for (let j = i ** 2; j <= max; j += i) {
			numbers[j] = false;
		}
	}

	return primes;
}
