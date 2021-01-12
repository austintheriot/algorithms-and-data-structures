import primeFactors from './primeFactors';

it('Should calculate the prime factorization of a number', () => {
	expect(primeFactors(0)).toEqual({});
	expect(primeFactors(1)).toEqual({});
	expect(primeFactors(2)).toEqual({ 2: 1 });
	expect(primeFactors(10)).toEqual({ 2: 1, 5: 1 });
	expect(primeFactors(20)).toEqual({ 2: 2, 5: 1 });
	expect(primeFactors(40)).toEqual({ 2: 3, 5: 1 });
	expect(primeFactors(121)).toEqual({ 11: 2 });
	expect(primeFactors(12345)).toEqual({ 3: 1, 5: 1, 823: 1 });
});
