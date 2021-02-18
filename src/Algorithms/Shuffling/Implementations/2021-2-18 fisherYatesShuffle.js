//should modify the original arr

export default function fisherYatesShuffle(arr) {
  for (let i = 0; i < arr.length; i++){
    const j = i + Math.floor(Math.random() * (arr.length - i));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
