//(obj: {a: number; b: number}): {a: number; b: number}
module.exports = function (obj) {
	let { a, b } = obj;
	a = a ^ b;
	b = a ^ b;
	a = a ^ b;
	return { a, b };
};
