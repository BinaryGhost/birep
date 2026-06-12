import {
	possible_books,
	possible_ordinal_books,
	type WordedBookNode,
} from '../../internal/books/book-type';

// According to https://hbl.gcc.libguides.com/BibleAbbrevMLA

export const Standard_WordedBookTrie: WordedBookNode = {
	'Cant.': {
		of: {
			'Cant.': {
				book: possible_books.Songs_of_Solomon,
			},
		},
	},
	Song: {
		of: {
			'Sol.': {
				book: possible_books.Songs_of_Solomon,
			},
			'Sg.': {
				book: possible_books.Songs_of_Solomon,
			},
		},
	},
	Bel: {
		and: {
			'Dr.': {
				book: possible_books.Bel_And_The_Dragon,
			},
		},
	},
	'Sg.': {
		of: {
			'3': {
				'Childr.': {
					book: possible_books.Song_Of_The_Three_Young_Men,
				},
			},
		},
	},
	'Wisd.': {
		of: {
			'Sol.': {
				book: possible_books.Wisdom_Of_Solomon,
			},
		},
	},
	'Pr.': {
		of: {
			'Man.': {
				book: possible_books.Prayer_Of_Manasseh,
			},
		},
	},
};
