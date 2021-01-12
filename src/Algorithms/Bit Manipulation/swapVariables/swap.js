//(obj: {a: number; b: number}): {a: number; b: number}
module.exports = function (obj) {
	let { a, b } = obj;

	return { a, b };
};
