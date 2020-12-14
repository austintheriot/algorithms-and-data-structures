import sort from './radixSort';
import * as sortingUtils from '../../../utils/sortingUtils';

describe('Radix Sort', () => {
	it('Should sort an array of positive integers from lowest highest', () => {
		sortingUtils.testPositiveIntegerSorting(sort);
	});

	it('Should sort negative integers', () => {
		sortingUtils.testIntegerSorting(sort);
	});

	it('Should successfully sort edge cases,', () => {
		sortingUtils.testEdgeCases(sort);
	});

	it('Should ignore decimal places', () => {
		sortingUtils.assertSorted(sort, [0, 1.1, 3, 7.9, 9, 45.5, 199.8]);
	});

	it('Should produce a stable sort (using ignored decimal places to check)', () => {
		let arr = [9, 112, 0, 110000578, 4, 1.0, 1.1, 1.2, 1.3];
		expect(sort(arr)).toEqual([0, 1.0, 1.1, 1.2, 1.3, 4, 9, 112, 110000578]);
	});

	it('Should not modify original array', () => {
		let arr = [5, 0, -5];
		sort(arr);
		expect(arr).toEqual([5, 0, -5]);
	});
});
