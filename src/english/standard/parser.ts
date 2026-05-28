import { Parser } from '../../internal/parser';
import type { Success } from '../../internal/errors';

export class StandardEnglishParser extends Parser {
	parseChapterNumber(): Success<boolean> {
		let current = this.current();

		if (current?.kind === 'EOL') {
			return {
				t: false,
				e: {
					heading: 'No chapter',
					possible_fixes: [
						"Please mention any number (except 0) after the book's name",
						'For a book atleast a chapter number has to be given in order to be valid',
					],
				},
			};
		}

		if (current?.kind !== 'num') {
			return {
				t: false,
				e: {
					heading: 'Invalid Chapter-Number',
					possible_fixes: [
						'A chapter number has to be a number and can not be used as anything else',
						`Do not use '${current?.representation}' at col ${current?.pos} as a number`,
					],
				},
			};
		}
		this.consume();

		current = this.current();
		switch (current?.kind) {
			// e.g -> "Genesis <num>:"
			case 'chapter-verse-seperator':
				break;
			case 'range-char':
				break;
			// e.g -> "Genesis <num>;" | "Genesis <num>"
			case 'EOL':
			case 'book-delimiter':
				break;
			default:
				return {
					t: false,
					e: {
						heading: 'Invalid Token for chapter-numbers',
						possible_fixes: [
							`It is not possible to use '${current?.representation}' as a chapter numbers`,
							'Use something different, e.g ";" or ":"',
						],
					},
				};
		}

		return { t: true, e: null };
	}
}
