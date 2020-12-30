/* 
    lcm(x, y) * gcd(x, y) = x * y
    lcm(x, y) = (x * y) / gcd(x, y)
    
    Use the Euclidean Algorithm to generate the GCD of the two numbers,
    then divide the product of the two numbers by their GCD.

*/

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

export default function lcm(a, b) {
	return (a * b) / gcd(a, b);
}
