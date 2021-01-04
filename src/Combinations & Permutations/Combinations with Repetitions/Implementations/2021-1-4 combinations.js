/* 

Generate every possible combination of characters, given a string or string iterable.
  For given iterable ['a', 'b'] and desired length 2, it should output an 'aa' element.
  Should throw on arrays too large.
  
*/

export const ERROR_TOO_LARGE = 'Desired output too large!';

export default function combinationsWithRepetitions(iterable, length) {
	if (iterable.length ** length > 2 ** 32 - 1) throw new Error(ERROR_TOO_LARGE);
	let storage = [...iterable];
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
