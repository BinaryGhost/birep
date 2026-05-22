import type { Token } from './lexing';

export class Parser {
	private index: number = 0;

	constructor(private source_tokens: Token[]) {}

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
