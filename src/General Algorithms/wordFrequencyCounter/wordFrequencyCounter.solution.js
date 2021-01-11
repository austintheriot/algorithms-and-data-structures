/* 

  Implement an algorithm to count the frequency of words in a text.
  Optimize for the possibility that the function might be called many times.

*/

export default function wordFrequencyCounter(word, text) {
	const hashTable = {};
	//Convert text to array and clean up the data
	//(reatain only letters and apostrophes)
	text = text
		.split(' ')
		.flatMap((string) =>
			string
				.toLowerCase()
				.trim()
				.split(/[^a-zA-Z']/)
		)
		.filter((string) => string.length > 0);

	//increment hashtable for each word
	text.forEach((word) => {
		hashTable[word] = hashTable[word] ?? 0;
		hashTable[word]++;
	});

	return hashTable[word] ?? 0;
}
