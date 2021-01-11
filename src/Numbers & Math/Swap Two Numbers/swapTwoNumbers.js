/* 

  Given an array of two numbers, swap the numbers without using
  a temporary variable or array destructuring.

*/

export default function swapTwoNumbers(arr) {
	arr[0] = arr[0] + arr[1]; //get total
	arr[1] = arr[0] - arr[1]; //element 0 is now 1 (total - 1)
	arr[0] = arr[0] - arr[1]; //element 1 s now 0 (total - 1)
	return arr;
}
