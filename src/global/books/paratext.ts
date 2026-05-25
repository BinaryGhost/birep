import type { bookset } from '../../internal/book-type';

//
// Old Testament
export const genesis: bookset = new Set<string>(['GEN']);
export const exodus: bookset = new Set<string>(['EXO']);
export const leviticus: bookset = new Set<string>(['LEV']);
export const numbers: bookset = new Set<string>(['NUM']);
export const deuteronomy: bookset = new Set<string>(['DEU']);
export const josua: bookset = new Set<string>(['JOS']);
export const judges: bookset = new Set<string>(['JDG']);
export const ruth: bookset = new Set<string>(['RUT']);
export const samuel_bookname: bookset = new Set<string>(['SA']); // TODO: Handle 1. Samuel and 2. Samuel
export const kings_bookname: bookset = new Set<string>(['KI']); // TODO: Handle 1. Kings and 2. Kings
export const chronicles_bookname: bookset = new Set<string>(['CH']); // TODO: Handle 1. Chronicles and 2. Chronicles
export const ezra: bookset = new Set<string>(['EZR']);
export const nehemiah: bookset = new Set<string>(['NEH']);
export const esther: bookset = new Set<string>(['EST']);
export const job: bookset = new Set<string>(['JOB']);
export const psalms: bookset = new Set<string>(['PSA']);
export const proverbs: bookset = new Set<string>(['PRO']);
export const ecclesiastes: bookset = new Set<string>(['ECC']);
export const songs_of_solomon: bookset = new Set<string>(['SNG']);
export const isaiah: bookset = new Set<string>(['ISA']);
export const jeremiah: bookset = new Set<string>(['JER']);
export const lamentations: bookset = new Set<string>(['LAM']);
export const ezekiel: bookset = new Set<string>(['EZK']);
export const daniel: bookset = new Set<string>(['DAN']);
export const hosea: bookset = new Set<string>(['HOS']);
export const joel: bookset = new Set<string>(['JOL']);
export const amos: bookset = new Set<string>(['AMO']);
export const obadiah: bookset = new Set<string>(['OBA']);
export const jonah: bookset = new Set<string>(['JON']);
export const micah: bookset = new Set<string>(['MIC']);
export const nahum: bookset = new Set<string>(['NAM']);
export const habakkuk: bookset = new Set<string>(['HAB']);
export const zephaniah: bookset = new Set<string>(['ZEP']);
export const haggai: bookset = new Set<string>(['HAG']);
export const zechariah: bookset = new Set<string>(['ZEC']);
export const malachi: bookset = new Set<string>(['MAL']);

//
// New Testament
export const matthew: bookset = new Set<string>(['MAT']);
export const mark: bookset = new Set<string>(['MRK']);
export const luke: bookset = new Set<string>(['LUK']);
export const john: bookset = new Set<string>(['JHN']);
export const acts: bookset = new Set<string>(['ACT']);
export const romans: bookset = new Set<string>(['ROM']);
export const corinthians_bookname: bookset = new Set<string>(['CO']); // TODO: Handle 1. Corinthians and 2. Corinthians
export const galatians: bookset = new Set<string>(['GAL']);
export const ephesians: bookset = new Set<string>(['EPH']);
export const philippians: bookset = new Set<string>(['PHP']);
export const colossians: bookset = new Set<string>(['COL']);
export const thessalonians_bookname: bookset = new Set<string>(['TH']); // TODO: Handle 1. Thessalonians and 2. Thessalonians
export const timothy_bookname: bookset = new Set<string>(['TI']); // TODO: Handle 1. Timothy and 2. Timothy
export const titus: bookset = new Set<string>(['TIT']);
export const philemon: bookset = new Set<string>(['PHM']);
export const hebrews: bookset = new Set<string>(['HEB']);
export const james: bookset = new Set<string>(['JAM']);
export const peter_bookname: bookset = new Set<string>(['PE']); // TODO: Handle 1. Peter and 2. Peter
export const john_bookname: bookset = new Set<string>(['JN']); // TODO: Handle 1. John and 2. John and 3. John
export const jude: bookset = new Set<string>(['JUD']);
export const revelation: bookset = new Set<string>(['REV']);

//
// Apocrypha
export const tobit: bookset = new Set<string>(['TOB']);
export const judith: bookset = new Set<string>(['JDT']);
export const esther_greek: bookset = new Set<string>(['ESG']);
export const wisdom_of_solomon: bookset = new Set<string>(['WIS']);

/**
 * Ecclesiasticus or Jesus son of Sirach
 */
export const sirach: bookset = new Set<string>(['SIR']);

/**
 * 5 chapters in Orthodox Bibles (LJE is separate); 
 * 6 chapters in Catholic Bibles (includes LJE); called 1
Baruch in Syriac Bibles 
 */
export const baruch: bookset = new Set<string>(['BAR']);

/**
 * Sometimes included in Baruch; called "Rest of
Jeremiah" in Ethiopia
 */
export const letter_of_jeremiah: bookset = new Set<string>(['LJE']);

/**
 * Includes the Prayer of Azariah; sometimes included in
Greek Daniel 
 */
export const song_of_the_three_young_men: bookset = new Set<string>(['S3Y']); // TODO: Handle this exceptional case

/**
 * Sometimes included in Greek Daniel
 */
export const susanna: bookset = new Set<string>(['SUS']);

/**
 * Sometimes included in Greek Daniel; called "Rest of
Daniel" in Ethiopia 
 */
export const bel_and_the_dragon: bookset = new Set<string>(['BEL']);

/**
 * For orthodox and catholic bibles
 */
export const maccabees_bookname: bookset = new Set<string>(['MA']); // TODO: Handle 1. Maccabees, 2. Maccabees, 3. Maccabees and 4. Maccabees

/**
 * 1 esdras (greek) -> The 9 chapter book of Greek Ezra in the LXX, called 2
Esdras in Russian Bibles, and called 3 Esdras in the
Vulgate; when Ezra-Nehemiah is one book use EZR
 * 2 esdras (latin) -> The 16 chapter book of Latin Esdras called 3 Esdras in
Russian Bibles and called 4 Esdras in the Vulgate; for
the 12 chapter Apocalypse of Ezra use EZA
 */
export const esdras_bookname: bookset = new Set<string>(['ES']); // TODO: Handle 1. Esdras and 2. Esdras

/**
 * Sometimes appended to 2 Chronicles, included in
Orthodox Bibles 
 */
export const prayer_of_manasseh: bookset = new Set<string>(['MAN']);

/**
 * An additional Psalm in the Septuagint, appended to
Psalms in Orthodox Bibles 
 */
export const psalm_151: bookset = new Set<string>(['PS2']); // TODO: Handle this exceptional case

/**
 * Additional Psalms 152-155 found in West Syriac
manuscripts 
 */
export const psalms_152_to_155: bookset = new Set<string>(['PS3']); // TODO: Handle this exceptional case

/**
 * A book in some editions of the Septuagint; Odes has
different contents in Greek, Russian and Syriac
traditions
 */
export const odes: bookset = new Set<string>(['ODA']);

/**
 * A book in some editions of the Septuagint, but not
printed in modern Bibles 
 */
export const psalms_of_solomon: bookset = new Set<string>(['PSS']);

/**
 * 2 Baruch -> The Apocalypse of Baruch in Syriac Bibles
 * 4 Baruch -> Paralipomenon of Jeremiah, called Rest of the Words of
Baruch in Ethiopia; may include or exclude the Letter
of Jeremiah as chapter 1, used in the Ethiopian Bible 
 */
export const baruch_bookname: bookset = new Set<string>(['BA']); // TODO: Handle 2 Baruch and 4 Baruch

/**
 * Sometimes appended to 2 Baruch; sometimes separate
in Syriac Bibles
 */
export const letter_of_baruch: bookset = new Set<string>(['LBA']);

/**
 * Ancient Hebrew book used in the Ethiopian Bible
 */
export const jubilees: bookset = new Set<string>(['JUB']);

/**
 * Ancient Hebrew book used in the Ethiopian Bible
 */
export const enoch: bookset = new Set<string>(['ENO']);

/**
 * 1 Meqabyan -> Book of Mekabis of Benjamin in the Ethiopian Bible
 * 2 Meqabyan -> Book of Mekabis of Moab in the Ethiopian Bible
 * 3 Meqabyan -> Book of Meqabyan in the Ethiopian Bible
 */
export const meqabyan_bookname: bookset = new Set<string>(['MQ']);

/**
 * Proverbs part 2: Used in the Ethiopian Bible
 */
export const reproof: bookset = new Set<string>(['REP']);

/**
 * A Latin Vulgate book, found in the Vulgate and some
medieval Catholic translations
 */
export const letter_to_the_laodiceans: bookset = new Set<string>(['LAO']);
