import { describe, expect, test } from 'bun:test';
import { StandardEnglishParser } from '../parser';
import { StandardEnglishLexer } from '../lexer';
import { Standard_WordedBookTrie } from '../books-worded';
import { possible_books, possible_ordinal_books } from '../../../internal/books/book-type';
import { standard_style } from '../lang';

describe('Test the trie', () => {
	const lexer = new StandardEnglishLexer(standard_style);
	test('Recognise book by fullname', () => {
		const lexed = lexer.lex('Song of Solomon');
		const parser = new StandardEnglishParser(lexed);
		const result = parser.parseWordedBookname(Standard_WordedBookTrie);

		expect(result.e).toBeNull();
		expect(result.t).toEqual({ book: possible_books.Songs_of_Solomon });
	});
	test('Take "_else" key', () => {
		const lexed = lexer.lex('Wisdom');

		const parser = new StandardEnglishParser(lexed);
		const result = parser.parseWordedBookname(Standard_WordedBookTrie);

		expect(result.e).toBeNull();
		expect(result.t).toEqual({ book: possible_books.Wisdom_Of_Solomon });
	});
	test('Access one-word synonyms', () => {
		const lexed = lexer.lex('gospel of mark');

		const parser = new StandardEnglishParser(lexed);
		const result = parser.parseWordedBookname(Standard_WordedBookTrie);

		expect(result.e).toBeNull();
		expect(result.t).toEqual({ book: possible_books.Mark });
	});
	test('the first epistle of paul to timothy', () => {
		const lexed = lexer.lex('the first epistle of paul to timothy');

		const parser = new StandardEnglishParser(lexed);
		const result = parser.parseWordedBookname(Standard_WordedBookTrie);

		expect(result.e).toBeNull();
		expect(result.t).toEqual({ book: possible_ordinal_books.Timothy, ordinal: 1 });
	});
});
