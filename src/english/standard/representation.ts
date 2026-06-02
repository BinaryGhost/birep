import { ToOrdinalRepresentation, ToRepresentation } from '../../internal/book-type';
import type { t_book, t_ordinal_book } from '../../internal/book-type';

export class EnglishStandardOrdinals extends ToOrdinalRepresentation {
	override _native_(num: number, ord: t_ordinal_book): string | undefined {
		return this.english(num, ord);
	}
}

export class EnglishStandardRepresentation extends ToRepresentation {
	override _native_(bk: t_book, psalm_chapter_number?: number): string | undefined {
		return this.english(bk, psalm_chapter_number);
	}
}
