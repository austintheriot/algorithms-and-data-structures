const countDigits = require('./countDigits');

it('Should return the number of whole digits in a number', () => {
	expect(countDigits(-17984.25)).toBe(5);
	expect(countDigits(-587)).toBe(3);
	expect(countDigits(-9.3333)).toBe(1);
	expect(countDigits(0)).toBe(1);
	expect(countDigits(8)).toBe(1);
	expect(countDigits(15)).toBe(2);
	expect(countDigits(572.153)).toBe(3);
	expect(countDigits(9873.9875)).toBe(4);
});
