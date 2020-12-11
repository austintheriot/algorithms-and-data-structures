function sieve(max) {
	if (max < 2) return [];
	const primes = [];
	const numbers = new Array(max + 1).fill(true);

	numbers[0] = false;
	numbers[1] = false;

	for (let i = 2; i <= max; i++) {
		if (numbers[i] === true) {
			primes.push(i); //hasn't already been ruled out

			//mark multiples of prime as not prime
			let j = i * i; //this is an optimzation: can normally start with j = 2 * i
			while (j <= max) {
				numbers[j] = false;
				j += i; //increment by multiples
			}
		}
	}
	return primes;
}

module.exports = sieve;
