import { BaseLexer, type Token } from './lexing';
import type { StandardForm } from './output-interfaces';

interface parser_essentials {
	current(): Token | undefined;
	peek(): Token | undefined;
	consume(): void;
}

export class Parser implements parser_essentials {
	private index: number = 0;
	private source_tokens: Token[] = [];

	gathered_ordinal_abbrs: Set<string> = new Set([]);
	gathered_ordinal_words: Set<string> = new Set([]);

	public standard_output: StandardForm[] = [];

	constructor(lexer: BaseLexer) {
		if (lexer instanceof BaseLexer) {
			this.source_tokens = lexer.token_list;
		}
	}

	current(): Token | undefined {
		if (this.index > this.source_tokens.length) {
			return undefined;
		} else {
			return this.source_tokens[this.index];
		}
	}

	peek(): Token | undefined {
		if (this.index + 1 > this.source_tokens.length) {
			return undefined;
		} else {
			return this.source_tokens[this.index + 1];
		}
	}

	consume(): void {
		this.index++;
	}
}
