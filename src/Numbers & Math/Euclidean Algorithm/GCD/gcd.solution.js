/* 

  This algorithm is a modification of Euclid's original algorithm,
  which used subtraction instead of remainders.

  Euclid's version only allowed positive integers, whereas this algorithm
  allows both positive and negative integers. 

  Example gcd(30, 50)
  30 % 50 = 30
       50 % 30 = 20
            30 % 20 = 10
                 20 % 10 = 0
                    = 10

*/

//iterative version
function gcdIterative(a, b) {
	//a becomes b and b becomes the remainder of a / b
	while (b !== 0) {
		const temp = b; //store b temporarily
		b = a % b;
		a = temp;
	}
	return a;
}

//resursive solution
export default function gcdRecursive(a, b) {
	return b === 0 ? a : gcdRecursive(b, a % b);
}
