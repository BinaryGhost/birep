import { describe, expect, test } from 'bun:test';
import { StandardEnglishLexer } from '../lexer';
import { standard_style } from '../lang';

describe('Testing a bunch of things', () => {
	const lexer = new StandardEnglishLexer(standard_style);

	test('Basic token recognition', () => {
		const lexed = lexer.lex('John 12');
		// console.log(lexer.token_list);

		expect(lexed.length).toBe(3);
		expect(lexed[0]).toEqual({ kind: 'ident', representation: 'John', pos: 0 });
		expect(lexed[1]).toEqual({ kind: 'num', representation: '12', pos: 5 });
	});
	test('Point inside ident is included', () => {
		const lexed = lexer.lex('John.');

		expect(lexed[0]).toEqual({ kind: 'ident', representation: 'John.', pos: 0 });
	});
	test('Other character recognition', () => {
		const lexed = lexer.lex('John -;');

		expect(lexed[1]!.kind).toBe('range-char');
		expect(lexed[2]!.kind).toBe('chapter-delimiter');
	});
});
