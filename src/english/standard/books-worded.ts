import {
	possible_books,
	possible_ordinal_books,
	type WordedBookNode,
} from '../../internal/books/book-type';

export const Standard_WordedBookTrie: WordedBookNode = {
	'gospel/evangelion': {
		of: {
			matthew: {
				book: possible_books.Matthew,
			},
			mark: {
				book: possible_books.Mark,
			},
			luke: {
				book: possible_books.Luke,
			},
			john: {
				book: possible_books.John,
			},
		},
		according: {
			to: {
				matthew: {
					book: possible_books.Matthew,
				},
				mark: {
					book: possible_books.Mark,
				},
				luke: {
					book: possible_books.Luke,
				},
				john: {
					book: possible_books.John,
				},
			},
		},
	},
	the: {
		book: {
			of: {
				revelation: {
					book: possible_books.Revelation,
				},
			},
		},
		'revelation/apocalypse': {
			of: {
				john: {
					book: possible_books.Revelation,
				},
			},
		},
		'letter/epistle': {
			of: {
				paul: {
					to: {
						the: {
							colossians: {
								book: possible_books.Colossians,
							},
							galatians: {
								book: possible_books.Galatians,
							},
							ephesians: {
								book: possible_books.Ephesians,
							},
							philippians: {
								book: possible_books.Philippians,
							},
							romans: {
								book: possible_books.Romans,
							},
						},
					},
					the: {
						apostle: {
							to: {
								the: {
									colossians: {
										book: possible_books.Colossians,
									},
									galatians: {
										book: possible_books.Galatians,
									},
									ephesians: {
										book: possible_books.Ephesians,
									},
									philippians: {
										book: possible_books.Philippians,
									},
									romans: {
										book: possible_books.Romans,
									},
								},
							},
						},
					},
				},
			},
			to: {
				the: {
					colossians: {
						book: possible_books.Colossians,
					},
					galatians: {
						book: possible_books.Galatians,
					},
					ephesians: {
						book: possible_books.Ephesians,
					},
					philippians: {
						book: possible_books.Philippians,
					},
					romans: {
						book: possible_books.Romans,
					},
				},
			},
		},
		first: {
			'epistle/letter': {
				of: {
					the: {
						apostle: {
							john: {
								book: possible_ordinal_books.John,

								ordinal: 1,
							},
						},
					},
					john: {
						book: possible_ordinal_books.John,

						ordinal: 1,
					},
					paul: {
						the: {
							apostle: {
								to: {
									the: {
										thessalonians: {
											book: possible_ordinal_books.Thessalonians,
											ordinal: 2,
										},
										timothy: {
											book: possible_ordinal_books.Timothy,
											ordinal: 2,
										},
										corinthians: {
											book: possible_ordinal_books.Corinthians,
											ordinal: 2,
										},
									},
								},
							},
						},
						to: {
							the: {
								thessalonians: {
									book: possible_ordinal_books.Thessalonians,
									ordinal: 1,
								},
								corinthians: {
									book: possible_ordinal_books.Corinthians,
									ordinal: 1,
								},
							},
							timothy: {
								book: possible_ordinal_books.Timothy,
								ordinal: 1,
							},
						},
					},
				},
			},
		},
		second: {
			'epistle/letter': {
				of: {
					the: {
						apostle: {
							john: {
								book: possible_ordinal_books.John,
								ordinal: 2,
							},
						},
					},
					john: {
						book: possible_ordinal_books.John,
						ordinal: 2,
					},
					paul: {
						the: {
							apostle: {
								to: {
									the: {
										thessalonians: {
											book: possible_ordinal_books.Thessalonians,
											ordinal: 2,
										},
										timothy: {
											book: possible_ordinal_books.Timothy,
											ordinal: 2,
										},
										corinthians: {
											book: possible_ordinal_books.Corinthians,
											ordinal: 2,
										},
									},
								},
							},
						},
						to: {
							the: {
								thessalonians: {
									book: possible_ordinal_books.Thessalonians,
									ordinal: 2,
								},
								corinthians: {
									book: possible_ordinal_books.Corinthians,
									ordinal: 2,
								},
							},
							timothy: {
								book: possible_ordinal_books.Timothy,
								ordinal: 2,
							},
						},
					},
				},
			},
		},
		third: {
			'epistle/letter': {
				of: {
					the: {
						apostle: {
							john: {
								book: possible_ordinal_books.John,

								ordinal: 3,
							},
						},
					},
					john: {
						book: possible_ordinal_books.John,
						ordinal: 3,
					},
				},
			},
		},
	},
	song: {
		of: {
			the: {
				'three/3': {
					young: {
						men: {
							book: possible_books.Song_Of_The_Three_Young_Men,
						},
					},
				},
			},
			solomon: {
				book: possible_books.Songs_of_Solomon,
			},
		},
	},
	canticle: {
		of: {
			canticles: {
				book: possible_books.Songs_of_Solomon,
			},
		},
	},
	wisdom: {
		of: {
			solomon: {
				book: possible_books.Wisdom_Of_Solomon,
			},
		},
		_else: {
			book: possible_books.Wisdom_Of_Solomon,
		},
	},
	bel: {
		and: {
			the: {
				dragon: {
					book: possible_books.Bel_And_The_Dragon,
				},
			},
		},
	},
	letter: {
		of: {
			jeremiah: {
				book: possible_books.Letter_Of_Jeremiah,
			},
			daniel: {
				book: possible_books.Bel_And_The_Dragon,
			},
			baruch: {
				book: possible_books.Letter_Of_Baruch,
			},
		},
		to: {
			the: {
				laodiceans: {
					book: possible_books.Letter_To_The_Laodiceans,
				},
			},
		},
	},
	rest: {
		of: {
			jeremiah: {
				book: possible_books.Letter_Of_Jeremiah,
			},
			daniel: {
				book: possible_books.Bel_And_The_Dragon,
			},
		},
	},
	prayer: {
		of: {
			manasseh: {
				book: possible_books.Prayer_Of_Manasseh,
			},
		},
	},
	s: {
		'3': {
			y: {
				book: possible_books.Song_Of_The_Three_Young_Men,
			},
		},
	},
	ps: {
		'2': {
			book: possible_books.Psalm_151,
		},
		'3': {
			book: possible_books.Psalms_152_To_155,
		},
	},
};
