/**
 * List of all the cities in the world.
 * 
 * @constant
 * @type {Object}
 */
civitas.CITIES = {
	1: {
		icon: 4,
		climate: civitas.CLIMATE_TEMPERATE,
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
	2: {
		icon: 4,
		climate: civitas.CLIMATE_TROPICAL,
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
		navy: {

		},
		location: {
			x: 170,
			y: 176
		}
	},
	3: {
		icon: 6,
		climate: civitas.CLIMATE_TEMPERATE,
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
		navy: {

		},
		location: {
			x: 710,
			y: 150
		}
	},
	4: {
		icon: 5,
		climate: civitas.CLIMATE_TROPICAL,
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
		navy: {

		},
		location: {
			x: 240,
			y: 210
		}
	},
	5: {
		icon: 7,
		climate: civitas.CLIMATE_ARID,
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
		navy: {

		},
		location: {
			x: 280,
			y: 250
		}
	},
	6: {
		icon: 2,
		climate: civitas.CLIMATE_TROPICAL,
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
		navy: {

		},
		location: {
			x: 70,
			y: 280
		}
	},
	7: {
		icon: 4,
		climate: civitas.CLIMATE_ARID,
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
		navy: {

		},
		location: {
			x: 380,
			y: 130
		}
	},
	8: {
		icon: 5,
		climate: civitas.CLIMATE_POLAR,
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
		navy: {

		},
		location: {
			x: 330,
			y: 10
		}
	},
	9: {
		icon: 4,
		climate: civitas.CLIMATE_TEMPERATE,
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
		navy: {

		},
		location: {
			x: 190,
			y: 140
		}
	},
	10: {
		icon: 7,
		climate: civitas.CLIMATE_CONTINENTAL,
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
		navy: {

		},
		location: {
			x: 250,
			y: 110
		}
	},
	11: {
		icon: 7,
		climate: civitas.CLIMATE_TROPICAL,
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
	12: {
		icon: 7,
		climate: civitas.CLIMATE_TROPICAL,
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
		navy: {

		},
		location: {
			x: 300,
			y: 340
		}
	},
	13: {
		icon: 2,
		climate: civitas.CLIMATE_TROPICAL,
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
		navy: {

		},
		location: {
			x: 190,
			y: 310
		}
	},
	14: {
		icon: 4,
		climate: civitas.CLIMATE_TROPICAL,
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
		navy: {

		},
		location: {
			x: 330,
			y: 300
		}
	},
	15: {
		icon: 5,
		climate: civitas.CLIMATE_TEMPERATE,
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
		navy: {

		},
		location: {
			x: 90,
			y: 150
		}
	},
	16: {
		icon: 5,
		climate: civitas.CLIMATE_CONTINENTAL,
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
		navy: {

		},
		location: {
			x: 130,
			y: 80
		}
	},
	17: {
		icon: 7,
		climate: civitas.CLIMATE_TROPICAL,
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
		navy: {

		},
		location: {
			x: 400,
			y: 170
		}
	},
	18: {
		icon: 7,
		climate: civitas.CLIMATE_TEMPERATE,
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
		navy: {

		},
		location: {
			x: 600,
			y: 200
		}
	},
	19: {
		icon: 7,
		climate: civitas.CLIMATE_TEMPERATE,
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
		navy: {

		},
		location: {
			x: 760,
			y: 240
		}
	}
};

/**
 * List of world rulers.
 *
 * @constant
 * @type {Array}
 */
civitas.RULERS = [
	{
		name: 'Caesar',
		title: '',
		avatar: 1,
		nationality: civitas.NATION_ROMAN,
		personality: civitas.PERSONALITY_WARLORD
	},
	{
		name: 'Cronus',
		title: '',
		avatar: 3,
		nationality: civitas.NATION_PHOENICIAN,
		personality: civitas.PERSONALITY_BALANCED
	},
	{
		name: 'Elisa',
		title: '',
		avatar: 41,
		nationality: civitas.NATION_CARTHAGINIAN,
		personality: civitas.PERSONALITY_DIPLOMAT
	},
	{
		name: 'Genghis Khan',
		title: '',
		avatar: 19,
		nationality: civitas.NATION_MONGOLIAN,
		personality: civitas.PERSONALITY_WARLORD
	},
	{
		name: 'Khufu',
		title: '',
		avatar: 20,
		nationality: civitas.NATION_EGYPTIAN,
		personality: civitas.PERSONALITY_DIPLOMAT
	},
	{
		name: 'Mansa Musa',
		title: '',
		avatar: 30,
		nationality: civitas.NATION_MALINESE,
		personality: civitas.PERSONALITY_WARLORD
	},
	{
		name: 'Sennacherib',
		title: '',
		avatar: 34,
		nationality: civitas.NATION_ASSYRIAN,
		personality: civitas.PERSONALITY_BALANCED
	},
	{
		name: 'Pepi',
		title: '',
		avatar: 40,
		nationality: civitas.NATION_SUDANESE,
		personality: civitas.PERSONALITY_DIPLOMAT
	},
	{
		name: 'Hatshepsut',
		title: '',
		avatar: 36,
		nationality: civitas.NATION_EGYPTIAN,
		personality: civitas.PERSONALITY_BALANCED
	},
	{
		name: 'Clovis',
		title: '',
		avatar: 13,
		nationality: civitas.NATION_FRANKS,
		personality: civitas.PERSONALITY_DIPLOMAT
	},
	{
		name: 'Gilgamesh',
		title: '',
		avatar: 31,
		nationality: civitas.NATION_SUMERIAN,
		personality: civitas.PERSONALITY_WARLORD
	},
	{
		name: 'Dalai Lama',
		title: '',
		avatar: 45,
		nationality: civitas.NATION_TIBETAN,
		personality: civitas.PERSONALITY_DIPLOMAT
	},
	{
		name: 'Ashoka',
		title: '',
		avatar: 28,
		nationality: civitas.NATION_INDIAN,
		personality: civitas.PERSONALITY_DIPLOMAT
	},
	{
		name: 'Charlemagne',
		title: '',
		avatar: 43,
		nationality: civitas.NATION_FRANKS,
		personality: civitas.PERSONALITY_DIPLOMAT
	},
	{
		name: 'Darius',
		title: '',
		avatar: 38,
		nationality: civitas.NATION_PERSAN,
		personality: civitas.PERSONALITY_WARLORD
	},
	{
		name: 'Ivan III',
		title: '',
		avatar: 19,
		nationality: civitas.NATION_RUSSIAN,
		personality: civitas.PERSONALITY_WARLORD
	},
	{
		name: 'Qin Shi Huang',
		title: '',
		avatar: 45,
		nationality: civitas.NATION_CHINESE,
		personality: civitas.PERSONALITY_DIPLOMAT
	},
	{
		name: 'Ozymandias',
		title: '',
		avatar: 33,
		nationality: civitas.NATION_EGYPTIAN,
		personality: civitas.PERSONALITY_BALANCED
	},
	{
		name: 'Timur',
		title: '',
		avatar: 37,
		nationality: civitas.NATION_PERSAN,
		personality: civitas.PERSONALITY_WARLORD
	}
];

/**
 * List of world city names.
 *
 * @constant
 * @type {Array}
 */
civitas.CITY_NAMES = [
	'Alexandria',
	'Rome',
	'Carthage',
	'Constantinople',
	'Karakorum',
	'Niniveh',
	'Thebes',
	'Uruk',
	'Abydos',
	'Byblos',
	'Kyrene',
	'Menat Khufu',
	'Niani',
	'Novgorod',
	'Sarmizegetusa',
	'Sigiriya',
	'Selima Oasis',
	'Tournai',
	'Taruga',
	'Toledo',
	'Xinjiang',
	'Yinxu'
];
