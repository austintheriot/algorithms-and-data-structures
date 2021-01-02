/* 
  Modified Euclidean algorithm for finding the greatest common denominator

  gcd = a % b = c
            b % c = d
                c % d = e
                    d % e = 0
                      = e

  This can be expressed recusively in the one-liner below:
*/
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

/* 
  Least Common Multiple equation:
  lcm(a, b) * gcd(a, b) = a * b
  lcm(a, b) = (a * b) / gcd(a, b)
*/
const lcm = (a, b) => (a * b) / gcd(a, b);

/* 
  Finding the LCM of multiple numbers can be simplified
  into finding the LCM of number pairs: lcm(a, b, c) = lcm(lcm(a, b), c)

  This algorithm modifies the array in place to reduce extra memory usage.
*/

export default function lcmArray(array) {
	if (array.length <= 1) return array.pop();
	for (let i = 1; i < array.length; i++) {
		array[i] = lcm(array[i - 1], array[i]);
	}
	return array.pop();
}
