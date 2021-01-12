//This version of Erastothenes' Sieve works in linear time
//by "cross out" each non-prime only one time
//drawback is that it requires additionaly memory
//of O(n) to store smallest prime factors

export default function sieve(N) {
	//smallest prime factor for of each index
	//any number that remains with 0 is prime
	const spf = new Array(N + 1).fill(0);

	//final array of prime numbers
	const primes = [];

	for (let i = 2; i <= N; i++) {
		//if it is prime
		if (spf[i] === 0) {
			spf[i] = i;
			primes.push(i);
		}

		//iterate through primes up to the current number's lowest prime
		//mark currentNumber * lowest prime as not prime (mark it's smallest prime factor)
		for (
			let j = 0;
			j < primes.length && //iterate through array of found primes
			primes[j] <= spf[i] && //only iterate primes up to the i's lowest prime
			i * primes[j] <= N; //do not check beyond max
			j++
		) {
			//set the smallest prime factor of the multiple
			spf[i * primes[j]] = primes[j]; //MUST assign primes[j], or else the spf[] value will not be the true lowest prime factor
		}
	}
	return primes;
}
