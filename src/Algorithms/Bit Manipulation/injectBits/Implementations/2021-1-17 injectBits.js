/* 

  Implement an algorithm that injects binary integer M into binary integer N from the ith to jth index.
  
  For Example: 
  injectBits(0b0000000000, 0b1010, 0, 3) === 0b0000001010
  injectBits(0b1111111111, 0b001100, 4, 9) === 0b0011001111
  
*/

//clear bits in m from i to j
//move m over to be in line with n
//OR n with m

export default function injectBits(n, m, i, j) {
	const left = ~0 << (j + 1);
	const right = (1 << i) - 1;
	const mask = left | right;
	n = n & mask;
	m = m << i;
	return n | m;
}
