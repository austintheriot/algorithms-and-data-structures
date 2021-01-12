/* 

  Calculate the index of a given Fibonacci number (0-based, count "1" as two separate indixes)

    For example:
    fibonacciIndex(0) = 0
    fibonacciIndex(1) = 1
    fibonacciIndex(1) = 1
    fibonacciIndex(2) = 3
    fibonacciIndex(3) = 4
    fibonacciIndex(5) = 5
    fibonacciIndex(8) = 6
    fibonacciIndex(13) = 7
    fibonacciIndex(21) = 8
    fibonacciIndex(34) = 9
    fibonacciIndex(55) = 10

*/

const PHI = 1.618033988749895;

function logPhi(num) {
	return Math.log(num) / Math.log(PHI);
}

export default function fibonacciIndex(num) {
	return num === 0
		? 0
		: num === 1
		? 1
		: Math.floor(logPhi((num ^ (1 / 5)) + 1 / 2)) + 2;
}
