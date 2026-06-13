import { BaseLexer, type Token } from './lexing';
import type { Success } from './errors';
import type { t_reference, WordedBookNode } from './books/book-type';
import type { t_book, t_ordinal_book } from './books/book-type';

export class Parser {
	protected index: number = 0;
	public source_tokens: Token[] = [];
	protected current_book: t_book | t_ordinal_book | undefined;
	protected lexer: BaseLexer | undefined = undefined;

	protected gathered_ordinal_abbrs: Set<string> = new Set([]);
	protected gathered_ordinal_words: Set<string> = new Set([]);
	protected ref_trie: WordedBookNode | undefined = undefined;

	public parse(input: string): Success<t_reference[] | null> {
		const _ = input;
		return { t: [], e: null };
	}

	protected current(): Token | undefined {
		if (this.index >= this.source_tokens.length) {
			return undefined;
		} else {
			return this.source_tokens[this.index];
		}
	}

	protected peek(n: number = 1): Token | undefined {
		if (this.index + n >= this.source_tokens.length) {
			return undefined;
		} else {
			return this.source_tokens[this.index + n];
		}
	}

	protected consume(): void {
		this.index++;
	}

	public PutTokensManually(input: string): void {
		const tokens = this.lexer?.lex(input);
		if (tokens === undefined) {
			console.log('OH NO!');
			return;
		}

		this.source_tokens = tokens;
		// Reset index so subsequent manual parses start from the first token
		this.index = 0;
	}

	public parseWordedBookname(
		case_sensitive: boolean = false,
	): Success<t_book | t_ordinal_book | null> {
		if (!this.ref_trie) {
			// No trie given
			return {
				t: null,
				e: {
					heading: 'No Trie given',
					possible_fixes: [
						'There seems to be a trie missing, ask the developer or create an issue',
					],
				},
			};
		}

		let current_node: WordedBookNode | undefined = this.ref_trie;
		let path: string[] = [];

		while (this.index < this.source_tokens.length) {
			const current_word = case_sensitive
				? this.current()?.representation
				: this.current()?.representation.toLowerCase();
			// console.log('word: ', current_word);

			path.push(current_word ?? '');

			if (!current_word) break;

			if (current_node[current_word]) {
				const child = current_node[current_word] as WordedBookNode;
				// If the child is a terminal (has a numeric `book` or `ordinal`), do not consume
				// here — leave the token for the caller to consume for consistency.
				if ((child['book'] && typeof child['book'] === 'number') || child['ordinal']) {
					current_node = child;
				} else {
					current_node = child;
					this.consume();
				}
			} else {
				const all_keys = Object.keys(current_node).filter((key) => key.includes('/'));

				let found_it: number | undefined = undefined;
				for (let i = 0; i < all_keys.length; i++) {
					const key = all_keys[i] as string;

					const words = key?.split('/');

					for (let j = 0; j < words?.length; j++) {
						if (words[j]?.trim() === current_word) {
							found_it = i;
							break;
						}
					}

					if (found_it !== undefined) break;
				}

				if (found_it !== undefined) {
					const found_key = all_keys[found_it];
					if (found_key === undefined) {
						return {
							t: null,
							e: {
								heading: 'Word not found',
								possible_fixes: [
									`"${current_word}" was not found, please look for valid booknames`,
								],
							},
						};
					}

					const child = current_node[found_key] as WordedBookNode;
					if ((child['book'] && typeof child['book'] === 'number') || child['ordinal']) {
						current_node = child;
					} else {
						current_node = child;
						this.consume();
					}
				} else if (current_node['_else']) {
					current_node = current_node['_else'] as WordedBookNode;
					this.consume();
				} else {
					return {
						t: null,
						e: {
							heading: 'Word not found',
							possible_fixes: [
								`"${current_word}" could not be found, please look for valid booknames`,
							],
						},
					};
				}
			}

			if (
				current_node['ordinal'] &&
				current_node['book'] &&
				typeof current_node['book'] === 'number'
			) {
				return {
					t: {
						book: (current_node as unknown as t_ordinal_book).book,
						ordinal: (current_node as unknown as t_ordinal_book).ordinal,
					},
					e: null,
				};
			} else if (current_node['book'] && typeof current_node['book'] === 'number') {
				return {
					t: {
						book: (current_node as unknown as t_book).book,
					},
					e: null,
				};
			}
		}

		// If the worded-book has ended without resolving it...
		// Like: Wisdom | Wisdom of Solomon

		if (current_node['_else']) {
			const else_node = current_node['_else'] as WordedBookNode;
			if (else_node['ordinal']) {
				return {
					t: {
						book: (else_node as unknown as t_ordinal_book).book,
						ordinal: (else_node as unknown as t_ordinal_book).ordinal,
					},
					e: null,
				};
			} else if (else_node['book']) {
				return {
					t: {
						book: (else_node as unknown as t_book).book,
					},
					e: null,
				};
			}
		}

		return {
			t: null,
			e: {
				heading: 'Invalid Bookname',
				possible_fixes: [`Could not find anything with the term "${[...path].join(' ')}"`],
			},
		};
	}
}
