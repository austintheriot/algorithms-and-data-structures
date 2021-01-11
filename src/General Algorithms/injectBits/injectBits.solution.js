/* 

  Implement an algorithm that injects binary integer M into binary integer N from the ith to jth index.
  
  Example: 
  injectBits(0b0000000000, 0b1010, 0, 3) === 0b0000001010
  injectBits(0b1111111111, 0b001100, 4, 9) === 0b0011001111


  SOLUTION 1: 
    Iterate through m and n simultaneously. 
    get the bit from m and update n's bit to m's.

    Runtime = O(m), where m is the number of binary digits in number m.
      This assumes that the functions getBit and updateBIt are O(1), which isn't strictly true.

    Considering that m can never be more than 32 bits, 
      the runtime for this function could also be considered O(1).

  SOLUTION 2: 
    Clear the bits of n from i to j.
    Shift m so that it lines up with i through j.
    Merge m and n with OR
  
*/

//Solution 1:
function injectBits(n, m, i, j) {
	//helper functions
	const getBit = (num, i) => (num >> i) & 1;
	const updateBIt = (num, i, bit) => (num & ~(1 << i)) | (bit << i);

	//k here is the index marker
	//kn refers to the index for number n
	//km regers to the index for number m
	//iterate through n from i to j
	//iterate through m from 0 to j - i;
	for (let kn = i, km = 0; kn <= j; kn++, km++) {
		//get bit from m
		const bit = getBit(m, km);
		//set bit of n to the mth bit
		n = updateBIt(n, kn, bit);
	}

	return n;
}

//Solution 2
export default function injectBits(n, m, i, j) {
	/* 

    Clear the bits of n from i to j.
    Example: 
      If i = 1 and j = 2.
      j = 11111111 << (2 + 1) = 11111000
      i = ~(11111111 << i) = ~(11111110) = 00000001
      i | j = 11111001
  
  */

	const ALL_ONES = ~0;

	//Create a left mask
	const left = ALL_ONES << (j + 1);

	//Create a right mask
	//One way: ((1 << i) - 1)
	//Second way: ~(ALL_ONES << i)
	const right = ~(ALL_ONES << i);

	//Combine the masks
	const mask = left | right;

	//clear n's bit
	n = n & mask;

	/* 

    Shift m so that it lines up with i through j.
    Example
    If m = 1010 and i = 1
    m << i = 1010 << 1 = 10100

  */

	m = m << i;

	// Merge m and n with OR
	n = n | m;

	return n;
}
