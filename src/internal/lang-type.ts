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
