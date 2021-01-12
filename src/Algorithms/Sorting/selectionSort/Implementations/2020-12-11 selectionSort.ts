export default (arr: any[]): any[] => {
	for (let i = 0; i < arr.length; i++) {
		let min = i;
		for (let j = i; j < arr.length; j++) {
			min = arr[j] < arr[min] ? j : min;
		}
		if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
	}
	return arr;
};
