//(obj: {a: number; b: number}): {a: number; b: number}
module.exports = function (obj) {
	let { a, b } = obj;
	a = a ^ b; //get "total"
	b = a ^ b; //"subtract" b from total, which is a
	a = a ^ b; //"subtract" b (the old a) from total, which is a
	return { a, b };
};
