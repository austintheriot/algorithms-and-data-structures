/* 

  Implement an algorithm that injects binary integer M into binary integer N from the ith to jth index.
  
  For Example: 
  injectBits(0b0000000000, 0b1010, 0, 3) === 0b0000001010
  injectBits(0b1111111111, 0b001100, 4, 9) === 0b0011001111
  
*/

export default function injectBits(n, m, i, j) {
  //clear n from i to j
  const leftMask = ~0 << (j + 1);
  const rightMask = (1 << i) - 1;
  const mask = leftMask | rightMask;
  n = n & mask;
  //move m over to be in line with i and j
  m = m << i;
  //combine n and m
  n = n | m;
  return n;
}
