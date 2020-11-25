const swap = require('./swap');

it('Should swap two numbers', () => {
	expect(swap({ a: -15, b: -13 })).toEqual({ a: -13, b: -15 });
	expect(swap({ a: 3, b: -10 })).toEqual({ a: -10, b: 3 });
	expect(swap({ a: 1, b: 2 })).toEqual({ a: 2, b: 1 });
	expect(swap({ a: 15, b: 23 })).toEqual({ a: 23, b: 15 });
});
