import { type Lexer, type Token } from '../internal/lexing';
import { language } from './language';

export class EnglishLexer implements Lexer {
	lex(source_text: string): Token[] {
		let tokens: Token[] = [];

		let i = 0;
		while (i < source_text.length) {
			const char = source_text[i] as string;
			if (char === ' ' || char === '\t' || char === '\n' || char === '\r') {
				i++;
				continue;
			} else if (char in language.allowed_verse_seperators) {
				tokens.push({ kind: 'verse-seperator', representation: char, pos: i });
				i++;
			} else if (char in language.allowed_chapter_delimiters) {
				tokens.push({ kind: 'chapter-delimiter', representation: char, pos: i });
				i++;
			} else if (char in language.allowed_range_characters) {
				tokens.push({ kind: 'range-char', representation: char, pos: i });
				i++;
			} else if (char in language.allowed_book_delimiters) {
				tokens.push({ kind: 'book-delimiter', representation: char, pos: i });
				i++;
			} else if (char in language.allowed_chapter_verse_seperators) {
				tokens.push({ kind: 'chapter-verse-seperator', representation: char, pos: i });
				i++;
			} else if (char in language.allowed_number_sets) {
				let num_str = char;
				let j = i + 1;
				while (
					j < source_text.length &&
					(source_text[j] as string) in language.allowed_number_sets
				) {
					num_str += source_text[j];
					j++;
				}

				tokens.push({ kind: 'num', representation: num_str, pos: i });
				i = j;
			} else if (char in language.allowed_character_sets) {
				let ident_str = char;
				let j = i + 1;
				while (
					j < source_text.length &&
					(source_text[j] as string) in language.allowed_character_sets
				) {
					ident_str += source_text[j];
					j++;
				}

				if (language.allowed_beginning_idents.includes(ident_str)) {
					tokens.push({ kind: 'beg-ident', representation: ident_str, pos: i });
				} else if (language.allowed_ending_idents.includes(ident_str)) {
					tokens.push({ kind: 'end-ident', representation: ident_str, pos: i });
				} else {
					tokens.push({ kind: 'ident', representation: ident_str, pos: i });
				}
				i = j;
			} else {
				// TODO: Handle Invalid Character Error here
			}
		}

		tokens.push({ kind: 'EOL', representation: '', pos: source_text.length });

		return tokens;
	}
}
