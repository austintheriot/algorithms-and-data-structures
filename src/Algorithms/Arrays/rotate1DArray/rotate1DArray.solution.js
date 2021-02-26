// cleanest solution I've found so far
export default function rotateArray1(array, rotation) {
  const rotationIndex = array.length - (rotation % array.length);
  return [...array.slice(rotationIndex), ...array.slice(0, rotationIndex)]
}

// another solution
function rotateArray2(array, originalRotation) {
	//truncate the rotation to not exceed array length
	//convert rotation number into array index
	const rotation = array.length - (originalRotation % array.length);

	//new array = [2nd slice] + [1st slice]
	return array.slice(rotation).concat(array.slice(0, rotation));
}

//alternative one-liner:
function rotateArray3(array, originalRotation) {
	return array
		.splice(array.length - (originalRotation % array.length), Infinity)
		.concat(array);
}