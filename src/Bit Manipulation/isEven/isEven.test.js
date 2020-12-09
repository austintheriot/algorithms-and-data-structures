const isEven = require('./isEven.js');

for (let callback in isEven) {
	describe(callback, () => {
		it(`Should be truthy if even`, () => {
			expect(isEven[callback](-14218)).toBeTruthy();
			expect(isEven[callback](-254)).toBeTruthy();
			expect(isEven[callback](-12)).toBeTruthy();
			expect(isEven[callback](-6)).toBeTruthy();
			expect(isEven[callback](0)).toBeTruthy();
			expect(isEven[callback](2)).toBeTruthy();
			expect(isEven[callback](6)).toBeTruthy();
			expect(isEven[callback](24)).toBeTruthy();
			expect(isEven[callback](158)).toBeTruthy();
			expect(isEven[callback](1054130)).toBeTruthy();
		});

		it(`Should be falsy if odd`, () => {
			expect(isEven[callback](-14217)).toBeFalsy();
			expect(isEven[callback](-253)).toBeFalsy();
			expect(isEven[callback](-11)).toBeFalsy();
			expect(isEven[callback](-5)).toBeFalsy();
			expect(isEven[callback](-1)).toBeFalsy();
			expect(isEven[callback](1)).toBeFalsy();
			expect(isEven[callback](5)).toBeFalsy();
			expect(isEven[callback](21)).toBeFalsy();
			expect(isEven[callback](159)).toBeFalsy();
			expect(isEven[callback](1054133)).toBeFalsy();
		});
	});
}
