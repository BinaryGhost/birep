import { describe, test, expect } from 'bun:test';
import { StandardEnglishParser } from '../parser';
import { StandardEnglishLexer } from '../lexer';
import { standard_style } from '../lang';
import { reconstructReferenceForTesting } from '../../../internal/books/book-analysis';

const lexer = new StandardEnglishLexer(standard_style);

function TestRef(input: string): string {
	const lexed = lexer.lex(input);
	const parser = new StandardEnglishParser(lexed);
	const result = parser.parse();

	return reconstructReferenceForTesting(result.t!);
}

describe('Verse parsing', () => {
	test('Matthew 1', () => {
		expect(TestRef('Matthew 1')).toBe('Matthew 1-1;');
	});

	test('Matthew 1:1-2,2,3; 12,1;', () => {
		expect(TestRef('Matthew 1:1-2,2,3; 12:1;')).toBe('Matthew 1-1:1-2,2-2,3-3; Matthew 12-12:1-1;');
	});

	test('the first epistle of paul to timothy 1:1', () => {
		expect(TestRef('the first epistle of paul to timothy 1:1')).toBe('1 Timothy 1-1:1-1;');
	});

	test('Genesis 1-2:1-2', () => {
		expect(TestRef('Genesis 1-2:1-2')).toBe('Genesis 1-2:1-2;');
	});

	test('Hosea 1:1; 2:1; Micah 2:2', () => {
		expect(TestRef('Hosea 1:1; 2:1; Micah 2:2')).toBe(
			'Hosea 1-1:1-1; Hosea 2-2:1-1; Micah 2-2:2-2;',
		);
	});
});
