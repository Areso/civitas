/**
 * List of all the cities in the world.
 * 
 * @constant
 * @type {Object}
 */
civitas.CITIES = {
	'Byblos': {
		nationality: civitas.NATION_PHOENICIAN,
		ruler: 'Cronus',
		icon: 4,
		avatar: 1,
		climate: civitas.CLIMATE_TEMPERATE,
		personality: civitas.PERSONALITY_DIPLOMAT,
		level: 25,
		resources: {
			coins: 230000,
			prestige: 700,
			espionage: 400
		},
		trades: {
			'imports': {
				gold: civitas.IMPORTANCE_MEDIUM,
				milk: civitas.IMPORTANCE_HIGH,
				goldores: civitas.IMPORTANCE_LOW,
				weapons: civitas.IMPORTANCE_LOW,
				quartz: civitas.IMPORTANCE_LOW,
				roses: civitas.IMPORTANCE_MEDIUM,
				wine: civitas.IMPORTANCE_VITAL,
				clay: civitas.IMPORTANCE_VITAL,
				fish: civitas.IMPORTANCE_MEDIUM,
				catapults: civitas.IMPORTANCE_MEDIUM
			},
			'exports': {
				hemp: civitas.IMPORTANCE_VITAL,
				indigo: civitas.IMPORTANCE_LOW,
				paper: civitas.IMPORTANCE_HIGH,
				woodplanks: civitas.IMPORTANCE_MEDIUM,
				stones: civitas.IMPORTANCE_LOW
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
			'Galleon': 2,
			'Warship': 6,
			'Ship of the Line': 1
		},
		location: {
			x: 310,
			y: 190
		}
	},
	'Carthage': {
		nationality: civitas.NATION_CARTHAGINIAN,
		ruler: 'Elisa',
		avatar: 21,
		icon: 4,
		climate: civitas.CLIMATE_TROPICAL,
		personality: civitas.PERSONALITY_DIPLOMAT,
		level: 50,
		resources: {
			coins: 130000,
			prestige: 700,
			espionage: 1200
		},
		trades: {
			'imports': {
				wax: civitas.IMPORTANCE_LOW,
				sugar: civitas.IMPORTANCE_VITAL,
				sugarcane: civitas.IMPORTANCE_MEDIUM,
				glasses: civitas.IMPORTANCE_LOW,
				fish: civitas.IMPORTANCE_HIGH,
				mosaic: civitas.IMPORTANCE_HIGH,
				candles: civitas.IMPORTANCE_LOW,
				bread: civitas.IMPORTANCE_VITAL,
				pearls: civitas.IMPORTANCE_LOW,
				salt: civitas.IMPORTANCE_LOW
			},
			'exports': {
				leather: civitas.IMPORTANCE_MEDIUM,
				indigo: civitas.IMPORTANCE_LOW,
				flour: civitas.IMPORTANCE_VITAL,
				glass: civitas.IMPORTANCE_MEDIUM,
				coal: civitas.IMPORTANCE_LOW,
				fish: civitas.IMPORTANCE_HIGH,
				woodplanks: civitas.IMPORTANCE_VITAL,
				wood: civitas.IMPORTANCE_VITAL
			}
		},
		navy: {
			'Corsair': 6,
			'Caravel': 4,
			'Galleon': 2,
			'Warship': 3,
			'Ship of the Line': 4
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
			y: 176
		}
	},
	'Karakorum': {
		nationality: civitas.NATION_MONGOLIAN,
		ruler: 'Genghis Khan',
		avatar: 45,
		icon: 6,
		climate: civitas.CLIMATE_TEMPERATE,
		personality: civitas.PERSONALITY_WARLORD,
		level: 30,
		resources: {
			coins: 100000,
			prestige: 1000,
			espionage: 800
		},
		trades: {
			'imports': {
				wheat: civitas.IMPORTANCE_VITAL,
				wood: civitas.IMPORTANCE_HIGH,
				sugar: civitas.IMPORTANCE_LOW,
				sugarcane: civitas.IMPORTANCE_LOW,
				clay: civitas.IMPORTANCE_VITAL
			},
			'exports': {
				herbs: civitas.IMPORTANCE_HIGH,
				silver: civitas.IMPORTANCE_VITAL,
				glasses: civitas.IMPORTANCE_LOW,
				furcoats: civitas.IMPORTANCE_MEDIUM,
				indigo: civitas.IMPORTANCE_LOW,
				wheat: civitas.IMPORTANCE_LOW
			}
		},
		army: {
			'Militia': 1210,
			'Axeman': 520,
			'Crossbowman': 320,
			'Pikeman': 300
		},
		location: {
			x: 710,
			y: 150
		}
	},
	'Kyrene': {
		nationality: civitas.NATION_GREEK,
		ruler: 'Abdul',
		avatar: 33,
		icon: 5,
		climate: civitas.CLIMATE_TROPICAL,
		personality: civitas.PERSONALITY_WARLORD,
		level: 22,
		resources: {
			coins: 200000,
			prestige: 500,
			espionage: 300
		},
		trades: {
			'imports': {
				flour: civitas.IMPORTANCE_LOW,
				milk: civitas.IMPORTANCE_VITAL,
				brass: civitas.IMPORTANCE_LOW,
				furs: civitas.IMPORTANCE_LOW,
				fish: civitas.IMPORTANCE_VITAL,
				cider: civitas.IMPORTANCE_LOW,
				silk: civitas.IMPORTANCE_HIGH,
				cattle: civitas.IMPORTANCE_MEDIUM,
				wheat: civitas.IMPORTANCE_VITAL
			},
			'exports': {
				meat: civitas.IMPORTANCE_VITAL,
				clothes: civitas.IMPORTANCE_VITAL,
				fish: civitas.IMPORTANCE_LOW,
				coffeebeans: civitas.IMPORTANCE_HIGH,
				silk: civitas.IMPORTANCE_LOW
			}
		},
		army: {
			'Militia': 90,
			'Axeman': 70,
			'Bowman': 50,
			'Crossbowman': 30,
			'Pikeman': 90
		},
		location: {
			x: 240,
			y: 210
		}
	},
	'Menat Khufu': {
		nationality: civitas.NATION_EGYPTIAN,
		ruler: 'Khufu',
		avatar: 34,
		icon: 7,
		climate: civitas.CLIMATE_ARID,
		personality: civitas.PERSONALITY_DIPLOMAT,
		level: 45,
		resources: {
			coins: 200000,
			prestige: 800,
			espionage: 900
		},
		trades: {
			'imports': {
				barrels: civitas.IMPORTANCE_LOW,
				books: civitas.IMPORTANCE_LOW,
				paper: civitas.IMPORTANCE_LOW,
				coal: civitas.IMPORTANCE_VITAL,
				copper: civitas.IMPORTANCE_MEDIUM,
				mosaic: civitas.IMPORTANCE_MEDIUM,
				indigo: civitas.IMPORTANCE_HIGH
			},
			'exports': {
				coal: civitas.IMPORTANCE_VITAL,
				ironores: civitas.IMPORTANCE_LOW,
				copper: civitas.IMPORTANCE_MEDIUM,
				goldores: civitas.IMPORTANCE_LOW,
				iron: civitas.IMPORTANCE_LOW,
				gold: civitas.IMPORTANCE_VITAL,
				catapults: civitas.IMPORTANCE_MEDIUM,
				brass: civitas.IMPORTANCE_LOW
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
		location: {
			x: 280,
			y: 250
		}
	},
	'Niani': {
		nationality: civitas.NATION_MALINESE,
		ruler: 'Mansa Musa',
		avatar: 30,
		icon: 2,
		climate: civitas.CLIMATE_TROPICAL,
		personality: civitas.PERSONALITY_WARLORD,
		level: 21,
		resources: {
			coins: 200000,
			prestige: 100,
			espionage: 100
		},
		trades: {
			'imports': {
				meat: civitas.IMPORTANCE_LOW,
				milk: civitas.IMPORTANCE_LOW,
				weapons: civitas.IMPORTANCE_LOW,
				roses: civitas.IMPORTANCE_MEDIUM,
				perfume: civitas.IMPORTANCE_LOW,
				iron: civitas.IMPORTANCE_VITAL,
				ironores: civitas.IMPORTANCE_LOW
			},
			'exports': {
				brine: civitas.IMPORTANCE_MEDIUM,
				clothes: civitas.IMPORTANCE_LOW,
				glass: civitas.IMPORTANCE_HIGH,
				wheat: civitas.IMPORTANCE_VITAL,
				hides: civitas.IMPORTANCE_LOW,
				paper: civitas.IMPORTANCE_LOW
			}
		},
		army: {
			'Militia': 200,
			'Bowman': 200,
		},
		location: {
			x: 70,
			y: 280
		}
	},
	'Niniveh': {
		nationality: civitas.NATION_ASSYRIAN,
		ruler: 'Sennacherib',
		avatar: 37,
		icon: 4,
		climate: civitas.CLIMATE_ARID,
		personality: civitas.PERSONALITY_DIPLOMAT,
		level: 35,
		resources: {
			coins: 130000,
			prestige: 780,
			espionage: 400
		},
		trades: {
			'imports': {
				silk: civitas.IMPORTANCE_LOW,
				clothes: civitas.IMPORTANCE_HIGH,
				leather: civitas.IMPORTANCE_LOW,
				meat: civitas.IMPORTANCE_MEDIUM
			},
			'exports': {
				gold: civitas.IMPORTANCE_LOW,
				iron: civitas.IMPORTANCE_VITAL,
				ironores: civitas.IMPORTANCE_MEDIUM,
				copper: civitas.IMPORTANCE_HIGH,
				woodplanks: civitas.IMPORTANCE_MEDIUM,
				coal: civitas.IMPORTANCE_LOW
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
		location: {
			x: 380,
			y: 130
		}
	},
	'Novgorod': {
		nationality: civitas.NATION_RUSSIAN,
		ruler: 'Rurik',
		avatar: 5,
		icon: 5,
		climate: civitas.CLIMATE_POLAR,
		personality: civitas.PERSONALITY_WARLORD,
		level: 20,
		resources: {
			coins: 30000,
			prestige: 200,
			espionage: 150
		},
		trades: {
			'imports': {
				furs: civitas.IMPORTANCE_LOW,
				hides: civitas.IMPORTANCE_LOW,
				milk: civitas.IMPORTANCE_MEDIUM,
				leather: civitas.IMPORTANCE_LOW,
				fish: civitas.IMPORTANCE_VITAL,
				furcoats: civitas.IMPORTANCE_VITAL
			},
			'exports': {
				herbs: civitas.IMPORTANCE_VITAL,
				statues: civitas.IMPORTANCE_VITAL,
				wax: civitas.IMPORTANCE_LOW,
				candles: civitas.IMPORTANCE_LOW,
				salt: civitas.IMPORTANCE_MEDIUM
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
		location: {
			x: 330,
			y: 10
		}
	},
	'Rome': {
		nationality: civitas.NATION_ROMAN,
		ruler: 'Caesar',
		avatar: 17,
		icon: 4,
		climate: civitas.CLIMATE_TEMPERATE,
		personality: civitas.PERSONALITY_BALANCED,
		level: 50,
		resources: {
			coins: 330000,
			prestige: 900,
			espionage: 1900
		},
		trades: {
			'imports': {
				perfume: civitas.IMPORTANCE_MEDIUM,
				coffee: civitas.IMPORTANCE_LOW,
				cider: civitas.IMPORTANCE_LOW,
				wine: civitas.IMPORTANCE_LOW,
				beer: civitas.IMPORTANCE_LOW,
				mosaic: civitas.IMPORTANCE_VITAL,
				woodplanks: civitas.IMPORTANCE_HIGH,
				silk: civitas.IMPORTANCE_MEDIUM
			},
			'exports': {
				statues: civitas.IMPORTANCE_VITAL,
				barrels: civitas.IMPORTANCE_MEDIUM,
				brine: civitas.IMPORTANCE_LOW,
				brass: civitas.IMPORTANCE_VITAL,
				candlesticks: civitas.IMPORTANCE_LOW,
				cattle: civitas.IMPORTANCE_VITAL,
				glass: civitas.IMPORTANCE_MEDIUM,
				gold: civitas.IMPORTANCE_MEDIUM,
				wheat: civitas.IMPORTANCE_MEDIUM,
				iron: civitas.IMPORTANCE_LOW,
				grapes: civitas.IMPORTANCE_HIGH,
				hemp: civitas.IMPORTANCE_HIGH,
				herbs: civitas.IMPORTANCE_HIGH,
				quartz: civitas.IMPORTANCE_MEDIUM
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
		location: {
			x: 190,
			y: 140
		}
	},
	'Sarmizegetusa': {
		nationality: civitas.NATION_THRACIAN,
		ruler: 'Deceballus',
		avatar: 8,
		icon: 7,
		climate: civitas.CLIMATE_CONTINENTAL,
		personality: civitas.PERSONALITY_WARLORD,
		level: 18,
		resources: {
			coins: 22000,
			prestige: 160,
			espionage: 500
		},
		trades: {
			'imports': {
				flour: civitas.IMPORTANCE_LOW,
				bread: civitas.IMPORTANCE_LOW,
				brass: civitas.IMPORTANCE_MEDIUM,
				coal: civitas.IMPORTANCE_VITAL
			},
			'exports': {
				wood: civitas.IMPORTANCE_LOW,
				meat: civitas.IMPORTANCE_HIGH,
				stones: civitas.IMPORTANCE_VITAL,
				wine: civitas.IMPORTANCE_MEDIUM
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
		location: {
			x: 250,
			y: 110
		}
	},
	'Sigiriya': {
		nationality: civitas.NATION_INDIAN,
		ruler: 'Kashyapa',
		avatar: 40,
		icon: 7,
		climate: civitas.CLIMATE_TROPICAL,
		personality: civitas.PERSONALITY_BALANCED,
		level: 22,
		resources: {
			coins: 180000,
			prestige: 200,
			espionage: 450
		},
		trades: {
			'imports': {
				furs: civitas.IMPORTANCE_LOW,
				hides: civitas.IMPORTANCE_MEDIUM,
				milk: civitas.IMPORTANCE_LOW,
				leather: civitas.IMPORTANCE_LOW
			},
			'exports': {
				spyglasses: civitas.IMPORTANCE_VITAL,
				wax: civitas.IMPORTANCE_LOW,
				candles: civitas.IMPORTANCE_LOW,
				salt: civitas.IMPORTANCE_MEDIUM,
				sugarcane: civitas.IMPORTANCE_HIGH
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
			'Galleon': 2,
			'Warship': 2
		},
		location: {
			x: 600,
			y: 340
		}
	},
	'Selima Oasis': {
		nationality: civitas.NATION_SUDANESE,
		ruler: 'Pepi',
		avatar: 38,
		icon: 7,
		climate: civitas.CLIMATE_TROPICAL,
		personality: civitas.PERSONALITY_WARLORD,
		level: 18,
		resources: {
			coins: 80000,
			prestige: 300,
			espionage: 300
		},
		trades: {
			'imports': {
				cider: civitas.IMPORTANCE_LOW,
				ropes: civitas.IMPORTANCE_LOW,
				wax: civitas.IMPORTANCE_MEDIUM,
				sugar: civitas.IMPORTANCE_LOW,
				wood: civitas.IMPORTANCE_VITAL,
				woodplanks: civitas.IMPORTANCE_MEDIUM,
				stones: civitas.IMPORTANCE_VITAL
			},
			'exports': {
				almonds: civitas.IMPORTANCE_LOW,
				roses: civitas.IMPORTANCE_HIGH,
				grapes: civitas.IMPORTANCE_LOW,
				hemp: civitas.IMPORTANCE_LOW,
				coffeebeans: civitas.IMPORTANCE_LOW,
				coffee: civitas.IMPORTANCE_LOW,
				catapults: civitas.IMPORTANCE_MEDIUM,
				spices: civitas.IMPORTANCE_MEDIUM
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
		location: {
			x: 300,
			y: 340
		}
	},
	'Taruga': {
		nationality: civitas.NATION_NIGERIAN,
		ruler: 'Samun',
		avatar: 30,
		icon: 2,
		climate: civitas.CLIMATE_TROPICAL,
		personality: civitas.PERSONALITY_WARLORD,
		level: 16,
		resources: {
			coins: 20000,
			prestige: 10,
			espionage: 50
		},
		trades: {
			'imports': {
				meat: civitas.IMPORTANCE_LOW,
				milk: civitas.IMPORTANCE_LOW,
				weapons: civitas.IMPORTANCE_LOW,
				roses: civitas.IMPORTANCE_MEDIUM,
				perfume: civitas.IMPORTANCE_LOW,
				iron: civitas.IMPORTANCE_VITAL,
				ironores: civitas.IMPORTANCE_LOW
			},
			'exports': {
				brine: civitas.IMPORTANCE_MEDIUM,
				clothes: civitas.IMPORTANCE_LOW,
				glass: civitas.IMPORTANCE_HIGH,
				wheat: civitas.IMPORTANCE_VITAL,
				hides: civitas.IMPORTANCE_LOW,
				paper: civitas.IMPORTANCE_LOW
			}
		},
		army: {
			'Militia': 120,
			'Bowman': 32,
		},
		location: {
			x: 190,
			y: 310
		}
	},
	'Thebes': {
		nationality: civitas.NATION_EGYPTIAN,
		ruler: 'Hatshepsut',
		avatar: 36,
		icon: 4,
		climate: civitas.CLIMATE_TROPICAL,
		personality: civitas.PERSONALITY_DIPLOMAT,
		level: 38,
		resources: {
			coins: 280000,
			prestige: 600,
			espionage: 580
		},
		trades: {
			'imports': {
				meat: civitas.IMPORTANCE_LOW,
				milk: civitas.IMPORTANCE_LOW,
				weapons: civitas.IMPORTANCE_LOW,
				roses: civitas.IMPORTANCE_MEDIUM,
				perfume: civitas.IMPORTANCE_LOW,
				iron: civitas.IMPORTANCE_VITAL,
				ironores: civitas.IMPORTANCE_LOW
			},
			'exports': {
				brine: civitas.IMPORTANCE_MEDIUM,
				clothes: civitas.IMPORTANCE_LOW,
				glass: civitas.IMPORTANCE_HIGH,
				wheat: civitas.IMPORTANCE_VITAL,
				hides: civitas.IMPORTANCE_LOW,
				paper: civitas.IMPORTANCE_LOW
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
		location: {
			x: 330,
			y: 300
		}
	},
	'Toledo': {
		nationality: civitas.NATION_SPANISH,
		ruler: 'Juan Luiz',
		avatar: 12,
		icon: 5,
		climate: civitas.CLIMATE_TEMPERATE,
		personality: civitas.PERSONALITY_BALANCED,
		level: 21,
		resources: {
			coins: 110000,
			prestige: 180,
			espionage: 200
		},
		trades: {
			'imports': {
				meat: civitas.IMPORTANCE_LOW,
				iron: civitas.IMPORTANCE_HIGH,
				brass: civitas.IMPORTANCE_LOW,
				cider: civitas.IMPORTANCE_LOW,
				grapes: civitas.IMPORTANCE_LOW,
				coal: civitas.IMPORTANCE_MEDIUM,
				woodplanks: civitas.IMPORTANCE_HIGH,
				ironores: civitas.IMPORTANCE_LOW
			},
			'exports': {
				wine: civitas.IMPORTANCE_HIGH,
				silk: civitas.IMPORTANCE_LOW,
				wood: civitas.IMPORTANCE_MEDIUM,
				cattle: civitas.IMPORTANCE_LOW,
				statues: civitas.IMPORTANCE_VITAL
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
		location: {
			x: 90,
			y: 150
		}
	},
	'Tournai': {
		nationality: civitas.NATION_FRANKS,
		ruler: 'Clovis',
		avatar: 44,
		icon: 5,
		climate: civitas.CLIMATE_CONTINENTAL,
		personality: civitas.PERSONALITY_WARLORD,
		level: 22,
		resources: {
			coins: 10000,
			prestige: 360,
			espionage: 500
		},
		trades: {
			'imports': {
				furs: civitas.IMPORTANCE_LOW,
				hides: civitas.IMPORTANCE_VITAL,
				milk: civitas.IMPORTANCE_MEDIUM,
				gems: civitas.IMPORTANCE_LOW,
				brass: civitas.IMPORTANCE_VITAL,
				wheat: civitas.IMPORTANCE_HIGH,
				catapults: civitas.IMPORTANCE_MEDIUM,
				clay: civitas.IMPORTANCE_LOW
			},
			'exports': {
				silver: civitas.IMPORTANCE_VITAL,
				wax: civitas.IMPORTANCE_MEDIUM,
				candles: civitas.IMPORTANCE_LOW,
				salt: civitas.IMPORTANCE_VITAL,
				pearls: civitas.IMPORTANCE_MEDIUM
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
		location: {
			x: 130,
			y: 80
		}
	},
	'Uruk': {
		nationality: civitas.NATION_SUMERIAN,
		ruler: 'Gilgamesh',
		avatar: 14,
		icon: 7,
		climate: civitas.CLIMATE_TROPICAL,
		personality: civitas.PERSONALITY_WARLORD,
		level: 26,
		resources: {
			coins: 80000,
			prestige: 400,
			espionage: 500
		},
		trades: {
			'imports': {
				wheat: civitas.IMPORTANCE_VITAL,
				mosaic: civitas.IMPORTANCE_MEDIUM,
				wood: civitas.IMPORTANCE_HIGH,
				sugar: civitas.IMPORTANCE_LOW,
				sugarcane: civitas.IMPORTANCE_LOW,
				clay: civitas.IMPORTANCE_VITAL
			},
			'exports': {
				silver: civitas.IMPORTANCE_VITAL,
				glasses: civitas.IMPORTANCE_LOW,
				furcoats: civitas.IMPORTANCE_MEDIUM,
				indigo: civitas.IMPORTANCE_LOW,
				woodplanks: civitas.IMPORTANCE_MEDIUM,
				wheat: civitas.IMPORTANCE_LOW
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
		location: {
			x: 400,
			y: 170
		}
	},
	'Xinjiang': {
		nationality: civitas.NATION_CHINESE,
		ruler: 'Gaozu',
		avatar: 15,
		icon: 7,
		climate: civitas.CLIMATE_TEMPERATE,
		personality: civitas.PERSONALITY_BALANCED,
		level: 29,
		resources: {
			coins: 240000,
			prestige: 500,
			espionage: 800
		},
		trades: {
			'imports': {
				salt: civitas.IMPORTANCE_MEDIUM,
				stones: civitas.IMPORTANCE_VITAL,
				gems: civitas.IMPORTANCE_LOW,
				woodplanks: civitas.IMPORTANCE_MEDIUM,
				pearls: civitas.IMPORTANCE_LOW
			},
			'exports': {
				donkeys: civitas.IMPORTANCE_VITAL,
				sulphur: civitas.IMPORTANCE_VITAL,
				silk: civitas.IMPORTANCE_MEDIUM,
				glass: civitas.IMPORTANCE_HIGH,
				woodplanks: civitas.IMPORTANCE_MEDIUM,
				meat: civitas.IMPORTANCE_HIGH,
				carpets: civitas.IMPORTANCE_LOW,
				cannons: civitas.IMPORTANCE_LOW
			}
		},
		army: {
			'Militia': 80,
			'Axeman': 40,
			'Bowman': 10,
			'Crossbowman': 30,
			'Pikeman': 10
		},
		location: {
			x: 600,
			y: 200
		}
	},
	'Yinxu': {
		nationality: civitas.NATION_CHINESE,
		ruler: 'Wu Ding',
		avatar: 15,
		icon: 7,
		climate: civitas.CLIMATE_TEMPERATE,
		personality: civitas.PERSONALITY_WARLORD,
		level: 22,
		resources: {
			coins: 240000,
			prestige: 420,
			espionage: 700
		},
		trades: {
			'imports': {
				gold: civitas.IMPORTANCE_LOW,
				goldores: civitas.IMPORTANCE_LOW,
				weapons: civitas.IMPORTANCE_LOW,
				salt: civitas.IMPORTANCE_MEDIUM,
				stones: civitas.IMPORTANCE_VITAL,
				gems: civitas.IMPORTANCE_LOW,
				pearls: civitas.IMPORTANCE_LOW
			},
			'exports': {
				donkeys: civitas.IMPORTANCE_VITAL,
				sulphur: civitas.IMPORTANCE_VITAL,
				silk: civitas.IMPORTANCE_MEDIUM,
				glass: civitas.IMPORTANCE_HIGH,
				roses: civitas.IMPORTANCE_LOW,
				cattle: civitas.IMPORTANCE_LOW,
				bread: civitas.IMPORTANCE_LOW,
				meat: civitas.IMPORTANCE_MEDIUM,
				carpets: civitas.IMPORTANCE_LOW,
				cannons: civitas.IMPORTANCE_LOW
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
		location: {
			x: 760,
			y: 240
		}
	}
};
