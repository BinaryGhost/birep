import { describe, expect, test } from 'bun:test';
import { StandardEnglishParser } from '../parser';
import { possible_ordinal_books } from '../../../internal/books/book-type';

describe('Recognise Ordinal Books', () => {
	const parser = new StandardEnglishParser();

	test('Wrong ordinal-ident', () => {
		parser.PutTokensManually('1nd John');
		const result = parser.parseOrdinalBook();
		expect(result.t).toBeNull();

		parser.PutTokensManually('5 Corinthians');
		const result2 = parser.parseOrdinalBook();
		expect(result2.t).toBeNull();
	});
	test('Correct ordinal bookname', () => {
		parser.PutTokensManually('1st John');
		const result = parser.parseOrdinalBook();
		expect(result.t).toEqual({
			book: possible_ordinal_books.John,
			ordinal: 1,
		});
	});
	test('First st John', () => {
		parser.PutTokensManually('First st John');

		const result = parser.parseOrdinalBook();
		expect(result.t).toBeNull();
	});
	test('First Samuel', () => {
		parser.PutTokensManually('First Samuel');

		const result = parser.parseOrdinalBook();
		expect(result.t).toEqual({
			book: possible_ordinal_books.Samuel,
			ordinal: 1,
		});
	});
	test('3. Corinthians', () => {
		parser.PutTokensManually('3. Corinthians');

		const result = parser.parseOrdinalBook();
		expect(result.t).toBeNull();
	});
	test('2 Peter', () => {
		parser.PutTokensManually('2 Peter');

		const result = parser.parseOrdinalBook();
		// console.log('result: ', result);
		expect(result.t).toEqual({
			book: possible_ordinal_books.Peter,
			ordinal: 2,
		});
	});
});
