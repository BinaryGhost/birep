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
	Prayer_Of_Azariah,
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

export interface Bookset {
	Genesis: bookset;
	Exodus: bookset;
	Leviticus: bookset;
	Numbers: bookset;
	Deuteronomy: bookset;
	Josua: bookset;
	Judges: bookset;
	Ruth: bookset;
	Ezra: bookset;
	Nehemia: bookset;
	Esther: bookset;
	Job: bookset;
	Psalms: bookset;
	Proverbs: bookset;
	Ecclesiastes: bookset;
	Songs_Of_Solomon: bookset;
	Isaiah: bookset;
	Jeremiah: bookset;
	Lamentations: bookset;
	Ezekiel: bookset;
	Daniel: bookset;
	Hosea: bookset;
	Joel: bookset;
	Amos: bookset;
	Obadiah: bookset;
	Jonah: bookset;
	Micah: bookset;
	Nahum: bookset;
	Habakkuk: bookset;
	Zephaniah: bookset;
	Haggai: bookset;
	Zechariah: bookset;
	Malachi: bookset;
	Matthew: bookset;
	Mark: bookset;
	Luke: bookset;
	John: bookset;
	Acts: bookset;
	Romans: bookset;
	Galatians: bookset;
	Ephesians: bookset;
	Philippians: bookset;
	Colossians: bookset;
	Titus: bookset;
	Philemon: bookset;
	Hebrews: bookset;
	James: bookset;
	Jude: bookset;
	Revelation: bookset;
	Tobit: bookset;
	Judith: bookset;
	Esther_Greek: bookset;
	Wisdom_Of_Solomon: bookset;
	Sirach: bookset;
	Baruch: bookset;
	Letter_Of_Jeremiah: bookset;
	Song_Of_The_Three_Young_Men: bookset;
	Susanna: bookset;
	Bel_And_The_Dragon: bookset;
	Prayer_Of_Manasseh: bookset;
	Prayer_Of_Azariah: bookset;
	Psalm_151: bookset;
	Psalms_152_To_155: bookset;
	Odes: bookset;
	Psalms_Of_Solomon: bookset;
	Letter_Of_Baruch: bookset;
	Jubilees: bookset;
	Enoch: bookset;
	Reproof: bookset; // Proverbs part 2: Used in the Ethiopian Bible
	Letter_To_The_Laodiceans: bookset;
	//
	Kings: ordinal_bookset;
	Samuel: ordinal_bookset;
	Chronicles: ordinal_bookset;
	Corinthians: ordinal_bookset;
	Thessalonians: ordinal_bookset;
	Timothy: ordinal_bookset;
	Peter: ordinal_bookset;
	John_epistles: ordinal_bookset;
	Maccabees: ordinal_bookset;
	Esdras: ordinal_bookset;
	Baruch_epistles: ordinal_bookset;
	Meqabyan: ordinal_bookset;
	Moses_ord: ordinal_bookset;
}

export interface IndexBookset {
	Genesis: index_bookset;
	Exodus: index_bookset;
	Leviticus: index_bookset;
	Numbers: index_bookset;
	Deuteronomy: index_bookset;
	Josua: index_bookset;
	Judges: index_bookset;
	Ruth: index_bookset;
	Ezra: index_bookset;
	Nehemia: index_bookset;
	Esther: index_bookset;
	Job: index_bookset;
	Psalms: index_bookset;
	Proverbs: index_bookset;
	Ecclesiastes: index_bookset;
	Songs_Of_Solomon: index_bookset;
	Isaiah: index_bookset;
	Jeremiah: index_bookset;
	Lamentations: index_bookset;
	Ezekiel: index_bookset;
	Daniel: index_bookset;
	Hosea: index_bookset;
	Joel: index_bookset;
	Amos: index_bookset;
	Obadiah: index_bookset;
	Jonah: index_bookset;
	Micah: index_bookset;
	Nahum: index_bookset;
	Habakkuk: index_bookset;
	Zephaniah: index_bookset;
	Haggai: index_bookset;
	Zechariah: index_bookset;
	Malachi: index_bookset;
	Matthew: index_bookset;
	Mark: index_bookset;
	Luke: index_bookset;
	John: index_bookset;
	Acts: index_bookset;
	Romans: index_bookset;
	Galatians: index_bookset;
	Ephesians: index_bookset;
	Philippians: index_bookset;
	Colossians: index_bookset;
	Titus: index_bookset;
	Philemon: index_bookset;
	Hebrews: index_bookset;
	James: index_bookset;
	Jude: index_bookset;
	Revelation: index_bookset;
	Tobit: index_bookset;
	Judith: index_bookset;
	Esther_Greek: index_bookset;
	Wisdom_Of_Solomon: index_bookset;

	/**
	 * Ecclesiasticus or Jesus son of Sirach
	 */
	Sirach: index_bookset;

	/**
	 * 5 chapters in Orthodox Bibles (LJE is separate;
	 * 6 chapters in Catholic Bibles (includes LJE; called 1 Baruch in Syriac Bibles
	 */
	Baruch: index_bookset;

	/**
	 * Sometimes included in Baruch; called "Rest of Jeremiah" in Ethiopia
	 */
	Letter_Of_Jeremiah: index_bookset;

	/**
	 * Includes the Prayer of Azariah; sometimes included in Greek Daniel
	 */
	Song_Of_The_Three_Young_Men: index_bookset;

	/**
	 * Sometimes included in Greek Daniel
	 */
	Susanna: index_bookset;

	/**
	 * Sometimes included in Greek Daniel; called "Rest of Daniel" in Ethiopia
	 */
	Bel_And_The_Dragon: index_bookset;

	/**
	 * Sometimes appended to 2 Chronicles, included in Orthodox Bibles
	 */
	Prayer_Of_Manasseh: index_bookset;
	Prayer_Of_Azariah: index_bookset;

	/**
	 * An additional Psalm in the Septuagint, appended to Psalms in Orthodox Bibles
	 */
	Psalm_151: index_bookset;
	Psalms_152_To_155: index_bookset;
	Odes: index_bookset;
	Psalms_Of_Solomon: index_bookset;
	Letter_Of_Baruch: index_bookset;
	Jubilees: index_bookset;
	Enoch: index_bookset;
	Reproof: index_bookset; // Proverbs part 2: Used in the Ethiopian Bible

	/**
	 * A Latin Vulgate book, found in the Vulgate and some medieval Catholic translations
	 */
	Letter_To_The_Laodiceans: index_bookset;
	//
	//
	Kings: index_ordinal_bookset;
	Samuel: index_ordinal_bookset;
	Chronicles: index_ordinal_bookset;
	Corinthians: index_ordinal_bookset;
	Thessalonians: index_ordinal_bookset;
	Timothy: index_ordinal_bookset;
	Peter: index_ordinal_bookset;
	John_epistles: index_ordinal_bookset;

	/**
	 * For orthodox and catholic bibles
	 */
	Maccabees: index_ordinal_bookset;

	/**
	 * 1 esdras (greek) -> The 9 chapter book of Greek Ezra in the LXX, called 2 Esdras in Russian Bibles, and called 3 Esdras in the Vulgate; when Ezra-Nehemiah is one book use EZR
	 * 2 esdras (latin) -> The 16 chapter book of Latin Esdras called 3 Esdras in Russian Bibles and called 4 Esdras in the Vulgate; for the 12 chapter Apocalypse of Ezra use EZA
	 */
	Esdras: index_ordinal_bookset;
	Baruch_epistles: index_ordinal_bookset;
	Meqabyan: index_ordinal_bookset;
	Moses_ord: index_ordinal_bookset;
}
