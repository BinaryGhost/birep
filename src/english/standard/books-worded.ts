import {
	possible_books,
	possible_ordinal_books,
	type WordedBookNode,
} from '../../internal/book-type';

export const Standard_WordedBookTrie: WordedBookNode = {
	'gospel/evangelion': {
		of: {
			matthew: {
				book: possible_books.Matthew,
				is_apocryphal: false,
			},
			mark: {
				book: possible_books.Mark,
				is_apocryphal: false,
			},
			luke: {
				book: possible_books.Luke,
				is_apocryphal: false,
			},
			john: {
				book: possible_books.John,
				is_apocryphal: false,
			},
		},
		according: {
			to: {
				matthew: {
					book: possible_books.Matthew,
					is_apocryphal: false,
				},
				mark: {
					book: possible_books.Mark,
					is_apocryphal: false,
				},
				luke: {
					book: possible_books.Luke,
					is_apocryphal: false,
				},
				john: {
					book: possible_books.John,
					is_apocryphal: false,
				},
			},
		},
	},
	the: {
		book: {
			of: {
				revelation: {
					book: possible_books.Revelation,
					is_apocryphal: false,
				},
			},
		},
		'revelation/apocalypse': {
			of: {
				john: {
					book: possible_books.Revelation,
					is_apocryphal: false,
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
								is_apocryphal: false,
							},
							galatians: {
								book: possible_books.Galatians,
								is_apocryphal: false,
							},
							ephesians: {
								book: possible_books.Ephesians,
								is_apocryphal: false,
							},
							philippians: {
								book: possible_books.Philippians,
								is_apocryphal: false,
							},
							romans: {
								book: possible_books.Romans,
								is_apocryphal: false,
							},
						},
					},
					the: {
						apostle: {
							to: {
								the: {
									colossians: {
										book: possible_books.Colossians,
										is_apocryphal: false,
									},
									galatians: {
										book: possible_books.Galatians,
										is_apocryphal: false,
									},
									ephesians: {
										book: possible_books.Ephesians,
										is_apocryphal: false,
									},
									philippians: {
										book: possible_books.Philippians,
										is_apocryphal: false,
									},
									romans: {
										book: possible_books.Romans,
										is_apocryphal: false,
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
						is_apocryphal: false,
					},
					galatians: {
						book: possible_books.Galatians,
						is_apocryphal: false,
					},
					ephesians: {
						book: possible_books.Ephesians,
						is_apocryphal: false,
					},
					philippians: {
						book: possible_books.Philippians,
						is_apocryphal: false,
					},
					romans: {
						book: possible_books.Romans,
						is_apocryphal: false,
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
								is_apocryphal: false,
								ordinal: 1,
							},
						},
					},
					john: {
						book: possible_ordinal_books.John,
						is_apocryphal: false,
						ordinal: 1,
					},
					paul: {
						the: {
							apostle: {
								to: {
									the: {
										thessalonians: {
											is_apocryphal: false,
											book: possible_ordinal_books.Thessalonians,
											ordinal: 2,
										},
										timothy: {
											is_apocryphal: false,
											book: possible_ordinal_books.Timothy,
											ordinal: 2,
										},
										corinthians: {
											is_apocryphal: false,
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
									is_apocryphal: false,
									book: possible_ordinal_books.Thessalonians,
									ordinal: 1,
								},
								timothy: {
									is_apocryphal: false,
									book: possible_ordinal_books.Timothy,
									ordinal: 1,
								},
								corinthians: {
									is_apocryphal: false,
									book: possible_ordinal_books.Corinthians,
									ordinal: 1,
								},
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
								is_apocryphal: false,
								book: possible_ordinal_books.John,
								ordinal: 2,
							},
						},
					},
					john: {
						is_apocryphal: false,
						book: possible_ordinal_books.John,
						ordinal: 2,
					},
					paul: {
						the: {
							apostle: {
								to: {
									the: {
										thessalonians: {
											is_apocryphal: false,
											book: possible_ordinal_books.Thessalonians,
											ordinal: 2,
										},
										timothy: {
											is_apocryphal: false,
											book: possible_ordinal_books.Timothy,
											ordinal: 2,
										},
										corinthians: {
											is_apocryphal: false,
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
									is_apocryphal: false,
									book: possible_ordinal_books.Thessalonians,
									ordinal: 2,
								},
								timothy: {
									is_apocryphal: false,
									book: possible_ordinal_books.Timothy,
									ordinal: 2,
								},
								corinthians: {
									is_apocryphal: false,
									book: possible_ordinal_books.Corinthians,
									ordinal: 2,
								},
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
								is_apocryphal: false,
								ordinal: 3,
							},
						},
					},
					john: {
						is_apocryphal: false,
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
							is_apocryphal: true,
							book: possible_books.Song_Of_The_Three_Young_Men,
						},
					},
				},
			},
			solomon: {
				is_apocryphal: false,
				book: possible_books.Songs_of_Solomon,
			},
		},
	},
	canticle: {
		of: {
			canticles: {
				is_apocryphal: false,
				book: possible_books.Songs_of_Solomon,
			},
		},
	},
	wisdom: {
		of: {
			solomon: {
				is_apocryphal: true,
				book: possible_books.Wisdom_Of_Solomon,
			},
		},
		_else: {
			is_apocryphal: true,
			book: possible_books.Wisdom_Of_Solomon,
		},
	},
	bel: {
		and: {
			the: {
				dragon: {
					is_apocryphal: true,
					book: possible_books.Bel_And_The_Dragon,
				},
			},
		},
	},
	letter: {
		of: {
			jeremiah: {
				is_apocryphal: true,
				book: possible_books.Letter_Of_Jeremiah,
			},
			daniel: {
				is_apocryphal: true,
				book: possible_books.Bel_And_The_Dragon,
			},
			baruch: {
				is_apocryphal: true,
				book: possible_books.Letter_Of_Baruch,
			},
		},
		to: {
			the: {
				laodiceans: {
					is_apocryphal: true,
					book: possible_books.Letter_To_The_Laodiceans,
				},
			},
		},
	},
	rest: {
		of: {
			jeremiah: {
				is_apocryphal: true,
				book: possible_books.Letter_Of_Jeremiah,
			},
			daniel: {
				is_apocryphal: true,
				book: possible_books.Bel_And_The_Dragon,
			},
		},
	},
	prayer: {
		of: {
			manasseh: {
				is_apocryphal: true,
				book: possible_books.Prayer_Of_Manasseh,
			},
		},
	},
	s: {
		'3': {
			y: {
				is_apocryphal: true,
				book: possible_books.Song_Of_The_Three_Young_Men,
			},
		},
	},
	ps: {
		'2': {
			is_apocryphal: true,
			book: possible_books.Psalm_151,
		},
		'3': {
			is_apocryphal: true,
			book: possible_books.Psalms_152_To_155,
		},
	},
};
