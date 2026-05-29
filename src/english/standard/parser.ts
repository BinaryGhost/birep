import { Parser } from '../../internal/parser';
import type { Error, Success } from '../../internal/errors';
import type { Token } from '../../internal/lexing';
import { standard_style } from './lang';

// function parseReference() {}
// function parseBook() {}

export class StandardEnglishParser extends Parser {
	private gathered_ordinal_words = new Set<string>(
		...standard_style.allowed_ordinal_words.first,
		...standard_style.allowed_ordinal_words.second,
		...standard_style.allowed_ordinal_words.third,
		...standard_style.allowed_ordinal_words.fourth,
		...standard_style.allowed_ordinal_words.fifth,
	);

	private gathered_ordinal_abbrs = new Set<string>(
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
			// Missmatch -> 1nd | 3
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

		this.consume();
		const next_tok = this.current();

		switch (ordinalness) {
			case 5:
				break;
			case 4:
				break;
			case 3:
				break;
			case 2:
				break;
			case 1:
				break;
			default:
				return { heading: '', possible_fixes: [] };
		}

		return null;
	}
}
