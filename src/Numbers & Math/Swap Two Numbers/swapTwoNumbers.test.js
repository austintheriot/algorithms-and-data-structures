import swap from './swapTwoNumbers';

it('Should swap two numbers', () => {
	expect(swap([1, 5])).toEqual([5, 1]);
	expect(swap([-15, 32])).toEqual([32, -15]);
	expect(swap([987.125, -123.5])).toEqual([-123.5, 987.125]);
});
