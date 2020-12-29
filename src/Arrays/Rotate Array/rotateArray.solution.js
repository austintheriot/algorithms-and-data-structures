export default function rotateArray(array, originalRotation) {
	//truncate the rotation to not exceed array length
	//convert rotation number into array index
	const rotation = array.length - (originalRotation % array.length);

	//new array = [2nd slice] + [1st slice]
	return array.slice(rotation).concat(array.slice(0, rotation));
}

/* 

#########################

Alternative one-liner:

export default function rotateArray(array, originalRotation) {
	return array
		.splice(array.length - (originalRotation % array.length), Infinity)
		.concat(array);
}


*/
