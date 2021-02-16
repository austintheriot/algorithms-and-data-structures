/* 
  Without using the built-in Math.sqrt() function,
  implement an algorithm to calculate the square root 
  of a number up to 10 decimal points of precision.
*/


/* 
  Recursive binary search.
  It's necessary to limit the iterations, since JavaScript math
  is messy and doesn't always produce the last few decimal points
  of precision necessary to equate the floats.
*/
export default function squareRoot(num, low, high, iter = 50) {
  low ??= 0, high ??= num;
  const guess = (low + high) / 2;
  return ((guess ** 2 === num) || (iter === 0)) ? guess
    : (guess ** 2 < num) ? squareRoot(num, guess, high, iter - 1)
      : squareRoot(num, low, guess, iter - 1)
}