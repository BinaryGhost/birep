export interface StandardForm {
	bookname_local_language: string;
	bookname_english: string;
	apocryphal: boolean;
	writing_direction: boolean;
	locations: {
		chapter: {
			lower_range_chapter: number;
			higher_range_chapter: number;
		};
		verse: {
			lower_range_min: number;
			higher_range_min: number;
			lower_notation: string;
			higher_notation: string;
		}[];
	};
}
