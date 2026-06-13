import { describe, test, expect } from 'bun:test';
import { StandardEnglishParser } from '../parser';

describe('Verse parsing', () => {
	const parser = new StandardEnglishParser();

	test('2,3;', () => {
		parser.PutTokensManually('2,3;');

		const result = parser.parseVerses();
		expect(result.t).toEqual([
			{ lower_verse: 2, lower_verse_notation: '', higher_verse: 2, higher_verse_notation: '' },
			{ lower_verse: 3, lower_verse_notation: '', higher_verse: 3, higher_verse_notation: '' },
		]);
	});
	test('"2,4,;" (is allowed)', () => {
		parser.PutTokensManually('2,4,;');

		const result = parser.parseVerses();
		expect(result.t).toEqual([
			{ lower_verse: 2, lower_verse_notation: '', higher_verse: 2, higher_verse_notation: '' },
			{ lower_verse: 4, lower_verse_notation: '', higher_verse: 4, higher_verse_notation: '' },
		]);
	});
	test('5,7,3-4', () => {
		parser.PutTokensManually('5,7,3-4');

		const result = parser.parseVerses();
		expect(result.t).toEqual([
			{ lower_verse: 5, lower_verse_notation: '', higher_verse: 5, higher_verse_notation: '' },
			{ lower_verse: 7, lower_verse_notation: '', higher_verse: 7, higher_verse_notation: '' },
			{ lower_verse: 3, lower_verse_notation: '', higher_verse: 4, higher_verse_notation: '' },
		]);
	});
	test('5-4', () => {
		parser.PutTokensManually('5-4');

		const result = parser.parseVerses();
		expect(result.t).toBeNull();
	});
	test('5a-6', () => {
		parser.PutTokensManually('5a-6');

		const result = parser.parseVerses();
		expect(result.t).toEqual([
			{ lower_verse: 5, lower_verse_notation: 'a', higher_verse: 6, higher_verse_notation: '' },
		]);
	});
	test('5-6a', () => {
		parser.PutTokensManually('5-6a');

		const result = parser.parseVerses();
		expect(result.t).toEqual([
			{ lower_verse: 5, lower_verse_notation: '', higher_verse: 6, higher_verse_notation: 'a' },
		]);
	});
	test('5aa,6', () => {
		parser.PutTokensManually('5aa,6');

		const result = parser.parseVerses();
		expect(result.t).toBeNull();
	});
});
