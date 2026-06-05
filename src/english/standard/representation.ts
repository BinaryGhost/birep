import { ToOrdinalRepresentation, ToRepresentation } from '../../internal/books/book-analysis';
import type { t_book, t_ordinal_book } from '../../internal/books/book-type';

export class EnglishStandardOrdinalRepresentation extends ToOrdinalRepresentation {
	override _native_(ord_book: t_ordinal_book): string | undefined {
		return this.english(ord_book);
	}
}

export class EnglishStandardRepresentation extends ToRepresentation {
	override _native_(bk: t_book, psalm_chapter_number?: number): string | undefined {
		return this.english(bk, psalm_chapter_number);
	}
}

export const english_standard_ordinals_representation: EnglishStandardOrdinalRepresentation =
	new EnglishStandardOrdinalRepresentation();
export const english_standard_representation: EnglishStandardRepresentation =
	new EnglishStandardRepresentation();
