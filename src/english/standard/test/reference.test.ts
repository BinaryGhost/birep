import { describe, test, expect } from 'bun:test';
import { StandardEnglishParser } from '../parser';
import { StandardEnglishLexer } from '../lexer';
import { standard_style } from '../lang';

describe('Verse parsing', () => {
	const lexer = new StandardEnglishLexer(standard_style);

	// test('Matthew 1', () => {
	// 	const lexed = lexer.lex('Matthew 1');
	// 	const parser = new StandardEnglishParser(lexed);
	// 	const result = parser.parse();
	// 	console.log(result.e);
	// 	expect(result.t).toEqual([]);
	// });

	// test('Matthew 1:1-2,2,3; 12,1;', () => {
	// 	const lexed = lexer.lex('Matthew 1:1-2,2,3; 12,1;');
	// 	const parser = new StandardEnglishParser(lexed);
	// 	const result = parser.parse();
	// 	expect(result.t).toEqual([]);
	// });

	test('the first epistle of paul to timothy 1:1', () => {
		const lexed = lexer.lex('the first epistle of paul to timothy 1:1');
		const parser = new StandardEnglishParser(lexed);
		const result = parser.parse();
		expect(result.t).toEqual([]);
	});

	// // TODO: How shall it look?
	// test('Genesis 1-2:1-2', () => {
	// 	const lexed = lexer.lex('Genesis 1-2:1-2');
	// 	const parser = new StandardEnglishParser(lexed);
	// 	const result = parser.parse();
	// 	expect(result.t).toBeNull();
	// });

	// test('Hosea 1:1; 2:1; Micah 2:2', () => {
	// 	const lexed = lexer.lex('Hosea 1:1; 2:1; Micah 2:2');
	// 	const parser = new StandardEnglishParser(lexed);
	// 	const result = parser.parse();
	// 	expect(result.t).toEqual([]);
	// });
});
