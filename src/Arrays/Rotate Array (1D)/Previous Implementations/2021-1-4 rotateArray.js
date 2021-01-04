//rotate to the right [0, 1, 2] by 1 ---> [2, 0, 1]
//allow rotations greater than array length

export default function rotateArray(array, rotation) {
	rotation = array.length - (rotation % array.length);
	return array.slice(rotation).concat(array.slice(0, rotation));
}
