export default function sieve(max) {
	const primes = [];
	const spf = new Array(max + 1).fill(0);

	for (let i = 2; i <= max; i++) {
		if (spf[i] === 0) {
			primes.push(i);
			spf[i] = i;
		}

		for (
			let j = 0;
			j < primes.length && primes[j] <= spf[i] && primes[j] * i <= max;
			j++
		) {
			spf[primes[j] * i] = primes[j];
		}
	}

	//array of primes
	//array of smallest prime factors

	//iterate from 0 to max
	//if the spf is 0, its a prime
	//iterate through primes * current value up to the spf of the current value
	//mark those numbers as not prime

	return primes;
}
