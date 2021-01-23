export default function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; arr[j - 1] > arr[j]; j--) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
    }
  }
  return arr;
}
