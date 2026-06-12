import type { t_reference } from './books/book-type';

export interface StandardForm {
	bookname_local_language: string;
	bookname_english: string;
	apocryphal: boolean;
	writing_direction: boolean;
	locations: t_reference[];
}
