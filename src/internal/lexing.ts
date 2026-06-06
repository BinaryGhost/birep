import type { LanguageOptions } from './lang-type';

export interface Token {
	kind:
		| 'num'
		| 'chapter-verse-seperator'
		| 'verse-seperator'
		| 'chapter-delimiter'
		| 'book-delimiter'
		| 'range-char'
		| 'ident'
		| 'EOL';
	representation: string;
	pos: number;
}

export class BaseLexer {
	lang: LanguageOptions;

	constructor(lang: LanguageOptions) {
		this.lang = lang;
	}

	lex(input: string): Token[] {
		const _ = input;
		return [];
	}
}
