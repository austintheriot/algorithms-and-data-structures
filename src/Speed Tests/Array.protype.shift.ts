import * as sortingUtils from '../utils/sortingUtils';
import * as speedUtils from '../utils/speedUtils';

let array: number[];
array = sortingUtils.makeArray('decimal', 1);
console.log(
	'Pop (1): ',
	speedUtils.averageRunTimes(() => array.pop(), 100_000)
);

array = sortingUtils.makeArray('decimal', 1_000);
console.log(
	'Pop (1,000): ',
	speedUtils.averageRunTimes(() => array.pop(), 100_000)
);

array = sortingUtils.makeArray('decimal', 1_000_000);
console.log(
	'Pop (1,000,000): ',
	speedUtils.averageRunTimes(() => array.pop(), 100_000)
);

array = sortingUtils.makeArray('decimal', 1);
console.log(
	'Shift (1): ',
	speedUtils.averageRunTimes(() => array.shift(), 100_000)
);

array = sortingUtils.makeArray('decimal', 1_000);
console.log(
	'Shift (1,000): ',
	speedUtils.averageRunTimes(() => array.shift(), 100_000)
);

array = sortingUtils.makeArray('decimal', 1_000_000);
console.log(
	'Shift (1,000,000): ',
	speedUtils.averageRunTimes(() => array.shift(), 100_000)
);
