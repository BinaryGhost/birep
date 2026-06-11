import { describe, expect, test } from 'bun:test';
import { StandardEnglishParser } from '../parser';
import { StandardEnglishLexer } from '../lexer';
import { possible_ordinal_books } from '../../../internal/books/book-type';
import { standard_style } from '../lang';

describe('Recognise Ordinal Books', () => {
	const lexer = new StandardEnglishLexer(standard_style);

	test('Wrong ordinal-ident', () => {
		const lexed = lexer.lex('1nd John');
		const parser = new StandardEnglishParser(lexed);
		const result = parser.parseOrdinalBook();
		expect(result.t).toBeNull();

		const lexed2 = lexer.lex('5 Corinthians');
		const parser2 = new StandardEnglishParser(lexed2);
		const result2 = parser2.parseOrdinalBook();
		expect(result2.t).toBeNull();
	});
	test('Correct ordinal bookname', () => {
		const lexed = lexer.lex('1st John');
		const parser = new StandardEnglishParser(lexed);

		const result = parser.parseOrdinalBook();
		expect(result.t).toEqual({
			book: possible_ordinal_books.John,
			ordinal: 1,
		});
	});
	test('First st John', () => {
		const lexed = lexer.lex('First st John');
		const parser = new StandardEnglishParser(lexed);

		const result = parser.parseOrdinalBook();
		expect(result.t).toBeNull();
	});
	test('First Samuel', () => {
		const lexed = lexer.lex('First Samuel');
		const parser = new StandardEnglishParser(lexed);

		const result = parser.parseOrdinalBook();
		expect(result.t).toEqual({
			book: possible_ordinal_books.Samuel,
			ordinal: 1,
		});
	});
	test('3. Corinthians', () => {
		const lexed = lexer.lex('3. Corinthians');
		const parser = new StandardEnglishParser(lexed);

		const result = parser.parseOrdinalBook();
		expect(result.t).toBeNull();
	});
	test('2 Peter', () => {
		const lexed = lexer.lex('2 Peter');
		const parser = new StandardEnglishParser(lexed);

		const result = parser.parseOrdinalBook();
		// console.log('result: ', result);
		expect(result.t).toEqual({
			book: possible_ordinal_books.Peter,
			ordinal: 2,
		});
	});
});
