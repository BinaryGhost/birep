import type { index_bookset, index_ordinal_bookset } from '../../internal/book-type';
import * as full from './full-books';

//
// Old Testament
export const genesis: index_bookset = new Set(full.genesis);
export const exodus: index_bookset = new Set(full.exodus);
export const leviticus: index_bookset = new Set(full.levitcius);
export const numbers: index_bookset = new Set(full.numbers);
export const deuteronomy: index_bookset = new Set(full.deuteronomy);
export const joshua: index_bookset = new Set(full.joshua);
export const judges: index_bookset = new Set(full.judges);
export const ruth: index_bookset = new Set(full.ruth);
export const samuel: index_ordinal_bookset = new Set(full.samuel);
export const kings: index_ordinal_bookset = new Set(full.kings);
export const chronicles: index_ordinal_bookset = new Set(full.chronicles);
export const ezra: index_bookset = new Set(full.ezra);
export const nehemia: index_bookset = new Set(full.nehemia);
export const esther: index_bookset = new Set(full.esther);
export const job: index_bookset = new Set(full.job);
export const psalms: index_bookset = new Set(full.psalms);
export const proverbs: index_bookset = new Set(full.proverbs);
export const ecclesiastes: index_bookset = new Set(full.ecclesiastes);
// Song_of_Solomon -> Song of Solomon | Canticle of Canticles
export const isaiah: index_bookset = new Set(full.isaiah);
export const jeremiah: index_bookset = new Set(full.jeremiah);
export const lamentations: index_bookset = new Set(full.lamentations);
export const ezekiel: index_bookset = new Set(full.ezekiel);
export const daniel: index_bookset = new Set(full.daniel);
export const hosea: index_bookset = new Set(full.hosea);
export const joel: index_bookset = new Set(full.joel);
export const amos: index_bookset = new Set(full.amos);
export const obadiah: index_bookset = new Set(full.obadiah);
export const jonah: index_bookset = new Set(full.jonah);
export const micah: index_bookset = new Set(full.micah);
export const nahum: index_bookset = new Set(full.nahum);
export const habakkuk: index_bookset = new Set(full.habakkuk);
export const zephaniah: index_bookset = new Set(full.zephaniah);
export const haggai: index_bookset = new Set(full.haggai);
export const zechariah: index_bookset = new Set(full.zechariah);
export const malachi: index_bookset = new Set(full.malachi);

//
// New Testament
export const matthew: index_bookset = new Set(full.matthew);
export const mark: index_bookset = new Set(full.mark);
export const luke: index_bookset = new Set(full.luke);
export const john: index_bookset = new Set(full.john);
export const acts: index_bookset = new Set(full.acts);
export const romans: index_bookset = new Set(full.romans);
export const corinthians: index_ordinal_bookset = new Set(full.corinthians);
export const galatians: index_bookset = new Set(full.galatians);
export const ephesians: index_bookset = new Set(full.ephesians);
export const philippians: index_bookset = new Set(full.philippians);
export const colossians: index_bookset = new Set(full.colossians);
export const thessalonians: index_ordinal_bookset = new Set(full.thessalonians);
export const timothy: index_ordinal_bookset = new Set(full.timothy);
export const titus: index_bookset = new Set(full.titus);
export const philemon: index_bookset = new Set(full.philemon);
export const hebrews: index_bookset = new Set(full.hebrews);
export const james: index_bookset = new Set(full.james);
export const peter: index_ordinal_bookset = new Set(full.peter);
export const johns_epistles: index_ordinal_bookset = new Set(full.johns_epistles);
export const jude: index_bookset = new Set(full.jude);
export const revelation: index_bookset = new Set(full.revelation);

//
// Apocrypha
export const tobit: index_bookset = new Set(full.tobit);
export const judith: index_bookset = new Set(full.judith);
export const esther_greek: index_bookset = new Set(['']); // TODO: Esther Greek | Greek Esther
export const wisdom_of_solomon: index_bookset = new Set(['']); // TODO: Wisdom | Wisdom of Solomon

/**
 * Ecclesiasticus or Jesus son of Sirach
 */
export const sirach: index_bookset = new Set(full.sirach);

/**
 * 5 chapters in Orthodox Bibles (LJE is separate); 
 * 6 chapters in Catholic Bibles (includes LJE); called 1
Baruch in Syriac Bibles 
 */
export const baruch: index_bookset = new Set(full.baruch);

/**
 * Sometimes included in Baruch; called "Rest of
Jeremiah" in Ethiopia
 */
export const letter_of_jeremiah: index_bookset = new Set(['']); // TODO: Letter of Jeremiah

/**
 * Includes the Prayer of Azariah; sometimes included in
Greek Daniel 
 */
export const song_of_the_three_young_men: index_bookset = new Set(['']); // TODO: Song of the three young men | Other

/**
 * Sometimes included in Greek Daniel
 */
export const susanna: index_bookset = new Set(full.susanna);

/**
 * Sometimes included in Greek Daniel; called "Rest of
Daniel" in Ethiopia 
 */
export const bel_and_the_dragon: index_bookset = new Set(['']); // TODO: Bel and the Dragon

/**
 * For orthodox and catholic bibles
 */
export const maccabees: index_ordinal_bookset = new Set(['Maccabees']);

/**
 * 1 esdras (greek) -> The 9 chapter book of Greek Ezra in the LXX, called 2
Esdras in Russian Bibles, and called 3 Esdras in the
Vulgate; when Ezra-Nehemiah is one book use EZR
 * 2 esdras (latin) -> The 16 chapter book of Latin Esdras called 3 Esdras in
Russian Bibles and called 4 Esdras in the Vulgate; for
the 12 chapter Apocalypse of Ezra use EZA
 */
export const esdras: index_ordinal_bookset = new Set(['Esdras']);

/**
 * Sometimes appended to 2 Chronicles, included in
Orthodox Bibles 
 */
export const prayer_of_manasseh: index_bookset = new Set(['']); // TODO: Prayer of Manasseh

/**
 * An additional Psalm in the Septuagint, appended to
Psalms in Orthodox Bibles 
 */
export const psalm_151: index_bookset = new Set(['']); // TODO: Handle this exceptional case

/**
 * A Latin Vulgate book, found in the Vulgate and some
medieval Catholic translations
 */
export const letter_to_the_laodiceans: index_bookset = new Set(['']); // TODO: Letter/Epistle to the Laodiceans
