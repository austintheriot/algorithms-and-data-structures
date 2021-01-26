/* 

  Implement an algorithm to merge sorted arrayB into sorte arrayA, which
  has enough empty room at the end to accomodate the new elements.
  Modify arrayA in place.

*/

export default function sortedMerge(aA, aB) {
  let endOfA = aA.length - 1;
  let iA = aA.findIndex((el) => el == null) - 1;
  let iB = aB.length - 1;

  while (iB >= 0) {
    if (iA >= 0 && aA[iA] > aB[iB]) {
      aA[endOfA] = aA[iA];
      iA--;
    } else {
      aA[endOfA] = aB[iB];
      iB--;
    }
    endOfA--;
  }
  return aA;
}
