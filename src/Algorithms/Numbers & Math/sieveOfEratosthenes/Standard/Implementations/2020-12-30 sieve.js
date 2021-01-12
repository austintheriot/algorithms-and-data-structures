export default function sieve(max) {
	const primes = [];
	const isPrime = new Array(max + 1).fill(true);

	isPrime[0] = isPrime[1] = false;

	for (let i = 2; i <= max; i++) {
		if (isPrime[i]) {
			primes.push(i);

			for (let j = i ** 2; j <= max; j += i) {
				isPrime[j] = false;
			}
		}
	}

	return primes;
}
