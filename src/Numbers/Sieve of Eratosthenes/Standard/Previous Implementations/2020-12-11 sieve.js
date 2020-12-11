export default function sieve(max) {
	//begin with an array of numbers from 0 to max
	//assume that all of the numbers in the array are prime
	//mark 0 and 1 as non prime
	//iterate through numbers of the array
	//if we find a prime number, add it to prime number array
	//iterate through all the multiples of the prime < max and mark them as not prime

	const primes = [];
	const numbers = new Array(max + 1).fill(true);
	numbers[0] = numbers[1] = false;

	for (let i = 2; i <= max; i++) {
		if (numbers[i]) {
			primes.push(i);

			let j = i ** 2;
			while (j <= max) {
				numbers[j] = false;
				j += i;
			}
		}
	}

	return primes;
}
