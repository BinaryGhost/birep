import { possible_books, possible_ordinal_books } from './book-type';
import type { t_book, t_ordinal_book } from './book-type';

export type possible_canons =
	| 'protestant'
	| 'catholic'
	| 'orthodox'
	| 'ethiopian'
	| 'manuscriptal'
	| 'not-canon';

type canon = {
	ordinal: t_ordinal_book[];
	not_ordinal: t_book[];
};

export const protestant: canon = {
	not_ordinal: [
		{ book: possible_books.Acts },
		{ book: possible_books.Amos },
		{ book: possible_books.Colossians },
		{ book: possible_books.Daniel },
		{ book: possible_books.Deuteronomy },
		{ book: possible_books.Ecclesiastes },
		{ book: possible_books.Ephesians },
		{ book: possible_books.Esther },
		{ book: possible_books.Exodus },
		{ book: possible_books.Ezekiel },
		{ book: possible_books.Ezra },
		{ book: possible_books.Genesis },
		{ book: possible_books.Galatians },
		{ book: possible_books.Haggai },
		{ book: possible_books.Hebrews },
		{ book: possible_books.Habakkuk },
		{ book: possible_books.Hosea },
		{ book: possible_books.Isaiah },
		{ book: possible_books.James },
		{ book: possible_books.Jeremiah },
		{ book: possible_books.Job },
		{ book: possible_books.Joel },
		{ book: possible_books.John },
		{ book: possible_books.Jonah },
		{ book: possible_books.Josua },
		{ book: possible_books.Jude },
		{ book: possible_books.Judges },
		{ book: possible_books.Lamentations },
		{ book: possible_books.Leviticus },
		{ book: possible_books.Luke },
		{ book: possible_books.Malachi },
		{ book: possible_books.Mark },
		{ book: possible_books.Matthew },
		{ book: possible_books.Micah },
		{ book: possible_books.Nahum },
		{ book: possible_books.Nehemia },
		{ book: possible_books.Numbers },
		{ book: possible_books.Obadiah },
		{ book: possible_books.Philemon },
		{ book: possible_books.Philippians },
		{ book: possible_books.Proverbs },
		{ book: possible_books.Psalms },
		{ book: possible_books.Revelation },
		{ book: possible_books.Romans },
		{ book: possible_books.Ruth },
		{ book: possible_books.Songs_of_Solomon },
		{ book: possible_books.Titus },
		{ book: possible_books.Zechariah },
		{ book: possible_books.Zephaniah },
	],
	ordinal: [
		{ book: possible_ordinal_books.Chronicles, ordinal: 1 },
		{ book: possible_ordinal_books.Chronicles, ordinal: 2 },
		{ book: possible_ordinal_books.Corinthians, ordinal: 1 },
		{ book: possible_ordinal_books.Corinthians, ordinal: 2 },
		{ book: possible_ordinal_books.Kings, ordinal: 1 },
		{ book: possible_ordinal_books.Kings, ordinal: 2 },
		{ book: possible_ordinal_books.Samuel, ordinal: 1 },
		{ book: possible_ordinal_books.Samuel, ordinal: 2 },
		{ book: possible_ordinal_books.John, ordinal: 1 },
		{ book: possible_ordinal_books.John, ordinal: 2 },
		{ book: possible_ordinal_books.John, ordinal: 3 },
		{ book: possible_ordinal_books.Moses, ordinal: 1 },
		{ book: possible_ordinal_books.Moses, ordinal: 2 },
		{ book: possible_ordinal_books.Moses, ordinal: 3 },
		{ book: possible_ordinal_books.Moses, ordinal: 4 },
		{ book: possible_ordinal_books.Moses, ordinal: 5 },
		{ book: possible_ordinal_books.Peter, ordinal: 1 },
		{ book: possible_ordinal_books.Peter, ordinal: 2 },
		{ book: possible_ordinal_books.Thessalonians, ordinal: 1 },
		{ book: possible_ordinal_books.Thessalonians, ordinal: 2 },
		{ book: possible_ordinal_books.Timothy, ordinal: 1 },
		{ book: possible_ordinal_books.Timothy, ordinal: 2 },
	],
};

export const catholic: canon = {
	not_ordinal: [
		...protestant.not_ordinal,
		{ book: possible_books.Tobit },
		{ book: possible_books.Judith },
		{ book: possible_books.Wisdom_Of_Solomon },
		{ book: possible_books.Sirach },
		{ book: possible_books.Baruch },
		{ book: possible_books.Letter_Of_Jeremiah },
		//
		// --- TODO: Idk if i should include them
		{ book: possible_books.Song_Of_The_Three_Young_Men },
		{ book: possible_books.Bel_And_The_Dragon },
		{ book: possible_books.Susanna },
		{ book: possible_books.Esther_Greek },
	],
	ordinal: [
		...protestant.ordinal,
		{ book: possible_ordinal_books.Maccabees, ordinal: 1 },
		{ book: possible_ordinal_books.Maccabees, ordinal: 2 },
		{ book: possible_ordinal_books.Maccabees, ordinal: 3 },
	],
};

export const orthodox: canon = {
	not_ordinal: [
		...catholic.not_ordinal,
		{ book: possible_books.Prayer_Of_Manasseh },
		{ book: possible_books.Psalm_151 },
		{ book: possible_books.Odes },
	],
	ordinal: [
		...catholic.ordinal,
		{ book: possible_ordinal_books.Maccabees, ordinal: 3 },
		{ book: possible_ordinal_books.Maccabees, ordinal: 4 },
		{ book: possible_ordinal_books.Esdras, ordinal: 1 },
		{ book: possible_ordinal_books.Esdras, ordinal: 2 },
		{ book: possible_ordinal_books.Esdras, ordinal: 3 },
		{ book: possible_ordinal_books.Esdras, ordinal: 4 },
	],
};

export const ethiopian: canon = {
	not_ordinal: [
		...orthodox.not_ordinal,
		{ book: possible_books.Reproof },
		{ book: possible_books.Enoch },
		{ book: possible_books.Jubilees },
	],
	ordinal: [
		...orthodox.ordinal,
		{ book: possible_ordinal_books.Meqabyan, ordinal: 1 },
		{ book: possible_ordinal_books.Meqabyan, ordinal: 2 },
		{ book: possible_ordinal_books.Meqabyan, ordinal: 3 },
	],
};

export const manuscriptal: canon = {
	not_ordinal: [
		{ book: possible_books.Psalms_152_To_155 },
		{ book: possible_books.Psalms_Of_Solomon },
		{ book: possible_books.Letter_Of_Baruch },
		{ book: possible_books.Letter_To_The_Laodiceans },
		{ book: possible_books.Song_Of_The_Three_Young_Men },
		{ book: possible_books.Bel_And_The_Dragon },
		{ book: possible_books.Susanna },
		{ book: possible_books.Esther_Greek },
	],
	ordinal: [
		{ book: possible_ordinal_books.Baruch, ordinal: 2 },
		{ book: possible_ordinal_books.Baruch, ordinal: 4 },
	],
};

export const uncanon: canon = {
	not_ordinal: [],
	ordinal: [],
};
