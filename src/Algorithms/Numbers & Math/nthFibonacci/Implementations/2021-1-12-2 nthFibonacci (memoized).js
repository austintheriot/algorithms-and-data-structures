export default function fibonacci(n, hashTable = {}) {
	return n === 0 || n === 1
		? n
		: hashTable[n] ??
				(hashTable[n] =
					fibonacci(n - 1, hashTable) + fibonacci(n - 2, hashTable));
}
