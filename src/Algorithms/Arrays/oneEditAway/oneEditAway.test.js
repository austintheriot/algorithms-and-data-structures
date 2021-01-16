import oneEditAway from './oneEditAway';

describe('One Edit Away', () => {
	it('Should return true if two string are one edit away', () => {
		//adding a character
		expect(oneEditAway('one', 'hone')).toBe(true);
		expect(oneEditAway('one', 'omne')).toBe(true);
		expect(oneEditAway('one', 'onde')).toBe(true);
		expect(oneEditAway('one', 'ones')).toBe(true);

		//deleting a character
		expect(oneEditAway('one', 'on')).toBe(true);
		expect(oneEditAway('one', 'oe')).toBe(true);
		expect(oneEditAway('one', 'ne')).toBe(true);

		//changing a character
		expect(oneEditAway('one', 'ine')).toBe(true);
		expect(oneEditAway('one', 'ole')).toBe(true);
		expect(oneEditAway('one', 'ond')).toBe(true);
	});

	it('Should return false if two strings are more than one (or zero) edits away', () => {
		//same string
		expect(oneEditAway('one', 'one')).toBe(false);

		//not even close
		expect(oneEditAway('one', 'hay')).toBe(false);

		//adding one character and editing
		expect(oneEditAway('one', 'zore')).toBe(false);

		//deleting one character and editing
		expect(oneEditAway('one', 'na')).toBe(false);

		//deleting one character and adding another
		expect(oneEditAway('one', 'nea')).toBe(false);

		//adding two characters
		expect(oneEditAway('one', 'honed')).toBe(false);

		//deleting two characters
		expect(oneEditAway('one', 'o')).toBe(false);
		expect(oneEditAway('one', 'n')).toBe(false);
		expect(oneEditAway('one', 'e')).toBe(false);

		//changing two characters
		expect(oneEditAway('one', 'old')).toBe(false);
	});
});
