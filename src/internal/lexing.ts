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
	token_list: Token[] = [];
}
