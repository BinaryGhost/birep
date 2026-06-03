import type { Token } from '../../internal/lexing';
import { BaseLexer } from '../../internal/lexing';
import { standard_style } from './lang';

export class StandardEnglishLexer extends BaseLexer {
	override token_list: Token[] = [];
	constructor(input: string) {
		super();

		let i = 0;
		while (i < input.length) {
			const char = input[i] as string;
			if (char === ' ' || char === '\t' || char === '\n' || char === '\r') {
				i++;
				continue;
			} else if (standard_style.allowed_verse_seperators.includes(char)) {
				this.token_list.push({ kind: 'verse-seperator', representation: char, pos: i });
				i++;
			} else if (standard_style.allowed_chapter_delimiters.includes(char)) {
				this.token_list.push({ kind: 'chapter-delimiter', representation: char, pos: i });
				i++;
			} else if (standard_style.allowed_range_characters.includes(char)) {
				this.token_list.push({ kind: 'range-char', representation: char, pos: i });
				i++;
			} else if (standard_style.allowed_book_delimiters.includes(char)) {
				this.token_list.push({ kind: 'book-delimiter', representation: char, pos: i });
				i++;
			} else if (standard_style.allowed_chapter_verse_seperators.includes(char)) {
				this.token_list.push({
					kind: 'chapter-verse-seperator',
					representation: char,
					pos: i,
				});
				i++;
			} else if (standard_style.allowed_number_sets.has(char)) {
				let num_str = char;
				let j = i + 1;
				while (j < input.length && standard_style.allowed_number_sets.has(input[j] as string)) {
					num_str += input[j];
					j++;
				}

				this.token_list.push({ kind: 'num', representation: num_str, pos: i });
				i = j;
			} else if (standard_style.allowed_character_sets.has(char)) {
				let ident_str = char;
				let j = i + 1;
				while (j < input.length && standard_style.allowed_character_sets.has(input[j] as string)) {
					ident_str += input[j];
					j++;
				}

				this.token_list.push({ kind: 'ident', representation: ident_str, pos: i });
				i = j;
			} else {
				// TODO: Handle Invalid Character Error here
				break;
			}
		}

		this.token_list.push({ kind: 'EOL', representation: '', pos: input.length });
	}
}
