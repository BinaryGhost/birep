export type index_bookset = Set<string>;

export type index_ordinal_bookset = Set<string>;

export type ordinal_bookset = string[]; // In order to differentate it better
export type bookset = string[];

enum possible_ordinal_books {
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

export type t_ordinal_book = {
	book: possible_ordinal_books;
	ordinal_appearance: 'before_book' | 'after_book';
};

enum possible_books {
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
	Psalm_151,
	Psalms_152_To_155,
	Odes,
	Psalms_Of_Solomon,
	Letter_Of_Baruch,
	Jubilees,
	Enoch,
	Reproof, // Proverbs part 2: Used in the Ethiopian Bible
	Letter_To_The_Laodiceans,
}

export type t_book = {
	book: possible_books;
	is_apocrpyhal: boolean;
};

export class ToOrdinalRepresentation {
	english(num: number, ord: t_ordinal_book): string | undefined {
		switch (ord.book) {
			case possible_ordinal_books.Baruch:
				if (num === 0) {
					return 'Baruch';
				}

				if (num !== 2 && num !== 4) {
					return undefined;
				}

				return `${num} Baruch`;
			case possible_ordinal_books.Esdras:
				if (num !== 1 && num !== 2) {
					return undefined;
				}

				return `${num}ES`;
			case possible_ordinal_books.Chronicles:
				if (num !== 1 && num !== 2) {
					return undefined;
				}

				return `${num} Chronicles`;
			case possible_ordinal_books.Corinthians:
				if (num !== 1 && num !== 2) {
					return undefined;
				}

				return `${num} Corinthians`;
			case possible_ordinal_books.Kings:
				if (num !== 1 && num !== 2) {
					return undefined;
				}

				return `${num} Kings`;
			case possible_ordinal_books.Samuel:
				if (num !== 1 && num !== 2) {
					return undefined;
				}

				return `${num} Samuel`;
			case possible_ordinal_books.John:
				if (num < 1 || num > 3) {
					return undefined;
				}

				return `${num} John`;
			case possible_ordinal_books.Maccabees:
				if (num < 1 || num > 5) {
					return undefined;
				}

				return `${num} Maccabees`;
			case possible_ordinal_books.Meqabyan:
				if (num < 1 || num > 5) {
					return undefined;
				}

				return `${num} Meqabyan`;
			case possible_ordinal_books.Moses:
				if (num === 1) {
					return 'Genesis';
				} else if (num === 2) {
					return 'Exodus';
				} else if (num === 3) {
					return 'Leviticus';
				} else if (num === 4) {
					return 'Numbers';
				} else if (num === 5) {
					return 'Deuteronomy';
				} else {
					return undefined;
				}
			case possible_ordinal_books.Peter:
				if (num !== 1 && num !== 2) {
					return undefined;
				}

				return `${num} Peter`;
			case possible_ordinal_books.Thessalonians:
				if (num !== 1 && num !== 2) {
					return undefined;
				}

				return `${num} Thessalonians`;
			case possible_ordinal_books.Timothy:
				if (num !== 1 && num !== 2) {
					return undefined;
				}

				return `${num} Timothy`;
			default:
				return undefined;
		}
	}

	paratext(num: number, ord: t_ordinal_book): string | undefined {
		switch (ord.book) {
			case possible_ordinal_books.Baruch:
				if (num === 0) {
					return 'BAR';
				}

				if (num !== 2 && num !== 4) {
					return undefined;
				}

				return `${num}BA`;
			case possible_ordinal_books.Esdras:
				if (num !== 1 && num !== 2) {
					return undefined;
				}

				return `${num}ES`;
			case possible_ordinal_books.Chronicles:
				if (num !== 1 && num !== 2) {
					return undefined;
				}

				return `${num}CH`;
			case possible_ordinal_books.Corinthians:
				if (num !== 1 && num !== 2) {
					return undefined;
				}

				return `${num}CO`;
			case possible_ordinal_books.Kings:
				if (num !== 1 && num !== 2) {
					return undefined;
				}

				return `${num}KI`;
			case possible_ordinal_books.Samuel:
				if (num !== 1 && num !== 2) {
					return undefined;
				}

				return `${num}SA`;
			case possible_ordinal_books.John:
				if (num < 1 || num > 3) {
					return undefined;
				}

				return `${num}JN`;
			case possible_ordinal_books.Maccabees:
				if (num < 1 || num > 5) {
					return undefined;
				}

				return `${num}MA`;
			case possible_ordinal_books.Meqabyan:
				if (num < 1 || num > 5) {
					return undefined;
				}

				return `${num}MQ`;
			case possible_ordinal_books.Moses:
				if (num === 1) {
					return 'GEN';
				} else if (num === 2) {
					return 'EXO';
				} else if (num === 3) {
					return 'LEV';
				} else if (num === 4) {
					return 'NUM';
				} else if (num === 5) {
					return 'DEU';
				} else {
					return undefined;
				}
			case possible_ordinal_books.Peter:
				if (num !== 1 && num !== 2) {
					return undefined;
				}

				return `${num}PE`;
			case possible_ordinal_books.Thessalonians:
				if (num !== 1 && num !== 2) {
					return undefined;
				}

				return `${num}TH`;
			case possible_ordinal_books.Timothy:
				if (num !== 1 && num !== 2) {
					return undefined;
				}

				return `${num}TI`;
			default:
				return undefined;
		}
	}

	_native_(num: number, ord: t_ordinal_book): string | undefined {
		return '';
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
		return '';
	}
}
