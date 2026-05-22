export interface Token {
	kind:
		| 'num'
		| 'chapter-verse-seperator'
		| 'verse-seperator'
		| 'chapter-delimiter'
		| 'book-delimiter'
		| 'range-char'
		| 'beg-ident'
		| 'end-ident'
		| 'ident'
		| 'EOL';
	representation: string;
	pos: number;
}

export interface Lexer {
	lex(source_text: string): Token[];
}
