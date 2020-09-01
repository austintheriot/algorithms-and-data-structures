const fs = require('fs');
const Trie = require('../Trie.solution');

fs.readFile('../everyEnglishWord.txt', 'utf8', (err, data) => {
	if (err) throw err;
	console.log('Data loaded');
	console.log('Transforming data into array');
	const dataArray = data.split('\n').map((el) => el.trim());
	console.log('Data formatted');
	console.log('Converting array into trie');
	const trie = new Trie();
	dataArray.forEach((el) => trie.add(el));
	console.log('Data converted into trie');
	console.log('Converting trie into JSON string');
	const dataJSON = JSON.stringify(trie);
	console.log('Data converted to JSON');
	console.log('Writing file to hardrive');
	fs.appendFile('everyEnglishWordTrie.txt', dataJSON, (err) => {
		if (err) throw err;
		console.log('File written to hardrive');
		return;
	});
});
