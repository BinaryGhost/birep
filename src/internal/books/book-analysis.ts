import {
	type t_book,
	type t_ordinal_book,
	possible_ordinal_books,
	possible_books,
	type t_reference,
	type IndexBookset,
} from './book-type';
import { protestant } from './canon';

export function isValidOrdinalBook(ord_book: t_ordinal_book): boolean {
	switch (ord_book.book) {
		case possible_ordinal_books.Baruch:
			return ord_book.ordinal === 2 || ord_book.ordinal === 4;
		case possible_ordinal_books.Esdras:
		case possible_ordinal_books.Chronicles:
		case possible_ordinal_books.Corinthians:
		case possible_ordinal_books.Kings:
		case possible_ordinal_books.Samuel:
		case possible_ordinal_books.Peter:
		case possible_ordinal_books.Thessalonians:
		case possible_ordinal_books.Timothy:
			return ord_book.ordinal === 1 || ord_book.ordinal === 2;
		case possible_ordinal_books.John:
			return ord_book.ordinal >= 1 && ord_book.ordinal <= 3;
		case possible_ordinal_books.Maccabees:
		case possible_ordinal_books.Meqabyan:
		case possible_ordinal_books.Moses:
			return ord_book.ordinal >= 1 && ord_book.ordinal <= 5;
		default:
			return false;
	}
}

export function isApocryphal(book: t_book | t_ordinal_book): boolean {
	if ('ordinal' in book) {
		for (let i = 0; i < protestant.ordinal.length; i++) {
			if (
				protestant.ordinal[i]?.book === book.book &&
				protestant.ordinal[i]?.ordinal === book?.ordinal
			) {
				return true;
			}
		}
		return false;
	} else {
		for (let i = 0; i < protestant.ordinal.length; i++) {
			if (protestant.not_ordinal[i]?.book === book.book) {
				return true;
			}
		}
		return false;
	}
}

export function isCorrectChapterOfBook(
	book: t_ordinal_book | t_book,
	chapter_integer: number,
): boolean {
	// TODO: Apocrypha currently not handled
	if ('ordinal' in book) {
		switch (book.book) {
			case possible_ordinal_books.Chronicles:
				if (book.ordinal === 1) {
					return chapter_integer >= 1 && chapter_integer <= 29;
				} else if (book.ordinal === 2) {
					return chapter_integer >= 1 && chapter_integer <= 36;
				} else {
					return false;
				}
			case possible_ordinal_books.Corinthians:
				if (book.ordinal === 1) {
					return chapter_integer >= 1 && chapter_integer <= 16;
				} else if (book.ordinal === 2) {
					return chapter_integer >= 1 && chapter_integer <= 13;
				} else {
					return false;
				}
			case possible_ordinal_books.John:
				if (book.ordinal === 1) {
					return chapter_integer >= 1 && chapter_integer <= 5;
				} else if (book.ordinal === 2) {
					return chapter_integer === 1;
				} else if (book.ordinal === 3) {
					return chapter_integer === 1;
				} else {
					return false;
				}
			case possible_ordinal_books.Kings:
				if (book.ordinal === 1) {
					return chapter_integer >= 1 && chapter_integer <= 22;
				} else if (book.ordinal === 2) {
					return chapter_integer >= 1 && chapter_integer <= 25;
				} else {
					return false;
				}
			case possible_ordinal_books.Moses:
				if (book.ordinal === 1) {
					return chapter_integer >= 1 && chapter_integer <= 50;
				} else if (book.ordinal === 2) {
					return chapter_integer >= 1 && chapter_integer <= 40;
				} else if (book.ordinal === 3) {
					return chapter_integer >= 1 && chapter_integer <= 27;
				} else if (book.ordinal === 4) {
					return chapter_integer >= 1 && chapter_integer <= 36;
				} else if (book.ordinal === 5) {
					return chapter_integer >= 1 && chapter_integer <= 34;
				} else {
					return false;
				}
			case possible_ordinal_books.Peter:
				if (book.ordinal === 1) {
					return chapter_integer >= 1 && chapter_integer <= 5;
				} else if (book.ordinal === 2) {
					return chapter_integer >= 1 && chapter_integer <= 3;
				} else {
					return false;
				}
			case possible_ordinal_books.Samuel:
				if (book.ordinal === 1) {
					return chapter_integer >= 1 && chapter_integer <= 31;
				} else if (book.ordinal === 2) {
					return chapter_integer >= 1 && chapter_integer <= 24;
				} else {
					return false;
				}
			case possible_ordinal_books.Thessalonians:
				if (book.ordinal === 1) {
					return chapter_integer >= 1 && chapter_integer <= 5;
				} else if (book.ordinal === 2) {
					return chapter_integer >= 1 && chapter_integer <= 3;
				} else {
					return false;
				}
			case possible_ordinal_books.Timothy:
				if (book.ordinal === 1) {
					return chapter_integer >= 1 && chapter_integer <= 6;
				} else if (book.ordinal === 2) {
					return chapter_integer >= 1 && chapter_integer <= 4;
				} else {
					return false;
				}
			default:
				return false;
		}
	} else {
		switch (book.book) {
			case possible_books.Acts:
				return chapter_integer >= 1 && chapter_integer <= 28;
			case possible_books.Amos:
				return chapter_integer >= 1 && chapter_integer <= 9;
			case possible_books.Colossians:
				return chapter_integer >= 1 && chapter_integer <= 4;
			case possible_books.Daniel:
				return chapter_integer >= 1 && chapter_integer <= 12;
			case possible_books.Deuteronomy:
				return chapter_integer >= 1 && chapter_integer <= 34;
			case possible_books.Ecclesiastes:
				return chapter_integer >= 1 && chapter_integer <= 12;
			case possible_books.Ephesians:
				return chapter_integer >= 1 && chapter_integer <= 6;
			case possible_books.Esther:
				return chapter_integer >= 1 && chapter_integer <= 10;
			case possible_books.Exodus:
				return chapter_integer >= 1 && chapter_integer <= 40;
			case possible_books.Ezekiel:
				return chapter_integer >= 1 && chapter_integer <= 48;
			case possible_books.Ezra:
				return chapter_integer >= 1 && chapter_integer <= 10;
			case possible_books.Galatians:
				return chapter_integer >= 1 && chapter_integer <= 6;
			case possible_books.Genesis:
				return chapter_integer >= 1 && chapter_integer <= 50;
			case possible_books.Habakkuk:
				return chapter_integer >= 1 && chapter_integer <= 3;
			case possible_books.Haggai:
				return chapter_integer >= 1 && chapter_integer <= 2;
			case possible_books.Hebrews:
				return chapter_integer >= 1 && chapter_integer <= 13;
			case possible_books.Hosea:
				return chapter_integer >= 1 && chapter_integer <= 14;
			case possible_books.Isaiah:
				return chapter_integer >= 1 && chapter_integer <= 66;
			case possible_books.James:
				return chapter_integer >= 1 && chapter_integer <= 5;
			case possible_books.Job:
				return chapter_integer >= 1 && chapter_integer <= 42;
			case possible_books.Joel:
				return chapter_integer >= 1 && chapter_integer <= 3;
			case possible_books.John:
				return chapter_integer >= 1 && chapter_integer <= 21;
			case possible_books.Jeremiah:
				return chapter_integer >= 1 && chapter_integer <= 52;
			case possible_books.Jonah:
				return chapter_integer >= 1 && chapter_integer <= 4;
			case possible_books.Josua:
				return chapter_integer >= 1 && chapter_integer <= 24;
			case possible_books.Jude:
				return chapter_integer === 1;
			case possible_books.Judges:
				return chapter_integer >= 1 && chapter_integer <= 21;
			case possible_books.Lamentations:
				return chapter_integer >= 1 && chapter_integer <= 5;
			case possible_books.Leviticus:
				return chapter_integer >= 1 && chapter_integer <= 27;
			case possible_books.Luke:
				return chapter_integer >= 1 && chapter_integer <= 24;
			case possible_books.Malachi:
				return chapter_integer >= 1 && chapter_integer <= 4;
			case possible_books.Mark:
				return chapter_integer >= 1 && chapter_integer <= 16;
			case possible_books.Matthew:
				return chapter_integer >= 1 && chapter_integer <= 28;
			case possible_books.Micah:
				return chapter_integer >= 1 && chapter_integer <= 7;
			case possible_books.Nahum:
				return chapter_integer >= 1 && chapter_integer <= 3;
			case possible_books.Nehemia:
				return chapter_integer >= 1 && chapter_integer <= 13;
			case possible_books.Numbers:
				return chapter_integer >= 1 && chapter_integer <= 36;
			case possible_books.Obadiah:
				return chapter_integer === 1;
			case possible_books.Philemon:
				return chapter_integer === 1;
			case possible_books.Philippians:
				return chapter_integer >= 1 && chapter_integer <= 4;
			case possible_books.Proverbs:
				return chapter_integer >= 1 && chapter_integer <= 31;
			case possible_books.Psalms:
				return chapter_integer >= 1 && chapter_integer <= 150;
			case possible_books.Revelation:
				return chapter_integer >= 1 && chapter_integer <= 22;
			case possible_books.Romans:
				return chapter_integer >= 1 && chapter_integer <= 16;
			case possible_books.Ruth:
				return chapter_integer >= 1 && chapter_integer <= 4;
			case possible_books.Songs_of_Solomon:
				return chapter_integer >= 1 && chapter_integer <= 8;
			case possible_books.Titus:
				return chapter_integer >= 1 && chapter_integer <= 3;
			case possible_books.Zechariah:
				return chapter_integer >= 1 && chapter_integer <= 14;
			case possible_books.Zephaniah:
				return chapter_integer >= 1 && chapter_integer <= 3;
			default:
				// console.log('IMPOSSIBLE');
				return false;
		}
	}
}

export class ToOrdinalRepresentation {
	english(ord_book: t_ordinal_book): string | undefined {
		switch (ord_book.book) {
			case possible_ordinal_books.Baruch:
				if (ord_book.ordinal === 0) {
					return 'Baruch';
				}

				if (ord_book.ordinal !== 2 && ord_book.ordinal !== 4) {
					return undefined;
				}

				return `${ord_book.ordinal} Baruch`;
			case possible_ordinal_books.Esdras:
				if (ord_book.ordinal >= 1 && ord_book.ordinal <= 4) {
					return undefined;
				}

				return `${ord_book.ordinal}ES`;
			case possible_ordinal_books.Chronicles:
				if (ord_book.ordinal !== 1 && ord_book.ordinal !== 2) {
					return undefined;
				}

				return `${ord_book.ordinal} Chronicles`;
			case possible_ordinal_books.Corinthians:
				if (ord_book.ordinal !== 1 && ord_book.ordinal !== 2) {
					return undefined;
				}

				return `${ord_book.ordinal} Corinthians`;
			case possible_ordinal_books.Kings:
				if (ord_book.ordinal !== 1 && ord_book.ordinal !== 2) {
					return undefined;
				}

				return `${ord_book.ordinal} Kings`;
			case possible_ordinal_books.Samuel:
				if (ord_book.ordinal !== 1 && ord_book.ordinal !== 2) {
					return undefined;
				}

				return `${ord_book.ordinal} Samuel`;
			case possible_ordinal_books.John:
				if (ord_book.ordinal < 1 || ord_book.ordinal > 3) {
					return undefined;
				}

				return `${ord_book.ordinal} John`;
			case possible_ordinal_books.Maccabees:
				if (ord_book.ordinal < 1 || ord_book.ordinal > 5) {
					return undefined;
				}

				return `${ord_book.ordinal} Maccabees`;
			case possible_ordinal_books.Meqabyan:
				if (ord_book.ordinal < 1 || ord_book.ordinal > 5) {
					return undefined;
				}

				return `${ord_book.ordinal} Meqabyan`;
			case possible_ordinal_books.Moses:
				if (ord_book.ordinal === 1) {
					return 'Genesis';
				} else if (ord_book.ordinal === 2) {
					return 'Exodus';
				} else if (ord_book.ordinal === 3) {
					return 'Leviticus';
				} else if (ord_book.ordinal === 4) {
					return 'ord_book.ordinalbers';
				} else if (ord_book.ordinal === 5) {
					return 'Deuteronomy';
				} else {
					return undefined;
				}
			case possible_ordinal_books.Peter:
				if (ord_book.ordinal !== 1 && ord_book.ordinal !== 2) {
					return undefined;
				}

				return `${ord_book.ordinal} Peter`;
			case possible_ordinal_books.Thessalonians:
				if (ord_book.ordinal !== 1 && ord_book.ordinal !== 2) {
					return undefined;
				}

				return `${ord_book.ordinal} Thessalonians`;
			case possible_ordinal_books.Timothy:
				if (ord_book.ordinal !== 1 && ord_book.ordinal !== 2) {
					return undefined;
				}

				return `${ord_book.ordinal} Timothy`;
			default:
				return undefined;
		}
	}

	paratext(ord_book: t_ordinal_book): string | undefined {
		switch (ord_book.book) {
			case possible_ordinal_books.Baruch:
				if (ord_book.ordinal === 0) {
					return 'BAR';
				}

				if (ord_book.ordinal !== 2 && ord_book.ordinal !== 4) {
					return undefined;
				}

				return `${ord_book.ordinal}BA`;
			case possible_ordinal_books.Esdras:
				if (ord_book.ordinal >= 1 && ord_book.ordinal <= 4) {
					return undefined;
				}

				return `${ord_book.ordinal}ES`;
			case possible_ordinal_books.Chronicles:
				if (ord_book.ordinal !== 1 && ord_book.ordinal !== 2) {
					return undefined;
				}

				return `${ord_book.ordinal}CH`;
			case possible_ordinal_books.Corinthians:
				if (ord_book.ordinal !== 1 && ord_book.ordinal !== 2) {
					return undefined;
				}

				return `${ord_book.ordinal}CO`;
			case possible_ordinal_books.Kings:
				if (ord_book.ordinal !== 1 && ord_book.ordinal !== 2) {
					return undefined;
				}

				return `${ord_book.ordinal}KI`;
			case possible_ordinal_books.Samuel:
				if (ord_book.ordinal !== 1 && ord_book.ordinal !== 2) {
					return undefined;
				}

				return `${ord_book.ordinal}SA`;
			case possible_ordinal_books.John:
				if (ord_book.ordinal < 1 || ord_book.ordinal > 3) {
					return undefined;
				}

				return `${ord_book.ordinal}JN`;
			case possible_ordinal_books.Maccabees:
				if (ord_book.ordinal < 1 || ord_book.ordinal > 5) {
					return undefined;
				}

				return `${ord_book.ordinal}MA`;
			case possible_ordinal_books.Meqabyan:
				if (ord_book.ordinal < 1 || ord_book.ordinal > 5) {
					return undefined;
				}

				return `${ord_book.ordinal}MQ`;
			case possible_ordinal_books.Moses:
				if (ord_book.ordinal === 1) {
					return 'GEN';
				} else if (ord_book.ordinal === 2) {
					return 'EXO';
				} else if (ord_book.ordinal === 3) {
					return 'LEV';
				} else if (ord_book.ordinal === 4) {
					return 'ord_book.ordinal';
				} else if (ord_book.ordinal === 5) {
					return 'DEU';
				} else {
					return undefined;
				}
			case possible_ordinal_books.Peter:
				if (ord_book.ordinal !== 1 && ord_book.ordinal !== 2) {
					return undefined;
				}

				return `${ord_book.ordinal}PE`;
			case possible_ordinal_books.Thessalonians:
				if (ord_book.ordinal !== 1 && ord_book.ordinal !== 2) {
					return undefined;
				}

				return `${ord_book.ordinal}TH`;
			case possible_ordinal_books.Timothy:
				if (ord_book.ordinal !== 1 && ord_book.ordinal !== 2) {
					return undefined;
				}

				return `${ord_book.ordinal}TI`;
			default:
				return undefined;
		}
	}

	_native_(ord_book: t_ordinal_book): string | undefined {
		return undefined;
	}
}

export class ToRepresentation {
	// TODO: Handle apocryphal books later
	// TODO: Handle synonyms of books (for the output) later

	english(bk: t_book, psalm_chapter_number?: number): string | undefined {
		switch (bk.book) {
			case possible_books.Acts:
				return 'Acts';
			case possible_books.Amos:
				return 'Amos';
			case possible_books.Baruch:
				return 'Baruch';
			case possible_books.Bel_And_The_Dragon:
				return 'Bel and the Dragon';
			case possible_books.Colossians:
				return 'Colossians';
			case possible_books.Daniel:
				return 'Daniel';
			case possible_books.Deuteronomy:
				return 'Deuteronomy';
			case possible_books.Ecclesiastes:
				return 'Ecclesiates';
			case possible_books.Enoch:
				return 'Enoch';
			case possible_books.Ephesians:
				return 'Ephesians';
			case possible_books.Esther:
				return 'Esther';
			case possible_books.Esther_Greek:
				return 'Esther(greek)';
			case possible_books.Exodus:
				return 'Exodus';
			case possible_books.Ezekiel:
				return 'Ezekiel';
			case possible_books.Ezra:
				return 'Ezra';
			case possible_books.Galatians:
				return 'Galatians';
			case possible_books.Genesis:
				return 'Genesis';
			case possible_books.Habakkuk:
				return 'Habakkuk';
			case possible_books.Haggai:
				return 'Haggai';
			case possible_books.Hebrews:
				return 'Hebrews';
			case possible_books.Hosea:
				return 'Hosea';
			case possible_books.Isaiah:
				return 'Isaiah';
			case possible_books.James:
				return 'James';
			case possible_books.Jeremiah:
				return 'Jeremiah';
			case possible_books.Job:
				return 'Job';
			case possible_books.Joel:
				return 'Joel';
			case possible_books.John:
				return 'John';
			case possible_books.Jonah:
				return 'Jonah';
			case possible_books.Josua:
				return 'Josua';
			case possible_books.Jubilees:
				return 'Jubilees';
			case possible_books.Jude:
				return 'Jude';
			case possible_books.Judges:
				return 'Judges';
			case possible_books.Judith:
				return 'Judith';
			case possible_books.Lamentations:
				return 'Lamentations';
			case possible_books.Letter_Of_Baruch:
				return 'Letter of Baruch';
			case possible_books.Letter_Of_Jeremiah:
				return 'Letter of Jeremiah';
			case possible_books.Letter_To_The_Laodiceans:
				return 'Letter to the Laodiceans';
			case possible_books.Leviticus:
				return 'Levicitcus';
			case possible_books.Luke:
				return 'Luke';
			case possible_books.Malachi:
				return 'Malachi';
			case possible_books.Mark:
				return 'Mark';
			case possible_books.Matthew:
				return 'Matthew';
			case possible_books.Micah:
				return 'Micah';
			case possible_books.Nahum:
				return 'Nahum';
			case possible_books.Nehemia:
				return 'Nehemia';
			case possible_books.Numbers:
				return 'Numbers';
			case possible_books.Obadiah:
				return 'Obadiah';
			case possible_books.Odes:
				return 'Odes';
			case possible_books.Philemon:
				return 'Philemon';
			case possible_books.Philippians:
				return 'Phlippians';
			case possible_books.Prayer_Of_Manasseh:
				return 'Prayer of Manasseh';
			case possible_books.Proverbs:
				return 'Proverbs';
			case possible_books.Psalms:
			case possible_books.Psalm_151:
			case possible_books.Psalms_152_To_155:
				if (
					psalm_chapter_number === undefined ||
					(psalm_chapter_number >= 0 && psalm_chapter_number <= 150)
				) {
					return 'Psalms';
				} else if (psalm_chapter_number === 151) {
					return 'Psalm 151';
				} else if (psalm_chapter_number > 151 && psalm_chapter_number <= 155) {
					return 'Psalm 152-155';
				} else {
					return undefined;
				}
			case possible_books.Psalms_Of_Solomon:
				return 'Psalm of Solomon';
			case possible_books.Reproof: // Proverbs part 2: Used in the Ethiopian Bible
				return 'Reproof';
			case possible_books.Revelation:
				return 'Revelation';
			case possible_books.Romans:
				return 'Romans';
			case possible_books.Ruth:
				return 'Ruth';
			case possible_books.Sirach:
				return 'Sirach';
			case possible_books.Song_Of_The_Three_Young_Men:
				return 'Song of the three young men';
			case possible_books.Songs_of_Solomon:
				return 'Songs of Solomon';
			case possible_books.Susanna:
				return 'Susanna';
			case possible_books.Titus:
				return 'Titus';
			case possible_books.Tobit:
				return 'Tobit';
			case possible_books.Wisdom_Of_Solomon:
				return 'Wisdom';
			case possible_books.Zechariah:
				return 'Zechariah';
			case possible_books.Zephaniah:
				return 'Zephaniah';
			default:
				return undefined;
		}
	}

	paratext(bk: t_book, psalm_chapter_number?: number): string | undefined {
		switch (bk.book) {
			case possible_books.Acts:
				return 'ACT';
			case possible_books.Amos:
				return 'AMO';
			case possible_books.Baruch:
				return 'BAR';
			case possible_books.Bel_And_The_Dragon:
				return 'BEL';
			case possible_books.Colossians:
				return 'COL';
			case possible_books.Daniel:
				return 'DAN';
			case possible_books.Deuteronomy:
				return 'DEU';
			case possible_books.Ecclesiastes:
				return 'ECC';
			case possible_books.Enoch:
				return 'ENO';
			case possible_books.Ephesians:
				return 'EPH';
			case possible_books.Esther:
				return 'EST';
			case possible_books.Esther_Greek:
				return 'ESG';
			case possible_books.Exodus:
				return 'EXO';
			case possible_books.Ezekiel:
				return 'EZK';
			case possible_books.Ezra:
				return 'EZR';
			case possible_books.Galatians:
				return 'GAL';
			case possible_books.Genesis:
				return 'GEN';
			case possible_books.Habakkuk:
				return 'HAB';
			case possible_books.Haggai:
				return 'HAG';
			case possible_books.Hebrews:
				return 'HEB';
			case possible_books.Hosea:
				return 'HOS';
			case possible_books.Isaiah:
				return 'ISA';
			case possible_books.James:
				return 'JAM';
			case possible_books.Jeremiah:
				return 'JER';
			case possible_books.Job:
				return 'JOB';
			case possible_books.Joel:
				return 'JOL';
			case possible_books.John:
				return 'JHN';
			case possible_books.Jonah:
				return 'JON';
			case possible_books.Josua:
				return 'JOS';
			case possible_books.Jubilees:
				return 'JUB';
			case possible_books.Jude:
				return 'JUD';
			case possible_books.Judges:
				return 'JDG';
			case possible_books.Judith:
				return 'JDT';
			case possible_books.Lamentations:
				return 'LAM';
			case possible_books.Letter_Of_Baruch:
				return 'LBA';
			case possible_books.Letter_Of_Jeremiah:
				return 'LJE';
			case possible_books.Letter_To_The_Laodiceans:
				return 'LOA';
			case possible_books.Leviticus:
				return 'LEV';
			case possible_books.Luke:
				return 'LUK';
			case possible_books.Malachi:
				return 'MAL';
			case possible_books.Mark:
				return 'MRK';
			case possible_books.Matthew:
				return 'MAT';
			case possible_books.Micah:
				return 'MIC';
			case possible_books.Nahum:
				return 'NAH';
			case possible_books.Nehemia:
				return 'NEH';
			case possible_books.Numbers:
				return 'NUM';
			case possible_books.Obadiah:
				return 'OBA';
			case possible_books.Odes:
				return 'ODA';
			case possible_books.Philemon:
				return 'PHM';
			case possible_books.Philippians:
				return 'PHP';
			case possible_books.Prayer_Of_Manasseh:
				return 'MAN';
			case possible_books.Proverbs:
				return 'PRO';
			case possible_books.Psalms:
			case possible_books.Psalm_151:
			case possible_books.Psalms_152_To_155:
				if (
					psalm_chapter_number === undefined ||
					(psalm_chapter_number >= 0 && psalm_chapter_number <= 150)
				) {
					return 'PSA';
				} else if (psalm_chapter_number === 151) {
					return 'PS2';
				} else if (psalm_chapter_number > 151 && psalm_chapter_number <= 155) {
					return 'PS3';
				} else {
					return undefined;
				}
			case possible_books.Psalms_Of_Solomon:
				return 'PSS';
			case possible_books.Reproof: // Proverbs part 2: Used in the Ethiopian Bible
				return 'REP';
			case possible_books.Revelation:
				return 'REV';
			case possible_books.Romans:
				return 'ROM';
			case possible_books.Ruth:
				return 'RUT';
			case possible_books.Sirach:
				return 'SIR';
			case possible_books.Song_Of_The_Three_Young_Men:
				return 'S3Y';
			case possible_books.Songs_of_Solomon:
				return 'SNG';
			case possible_books.Susanna:
				return 'SUS';
			case possible_books.Titus:
				return 'TIT';
			case possible_books.Tobit:
				return 'TOB';
			case possible_books.Wisdom_Of_Solomon:
				return 'WIS';
			case possible_books.Zechariah:
				return 'ZEC';
			case possible_books.Zephaniah:
				return 'ZEP';
			default:
				return undefined;
		}
	}

	_native_(bk: t_book, psalm_chapter_number?: number): string | undefined {
		return undefined;
	}
}

export function giveBookName(book: t_book | t_ordinal_book): string {
	if ('ordinal' in book) {
		const booki = new ToOrdinalRepresentation();
		return booki.english(book) ?? '';
	} else {
		const booki = new ToRepresentation();
		return booki.english(book) ?? '';
	}
}

export function reconstructReferenceForTesting(ref: t_reference[]): string {
	if (ref === undefined) {
		return '';
	}

	let all_ref: string = '';
	for (let i = 0; i < ref.length; i++) {
		const rf = ref[i];
		if (rf === undefined) continue;

		if (!ref[i]?.book || ref[i]?.book === undefined) continue;

		const bookname = giveBookName(rf.book);
		const chapter = `${ref[i]?.reference.chapter.lower_end}-${ref[i]?.reference.chapter.higher_end}`;

		if (rf.reference.verses === undefined) {
			all_ref += `${bookname} ${chapter}; `;
			continue;
		}

		let verse: string = '';
		for (let j = 0; j < rf.reference.verses.length; j++) {
			const ver_arr = rf.reference.verses;
			verse += `${ver_arr[j]?.lower_verse}${ver_arr[j]?.lower_verse_notation}-${ver_arr[j]?.higher_verse}${ver_arr[j]?.higher_verse_notation}${j < ver_arr.length - 1 ? ',' : ';'}`;
		}

		all_ref += `${bookname} ${chapter}:${verse} `;
	}
	return all_ref.trim();
}

export function reprToBookType(
	repr: string,
	ref_bookset: IndexBookset,
	ordinality?: number,
): t_book | t_ordinal_book | undefined {
	if (ordinality !== undefined) {
		if (ref_bookset.John_epistles.has(repr)) {
			return {
				book: possible_ordinal_books.John,
				ordinal: ordinality,
			};
		} else if (ref_bookset.Peter.has(repr)) {
			return {
				book: possible_ordinal_books.Peter,
				ordinal: ordinality,
			};
		} else if (ref_bookset.Timothy.has(repr)) {
			return {
				book: possible_ordinal_books.Timothy,
				ordinal: ordinality,
			};
		} else if (ref_bookset.Thessalonians.has(repr)) {
			return {
				book: possible_ordinal_books.Thessalonians,
				ordinal: ordinality,
			};
		} else if (ref_bookset.Corinthians.has(repr)) {
			return {
				book: possible_ordinal_books.Corinthians,
				ordinal: ordinality,
			};
		} else if (ref_bookset.Chronicles.has(repr)) {
			return {
				book: possible_ordinal_books.Chronicles,
				ordinal: ordinality,
			};
		} else if (ref_bookset.Samuel.has(repr)) {
			return {
				book: possible_ordinal_books.Samuel,
				ordinal: ordinality,
			};
		} else if (ref_bookset.Moses_ord.has(repr)) {
			return {
				book: possible_ordinal_books.Moses,
				ordinal: ordinality,
			};
		} else if (ref_bookset.Maccabees.has(repr)) {
			return {
				book: possible_ordinal_books.Maccabees,
				ordinal: ordinality,
			};
		} else if (ref_bookset.Esdras.has(repr)) {
			return {
				book: possible_ordinal_books.Esdras,
				ordinal: ordinality,
			};
		} else if (ref_bookset.Baruch_epistles.has(repr)) {
			return {
				book: possible_ordinal_books.Baruch,
				ordinal: ordinality,
			};
		} else if (ref_bookset.Meqabyan.has(repr)) {
			return {
				book: possible_ordinal_books.Meqabyan,
				ordinal: ordinality,
			};
		} else if (ref_bookset.Moses_ord) {
			return {
				book: possible_ordinal_books.Moses,
				ordinal: ordinality,
			};
		} else {
			return undefined;
		}
	} else {
		if (ref_bookset.Acts.has(repr)) {
			return { book: possible_books.Acts };
		} else if (ref_bookset.Amos.has(repr)) {
			return { book: possible_books.Amos };
		} else if (ref_bookset.Colossians.has(repr)) {
			return { book: possible_books.Colossians };
		} else if (ref_bookset.Daniel.has(repr)) {
			return { book: possible_books.Daniel };
		} else if (ref_bookset.Deuteronomy.has(repr)) {
			return { book: possible_books.Deuteronomy };
		} else if (ref_bookset.Ecclesiastes.has(repr)) {
			return { book: possible_books.Ecclesiastes };
		} else if (ref_bookset.Ephesians.has(repr)) {
			return { book: possible_books.Ephesians };
		} else if (ref_bookset.Esther.has(repr)) {
			return { book: possible_books.Esther };
		} else if (ref_bookset.Exodus.has(repr)) {
			return { book: possible_books.Exodus };
		} else if (ref_bookset.Ezra.has(repr)) {
			return { book: possible_books.Ezra };
		} else if (ref_bookset.Ezekiel.has(repr)) {
			return { book: possible_books.Ezekiel };
		} else if (ref_bookset.Galatians.has(repr)) {
			return { book: possible_books.Galatians };
		} else if (ref_bookset.Genesis.has(repr)) {
			return { book: possible_books.Genesis };
		} else if (ref_bookset.Habakkuk.has(repr)) {
			return { book: possible_books.Habakkuk };
		} else if (ref_bookset.Haggai.has(repr)) {
			return { book: possible_books.Haggai };
		} else if (ref_bookset.Hebrews.has(repr)) {
			return { book: possible_books.Hebrews };
		} else if (ref_bookset.Hosea.has(repr)) {
			return { book: possible_books.Hosea };
		} else if (ref_bookset.Isaiah.has(repr)) {
			return { book: possible_books.Isaiah };
		} else if (ref_bookset.James.has(repr)) {
			return { book: possible_books.James };
		} else if (ref_bookset.Jeremiah.has(repr)) {
			return { book: possible_books.Jeremiah };
		} else if (ref_bookset.Job.has(repr)) {
			return { book: possible_books.Job };
		} else if (ref_bookset.Joel.has(repr)) {
			return { book: possible_books.Joel };
		} else if (ref_bookset.John.has(repr)) {
			return { book: possible_books.John };
		} else if (ref_bookset.Josua.has(repr)) {
			return { book: possible_books.Josua };
		} else if (ref_bookset.Jude.has(repr)) {
			return { book: possible_books.Jude };
		} else if (ref_bookset.Judges.has(repr)) {
			return { book: possible_books.Judges };
		} else if (ref_bookset.Lamentations.has(repr)) {
			return { book: possible_books.Lamentations };
		} else if (ref_bookset.Luke.has(repr)) {
			return { book: possible_books.Luke };
		} else if (ref_bookset.Leviticus.has(repr)) {
			return { book: possible_books.Leviticus };
		} else if (ref_bookset.Malachi.has(repr)) {
			return { book: possible_books.Malachi };
		} else if (ref_bookset.Mark.has(repr)) {
			return { book: possible_books.Mark };
		} else if (ref_bookset.Matthew.has(repr)) {
			return { book: possible_books.Matthew };
		} else if (ref_bookset.Micah.has(repr)) {
			return { book: possible_books.Micah };
		} else if (ref_bookset.Nahum.has(repr)) {
			return { book: possible_books.Nahum };
		} else if (ref_bookset.Nehemia.has(repr)) {
			return { book: possible_books.Nehemia };
		} else if (ref_bookset.Numbers.has(repr)) {
			return { book: possible_books.Numbers };
		} else if (ref_bookset.Obadiah.has(repr)) {
			return { book: possible_books.Obadiah };
		} else if (ref_bookset.Philemon.has(repr)) {
			return { book: possible_books.Philemon };
		} else if (ref_bookset.Philippians.has(repr)) {
			return { book: possible_books.Philippians };
		} else if (ref_bookset.Proverbs.has(repr)) {
			return { book: possible_books.Proverbs };
		} else if (ref_bookset.Psalms.has(repr)) {
			return { book: possible_books.Psalms };
		} else if (ref_bookset.Revelation.has(repr)) {
			return { book: possible_books.Revelation };
		} else if (ref_bookset.Romans.has(repr)) {
			return { book: possible_books.Romans };
		} else if (ref_bookset.Ruth.has(repr)) {
			return { book: possible_books.Ruth };
		} else if (ref_bookset.Titus.has(repr)) {
			return { book: possible_books.Titus };
		} else if (ref_bookset.Zechariah.has(repr)) {
			return { book: possible_books.Zechariah };
		} else if (ref_bookset.Zephaniah.has(repr)) {
			return { book: possible_books.Zephaniah };
		} else if (ref_bookset.Songs_Of_Solomon.has(repr)) {
			return { book: possible_books.Songs_of_Solomon };
		} else if (ref_bookset.Tobit.has(repr)) {
			return { book: possible_books.Tobit };
		} else if (ref_bookset.Judith.has(repr)) {
			return { book: possible_books.Judith };
		} else if (ref_bookset.Esther_Greek.has(repr)) {
			return { book: possible_books.Esther_Greek };
		} else if (ref_bookset.Wisdom_Of_Solomon.has(repr)) {
			return { book: possible_books.Wisdom_Of_Solomon };
		} else if (ref_bookset.Sirach.has(repr)) {
			return { book: possible_books.Sirach };
		} else if (ref_bookset.Baruch.has(repr)) {
			return { book: possible_books.Baruch };
		} else if (ref_bookset.Letter_Of_Jeremiah.has(repr)) {
			return { book: possible_books.Letter_Of_Jeremiah };
		} else if (ref_bookset.Song_Of_The_Three_Young_Men.has(repr)) {
			return { book: possible_books.Song_Of_The_Three_Young_Men };
		} else if (ref_bookset.Susanna.has(repr)) {
			return { book: possible_books.Susanna };
		} else if (ref_bookset.Bel_And_The_Dragon.has(repr)) {
			return { book: possible_books.Bel_And_The_Dragon };
		} else if (ref_bookset.Prayer_Of_Azariah.has(repr)) {
			return { book: possible_books.Prayer_Of_Azariah };
		} else if (ref_bookset.Prayer_Of_Manasseh.has(repr)) {
			return { book: possible_books.Prayer_Of_Manasseh };
		} else if (ref_bookset.Psalm_151.has(repr)) {
			return { book: possible_books.Psalm_151 };
		} else if (ref_bookset.Psalms_152_To_155.has(repr)) {
			return { book: possible_books.Psalms_152_To_155 };
		} else if (ref_bookset.Odes.has(repr)) {
			return { book: possible_books.Odes };
		} else if (ref_bookset.Psalms_Of_Solomon.has(repr)) {
			return { book: possible_books.Psalms_Of_Solomon };
		} else if (ref_bookset.Letter_Of_Baruch.has(repr)) {
			return { book: possible_books.Letter_Of_Baruch };
		} else if (ref_bookset.Letter_To_The_Laodiceans.has(repr)) {
			return { book: possible_books.Letter_To_The_Laodiceans };
		} else {
			return undefined;
		}
	}
}
