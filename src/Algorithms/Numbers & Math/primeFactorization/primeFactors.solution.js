/* 

    Should store prime factors as a hash table of primes and their exponents
    e.g. primeFactors(12345) = {
      3:1,
      5:1,
      823:1
    }; 

    In other words, 12345 = (3 ^ 1) * (5 ^ 1) * (823 ^ 1);
    
    Best possible runtime is O(k) where k is the number of prime factors in a number.
      This occurs when a number is a product of 2s (i.e. 2, 4, 8, 16, 32, 64, 128, etc.)
      128 = 2 ^ 7. The divisor is not incremented, and num is divided 7 times, so the runtime is O(7).

    Worst possible runtime complexity for this function is O(sqrt(n)).
      This occurs when a number is a perfect square of primes. 
      The divisor is incremented until it is equal to the square root of the number,
      and then the number is only divided by the divisor twice.

      The greatest prime factor of a number will only 
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
