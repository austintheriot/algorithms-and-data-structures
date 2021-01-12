export default function sieve(max) {
	const primes = [];
	const isPrime = new Array(max + 1).fill(true);

	isPrime[0] = isPrime[1] = false;

	for (let i = 2; i <= max; i++) {
		if (isPrime[i]) {
			primes.push(i); //hasn't already been ruled out

			//mark multiples of prime as not prime
			//The following code MUST go inside the if block
			//(or else will run in n * log(n) time and not n * log(log(n)) time)
			//j normally starts at i * 2, but you can optimize by starting at i ** 2
			for (let j = i ** 2; j <= max; j += i) {
				isPrime[j] = false;
			}
		}
	}

	return primes;
}
