//(obj: {a: number; b: number}): {a: number; b: number}
module.exports = function (obj) {
	let { a, b } = obj;
	a = a ^ b; //get "total"
	b = a ^ b; //"subtract" b from total, which is a
	a = a ^ b; //"subtract" b (the old a) from total, which is a
	return { a, b };
};

//This works because "XOR"ing a and b is NON-DESTRUCTIVE (like adding them together)
//The complement of each number is retrievable ("undoable") by "XOR"ing the result with the other number
