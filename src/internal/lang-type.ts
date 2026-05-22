export interface LanguageOptions {
	allowed_chapter_verse_seperators: string[];
	allowed_verse_seperators: string[];
	allowed_chapter_delimiters: string[];
	allowed_book_delimiters: string[];
	allowed_range_characters: string[];
	allowed_beginning_idents: string[];
	allowed_ending_idents: string[];
	allowed_number_sets: Set<string>;
	allowed_character_sets: Set<string>;
}
