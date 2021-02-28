/* 

  Implement an algorithm to rotate a 2D array by 90 degrees.
  Optionally, do it in place.

  For example: 

  let arrayStart = [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
  ]

  Should become: 

  let arrayEnd = [
    [3, 2, 1, 0],
    [3, 2, 1, 0],
    [3, 2, 1, 0],
    [3, 2, 1, 0],
  ]

*/

export default function rotate2DArray(array) {
  for (let layer = 0; layer < array.length >> 1; layer++){
    for (let i = 0; i < array.length - (layer * 2) - 1; i++){
      const last = array.length - 1;
      // temp = right
      const temp = array[i + layer][last - layer];
      // right = top
      array[i + layer][last - layer] = array[layer][layer + i];
      // top = left
      array[layer][layer + i] = array[last - layer - i][layer];
      // left = bottom
      array[last - layer - i][layer] = array[last - layer][last - layer - i];
      // bottom = temp (right)
      array[last - layer][last - layer - i] = temp;
    }
  }
  return array;
}

