/*  
  METHOD 1: 
    lcm(1, 2, 3) = lcm(lcm(1, 2), 3)
    use Euclidean Algorithm to generate 
    greatest common denominator and least common multiple.

    Important fact about least common multiples:
    

  METHOD 2: 
    prime factorization

*/

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const lcm = (a, b) => (a * b) / gcd(a, b);

export default function lcmArray(array) {
	if (array.length <= 1) return array[0];
	for (let i = 1; i < array.length; i++) {
		array[i] = lcm(array[i - 1], array[i]);
	}
	return array.pop();
}
