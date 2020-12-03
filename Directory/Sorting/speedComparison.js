const quicksort = require('./Quicksort/quickSort');
const quicksortStable = require('./Quicksort (stable)/quickSortStable');
const mergeSort = require('./Merge Sort/mergeSort.solution');

//Create arrays to sort
const randomizedArray = new Array(7500);
for (let i = 0; i < randomizedArray.length; i++) {
	randomizedArray[i] = Math.random();
}

const equalElementsArray = new Array(7500);
equalElementsArray.fill(0.5);

const mostlyEqualElementsArray = new Array(7500);
mostlyEqualElementsArray.fill(0.5);
mostlyEqualElementsArray[7] = Math.random();
mostlyEqualElementsArray[517] = Math.random();
mostlyEqualElementsArray[4123] = Math.random();

function timeQuicksort(arrayType, sort1Name, sort1, sort2Name, sort2) {
	let startTime1 = new Date();
	sort1();
	let endTime1 = new Date();
	let timeDiff1 = endTime1 - startTime1;

	let startTime2 = new Date();
	sort2();
	let endTime2 = new Date();
	let timeDiff2 = endTime2 - startTime2;

	let [fasterFunction, slowerFunction] =
		timeDiff1 < timeDiff2 ? [sort1Name, sort2Name] : [sort2Name, sort1Name];
	let timeDiffTotal = Math.abs(timeDiff2 - timeDiff1);

	console.log(`%c\n\n###### ${arrayType}: ######`, 'font-style: italic;');
	console.log(`${sort1Name}: ${timeDiff1}ms`);
	console.log(`${sort2Name}: ${timeDiff2}ms`);
	console.log(
		`${fasterFunction} < ${slowerFunction}, ${timeDiffTotal}ms, ${arrayType}.`
	);
	console.log(`%cWINNER: ${fasterFunction}`, 'color: green;');
}

timeQuicksort(
	'randomized array',
	'quicksort (standard)',
	quicksort.bind(this, [...randomizedArray], 0, randomizedArray.length),
	'quicksort (stable)',
	quicksortStable.bind(this, [...randomizedArray])
);
// timeQuicksort(equalElementsArray, 'equal elements array array');
// timeQuicksort(mostlyEqualElementsArray, 'mostly equal elements array array');
