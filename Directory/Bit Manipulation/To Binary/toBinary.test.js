const toBinary = require('./toBinary.solution');

test('Should convert a decimal number to its binary representation', () => {
	expect(toBinary(1)).toBe('1');
});
