export interface LanguageOptions {
	allowed_ordinal_words: {
		first: string[];
		second: string[];
		third: string[];
		fourth: string[];
		fifth: string[];
	};
	allowed_ordinal_abbrs: {
		first: string[];
		second: string[];
		third: string[];
		fourth: string[];
		fifth: string[];
	};
	allowed_chapter_verse_seperators: string[];
	allowed_verse_seperators: string[];
	allowed_chapter_delimiters: string[];
	allowed_book_delimiters: string[];
	allowed_range_characters: string[];
	allowed_chapter_verse_idents: string[];
	allowed_number_sets: Set<string>;
	allowed_character_sets: Set<string>;
}

export type ordinal_number_mapping = {
	1: string;
	2: string;
	3: string;
	4: string;
	5: string;
	appearance: 'before_book' | 'after_book';
};

// TODO: Use these 2, when working on the output-structure

export function toOrdinalBook_English(num: 1 | 2 | 3 | 4 | 5, bookname: string) {
	return `${num} ${bookname}`;
}

export function toOrdinalBook_Native(
	num: 1 | 2 | 3 | 4 | 5,
	bookname: string,
	ref_ordinal_map: ordinal_number_mapping,
): string {
	if (ref_ordinal_map.appearance === 'before_book') {
		return `${ref_ordinal_map[num]}${bookname}`;
	} else {
		return `${bookname}${ref_ordinal_map[num]} `;
	}
}
