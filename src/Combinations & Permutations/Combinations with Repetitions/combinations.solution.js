/* 

  Generate every possible combination of characters, given a string or string iterable, n, taken k at a time.
  For given iterable ['a', 'b'] and desired length 2, it should output an 'aa' element.
  Should throw on arrays too large.

  This algorithm can be acheived both iteratively and recursively.
  The iterative solution runs in O(n - n ^ (k + 2)/(1 - n)) time complexity,
  where n is the length of the iterable, and k is the length of intended output array.

  The runtime complexity requires a partial sum of a geometric progression to solve. 

      For a length of 4:
        (n ^ 1 + n ^ 2 + n ^ 3 + n ^ 4) * n
      = (1 - n ^ (k + 1))/(1 - n)) - 1) * n 
      = (n - n ^ (k + 2))/(1 - n) - n
      = (n - n ^ (k + 2))/(1 - n) - (n(1 - n))/(1 - n)
      = (n - n ^ (k + 2) - n(1 - n))/(1 - n)
      = (n - n ^ (k + 2) - n + n ^ 2)/(1 - n)
      = (n ^ 2 - n ^ (k + 2))/(1 - n) 
    
      Example: 
          For string length n = 10 and output iterable length k = 4,

          Using a partial sum of a geometric progression:
          = (n ^ 2 - n ^ (k + 2))/(1 - n) 
          = (100 - 10 ^ 6)/(-9)
          = 111,100

          This is equivalent to (by hand):
          = (n ^ 1 + n ^ 2 + n ^ 3 + n ^ 4) * n
          = (10 + 100 + 1000 + 10,000) * 10
          = 11,110 * 10
          = 111,100

  Final output length = O(n ^ k)
      Example: For an iterable of the alphabet (length = 26), generating an output of length 2,
      the result will be a length of 26 ^ 2 = 676.

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

const MAX_ARRAY_LENGTH = 2 ** 32 - 1;

//SOLUTION 1: Re-assigning multiple storage arrays
export default function combinations1(iterable, length) {
	//copy over array/convert iterable (string) to array
	const storage = [...iterable];

	//number of posssible combinations = sourceArrayLength ^ outputStringLength
	const outputArraySize = iterable.length ** length;

	//throw if the resulting output array will to be too large
	if (outputArraySize > MAX_ARRAY_LENGTH) {
		throw new Error('Desired output too large!');
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

//SOLUTION 2: Using a queue
import Queue from '../../Queues/Queue.solution';

export function combinations2(iterable, length) {
	//number of posssible combinations = sourceArrayLength ^ outputStringLength
	const outputArraySize = iterable.length ** length;

	//throw if the resulting output array will to be too large
	if (outputArraySize > MAX_ARRAY_LENGTH) {
		throw new Error('Desired output too large!');
	}

	//convert iterable to array
	const array = [...iterable];

	//initialize and seed queue
	const queue = new Queue();
	array.forEach((el) => queue.add(el));

	//this is the number of dequeus required to create the final result:
	//n + (n ^ 2) + (n ^ 3) + ... + (n ^ length)
	let iterations = (1 - array.length ** length + 1) / (1 - array.length);
	//take element from queue, append each character, adding it back to the queue
	while (iterations > 1) {
		const dequeued = queue.remove();
		array.forEach((ch) => queue.add(dequeued + ch));
		iterations--;
	}

	//return result as an array
	return queue.toArray();
}
