/**
 * List of all the cities in the world.
 * 
 * @constant
 * @type {Object}
 */
city_builder.CITIES = {
	'Byblos': {
		nationality: city_builder.NATION_TYPE_PHOENICIAN,
		ruler: 'Cronus',
		avatar: 1,
		climate: city_builder.CLIMATE_TYPE_TEMPERATE,
		personality: city_builder.PERSONALITY_TYPE_DIPLOMAT,
		level: 25,
		prestige: 700,
		// coins: 230000,
		trades: {
			'imports': {
				gold: 250,
				milk: 500,
				goldores: 100,
				weapons: 80,
				quartz: 90,
				roses: 200,
				wine: 310,
				clay: 280,
				fish: 200
			},
			'exports': {
				hemp: 200,
				indigo: 100,
				paper: 220,
				stones: 100
			}
		},
		army: {
			'Militia': 40,
			'Axeman': 30,
			'Knight': 10,
			'Bowman': 20,
			'Crossbowman': 10,
			'Pikeman': 30
		},
		navy: {
			'Corsair': 4,
			'Caravel': 2,
			'Warship': 6
		},
		location: {
			x: 310,
			y: 340
		}
	},
	'Carthage': {
		nationality: city_builder.NATION_TYPE_CARTHAGINIAN,
		ruler: 'Elisa',
		avatar: 21,
		climate: city_builder.CLIMATE_TYPE_TROPICAL,
		personality: city_builder.PERSONALITY_TYPE_DIPLOMAT,
		level: 24,
		// coins: 130000,
		prestige: 700,
		trades: {
			'imports': {
				wax: 100,
				sugar: 200,
				sugarcane: 100,
				glasses: 80,
				fish: 200,
				candles: 90,
				bread: 200,
				pearls: 100,
				salt: 50
			},
			'exports': {
				leather: 200,
				indigo: 100,
				flour: 220,
				glass: 200,
				coal: 100,
				fish: 300,
				wood: 220
			}
		},
		navy: {
			'Corsair': 6,
			'Caravel': 4,
			'Warship': 3
		},
		army: {
			'Militia': 40,
			'Axeman': 50,
			'Knight': 10,
			'Bowman': 50,
			'Crossbowman': 50,
			'Pikeman': 40
		},
		location: {
			x: 170,
			y: 320
		}
	},
	'Kyrene': {
		nationality: city_builder.NATION_TYPE_GREEK,
		ruler: 'Abdul',
		avatar: 33,
		climate: city_builder.CLIMATE_TYPE_TROPICAL,
		personality: city_builder.PERSONALITY_TYPE_WARLORD,
		// coins: 200000,
		level: 22,
		prestige: 500,
		trades: {
			'imports': {
				flour: 100,
				milk: 200,
				brass: 100,
				furs: 100,
				fish: 270,
				cider: 80,
				silk: 200,
				cattle: 210,
				wheat: 300
			},
			'exports': {
				clothes: 200,
				fish: 100,
				coffeebeans: 220,
				silk: 100
			}
		},
		army: {
			'Militia': 90,
			'Axeman': 70,
			'Knight': 0,
			'Bowman': 50,
			'Crossbowman': 30,
			'Pikeman': 90
		},
		navy: {
			'Corsair': 0,
			'Caravel': 0,
			'Warship': 0
		},
		location: {
			x: 240,
			y: 360
		}
	},
	'Menat Khufu': {
		nationality: city_builder.NATION_TYPE_EGYPTIAN,
		ruler: 'Khufu',
		avatar: 34,
		climate: city_builder.CLIMATE_TYPE_ARID,
		personality: city_builder.PERSONALITY_TYPE_DIPLOMAT,
		// coins: 200000,
		level: 35,
		prestige: 800,
		trades: {
			'imports': {
				barrels: 110,
				books: 90,
				paper: 100,
				coal: 200,
				copper: 160,
				indigo: 200
			},
			'exports': {
				coal: 220,
				ironores: 120,
				copper: 140,
				goldores: 120,
				iron: 100,
				gold: 200,
				brass:100
			}
		},
		army: {
			'Militia': 40,
			'Axeman': 120,
			'Knight': 10,
			'Bowman': 120,
			'Crossbowman': 30,
			'Pikeman': 50
		},
		navy: {
			'Corsair': 0,
			'Caravel': 0,
			'Warship': 0
		},
		location: {
			x: 290,
			y: 400
		}
	},
	'Niniveh': {
		nationality: city_builder.NATION_TYPE_ASSYRIAN,
		ruler: 'Sennacherib',
		avatar: 30,
		climate: city_builder.CLIMATE_TYPE_ARID,
		personality: city_builder.PERSONALITY_TYPE_DIPLOMAT,
		// coins: 130000,
		level: 33,
		prestige: 780,
		trades: {
			'imports': {
				silk: 110,
				clothes: 190,
				leather: 110,
				meat: 130
			},
			'exports': {
				gold: 120,
				iron: 220,
				ironores: 170,
				copper: 190,
				coal: 120
			}
		},
		army: {
			'Militia': 40,
			'Axeman': 30,
			'Knight': 10,
			'Bowman': 20,
			'Crossbowman': 10,
			'Pikeman': 30
		},
		navy: {
			'Corsair': 0,
			'Caravel': 0,
			'Warship': 0
		},
		location: {
			x: 380,
			y: 290
		}
	},
	'Novgorod': {
		nationality: city_builder.NATION_TYPE_RUSSIAN,
		ruler: 'Rurik',
		avatar: 5,
		climate: city_builder.CLIMATE_TYPE_POLAR,
		personality: city_builder.PERSONALITY_TYPE_WARLORD,
		// coins: 30000,
		level: 20,
		prestige: 200,
		trades: {
			'imports': {
				furs: 100,
				hides: 120,
				milk: 110,
				leather: 80,
				fish: 400,
				furcoats: 300
			},
			'exports': {
				wax: 110,
				candles: 100,
				salt: 170
			}
		},
		army: {
			'Militia': 40,
			'Axeman': 30,
			'Knight': 10,
			'Bowman': 20,
			'Crossbowman': 10,
			'Pikeman': 30
		},
		navy: {
			'Corsair': 0,
			'Caravel': 0,
			'Warship': 0
		},
		location: {
			x: 330,
			y: 130
		}
	},
	'Rome': {
		nationality: city_builder.NATION_TYPE_ROMAN,
		ruler: 'Caesar',
		avatar: 17,
		climate: city_builder.CLIMATE_TYPE_TEMPERATE,
		personality: city_builder.PERSONALITY_TYPE_BALANCED,
		// coins: 330000,
		level: 38,
		prestige: 900,
		trades: {
			'imports': {
				perfume: 120,
				coffee: 110,
				cider: 100,
				wine: 80,
				beer: 90,
				silk: 180
			},
			'exports': {
				barrels: 200,
				brine: 120,
				brass: 160,
				candlesticks: 100,
				cattle: 210,
				glass: 170,
				gold: 180,
				wheat: 220,
				iron: 100,
				grapes: 300,
				hemp: 380,
				herbs: 600,
				quartz: 220,
				stones: 130
			}
		},
		army: {
			'Militia': 40,
			'Axeman': 320,
			'Knight': 10,
			'Bowman': 220,
			'Crossbowman': 210,
			'Pikeman': 90
		},
		navy: {
			'Corsair': 0,
			'Caravel': 0,
			'Warship': 0
		},
		location: {
			x: 190,
			y: 290
		}
	},
	'Sarmizegetusa': {
		nationality: city_builder.NATION_TYPE_THRACIAN,
		ruler: 'Deceballus',
		avatar: 8,
		climate: city_builder.CLIMATE_TYPE_CONTINENTAL,
		personality: city_builder.PERSONALITY_TYPE_WARLORD,
		// coins: 22000,
		level: 18,
		prestige: 160,
		trades: {
			'imports': {
				flour: 100,
				bread: 110,
				brass: 140,
				coal: 200
			},
			'exports': {
				wood: 100,
				stones: 200,
				wine: 140
			}
		},
		army: {
			'Militia': 90,
			'Axeman': 90,
			'Knight': 1,
			'Bowman': 20,
			'Crossbowman': 20,
			'Pikeman': 30
		},
		navy: {
			'Corsair': 0,
			'Caravel': 0,
			'Warship': 0
		},
		location: {
			x: 250,
			y: 270
		}
	},
	'Sigiriya': {
		nationality: city_builder.NATION_TYPE_INDIAN,
		ruler: 'Kashyapa',
		avatar: 9,
		climate: city_builder.CLIMATE_TYPE_TROPICAL,
		personality: city_builder.PERSONALITY_TYPE_BALANCED,
		// coins: 180000,
		level: 22,
		prestige: 200,
		trades: {
			'imports': {
				furs: 100,
				hides: 180,
				milk: 110,
				leather: 80
			},
			'exports': {
				wax: 110,
				candles: 100,
				salt: 170,
				sugarcane: 200
			}
		},
		army: {
			'Militia': 40,
			'Axeman': 30,
			'Knight': 10,
			'Bowman': 20,
			'Crossbowman': 10,
			'Pikeman': 30
		},
		navy: {
			'Corsair': 2,
			'Caravel': 2,
			'Warship': 2
		},
		location: {
			x: 600,
			y: 490
		}
	},
	'Selima Oasis': {
		nationality: city_builder.NATION_TYPE_SUDANESE,
		ruler: 'Pepi',
		avatar: 10,
		climate: city_builder.CLIMATE_TYPE_TROPICAL,
		personality: city_builder.PERSONALITY_TYPE_WARLORD,
		// coins: 80000,
		level: 18,
		prestige: 300,
		trades: {
			'imports': {
				cider: 100,
				ropes: 80,
				wax: 120,
				sugar: 90,
				wood: 500,
				stones: 300
			},
			'exports': {
				almonds: 100,
				roses: 220,
				grapes: 100,
				hemp: 100,
				coffeebeans: 120,
				coffee: 90,
				spices: 130
			}
		},
		army: {
			'Militia': 40,
			'Axeman': 30,
			'Knight': 10,
			'Bowman': 20,
			'Crossbowman': 10,
			'Pikeman': 30
		},
		navy: {
			'Corsair': 0,
			'Caravel': 0,
			'Warship': 0
		},
		location: {
			x: 300,
			y: 450
		}
	},
	'Thebes': {
		nationality: city_builder.NATION_TYPE_EGYPTIAN,
		ruler: 'Hatshepsut',
		avatar: 36,
		climate: city_builder.CLIMATE_TYPE_TROPICAL,
		personality: city_builder.PERSONALITY_TYPE_DIPLOMAT,
		// coins: 280000,
		level: 31,
		prestige: 600,
		trades: {
			'imports': {
				meat: 100,
				milk: 90,
				weapons: 100,
				roses: 130,
				perfume: 90,
				iron: 200,
				ironores: 110
			},
			'exports': {
				brine: 170,
				clothes: 100,
				glass: 220,
				wheat: 300,
				hides: 70,
				paper: 90
			}
		},
		army: {
			'Militia': 40,
			'Axeman': 30,
			'Knight': 10,
			'Bowman': 20,
			'Crossbowman': 10,
			'Pikeman': 30
		},
		navy: {
			'Corsair': 0,
			'Caravel': 0,
			'Warship': 0
		},
		location: {
			x: 320,
			y: 420
		}
	},
	'Toledo': {
		nationality: city_builder.NATION_TYPE_SPANISH,
		ruler: 'Juan Luiz',
		avatar: 12,
		climate: city_builder.CLIMATE_TYPE_TEMPERATE,
		personality: city_builder.PERSONALITY_TYPE_BALANCED,
		// coins: 110000,
		level: 21,
		prestige: 180,
		trades: {
			'imports': {
				meat: 100,
				iron: 200,
				brass: 100,
				cider: 80,
				grapes: 90,
				coal: 150,
				ironores: 160
			},
			'exports': {
				wine: 200,
				silk: 100,
				wood: 140,
				cattle: 120
			}
		},
		army: {
			'Militia': 40,
			'Axeman': 30,
			'Knight': 10,
			'Bowman': 20,
			'Crossbowman': 10,
			'Pikeman': 30
		},
		navy: {
			'Corsair': 0,
			'Caravel': 0,
			'Warship': 0
		},
		location: {
			x: 90,
			y: 300
		}
	},
	'Tournai': {
		nationality: city_builder.NATION_TYPE_FRANKS,
		ruler: 'Clovis',
		avatar: 24,
		climate: city_builder.CLIMATE_TYPE_CONTINENTAL,
		personality: city_builder.PERSONALITY_TYPE_WARLORD,
		// coins: 10000,
		level: 22,
		prestige: 360,
		trades: {
			'imports': {
				furs: 100,
				hides: 180,
				milk: 110,
				gems: 70,
				brass: 210,
				wheat: 280,
				clay: 300
			},
			'exports': {
				wax: 110,
				candles: 100,
				salt: 170,
				pearls: 120
			}
		},
		army: {
			'Militia': 40,
			'Axeman': 30,
			'Knight': 10,
			'Bowman': 20,
			'Crossbowman': 10,
			'Pikeman': 30
		},
		navy: {
			'Corsair': 0,
			'Caravel': 0,
			'Warship': 0
		},
		location: {
			x: 130,
			y: 230
		}
	},
	'Uruk': {
		nationality: city_builder.NATION_TYPE_SUMERIAN,
		ruler: 'Gilgamesh',
		avatar: 14,
		climate: city_builder.CLIMATE_TYPE_TROPICAL,
		personality: city_builder.PERSONALITY_TYPE_WARLORD,
		// coins: 80000,
		level: 26,
		prestige: 400,
		trades: {
			'imports': {
				wheat: 200,
				wood: 200,
				sugar: 100,
				sugarcane: 80,
				clay: 200
			},
			'exports': {
				glasses: 80,
				furcoats: 130,
				indigo: 120,
				wheat: 100
			}
		},
		army: {
			'Militia': 40,
			'Axeman': 30,
			'Knight': 10,
			'Bowman': 20,
			'Crossbowman': 10,
			'Pikeman': 30
		},
		navy: {
			'Corsair': 0,
			'Caravel': 0,
			'Warship': 0
		},
		location: {
			x: 400,
			y: 320
		}
	},
	'Yinxu': {
		nationality: city_builder.NATION_TYPE_CHINESE,
		ruler: 'Wu Ding',
		avatar: 15,
		climate: city_builder.CLIMATE_TYPE_TEMPERATE,
		personality: city_builder.PERSONALITY_TYPE_WARLORD,
		// coins: 240000,
		level: 22,
		prestige: 420,
		trades: {
			'imports': {
				gold: 110,
				goldores: 90,
				weapons: 100,
				salt: 130,
				stones: 200,
				gems: 50,
				pearls: 50
			},
			'exports': {
				silk: 170,
				glass: 220,
				roses: 70,
				cattle: 90,
				bread: 100,
				meat: 130,
				carpets: 80,
				cannons: 100
			}
		},
		army: {
			'Militia': 40,
			'Axeman': 30,
			'Knight': 10,
			'Bowman': 20,
			'Crossbowman': 10,
			'Pikeman': 30
		},
		navy: {
			'Corsair': 0,
			'Caravel': 0,
			'Warship': 0
		},
		location: {
			x: 760,
			y: 340
		}
	}
};
