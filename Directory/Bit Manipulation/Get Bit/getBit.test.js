const getBit = require('./getBit.solution');

test('Get bit (zero based),', () => {
	//1
	expect(getBit(1, 1)).toBe(0);
	expect(getBit(1, 0)).toBe(1);

	//10
	expect(getBit(2, 0)).toBe(0);
	expect(getBit(2, 1)).toBe(1);
});
