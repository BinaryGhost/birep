import { Parser } from '../../internal/parser';
import type { Error, Success } from '../../internal/errors';
import { standard_style } from './lang';
import * as booki from './book-index';
import {
	isValidOrdinalBook,
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
		let current = this.current();
		if (current === undefined) {
			return { heading: '', possible_fixes: [] };
		}

		let next = this.peek();
		if (next === undefined) {
			return { heading: '', possible_fixes: [] };
		}

		if (
			(current.kind === 'num' || this.gathered_ordinal_words.has(current.representation)) &&
			next.kind === 'ident'
		) {
			this.parseOrdinalBook();
		} else if (current.kind === 'num' && next.kind !== 'num') {
		} else if (current.kind === 'ident') {
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

	private parse_ordinal_number(): Success<number | null> {
		const current = this.current();
		if (current === undefined) {
			return { t: null, e: { heading: '', possible_fixes: [] } };
		}

		const next = this.peek();
		if (next === undefined) {
			return { t: null, e: { heading: '', possible_fixes: [] } };
		}

		// First | Second ...
		if (standard_style.allowed_ordinal_words.first.includes(current.representation)) {
			this.consume();
			return { t: 1, e: null };
		} else if (standard_style.allowed_ordinal_words.second.includes(current.representation)) {
			this.consume();
			return { t: 2, e: null };
		} else if (standard_style.allowed_ordinal_words.third.includes(current.representation)) {
			this.consume();
			return { t: 3, e: null };
		} else if (standard_style.allowed_ordinal_words.fourth.includes(current.representation)) {
			this.consume();
			return { t: 4, e: null };
		} else if (standard_style.allowed_ordinal_words.fifth.includes(current.representation)) {
			this.consume();
			return { t: 5, e: null };
		} else if (
			this.gathered_ordinal_words.has(current.representation) &&
			this.gathered_ordinal_abbrs.has(next.representation)
		) {
			// case -> First . | Second nd
			return {
				t: null,
				e: {
					heading: '',
					possible_fixes: [],
				},
			};
		}

		// if (next.kind !== 'num') {
		// 	return {
		// 		t: null,
		// 		e: {
		// 			heading: '',
		// 			possible_fixes: [],
		// 		},
		// 	};
		// }

		let num_value = parseInt(current.representation);
		if (isNaN(num_value)) {
			return {
				t: null,
				e: { heading: '', possible_fixes: [] },
			};
		}

		// 1st | 2nd
		if (
			num_value === 1 &&
			standard_style.allowed_ordinal_abbrs.first.includes(next.representation)
		) {
			this.consume();
			this.consume();
			return {
				t: 1,
				e: null,
			};
		} else if (
			num_value === 2 &&
			standard_style.allowed_ordinal_abbrs.second.includes(next.representation)
		) {
			this.consume();
			this.consume();
			return {
				t: 2,
				e: null,
			};
		} else if (
			num_value === 3 &&
			standard_style.allowed_ordinal_abbrs.third.includes(next.representation)
		) {
			this.consume();
			this.consume();
			return {
				t: 3,
				e: null,
			};
		} else if (
			num_value === 4 &&
			standard_style.allowed_ordinal_abbrs.fourth.includes(next.representation)
		) {
			this.consume();
			this.consume();
			return {
				t: 4,
				e: null,
			};
		} else if (
			num_value === 5 &&
			standard_style.allowed_ordinal_abbrs.fifth.includes(next.representation)
		) {
			this.consume();
			this.consume();
			return {
				t: 5,
				e: null,
			};
		} else {
			// Missmatch -> 1nd | 3st
			this.consume();
			return {
				t: num_value,
				e: null,
			};
		}
	}

	parseOrdinalBook(): Success<t_ordinal_book | null> {
		let ordinalness: number;
		let result = this.parse_ordinal_number();

		if (result.t === null) {
			return { t: null, e: result.e };
		} else {
			ordinalness = result.t;
		}

		const current = this.current();

		if (current === undefined || current.kind !== 'ident') {
			return { t: null, e: { heading: '', possible_fixes: [] } };
		}

		// TODO: Apocrypha currently unimplemented

		let representation: t_ordinal_book | undefined;
		if (booki.johns_epistles.has(current.representation)) {
			representation = {
				book: possible_ordinal_books.John,
				is_apocryphal: false,
				ordinal: ordinalness,
			};
		} else if (booki.peter.has(current.representation)) {
			representation = {
				book: possible_ordinal_books.Peter,
				is_apocryphal: false,
				ordinal: ordinalness,
			};
		} else if (booki.timothy.has(current.representation)) {
			representation = {
				book: possible_ordinal_books.Timothy,
				is_apocryphal: false,
				ordinal: ordinalness,
			};
		} else if (booki.thessalonians.has(current.representation)) {
			representation = {
				book: possible_ordinal_books.Thessalonians,
				is_apocryphal: false,
				ordinal: ordinalness,
			};
		} else if (booki.corinthians.has(current.representation)) {
			representation = {
				book: possible_ordinal_books.Corinthians,
				is_apocryphal: false,
				ordinal: ordinalness,
			};
		} else if (booki.chronicles.has(current.representation)) {
			representation = {
				book: possible_ordinal_books.Chronicles,
				is_apocryphal: false,
				ordinal: ordinalness,
			};
		} else if (booki.samuel.has(current.representation)) {
			representation = {
				book: possible_ordinal_books.Samuel,
				is_apocryphal: false,
				ordinal: ordinalness,
			};
		} else {
			// Missmatch -> 5. Corinthians or Fourth Luke
			// Or unimplemented (apocryphal) books
			// Or 1 nd
			return { t: null, e: { heading: '', possible_fixes: [] } };
		}

		if (representation === undefined) {
			return { t: null, e: { heading: '', possible_fixes: [] } };
		} else if (!isValidOrdinalBook(representation)) {
			return { t: null, e: { heading: '', possible_fixes: [] } };
		} else {
			return { t: representation, e: null };
		}
	}

	override parseWordedBookname(
		ref_trie: WordedBookNode | undefined,
	): Success<t_book | t_ordinal_book | null> {
		if (!ref_trie) {
			// No trie given
			return {
				t: null,
				e: { heading: '', possible_fixes: [] },
			};
		}

		let current_node: WordedBookNode | undefined = ref_trie;

		while (this.index < this.source_tokens.length) {
			const current_word = this.current()?.representation.toLowerCase();
			if (!current_word) break;

			if (current_node[current_word]) {
				current_node = current_node[current_word] as WordedBookNode;
				this.consume();
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
							e: { heading: '', possible_fixes: [] },
						};
					}

					current_node = current_node[found_key] as WordedBookNode;
					this.consume();
				} else if (current_node['_else']) {
					current_node = current_node['_else'] as WordedBookNode;
					this.consume();
				} else {
					return {
						t: null,
						e: { heading: '', possible_fixes: [] },
					};
				}
			}

			if (current_node['ordinal']) {
				return {
					t: {
						book: (current_node as unknown as t_ordinal_book).book,
						is_apocryphal: (current_node as unknown as t_ordinal_book).is_apocryphal,
						ordinal: (current_node as unknown as t_ordinal_book).ordinal,
					},
					e: null,
				};
			} else if (current_node['book']) {
				return {
					t: {
						book: (current_node as unknown as t_book).book,
						is_apocryphal: (current_node as unknown as t_book).is_apocryphal,
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
						is_apocryphal: (else_node as unknown as t_ordinal_book).is_apocryphal,
						ordinal: (else_node as unknown as t_ordinal_book).ordinal,
					},
					e: null,
				};
			} else if (else_node['book']) {
				return {
					t: {
						book: (else_node as unknown as t_book).book,
						is_apocryphal: (else_node as unknown as t_book).is_apocryphal,
					},
					e: null,
				};
			}
		}

		return {
			t: null,
			e: { heading: '', possible_fixes: [] },
		};
	}
}
