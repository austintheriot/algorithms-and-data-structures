import squareRoot from './squareRoot';

it('Should return the square root of a number', () => {
  const POINTS_OF_PRECISION = 10;
  
  //perfect sqaures
  // expect(squareRoot(1)).toBe(1);
  expect(squareRoot(4).toFixed(POINTS_OF_PRECISION)).toBe(2..toFixed(POINTS_OF_PRECISION));
  expect(squareRoot(9).toFixed(POINTS_OF_PRECISION)).toBe(3..toFixed(POINTS_OF_PRECISION));
  expect(squareRoot(16).toFixed(POINTS_OF_PRECISION)).toBe(4..toFixed(POINTS_OF_PRECISION));
  expect(squareRoot(25).toFixed(POINTS_OF_PRECISION)).toBe(5..toFixed(POINTS_OF_PRECISION));
  expect(squareRoot(100).toFixed(POINTS_OF_PRECISION)).toBe(10..toFixed(POINTS_OF_PRECISION));
  
  //non-perfect squares
  expect(squareRoot(2).toFixed(POINTS_OF_PRECISION)).toBe(Math.sqrt(2).toFixed(POINTS_OF_PRECISION));
  expect(squareRoot(3).toFixed(POINTS_OF_PRECISION)).toBe(Math.sqrt(3).toFixed(POINTS_OF_PRECISION));
  expect(squareRoot(5).toFixed(POINTS_OF_PRECISION)).toBe(Math.sqrt(5).toFixed(POINTS_OF_PRECISION));
  expect(squareRoot(6).toFixed(POINTS_OF_PRECISION)).toBe(Math.sqrt(6).toFixed(POINTS_OF_PRECISION));
  expect(squareRoot(7).toFixed(POINTS_OF_PRECISION)).toBe(Math.sqrt(7).toFixed(POINTS_OF_PRECISION));
  expect(squareRoot(8).toFixed(POINTS_OF_PRECISION)).toBe(Math.sqrt(8).toFixed(POINTS_OF_PRECISION));
})