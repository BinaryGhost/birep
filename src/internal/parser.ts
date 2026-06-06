import { type Token } from './lexing';
import type { Success } from './errors';
import type { t_reference, WordedBookNode } from './books/book-type';
import type { t_book, t_ordinal_book } from './books/book-type';

interface parser_essentials {
	current(): Token | undefined;
	peek(): Token | undefined;
	consume(): void;
}

export class Parser implements parser_essentials {
	protected index: number = 0;
	protected source_tokens: Token[] = [];
	protected current_book: t_book | t_ordinal_book | undefined;

	gathered_ordinal_abbrs: Set<string> = new Set([]);
	gathered_ordinal_words: Set<string> = new Set([]);

	constructor(source_tokens: Token[]) {
		this.source_tokens = source_tokens;
	}

	public parse(): Success<t_reference[] | null> {
		return { t: [], e: null };
	}

	current(): Token | undefined {
		if (this.index > this.source_tokens.length) {
			return undefined;
		} else {
			return this.source_tokens[this.index];
		}
	}

	peek(n: number = 1): Token | undefined {
		if (this.index + n > this.source_tokens.length) {
			return undefined;
		} else {
			return this.source_tokens[this.index + n];
		}
	}

	consume(): void {
		this.index++;
	}

	parseWordedBookname(
		ref_trie: WordedBookNode | undefined,
	): Success<t_book | t_ordinal_book | null> {
		const _ = ref_trie;
		return {
			t: { book: 0 },
			e: null,
		};
	}
}
