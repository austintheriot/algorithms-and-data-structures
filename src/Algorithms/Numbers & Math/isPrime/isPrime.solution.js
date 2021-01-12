/* 

    ###############################

    This solution only iterates up to the square root of the number,
    since the square root is the greatest possible factor a number
    that needs to be checked.

    Runtime for this is O(sqrt(n));


    ###############################
    
    This function can be optimized if we have a list of primes available to us ahead of time.
    We don't actually need to check every number between 0 and sqrt(n) to know if n is prime.
    We only need to check if n is divisible by any *primes* up to sqrt(n);

    This is works because any number can be decomposed into a product of prime numbers.
    i.e. 100 = 2 * 2 * 5 * 5;

    And the prime number theorem approximates that the number of primes
    up to a given number n is about n / log(n);

    If we have a list of prime numbers available to us ahead of time,
    this can be accomplished in O(sqrt(n) / log(sqrt(n))), since we would only 
    need to iterate through the primes (n / log(n)) up to the square root of n.
*/

export default function isPrime(num) {
	if (num < 2) return false;
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) return false;
	}
	return true;
}
