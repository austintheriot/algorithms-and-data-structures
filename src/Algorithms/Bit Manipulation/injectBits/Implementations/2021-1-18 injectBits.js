/* 

  Implement an algorithm that injects binary integer M into binary integer N from the ith to jth index.
  
  For Example: 
  injectBits(0b0000000000, 0b1010, 0, 3) === 0b0000001010
  injectBits(0b1111111111, 0b001100, 4, 9) === 0b0011001111
  
*/

export default function injectBits(n, m, i, j) {
	//create left mask
	const left = ~0 << (j + 1);
	//create right mask
	const right = (1 << i) - 1;
	//join mask
	const mask = left | right;
	//clear n from i to j
	n &= mask;
	//align m with i and j
	m <<= i;
	//OR n and m
	return n | m;
}
