import type { bookset, ordinal_bookset } from './book-type';

//
// Old Testament
export const genesis: bookset = ['GEN'];
export const exodus: bookset = ['EXO'];
export const leviticus: bookset = ['LEV'];
export const numbers: bookset = ['NUM'];
export const deuteronomy: bookset = ['DEU'];
export const josua: bookset = ['JOS'];
export const judges: bookset = ['JDG'];
export const ruth: bookset = ['RUT'];
export const samuel: ordinal_bookset = ['SA'];
export const kings: ordinal_bookset = ['KI'];
export const chronicles: ordinal_bookset = ['CH'];
export const ezra: bookset = ['EZR'];
export const nehemiah: bookset = ['NEH'];
export const esther: bookset = ['EST'];
export const job: bookset = ['JOB'];
export const psalms: bookset = ['PSA'];
export const proverbs: bookset = ['PRO'];
export const ecclesiastes: bookset = ['ECC'];
export const songs_of_solomon: bookset = ['SNG'];
export const isaiah: bookset = ['ISA'];
export const jeremiah: bookset = ['JER'];
export const lamentations: bookset = ['LAM'];
export const ezekiel: bookset = ['EZK'];
export const daniel: bookset = ['DAN'];
export const hosea: bookset = ['HOS'];
export const joel: bookset = ['JOL'];
export const amos: bookset = ['AMO'];
export const obadiah: bookset = ['OBA'];
export const jonah: bookset = ['JON'];
export const micah: bookset = ['MIC'];
export const nahum: bookset = ['NAM'];
export const habakkuk: bookset = ['HAB'];
export const zephaniah: bookset = ['ZEP'];
export const haggai: bookset = ['HAG'];
export const zechariah: bookset = ['ZEC'];
export const malachi: bookset = ['MAL'];

//
// New Testament
export const matthew: bookset = ['MAT'];
export const mark: bookset = ['MRK'];
export const luke: bookset = ['LUK'];
export const john: bookset = ['JHN'];
export const acts: bookset = ['ACT'];
export const romans: bookset = ['ROM'];
export const corinthians: ordinal_bookset = ['CO'];
export const galatians: bookset = ['GAL'];
export const ephesians: bookset = ['EPH'];
export const philippians: bookset = ['PHP'];
export const colossians: bookset = ['COL'];
export const thessalonians: ordinal_bookset = ['TH'];
export const timothy: ordinal_bookset = ['TI'];
export const titus: bookset = ['TIT'];
export const philemon: bookset = ['PHM'];
export const hebrews: bookset = ['HEB'];
export const james: bookset = ['JAM'];
export const peter: ordinal_bookset = ['PE'];
export const john_epistles: ordinal_bookset = ['JN'];
export const jude: bookset = ['JUD'];
export const revelation: bookset = ['REV'];

//
// Apocrypha
export const tobit: bookset = ['TOB'];
export const judith: bookset = ['JDT'];
export const esther_greek: bookset = ['ESG'];
export const wisdom_of_solomon: bookset = ['WIS'];

/**
 * Ecclesiasticus or Jesus son of Sirach
 */
export const sirach: bookset = ['SIR'];

/**
 * 5 chapters in Orthodox Bibles (LJE is separate; 
 * 6 chapters in Catholic Bibles (includes LJE; called 1
Baruch in Syriac Bibles 
 */
export const baruch: bookset = ['BAR'];

/**
 * Sometimes included in Baruch; called "Rest of
Jeremiah" in Ethiopia
 */
export const letter_of_jeremiah: bookset = ['LJE'];

/**
 * Includes the Prayer of Azariah; sometimes included in
Greek Daniel 
 */
export const song_of_the_three_young_men: bookset = ['S3Y']; // TODO: Handle this exceptional case

/**
 * Sometimes included in Greek Daniel
 */
export const susanna: bookset = ['SUS'];

/**
 * Sometimes included in Greek Daniel; called "Rest of
Daniel" in Ethiopia 
 */
export const bel_and_the_dragon: bookset = ['BEL'];

/**
 * For orthodox and catholic bibles
 */
export const maccabees: ordinal_bookset = ['MA'];

// TODO: Handle the distinction between 1 | 2 Esdras and 3 | 4 Esdras
/**
 * 1 esdras (greek -> The 9 chapter book of Greek Ezra in the LXX, called 2
Esdras in Russian Bibles, and called 3 Esdras in the
Vulgate; when Ezra-Nehemiah is one book use EZR
 * 2 esdras (latin -> The 16 chapter book of Latin Esdras called 3 Esdras in
Russian Bibles and called 4 Esdras in the Vulgate; for
the 12 chapter Apocalypse of Ezra use EZA
 */
export const esdras: ordinal_bookset = ['ES'];

/**
 * Sometimes appended to 2 Chronicles, included in
Orthodox Bibles 
 */
export const prayer_of_manasseh: bookset = ['MAN'];

/**
 * An additional Psalm in the Septuagint, appended to
Psalms in Orthodox Bibles 
 */
export const psalm_151: bookset = ['PS2'];

/**
 * Additional Psalms 152-155 found in West Syriac
manuscripts 
 */
export const psalms_152_to_155: bookset = ['PS3'];

/**
 * A book in some editions of the Septuagint; Odes has
different contents in Greek, Russian and Syriac
traditions
 */
export const odes: bookset = ['ODA'];

/**
 * A book in some editions of the Septuagint, but not
printed in modern Bibles 
 */
export const psalms_of_solomon: bookset = ['PSS'];

// TODO: Handle 2 Baruch and 4 Baruch
/**
 * 2 Baruch -> The Apocalypse of Baruch in Syriac Bibles
 * 4 Baruch -> Paralipomenon of Jeremiah, called Rest of the Words of
Baruch in Ethiopia; may include or exclude the Letter
of Jeremiah as chapter 1, used in the Ethiopian Bible 
 */
export const baruch_epistles: ordinal_bookset = ['BA'];

/**
 * Sometimes appended to 2 Baruch; sometimes separate
in Syriac Bibles
 */
export const letter_of_baruch: bookset = ['LBA'];

/**
 * Ancient Hebrew book used in the Ethiopian Bible
 */
export const jubilees: bookset = ['JUB'];

/**
 * Ancient Hebrew book used in the Ethiopian Bible
 */
export const enoch: bookset = ['ENO'];

/**
 * 1 Meqabyan -> Book of Mekabis of Benjamin in the Ethiopian Bible
 * 2 Meqabyan -> Book of Mekabis of Moab in the Ethiopian Bible
 * 3 Meqabyan -> Book of Meqabyan in the Ethiopian Bible
 */
export const meqabyan: ordinal_bookset = ['MQ'];

/**
 * Proverbs part 2: Used in the Ethiopian Bible
 */
export const reproof: bookset = ['REP'];

/**
 * A Latin Vulgate book, found in the Vulgate and some
medieval Catholic translations
 */
export const letter_to_the_laodiceans: bookset = ['LAO'];
