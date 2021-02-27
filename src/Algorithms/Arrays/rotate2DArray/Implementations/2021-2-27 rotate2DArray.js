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
  /*  
  Iterate through each layer of the 2D array.
    Iterate through each index of that layer 
    (except for the last once, since it's the start of the next side)
      Swap each element in place
  */
  for (let layer = 0; layer < Math.ceil(array.length / 2); layer++) {
    for (let i = 0; i < array.length - (layer * 2) - 1; i++){
      const last = array.length - 1;
      const temp = array[i + layer][last - layer]; // temp = right
      array[i + layer][last - layer] = array[layer][i + layer]; //right = top
      array[layer][i + layer] = array[last - i - layer][layer]; //top = left
      array[last - i - layer][layer] = array[last - layer][last - i - layer]; // left = bottom
      array[last - layer][last - i - layer] = temp; // bottom = temp (right)
    }
  }
  return array;
}

