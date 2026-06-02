import { Parser } from '../../internal/parser';
import type { Error, Success } from '../../internal/errors';
import type { Token } from '../../internal/lexing';
import { standard_style } from './lang';
import * as booki from './book-index';
import * as repr from './representation';
import {
	possible_ordinal_books,
	type t_book,
	type t_ordinal_book,
	type WordedBookNode,
} from '../../internal/book-type';
import { english_standard_ordinals_representation } from './representation';

// function parseReference() {}
// function parseBook() {}

export class StandardEnglishParser extends Parser {
	override gathered_ordinal_words: Set<string> = new Set<string>(
		...standard_style.allowed_ordinal_words.first,
		...standard_style.allowed_ordinal_words.second,
		...standard_style.allowed_ordinal_words.third,
		...standard_style.allowed_ordinal_words.fourth,
		...standard_style.allowed_ordinal_words.fifth,
	);

	override gathered_ordinal_abbrs: Set<string> = new Set<string>(
		...standard_style.allowed_ordinal_abbrs.first,
		...standard_style.allowed_ordinal_abbrs.second,
		...standard_style.allowed_ordinal_abbrs.third,
		...standard_style.allowed_ordinal_abbrs.fourth,
		...standard_style.allowed_ordinal_abbrs.fifth,
	);

	parse(): Error {
		let prev = this.current();
		if (prev === undefined) {
			return { heading: '', possible_fixes: [] };
		}

		this.consume();

		let current = this.current();
		if (current === undefined) {
			return { heading: '', possible_fixes: [] };
		}

		if (
			(prev.kind === 'num' || this.gathered_ordinal_words.has(prev.representation)) &&
			current.kind === 'ident'
		) {
			this.parseOrdinalBook(prev, current);
		} else if (prev.kind === 'num' && current.kind !== 'num') {
		} else if (prev.kind === 'ident') {
		} else {
			return { heading: '', possible_fixes: [] };
		}

		// TODO: Handle all cases:
		// ORDINALS => <num> + <identifier>
		// REFERENCE => <num> + <range> | <delimiters> | <eol>
		// BOOK => <identifier>
		// ELSE => error

		return null;
	}

	parseChapterNumber(): Error {
		let current = this.current();

		if (current?.kind === 'EOL') {
			return {
				heading: 'No chapter',
				possible_fixes: [
					"Please mention any number (except 0) after the book's name",
					'For a book atleast a chapter number has to be given in order to be valid',
				],
			};
		}

		if (current?.kind !== 'num') {
			return {
				heading: 'Invalid Chapter-Number',
				possible_fixes: [
					'A chapter number has to be a number and can not be used as anything else',
					`Do not use '${current?.representation}' at col ${current?.pos} as a number`,
				],
			};
		}
		this.consume();

		current = this.current();
		switch (current?.kind) {
			// e.g -> "Genesis <num>:"
			case 'chapter-verse-seperator':
				break;
			case 'range-char':
				break;
			// e.g -> "Genesis <num>;" | "Genesis <num>"
			case 'EOL':
			case 'book-delimiter':
				break;
			default:
				return {
					heading: 'Invalid Token for chapter-numbers',
					possible_fixes: [
						`It is not possible to use '${current?.representation}' as a chapter numbers`,
						'Use something different, e.g ";" or ":"',
					],
				};
		}

		return null;
	}

	private parse_ordinal_number(prev_tok: Token, curr_tok: Token): Success<number> {
		if (standard_style.allowed_ordinal_words.first.includes(prev_tok.representation)) {
			return { t: 1, e: null };
		} else if (standard_style.allowed_ordinal_words.second.includes(prev_tok.representation)) {
			return { t: 2, e: null };
		} else if (standard_style.allowed_ordinal_words.third.includes(prev_tok.representation)) {
			return { t: 3, e: null };
		} else if (standard_style.allowed_ordinal_words.fourth.includes(prev_tok.representation)) {
			return { t: 4, e: null };
		} else if (standard_style.allowed_ordinal_words.fifth.includes(prev_tok.representation)) {
			return { t: 5, e: null };
		} else if (
			this.gathered_ordinal_words.has(prev_tok.representation) &&
			this.gathered_ordinal_abbrs.has(curr_tok.representation)
		) {
			// case -> First . | Second nd
			return {
				t: 0,
				e: {
					heading: '',
					possible_fixes: [],
				},
			};
		}

		if (prev_tok.kind !== 'num') {
			return {
				t: 0,
				e: {
					heading: '',
					possible_fixes: [],
				},
			};
		}

		let num_value = parseInt(prev_tok.representation);
		if (isNaN(num_value)) {
			return {
				t: 0,
				e: { heading: '', possible_fixes: [] },
			};
		}

		if (
			num_value === 1 &&
			standard_style.allowed_ordinal_abbrs.first.includes(curr_tok.representation)
		) {
			return {
				t: 1,
				e: null,
			};
		} else if (
			num_value === 2 &&
			standard_style.allowed_ordinal_abbrs.second.includes(curr_tok.representation)
		) {
			return {
				t: 2,
				e: null,
			};
		} else if (
			num_value === 3 &&
			standard_style.allowed_ordinal_abbrs.third.includes(curr_tok.representation)
		) {
			return {
				t: 3,
				e: null,
			};
		} else if (
			num_value === 4 &&
			standard_style.allowed_ordinal_abbrs.fourth.includes(curr_tok.representation)
		) {
			return {
				t: 4,
				e: null,
			};
		} else if (
			num_value === 5 &&
			standard_style.allowed_ordinal_abbrs.fifth.includes(curr_tok.representation)
		) {
			return {
				t: 5,
				e: null,
			};
		} else {
			// Missmatch -> 1nd | 3st
			return {
				t: 0,
				e: {
					heading: '',
					possible_fixes: [],
				},
			};
		}
	}

	parseOrdinalBook(prev_tok: Token, curr_tok: Token): Error {
		let result = this.parse_ordinal_number(prev_tok, curr_tok);

		let ordinalness: number;

		if (result.e !== null) {
			return result.e;
		} else {
			ordinalness = result.t;
		}

		// Because of ordinals like 1st -> <num> <identfier>
		if (prev_tok.kind === 'num') {
			this.consume();
		}

		const next_tok = this.current();
		if (next_tok === undefined || next_tok.kind !== 'ident') {
			return { heading: '', possible_fixes: [] };
		}

		// TODO: Apocrypha currently unimplemented

		let representation;
		if (booki.johns_epistles.has(next_tok.representation)) {
			representation = english_standard_ordinals_representation.english({
				book: possible_ordinal_books.John,
				is_apocryphal: false,
				ordinal: ordinalness,
			});
		} else if (booki.peter.has(next_tok.representation)) {
			representation = english_standard_ordinals_representation.english({
				book: possible_ordinal_books.Peter,
				is_apocryphal: false,
				ordinal: ordinalness,
			});
		} else if (booki.timothy.has(next_tok.representation)) {
			representation = english_standard_ordinals_representation.english({
				book: possible_ordinal_books.Timothy,
				is_apocryphal: false,
				ordinal: ordinalness,
			});
		} else if (booki.thessalonians.has(next_tok.representation)) {
			representation = english_standard_ordinals_representation.english({
				book: possible_ordinal_books.Thessalonians,
				is_apocryphal: false,
				ordinal: ordinalness,
			});
		} else if (booki.corinthians.has(next_tok.representation)) {
			representation = english_standard_ordinals_representation.english({
				book: possible_ordinal_books.Corinthians,
				is_apocryphal: false,
				ordinal: ordinalness,
			});
		} else if (booki.chronicles.has(next_tok.representation)) {
			representation = english_standard_ordinals_representation.english({
				book: possible_ordinal_books.Chronicles,
				is_apocryphal: false,
				ordinal: ordinalness,
			});
		} else if (booki.samuel.has(next_tok.representation)) {
			representation = english_standard_ordinals_representation.english({
				book: possible_ordinal_books.Samuel,
				is_apocryphal: false,
				ordinal: ordinalness,
			});
		} else {
			// Missmatch -> 5. Corinthians or Fourth Luke
			// Or unimplemented (apocryphal) books
			return { heading: '', possible_fixes: [] };
		}

		return null;
	}

	override parseWordedBookname(
		ref_trie: WordedBookNode | undefined,
	): Success<t_book | t_ordinal_book> {
		if (!ref_trie) {
			// No trie given
			return {
				t: { book: 0, is_apocryphal: false },
				e: { heading: '', possible_fixes: [] },
			};
		}

		let current_node: WordedBookNode | undefined = ref_trie;

		while (this.index < this.source_tokens.length) {
			const current_word = this.current()?.representation.toLocaleLowerCase();
			if (!current_word) break;

			if (current_node[current_word]) {
				current_node = current_node[current_word] as WordedBookNode;
				this.consume();
			} else if ('_else' in current_node) {
				current_node = current_node['_else'] as WordedBookNode;
				this.consume();
			} else if ('ordinal' in current_node) {
				return {
					t: {
						book: (current_node as unknown as t_ordinal_book).book,
						is_apocryphal: (current_node as unknown as t_ordinal_book).is_apocryphal,
						ordinal: (current_node as unknown as t_ordinal_book).ordinal,
					},
					e: null,
				};
			} else if ('book' in current_node) {
				return {
					t: {
						book: (current_node as unknown as t_book).book,
						is_apocryphal: (current_node as unknown as t_book).is_apocryphal,
					},
					e: null,
				};
			} else {
				// Did not find anything...
				const all_keys = Object.keys(current_node).filter((key) => key.includes('/'));

				let found_it: number | undefined = undefined;
				for (let i = 0; i < all_keys.length; i++) {
					const key = all_keys[i] as string;

					const words = key?.split('/');

					for (let j = 0; j < words?.length; j++) {
						if (words[j] === current_word) {
							found_it = i;
						}
					}
				}

				if (found_it === undefined) {
					// Truly nothing could be found with that word
					return {
						t: { book: 0, is_apocryphal: false },
						e: { heading: '', possible_fixes: [] },
					};
				}

				const found_key = all_keys[found_it];
				if (found_key === undefined) {
					// Idk why it would happen
					return {
						t: { book: 0, is_apocryphal: false },
						e: { heading: '', possible_fixes: [] },
					};
				}

				current_node = current_node[found_key] as WordedBookNode;
			}
		}

		// Did not find anything...
		return {
			t: { book: 0, is_apocryphal: false },
			e: { heading: '', possible_fixes: [] },
		};
	}
}
