/* 

  Implement an algorithm to compress the repeating characters of a string:
  i.e. zzzzyyxEFF would become z4y2xE1F2
  If the compressed version is not smaller, return the original string.
  The original string contains only letter characters.

*/

export default function compressString(string) {
  const compressed = [];

  let prevCh = string[0];
  let chCount = 1;
  for (let i = 1; i <= string.length; i++){
    const currCh = string[i];
    if (prevCh === currCh) {
      chCount++;
      continue;
    } else {
      let element = prevCh + chCount.toString();
      compressed.push(element);
      prevCh = currCh;
      chCount = 1;
    }
  }
  const newString = compressed.join('');
  return newString.length < string.length ? newString : string;
}