import { describe, test, expect } from 'bun:test';
import { StandardEnglishParser } from '../parser';
import { StandardEnglishLexer } from '../lexer';

describe('Verse parsing', () => {
	test('2,3;', () => {
		const lexer = new StandardEnglishLexer('2,3;');
		const parser = new StandardEnglishParser(lexer);

		const result = parser.parseVerses();
		expect(result.t).toEqual([
			{ lower_verse: 2, lower_verse_notation: '', higher_verse: 2, higher_verse_notation: '' },
			{ lower_verse: 3, lower_verse_notation: '', higher_verse: 3, higher_verse_notation: '' },
		]);
	});
	test('"2,4,;" (is allowed)', () => {
		const lexer = new StandardEnglishLexer('2,4,;');
		const parser = new StandardEnglishParser(lexer);

		const result = parser.parseVerses();
		expect(result.t).toEqual([
			{ lower_verse: 2, lower_verse_notation: '', higher_verse: 2, higher_verse_notation: '' },
			{ lower_verse: 4, lower_verse_notation: '', higher_verse: 4, higher_verse_notation: '' },
		]);
	});
	test('5,7,3-4', () => {
		const lexer = new StandardEnglishLexer('5,7,3-4');
		const parser = new StandardEnglishParser(lexer);

		const result = parser.parseVerses();
		expect(result.t).toEqual([
			{ lower_verse: 5, lower_verse_notation: '', higher_verse: 5, higher_verse_notation: '' },
			{ lower_verse: 7, lower_verse_notation: '', higher_verse: 7, higher_verse_notation: '' },
			{ lower_verse: 3, lower_verse_notation: '', higher_verse: 4, higher_verse_notation: '' },
		]);
	});
	test('5-4', () => {
		const lexer = new StandardEnglishLexer('5-4');
		const parser = new StandardEnglishParser(lexer);

		const result = parser.parseVerses();
		expect(result.t).toBeNull();
	});
	test('5a-6', () => {
		const lexer = new StandardEnglishLexer('5a-6');
		const parser = new StandardEnglishParser(lexer);

		const result = parser.parseVerses();
		expect(result.t).toEqual([
			{ lower_verse: 5, lower_verse_notation: 'a', higher_verse: 6, higher_verse_notation: '' },
		]);
	});
	test('5-6a', () => {
		const lexer = new StandardEnglishLexer('5-6a');
		const parser = new StandardEnglishParser(lexer);

		const result = parser.parseVerses();
		expect(result.t).toEqual([
			{ lower_verse: 5, lower_verse_notation: '', higher_verse: 6, higher_verse_notation: 'a' },
		]);
	});
	test('5aa,6', () => {
		const lexer = new StandardEnglishLexer('5aa,6');
		const parser = new StandardEnglishParser(lexer);

		const result = parser.parseVerses();
		expect(result.t).toBeNull();
	});
});
