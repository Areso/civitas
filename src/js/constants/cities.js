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
		coins: 230000,
		trades: {
			'imports': {
				gold: city_builder.GOODS_IMPORTANCE_MEDIUM,
				milk: city_builder.GOODS_IMPORTANCE_HIGH,
				goldores: city_builder.GOODS_IMPORTANCE_LOW,
				weapons: city_builder.GOODS_IMPORTANCE_LOW,
				quartz: city_builder.GOODS_IMPORTANCE_LOW,
				roses: city_builder.GOODS_IMPORTANCE_MEDIUM,
				wine: city_builder.GOODS_IMPORTANCE_VITAL,
				clay: city_builder.GOODS_IMPORTANCE_VITAL,
				fish: city_builder.GOODS_IMPORTANCE_MEDIUM
			},
			'exports': {
				hemp: city_builder.GOODS_IMPORTANCE_VITAL,
				indigo: city_builder.GOODS_IMPORTANCE_LOW,
				paper: city_builder.GOODS_IMPORTANCE_HIGH,
				stones: city_builder.GOODS_IMPORTANCE_LOW
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
		coins: 130000,
		prestige: 700,
		trades: {
			'imports': {
				wax: city_builder.GOODS_IMPORTANCE_LOW,
				sugar: city_builder.GOODS_IMPORTANCE_VITAL,
				sugarcane: city_builder.GOODS_IMPORTANCE_MEDIUM,
				glasses: city_builder.GOODS_IMPORTANCE_LOW,
				fish: city_builder.GOODS_IMPORTANCE_HIGH,
				candles: city_builder.GOODS_IMPORTANCE_LOW,
				bread: city_builder.GOODS_IMPORTANCE_VITAL,
				pearls: city_builder.GOODS_IMPORTANCE_LOW,
				salt: city_builder.GOODS_IMPORTANCE_LOW
			},
			'exports': {
				leather: city_builder.GOODS_IMPORTANCE_MEDIUM,
				indigo: city_builder.GOODS_IMPORTANCE_LOW,
				flour: city_builder.GOODS_IMPORTANCE_VITAL,
				glass: city_builder.GOODS_IMPORTANCE_MEDIUM,
				coal: city_builder.GOODS_IMPORTANCE_LOW,
				fish: city_builder.GOODS_IMPORTANCE_HIGH,
				wood: city_builder.GOODS_IMPORTANCE_VITAL
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
		coins: 200000,
		level: 22,
		prestige: 500,
		trades: {
			'imports': {
				flour: city_builder.GOODS_IMPORTANCE_LOW,
				milk: city_builder.GOODS_IMPORTANCE_VITAL,
				brass: city_builder.GOODS_IMPORTANCE_LOW,
				furs: city_builder.GOODS_IMPORTANCE_LOW,
				fish: city_builder.GOODS_IMPORTANCE_VITAL,
				cider: city_builder.GOODS_IMPORTANCE_LOW,
				silk: city_builder.GOODS_IMPORTANCE_HIGH,
				cattle: city_builder.GOODS_IMPORTANCE_MEDIUM,
				wheat: city_builder.GOODS_IMPORTANCE_VITAL
			},
			'exports': {
				clothes: city_builder.GOODS_IMPORTANCE_VITAL,
				fish: city_builder.GOODS_IMPORTANCE_LOW,
				coffeebeans: city_builder.GOODS_IMPORTANCE_HIGH,
				silk: city_builder.GOODS_IMPORTANCE_LOW
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
		coins: 200000,
		level: 35,
		prestige: 800,
		trades: {
			'imports': {
				barrels: city_builder.GOODS_IMPORTANCE_LOW,
				books: city_builder.GOODS_IMPORTANCE_LOW,
				paper: city_builder.GOODS_IMPORTANCE_LOW,
				coal: city_builder.GOODS_IMPORTANCE_VITAL,
				copper: city_builder.GOODS_IMPORTANCE_MEDIUM,
				indigo: city_builder.GOODS_IMPORTANCE_HIGH
			},
			'exports': {
				coal: city_builder.GOODS_IMPORTANCE_VITAL,
				ironores: city_builder.GOODS_IMPORTANCE_LOW,
				copper: city_builder.GOODS_IMPORTANCE_MEDIUM,
				goldores: city_builder.GOODS_IMPORTANCE_LOW,
				iron: city_builder.GOODS_IMPORTANCE_LOW,
				gold: city_builder.GOODS_IMPORTANCE_VITAL,
				brass: city_builder.GOODS_IMPORTANCE_LOW
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
		coins: 130000,
		level: 33,
		prestige: 780,
		trades: {
			'imports': {
				silk: city_builder.GOODS_IMPORTANCE_LOW,
				clothes: city_builder.GOODS_IMPORTANCE_HIGH,
				leather: city_builder.GOODS_IMPORTANCE_LOW,
				meat: city_builder.GOODS_IMPORTANCE_MEDIUM
			},
			'exports': {
				gold: city_builder.GOODS_IMPORTANCE_LOW,
				iron: city_builder.GOODS_IMPORTANCE_VITAL,
				ironores: city_builder.GOODS_IMPORTANCE_MEDIUM,
				copper: city_builder.GOODS_IMPORTANCE_HIGH,
				coal: city_builder.GOODS_IMPORTANCE_LOW
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
		coins: 30000,
		level: 20,
		prestige: 200,
		trades: {
			'imports': {
				furs: city_builder.GOODS_IMPORTANCE_LOW,
				hides: city_builder.GOODS_IMPORTANCE_LOW,
				milk: city_builder.GOODS_IMPORTANCE_MEDIUM,
				leather: city_builder.GOODS_IMPORTANCE_LOW,
				fish: city_builder.GOODS_IMPORTANCE_VITAL,
				furcoats: city_builder.GOODS_IMPORTANCE_VITAL
			},
			'exports': {
				wax: city_builder.GOODS_IMPORTANCE_LOW,
				candles: city_builder.GOODS_IMPORTANCE_LOW,
				salt: city_builder.GOODS_IMPORTANCE_MEDIUM
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
		coins: 330000,
		level: 38,
		prestige: 900,
		trades: {
			'imports': {
				perfume: city_builder.GOODS_IMPORTANCE_MEDIUM,
				coffee: city_builder.GOODS_IMPORTANCE_LOW,
				cider: city_builder.GOODS_IMPORTANCE_LOW,
				wine: city_builder.GOODS_IMPORTANCE_LOW,
				beer: city_builder.GOODS_IMPORTANCE_LOW,
				silk: city_builder.GOODS_IMPORTANCE_MEDIUM
			},
			'exports': {
				barrels: city_builder.GOODS_IMPORTANCE_MEDIUM,
				brine: city_builder.GOODS_IMPORTANCE_LOW,
				brass: city_builder.GOODS_IMPORTANCE_VITAL,
				candlesticks: city_builder.GOODS_IMPORTANCE_LOW,
				cattle: city_builder.GOODS_IMPORTANCE_VITAL,
				glass: city_builder.GOODS_IMPORTANCE_MEDIUM,
				gold: city_builder.GOODS_IMPORTANCE_MEDIUM,
				wheat: city_builder.GOODS_IMPORTANCE_MEDIUM,
				iron: city_builder.GOODS_IMPORTANCE_LOW,
				grapes: city_builder.GOODS_IMPORTANCE_HIGH,
				hemp: city_builder.GOODS_IMPORTANCE_HIGH,
				herbs: city_builder.GOODS_IMPORTANCE_HIGH,
				quartz: city_builder.GOODS_IMPORTANCE_MEDIUM,
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
		coins: 22000,
		level: 18,
		prestige: 160,
		trades: {
			'imports': {
				flour: city_builder.GOODS_IMPORTANCE_LOW,
				bread: city_builder.GOODS_IMPORTANCE_LOW,
				brass: city_builder.GOODS_IMPORTANCE_MEDIUM,
				coal: city_builder.GOODS_IMPORTANCE_VITAL
			},
			'exports': {
				wood: city_builder.GOODS_IMPORTANCE_LOW,
				stones: city_builder.GOODS_IMPORTANCE_VITAL,
				wine: city_builder.GOODS_IMPORTANCE_MEDIUM
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
		coins: 180000,
		level: 22,
		prestige: 200,
		trades: {
			'imports': {
				furs: city_builder.GOODS_IMPORTANCE_LOW,
				hides: city_builder.GOODS_IMPORTANCE_MEDIUM,
				milk: city_builder.GOODS_IMPORTANCE_LOW,
				leather: city_builder.GOODS_IMPORTANCE_LOW
			},
			'exports': {
				wax: city_builder.GOODS_IMPORTANCE_LOW,
				candles: city_builder.GOODS_IMPORTANCE_LOW,
				salt: city_builder.GOODS_IMPORTANCE_MEDIUM,
				sugarcane: city_builder.GOODS_IMPORTANCE_HIGH
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
		coins: 80000,
		level: 18,
		prestige: 300,
		trades: {
			'imports': {
				cider: city_builder.GOODS_IMPORTANCE_LOW,
				ropes: city_builder.GOODS_IMPORTANCE_LOW,
				wax: city_builder.GOODS_IMPORTANCE_MEDIUM,
				sugar: city_builder.GOODS_IMPORTANCE_LOW,
				wood: city_builder.GOODS_IMPORTANCE_VITAL,
				stones: city_builder.GOODS_IMPORTANCE_VITAL
			},
			'exports': {
				almonds: city_builder.GOODS_IMPORTANCE_LOW,
				roses: city_builder.GOODS_IMPORTANCE_HIGH,
				grapes: city_builder.GOODS_IMPORTANCE_LOW,
				hemp: city_builder.GOODS_IMPORTANCE_LOW,
				coffeebeans: city_builder.GOODS_IMPORTANCE_LOW,
				coffee: city_builder.GOODS_IMPORTANCE_LOW,
				spices: city_builder.GOODS_IMPORTANCE_MEDIUM
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
		coins: 280000,
		level: 31,
		prestige: 600,
		trades: {
			'imports': {
				meat: city_builder.GOODS_IMPORTANCE_LOW,
				milk: city_builder.GOODS_IMPORTANCE_LOW,
				weapons: city_builder.GOODS_IMPORTANCE_LOW,
				roses: city_builder.GOODS_IMPORTANCE_MEDIUM,
				perfume: city_builder.GOODS_IMPORTANCE_LOW,
				iron: city_builder.GOODS_IMPORTANCE_VITAL,
				ironores: city_builder.GOODS_IMPORTANCE_LOW
			},
			'exports': {
				brine: city_builder.GOODS_IMPORTANCE_MEDIUM,
				clothes: city_builder.GOODS_IMPORTANCE_LOW,
				glass: city_builder.GOODS_IMPORTANCE_HIGH,
				wheat: city_builder.GOODS_IMPORTANCE_VITAL,
				hides: city_builder.GOODS_IMPORTANCE_LOW,
				paper: city_builder.GOODS_IMPORTANCE_LOW
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
		coins: 110000,
		level: 21,
		prestige: 180,
		trades: {
			'imports': {
				meat: city_builder.GOODS_IMPORTANCE_LOW,
				iron: city_builder.GOODS_IMPORTANCE_HIGH,
				brass: city_builder.GOODS_IMPORTANCE_LOW,
				cider: city_builder.GOODS_IMPORTANCE_LOW,
				grapes: city_builder.GOODS_IMPORTANCE_LOW,
				coal: city_builder.GOODS_IMPORTANCE_MEDIUM,
				ironores: city_builder.GOODS_IMPORTANCE_LOW
			},
			'exports': {
				wine: city_builder.GOODS_IMPORTANCE_HIGH,
				silk: city_builder.GOODS_IMPORTANCE_LOW,
				wood: city_builder.GOODS_IMPORTANCE_MEDIUM,
				cattle: city_builder.GOODS_IMPORTANCE_LOW
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
		coins: 10000,
		level: 22,
		prestige: 360,
		trades: {
			'imports': {
				furs: city_builder.GOODS_IMPORTANCE_LOW,
				hides: city_builder.GOODS_IMPORTANCE_VITAL,
				milk: city_builder.GOODS_IMPORTANCE_MEDIUM,
				gems: city_builder.GOODS_IMPORTANCE_LOW,
				brass: city_builder.GOODS_IMPORTANCE_VITAL,
				wheat: city_builder.GOODS_IMPORTANCE_HIGH,
				clay: city_builder.GOODS_IMPORTANCE_LOW
			},
			'exports': {
				wax: city_builder.GOODS_IMPORTANCE_MEDIUM,
				candles: city_builder.GOODS_IMPORTANCE_LOW,
				salt: city_builder.GOODS_IMPORTANCE_VITAL,
				pearls: city_builder.GOODS_IMPORTANCE_MEDIUM
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
		coins: 80000,
		level: 26,
		prestige: 400,
		trades: {
			'imports': {
				wheat: city_builder.GOODS_IMPORTANCE_VITAL,
				wood: city_builder.GOODS_IMPORTANCE_HIGH,
				sugar: city_builder.GOODS_IMPORTANCE_LOW,
				sugarcane: city_builder.GOODS_IMPORTANCE_LOW,
				clay: city_builder.GOODS_IMPORTANCE_VITAL
			},
			'exports': {
				glasses: city_builder.GOODS_IMPORTANCE_LOW,
				furcoats: city_builder.GOODS_IMPORTANCE_MEDIUM,
				indigo: city_builder.GOODS_IMPORTANCE_LOW,
				wheat: city_builder.GOODS_IMPORTANCE_LOW
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
		coins: 240000,
		level: 22,
		prestige: 420,
		trades: {
			'imports': {
				gold: city_builder.GOODS_IMPORTANCE_LOW,
				goldores: city_builder.GOODS_IMPORTANCE_LOW,
				weapons: city_builder.GOODS_IMPORTANCE_LOW,
				salt: city_builder.GOODS_IMPORTANCE_MEDIUM,
				stones: city_builder.GOODS_IMPORTANCE_VITAL,
				gems: city_builder.GOODS_IMPORTANCE_LOW,
				pearls: city_builder.GOODS_IMPORTANCE_LOW
			},
			'exports': {
				silk: city_builder.GOODS_IMPORTANCE_MEDIUM,
				glass: city_builder.GOODS_IMPORTANCE_HIGH,
				roses: city_builder.GOODS_IMPORTANCE_LOW,
				cattle: city_builder.GOODS_IMPORTANCE_LOW,
				bread: city_builder.GOODS_IMPORTANCE_LOW,
				meat: city_builder.GOODS_IMPORTANCE_MEDIUM,
				carpets: city_builder.GOODS_IMPORTANCE_LOW,
				cannons: city_builder.GOODS_IMPORTANCE_LOW
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
