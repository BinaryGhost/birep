import { describe, expect, test } from 'bun:test';
import { EnglishStandardLexer } from '../lexer';

describe('Testing a bunch of things', () => {
	test('Basic token recognition', () => {
		const lexer = new EnglishStandardLexer('John 12');
		// console.log(lexer.token_list);

		expect(lexer.token_list.length).toBe(3);
		expect(lexer.token_list[0]).toEqual({ kind: 'ident', representation: 'John', pos: 0 });
		expect(lexer.token_list[1]).toEqual({ kind: 'num', representation: '12', pos: 5 });
	});
	test('Point recognised as ident', () => {
		const lexer = new EnglishStandardLexer('John.');

		expect(lexer.token_list[0]).toEqual({ kind: 'ident', representation: 'John.', pos: 0 });
	});
	test('Other character recognition', () => {
		const lexer = new EnglishStandardLexer('John -;');

		expect(lexer.token_list[1]!.kind).toBe('range-char');
		expect(lexer.token_list[2]!.kind).toBe('chapter-delimiter');
	});
});
