/* 

  Generate every possible combination of characters, given a string or string iterable, n, taken k at a time.
  For given iterable ['a', 'b'] and desired length 2, it should output an 'aa' element.
  Should throw on arrays too large.

  This algorithm can be acheived both iteratively and recursively (iterative solution below).
  This algorithm runs in O(1 - n ^ (k + 1)/(1 - n)) time, where n is the length of the iterable
  and k is the length of intended output iterable.
      This requires a partial sum of a geometric series to solve. 

      For a length of 4:
      = O(n ^ 1) + O(n ^ 2) + O(n ^ 3) + O(n ^ 4) //Writing runtime "by hand"
      = O((1 - n ^ (k + 1)/(1 - n)) - 1) //Writing runtime as a partial sum of a geometric series
      
      This is a precise calculation, but the final - 1 is dropped in the end for complexity analysis.
    
      Example: 
          For string length 10 and output iterable length 4,
          = O((1 - n ^ (k + 1)/(1 - n))) 
          = O((1 - 10 ^ (4 + 1)/(1 - 10)))
          = O((1 - 10 ^ 5)/-9))
          = O((1 - 100,000)/-9))
          = O((-99,999 / -9) - 1)
          = O(11,111 - 1)
          = O(11,110)

          This is equivalent to:
          = O(n ^ 1) + O(n ^ 2) + O(n ^ 3) + O(n ^ 4)
          = 10 + 100 + 1000 + 10,000
          = 11,110

  Final output length = O(n ^ k)
      For an iterable of the alphabet (length = 26), generating an output of length 2,
      the result will be a length of 26 ^ 2 = 676.

  Steps: 
      Fill a storage iterable with the elements to be combined.
      Iterate through storage.
      On each pass through the storage iterable, iterate through the original elements, 
          concatenating the original iterable with the existing storage strings 
          and adding them to a new storage iterable. 
      Assign new storage iterable to existing storage variable.
      Repeat until the desired length is achieved.




  If you were to take all the lowercase letters of the alphabet and get all possible combinations,
  the longest desired tring length you could use would be 6 characters:
      = log26(2 ** 32 - 1) = 6.808

  This would produce 308,915,776 combinations = 
      = 26 ** 6 = 308,915,776 combinations



  
  For both lowercase and uppercase letters, longest possible string length is 5 characters:
      = log52(2 ** 32 - 1) = 5.614

  This would produce 380,204,032 combinations = 
      = 52 ** 5 = 380,204,032 combinations

*/

export const ERROR_TOO_LARGE = 'Desired output too large!';

export default function combinationsWithRepetitions(iterable, length) {
	//copy over array/convert iterable (string) to array
	const storage = [...iterable];

	//do not attempt if output would be too large for JavaScript's max array size
	if (storage.length ** length > 2 ** 32 - 1) {
		throw new Error(ERROR_TOO_LARGE);
	}

	while (length > 1) {
		const newStorage = [];
		for (let i = 0; i < storage.length; i++) {
			for (let j = 0; j < iterable.length; j++) {
				newStorage.push(storage[i] + iterable[j]);
			}
		}
		length--;
		storage = newStorage;
	}
	return storage;
}
