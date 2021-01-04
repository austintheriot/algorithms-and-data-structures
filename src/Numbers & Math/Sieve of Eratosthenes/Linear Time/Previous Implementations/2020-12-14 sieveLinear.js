export default function sieve(max) {
	const SPF = new Array(max + 1).fill(0);
	const primes = [];

	for (let i = 2; i <= max; i++) {
		if (SPF[i] === 0) {
			SPF[i] = i;
			primes.push(i);
		}

		for (
			let j = 0;
			j < primes.length && primes[j] <= SPF[i] && primes[j] * i <= max;
			j++
		) {
			SPF[primes[j] * i] = primes[j];
		}
	}

	return primes;
}
