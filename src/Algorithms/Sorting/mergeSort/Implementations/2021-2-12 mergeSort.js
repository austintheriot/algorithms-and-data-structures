function merge(a1, a2) {
  const result = [];
  let i1 = 0;
  let i2 = 0;

  while (i1 < a1.length && i2 < a2.length) {
    if (a1[i1] < a2[i2]) {
      result.push(a1[i1]);
      i1++
    } else {
      result.push(a2[i2]);
      i2++
    }
  }

  return result.concat(a1.slice(i1), a2.slice(i2));
}

export default function mergeSort(array) {
  if (array.length <= 1) return array;
  const middle = Math.floor(array.length / 2);
  const a1 = array.slice(0, middle);
  const a2 = array.slice(middle);
  return merge(mergeSort(a1), mergeSort(a2));
}
