/**
 * List of all the cities in the world.
 * 
 * @constant
 * @type {Object}
 */
civitas.CITIES = {
	'Byblos': {
		nationality: civitas.NATION_TYPE_PHOENICIAN,
		ruler: 'Cronus',
		icon: 4,
		avatar: 1,
		climate: civitas.CLIMATE_TYPE_TEMPERATE,
		personality: civitas.PERSONALITY_TYPE_DIPLOMAT,
		level: 25,
		resources: {
			'coins': 230000,
			'prestige': 700,
			'espionage': 400
		},
		trades: {
			'imports': {
				gold: civitas.GOODS_IMPORTANCE_MEDIUM,
				milk: civitas.GOODS_IMPORTANCE_HIGH,
				goldores: civitas.GOODS_IMPORTANCE_LOW,
				weapons: civitas.GOODS_IMPORTANCE_LOW,
				quartz: civitas.GOODS_IMPORTANCE_LOW,
				roses: civitas.GOODS_IMPORTANCE_MEDIUM,
				wine: civitas.GOODS_IMPORTANCE_VITAL,
				clay: civitas.GOODS_IMPORTANCE_VITAL,
				fish: civitas.GOODS_IMPORTANCE_MEDIUM
			},
			'exports': {
				hemp: civitas.GOODS_IMPORTANCE_VITAL,
				indigo: civitas.GOODS_IMPORTANCE_LOW,
				paper: civitas.GOODS_IMPORTANCE_HIGH,
				stones: civitas.GOODS_IMPORTANCE_LOW
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
		nationality: civitas.NATION_TYPE_CARTHAGINIAN,
		ruler: 'Elisa',
		avatar: 21,
		icon: 4,
		climate: civitas.CLIMATE_TYPE_TROPICAL,
		personality: civitas.PERSONALITY_TYPE_DIPLOMAT,
		level: 50,
		resources: {
			'coins': 130000,
			'prestige': 700,
			'espionage': 1200
		},
		trades: {
			'imports': {
				wax: civitas.GOODS_IMPORTANCE_LOW,
				sugar: civitas.GOODS_IMPORTANCE_VITAL,
				sugarcane: civitas.GOODS_IMPORTANCE_MEDIUM,
				glasses: civitas.GOODS_IMPORTANCE_LOW,
				fish: civitas.GOODS_IMPORTANCE_HIGH,
				candles: civitas.GOODS_IMPORTANCE_LOW,
				bread: civitas.GOODS_IMPORTANCE_VITAL,
				pearls: civitas.GOODS_IMPORTANCE_LOW,
				salt: civitas.GOODS_IMPORTANCE_LOW
			},
			'exports': {
				leather: civitas.GOODS_IMPORTANCE_MEDIUM,
				indigo: civitas.GOODS_IMPORTANCE_LOW,
				flour: civitas.GOODS_IMPORTANCE_VITAL,
				glass: civitas.GOODS_IMPORTANCE_MEDIUM,
				coal: civitas.GOODS_IMPORTANCE_LOW,
				fish: civitas.GOODS_IMPORTANCE_HIGH,
				wood: civitas.GOODS_IMPORTANCE_VITAL
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
		nationality: civitas.NATION_TYPE_MONGOLIAN,
		ruler: 'Genghis Khan',
		avatar: 45,
		icon: 6,
		climate: civitas.CLIMATE_TYPE_TEMPERATE,
		personality: civitas.PERSONALITY_TYPE_WARLORD,
		level: 30,
		resources: {
			'coins': 100000,
			'prestige': 1000,
			'espionage': 800
		},
		trades: {
			'imports': {
				wheat: civitas.GOODS_IMPORTANCE_VITAL,
				wood: civitas.GOODS_IMPORTANCE_HIGH,
				sugar: civitas.GOODS_IMPORTANCE_LOW,
				sugarcane: civitas.GOODS_IMPORTANCE_LOW,
				clay: civitas.GOODS_IMPORTANCE_VITAL
			},
			'exports': {
				silver: civitas.GOODS_IMPORTANCE_VITAL,
				glasses: civitas.GOODS_IMPORTANCE_LOW,
				furcoats: civitas.GOODS_IMPORTANCE_MEDIUM,
				indigo: civitas.GOODS_IMPORTANCE_LOW,
				wheat: civitas.GOODS_IMPORTANCE_LOW
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
		nationality: civitas.NATION_TYPE_GREEK,
		ruler: 'Abdul',
		avatar: 33,
		icon: 5,
		climate: civitas.CLIMATE_TYPE_TROPICAL,
		personality: civitas.PERSONALITY_TYPE_WARLORD,
		level: 22,
		resources: {
			'coins': 200000,
			'prestige': 500,
			'espionage': 300
		},
		trades: {
			'imports': {
				flour: civitas.GOODS_IMPORTANCE_LOW,
				milk: civitas.GOODS_IMPORTANCE_VITAL,
				brass: civitas.GOODS_IMPORTANCE_LOW,
				furs: civitas.GOODS_IMPORTANCE_LOW,
				fish: civitas.GOODS_IMPORTANCE_VITAL,
				cider: civitas.GOODS_IMPORTANCE_LOW,
				silk: civitas.GOODS_IMPORTANCE_HIGH,
				cattle: civitas.GOODS_IMPORTANCE_MEDIUM,
				wheat: civitas.GOODS_IMPORTANCE_VITAL
			},
			'exports': {
				clothes: civitas.GOODS_IMPORTANCE_VITAL,
				fish: civitas.GOODS_IMPORTANCE_LOW,
				coffeebeans: civitas.GOODS_IMPORTANCE_HIGH,
				silk: civitas.GOODS_IMPORTANCE_LOW
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
		nationality: civitas.NATION_TYPE_EGYPTIAN,
		ruler: 'Khufu',
		avatar: 34,
		icon: 7,
		climate: civitas.CLIMATE_TYPE_ARID,
		personality: civitas.PERSONALITY_TYPE_DIPLOMAT,
		level: 45,
		resources: {
			'coins': 200000,
			'prestige': 800,
			'espionage': 900
		},
		trades: {
			'imports': {
				barrels: civitas.GOODS_IMPORTANCE_LOW,
				books: civitas.GOODS_IMPORTANCE_LOW,
				paper: civitas.GOODS_IMPORTANCE_LOW,
				coal: civitas.GOODS_IMPORTANCE_VITAL,
				copper: civitas.GOODS_IMPORTANCE_MEDIUM,
				indigo: civitas.GOODS_IMPORTANCE_HIGH
			},
			'exports': {
				coal: civitas.GOODS_IMPORTANCE_VITAL,
				ironores: civitas.GOODS_IMPORTANCE_LOW,
				copper: civitas.GOODS_IMPORTANCE_MEDIUM,
				goldores: civitas.GOODS_IMPORTANCE_LOW,
				iron: civitas.GOODS_IMPORTANCE_LOW,
				gold: civitas.GOODS_IMPORTANCE_VITAL,
				brass: civitas.GOODS_IMPORTANCE_LOW
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
		nationality: civitas.NATION_TYPE_MALINESE,
		ruler: 'Mansa Musa',
		avatar: 30,
		icon: 2,
		climate: civitas.CLIMATE_TYPE_TROPICAL,
		personality: civitas.PERSONALITY_TYPE_WARLORD,
		level: 21,
		resources: {
			'coins': 200000,
			'prestige': 100,
			'espionage': 100
		},
		trades: {
			'imports': {
				meat: civitas.GOODS_IMPORTANCE_LOW,
				milk: civitas.GOODS_IMPORTANCE_LOW,
				weapons: civitas.GOODS_IMPORTANCE_LOW,
				roses: civitas.GOODS_IMPORTANCE_MEDIUM,
				perfume: civitas.GOODS_IMPORTANCE_LOW,
				iron: civitas.GOODS_IMPORTANCE_VITAL,
				ironores: civitas.GOODS_IMPORTANCE_LOW
			},
			'exports': {
				brine: civitas.GOODS_IMPORTANCE_MEDIUM,
				clothes: civitas.GOODS_IMPORTANCE_LOW,
				glass: civitas.GOODS_IMPORTANCE_HIGH,
				wheat: civitas.GOODS_IMPORTANCE_VITAL,
				hides: civitas.GOODS_IMPORTANCE_LOW,
				paper: civitas.GOODS_IMPORTANCE_LOW
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
		nationality: civitas.NATION_TYPE_ASSYRIAN,
		ruler: 'Sennacherib',
		avatar: 37,
		icon: 4,
		climate: civitas.CLIMATE_TYPE_ARID,
		personality: civitas.PERSONALITY_TYPE_DIPLOMAT,
		level: 35,
		resources: {
			'coins': 130000,
			'prestige': 780,
			'espionage': 400
		},
		trades: {
			'imports': {
				silk: civitas.GOODS_IMPORTANCE_LOW,
				clothes: civitas.GOODS_IMPORTANCE_HIGH,
				leather: civitas.GOODS_IMPORTANCE_LOW,
				meat: civitas.GOODS_IMPORTANCE_MEDIUM
			},
			'exports': {
				gold: civitas.GOODS_IMPORTANCE_LOW,
				iron: civitas.GOODS_IMPORTANCE_VITAL,
				ironores: civitas.GOODS_IMPORTANCE_MEDIUM,
				copper: civitas.GOODS_IMPORTANCE_HIGH,
				coal: civitas.GOODS_IMPORTANCE_LOW
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
		nationality: civitas.NATION_TYPE_RUSSIAN,
		ruler: 'Rurik',
		avatar: 5,
		icon: 5,
		climate: civitas.CLIMATE_TYPE_POLAR,
		personality: civitas.PERSONALITY_TYPE_WARLORD,
		level: 20,
		resources: {
			'coins': 30000,
			'prestige': 200,
			'espionage': 150
		},
		trades: {
			'imports': {
				furs: civitas.GOODS_IMPORTANCE_LOW,
				hides: civitas.GOODS_IMPORTANCE_LOW,
				milk: civitas.GOODS_IMPORTANCE_MEDIUM,
				leather: civitas.GOODS_IMPORTANCE_LOW,
				fish: civitas.GOODS_IMPORTANCE_VITAL,
				furcoats: civitas.GOODS_IMPORTANCE_VITAL
			},
			'exports': {
				statues: civitas.GOODS_IMPORTANCE_VITAL,
				wax: civitas.GOODS_IMPORTANCE_LOW,
				candles: civitas.GOODS_IMPORTANCE_LOW,
				salt: civitas.GOODS_IMPORTANCE_MEDIUM
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
		nationality: civitas.NATION_TYPE_ROMAN,
		ruler: 'Caesar',
		avatar: 17,
		icon: 4,
		climate: civitas.CLIMATE_TYPE_TEMPERATE,
		personality: civitas.PERSONALITY_TYPE_BALANCED,
		level: 50,
		resources: {
			'coins': 330000,
			'prestige': 900,
			'espionage': 1900
		},
		trades: {
			'imports': {
				perfume: civitas.GOODS_IMPORTANCE_MEDIUM,
				coffee: civitas.GOODS_IMPORTANCE_LOW,
				cider: civitas.GOODS_IMPORTANCE_LOW,
				wine: civitas.GOODS_IMPORTANCE_LOW,
				beer: civitas.GOODS_IMPORTANCE_LOW,
				silk: civitas.GOODS_IMPORTANCE_MEDIUM
			},
			'exports': {
				robes: civitas.GOODS_IMPORTANCE_VITAL,
				statues: civitas.GOODS_IMPORTANCE_VITAL,
				barrels: civitas.GOODS_IMPORTANCE_MEDIUM,
				brine: civitas.GOODS_IMPORTANCE_LOW,
				brass: civitas.GOODS_IMPORTANCE_VITAL,
				candlesticks: civitas.GOODS_IMPORTANCE_LOW,
				cattle: civitas.GOODS_IMPORTANCE_VITAL,
				glass: civitas.GOODS_IMPORTANCE_MEDIUM,
				gold: civitas.GOODS_IMPORTANCE_MEDIUM,
				wheat: civitas.GOODS_IMPORTANCE_MEDIUM,
				iron: civitas.GOODS_IMPORTANCE_LOW,
				grapes: civitas.GOODS_IMPORTANCE_HIGH,
				hemp: civitas.GOODS_IMPORTANCE_HIGH,
				herbs: civitas.GOODS_IMPORTANCE_HIGH,
				quartz: civitas.GOODS_IMPORTANCE_MEDIUM
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
		nationality: civitas.NATION_TYPE_THRACIAN,
		ruler: 'Deceballus',
		avatar: 8,
		icon: 7,
		climate: civitas.CLIMATE_TYPE_CONTINENTAL,
		personality: civitas.PERSONALITY_TYPE_WARLORD,
		level: 18,
		resources: {
			'coins': 22000,
			'prestige': 160,
			'espionage': 500
		},
		trades: {
			'imports': {
				flour: civitas.GOODS_IMPORTANCE_LOW,
				bread: civitas.GOODS_IMPORTANCE_LOW,
				brass: civitas.GOODS_IMPORTANCE_MEDIUM,
				coal: civitas.GOODS_IMPORTANCE_VITAL
			},
			'exports': {
				wood: civitas.GOODS_IMPORTANCE_LOW,
				stones: civitas.GOODS_IMPORTANCE_VITAL,
				wine: civitas.GOODS_IMPORTANCE_MEDIUM
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
		nationality: civitas.NATION_TYPE_INDIAN,
		ruler: 'Kashyapa',
		avatar: 40,
		icon: 7,
		climate: civitas.CLIMATE_TYPE_TROPICAL,
		personality: civitas.PERSONALITY_TYPE_BALANCED,
		level: 22,
		resources: {
			'coins': 180000,
			'prestige': 200,
			'espionage': 450
		},
		trades: {
			'imports': {
				furs: civitas.GOODS_IMPORTANCE_LOW,
				hides: civitas.GOODS_IMPORTANCE_MEDIUM,
				milk: civitas.GOODS_IMPORTANCE_LOW,
				leather: civitas.GOODS_IMPORTANCE_LOW
			},
			'exports': {
				spyglasses: civitas.GOODS_IMPORTANCE_VITAL,
				wax: civitas.GOODS_IMPORTANCE_LOW,
				candles: civitas.GOODS_IMPORTANCE_LOW,
				salt: civitas.GOODS_IMPORTANCE_MEDIUM,
				sugarcane: civitas.GOODS_IMPORTANCE_HIGH
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
		nationality: civitas.NATION_TYPE_SUDANESE,
		ruler: 'Pepi',
		avatar: 38,
		icon: 7,
		climate: civitas.CLIMATE_TYPE_TROPICAL,
		personality: civitas.PERSONALITY_TYPE_WARLORD,
		level: 18,
		resources: {
			'coins': 80000,
			'prestige': 300,
			'espionage': 300
		},
		trades: {
			'imports': {
				cider: civitas.GOODS_IMPORTANCE_LOW,
				ropes: civitas.GOODS_IMPORTANCE_LOW,
				wax: civitas.GOODS_IMPORTANCE_MEDIUM,
				sugar: civitas.GOODS_IMPORTANCE_LOW,
				wood: civitas.GOODS_IMPORTANCE_VITAL,
				stones: civitas.GOODS_IMPORTANCE_VITAL
			},
			'exports': {
				almonds: civitas.GOODS_IMPORTANCE_LOW,
				roses: civitas.GOODS_IMPORTANCE_HIGH,
				grapes: civitas.GOODS_IMPORTANCE_LOW,
				hemp: civitas.GOODS_IMPORTANCE_LOW,
				coffeebeans: civitas.GOODS_IMPORTANCE_LOW,
				coffee: civitas.GOODS_IMPORTANCE_LOW,
				spices: civitas.GOODS_IMPORTANCE_MEDIUM
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
		nationality: civitas.NATION_TYPE_NIGERIAN,
		ruler: 'Samun',
		avatar: 30,
		icon: 2,
		climate: civitas.CLIMATE_TYPE_TROPICAL,
		personality: civitas.PERSONALITY_TYPE_WARLORD,
		level: 16,
		resources: {
			'coins': 20000,
			'prestige': 10,
			'espionage': 50
		},
		trades: {
			'imports': {
				meat: civitas.GOODS_IMPORTANCE_LOW,
				milk: civitas.GOODS_IMPORTANCE_LOW,
				weapons: civitas.GOODS_IMPORTANCE_LOW,
				roses: civitas.GOODS_IMPORTANCE_MEDIUM,
				perfume: civitas.GOODS_IMPORTANCE_LOW,
				iron: civitas.GOODS_IMPORTANCE_VITAL,
				ironores: civitas.GOODS_IMPORTANCE_LOW
			},
			'exports': {
				brine: civitas.GOODS_IMPORTANCE_MEDIUM,
				clothes: civitas.GOODS_IMPORTANCE_LOW,
				glass: civitas.GOODS_IMPORTANCE_HIGH,
				wheat: civitas.GOODS_IMPORTANCE_VITAL,
				hides: civitas.GOODS_IMPORTANCE_LOW,
				paper: civitas.GOODS_IMPORTANCE_LOW
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
		nationality: civitas.NATION_TYPE_EGYPTIAN,
		ruler: 'Hatshepsut',
		avatar: 36,
		icon: 4,
		climate: civitas.CLIMATE_TYPE_TROPICAL,
		personality: civitas.PERSONALITY_TYPE_DIPLOMAT,
		level: 38,
		resources: {
			'coins': 280000,
			'prestige': 600,
			'espionage': 580
		},
		trades: {
			'imports': {
				meat: civitas.GOODS_IMPORTANCE_LOW,
				milk: civitas.GOODS_IMPORTANCE_LOW,
				weapons: civitas.GOODS_IMPORTANCE_LOW,
				roses: civitas.GOODS_IMPORTANCE_MEDIUM,
				perfume: civitas.GOODS_IMPORTANCE_LOW,
				iron: civitas.GOODS_IMPORTANCE_VITAL,
				ironores: civitas.GOODS_IMPORTANCE_LOW
			},
			'exports': {
				brine: civitas.GOODS_IMPORTANCE_MEDIUM,
				clothes: civitas.GOODS_IMPORTANCE_LOW,
				glass: civitas.GOODS_IMPORTANCE_HIGH,
				wheat: civitas.GOODS_IMPORTANCE_VITAL,
				hides: civitas.GOODS_IMPORTANCE_LOW,
				paper: civitas.GOODS_IMPORTANCE_LOW
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
		nationality: civitas.NATION_TYPE_SPANISH,
		ruler: 'Juan Luiz',
		avatar: 12,
		icon: 5,
		climate: civitas.CLIMATE_TYPE_TEMPERATE,
		personality: civitas.PERSONALITY_TYPE_BALANCED,
		level: 21,
		resources: {
			'coins': 110000,
			'prestige': 180,
			'espionage': 200
		},
		trades: {
			'imports': {
				meat: civitas.GOODS_IMPORTANCE_LOW,
				iron: civitas.GOODS_IMPORTANCE_HIGH,
				brass: civitas.GOODS_IMPORTANCE_LOW,
				cider: civitas.GOODS_IMPORTANCE_LOW,
				grapes: civitas.GOODS_IMPORTANCE_LOW,
				coal: civitas.GOODS_IMPORTANCE_MEDIUM,
				ironores: civitas.GOODS_IMPORTANCE_LOW
			},
			'exports': {
				mosaic: civitas.GOODS_IMPORTANCE_VITAL,
				wine: civitas.GOODS_IMPORTANCE_HIGH,
				silk: civitas.GOODS_IMPORTANCE_LOW,
				wood: civitas.GOODS_IMPORTANCE_MEDIUM,
				cattle: civitas.GOODS_IMPORTANCE_LOW,
				statues: civitas.GOODS_IMPORTANCE_VITAL
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
		nationality: civitas.NATION_TYPE_FRANKS,
		ruler: 'Clovis',
		avatar: 44,
		icon: 5,
		climate: civitas.CLIMATE_TYPE_CONTINENTAL,
		personality: civitas.PERSONALITY_TYPE_WARLORD,
		level: 22,
		resources: {
			'coins': 10000,
			'prestige': 360,
			'espionage': 500
		},
		trades: {
			'imports': {
				furs: civitas.GOODS_IMPORTANCE_LOW,
				hides: civitas.GOODS_IMPORTANCE_VITAL,
				milk: civitas.GOODS_IMPORTANCE_MEDIUM,
				gems: civitas.GOODS_IMPORTANCE_LOW,
				brass: civitas.GOODS_IMPORTANCE_VITAL,
				wheat: civitas.GOODS_IMPORTANCE_HIGH,
				clay: civitas.GOODS_IMPORTANCE_LOW
			},
			'exports': {
				silver: civitas.GOODS_IMPORTANCE_VITAL,
				wax: civitas.GOODS_IMPORTANCE_MEDIUM,
				candles: civitas.GOODS_IMPORTANCE_LOW,
				salt: civitas.GOODS_IMPORTANCE_VITAL,
				pearls: civitas.GOODS_IMPORTANCE_MEDIUM
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
		nationality: civitas.NATION_TYPE_SUMERIAN,
		ruler: 'Gilgamesh',
		avatar: 14,
		icon: 7,
		climate: civitas.CLIMATE_TYPE_TROPICAL,
		personality: civitas.PERSONALITY_TYPE_WARLORD,
		level: 26,
		resources: {
			'coins': 80000,
			'prestige': 400,
			'espionage': 500
		},
		trades: {
			'imports': {
				wheat: civitas.GOODS_IMPORTANCE_VITAL,
				wood: civitas.GOODS_IMPORTANCE_HIGH,
				sugar: civitas.GOODS_IMPORTANCE_LOW,
				sugarcane: civitas.GOODS_IMPORTANCE_LOW,
				clay: civitas.GOODS_IMPORTANCE_VITAL
			},
			'exports': {
				silver: civitas.GOODS_IMPORTANCE_VITAL,
				glasses: civitas.GOODS_IMPORTANCE_LOW,
				furcoats: civitas.GOODS_IMPORTANCE_MEDIUM,
				indigo: civitas.GOODS_IMPORTANCE_LOW,
				wheat: civitas.GOODS_IMPORTANCE_LOW
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
		nationality: civitas.NATION_TYPE_CHINESE,
		ruler: 'Gaozu',
		avatar: 15,
		icon: 7,
		climate: civitas.CLIMATE_TYPE_TEMPERATE,
		personality: civitas.PERSONALITY_TYPE_BALANCED,
		level: 29,
		resources: {
			'coins': 240000,
			'prestige': 500,
			'espionage': 800
		},
		trades: {
			'imports': {
				salt: civitas.GOODS_IMPORTANCE_MEDIUM,
				stones: civitas.GOODS_IMPORTANCE_VITAL,
				gems: civitas.GOODS_IMPORTANCE_LOW,
				pearls: civitas.GOODS_IMPORTANCE_LOW
			},
			'exports': {
				donkeys: civitas.GOODS_IMPORTANCE_VITAL,
				sulphur: civitas.GOODS_IMPORTANCE_VITAL,
				silk: civitas.GOODS_IMPORTANCE_MEDIUM,
				glass: civitas.GOODS_IMPORTANCE_HIGH,
				carpets: civitas.GOODS_IMPORTANCE_LOW,
				cannons: civitas.GOODS_IMPORTANCE_LOW
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
		nationality: civitas.NATION_TYPE_CHINESE,
		ruler: 'Wu Ding',
		avatar: 15,
		icon: 7,
		climate: civitas.CLIMATE_TYPE_TEMPERATE,
		personality: civitas.PERSONALITY_TYPE_WARLORD,
		level: 22,
		resources: {
			'coins': 240000,
			'prestige': 420,
			'espionage': 700
		},
		trades: {
			'imports': {
				gold: civitas.GOODS_IMPORTANCE_LOW,
				goldores: civitas.GOODS_IMPORTANCE_LOW,
				weapons: civitas.GOODS_IMPORTANCE_LOW,
				salt: civitas.GOODS_IMPORTANCE_MEDIUM,
				stones: civitas.GOODS_IMPORTANCE_VITAL,
				gems: civitas.GOODS_IMPORTANCE_LOW,
				pearls: civitas.GOODS_IMPORTANCE_LOW
			},
			'exports': {
				donkeys: civitas.GOODS_IMPORTANCE_VITAL,
				sulphur: civitas.GOODS_IMPORTANCE_VITAL,
				silk: civitas.GOODS_IMPORTANCE_MEDIUM,
				glass: civitas.GOODS_IMPORTANCE_HIGH,
				roses: civitas.GOODS_IMPORTANCE_LOW,
				cattle: civitas.GOODS_IMPORTANCE_LOW,
				bread: civitas.GOODS_IMPORTANCE_LOW,
				meat: civitas.GOODS_IMPORTANCE_MEDIUM,
				carpets: civitas.GOODS_IMPORTANCE_LOW,
				cannons: civitas.GOODS_IMPORTANCE_LOW
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
