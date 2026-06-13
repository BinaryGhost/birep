import { BaseLexer, type Token } from '../../internal/lexing';

export class StandardEnglishLexer extends BaseLexer {
	override lex(input: string): Token[] {
		let token_list: Token[] = [];
		let i = 0;
		while (i < input.length) {
			const char = input[i] as string;
			if (char === ' ' || char === '\t' || char === '\n' || char === '\r') {
				i++;
				continue;
			} else if (this.lang.allowed_verse_seperators.includes(char)) {
				token_list.push({ kind: 'verse-seperator', representation: char, pos: i });
				i++;
			} else if (this.lang.allowed_chapter_delimiters.includes(char)) {
				token_list.push({ kind: 'chapter-delimiter', representation: char, pos: i });
				i++;
			} else if (this.lang.allowed_range_characters.includes(char)) {
				token_list.push({ kind: 'range-char', representation: char, pos: i });
				i++;
			} else if (this.lang.allowed_book_delimiters.includes(char)) {
				token_list.push({ kind: 'book-delimiter', representation: char, pos: i });
				i++;
			} else if (this.lang.allowed_chapter_verse_seperators.includes(char)) {
				token_list.push({
					kind: 'chapter-verse-seperator',
					representation: char,
					pos: i,
				});
				i++;
			} else if (this.lang.allowed_number_sets.has(char)) {
				let num_str = char;
				let j = i + 1;
				while (j < input.length && this.lang.allowed_number_sets.has(input[j] as string)) {
					num_str += input[j];
					j++;
				}

				token_list.push({ kind: 'num', representation: num_str, pos: i });
				i = j;
			} else if (this.lang.allowed_character_sets.has(char)) {
				let ident_str = char;
				let j = i + 1;
				while (j < input.length && this.lang.allowed_character_sets.has(input[j] as string)) {
					ident_str += input[j];
					j++;
				}

				token_list.push({ kind: 'ident', representation: ident_str, pos: i });
				i = j;
			} else {
				// TODO: Handle Invalid Character Error here
				console.log(`Invalid Character found: "${char}"`);
				return [];
			}
		}

		token_list.push({ kind: 'EOL', representation: '', pos: input.length });
		return token_list;
	}
}
