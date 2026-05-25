import type { bookset } from '../../internal/book-type';

//
// Old Testament
export const sbl_genesis_names: bookset = new Set<string>(['gen']);
export const sbl_exodus_names: bookset = new Set<string>(['exod']);
export const sbl_leviticus_names: bookset = new Set<string>(['lev']);
export const sbl_numbers_names: bookset = new Set<string>(['num']);
export const sbl_deuteronomy_names: bookset = new Set<string>(['deut']);
export const sbl_joshua_names: bookset = new Set<string>(['josh']);
export const sbl_judges_names: bookset = new Set<string>(['judg']);
export const sbl_ruth_names: bookset = new Set<string>(['ruth']);
export const sbl_samuel_names: bookset = new Set<string>(['sam']);

/**
 * I assume, that it is only meant to be used for the LXX
 *
 * In this link [https://divinity.libguides.com/styleguide/bible],
 * there is also 3-4 kgds, but only for the LXX
 */
export const sbl_kings_names_lxx: bookset = new Set<string>(['kdgms']);
export const sbl_kings_names: bookset = new Set<string>(['kgs']);
export const sbl_chronicles_names: bookset = new Set<string>(['chr']);
export const sbl_ezra_names: bookset = new Set<string>(['ezra']);
export const sbl_nehemiah_names: bookset = new Set<string>(['neh']);
export const sbl_esther_names: bookset = new Set<string>(['esth']);
export const sbl_job_names: bookset = new Set<string>(['job']);
export const sbl_psalms_names: bookset = new Set<string>(['ps', 'pss']);
export const sbl_proverbs_names: bookset = new Set<string>(['prov']);
export const sbl_ecclesiastes_names: bookset = new Set<string>(['eccl', 'qoh']);
export const sbl_song_of_solomon_names: bookset = new Set<string>(['song', 'cant']);
export const sbl_isaiah_names: bookset = new Set<string>(['isaiah', 'isa', 'isa.']);
export const sbl_jeremiah_names: bookset = new Set<string>(['jer']);
export const sbl_lamentations_names: bookset = new Set<string>(['lam']);
export const sbl_ezekiel_names: bookset = new Set<string>(['ezek']);
export const sbl_daniel_names: bookset = new Set<string>(['dan']);
export const sbl_hosea_names: bookset = new Set<string>(['hos']);
export const sbl_joel_names: bookset = new Set<string>(['joel']);
export const sbl_amos_names: bookset = new Set<string>(['amos']);
export const sbl_obadiah_names: bookset = new Set<string>(['obad']);
export const sbl_jonah_names: bookset = new Set<string>(['jonah']);
export const sbl_micah_names: bookset = new Set<string>(['mic']);
export const sbl_nahum_names: bookset = new Set<string>(['nah']);
export const sbl_habakkuk_names: bookset = new Set<string>(['hab']);
export const sbl_zephaniah_names: bookset = new Set<string>(['zeph']);
export const sbl_haggai_names: bookset = new Set<string>(['hag']);
export const sbl_zechariah_names: bookset = new Set<string>(['zech']);
export const sbl_malachi_names: bookset = new Set<string>(['mal']);

//
// New Testament
export const sbl_matthew_names: bookset = new Set<string>(['matt']);
export const sbl_mark_names: bookset = new Set<string>(['mark']);
export const sbl_luke_names: bookset = new Set<string>(['luke']);
export const sbl_john_names: bookset = new Set<string>(['john']);
export const sbl_romans_names: bookset = new Set<string>(['rom']);
export const sbl_corinthians_booknames: bookset = new Set<string>(['cor']);
export const sbl_ephesians_names: bookset = new Set<string>(['eph']);
export const sbl_galatians_names: bookset = new Set<string>(['gal']);
export const sbl_philippians_names: bookset = new Set<string>(['php']);
export const sbl_colossians_names: bookset = new Set<string>(['col']);
export const sbl_thessalonians_booknames: bookset = new Set<string>(['thess']);
export const sbl_timothy_booknames: bookset = new Set<string>(['tim']);
export const sbl_titus_names: bookset = new Set<string>(['titus']);
export const sbl_philemon_names: bookset = new Set<string>(['phlm']);
export const sbl_hebrews_names: bookset = new Set<string>(['heb']);
export const sbl_james_names: bookset = new Set<string>(['jas']);
export const sbl_john_letter_booknames: bookset = new Set<string>(['john']);
export const sbl_peter_names: bookset = new Set<string>(['pet']);
export const sbl_jude_names: bookset = new Set<string>(['jude']);
export const sbl_revelation_names: bookset = new Set<string>(['rev']);

//
// Apocryphal Books
export const sbl_baruch_names: bookset = new Set<string>(['bar']);
// Additions to Daniel -> add dan
// Prayer of Azariah -> pr azar
// Song of the Three Young Men -> sg three
export const sbl_susanna_names: bookset = new Set<string>(['sus']);
export const sbl_esdras_booknames: bookset = new Set<string>(['Esd']);
// Additions to Esther -> Add Esth
// Epistle of Jeremiah -> Ep Jer
export const sbl_judith_names: bookset = new Set<string>(['jdt']);
export const sbl_maccabees: bookset = new Set<string>(['Macc']);
// Prayer of Manasseh -> Pr Man
export const sbl_sirach: bookset = new Set<string>(['Sir']);
export const sbl_tobit: bookset = new Set<string>(['Tob']);
export const sbl_wisdom: bookset = new Set<string>(['Wis']);
