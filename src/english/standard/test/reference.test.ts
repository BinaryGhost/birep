import { describe, test, expect } from 'bun:test';
import { StandardEnglishParser } from '../parser';
import { StandardEnglishLexer } from '../lexer';
import { standard_style } from '../lang';
import { reconstructReferenceForTesting } from '../../../internal/books/book-analysis';

describe('Verse parsing', () => {
	const lexer = new StandardEnglishLexer(standard_style);

	test('Matthew 1', () => {
		const lexed = lexer.lex('Matthew 1');
		const parser = new StandardEnglishParser(lexed);
		const result = parser.parse();

		const for_test = reconstructReferenceForTesting(result.t!);

		expect(for_test).toBe('Matthew 1-1;');
	});

	test('Matthew 1:1-2,2,3; 12,1;', () => {
		const lexed = lexer.lex('Matthew 1:1-2,2,3; 12:1;');
		const parser = new StandardEnglishParser(lexed);
		const result = parser.parse();

		const for_test = reconstructReferenceForTesting(result.t!);

		expect(for_test).toBe('Matthew 1-1:1-2,2-2,3-3; Matthew 12-12:1-1;');
	});

	test('the first epistle of paul to timothy 1:1', () => {
		const lexed = lexer.lex('the first epistle of paul to timothy 1:1');
		const parser = new StandardEnglishParser(lexed);
		const result = parser.parse();

		const for_test = reconstructReferenceForTesting(result.t!);

		expect(for_test).toBe('1 Timothy 1-1:1-1;');
	});

	test('Genesis 1-2:1-2', () => {
		const lexed = lexer.lex('Genesis 1-2:1-2');
		const parser = new StandardEnglishParser(lexed);
		const result = parser.parse();

		const for_test = reconstructReferenceForTesting(result.t!);

		expect(for_test).toBe('Genesis 1-2:1-2;');
	});

	test('Hosea 1:1; 2:1; Micah 2:2', () => {
		const lexed = lexer.lex('Hosea 1:1; 2:1; Micah 2:2');
		const parser = new StandardEnglishParser(lexed);
		const result = parser.parse();

		const for_test = reconstructReferenceForTesting(result.t!);

		expect(for_test).toBe('Hosea 1-1:1-1; Hosea 2-2:1-1; Micah 2-2:2-2;');
	});
});
