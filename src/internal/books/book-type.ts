export type index_bookset = Set<string>;

export type index_ordinal_bookset = Set<string>;

export type ordinal_bookset = string[]; // In order to differentate it better
export type bookset = string[];

export type t_chapter = {
	lower_end: number;
	higher_end: number;
};

export type t_verse = {
	lower_verse: number;
	lower_verse_notation: string;
	higher_verse: number;
	higher_verse_notation: string;
};

export type t_chapter_verse = {
	chapter: t_chapter;
	verses?: t_verse[];
};

export type t_reference = {
	book: t_book | t_ordinal_book;
	reference: t_chapter_verse;
};

/**
 * Single word synonyms are stored as keys of "synonym/synonym2/synonym3"
 *
 * "_else" can be used as default-value, if all the other
 * conditions failed.
 */
export type WordedBookNode = {
	[word: string | '_else']: WordedBookNode | t_ordinal_book | t_book;
};

export enum possible_ordinal_books {
	Kings,
	Samuel,
	Chronicles,
	Moses,
	Corinthians,
	Thessalonians,
	Timothy,
	Peter,
	John,
	Maccabees,
	Esdras,
	Baruch,
	Meqabyan,
}

export enum possible_books {
	Genesis,
	Exodus,
	Leviticus,
	Numbers,
	Deuteronomy,
	Josua,
	Judges,
	Ruth,
	Ezra,
	Nehemia,
	Esther,
	Job,
	Psalms,
	Proverbs,
	Ecclesiastes,
	Songs_of_Solomon,
	Isaiah,
	Jeremiah,
	Lamentations,
	Ezekiel,
	Daniel,
	Hosea,
	Joel,
	Amos,
	Obadiah,
	Jonah,
	Micah,
	Nahum,
	Habakkuk,
	Zephaniah,
	Haggai,
	Zechariah,
	Malachi,
	Matthew,
	Mark,
	Luke,
	John,
	Acts,
	Romans,
	Galatians,
	Ephesians,
	Philippians,
	Colossians,
	Titus,
	Philemon,
	Hebrews,
	James,
	Jude,
	Revelation,
	Tobit,
	Judith,
	Esther_Greek,
	Wisdom_Of_Solomon,
	Sirach,
	Baruch,
	Letter_Of_Jeremiah,
	Song_Of_The_Three_Young_Men,
	Susanna,
	Bel_And_The_Dragon,
	Prayer_Of_Manasseh,
	Psalm_151, // TODO: You need to handle them some day
	Psalms_152_To_155, // TODO: You need to handle them some day
	Odes,
	Psalms_Of_Solomon,
	Letter_Of_Baruch,
	Jubilees,
	Enoch,
	Reproof, // Proverbs part 2: Used in the Ethiopian Bible
	Letter_To_The_Laodiceans,
}

export type t_ordinal_book = {
	book: possible_ordinal_books;
	ordinal: number;
};

export type t_book = {
	book: possible_books;
};
