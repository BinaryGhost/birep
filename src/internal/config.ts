// TODO: Work on each option some time in the future

export interface ParserConfig {
	locale: string;
	alternatives: {
		verse_seperators: string[];
		chapter_delimiters: string[];
		book_delimiters: string[];
		chapter_verse_seperators: string[];
		range_characters: string[];
	};
	ignore_errors: boolean;
	ignore_non_standard_characters: boolean;
	ignore_not_found_books: boolean;
	enable_roman_numerals_too: boolean;
	ignore_books: string[]; // Full english names
	ignore_apocryphal_books: boolean;
	allow_keyword_idents: boolean; // -> 1. Cortnth. chapter 1 verse 1
	allow_f_ff: boolean; // -> 1st Cor. 1:1f
	allow_leading_zeros: boolean; // -> 1 Cor. 01:01 -> 1 Cor. 1:1
	/**
	 * -> Only allow [1., 2., 3., ...] as ordinals, not [1st, 2nd, 3rd, ...]
	 *
	 * NOTE: Other languages have a different way of writing ordinals
	 */
	strict_ordinals: boolean;
	allow_translation_mentions: boolean; // -> 1 Cor. 1:1 (NIV, ESV, KJV)
	/**
	 * Allow_seperate_translation_mentions and allow_translation_mentions
	 * can not both be set to true !!!
	 */
	allow_seperate_translation_mentions: boolean; // -> 1 Cor. 1:1 (NIV), 1 Cor. 1:1 (ESV, KJV), 1 Cor. 1:1 (KJV)
}

export interface EnglishParserConfig extends ParserConfig {
	only_this_style: 'MLA' | 'SBL' | 'Turibian/Chicago' | 'Standard';
}

export interface OutputConfig {
	discard_notations: boolean; // -> 1 Cor. 1:1-2b -> 1 Cor. 1:1-2
	/**
	 * dense ->
	 * 		Ignore all duplicate verses or chapters for a reference
	 * 		Return the objects in a more densed format, for example:
	 * 			1 Cor. 1:1-2, 1 Cor. 1:2-3 -> 1 Cor. 1:1-3
	 * normal ->
	 * 		Ignore all duplicate verses or chapters for a reference
	 * 		Return the objects in a more normal format, for example:
	 * 			1 Cor. 1:1-2, 1 Cor. 1:2-3 -> 1 Cor. 1:1-2, 1 Cor. 1:2-3
	 * sparse ->
	 * 		Do not ignore any duplicate verses or chapters for a reference:
	 * 		Return each verse indivudually, for example:
	 * 			1 Cor. 1:1-2, 1 Cor. 1:2-3 -> 1 Cor. 1:1, 1 Cor. 1:2, 1 Cor. 1:2, 1 Cor. 1:3
	 */
	fine_grainedness: 'dense' | 'normal' | 'sparse';
}
