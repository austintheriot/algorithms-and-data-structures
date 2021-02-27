/* 

  Implement an algorithm to compress the repeating characters of a string:
  i.e. zzzzyyxEFF would become z4y2xE1F2
  If the compressed version is not smaller, return the original string.
  The original string contains only letter characters.

*/

export default function compressString(string) {
  const compressed = [];
  let prevCh = string[0];
  let count = 1;
  for (let i = 1; i <= string.length; i++){
    const nextCh = string[i];
    if (prevCh === nextCh) {
      count++;
    } else {
      compressed.push(prevCh + count);
      prevCh = nextCh;
      count = 1;
    }
  }
  const newString = compressed.join('');
  return newString.length < string.length ? newString : string;;
}