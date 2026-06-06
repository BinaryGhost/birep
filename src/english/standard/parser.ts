import { Parser } from '../../internal/parser';
import type { Error, Success } from '../../internal/errors';
import { standard_style } from './lang';
import * as booki from './book-index';
import {
	possible_books,
	possible_ordinal_books,
	type t_book,
	type t_chapter,
	type t_ordinal_book,
	type t_verse,
	type WordedBookNode,
} from '../../internal/books/book-type';
import { isCorrectChapterOfBook, isValidOrdinalBook } from '../../internal/books/book-analysis';

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
		// let current = this.current();
		// if (current === undefined) {
		// 	return { heading: '', possible_fixes: [] };
		// }

		// let next = this.peek();
		// if (next === undefined) {
		// 	return { heading: '', possible_fixes: [] };
		// }

		// if (
		// 	(current.kind === 'num' || this.gathered_ordinal_words.has(current.representation)) &&
		// 	next.kind === 'ident'
		// ) {
		// 	this.parseOrdinalBook();
		// } else if (current.kind === 'num' && next.kind !== 'num') {
		// } else if (current.kind === 'ident') {
		// } else {
		// 	return { heading: '', possible_fixes: [] };
		// }

		// TODO: Handle all cases:
		// ORDINALS => <num> + <identifier>
		// REFERENCE => <num> + <range> | <delimiters> | <eol>
		// BOOK => <identifier>
		// ELSE => error

		return null;
	}

	parseChapterNumber(what_book: t_ordinal_book | t_book): Success<t_chapter | null> {
		let current = this.current();

		// if (current?.kind === 'EOL') {
		// 	return {
		// 		t: null,
		// 		e: {
		// 			heading: 'No chapter',
		// 			possible_fixes: [
		// 				"Please mention any number (except 0) after the book's name",
		// 				'For a book atleast a chapter number has to be given in order to be valid',
		// 			],
		// 		},
		// 	};
		// }

		if (current?.kind !== 'num') {
			return {
				t: null,
				e: {
					heading: 'Invalid Chapter-Number',
					possible_fixes: [
						'A chapter number has to be a number and can not be used as anything else',
						`Do not use '${current?.representation}' at col ${current?.pos} as a number`,
					],
				},
			};
		}

		const num_value = parseInt(current.representation);
		if (isNaN(num_value)) {
			return { t: null, e: { heading: '', possible_fixes: [] } };
		} else if (num_value <= 0) {
			return { t: null, e: { heading: '', possible_fixes: [] } };
		} else if (!isCorrectChapterOfBook(what_book, num_value)) {
			return { t: null, e: { heading: '', possible_fixes: [] } };
		}

		const next = this.peek();
		if (next === undefined || next.kind !== 'range-char') {
			return { t: { lower_end: num_value, higher_end: num_value }, e: null };
		}

		this.consume();
		const next_next = this.peek();
		if (next_next === undefined || next_next.kind === 'num') {
			// Invalid chapter-range declaration
			return { t: null, e: { heading: '', possible_fixes: [] } };
		}

		const next_num_value = parseInt(next_next.representation);
		if (isNaN(next_num_value)) {
			return { t: null, e: { heading: '', possible_fixes: [] } };
		} else if (next_num_value <= 0) {
			return { t: null, e: { heading: '', possible_fixes: [] } };
		} else if (next_num_value < num_value) {
			// For example: Luke 12-2  -> it is in an invalid order
			return { t: null, e: { heading: '', possible_fixes: [] } };
		} else if (!isCorrectChapterOfBook(what_book, next_num_value)) {
			return { t: null, e: { heading: '', possible_fixes: [] } };
		}

		this.consume();
		return { t: { lower_end: num_value, higher_end: next_num_value }, e: null };
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
				ordinal: ordinalness,
			};
		} else if (booki.peter.has(current.representation)) {
			representation = {
				book: possible_ordinal_books.Peter,
				ordinal: ordinalness,
			};
		} else if (booki.timothy.has(current.representation)) {
			representation = {
				book: possible_ordinal_books.Timothy,
				ordinal: ordinalness,
			};
		} else if (booki.thessalonians.has(current.representation)) {
			representation = {
				book: possible_ordinal_books.Thessalonians,
				ordinal: ordinalness,
			};
		} else if (booki.corinthians.has(current.representation)) {
			representation = {
				book: possible_ordinal_books.Corinthians,
				ordinal: ordinalness,
			};
		} else if (booki.chronicles.has(current.representation)) {
			representation = {
				book: possible_ordinal_books.Chronicles,
				ordinal: ordinalness,
			};
		} else if (booki.samuel.has(current.representation)) {
			representation = {
				book: possible_ordinal_books.Samuel,
				ordinal: ordinalness,
			};
		} else if (booki.moses_ord.has(current.representation)) {
			representation = {
				book: possible_ordinal_books.Moses,
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
						ordinal: (current_node as unknown as t_ordinal_book).ordinal,
					},
					e: null,
				};
			} else if (current_node['book']) {
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
			e: { heading: '', possible_fixes: [] },
		};
	}

	parseBook(): Success<t_book | null> {
		const current = this.current();
		if (current === undefined) {
			return { t: null, e: { heading: '', possible_fixes: [] } };
		}

		// TODO: Apocrypha currently unimplemented

		if (booki.acts.has(current.representation)) {
			return { t: { book: possible_books.Acts }, e: null };
		} else if (booki.amos.has(current.representation)) {
			return { t: { book: possible_books.Amos }, e: null };
		} else if (booki.colossians.has(current.representation)) {
			return { t: { book: possible_books.Colossians }, e: null };
		} else if (booki.daniel.has(current.representation)) {
			return { t: { book: possible_books.Daniel }, e: null };
		} else if (booki.deuteronomy.has(current.representation)) {
			return { t: { book: possible_books.Deuteronomy }, e: null };
		} else if (booki.ecclesiastes.has(current.representation)) {
			return { t: { book: possible_books.Ecclesiastes }, e: null };
		} else if (booki.ephesians.has(current.representation)) {
			return { t: { book: possible_books.Ephesians }, e: null };
		} else if (booki.esther.has(current.representation)) {
			return { t: { book: possible_books.Esther }, e: null };
		} else if (booki.exodus.has(current.representation)) {
			return { t: { book: possible_books.Exodus }, e: null };
		} else if (booki.ezra.has(current.representation)) {
			return { t: { book: possible_books.Ezra }, e: null };
		} else if (booki.ezekiel.has(current.representation)) {
			return { t: { book: possible_books.Ezekiel }, e: null };
		} else if (booki.galatians.has(current.representation)) {
			return { t: { book: possible_books.Galatians }, e: null };
		} else if (booki.genesis.has(current.representation)) {
			return { t: { book: possible_books.Genesis }, e: null };
		} else if (booki.habakkuk.has(current.representation)) {
			return { t: { book: possible_books.Habakkuk }, e: null };
		} else if (booki.haggai.has(current.representation)) {
			return { t: { book: possible_books.Haggai }, e: null };
		} else if (booki.hebrews.has(current.representation)) {
			return { t: { book: possible_books.Hebrews }, e: null };
		} else if (booki.hosea.has(current.representation)) {
			return { t: { book: possible_books.Hosea }, e: null };
		} else if (booki.isaiah.has(current.representation)) {
			return { t: { book: possible_books.Isaiah }, e: null };
		} else if (booki.james.has(current.representation)) {
			return { t: { book: possible_books.James }, e: null };
		} else if (booki.jeremiah.has(current.representation)) {
			return { t: { book: possible_books.Jeremiah }, e: null };
		} else if (booki.job.has(current.representation)) {
			return { t: { book: possible_books.Job }, e: null };
		} else if (booki.joel.has(current.representation)) {
			return { t: { book: possible_books.Joel }, e: null };
		} else if (booki.john.has(current.representation)) {
			return { t: { book: possible_books.John }, e: null };
		} else if (booki.joshua.has(current.representation)) {
			return { t: { book: possible_books.Josua }, e: null };
		} else if (booki.jude.has(current.representation)) {
			return { t: { book: possible_books.Jude }, e: null };
		} else if (booki.judges.has(current.representation)) {
			return { t: { book: possible_books.Judges }, e: null };
		} else if (booki.lamentations.has(current.representation)) {
			return { t: { book: possible_books.Lamentations }, e: null };
		} else if (booki.luke.has(current.representation)) {
			return { t: { book: possible_books.Luke }, e: null };
		} else if (booki.leviticus.has(current.representation)) {
			return { t: { book: possible_books.Leviticus }, e: null };
		} else if (booki.malachi.has(current.representation)) {
			return { t: { book: possible_books.Malachi }, e: null };
		} else if (booki.mark.has(current.representation)) {
			return { t: { book: possible_books.Mark }, e: null };
		} else if (booki.matthew.has(current.representation)) {
			return { t: { book: possible_books.Matthew }, e: null };
		} else if (booki.micah.has(current.representation)) {
			return { t: { book: possible_books.Micah }, e: null };
		} else if (booki.nahum.has(current.representation)) {
			return { t: { book: possible_books.Nahum }, e: null };
		} else if (booki.nehemia.has(current.representation)) {
			return { t: { book: possible_books.Nehemia }, e: null };
		} else if (booki.numbers.has(current.representation)) {
			return { t: { book: possible_books.Numbers }, e: null };
		} else if (booki.obadiah.has(current.representation)) {
			return { t: { book: possible_books.Obadiah }, e: null };
		} else if (booki.philemon.has(current.representation)) {
			return { t: { book: possible_books.Philemon }, e: null };
		} else if (booki.philippians.has(current.representation)) {
			return { t: { book: possible_books.Philippians }, e: null };
		} else if (booki.proverbs.has(current.representation)) {
			return { t: { book: possible_books.Proverbs }, e: null };
		} else if (booki.psalms.has(current.representation)) {
			return { t: { book: possible_books.Psalms }, e: null };
		} else if (booki.revelation.has(current.representation)) {
			return { t: { book: possible_books.Revelation }, e: null };
		} else if (booki.romans.has(current.representation)) {
			return { t: { book: possible_books.Romans }, e: null };
		} else if (booki.ruth.has(current.representation)) {
			return { t: { book: possible_books.Ruth }, e: null };
		} else if (booki.titus.has(current.representation)) {
			return { t: { book: possible_books.Titus }, e: null };
		} else if (booki.zechariah.has(current.representation)) {
			return { t: { book: possible_books.Zechariah }, e: null };
		} else if (booki.zephaniah.has(current.representation)) {
			return { t: { book: possible_books.Zephaniah }, e: null };
		} else {
			return { t: null, e: { heading: '', possible_fixes: [] } };
		}
	}

	// TODO: Do your features here in the future
	parseVerses(): Success<t_verse[] | null> {
		let verses_acc: t_verse[] = [];

		while (this.index < this.source_tokens.length) {
			const current = this.current();
			if (!current || current.kind === 'EOL' || current.kind === 'chapter-delimiter') break;

			const current_num = parseInt(current.representation);
			if (isNaN(current_num)) {
				return { t: null, e: { heading: '', possible_fixes: [] } };
			}

			let lower_notation = '';
			const next_token = this.peek();
			if (next_token && next_token.kind === 'ident' && next_token.representation.length === 1) {
				lower_notation = next_token.representation;
				this.consume();
			}

			const next_next_token = this.peek();
			if (next_next_token && next_next_token.kind === 'range-char') {
				this.consume();

				this.consume();
				const range_end = this.current();
				if (!range_end || range_end.kind !== 'num') {
					// invalid range
					return { t: null, e: { heading: '', possible_fixes: [] } };
				}

				const range_end_num = parseInt(range_end.representation);
				if (isNaN(range_end_num)) {
					// invalid range
					return { t: null, e: { heading: '', possible_fixes: [] } };
				} else if (current_num > range_end_num) {
					// invalid range from highest to lowest
					return { t: null, e: { heading: '', possible_fixes: [] } };
				}
				// this.consume();

				let higher_notation = '';
				const range_end_notation = this.peek();
				if (
					range_end_notation &&
					range_end_notation.kind === 'ident' &&
					range_end_notation.representation.length === 1
				) {
					higher_notation = range_end_notation.representation;
					this.consume();
				}

				verses_acc.push({
					lower_verse: current_num,
					lower_verse_notation: lower_notation,
					higher_verse: range_end_num,
					higher_verse_notation: higher_notation,
				});
			} else {
				verses_acc.push({
					lower_verse: current_num,
					lower_verse_notation: lower_notation,
					higher_verse: current_num,
					higher_verse_notation: lower_notation,
				});
			}

			this.consume();

			const separator = this.current();
			if (!separator || separator?.kind === 'EOL' || separator?.kind === 'chapter-delimiter') break;

			if (separator?.kind !== 'verse-seperator') {
				// Either verses or verse-ranges have to end with a verse-seperator!
				return { t: null, e: { heading: '', possible_fixes: [] } };
			}
			this.consume();
		}

		return verses_acc.length === 0
			? { t: null, e: { heading: '', possible_fixes: [] } }
			: { t: verses_acc, e: null };
	}
}
