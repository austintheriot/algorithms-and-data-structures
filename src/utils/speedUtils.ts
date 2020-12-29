const { performance } = require('perf_hooks');

//time the performance duration of a callback
export function timeCallback(callback: { (args?: any): void }): number {
	const time1 = performance.now();
	callback();
	const time2 = performance.now();
	return time2 - time1;
}

//iterate callback and average the runtime performance
export function averageRunTimes(
	callback: { (args?: any): void },
	iterations: number = 1000
): number {
	const times: number[] = [];
	for (let i = 0; i < iterations; i++) {
		times.push(timeCallback(callback));
	}
	return times.reduce((a, b) => a + b) / times.length;
}
