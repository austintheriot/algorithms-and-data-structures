/* 

  Generate every possible permutation of a string without duplicates.

*/

export default function getPermutations(string) {
  const permutations = [];

  if (string.length === 0) {
    permutations.push(string);
    return permutations;
  }

  let firstCh = string[0];
  let rest = string.slice(1);
  let words = getPermutations(rest);
  for (let word of words) {
    for (let i = 0; i <= word.length; i++) {
      permutations.push(word.slice(0, i) + firstCh + word.slice(i));
    }
  }

  return permutations;
}
