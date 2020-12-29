/* 

    Should store prime factors as a hash table of primes and their exponents
    e.g. primeFactors(12345) = {
      3:1,
      5:1,
      823:1
    }; 

    In other words, 12345 = (3 ^ 1) * (5 ^ 1) * (823 ^ 1);

    Runtime complexity for this function is O(sqrt(n)), 
    since the greatest prime factor of a number will only 
    only ever be as high as that number's square root.
    
*/

export default function primeFactors(num) {
	const factors = {};

	//begin by dividing number by 2
	let divisor = 2;

	while (num >= 2) {
		//if number is divisible, keep divisor the same
		if (num % divisor == 0) {
			if (!factors[divisor]) factors[divisor] = 0;
			factors[divisor]++;
			num = num / divisor;
		}

		//else if number isn't divisible, increment divisor
		else {
			divisor++;
		}
	}
	return factors;
}
