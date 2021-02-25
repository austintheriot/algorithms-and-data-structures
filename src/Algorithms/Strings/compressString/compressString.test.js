import compress from './compressString';

describe('Compress String', () => {
  it('Should compress a string', () => {
    expect(compress('aaBBccDDD')).toBe('a2B2c2D3');
		expect(compress('ZyyyyyyyyyyXWVVVVVVVu')).toBe('Z1y10X1W1V7u1');
		expect(compress('aaaaaaaaBBBBBBBCCCCzzzefgg')).toBe('a8B7C4z3e1f1g2');
	});

	it('Should return the original string if the compressed version is not smaller', () => {
		expect(compress('abcdefgh')).toBe('abcdefgh');
		expect(compress('AbCdEfGh')).toBe('AbCdEfGh');
		expect(compress('aaBBccDD')).toBe('aaBBccDD');
		expect(compress('aaaaabcd')).toBe('aaaaabcd');
	});
});
