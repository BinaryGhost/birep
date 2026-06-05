import { describe, expect, test } from 'bun:test';
import { StandardEnglishParser } from '../parser';
import { StandardEnglishLexer } from '../lexer';
import { Standard_WordedBookTrie } from '../books-worded';
import { possible_books } from '../../../internal/books/book-type';

describe('Test the trie', () => {
	test('Recognise book by fullname', () => {
		const lexer = new StandardEnglishLexer('Song of Solomon');
		const parser = new StandardEnglishParser(lexer);
		const result = parser.parseWordedBookname(Standard_WordedBookTrie);

		expect(result.e).toBeNull();
		expect(result.t).toEqual({ book: possible_books.Songs_of_Solomon });
	});
	test('Take "_else" key', () => {
		const lexer = new StandardEnglishLexer('Wisdom');

		const parser = new StandardEnglishParser(lexer);
		const result = parser.parseWordedBookname(Standard_WordedBookTrie);

		expect(result.e).toBeNull();
		expect(result.t).toEqual({ book: possible_books.Wisdom_Of_Solomon });
	});
	test('Access one-word synonyms', () => {
		const lexer = new StandardEnglishLexer('gospel of mark');

		const parser = new StandardEnglishParser(lexer);
		const result = parser.parseWordedBookname(Standard_WordedBookTrie);

		expect(result.e).toBeNull();
		expect(result.t).toEqual({ book: possible_books.Mark });
	});
});
