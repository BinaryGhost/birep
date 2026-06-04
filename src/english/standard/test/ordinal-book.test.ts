import { describe, expect, test } from 'bun:test';
import { StandardEnglishParser } from '../parser';
import { StandardEnglishLexer } from '../lexer';
import { possible_ordinal_books } from '../../../internal/book-type';

describe('Recognise Ordinal Books', () => {
	test('Wrong ordinal-ident', () => {
		const lexer = new StandardEnglishLexer('1nd John');
		const parser = new StandardEnglishParser(lexer);
		const result = parser.parseOrdinalBook();
		expect(result.t).toBeNull();

		const lexer2 = new StandardEnglishLexer('5 Corinthians');
		const parser2 = new StandardEnglishParser(lexer2);
		const result2 = parser2.parseOrdinalBook();
		expect(result2.t).toBeNull();
	});
	test('Correct ordinal bookname', () => {
		const lexer = new StandardEnglishLexer('1st John');
		const parser = new StandardEnglishParser(lexer);

		const result = parser.parseOrdinalBook();
		expect(result.t).toEqual({
			book: possible_ordinal_books.John,
			ordinal: 1,
			is_apocryphal: false,
		});
	});
	test('First st John', () => {
		const lexer = new StandardEnglishLexer('First st John');
		const parser = new StandardEnglishParser(lexer);

		const result = parser.parseOrdinalBook();
		expect(result.t).toBeNull();
	});
	test('First Samuel', () => {
		const lexer = new StandardEnglishLexer('First Samuel');
		const parser = new StandardEnglishParser(lexer);

		const result = parser.parseOrdinalBook();
		expect(result.t).toEqual({
			book: possible_ordinal_books.Samuel,
			ordinal: 1,
			is_apocryphal: false,
		});
	});
	test('3. Corinthians', () => {
		const lexer = new StandardEnglishLexer('3. Corinthians');
		const parser = new StandardEnglishParser(lexer);

		const result = parser.parseOrdinalBook();
		expect(result.t).toBeNull();
	});
	test('2 Peter', () => {
		const lexer = new StandardEnglishLexer('2 Peter');
		const parser = new StandardEnglishParser(lexer);

		const result = parser.parseOrdinalBook();
		expect(result.t).toEqual({
			book: possible_ordinal_books.Peter,
			ordinal: 2,
			is_apocryphal: false,
		});
	});
});
