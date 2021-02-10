/* 

  Determine whether a given string contains only a single occurence of each letter.

  You can choose to implement with or without a secondary data structure.

*/

export default function isUnique(string) {
  const hashtable = {};
  for (let i = 0; i < string.length; i++){
    if (!hashtable[string[i]]) {
      hashtable[string[i]] = true;
    } else return false;
  }

  return true;
}
