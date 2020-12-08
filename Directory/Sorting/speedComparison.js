const { performance } = require('perf_hooks');
const ARRAY_LENGTH = 7500;
const quicksort = require('./Quicksort/quickSort');
const quicksortStable = require('./Quicksort (stable)/quickSortStable');

function getTimeDiff(sort, arr) {
	arrCopy = [...arr];
	let startTime1 = performance.now();
	sort(arrCopy);
	let endTime1 = performance.now();
	return endTime1 - startTime1;
}

function timer(sort1, sort2, arr) {
	return {
		sort1Time: getTimeDiff(sort1, arr),
		sort2Time: getTimeDiff(sort2, arr),
	};
}

function createRndmArr() {
	const arr = new Array(ARRAY_LENGTH);
	for (let i = 0; i < arr.length; i++) {
		arr[i] = Math.random();
	}
	return arr;
}

function createHalfEqlArr() {
	const arr = new Array(ARRAY_LENGTH);
	arr.fill(Math.random());
	for (let i = 0; i < ARRAY_LENGTH / 2; i++) {
		let randomIndex = Math.floor(Math.random() * arr.length);
		arr[randomIndex] = Math.random();
	}
	return arr;
}

function createEqlArr() {
	const arr = new Array(ARRAY_LENGTH);
	arr.fill(Math.random());
	return arr;
}

function runTimers(sortName1, sort1, sortName2, sort2, iterations) {
	const rndmTimes1 = [];
	const rndmTimes2 = [];
	const halfEqlTimes1 = [];
	const halfEqlTimes2 = [];
	const eqlTimes1 = [];
	const eqlTimes2 = [];

	//Run sort methods over and over
	for (let i = 0; i < iterations; i++) {
		//Create arrays to sort
		const rndmArr = createRndmArr();
		const halfEqlArr = createHalfEqlArr();
		const eqlArr = createEqlArr();

		//Sort array of randomized values
		var { sort1Time, sort2Time } = timer(sort1, sort2, rndmArr);
		rndmTimes1.push(sort1Time);
		rndmTimes2.push(sort2Time);

		//Sort array of half-random/half-equal values
		var { sort1Time, sort2Time } = timer(sort1, sort2, halfEqlArr);
		halfEqlTimes1.push(sort1Time);
		halfEqlTimes2.push(sort2Time);

		//Sort array of equal values
		var { sort1Time, sort2Time } = timer(sort1, sort2, eqlArr);
		eqlTimes1.push(sort1Time);
		eqlTimes2.push(sort2Time);
	}

	// Get function execution speed averages
	function getArrAvg(array) {
		return array.reduce((a, b) => a + b) / array.length;
	}

	const rndmAvg1 = getArrAvg(rndmTimes1);
	const rndmAvg2 = getArrAvg(rndmTimes2);
	const halfEqlAvg1 = getArrAvg(halfEqlTimes1);
	const halfEqlAvg2 = getArrAvg(halfEqlTimes2);
	const eqlAvg1 = getArrAvg(eqlTimes1);
	const eqlAvg2 = getArrAvg(eqlTimes2);

	// Determine which function was the fastest
	let winRndm = rndmAvg1 < rndmAvg2 ? sortName1 : sortName2; //random
	let timeDiffTotalRandomized = Math.abs(rndmAvg2 - rndmAvg1);
	let winHalfEql = halfEqlAvg1 < halfEqlAvg2 ? sortName1 : sortName2; //half equal
	let timeDiffTotalMostlyEqual = Math.abs(halfEqlAvg2 - halfEqlAvg1);
	let winEql = eqlAvg1 < eqlAvg2 ? sortName1 : sortName2; //equal
	let timeDiffEqual = Math.abs(eqlAvg2 - eqlAvg1);

	//Calculate Score
	let sort1Score = 0;
	let sort2Score = 0;
	winRndm === sortName1 ? sort1Score++ : sort2Score++;
	winHalfEql === sortName1 ? sort1Score++ : sort2Score++;
	winEql === sortName1 ? sort1Score++ : sort2Score++;
	const winner = sort1Score > sort2Score ? sortName1 : sortName2;

	//Print results
	function printResults(fasterFunction, timeDiff, arrayType) {
		console.log(
			`For a ${ARRAY_LENGTH} element array of ${arrayType} values: ${fasterFunction} (${timeDiff.toFixed(
				2
			)}ms faster)`
		);
	}
	console.log(`\n\Sorting Comparison Winners ###############`);
	printResults(winRndm, timeDiffTotalRandomized, 'randomized');
	printResults(winHalfEql, timeDiffTotalMostlyEqual, 'half equal');
	printResults(winEql, timeDiffEqual, 'all equal');
	console.log(`%cWINNER: ${winner}`, 'color: green;');
}

// runTimers(
// 	'quicksort (standard)',
// 	quicksort,
// 	'quicksort (stable)',
// 	quicksortStable,
// 	100
// );

runTimers('quicksort (standard)', quicksort, 'mergesort', quicksortStable, 100);
