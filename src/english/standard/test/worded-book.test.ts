import { describe, expect, test } from 'bun:test';
import { StandardEnglishParser } from '../parser';
import { possible_books, possible_ordinal_books } from '../../../internal/books/book-type';

describe('Test the trie', () => {
	const parser = new StandardEnglishParser();

	test('Recognise book by fullname', () => {
		parser.PutTokensManually('Song of Solomon');
		const result = parser.parseWordedBookname();

		expect(result.e).toBeNull();
		expect(result.t).toEqual({ book: possible_books.Songs_of_Solomon });
	});
	test('Take "_else" key', () => {
		parser.PutTokensManually('Wisdom');

		const result = parser.parseWordedBookname();

		expect(result.e).toBeNull();
		expect(result.t).toEqual({ book: possible_books.Wisdom_Of_Solomon });
	});
	test('Access one-word synonyms', () => {
		parser.PutTokensManually('gospel of mark');

		const result = parser.parseWordedBookname();

		expect(result.e).toBeNull();
		expect(result.t).toEqual({ book: possible_books.Mark });
	});
	test('the first epistle of paul to timothy', () => {
		parser.PutTokensManually('the first epistle of paul to timothy');

		const result = parser.parseWordedBookname();

		expect(result.e).toBeNull();
		expect(result.t).toEqual({ book: possible_ordinal_books.Timothy, ordinal: 1 });
	});
});
