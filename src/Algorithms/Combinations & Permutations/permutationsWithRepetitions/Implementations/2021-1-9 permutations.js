/* 

Generate every possible combination of characters, given a string or string iterable.
  For given iterable ['a', 'b'] and desired length 2, it should output an 'aa' element.
  Should throw on arrays too large.
  
*/

//optional
import Queue from '../../Queues/Queue.solution';
export const ERROR_TOO_LARGE = 'Desired output too large!';
export const MAX_ARRAY_LENGTH = 2 ** 32 - 1;

export default function permutations(iterable, length) {
	const outputArrayLength = iterable.length ** length;
	if (outputArrayLength > MAX_ARRAY_LENGTH) {
		throw new Error(ERROR_TOO_LARGE);
	}

	let storage = [...iterable];

	while (length > 1) {
		const newStorage = [];
		for (let i = 0; i < storage.length; i++) {
			for (let j = 0; j < iterable.length; j++) {
				newStorage.push(storage[i] + iterable[j]);
			}
		}
		storage = newStorage;
		length--;
	}

	return storage;
}
