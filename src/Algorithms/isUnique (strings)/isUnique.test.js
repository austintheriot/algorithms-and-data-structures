import isUnique from './isUnique';

it('If string has all unique characters', () => {
	expect(isUnique('abcdef')).toBe(true);
	expect(isUnique('a')).toBe(true);
	expect(isUnique('22')).toBe(false);
	expect(isUnique('ZZZ')).toBe(false);
});
