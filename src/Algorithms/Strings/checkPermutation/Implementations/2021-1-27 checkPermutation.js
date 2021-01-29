export default function checkPermutation(s1, s2) {
  s1 = s1.split("").sort();
  s2 = s2.split("").sort();

  for (let i1 = 0, i2 = 0; i1 < s1.length && i2 < s2.length; ) {
    if (s1[i1] !== s2[i2]) return false;
    else i1++, i2++;
  }

  return true;
}
