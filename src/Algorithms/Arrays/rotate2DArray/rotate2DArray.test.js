import rotate2DArray from './rotate2DArray';

it('Should rotate a 2D array by 90 degrees', () => {
  let arrayStart = [[1]];
  let arrayEnd = [[1]];
  expect(rotate2DArray(arrayStart)).toEqual(arrayEnd);

  arrayStart = [
    [0, 1],
    [3, 2],
  ]
  arrayEnd = [
    [3, 0],
    [2, 1],
  ]
  expect(rotate2DArray(arrayStart)).toEqual(arrayEnd);

  arrayStart = [
    [9, 8, 7],
    [2, 1, 6],
    [3, 4, 5]
  ]
  arrayEnd = [
    [3, 2, 9],
    [4, 1, 8],
    [5, 6, 7], 
  ]
  expect(rotate2DArray(arrayStart)).toEqual(arrayEnd);

  arrayStart = [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
  ]
  arrayEnd = [
    [3, 2, 1, 0],
    [3, 2, 1, 0],
    [3, 2, 1, 0],
    [3, 2, 1, 0],
  ]
  expect(rotate2DArray(arrayStart)).toEqual(arrayEnd);

  arrayStart = [
    [0, 1, 3, 5, 7],
    [2, 0, 1, 3, 5],
    [4, 2, 0, 1, 3],
    [6, 4, 2, 0, 1],
    [8, 6, 4, 2, 0],
  ]
  arrayEnd = [
    [8, 6, 4, 2, 0],
    [6, 4, 2, 0, 1],
    [4, 2, 0, 1, 3],
    [2, 0, 1, 3, 5],
    [0, 1, 3, 5, 7],
  ]
  expect(rotate2DArray(arrayStart)).toEqual(arrayEnd);
})