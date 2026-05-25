import type { bookset } from '../../internal/book-type';

// NOTE: All according to https://divinity.libguides.com/styleguide/bible

//
// Old Testament
export const mla_genesis_names: bookset = new Set<string>(['Gen.']);
export const mla_exodus_names: bookset = new Set<string>(['Exod.']);
export const mla_leviticus_names: bookset = new Set<string>(['Lev.']);
export const mla_numbers_names: bookset = new Set<string>(['Num.']);
export const mla_deuteronomy_names: bookset = new Set<string>(['Deut.']);
export const mla_joshua_names: bookset = new Set<string>(['Josh.']);
export const mla_judges_names: bookset = new Set<string>(['Judg.']);
export const mla_ruth_names: bookset = new Set<string>(['Ruth']);
export const mla_samuel_names: bookset = new Set<string>(['Sam.']);
export const mla_kings_names: bookset = new Set<string>(['Kings']);
export const mla_chronicles_names: bookset = new Set<string>(['Chron.']);
export const mla_ezra_names: bookset = new Set<string>(['Ezra']);
export const mla_nehemiah_names: bookset = new Set<string>(['Neh.']);
export const mla_esther_names: bookset = new Set<string>(['Esth.']);
export const mla_job_names: bookset = new Set<string>(['Job']);
export const mla_psalms_names: bookset = new Set<string>(['Ps.']);
export const mla_proverbs_names: bookset = new Set<string>(['Prov.']);
export const mla_ecclesiastes_names: bookset = new Set<string>(['Eccles.', 'Qoh.']);
// Song of Solomons -> Cant. of Can. | Song of Sol. | Song of Sg.
export const mla_isaiah_names: bookset = new Set<string>(['Isa.']);
export const mla_jeremiah_names: bookset = new Set<string>(['Jer.']);
export const mla_lamentations_names: bookset = new Set<string>(['Lam.']);
export const mla_ezekiel_names: bookset = new Set<string>(['Ezek.']);
export const mla_daniel_names: bookset = new Set<string>(['Dan.']);
export const mla_hosea_names: bookset = new Set<string>(['Hos.']);
export const mla_joel_names: bookset = new Set<string>(['Joel']);
export const mla_amos_names: bookset = new Set<string>(['Amos']);
export const mla_obadiah_names: bookset = new Set<string>(['Obad.']);
export const mla_jonah_names: bookset = new Set<string>(['Jon.']);
export const mla_micah_names: bookset = new Set<string>(['Mic.']);
export const mla_nahum_names: bookset = new Set<string>(['Nah.']);
export const mla_habakkuk_names: bookset = new Set<string>(['Hab.']);
export const mla_zephaniah_names: bookset = new Set<string>(['Zeph.']);
export const mla_haggai_names: bookset = new Set<string>(['Hag.']);
export const mla_zechariah_names: bookset = new Set<string>(['Zech.']);
export const mla_malachi_names: bookset = new Set<string>(['Mal.']);

//
// New Testament
export const mla_matthew_names: bookset = new Set<string>(['Matt.']);
export const mla_mark_names: bookset = new Set<string>(['Mark']);
export const mla_luke_names: bookset = new Set<string>(['Luke']);
export const mla_john_names: bookset = new Set<string>(['John']);
export const mla_romans_names: bookset = new Set<string>(['Rom.']);
export const mla_corinthians_booknames: bookset = new Set<string>(['Cor.']);
export const mla_ephesians_names: bookset = new Set<string>(['Eph.']);
export const mla_galatians_names: bookset = new Set<string>(['Gal.']);
export const mla_philippians_names: bookset = new Set<string>(['Phil.']);
export const mla_colossians_names: bookset = new Set<string>(['Col.']);
export const mla_thessalonians_booknames: bookset = new Set<string>(['Thess.']);
export const mla_timothy_booknames: bookset = new Set<string>(['Tim.']);
export const mla_titus_names: bookset = new Set<string>(['Tit.']);
export const mla_philemon_names: bookset = new Set<string>(['Philem.']);
export const mla_hebrews_names: bookset = new Set<string>(['Heb.']);
export const mla_james_names: bookset = new Set<string>(['Jas.']);
export const mla_john_letter_booknames: bookset = new Set<string>(['John']);
export const mla_peter_names: bookset = new Set<string>(['Pet.']);
export const mla_jude_names: bookset = new Set<string>(['Jude']);
export const mla_revelation_names: bookset = new Set<string>(['Rev.']);

//
// Apocryphal Books
export const mla_baruch_names: bookset = new Set<string>(['Bar.']);
// Song of the Three Young Men -> Sg. of 3 Childr.
export const mla_susanna_names: bookset = new Set<string>(['Sus.']);
export const mla_esdras_names: bookset = new Set<string>(['Esd.']);
// Esther (Apocrypha) -> Esth. (Apocr.) | Esth.
export const mla_judith_names: bookset = new Set<string>(['Jth.']);
export const mla_maccabees: bookset = new Set<string>(['Macc.']);
// Prayer of Manasseh -> Pr. of Man.
// Bel and the Dragon -> Bel and Dr.
export const mla_sirach: bookset = new Set<string>(['Sir.', 'Ecclus.']);
export const mla_tobit: bookset = new Set<string>(['Tob.']);
export const mla_wisdom: bookset = new Set<string>(['Wisd.']); // + Wisd. of Sol.
