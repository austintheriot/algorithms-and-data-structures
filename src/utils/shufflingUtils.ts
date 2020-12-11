interface Frequencies {
	[element: number]: number[];
}

interface Shuffle {
	(array: any[]): any[];
}

function trackElementPlacements(
	actualFrequencies: Frequencies = {},
	shuffledArr: number[] = []
) {
	//repeatedly shuffle array and count the number of items
	//each element is placed into each index of the array
	for (let i = 0; i < shuffledArr.length; i++) {
		const el = shuffledArr[i];
		if (actualFrequencies[el] == undefined)
			actualFrequencies[el] = new Array(shuffledArr.length).fill(0);
		actualFrequencies[el][i]++;
	}
	return actualFrequencies;
}

function iterateShuffles(
	shuffleCallback: Shuffle,
	sortedArr = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
	iterations = 100
) {
	//init frequency counter
	const actualFrequencies: Frequencies = {};

	for (let i = 0; i < iterations; i++) {
		//shuffle array, copy elements to prevent editing original array
		const shuffledArr = shuffleCallback([...sortedArr]);
		trackElementPlacements(actualFrequencies, shuffledArr);
	}
	return actualFrequencies;
}

export function assertEvenDistribution(
	shuffleCallback: Shuffle,
	options = {
		sortedArr: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
		iterations: 1_000_000,
		marginOfError: 0.01,
	}
) {
	//this is the "ideal" number of times each array element
	//should be shuffled into each array position
	const idealFrequency = options.iterations / options.sortedArr.length;
	const lowestFrequency = idealFrequency * (1 - options.marginOfError);
	const highestFrequency = idealFrequency * (1 + options.marginOfError);
	const actualFrequencies = iterateShuffles(
		shuffleCallback,
		options.sortedArr,
		options.iterations
	);

	//check that each element was shuffled into each place into the array equally
	for (let key in actualFrequencies) {
		let positionArray = actualFrequencies[key];
		for (let i = 0; i < positionArray.length; i++) {
			let frequency = positionArray[i];
			try {
				expect(frequency).toBeGreaterThan(lowestFrequency);
				expect(frequency).toBeLessThan(highestFrequency);
			} catch (error) {
				//Limit stack track to the line that includes the assertion name
				Error.captureStackTrace(error, assertEvenDistribution);
				throw error;
			}
		}
	}
}
