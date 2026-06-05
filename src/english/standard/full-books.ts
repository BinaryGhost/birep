import type { bookset, ordinal_bookset } from '../../internal/books/book-type';

//
// Old Testament
export const genesis: bookset = ['Genesis'];
export const exodus: bookset = ['Exodus'];
export const levitcius: bookset = ['Leviticus'];
export const numbers: bookset = ['Numbers'];
export const deuteronomy: bookset = ['Deuteronomy'];
export const joshua: bookset = ['Joshua'];
export const judges: bookset = ['Judges'];
export const ruth: bookset = ['Ruth'];
export const samuel: ordinal_bookset = ['Samuel'];
export const kings: ordinal_bookset = ['Kings'];
export const chronicles: ordinal_bookset = ['Chronicles'];
export const ezra: bookset = ['Ezra'];
export const nehemia: bookset = ['Nehemia'];
export const esther: bookset = ['Esther'];
export const job: bookset = ['Job'];
export const psalms: bookset = ['Psalms'];
export const proverbs: bookset = ['Proverbs'];
export const ecclesiastes: bookset = ['Ecclesiastes', 'Qohelet'];
// Song_of_Solomon -> Song of Solomon | Canticle of Canticles
export const isaiah: bookset = ['Isaiah'];
export const jeremiah: bookset = ['Jeremiah'];
export const lamentations: bookset = ['Lamentations'];
export const ezekiel: bookset = ['Ezekiel'];
export const daniel: bookset = ['Daniel'];
export const hosea: bookset = ['Hosea'];
export const joel: bookset = ['Joel'];
export const amos: bookset = ['Amos'];
export const obadiah: bookset = ['Obadiah'];
export const jonah: bookset = ['Jonah'];
export const micah: bookset = ['Micah'];
export const nahum: bookset = ['Nahum'];
export const habakkuk: bookset = ['Habakkuk'];
export const zephaniah: bookset = ['Zephaniah'];
export const haggai: bookset = ['Haggai'];
export const zechariah: bookset = ['Zechariah'];
export const malachi: bookset = ['Malachi'];

//
// New Testament
export const matthew: bookset = ['Matthew'];
export const mark: bookset = ['Mark'];
export const luke: bookset = ['Luke'];
export const john: bookset = ['John'];
export const acts: bookset = ['Acts'];
export const romans: bookset = ['Romans'];
export const corinthians: ordinal_bookset = ['Corinthians'];
export const galatians: bookset = ['Galatians'];
export const ephesians: bookset = ['Ephesians'];
export const philippians: bookset = ['Philippians'];
export const colossians: bookset = ['Colossians'];
export const thessalonians: ordinal_bookset = ['Thessalonians'];
export const timothy: ordinal_bookset = ['Timothy'];
export const titus: bookset = ['Titus'];
export const philemon: bookset = ['Philemon'];
export const hebrews: bookset = ['Hebrews'];
export const james: bookset = ['James'];
export const peter: ordinal_bookset = ['Peter'];
export const johns_epistles: ordinal_bookset = ['John'];
export const jude: bookset = ['Jude'];
export const revelation: bookset = ['Revelation'];

//
// Apocrypha
export const tobit: bookset = ['Tobit'];
export const judith: bookset = ['Judith'];
export const esther_greek: bookset = ['']; // TODO: Esther Greek | Greek Esther
export const wisdom_of_solomon: bookset = ['']; // TODO: Wisdom | Wisdom of Solomon

/**
 * Ecclesiasticus or Jesus son of Sirach
 */
export const sirach: bookset = ['Sirach'];

/**
 * 5 chapters in Orthodox Bibles (LJE is separate; 
 * 6 chapters in Catholic Bibles (includes LJE; called 1
Baruch in Syriac Bibles 
 */
export const baruch: bookset = ['Baruch'];

/**
 * Sometimes included in Baruch; called "Rest of
Jeremiah" in Ethiopia
 */
export const letter_of_jeremiah: bookset = ['']; // TODO: Letter of Jeremiah

/**
 * Includes the Prayer of Azariah; sometimes included in
Greek Daniel 
 */
export const song_of_the_three_young_men: bookset = ['']; // TODO: Song of the three young men | Other...

/**
 * Sometimes included in Greek Daniel
 */
export const susanna: bookset = ['Susanna'];

/**
 * Sometimes included in Greek Daniel; called "Rest of
Daniel" in Ethiopia 
 */
export const bel_and_the_dragon: bookset = ['']; // TODO: Bel and the Dragon

/**
 * For orthodox and catholic bibles
 */
export const maccabees: ordinal_bookset = ['Maccabees'];

/**
 * 1 esdras (greek) -> The 9 chapter book of Greek Ezra in the LXX, called 2
Esdras in Russian Bibles, and called 3 Esdras in the
Vulgate; when Ezra-Nehemiah is one book use EZR
 * 2 esdras (latin) -> The 16 chapter book of Latin Esdras called 3 Esdras in
Russian Bibles and called 4 Esdras in the Vulgate; for
the 12 chapter Apocalypse of Ezra use EZA
 */
export const esdras: ordinal_bookset = ['Esdras'];

/**
 * Sometimes appended to 2 Chronicles, included in
Orthodox Bibles 
 */
export const prayer_of_manasseh: bookset = ['']; // TODO: Prayer of Manasseh

/**
 * An additional Psalm in the Septuagint, appended to
Psalms in Orthodox Bibles 
 */
export const psalm_151: bookset = ['']; // TODO: Handle this exceptional case

/**
 * A Latin Vulgate book, found in the Vulgate and some
medieval Catholic translations
 */
export const letter_to_the_laodiceans: bookset = ['']; // TODO: Letter/Epistle to the Laodiceans
