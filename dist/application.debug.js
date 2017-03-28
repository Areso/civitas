/*!
 * City-builder HTML5 engine/game
 *
 * @author sizeof(cat) <sizeofcat AT riseup.net>
 * @version 0.1.3282017
 * @license MIT
 */ 'use strict';

Array.prototype.findIndexM = function (value) {
    for (var i = 0; i < this.length; i++) {
        if (this[i].handle === value) {
            return i;
        }
    }
    return false;
};

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

if (typeof city_builder === 'undefined')
	var city_builder = {};

/**
 * i8n function.
 * 
 * @param {String} value
 * @returns {String}
 */
city_builder.l = function (value) {
	if (typeof city_builder.lang[value] !== 'undefined' &&
		city_builder.lang[value] !== '') {
		return city_builder.lang[value];
	} else {
		return value;
	}
};

/**
 * Autostart music or not.
 * 
 * @constant
 * @type {Boolean}
 */
city_builder.AUTOSTART_MUSIC = false;

/**
 * Max level a city can have.
 * 
 * @constant
 * @type {Number}
 */
city_builder.MAX_CITY_LEVEL = 55;

/**
 * URL to the game assets
 * 
 * @constant
 * @type {String}
 */
city_builder.ASSETS_URL = './';

/**
 * Amount of influence your city loses each year.
 * 
 * @constant
 * @type {Number}
 */
city_builder.YEARLY_INFLUENCE_LOSS = 10;

/**
 * Number of city ruler avatars available to choose.
 * 
 * @constant
 * @type {Number}
 */
city_builder.AVATARS = 45;

city_builder.TRADES_ADDITION = 10;

city_builder.TRADES_DISCOUNT = 20;

/**
 * The black market discount.
 * 
 * @constant
 * @type {Number}
 */
city_builder.BLACK_MARKET_DISCOUNT = 80;

/**
 * The resources that will be shown on the toolbar.
 * 
 * @constant
 * @type {Array}
 */
city_builder.TOOLBAR_RESOURCES = [
	'coins',
	'wood',
	'stones',
	'wheat',
	'flour',
	'bread',
	'cattle',
	'meat',
	'iron',
	'weapons'
];

/**
 * Fame required for each city level.
 * 
 * @constant
 * @type {Array}
 */
city_builder.LEVELS = [
	0, 100, 500, 1000, 2000,
	3500, 5000, 7000, 10000, 13000,
	16000, 20000, 25000, 29000, 35000,
	40000, 45000, 50000, 60000, 70000,
	80000, 90000, 100000, 120000, 150000,
	180000, 200000, 240000, 280000, 350000,
	400000, 450000, 500000, 550000, 600000,
	650000, 750000, 850000, 900000, 1000000,
	1200000, 1400000, 1600000, 1800000, 2000000,
	2200000, 2400000, 2600000, 2800000, 3000000,
	3400000, 3800000, 4400000, 5000000, 6000000
];

/**
 * Application version.
 * 
 * @constant
 * @type {String}
 */
city_builder.VERSION = '0.1.' + ((new Date()).getMonth() + 1) + '' + (new Date()).getDate() + '' + (new Date()).getFullYear();

/**
 * Whether the application is in debug mode.
 * 
 * @default false
 * @constant
 * @type {Boolean}
 */
city_builder.DEBUG = true;

/**
 * Browser localStorage key to store game data into.
 *
 * @constant
 * @type {String}
 */
city_builder.STORAGE_KEY = 'city_builder';

/**
 * Goods importance, vital means at most 500 stacks of goods will be up for importing
 * or exporting.
 *
 * @constant
 * @type {Number}
 */
city_builder.GOODS_IMPORTANCE_VITAL = 50;

/**
 * Goods importance, high means at most 300 stacks of goods will be up for importing
 * or exporting.
 *
 * @constant
 * @type {Number}
 */
city_builder.GOODS_IMPORTANCE_HIGH = 30;

/**
 * Goods importance, medium means at most 200 stacks of goods will be up for importing
 * or exporting.
 *
 * @constant
 * @type {Number}
 */
city_builder.GOODS_IMPORTANCE_MEDIUM = 20;

/**
 * Goods importance, low means at most 100 stacks of goods will be up for importing
 * or exporting.
 *
 * @constant
 * @type {Number}
 */
city_builder.GOODS_IMPORTANCE_LOW = 10;

/**
 * Difficulty level of the game is easy.
 * 
 * @constant
 * @type {Number}
 */
city_builder.DIFFICULTY_LEVEL_EASY = 1;

/**
 * Difficulty level of the game is medium.
 * 
 * @constant
 * @type {Number}
 */
city_builder.DIFFICULTY_LEVEL_MEDIUM = 2;

/**
 * Difficulty level of the game is hard.
 * 
 * @constant
 * @type {Number}
 */
city_builder.DIFFICULTY_LEVEL_HARD = 3;

/**
 * Difficulty level of the game is hardcore.
 * 
 * @constant
 * @type {Number}
 */
city_builder.DIFFICULTY_LEVEL_HARDCORE = 4;

/**
 * When a building is notifying the player it's out of resources (the building, not the player).
 *
 * @constant
 * @type {Number}
 */
city_builder.NOTIFICATION_MISSING_RESOURCES = 1;

/**
 * When a building is notifying the player its production is paused manually by the player.
 *
 * @constant
 * @type {Number}
 */
city_builder.NOTIFICATION_PRODUCTION_PAUSED = 2;

city_builder.lang = {};

/**
 * Game API version to connect to.
 *
 * @constant
 * @type {String}
 */
city_builder.API_VERSION = '0.2.0';

/**
 * URL of the main Game API entry point.
 * 
 * @constant
 * @type {String}
 */
city_builder.API_ENTRY_POINT = 'http://city-builder.dev/api/';

/**
 * Main Game API entry point + the API version
 *
 * @constant
 * @type {String}
 */
city_builder.API_VERSION_URL = city_builder.API_ENTRY_POINT + city_builder.API_VERSION + '/';

/**
 * Just met, temporary trucem can declare war, can trade.
 * 
 * @constant
 * @type {Number}
 */
city_builder.DIPLOMACY_TRUCE = 1;

/**
 * At war, no trades possible.
 * 
 * @constant
 * @type {Number}
 */
city_builder.DIPLOMACY_WAR = 2;

/**
 * In a pact, can declare war, can trade.
 * 
 * @constant
 * @type {Number}
 */
city_builder.DIPLOMACY_PACT = 3;

/**
 * In an alliance, cannot declare war, can trade with discounts, can share armies.
 * 
 * @constant
 * @type {Number}
 */
city_builder.DIPLOMACY_ALLIANCE = 4;

/**
 * A cease fire means a temporary peace.
 * 
 * @constant
 * @type {Number}
 */
city_builder.DIPLOMACY_CEASE_FIRE = 5;

/**
 * List of the possible nation types.
 * 
 * @constant
 * @type {Array}
 */
city_builder.NATION_TYPES = [
	'none',
	'phoenician',
	'carthaginian',
	'greek',
	'egyptian',
	'assyrian',
	'roman',
	'thracian',
	'sudanese',
	'spanish',
	'sumerian',
	'chinese',
	'indian',
	'franks',
	'russian',
	'nigerian',
	'malinese',
	'mongolian'
];

/**
 * Phoenicians
 * 
 * @constant
 * @type {Number}
 */
city_builder.NATION_TYPE_PHOENICIAN = 1;

/**
 * Carthaginans
 * 
 * @constant
 * @type {Number}
 */
city_builder.NATION_TYPE_CARTHAGINIAN = 2;

/**
 * Greeks
 * 
 * @constant
 * @type {Number}
 */
city_builder.NATION_TYPE_GREEK = 3;

/**
 * Egyptians
 * 
 * @constant
 * @type {Number}
 */
city_builder.NATION_TYPE_EGYPTIAN = 4;

/**
 * Assyrians
 * 
 * @constant
 * @type {Number}
 */
city_builder.NATION_TYPE_ASSYRIAN = 5;

/**
 * Romans
 * 
 * @constant
 * @type {Number}
 */
city_builder.NATION_TYPE_ROMAN = 6;

/**
 * Thracians
 * 
 * @constant
 * @type {Number}
 */
city_builder.NATION_TYPE_THRACIAN = 7;

/**
 * Sudanese
 * 
 * @constant
 * @type {Number}
 */
city_builder.NATION_TYPE_SUDANESE = 8;

/**
 * Spanish
 * 
 * @constant
 * @type {Number}
 */
city_builder.NATION_TYPE_SPANISH = 9;

/**
 * Sumerians
 * 
 * @constant
 * @type {Number}
 */
city_builder.NATION_TYPE_SUMERIAN = 10;

/**
 * Chinese
 * 
 * @constant
 * @type {Number}
 */
city_builder.NATION_TYPE_CHINESE = 11;

/**
 * Indian
 * 
 * @constant
 * @type {Number}
 */
city_builder.NATION_TYPE_INDIAN = 12;

/**
 * Franks
 * 
 * @constant
 * @type {Number}
 */
city_builder.NATION_TYPE_FRANKS = 13;

/**
 * Russians
 * 
 * @constant
 * @type {Number}
 */
city_builder.NATION_TYPE_RUSSIAN = 14;

/**
 * Nigerians
 * 
 * @constant
 * @type {Number}
 */
city_builder.NATION_TYPE_NIGERIAN = 15;

/**
 * Malinese
 * 
 * @constant
 * @type {Number}
 */
city_builder.NATION_TYPE_MALINESE = 16;

/**
 * Mongolian
 * 
 * @constant
 * @type {Number}
 */
city_builder.NATION_TYPE_MONGOLIAN = 17;

/**
 * List of the possible climate types.
 * 
 * @constant
 * @type {Array}
 */
city_builder.CLIMATE_TYPES = [
	'none',
	'temperate',
	'tropical',
	'arid',
	'continental',
	'polar'
];

/**
 * Temperate climate, all balanced.
 * 
 * @constant
 * @type {Number}
 */
city_builder.CLIMATE_TYPE_TEMPERATE = 1;

/**
 * Tropical climate, favoring farms and exotic goods.
 * 
 * @constant
 * @type {Number}
 */
city_builder.CLIMATE_TYPE_TROPICAL = 2;

/**
 * Arid climate, favoring ore mines.
 * 
 * @constant
 * @type {Number}
 */
city_builder.CLIMATE_TYPE_ARID = 3;

/**
 * Continental climate, no sea access.
 * 
 * @constant
 * @type {Number}
 */
city_builder.CLIMATE_TYPE_CONTINENTAL = 4;

/**
 * Polar climate, very extreme.
 * 
 * @constant
 * @type {Number}
 */
city_builder.CLIMATE_TYPE_POLAR = 5;

/**
 * Worldmap position of city when the climate is temperate.
 * 
 * @constant
 * @type {Object}
 */
city_builder.CITY_LOCATION_TEMPERATE = {
	x: 530,
	y: 150
};

/**
 * Worldmap position of city when the climate is tropical.
 * 
 * @constant
 * @type {Object}
 */
city_builder.CITY_LOCATION_TROPICAL = {
	x: 45,
	y: 250
};

/**
 * Worldmap position of city when the climate is arid.
 * 
 * @constant
 * @type {Object}
 */
city_builder.CITY_LOCATION_ARID = {
	x: 340,
	y: 130
};

/**
 * Worldmap position of city when the climate is continental.
 * 
 * @constant
 * @type {Object}
 */
city_builder.CITY_LOCATION_CONTINENTAL = {
	x: 540,
	y: 150
};

/**
 * Worldmap position of city when the climate is polar.
 * 
 * @constant
 * @type {Object}
 */
city_builder.CITY_LOCATION_POLAR = {
	x: 490,
	y: 10
};

/**
 * List of the possible ruler personality types.
 * 
 * @constant
 * @type {Array}
 */
city_builder.PERSONALITY_TYPES = [
    'none',
    'balanced',
    'diplomat',
    'warlord'
];

/**
 * Balanced type, the ruler weights in all the possibilities before deciding
 * whether to go to war or let diplomacy win.
 * 
 * @constant
 * @type {Number}
 */
city_builder.PERSONALITY_TYPE_BALANCED = 1;

/**
 * The ruler will always consider diplomacy before going to war.
 * 
 * @constant
 * @type {Number}
 */
city_builder.PERSONALITY_TYPE_DIPLOMAT = 2;

/**
 * If you upset this ruler, he will go to war with you.
 * 
 * @constant
 * @type {Number}
 */
city_builder.PERSONALITY_TYPE_WARLORD = 3;

/**
 * List of soldier types, their attributes and cost.
 * 
 * @type {Object}
 * @constant
 */
city_builder.SOLDIER_TYPES = {
	'Militia': {
		id: city_builder.SOLDIER_TYPE_MILITIA,
		attack: 2,
		defense: 1,
		cost: {
			coins: 100,
			bread: 1,
			meat: 1,
			weapons: 1
		}
	},
	'Axeman': {
		id: city_builder.SOLDIER_TYPE_AXEMAN,
		attack: 3,
		defense: 2,
		cost: {
			coins: 300,
			bread: 1,
			meat: 1,
			weapons: 2
		}
	},
	'Bowman': {
		id: city_builder.SOLDIER_TYPE_BOWMAN,
		attack: 6,
		defense: 1,
		cost: {
			coins: 500,
			bread: 1,
			meat: 1,
			weapons: 4
		}
	},
	'Pikeman': {
		id: city_builder.SOLDIER_TYPE_PIKEMAN,
		attack: 5,
		defense: 4,
		cost: {
			coins: 700,
			bread: 1,
			meat: 1,
			beer: 1,
			iron: 1,
			leather: 1,
			weapons: 5
		}
	},
	'Crossbowman': {
		id: city_builder.SOLDIER_TYPE_CROSSBOWMAN,
		attack: 7,
		defense: 2,
		cost: {
			coins: 1000,
			bread: 1,
			meat: 1,
			beer: 1,
			clothes: 1,
			iron: 1,
			weapons: 7
		}
	},
	'Knight': {
		id: city_builder.SOLDIER_TYPE_KNIGHT,
		attack: 6,
		defense: 9,
		cost: {
			coins: 1500,
			bread: 1,
			meat: 1,
			wine: 1,
			clothes: 1,
			iron: 1,
			weapons: 9
		}
	}
};

/**
 * Militia
 * 
 * @constant
 * @type {Number}
 */
city_builder.SOLDIER_TYPE_MILITIA = 0;

/**
 * Axemen
 * 
 * @constant
 * @type {Number}
 */
city_builder.SOLDIER_TYPE_AXEMAN = 1;

/**
 * Knights
 * 
 * @constant
 * @type {Number}
 */
city_builder.SOLDIER_TYPE_KNIGHT = 2;

/**
 * Bowmen
 * 
 * @constant
 * @type {Number}
 */
city_builder.SOLDIER_TYPE_BOWMAN = 3;

/**
 * Crossbowmen
 * 
 * @constant
 * @type {Number}
 */
city_builder.SOLDIER_TYPE_CROSSBOWMAN = 4;

/**
 * Pikemen
 * 
 * @constant
 * @type {Number}
 */
city_builder.SOLDIER_TYPE_PIKEMAN = 5;

/**
 * List of mercenary armies available for hire.
 * 
 * @constant
 * @type {Object}
 */
city_builder.MERCENARIES = [{
	name: 'Legio I Adiutrix',
	description: 'Legio prima Adiutrix (First Auxiliary legion) is a Roman legion.',
	handle: 'legio1',
	icon: 1,
	army: {
		'Axeman': 300,
		'Knight': 100,
		'Crossbowman': 220,
		'Pikeman': 300
	},
	cost: 120000
}, {
	name: 'Legio II Augusta',
	description: 'Legio secunda Augusta (Second Augustan Legion) is a Roman legion.',
	handle: 'legio2',
	icon: 8,
	army: {
		'Axeman': 220,
		'Knight': 100,
		'Crossbowman': 300,
		'Pikeman': 140
	},
	cost: 130000
}, {
	name: 'Legio III Cyrenaica',
	description: 'Legio tertia Cyrenaica (Third Cyrenean legion) is a Roman legion.',
	handle: 'legio3',
	icon: 15,
	army: {
		'Axeman': 280,
		'Crossbowman': 500,
		'Pikeman': 180
	},
	cost: 100000
}, {
	name: 'Legio IV Flavia Felix',
	description: 'Legio quarta Flavia Felix (Fourth Lucky Flavian Legion) is a Roman legion.',
	handle: 'legio4',
	icon: 9,
	army: {
		'Militia': 140,
		'Axeman': 190,
		'Knight': 90,
		'Bowman': 120,
		'Crossbowman': 200,
		'Pikeman': 180
	},
	cost: 190000
}, {
	name: 'Legio V Alaudae',
	description: 'Legio quinta Alaudae (Fifth Larks Legion) is a Roman legion.',
	handle: 'legio5',
	icon: 16,
	army: {
		'Militia': 400,
		'Axeman': 200,
		'Bowman': 190
	},
	cost: 110000
}, {
	name: 'Legio VI Victrix',
	description: 'Legio sexta Victrix (Sixth Victorious Legion) is a Roman legion.',
	handle: 'legio6',
	icon: 22,
	army: {
		'Militia': 330,
		'Axeman': 230,
		'Knight': 100,
		'Bowman': 200
	},
	cost: 140000
}, {
	name: 'Varangian Guard',
	description: 'The Varangian Guard is an elite unit of the Byzantine Army.',
	handle: 'varangian',
	icon: 18,
	army: {
		'Militia': 410,
		'Axeman': 210,
		'Bowman': 190,
		'Crossbowman': 100,
		'Pikeman': 220
	},
	cost: 120000
}, {
	name: 'Magna Societas Catalanorum',
	description: 'The Catalan Company of the East, officially the Magna Societas ' +
		'Catalanorum is a company of mercenaries founded by Roger de Flor.',
	handle: 'catalan',
	icon: 23,
	army: {
		'Axeman': 310,
		'Knight': 120,
		'Bowman': 210,
		'Pikeman': 310
	},
	cost: 100000
}, {
	name: 'Army of the Western Garden',
	description: 'The Army of the Western Garden is an army established during the reign of Emperor Ling in the Eastern Han Dynasty.',
	handle: 'western',
	icon: 27,
	army: {
		'Axeman': 290,
		'Knight': 40,
		'Bowman': 170,
		'Pikeman': 300
	},
	cost: 90000
}, {
	name: 'Scholae Palatinae',
	description: 'The Scholae Palatinae are an elite military guard unit, usually ascribed to the Roman Emperor Constantine the Great as a replacement for the equites singulares Augusti, the cavalry arm of the Praetorian Guard.',
	handle: 'scholae',
	icon: 26,
	army: {
		'Axeman': 10,
		'Knight': 200,
		'Bowman': 100,
		'Pikeman': 210
	},
	cost: 290000
}, {
	name: 'Imperial Guards',
	description: 'The Imperial Guards of the Tang Dynasty, also known as the Forbidden Troops were initially honor guards of the emperor and garrisons of the imperial capitals during the Tang`s dinasty formation in early 7th century.',
	handle: 'forbidden',
	icon: 25,
	army: {
		'Axeman': 290,
		'Knight': 80,
		'Bowman': 100,
		'Pikeman': 210
	},
	cost: 130000
}, {
	name: 'Navy of the Order of Saint John',
	description: 'The navy of the Order of Saint John, also known as the Maltese Navy, was the first navy of a chivalric order, established in the Middle Ages, around the late 12th century.',
	handle: 'maltesenavy',
	icon: 28,
	navy: {
		'Corsair': 19,
		'Caravel': 14,
		'Warship': 12,
		'Ship of the Line': 10
	},
	cost: 1500000
}];

/**
 * List of soldiers/ships to start with in various difficulty modes.
 *
 * @constant
 * @type {Object}
 */
city_builder.ARMIES_START = [{
		army: {
			'Militia': 10,
			'Axeman': 2,
			'Bowman': 4
		},
		navy: {
			'Corsair': 2,
			'Caravel': 1
		}
	}, {
		army: {
			'Militia': 5,
			'Axeman': 1,
			'Bowman': 2
		},
		navy: {
			'Corsair': 1,
			'Caravel': 1
		}
	}, {
		army: {
			'Militia': 3,
			'Bowman': 2
		},
		navy: {
			'Corsair': 1
		}
	}, {
		army: {},
		navy: {}
}];

/**
 * List of ship types, their attributes and cost.
 * 
 * @type {Object}
 * @constant
 */
city_builder.SHIP_TYPES = {
	'Caravel': {
		id: city_builder.SHIP_TYPE_CARAVEL,
		attack: 10,
		defense: 10,
		cost: {
			coins: 3000,
			wood: 400,
			leather: 60,
			iron: 80,
			bread: 60,
			meat: 60,
			wine: 30,
			clothes: 60,
			ropes: 30,
			cannons: 20
		}
	},
	'Corsair': {
		id: city_builder.SHIP_TYPE_CORSAIR,
		attack: 5,
		defense: 5,
		cost: {
			coins: 1000,
			wood: 200,
			leather: 50,
			iron: 50,
			bread: 50,
			meat: 50,
			wine: 20,
			clothes: 50,
			ropes: 10,
			cannons: 5,
			weapons: 10
		}
	},
	'Frigate': {
		id: city_builder.SHIP_TYPE_FRIGATE,
		attack: 17,
		defense: 8,
		cost: {
			coins: 3000,
			wood: 400,
			leather: 60,
			iron: 80,
			bread: 60,
			meat: 60,
			wine: 30,
			clothes: 60,
			ropes: 30,
			cannons: 20,
			weapons: 10
		}
	},
	'Galleon': {
		id: city_builder.SHIP_TYPE_GALLEON,
		attack: 15,
		defense: 15,
		cost: {
			coins: 5000,
			wood: 600,
			leather: 70,
			iron: 120,
			bread: 60,
			meat: 80,
			wine: 50,
			clothes: 70,
			ropes: 80,
			cannons: 30,
			weapons: 15
		}
	},
	'Warship': {
		id: city_builder.SHIP_TYPE_WARSHIP,
		attack: 35,
		defense: 30,
		cost: {
			coins: 10000,
			wood: 1000,
			leather: 200,
			iron: 500,
			bread: 200,
			meat: 200,
			wine: 200,
			clothes: 200,
			ropes: 100,
			cannons: 50,
			weapons: 20,
			carpets: 10
		}
	},
	'Ship of the Line': {
		id: city_builder.SHIP_TYPE_SHIPOFTHELINE,
		attack: 55,
		defense: 50,
		cost: {
			coins: 15000,
			wood: 2000,
			coal: 500,
			leather: 400,
			iron: 1500,
			bread: 200,
			barrels: 100,
			meat: 200,
			wine: 200,
			clothes: 200,
			ropes: 100,
			cannons: 100,
			weapons: 50
		}
	}
};

/**
 * Corsair ship.
 * 
 * @constant
 * @type {Number}
 */
city_builder.SHIP_TYPE_CORSAIR = 0;

/**
 * Caravel ship.
 * 
 * @constant
 * @type {Number}
 */
city_builder.SHIP_TYPE_CARAVEL = 1;

/**
 * Warship ship.
 * 
 * @constant
 * @type {Number}
 */
city_builder.SHIP_TYPE_WARSHIP = 2;

/**
 * Galleon ship.
 * 
 * @constant
 * @type {Number}
 */
city_builder.SHIP_TYPE_GALLEON = 3;

/**
 * Ship of the Line ship.
 * 
 * @constant
 * @type {Number}
 */
city_builder.SHIP_TYPE_SHIPOFTHELINE = 4;

/**
 * Frigate ship.
 * 
 * @constant
 * @type {Number}
 */
city_builder.SHIP_TYPE_FRIGATE = 5;

/**
 * Buildings native to the tropical climate.
 * 
 * @constant
 * @type {Array}
 */
city_builder.CITY_BUILDINGS_TROPICAL = [

	/* Municipal */
	'marketplace', 'warehouse', 'tradingpost', 'church', 'monastery', 'camp', 'castle',
	'shipyard', 'embassy',

	/* Housing */
	'house1', 'house2', 'house3', 'house4', 'house5', 'house6', 'house7', 'house8',
	'house9',

	/* Food Production */
	'mill', 'bakery', 'butcher',

	/* Mines */
	'coppermine', 'ironmine', 'saltmine',

	/* Smelters */
	'goldsmelter', 'coppersmelter', 'ironsmelter',

	/* Industry */
	'lumberjack', 'stone', 'trapper', 'tannery', 'furrier', 'armory', 'coffeeroaster',
	'quartzfactory', 'winery', 'saltworks',
	'charcoalburnerhut', 'opticiansworkshop', 'papermill', 'printingpress',
	'redsmithsworkshop', 'ropeyard', 'glassworks',
	'apiary', 'barrelcooperage', 'brewery', 'candlemakersworkshop', 'sugarmill',
	'perfumery', 'weaver',

	/* Farms */
	'almondsfarm', 'almondsfield', 'cattlefarm', 'cattlefield', 'coffeefarm', 'coffeefield',
	'grainfarm', 'grainfield',
	'grapesfarm', 'grapesfield', 'hempfarm', 'hempfield', 'pigfarm', 'pigfield',
	'sugarfarm', 'sugarfield', 'indigofarm'
];

/**
 * Buildings native to the polar climate.
 * 
 * @constant
 * @type {Array}
 */
city_builder.CITY_BUILDINGS_POLAR = [

	/* Municipal */
	'marketplace', 'warehouse', 'tradingpost', 'church', 'monastery', 'camp', 'castle',
	'shipyard', 'embassy',

	/* Housing */
	'house1', 'house2', 'house3', 'house4', 'house5', 'house6', 'house7',

	/* Food Production */
	'mill', 'bakery', 'butcher',

	/* Mines */
	'coppermine', 'goldmine', 'ironmine',

	/* Smelters */
	'goldsmelter', 'coppersmelter', 'ironsmelter',

	/* Industry */
	'lumberjack', 'stone', 'trapper', 'tannery', 'furrier', 'armory', 'coffeeroaster',
	'quartzfactory', 'winery', 'saltworks',
	'charcoalburnerhut', 'opticiansworkshop', 'papermill', 'printingpress',
	'redsmithsworkshop', 'ropeyard', 'glassworks',
	'apiary', 'barrelcooperage', 'brewery', 'candlemakersworkshop', 'sugarmill',
	'perfumery', 'weaver'
];

/**
 * Buildings native to the arid climate.
 * 
 * @constant
 * @type {Array}
 */
city_builder.CITY_BUILDINGS_ARID = [

	/* Municipal */
	'marketplace', 'warehouse', 'tradingpost', 'church', 'monastery', 'camp', 'castle',
	'shipyard', 'embassy',

	/* Housing */
	'house1', 'house2', 'house3', 'house4', 'house5', 'house6', 'house7',

	/* Food Production */
	'mill', 'bakery', 'butcher',

	/* Mines */
	'coppermine', 'goldmine', 'ironmine', 'saltmine',

	/* Smelters */
	'goldsmelter', 'coppersmelter', 'ironsmelter',

	/* Industry */
	'lumberjack', 'stone', 'trapper', 'tannery', 'furrier', 'armory', 'coffeeroaster',
	'quartzfactory', 'winery', 'saltworks',
	'charcoalburnerhut', 'opticiansworkshop', 'papermill', 'printingpress',
	'redsmithsworkshop', 'ropeyard', 'glassworks',
	'apiary', 'barrelcooperage', 'brewery', 'candlemakersworkshop', 'sugarmill',
	'perfumery', 'weaver',

	/* Farms */
	'cattlefarm', 'cattlefield', 'pigfarm', 'pigfield'
];

/**
 * Buildings native to the continental climate.
 * 
 * @constant
 * @type {Array}
 */
city_builder.CITY_BUILDINGS_CONTINENTAL = [

	/* Municipal */
	'marketplace', 'warehouse', 'tradingpost', 'church', 'monastery', 'camp', 'castle',
	'shipyard', 'embassy',

	/* Housing */
	'house1', 'house2', 'house3', 'house4', 'house5', 'house6', 'house7', 'house8',
	'house9',

	/* Food Production */
	'mill', 'bakery', 'butcher',

	/* Mines */
	'coppermine', 'goldmine', 'ironmine', 'saltmine',

	/* Smelters */
	'goldsmelter', 'coppersmelter', 'ironsmelter',

	/* Industry */
	'lumberjack', 'stone', 'trapper', 'tannery', 'furrier', 'armory', 'coffeeroaster',
	'quartzfactory', 'winery', 'saltworks',
	'charcoalburnerhut', 'opticiansworkshop', 'papermill', 'printingpress',
	'redsmithsworkshop', 'ropeyard', 'glassworks',
	'apiary', 'barrelcooperage', 'brewery', 'candlemakersworkshop', 'sugarmill',
	'perfumery', 'weaver',

	/* Farms */
	'cattlefarm', 'cattlefield', 'ciderfarm', 'ciderfield', 'grainfarm', 'grainfield',
	'grapesfarm', 'grapesfield',
	'hempfarm', 'hempfield', 'pigfarm', 'pigfield', 'silkfarm', 'silkfield', 'rosenursery'
];

/**
 * Buildings native to the temperate climate.
 * 
 * @constant
 * @type {Array}
 */
city_builder.CITY_BUILDINGS_TEMPERATE = [

	/* Municipal */
	'marketplace', 'warehouse', 'tradingpost', 'church', 'monastery', 'camp', 'castle',
	'shipyard', 'embassy',

	/* Housing */
	'house1', 'house2', 'house3', 'house4', 'house5', 'house6', 'house7', 'house8',
	'house9',

	/* Food Production */
	'mill', 'bakery', 'butcher',

	/* Mines */
	'coppermine', 'goldmine', 'ironmine', 'saltmine',

	/* Smelters */
	'goldsmelter', 'coppersmelter', 'ironsmelter',

	/* Industry */
	'lumberjack', 'stone', 'trapper', 'tannery', 'furrier', 'armory', 'coffeeroaster',
	'quartzfactory', 'winery', 'saltworks',
	'charcoalburnerhut', 'opticiansworkshop', 'papermill', 'printingpress',
	'redsmithsworkshop', 'ropeyard', 'glassworks',
	'apiary', 'barrelcooperage', 'brewery', 'candlemakersworkshop', 'sugarmill',
	'perfumery', 'weaver',

	/* Farms */
	'cattlefarm', 'cattlefield', 'ciderfarm', 'ciderfield', 'grainfarm', 'grainfield',
	'grapesfarm', 'grapesfield',
	'hempfarm', 'hempfield', 'pigfarm', 'pigfield', 'indigofarm'
];

/**
 * Minimal buildings for a city to operate.
 * 
 * @constant
 * @type {Array}
 */
city_builder.BUILDINGS_START = [
	{
		handle: 'marketplace',
		level: 1
	}, {
		handle: 'lumberjack',
		level: 1
	}, {
		handle: 'stone',
		level: 1
	}, {
		handle: 'house1',
		level: 1
	}, {
		handle: 'house2',
		level: 1
	}
];

/**
 * All the buildings for a city.
 * 
 * @constant
 * @type {Array}
 */
city_builder.BUILDINGS_ALL = [
	'marketplace', 'lumberjack', 'camp', 'warehouse', 'mill', 'castle', 'stone',
	'ironmine', 'trapper', 'almondsfarm', 'almondsfield',
	'shipyard', 'pigfarm', 'cattlefarm', 'pigfield', 'cattlefield', 'house1', 'house2',
	'house3', 'house4', 'house5', 'house6', 'house7',
	'house8', 'house9', 'church', 'bakery', 'butcher', 'grainfarm', 'grainfield',
	'ironsmelter', 'tannery', 'furrier', 'saltmine',
	'coppermine', 'goldmine', 'goldsmelter', 'coppersmelter', 'armory', 'coffeefarm',
	'coffeefield', 'hempfarm', 'hempfield', 'sugarfarm',
	'sugarfield', 'silkfarm', 'silkfield', 'coffeeroaster', 'quartzfactory', 'grapesfarm',
	'grapesfield', 'winery', 'saltworks',
	'charcoalburnerhut', 'monastery', 'opticiansworkshop', 'papermill', 'printingpress',
	'redsmithsworkshop', 'ropeyard', 'glassworks',
	'apiary', 'barrelcooperage', 'brewery', 'candlemakersworkshop', 'indigofarm',
	'ciderfarm', 'ciderfield', 'sugarmill', 'rosenursery',
	'perfumery', 'tradingpost', 'weaver', 'embassy'
];

/**
 * Buildings' categories.
 * 
 * @constant
 * @type {Object}
 */
city_builder.BUILDINGS_CATEGORIES = {
	'Municipal': [
		'church',
		'embassy',
		'marketplace',
		'monastery',
		'shipyard',
		'tradingpost',
		'warehouse'
	],
	'Housing': [
		'house1',
		'house2',
		'house3',
		'house4',
		'house5',
		'house6',
		'house7',
		'house8',
		'house9'
	],
	'Food': [
		'bakery',
		'butcher',
		'mill'
	],
	'Mines': [
		'coppermine',
		'goldmine',
		'ironmine',
		'saltmine'
	],
	'Farms': [
		'almondsfarm',
		'almondsfield',
		'cattlefarm',
		'cattlefield',
		'ciderfarm',
		'ciderfield',
		'coffeefarm',
		'coffeefield',
		'grainfarm',
		'grainfield',
		'grapesfarm',
		'grapesfield',
		'hempfarm',
		'hempfield',
		'indigofarm',
		'pigfarm',
		'pigfield',
		'silkfarm',
		'silkfield',
		'sugarfarm',
		'sugarfield'
	],
	'Industry': [
		'apiary',
		'armory',
		'barrelcooperage',
		'brewery',
		'candlemakersworkshop',
		'charcoalburnerhut',
		'coffeeroaster',
		'coppersmelter',
		'furrier',
		'glassworks',
		'goldsmelter',
		'ironsmelter',
		'lumberjack',
		'opticiansworkshop',
		'papermill',
		'perfumery',
		'printingpress',
		'quartzfactory',
		'redsmithsworkshop',
		'ropeyard',
		'rosenursery',
		'saltworks',
		'stone',
		'sugarmill',
		'trapper',
		'tannery',
		'weaver',
		'winery'
	],
	'Military': [
		'camp',
		'castle'
	]
};

/**
 * List of all Game buildings.
 * 
 * @constant
 * @type {Array}
 */
city_builder.BUILDINGS = [{
		name: 'Marketplace',
		handle: 'marketplace',
		description: 'The marketplace is the main building of your city and provides a place ' +
			'for the inhabitants of your settlement to gather. It cannot be demolished.',
		storage: 100000,
		levels: 4,
		visible_upgrades: true,
		production: {
			fame: 10
		},
		cost: {
			coins: 100000
		},
		position: {
			x: 709,
			y: 515
		},
		requires: {
			city_level: 1
		}
	}, {
		name: 'Warehouse',
		handle: 'warehouse',
		description: 'The warehouse is a trade building that provides market carts that pick up ' +
			'goods from production buildings. A warehouse also adds extra storage space for the ' +
			'materials in your city.',
		storage: 100000,
		levels: 3,
		visible_upgrades: true,
		position: {
			x: 1162,
			y: 365
		},
		cost: {
			coins: 150000,
			wood: 500,
			stones: 500
		},
		requires: {
			city_level: 10
		}
	}, {
		name: 'Church',
		handle: 'church',
		description: 'A church provides a massive fame boost to your settlement by using coins and ' +
			'converting them to fame.',
		is_municipal: true,
		is_production: true,
		production: {
			fame: 50
		},
		materials: {
			coins: 50
		},
		visible_upgrades: true,
		position: {
			x: 560,
			y: 428
		},
		levels: 3,
		cost: {
			coins: 10000,
			wood: 20,
			stones: 20
		},
		requires: {
			city_level: 3
		}
	}, {
		name: 'Trading Post',
		handle: 'tradingpost',
		description: 'The Trading Post allows you to trade resources with other cities.',
		is_municipal: true,
		position: {
			x: 1740,
			y: 330
		},
		levels: 3,
		cost: {
			coins: 50000,
			wood: 40,
			stones: 40
		},
		requires: {
			city_level: 6
		}
	}, {
		name: 'Embassy',
		handle: 'embassy',
		description: 'An Embassy is required to propose pacts, declare war, send goods to other ' +
			'cities.',
		is_municipal: true,
		is_production: true, 
		production: {
			fame: 20,
			espionage: 5
		},
		materials: {
			coins: 50
		},
		position: {
			x: 680,
			y: 400
		},
		levels: 3,
		cost: {
			coins: 100000,
			wood: 100,
			stones: 100
		},
		requires: {
			city_level: 10
		}
	}, {
		name: 'Monastery',
		handle: 'monastery',
		description: 'Monastery provides fame for your city in exchange for coins.',
		is_municipal: true,
		is_production: true,
		production: {
			fame: 20
		},
		materials: {
			coins: 20
		},
		position: {
			x: 680,
			y: 400
		},
		levels: 3,
		cost: {
			coins: 50000,
			wood: 200,
			stones: 200
		},
		requires: {
			city_level: 16
		}
	}, {
		name: 'Shipyard',
		handle: 'shipyard',
		description: 'The shipyard helps you expand your settlement overseas by providing you ' +
			'with ships and an ultra-small chance to gather pearls.',
		is_production: true,
		position: {
			x: 1746,
			y: 552
		},
		levels: 3,
		chance: {
			pearls: 0.05
		},
		cost: {
			coins: 200000,
			wood: 200,
			stones: 100
		},
		production: {
			fish: 4
		},
		requires: {
			city_level: 10
		}
	}, {
		name: 'Military Camp',
		handle: 'camp',
		description: 'The military camp is your main base of defense and attack until you can ' +
			'develop a Castle.',
		levels: 3,
		position: {
			x: 1461,
			y: 153
		},
		cost: {
			coins: 50000,
			wood: 200,
			stones: 160
		},
		requires: {
			city_level: 6
		}
	}, {
		name: 'Castle',
		handle: 'castle',
		description: 'The castle is your main base of operations. It provides your city with ' +
			'soldiers and some extra fame.',
		is_production: true,
		production: {
			fame: 100,
			prestige: 1
		},
		levels: 2,
		visible_upgrades: true,
		position: {
			x: 982,
			y: 77
		},
		materials: {
			coins: 200
		},
		cost: {
			coins: 1000000,
			wood: 500,
			stones: 500
		},
		requires: {
			city_level: 20
		}
	}, {
		name: 'Lumberjack',
		handle: 'lumberjack',
		description: 'A lumberjack provides you with wood which you can use for creating additional ' +
			'buildings or sell.',
		is_production: true,
		production: {
			wood: 3
		},
		levels: 3,
		position: {
			x: 129,
			y: 755
		},
		cost: {
			coins: 2000,
			stones: 20
		},
		requires: {
			city_level: 1
		}
	}, {
		name: 'Stone Quarry',
		handle: 'stone',
		description: 'Stone quarries produce stone blocks that are the basis of any buildings you ' +
			'wish to construct.',
		is_production: true,
		production: {
			stones: 1,
			clay: 1
		},
		position: {
			x: 469,
			y: 243
		},
		levels: 3,
		cost: {
			coins: 2000,
			wood: 20
		},
		requires: {
			city_level: 1
		}
	}, {
		name: 'Gold Mine',
		handle: 'goldmine',
		description: 'The gold mine extracts gold ores from the mountains you own (provided you ' +
			'own some).',
		is_production: true,
		production: {
			goldores: 4,
			clay: 1
		},
		position: {
			x: 342,
			y: 253
		},
		levels: 3,
		chance: {
			gems: 0.01
		},
		cost: {
			coins: 10000,
			wood: 20,
			stones: 20
		},
		requires: {
			city_level: 6
		}
	}, {
		name: 'Iron Mine',
		handle: 'ironmine',
		description: 'The iron mine extracts iron ores from the mountains you own (provided you own ' +
			'some).',
		is_production: true,
		production: {
			ironores: 4,
			clay: 1
		},
		position: {
			x: 640,
			y: 182
		},
		levels: 3,
		chance: {
			gems: 0.01
		},
		cost: {
			coins: 10000,
			wood: 20,
			stones: 20
		},
		requires: {
			city_level: 3
		}
	}, {
		name: 'Salt Mine',
		handle: 'saltmine',
		description: 'A salt mine extracts brine that can be processed further into salt in a Salt ' +
			'Works.',
		is_production: true,
		production: {
			brine: 1,
			clay: 1
		},
		position: {
			x: 172,
			y: 258
		},
		levels: 3,
		cost: {
			coins: 8000,
			wood: 20,
			stones: 20
		},
		requires: {
			city_level: 3
		}
	}, {
		name: 'Copper Mine',
		handle: 'coppermine',
		description: 'The copper mine extracts copper from the mountains you own (provided you own ' +
			'some).',
		is_production: true,
		production: {
			copper: 4,
			clay: 1
		},
		position: {
			x: 732,
			y: 133
		},
		levels: 3,
		chance: {
			gems: 0.01
		},
		cost: {
			coins: 10000,
			wood: 20,
			stones: 20
		},
		requires: {
			city_level: 5
		}
	}, {
		name: 'Salt Works',
		handle: 'saltworks',
		description: 'Salt Works requires coal and brine, and it produces salt. Salt is used for ' +
			'leather jerkins by the tannery, meat by the butcher`s shop and fur coats by the ' +
			'furrier`s workshop.',
		is_production: true,
		production: {
			salt: 4
		},
		materials: {
			coal: 2,
			brine: 2
		},
		position: {
			x: 1234,
			y: 418
		},
		levels: 3,
		cost: {
			coins: 20000,
			wood: 20,
			stones: 20
		},
		requires: {
			city_level: 3
		}
	}, {
		name: 'Mill',
		handle: 'mill',
		description: 'The Mill produces flour from the wheat cultivated by your farm(s).',
		is_production: true,
		production: {
			flour: 4
		},
		materials: {
			wheat: 2
		},
		position: {
			x: 1234,
			y: 418
		},
		levels: 3,
		cost: {
			coins: 10000,
			wood: 20,
			stones: 20
		},
		requires: {
			city_level: 3
		}
	}, {
		name: 'Bakery',
		handle: 'bakery',
		description: 'The Bakery creates bread from flour, thus providing your settlers with basic ' +
			'food.',
		is_production: true,
		production: {
			bread: 5
		},
		materials: {
			flour: 3
		},
		position: {
			x: 1003,
			y: 223
		},
		levels: 3,
		cost: {
			coins: 15000,
			wood: 30,
			stones: 30
		},
		requires: {
			city_level: 3
		}
	}, {
		name: 'Armory',
		handle: 'armory',
		description: 'The Armory is a major building that produces weapons. If you want to conquer ' +
			'others, you will need one.',
		is_production: true,
		production: {
			weapons: 1
		},
		materials: {
			iron: 2,
			leather: 1,
			brass: 1
		},
		position: {
			x: 863,
			y: 131
		},
		levels: 3,
		cost: {
			coins: 50000,
			wood: 100,
			stones: 100
		},
		requires: {
			city_level: 6
		}
	}, {
		name: 'Butcher',
		handle: 'butcher',
		description: 'The butcher slaughters cattle for meat, providing food that is more ' +
			'nutritious. Hides will be processed at the Tannery.',
		is_production: true,
		production: {
			meat: 4,
			hides: 2
		},
		materials: {
			cattle: 1,
			salt: 1
		},
		position: {
			x: 1082,
			y: 297
		},
		levels: 3,
		cost: {
			coins: 25000,
			wood: 40,
			stones: 40
		},
		requires: {
			city_level: 3
		}
	}, {
		name: 'Iron smelter',
		handle: 'ironsmelter',
		description: 'The iron smelter (or foundry) smelts iron ores into iron bars using coal, ' +
			'ready to be transformed into weapons.',
		is_production: true,
		production: {
			iron: 4
		},
		materials: {
			ironores: 4,
			coal: 1
		},
		position: {
			x: 153,
			y: 381
		},
		levels: 3,
		cost: {
			coins: 40000,
			wood: 40,
			stones: 50
		},
		requires: {
			city_level: 4
		}
	}, {
		name: 'Copper smelter',
		handle: 'coppersmelter',
		description: 'The copper smelter smelts copper into brass using coal.',
		is_production: true,
		production: {
			brass: 1
		},
		materials: {
			copper: 4,
			coal: 1
		},
		position: {
			x: 483,
			y: 327
		},
		levels: 3,
		cost: {
			coins: 40000,
			wood: 50,
			stones: 50
		},
		requires: {
			city_level: 6
		}
	}, {
		name: 'Gold smelter',
		handle: 'goldsmelter',
		description: 'The gold smelter transforms gold ores into gold bars using coal.',
		is_production: true,
		production: {
			gold: 1
		},
		materials: {
			goldores: 4,
			coal: 1
		},
		position: {
			x: 628,
			y: 292
		},
		levels: 3,
		cost: {
			coins: 40000,
			wood: 55,
			stones: 55
		},
		requires: {
			city_level: 6
		}
	}, {
		name: 'Trapper`s Lodge',
		handle: 'trapper',
		description: 'The trapper captures wild animals and uses the furs from them.',
		is_production: true,
		production: {
			furs: 4
		},
		position: {
			x: 1238,
			y: 131
		},
		levels: 3,
		cost: {
			coins: 15000,
			wood: 40,
			stones: 40
		},
		requires: {
			city_level: 6
		}
	}, {
		name: 'Furrier`s Workshop',
		handle: 'furrier',
		description: 'The furrier uses furs from the Trapper`s Lodge mixed with salt and processes ' +
			'them into fur coats that will help your settlers during the cold winters.',
		is_production: true,
		production: {
			furcoats: 1
		},
		materials: {
			furs: 2,
			salt: 2
		},
		position: {
			x: 1355,
			y: 496
		},
		levels: 3,
		cost: {
			coins: 15000,
			wood: 30,
			stones: 40
		},
		requires: {
			city_level: 6
		}
	}, {
		name: 'Weaver`s Hut',
		handle: 'weaver',
		description: 'The weaver uses hemp to produce linen clothes.',
		is_production: true,
		production: {
			clothes: 1
		},
		materials: {
			hemp: 4
		},
		position: {
			x: 1355,
			y: 496
		},
		levels: 3,
		cost: {
			coins: 15000,
			wood: 40,
			stones: 40
		},
		requires: {
			city_level: 6
		}
	}, {
		name: 'Tannery',
		handle: 'tannery',
		description: 'The tannery produces leather clothes from animal hides.',
		is_production: true,
		production: {
			leather: 2
		},
		materials: {
			hides: 2,
			salt: 1
		},
		levels: 3,
		position: {
			x: 1490,
			y: 552
		},
		cost: {
			coins: 20000,
			wood: 35,
			stones: 40
		},
		requires: {
			city_level: 6
		}
	}, {
		name: 'Coffee roaster',
		handle: 'coffeeroaster',
		description: 'The coffee roaster uses the coffee beans from your Coffee Farm and processes ' +
			'them into coffee.',
		is_production: true,
		production: {
			coffee: 1
		},
		materials: {
			coffeebeans: 4
		},
		position: {
			x: 905,
			y: 292
		},
		levels: 3,
		cost: {
			coins: 70000,
			wood: 80,
			stones: 60
		},
		requires: {
			city_level: 16
		}
	}, {
		name: 'Sugar Mill',
		handle: 'sugarmill',
		description: 'The Sugar Mill creates sugar from sugar cane.',
		is_production: true,
		production: {
			sugar: 1
		},
		materials: {
			sugarcane: 4
		},
		position: {
			x: 1260,
			y: 740
		},
		levels: 3,
		cost: {
			coins: 70000,
			wood: 80,
			stones: 60
		},
		requires: {
			city_level: 16
		}
	}, {
		name: 'Winery',
		handle: 'winery',
		description: 'The Winery uses the grapes from your Grapes Farm and processes them into wine.',
		is_production: true,
		production: {
			wine: 1
		},
		materials: {
			grapes: 4,
			barrels: 1
		},
		position: {
			x: 1020,
			y: 380
		},
		levels: 3,
		cost: {
			coins: 50000,
			wood: 50,
			stones: 40
		},
		requires: {
			city_level: 10
		}
	}, {
		name: 'Optician`s Shop',
		handle: 'opticiansworkshop',
		description: 'The optician uses brass and quartz to create glasses for your settlers.',
		is_production: true,
		production: {
			glasses: 1
		},
		materials: {
			brass: 2,
			quartz: 2
		},
		position: {
			x: 1160,
			y: 820
		},
		levels: 3,
		cost: {
			coins: 81000,
			wood: 70,
			stones: 70
		},
		requires: {
			city_level: 20
		}
	}, {
		name: 'Paper Mill',
		handle: 'papermill',
		description: 'The Paper Mill uses wood to produce paper, which is used along with indigo to ' +
			'produce books at the Printing House.',
		is_production: true,
		production: {
			paper: 2
		},
		materials: {
			wood: 1
		},
		position: {
			x: 1600,
			y: 500
		},
		levels: 3,
		cost: {
			coins: 83000,
			wood: 60,
			stones: 50
		},
		requires: {
			city_level: 16
		}
	}, {
		name: 'Printing Press',
		handle: 'printingpress',
		description: 'The printing press produces books using paper and indigo.',
		is_production: true,
		production: {
			books: 1
		},
		materials: {
			paper: 8,
			indigo: 1
		},
		position: {
			x: 1260,
			y: 900
		},
		levels: 3,
		cost: {
			coins: 84000,
			wood: 100,
			stones: 100
		},
		requires: {
			city_level: 20
		}
	}, {
		name: 'Perfumery',
		handle: 'perfumery',
		description: 'The Perfumery processes the rose oil into perfume to satisfy the needs of ' +
			'your settlers.',
		is_production: true,
		production: {
			perfume: 1
		},
		materials: {
			roses: 8
		},
		position: {
			x: 920,
			y: 660
		},
		levels: 3,
		cost: {
			coins: 90000,
			wood: 80,
			stones: 40
		},
		requires: {
			city_level: 20
		}
	}, {
		name: 'Redsmith`s Workshop',
		handle: 'redsmithsworkshop',
		description: 'The Redsmith`s Workshop processes brass and candles into candlesticks.',
		is_production: true,
		production: {
			candlesticks: 1
		},
		materials: {
			brass: 3,
			candles: 2
		},
		position: {
			x: 1020,
			y: 730
		},
		levels: 3,
		cost: {
			coins: 75000,
			wood: 70,
			stones: 50
		},
		requires: {
			city_level: 20
		}
	}, {
		name: 'Ropeyard',
		handle: 'ropeyard',
		description: 'The ropeyard produces ropes that are needed for your city`s ships.',
		is_production: true,
		production: {
			ropes: 1
		},
		materials: {
			hemp: 1
		},
		position: {
			x: 1700,
			y: 700
		},
		levels: 3,
		cost: {
			coins: 15000,
			wood: 70,
			stones: 60
		},
		requires: {
			city_level: 10
		}
	}, {
		name: 'Glassworks',
		handle: 'glassworks',
		description: 'The Glassworks processes quartz into glass.',
		is_production: true,
		production: {
			glass: 1
		},
		materials: {
			quartz: 2
		},
		position: {
			x: 1380,
			y: 340
		},
		levels: 3,
		cost: {
			coins: 50000,
			wood: 50,
			stones: 80
		},
		requires: {
			city_level: 16
		}
	}, {
		name: 'Quartz factory',
		handle: 'quartzfactory',
		description: 'The quartz factory provides your city with quartz.',
		is_production: true,
		production: {
			quartz: 3
		},
		position: {
			x: 349,
			y: 382
		},
		levels: 3,
		cost: {
			coins: 40000,
			wood: 50,
			stones: 90
		},
		requires: {
			city_level: 8
		}
	}, {
		name: 'Apiary',
		handle: 'apiary',
		description: 'The apiary produces bees wax for use in candles.',
		is_production: true,
		production: {
			wax: 3
		},
		position: {
			x: 1700,
			y: 340
		},
		levels: 3,
		cost: {
			coins: 40000,
			wood: 50,
			stones: 40
		},
		requires: {
			city_level: 10
		}
	}, {
		name: 'Barrel Cooperage',
		handle: 'barrelcooperage',
		description: 'The barrel cooperage creates barrels from wood and iron.',
		is_production: true,
		production: {
			barrels: 2
		},
		materials: {
			wood: 3,
			iron: 1
		},
		position: {
			x: 1630,
			y: 800
		},
		levels: 3,
		cost: {
			coins: 25000,
			wood: 80,
			stones: 70
		},
		requires: {
			city_level: 9
		}
	}, {
		name: 'Brewery',
		handle: 'brewery',
		description: 'The Brewery brews beer from wheat. Beer is needed for bigger hourses or ships.',
		is_production: true,
		production: {
			beer: 2
		},
		materials: {
			barrels: 1,
			wheat: 2
		},
		position: {
			x: 1020,
			y: 600
		},
		levels: 3,
		cost: {
			coins: 25000,
			wood: 60,
			stones: 70
		},
		requires: {
			city_level: 9
		}
	}, {
		name: 'Candlemaker`s Hut',
		handle: 'candlemakersworkshop',
		description: 'The Candlemaker Hut produces candles for your settlers` houses.',
		is_production: true,
		production: {
			candles: 1
		},
		materials: {
			wax: 2,
			hemp: 1
		},
		position: {
			x: 770,
			y: 250
		},
		levels: 3,
		cost: {
			coins: 45000,
			wood: 80,
			stones: 60
		},
		requires: {
			city_level: 20
		}
	}, {
		name: 'Charcoal Burner`s Hut',
		handle: 'charcoalburnerhut',
		description: 'The Charcoal Burner`s Hut burns wood into coal that is needed by all your ' +
			'smelters.',
		is_production: true,
		production: {
			coal: 4
		},
		materials: {
			wood: 1
		},
		position: {
			x: 1480,
			y: 250
		},
		levels: 3,
		cost: {
			coins: 15000,
			wood: 50,
			stones: 50
		},
		requires: {
			city_level: 3
		}
	}, {
		name: 'House',
		handle: 'house1',
		description: 'Houses provide coins through taxes and space for your settlers.',
		is_housing: true,
		tax: 5,
		cost: {
			wood: 10,
			coins: 1000
		},
		materials: {
			bread: 1
		},
		position: {
			x: 790,
			y: 340
		},
		levels: 5,
		visible_upgrades: true,
		requires: {
			city_level: 1
		}
	}, {
		name: 'House',
		handle: 'house2',
		description: 'Houses provide coins through taxes and space for your settlers.',
		is_housing: true,
		tax: 10,
		cost: {
			wood: 10,
			coins: 2000
		},
		materials: {
			bread: 1
		},
		position: {
			x: 849,
			y: 412
		},
		levels: 5,
		visible_upgrades: true,
		requires: {
			city_level: 1
		}
	}, {
		name: 'House',
		handle: 'house3',
		description: 'Houses provide coins through taxes and space for your settlers.',
		is_housing: true,
		tax: 15,
		cost: {
			wood: 10,
			stones: 20,
			coins: 3000
		},
		materials: {
			bread: 1,
			meat: 1
		},
		position: {
			x: 945,
			y: 480
		},
		levels: 5,
		visible_upgrades: true,
		requires: {
			city_level: 3
		}
	}, {
		name: 'House',
		handle: 'house4',
		description: 'Houses provide coins through taxes and space for your settlers.',
		is_housing: true,
		tax: 20,
		cost: {
			wood: 10,
			stones: 20,
			coins: 4000
		},
		materials: {
			bread: 1,
			meat: 1
		},
		position: {
			x: 860,
			y: 552
		},
		levels: 5,
		visible_upgrades: true,
		requires: {
			city_level: 6
		}
	}, {
		name: 'House',
		handle: 'house5',
		description: 'Houses provide coins through taxes and space for your settlers.',
		is_housing: true,
		tax: 25,
		cost: {
			wood: 25,
			stones: 35,
			coins: 5000
		},
		materials: {
			fish: 2,
			meat: 2,
			beer: 1
		},
		position: {
			x: 764,
			y: 613
		},
		levels: 5,
		visible_upgrades: true,
		requires: {
			city_level: 10
		}
	}, {
		name: 'House',
		handle: 'house6',
		description: 'Houses provide coins through taxes and space for your settlers.',
		is_housing: true,
		tax: 30,
		cost: {
			wood: 30,
			stones: 45,
			coins: 6000
		},
		materials: {
			fish: 2,
			meat: 2,
			wine: 1
		},
		position: {
			x: 663,
			y: 659
		},
		levels: 5,
		visible_upgrades: true,
		requires: {
			city_level: 16
		}
	}, {
		name: 'House',
		handle: 'house7',
		description: 'Houses provide coins through taxes and space for your settlers.',
		is_housing: true,
		tax: 35,
		cost: {
			wood: 40,
			stones: 80,
			coins: 7000
		},
		materials: {
			fish: 2,
			meat: 2,
			wine: 1,
			candlesticks: 1
		},
		position: {
			x: 579,
			y: 601
		},
		levels: 5,
		visible_upgrades: true,
		requires: {
			city_level: 20
		}
	}, {
		name: 'House',
		handle: 'house8',
		description: 'Houses provide coins through taxes and space for your settlers.',
		is_housing: true,
		tax: 40,
		cost: {
			wood: 50,
			stones: 100,
			coins: 8000
		},
		materials: {
			fish: 2,
			meat: 2,
			wine: 1,
			candlesticks: 1,
			furcoats: 1
		},
		position: {
			x: 520,
			y: 530
		},
		levels: 5,
		visible_upgrades: true,
		requires: {
			city_level: 25
		}
	}, {
		name: 'House',
		handle: 'house9',
		description: 'Houses provide coins through taxes and space for your settlers.',
		is_housing: true,
		tax: 45,
		cost: {
			wood: 100,
			stones: 200,
			coins: 10000
		},
		materials: {
			fish: 2,
			meat: 2,
			wine: 1,
			candlesticks: 1,
			furcoats: 1,
			perfume: 1
		},
		position: {
			x: 447,
			y: 463
		},
		levels: 5,
		visible_upgrades: true,
		requires: {
			city_level: 30
		}
	}, {
		name: 'Cider Farm',
		handle: 'ciderfarm',
		description: 'The cider farm produces cider, a basic drink for your settlers',
		is_production: true,
		production: {
			cider: 1,
			herbs: 1
		},
		position: {
			x: 1500,
			y: 882
		},
		levels: 3,
		cost: {
			coins: 10000,
			wood: 50,
			stones: 30
		},
		requires: {
			city_level: 4,
			buildings: 'ciderfield'
		}
	}, {
		name: 'Cider field',
		handle: 'ciderfield',
		description: 'A cider field is required for the cider farm to operate.',
		position: {
			x: 1400,
			y: 840
		},
		cost: {
			coins: 2000,
			wood: 10,
			clay: 10
		},
		requires: {
			city_level: 4
		}
	}, {
		name: 'Almonds farm',
		handle: 'almondsfarm',
		is_production: true,
		description: 'The Almonds Farm cultivates almonds for export.',
		production: {
			almonds: 1
		},
		levels: 3,
		position: {
			x: 280,
			y: 569
		},
		cost: {
			coins: 40000,
			wood: 30,
			stones: 30
		},
		requires: {
			city_level: 16,
			buildings: 'almondsfield'
		}
	}, {
		name: 'Almonds field',
		handle: 'almondsfield',
		description: 'An almonds field is required for the almonds farm to operate.',
		position: {
			x: 205,
			y: 636
		},
		cost: {
			coins: 5000,
			wood: 10,
			clay: 10
		},
		requires: {
			city_level: 16
		}
	}, {
		name: 'Cattle Farm',
		handle: 'cattlefarm',
		description: 'A cattle farm grows cattle so your settlers can eat food that is more ' +
			'nutritious than bread.',
		is_production: true,
		production: {
			cattle: 1,
			milk: 1
		},
		levels: 3,
		materials: {
			herbs: 2
		},
		position: {
			x: 905,
			y: 783
		},
		cost: {
			coins: 10000,
			wood: 20,
			stones: 20
		},
		requires: {
			city_level: 2,
			buildings: 'cattlefield'
		}
	}, {
		name: 'Cattle field',
		handle: 'cattlefield',
		description: 'A cattle field is required for the cattle farm to operate.',
		position: {
			x: 816,
			y: 838
		},
		cost: {
			coins: 1000,
			wood: 10,
			clay: 10
		},
		requires: {
			city_level: 2
		}
	}, {
		name: 'Pig Farm',
		handle: 'pigfarm',
		description: 'A pig farm grows pigs so your settlers can eat food that is more nutritious ' +
			'than bread.',
		is_production: true,
		production: {
			meat: 1
		},
		levels: 3,
		materials: {
			herbs: 2
		},
		position: {
			x: 823,
			y: 712
		},
		cost: {
			coins: 15000,
			wood: 20,
			stones: 20
		},
		requires: {
			city_level: 3,
			buildings: 'pigfield'
		}
	}, {
		name: 'Pig field',
		handle: 'pigfield',
		description: 'A pig field is required for the pig farm to operate.',
		position: {
			x: 730,
			y: 770
		},
		cost: {
			coins: 1500,
			wood: 10,
			clay: 10
		},
		requires: {
			city_level: 3
		}
	}, {
		name: 'Grain farm',
		handle: 'grainfarm',
		description: 'A grain farm cultivates wheat that will be later transformed into bread, ' +
			'and your settlers will live happily ever after.',
		is_production: true,
		production: {
			wheat: 3,
			herbs: 1
		},
		levels: 3,
		position: {
			x: 1027,
			y: 859
		},
		cost: {
			coins: 10000,
			wood: 20,
			stones: 20
		},
		requires: {
			city_level: 2,
			buildings: 'grainfield'
		}
	}, {
		name: 'Grain field',
		handle: 'grainfield',
		description: 'A grain field is required for the grain farm to operate.',
		position: {
			x: 1103,
			y: 915
		},
		cost: {
			coins: 1000,
			wood: 10,
			clay: 5
		},
		requires: {
			city_level: 2
		}
	}, {
		name: 'Grapes farm',
		handle: 'grapesfarm',
		description: 'A grapes farm provides your city with grapes for wine.',
		is_production: true,
		production: {
			grapes: 2,
			herbs: 1
		},
		levels: 3,
		position: {
			x: 1200,
			y: 600
		},
		cost: {
			coins: 15000,
			wood: 20,
			stones: 20
		},
		requires: {
			city_level: 10,
			buildings: 'grapesfield'
		}
	}, {
		name: 'Grapes field',
		handle: 'grapesfield',
		description: 'A grapes field is required for the grapes farm to operate.',
		position: {
			x: 1120,
			y: 670
		},
		cost: {
			coins: 1500,
			wood: 10,
			clay: 10
		},
		requires: {
			city_level: 10
		}
	}, {
		name: 'Coffee farm',
		handle: 'coffeefarm',
		description: 'A coffee farm provides your city with coffee beans.',
		is_production: true,
		production: {
			coffeebeans: 2,
			herbs: 1
		},
		levels: 3,
		position: {
			x: 244,
			y: 466
		},
		cost: {
			coins: 60000,
			wood: 20,
			stones: 20
		},
		requires: {
			city_level: 16,
			buildings: 'coffeefield'
		}
	}, {
		name: 'Coffee field',
		handle: 'coffeefield',
		description: 'A coffee field is required for the coffee farm to operate.',
		position: {
			x: 181,
			y: 532
		},
		cost: {
			coins: 6000,
			wood: 10,
			clay: 10
		},
		requires: {
			city_level: 16
		}
	}, {
		name: 'Hemp farm',
		handle: 'hempfarm',
		description: 'A hemp farm provides your city with hemp.',
		is_production: true,
		production: {
			hemp: 2,
			herbs: 1
		},
		levels: 3,
		position: {
			x: 347,
			y: 698
		},
		cost: {
			coins: 20000,
			wood: 20,
			stones: 20
		},
		requires: {
			city_level: 6,
			buildings: 'hempfield'
		}
	}, {
		name: 'Hemp field',
		handle: 'hempfield',
		description: 'A hemp field is required for the hemp farm to operate.',
		position: {
			x: 281,
			y: 758
		},
		cost: {
			coins: 2000,
			wood: 10,
			clay: 10
		},
		requires: {
			city_level: 6
		}
	}, {
		name: 'Silk farm',
		handle: 'silkfarm',
		description: 'A silk farm provides your city with silk.',
		is_production: true,
		production: {
			silk: 2
		},
		levels: 3,
		position: {
			x: 456,
			y: 745
		},
		cost: {
			coins: 80000,
			wood: 20,
			stones: 20
		},
		requires: {
			city_level: 20,
			buildings: 'silkfield'
		}
	}, {
		name: 'Silk field',
		handle: 'silkfield',
		description: 'A silk field is required for the silk farm to operate.',
		position: {
			x: 363,
			y: 819
		},
		cost: {
			coins: 8000,
			wood: 10,
			clay: 10
		},
		requires: {
			city_level: 20
		}
	}, {
		name: 'Sugar farm',
		handle: 'sugarfarm',
		description: 'A sugar cane farm provides your city with sugar cane.',
		is_production: true,
		production: {
			sugarcane: 2,
			herbs: 1
		},
		levels: 3,
		position: {
			x: 536,
			y: 804
		},
		cost: {
			coins: 100000,
			wood: 20,
			stones: 20
		},
		requires: {
			city_level: 20,
			buildings: 'sugarfield'
		}
	}, {
		name: 'Sugar field',
		handle: 'sugarfield',
		description: 'A sugar field is required for the sugar farm to operate.',
		position: {
			x: 449,
			y: 862
		},
		cost: {
			coins: 10000,
			wood: 10,
			clay: 10
		},
		requires: {
			city_level: 20
		}
	}, {
		name: 'Indigo farm',
		handle: 'indigofarm',
		is_production: true,
		description: 'The indigo farm produces indigo that can be used to create books.',
		production: {
			indigo: 1
		},
		levels: 3,
		position: {
			x: 260,
			y: 870
		},
		cost: {
			coins: 200000,
			wood: 30,
			stones: 30,
			clay: 30
		},
		requires: {
			city_level: 16
		}
	}, {
		name: 'Rose Nursery',
		handle: 'rosenursery',
		is_production: true,
		description: 'The Rose Nursery produces rose oil which is needed to make perfume.',
		production: {
			roses: 1
		},
		levels: 3,
		position: {
			x: 440,
			y: 630
		},
		cost: {
			coins: 20000,
			wood: 50,
			stones: 50,
			clay: 50
		},
		requires: {
			city_level: 20
		}
	}, {
		name: 'Spice Farm',
		handle: 'spicefarm',
		is_production: true,
		description: 'The Spice Farm is responsable for the production of spices.',
		production: {
			spices: 1
		},
		levels: 3,
		position: {
			x: 260,
			y: 870
		},
		cost: {
			coins: 200000,
			wood: 60,
			stones: 60,
			clay: 60
		},
		requires: {
			city_level: 20
		}
	}];

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
		icon: 4,
		avatar: 1,
		climate: city_builder.CLIMATE_TYPE_TEMPERATE,
		personality: city_builder.PERSONALITY_TYPE_DIPLOMAT,
		level: 25,
		resources: {
			'coins': 230000,
			'prestige': 700,
			'espionage': 400
		},
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
		nationality: city_builder.NATION_TYPE_CARTHAGINIAN,
		ruler: 'Elisa',
		avatar: 21,
		icon: 4,
		climate: city_builder.CLIMATE_TYPE_TROPICAL,
		personality: city_builder.PERSONALITY_TYPE_DIPLOMAT,
		level: 50,
		resources: {
			'coins': 130000,
			'prestige': 700,
			'espionage': 1200
		},
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
		nationality: city_builder.NATION_TYPE_MONGOLIAN,
		ruler: 'Genghis Khan',
		avatar: 45,
		icon: 6,
		climate: city_builder.CLIMATE_TYPE_TEMPERATE,
		personality: city_builder.PERSONALITY_TYPE_WARLORD,
		level: 30,
		resources: {
			'coins': 100000,
			'prestige': 1000,
			'espionage': 800
		},
		trades: {
			'imports': {
				wheat: city_builder.GOODS_IMPORTANCE_VITAL,
				wood: city_builder.GOODS_IMPORTANCE_HIGH,
				sugar: city_builder.GOODS_IMPORTANCE_LOW,
				sugarcane: city_builder.GOODS_IMPORTANCE_LOW,
				clay: city_builder.GOODS_IMPORTANCE_VITAL
			},
			'exports': {
				silver: city_builder.GOODS_IMPORTANCE_VITAL,
				glasses: city_builder.GOODS_IMPORTANCE_LOW,
				furcoats: city_builder.GOODS_IMPORTANCE_MEDIUM,
				indigo: city_builder.GOODS_IMPORTANCE_LOW,
				wheat: city_builder.GOODS_IMPORTANCE_LOW
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
		nationality: city_builder.NATION_TYPE_GREEK,
		ruler: 'Abdul',
		avatar: 33,
		icon: 5,
		climate: city_builder.CLIMATE_TYPE_TROPICAL,
		personality: city_builder.PERSONALITY_TYPE_WARLORD,
		level: 22,
		resources: {
			'coins': 200000,
			'prestige': 500,
			'espionage': 300
		},
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
		nationality: city_builder.NATION_TYPE_EGYPTIAN,
		ruler: 'Khufu',
		avatar: 34,
		icon: 7,
		climate: city_builder.CLIMATE_TYPE_ARID,
		personality: city_builder.PERSONALITY_TYPE_DIPLOMAT,
		level: 45,
		resources: {
			'coins': 200000,
			'prestige': 800,
			'espionage': 900
		},
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
		location: {
			x: 280,
			y: 250
		}
	},
	'Niani': {
		nationality: city_builder.NATION_TYPE_MALINESE,
		ruler: 'Mansa Musa',
		avatar: 30,
		icon: 2,
		climate: city_builder.CLIMATE_TYPE_TROPICAL,
		personality: city_builder.PERSONALITY_TYPE_WARLORD,
		level: 21,
		resources: {
			'coins': 200000,
			'prestige': 100,
			'espionage': 100
		},
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
			'Militia': 200,
			'Bowman': 200,
		},
		location: {
			x: 70,
			y: 280
		}
	},
	'Niniveh': {
		nationality: city_builder.NATION_TYPE_ASSYRIAN,
		ruler: 'Sennacherib',
		avatar: 37,
		icon: 4,
		climate: city_builder.CLIMATE_TYPE_ARID,
		personality: city_builder.PERSONALITY_TYPE_DIPLOMAT,
		level: 35,
		resources: {
			'coins': 130000,
			'prestige': 780,
			'espionage': 400
		},
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
		location: {
			x: 380,
			y: 130
		}
	},
	'Novgorod': {
		nationality: city_builder.NATION_TYPE_RUSSIAN,
		ruler: 'Rurik',
		avatar: 5,
		icon: 5,
		climate: city_builder.CLIMATE_TYPE_POLAR,
		personality: city_builder.PERSONALITY_TYPE_WARLORD,
		level: 20,
		resources: {
			'coins': 30000,
			'prestige': 200,
			'espionage': 150
		},
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
				statues: city_builder.GOODS_IMPORTANCE_VITAL,
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
		location: {
			x: 330,
			y: 10
		}
	},
	'Rome': {
		nationality: city_builder.NATION_TYPE_ROMAN,
		ruler: 'Caesar',
		avatar: 17,
		icon: 4,
		climate: city_builder.CLIMATE_TYPE_TEMPERATE,
		personality: city_builder.PERSONALITY_TYPE_BALANCED,
		level: 50,
		resources: {
			'coins': 330000,
			'prestige': 900,
			'espionage': 1900
		},
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
				robes: city_builder.GOODS_IMPORTANCE_VITAL,
				statues: city_builder.GOODS_IMPORTANCE_VITAL,
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
				quartz: city_builder.GOODS_IMPORTANCE_MEDIUM
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
		nationality: city_builder.NATION_TYPE_THRACIAN,
		ruler: 'Deceballus',
		avatar: 8,
		icon: 7,
		climate: city_builder.CLIMATE_TYPE_CONTINENTAL,
		personality: city_builder.PERSONALITY_TYPE_WARLORD,
		level: 18,
		resources: {
			'coins': 22000,
			'prestige': 160,
			'espionage': 500
		},
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
		location: {
			x: 250,
			y: 110
		}
	},
	'Sigiriya': {
		nationality: city_builder.NATION_TYPE_INDIAN,
		ruler: 'Kashyapa',
		avatar: 40,
		icon: 7,
		climate: city_builder.CLIMATE_TYPE_TROPICAL,
		personality: city_builder.PERSONALITY_TYPE_BALANCED,
		level: 22,
		resources: {
			'coins': 180000,
			'prestige': 200,
			'espionage': 450
		},
		trades: {
			'imports': {
				furs: city_builder.GOODS_IMPORTANCE_LOW,
				hides: city_builder.GOODS_IMPORTANCE_MEDIUM,
				milk: city_builder.GOODS_IMPORTANCE_LOW,
				leather: city_builder.GOODS_IMPORTANCE_LOW
			},
			'exports': {
				spyglasses: city_builder.GOODS_IMPORTANCE_VITAL,
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
			'Galleon': 2,
			'Warship': 2
		},
		location: {
			x: 600,
			y: 340
		}
	},
	'Selima Oasis': {
		nationality: city_builder.NATION_TYPE_SUDANESE,
		ruler: 'Pepi',
		avatar: 38,
		icon: 7,
		climate: city_builder.CLIMATE_TYPE_TROPICAL,
		personality: city_builder.PERSONALITY_TYPE_WARLORD,
		level: 18,
		resources: {
			'coins': 80000,
			'prestige': 300,
			'espionage': 300
		},
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
		location: {
			x: 300,
			y: 340
		}
	},
	'Taruga': {
		nationality: city_builder.NATION_TYPE_NIGERIAN,
		ruler: 'Samun',
		avatar: 30,
		icon: 2,
		climate: city_builder.CLIMATE_TYPE_TROPICAL,
		personality: city_builder.PERSONALITY_TYPE_WARLORD,
		level: 16,
		resources: {
			'coins': 20000,
			'prestige': 10,
			'espionage': 50
		},
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
			'Militia': 120,
			'Bowman': 32,
		},
		location: {
			x: 190,
			y: 310
		}
	},
	'Thebes': {
		nationality: city_builder.NATION_TYPE_EGYPTIAN,
		ruler: 'Hatshepsut',
		avatar: 36,
		icon: 4,
		climate: city_builder.CLIMATE_TYPE_TROPICAL,
		personality: city_builder.PERSONALITY_TYPE_DIPLOMAT,
		level: 38,
		resources: {
			'coins': 280000,
			'prestige': 600,
			'espionage': 580
		},
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
		location: {
			x: 330,
			y: 300
		}
	},
	'Toledo': {
		nationality: city_builder.NATION_TYPE_SPANISH,
		ruler: 'Juan Luiz',
		avatar: 12,
		icon: 5,
		climate: city_builder.CLIMATE_TYPE_TEMPERATE,
		personality: city_builder.PERSONALITY_TYPE_BALANCED,
		level: 21,
		resources: {
			'coins': 110000,
			'prestige': 180,
			'espionage': 200
		},
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
				mosaic: city_builder.GOODS_IMPORTANCE_VITAL,
				wine: city_builder.GOODS_IMPORTANCE_HIGH,
				silk: city_builder.GOODS_IMPORTANCE_LOW,
				wood: city_builder.GOODS_IMPORTANCE_MEDIUM,
				cattle: city_builder.GOODS_IMPORTANCE_LOW,
				statues: city_builder.GOODS_IMPORTANCE_VITAL
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
		nationality: city_builder.NATION_TYPE_FRANKS,
		ruler: 'Clovis',
		avatar: 44,
		icon: 5,
		climate: city_builder.CLIMATE_TYPE_CONTINENTAL,
		personality: city_builder.PERSONALITY_TYPE_WARLORD,
		level: 22,
		resources: {
			'coins': 10000,
			'prestige': 360,
			'espionage': 500
		},
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
				silver: city_builder.GOODS_IMPORTANCE_VITAL,
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
		location: {
			x: 130,
			y: 80
		}
	},
	'Uruk': {
		nationality: city_builder.NATION_TYPE_SUMERIAN,
		ruler: 'Gilgamesh',
		avatar: 14,
		icon: 7,
		climate: city_builder.CLIMATE_TYPE_TROPICAL,
		personality: city_builder.PERSONALITY_TYPE_WARLORD,
		level: 26,
		resources: {
			'coins': 80000,
			'prestige': 400,
			'espionage': 500
		},
		trades: {
			'imports': {
				wheat: city_builder.GOODS_IMPORTANCE_VITAL,
				wood: city_builder.GOODS_IMPORTANCE_HIGH,
				sugar: city_builder.GOODS_IMPORTANCE_LOW,
				sugarcane: city_builder.GOODS_IMPORTANCE_LOW,
				clay: city_builder.GOODS_IMPORTANCE_VITAL
			},
			'exports': {
				silver: city_builder.GOODS_IMPORTANCE_VITAL,
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
		location: {
			x: 400,
			y: 170
		}
	},
	'Xinjiang': {
		nationality: city_builder.NATION_TYPE_CHINESE,
		ruler: 'Gaozu',
		avatar: 15,
		icon: 7,
		climate: city_builder.CLIMATE_TYPE_TEMPERATE,
		personality: city_builder.PERSONALITY_TYPE_BALANCED,
		level: 29,
		resources: {
			'coins': 240000,
			'prestige': 500,
			'espionage': 800
		},
		trades: {
			'imports': {
				salt: city_builder.GOODS_IMPORTANCE_MEDIUM,
				stones: city_builder.GOODS_IMPORTANCE_VITAL,
				gems: city_builder.GOODS_IMPORTANCE_LOW,
				pearls: city_builder.GOODS_IMPORTANCE_LOW
			},
			'exports': {
				donkeys: city_builder.GOODS_IMPORTANCE_VITAL,
				sulphur: city_builder.GOODS_IMPORTANCE_VITAL,
				silk: city_builder.GOODS_IMPORTANCE_MEDIUM,
				glass: city_builder.GOODS_IMPORTANCE_HIGH,
				carpets: city_builder.GOODS_IMPORTANCE_LOW,
				cannons: city_builder.GOODS_IMPORTANCE_LOW
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
		nationality: city_builder.NATION_TYPE_CHINESE,
		ruler: 'Wu Ding',
		avatar: 15,
		icon: 7,
		climate: city_builder.CLIMATE_TYPE_TEMPERATE,
		personality: city_builder.PERSONALITY_TYPE_WARLORD,
		level: 22,
		resources: {
			'coins': 240000,
			'prestige': 420,
			'espionage': 700
		},
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
				donkeys: city_builder.GOODS_IMPORTANCE_VITAL,
				sulphur: city_builder.GOODS_IMPORTANCE_VITAL,
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
		location: {
			x: 760,
			y: 240
		}
	}
};

/**
 * Event responsable for destroying a building.
 * 
 * @type {Number}
 * @constant
 */
city_builder.EVENT_EFFECT_DESTROY_BUILDING = 0;

/**
 * Event responsable for losing coins.
 * 
 * @type {Number}
 * @constant
 */
city_builder.EVENT_EFFECT_LOSE_COINS = 1;

/**
 * Event responsable for gaining coins.
 * 
 * @type {Number}
 * @constant
 */
city_builder.EVENT_EFFECT_GAIN_COINS = 2;

/**
 * Event responsable for raising the influence with another city.
 * 
 * @constant
 * @type {Number}
 */
city_builder.EVENT_EFFECT_RAISE_INFLUENCE = 3;

/**
 * Event responsable for lowering the influence with another city.
 * 
 * @constant
 * @type {Number}
 */
city_builder.EVENT_EFFECT_LOWER_INFLUENCE = 4;

/**
 * Event responsable for losing fame.
 * 
 * @type {Number}
 * @constant
 */
city_builder.EVENT_EFFECT_LOSE_FAME = 5;

/**
 * Event responsable for gaining fame.
 * 
 * @type {Number}
 * @constant
 */
city_builder.EVENT_EFFECT_GAIN_FAME = 6;

/**
 * Event responsable for losing espionage.
 * 
 * @type {Number}
 * @constant
 */
city_builder.EVENT_EFFECT_LOSE_ESPIONAGE = 7;

/**
 * Event responsable for gaining espionage.
 * 
 * @type {Number}
 * @constant
 */
city_builder.EVENT_EFFECT_GAIN_ESPIONAGE = 8;

/**
 * List of all available in-game events.
 * 
 * @constant
 * @type {Array}
 */
city_builder.EVENTS = [{
	name: 'Great earthquake',
	handle: 'earthquake1',
	description: '',
	chance: 0.0001,
	effect: city_builder.EVENT_EFFECT_DESTROY_BUILDING,
	data: {
		amount: 1
	}
}, {
	name: 'Royal marriage',
	handle: 'marriage',
	description: 'A marriage was arranged between a member of your family and the royal family of CITY. This raises your influence on CITY. Good job!',
	chance: 0.001,
	effect: city_builder.EVENT_EFFECT_RAISE_INFLUENCE,
	data: {
		amount: 50,
		city: 'Rome'
	}
}, {
	name: 'Raiders attack',
	handle: 'raiders',
	description: 'A band of raiders attacked the outskirts of your city. Repairing the affected buildings costed AMOUNT coins.',
	chance: 0.001,
	effect: city_builder.EVENT_EFFECT_LOSE_COINS,
	data: {
		amount: 1000
	}
}, {
	name: 'Discovery',
	handle: 'discovery',
	description: 'The engineers in your city made a great discovery which made your city more famous, thus gaining AMOUNT fame.',
	chance: 0.008,
	effect: city_builder.EVENT_EFFECT_GAIN_FAME,
	data: {
		amount: 100,
	}
}, {
	name: 'Spy Found',
	handle: 'spyfound',
	description: 'A spy from CITY was found hiding in your city, as a reward for finding him you gain AMOUNT espionage.',
	chance: 0.010,
	effect: city_builder.EVENT_EFFECT_GAIN_ESPIONAGE,
	data: {
		amount: 10,
	}
}, {
	name: 'Discovery',
	handle: 'spydiscovered',
	description: 'One of your spies in CITY was discovered, CITY`s ruler is angry so you lose AMOUNT espionage.',
	chance: 0.010,
	effect: city_builder.EVENT_EFFECT_LOSE_ESPIONAGE,
	data: {
		amount: 10,
	}
}];

/**
 * List of resources to start with in various difficulty modes.
 *
 * @constant
 * @type {Object}
 */
city_builder.RESOURCES_START = [{
		'coins': 50000,
		'fame': 10,
		'prestige': 1,
		'espionage': 1,
		'bread': 300,
		'meat': 100,
		'stones': 100,
		'weapons': 100,
		'wheat': 40,
		'wood': 100
	}, {
		'coins': 20000,
		'fame': 1,
		'prestige': 1,
		'espionage': 1,
		'bread': 300,
		'meat': 100,
		'stones': 100,
		'weapons': 60,
		'wheat': 40,
		'wood': 100
	}, {
		'coins': 10000,
		'fame': 1,
		'prestige': 1,
		'espionage': 1,
		'bread': 300,
		'meat': 100,
		'stones': 70,
		'wheat': 40,
		'wood': 70
	}, {
		'coins': 5000,
		'fame': 1,
		'prestige': 1,
		'espionage': 1,
		'bread': 100,
		'meat': 50,
		'stones': 50,
		'wheat': 40,
		'wood': 50
}];

/**
 * List of all the resources available in-game.
 * 
 * @constant
 * @type {Object}
 */
city_builder.RESOURCES = {
	'coins': {
		name: 'Coins'
	},
	'fame': {
		name: 'Fame'
	},
	'prestige': {
		name: 'Prestige'
	},
	'espionage': {
		name: 'Espionage'
	},
	'almonds': {
		name: 'Almonds',
		price: 200
	},
	'barrels': {
		name: 'Barrels',
		price: 60
	},
	'beer': {
		name: 'Beer',
		price: 30
	},
	'books': {
		name: 'Books',
		price: 120
	},
	'bread': {
		name: 'Bread',
		price: 30
	},
	'brine': {
		name: 'Brine',
		price: 10
	},
	'brass': {
		name: 'Brass',
		price: 60
	},
	'candles': {
		name: 'Candles',
		price: 100
	},
	'candlesticks': {
		name: 'Candlesticks',
		price: 170
	},
	'cannons': {
		name: 'Cannons',
		price: 700
	},
	'carpets': {
		name: 'Carpets',
		price: 400
	},
	'cattle': {
		name: 'Cattle',
		price: 41
	},
	'cider': {
		name: 'Cider',
		price: 42
	},
	'clay': {
		name: 'Clay',
		price: 35
	},
	'clothes': {
		name: 'Clothes',
		price: 104
	},
	'coal': {
		name: 'Coal',
		price: 34
	},
	'coffee': {
		name: 'Coffee',
		price: 240
	},
	'coffeebeans': {
		name: 'Coffee Beans',
		price: 136
	},
	'copper': {
		name: 'Copper',
		price: 43
	},
	'donkeys': {
		name: 'Donkeys',
		price: 90
	},
	'fish': {
		name: 'Fish',
		price: 16
	},
	'flour': {
		name: 'Flour',
		price: 42
	},
	'furcoats': {
		name: 'Fur coats',
		price: 122
	},
	'furs': {
		name: 'Furs',
		price: 78
	},
	'gems': {
		name: 'Gems',
		price: 460
	},
	'glass': {
		name: 'Glass',
		price: 86
	},
	'glasses': {
		name: 'Glasses',
		price: 140
	},
	'gold': {
		name: 'Gold',
		price: 194
	},
	'goldores': {
		name: 'Gold ores',
		price: 90
	},
	'grapes': {
		name: 'Grapes',
		price: 35
	},
	'hemp': {
		name: 'Hemp',
		price: 46
	},
	'herbs': {
		name: 'Herbs',
		price: 18
	},
	'hides': {
		name: 'Hides',
		price: 25
	},
	'indigo': {
		name: 'Indigo',
		price: 80
	},
	'iron': {
		name: 'Iron',
		price: 86
	},
	'ironores': {
		name: 'Iron ores',
		price: 45
	},
	'leather': {
		name: 'Leather',
		price: 60
	},
	'meat': {
		name: 'Meat',
		price: 30
	},
	'milk': {
		name: 'Milk',
		price: 55
	},
	'mosaic': {
		name: 'Mosaic',
		price: 200
	},
	'paper': {
		name: 'Paper',
		price: 70
	},
	'pearls': {
		name: 'Pearls',
		price: 450
	},
	'perfume': {
		name: 'Perfume',
		price: 305
	},
	'quartz': {
		name: 'Quartz',
		price: 26
	},
	'robes': {
		name: 'Robes',
		price: 220
	},
	'ropes': {
		name: 'Ropes',
		price: 42
	},
	'roses': {
		name: 'Roses',
		price: 70
	},
	'salt': {
		name: 'Salt',
		price: 20
	},
	'silk': {
		name: 'Silk',
		price: 320
	},
	'silver': {
		name: 'Silver',
		price: 300
	},
	'spices': {
		name: 'Spices',
		price: 285
	},
	'spyglasses': {
		name: 'Spyglasses',
		price: 280
	},
	'statues': {
		name: 'Statues',
		price: 800
	},
	'stones': {
		name: 'Stones',
		price: 16
	},
	'sugar': {
		name: 'Sugar',
		price: 145
	},
	'sugarcane': {
		name: 'Sugarcane',
		price: 120
	},
	'sulphur': {
		name: 'Sulphur',
		price: 180
	},
	'wax': {
		name: 'Wax',
		price: 40
	},
	'weapons': {
		name: 'Weapons',
		price: 205
	},
	'wheat': {
		name: 'Wheat',
		price: 25
	},
	'wine': {
		name: 'Wine',
		price: 95
	},
	'wood': {
		name: 'Wood',
		price: 17
	}
};

city_builder.MAIN_RESOURCES = [
	'coins', 'bread', 'brass', 'cannons', 'cattle', 'cider', 'clay', 'clothes', 'coal', 'copper',
	'fish', 'flour', 'furs', 'herbs', 'hides', 'iron', 'ironores', 'meat', 'milk', 'salt',
	'stones', 'weapons', 'wheat', 'wood'
];

/**
 * Special check if the debug mode is activated. If yes, add a special sandbox city with
 * goodies, nice trades and a cool alliance.
 * Throw in some coins too.
 */
if (city_builder.DEBUG === true) {
	city_builder.CITIES['Sandbox'] = {
		nationality: city_builder.NATION_TYPE_ASSYRIAN,
		ruler: 'Sandking',
		avatar: 1,
		icon: 2,
		climate: city_builder.CLIMATE_TYPE_TEMPERATE,
		personality: city_builder.PERSONALITY_TYPE_DIPLOMAT,
		level: 30,
		resources: {
			'coins': 1000000,
			'prestige': 999
		},
		trades: {
			'imports': {
				gold: city_builder.GOODS_IMPORTANCE_VITAL,
				goldores: city_builder.GOODS_IMPORTANCE_VITAL,
				weapons: city_builder.GOODS_IMPORTANCE_VITAL,
				weapons: city_builder.GOODS_IMPORTANCE_VITAL,
				milk: city_builder.GOODS_IMPORTANCE_VITAL,
				gems: city_builder.GOODS_IMPORTANCE_VITAL,
				pearls: city_builder.GOODS_IMPORTANCE_VITAL
			},
			'exports': {
				stones: city_builder.GOODS_IMPORTANCE_VITAL,
				wood: city_builder.GOODS_IMPORTANCE_VITAL,
				ironores: city_builder.GOODS_IMPORTANCE_VITAL,
				goldores: city_builder.GOODS_IMPORTANCE_VITAL,
				copper: city_builder.GOODS_IMPORTANCE_VITAL,
				clay: city_builder.GOODS_IMPORTANCE_VITAL,
				iron: city_builder.GOODS_IMPORTANCE_VITAL,
				gold: city_builder.GOODS_IMPORTANCE_VITAL,
				meat: city_builder.GOODS_IMPORTANCE_VITAL,
				bread: city_builder.GOODS_IMPORTANCE_VITAL,
				coal: city_builder.GOODS_IMPORTANCE_VITAL
			}
		},
		army: {
			'Militia': 99,
			'Axeman': 99,
			'Knight': 99,
			'Bowman': 99,
			'Crossbowman': 99,
			'Pikeman': 99
		},
		navy: {
			'Corsair': 99,
			'Caravel': 99,
			'Warship': 99
		},
		location: {
			x: 460,
			y: 260
		}
	};
}

/**
 * Utils object.
 */
city_builder.utils = {

	/**
	 * Round the number to nearest 10.
	 *
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	get_up_number: function(value) {
		return Math.floor(value / 10) * 10;
	},
	
	/**
	 * Return a random number between min and max.
	 *
	 * @public
	 * @param {Number} min
	 * @param {Number} max
	 * @returns {Number}
	 */
	get_random: function(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	},

	/**
	 * Return a random number based on importance.
	 *
	 * @public
	 * @param {Number} importance
	 * @returns {Number}
	 */
	get_random_by_importance: function(importance) {
		return city_builder.utils.get_up_number(Math.random() * importance) * 10 + 10;
	},

	/**
	 * Return the resource name by handle.
	 *
	 * @public
	 * @param {String} handle
	 * @returns {String}
	 */
	get_resource_name: function(handle) {
		return city_builder.RESOURCES[handle].name;
	},

	/**
	 * Calculate the resource price for the specified amount minus the discount.
	 * 
	 * @param {Number} amount
	 * @param {String} resource
	 * @param {Number} discount
	 * @returns {Number}
	 * @public
	 */
	calc_price_minus_discount: function (amount, resource, discount) {
		return Math.ceil(Math.ceil(city_builder.RESOURCES[resource].price - discount) * amount);
	},
		
	/**
	 * Calculate the resource price for the specified amount.
	 * 
	 * @param {Number} amount
	 * @param {String} resource
	 * @returns {Number}
	 * @public
	 */
	calc_price: function (amount, resource) {
		return Math.ceil(amount * (city_builder.RESOURCES[resource].price));
	},

	/**
	 * Calculate the resource price for the specified amount plus the discount.
	 * 
	 * @param {Number} amount
	 * @param {String} resource
	 * @param {Number} discount
	 * @returns {Number}
	 * @public
	 */
	calc_price_plus_discount: function (amount, resource, discount) {
		return Math.ceil(Math.ceil(city_builder.RESOURCES[resource].price + discount) * amount);
	},
	
	/**
	 * Format the current time.
	 * 
	 * @returns {String}
	 * @public
	 */
	get_now: function () {
		var today = new Date();
		var hh = today.getHours();
		var mm = today.getMinutes();
		var ss = today.getSeconds();
		return hh + ':' + mm + ':' + ss;
	},

	/**
	 * Format a number so that it's more user-friendly.
	 *
	 * @returns {String}
	 * @public
	 */
	nice_numbers: function(num) {
		if (num >= 1000000000) {
			return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
		}
		if (num >= 1000000) {
			return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
		}
		if (num >= 1000) {
			return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
		}
		return num;
	}
};

/**
 * Main Game AI (Artificial Intelligence) object.
 * 
 * @param {type} params
 * @class {city_builder.ai}
 * @returns {city_builder.__constructor}
 */
city_builder.ai = function (params) {

	/**
	 * Reference to the core object.
	 * 
	 * @type {city_builder.game}
	 */
	this.core = null;

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {city_builder.ai}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		this.core = params.core;
		return this;
	};

	// Fire up the constructor
	return this.__constructor(params);
};

/**
 * Main Game API object.
 * 
 * @param {type} params
 * @class {city_builder.api}
 * @returns {city_builder.__constructor}
 */
city_builder.api = function (params) {

	/**
	 * Reference to the core object.
	 * 
	 * @type {city_builder.game}
	 */
	this.core = null;

	/**
	 * Module version.
	 * 
	 * @private
	 * @type {String}
	 */
	this.version = '0.2.0';

	/**
	 * Sign in a visitor using the specified data.
	 * 
	 * @param {Object} data
	 * @returns {city_builder.api@call;request}
	 */
	this.login = function (data) {
		return this.request({
			url: 'login',
			data: data
		});
	};

	/**
	 * Return the module version.
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_version = function () {
		return this.version;
	};

	/**
	 * Sign out the currently logged in user.
	 * 
	 * @returns {city_builder.api@call;request}
	 */
	this.logout = function () {
		return this.request({
			url: 'logout'
		});
	};

	/**
	 * Get information about the application and API version.
	 *
	 * @returns {city_builder.api@call;request}
	 */
	this.api_version = function() {
		return this.request({
			url: 'version'
		});
	};

	/**
	 * Get information about the currently logged in user's city.
	 *
	 * @returns {city_builder.api@call;request}
	 */
	this.city_info = function() {
		return this.request({
			url: 'city'
		});
	};

	/**
	 * Perform a heartbeat request and get data about it.
	 *
	 * @returns {city_builder.api@call;request}
	 */
	this.heartbeat = function() {
		return this.request({
			url: 'heartbeat'
		});
	};

	/**
	 * Register a visitor using the specified data.
	 * 
	 * @param {Object} data
	 * @returns {city_builder.api@call;request}
	 */
	this.register = function (data) {
		return this.request({
			url: 'register',
			data: data
		});
	};

	/**
	 * Export the specified data to the API endpoint.
	 * 
	 * @param {Object} data
	 * @returns {city_builder.api@call;request}
	 */
	this.do_export = function (data) {
		return this.request({
			url: 'export',
			data: data
		});
	};

	/**
	 * Import the specified data from the API endpoint.
	 * 
	 * @param {Object} data
	 * @returns {city_builder.api@call;request}
	 */
	this.do_import = function (data) {
		return this.request({
			url: 'import',
			data: data
		});
	};

	/**
	 * Internal function for performing an API AJAX request.
	 * 
	 * @param {Object} data
	 * @returns {city_builder.api}
	 */
	this._request = function (data) {
		$.ajax({
			type: (typeof data.requestType !== 'undefined') ? data.requestType : 'POST',
			dataType: typeof data.dataType !== 'undefined' ? data.dataType : 'jsonp',
			xhrFields: {
				withCredentials: (typeof data.auth === 'undefined' || data.auth === true) ? true : false
			},
			crossDomain: true,
			data: data.data,
			url: city_builder.API_VERSION_URL + data.url,
			async: (typeof data.async === 'undefined' || data.async == true) ? true : false,
			success: data.success instanceof Function ? data.success : function () {
				// TODO
			},
			error: data.error instanceof Function ? data.error : function () {
				// TODO
			}
		});
		return this;
	};

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {city_builder.api}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		this.core = params.core;
		return this;
	};

	// Fire up the constructor
	return this.__constructor(params);
};

/**
 * Game jailer (enforcing security) object.
 * 
 * @param {type} params
 * @class {city_builder.jailer}
 * @returns {city_builder.__constructor}
 */
city_builder.jailer = function (params) {

	/**
	 * Reference to the core object.
	 * 
	 * @type {city_builder.game}
	 */
	this.core = null;

	/**
	 * Module version.
	 * 
	 * @private
	 * @type {String}
	 */
	this.version = '0.2.0';
	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {city_builder.jailer}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		this.core = params.core;
		return this;
	};

	/**
	 * Return the module version.
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_version = function () {
		return this.version;
	};

	/**
	 * Perform an actual security audit.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.check = function () {
		return true;
	};

	// Fire up the constructor
	return this.__constructor(params);
};

/**
 * Main Game UI interface.
 */
city_builder.ui = {
	
	building_panel_template: '<div id="panel-{id}" class="panel pb">' +
			'<header>' +
				'<span class="title"></span>' +
				'<a class="tips close btn" title="' + city_builder.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents"></div>' +
			'<foooter class="footer">' +
				'<a class="tips demolish btn" title="' + city_builder.l('Demolish this building') + '"></a>' +
				'<a class="tips pause start btn" title="' + city_builder.l('Control (start/pause) production') + '"></a>' +
				'<a class="tips upgrade btn" title="' + city_builder.l('Upgrade building') + '"></a>' +
				'<a class="tips help btn" data-ctxt="{context}" data-term="{building}" title="' + city_builder.l('Info about this building') + '"></a>' +
			'</footer>' +
		'</div>',
	
	worldmap_panel_template: '<div id="panel-{id}" class="panel">' +
			'<header>' +
				'<span class="title">' + city_builder.l('World Map') + '</span>' +
				'<a class="tips btn close" title="' + city_builder.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents"><div class="worldmap"></div></div>' +
		'</div>',
	
	generic_panel_template: '<div id="panel-{id}" class="panel">' +
			'<header>' +
			'<span class="title">{title}</span>' +
			'<a class="tips btn close" title="' + city_builder.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents"></div>' +
			'</div>',
	
	normal_panel: function (section, contents) {
		var out = '<fieldset>' +
				'<legend>' + section + '</legend>' +
				contents +
				'</fieldset>';
		return out;
	},
	
	cost_panel: function (costs) {
		var out = '';
		if (typeof costs !== 'undefined') {
			out += '<dt>' + city_builder.l('Cost') + '</dt>';
			for (var item in costs) {
				out += '<dd>' + city_builder.utils.nice_numbers(costs[item]) + city_builder.ui.resource_small_img(item) + '</dd>';
			}
		}
		return out;
	},
	
	city_worldmap_element: function (name) {
		return '<div data-name="' + name + '" class="tips city c' + city_builder.CITIES[name].icon + '" title="' + city_builder.l('City of') + ' ' + name + '" style="left:' + city_builder.CITIES[name].location.x + 'px;top:' + city_builder.CITIES[name].location.y + 'px"></div>';
	},
	
	army_img: function (name) {
		return '<img class="tips" title="' + name + '" src="' + city_builder.ASSETS_URL + 'images/armies/' + name.toLowerCase().replace(/ /g,"_") + '_small.png" />';
	},
	
	army_list: function (army, no_margin) {
		var out = '<dl' + ((typeof no_margin !== 'undefined' && no_margin === true) ? ' class="nomg"' : '') + '>';
		var total = 0;
		for (var soldier in army.army) {
			out += '<dt>' + army.army[soldier] + '</dt>' +
					'<dd>' + city_builder.ui.army_img(soldier) + '</dd>';
			total += army.army[soldier];
		}
		out += '<dt>' + (typeof army.total !== 'undefined' ? army.total : total) + '</dt><dd>' + city_builder.l('Total') + '</dd>' +
				'</dl>';
		return out;
	},
	
	/**
	 * Check if a panel exists and is opened.
	 * 
	 * @param {String} id
	 * @public
	 * @returns {Boolean}
	 */
	panel_exists: function (id) {
		if ($(id).length == 0) {
			return false;
		}
		return true;
	},
	
	panel_btn: function (text, title, handle, class_name, disabled) {
		return '<a title="' + title + '" data-handle="' + handle + '" class="tips ' + class_name + (disabled === true ? ' disabled' : '') + '" href="#">' + text + '</a></td>';
	},
	
	trades_list: function (trades, mode) {
		mode = (typeof mode === 'undefined' || mode === 'imports') ? 'imports' : 'exports';
		var out = '';
		if (trades !== null) {
			out += '<dl>';
			var trade = trades[mode];
			for (var item in trade) {
				out += '<dt>' + trade[item] + '</dt>' +
						'<dd>' + city_builder.ui.resource_small_img(item) + '</dd>';
			}
			out += '</dl>';
		}
		return out;
	},
	
	navy_list: function (army, no_margin) {
		var out = '<dl' + ((typeof no_margin !== 'undefined' && no_margin === true) ? ' class="nomg"' : '') + '>';
		var total = 0;
		for (var soldier in army.navy) {
			out += '<dt>' + army.navy[soldier] + '</dt>' +
					'<dd>' + city_builder.ui.army_img(soldier) + '</dd>';
			total += army.navy[soldier];
		}
		out += '<dt>' + (typeof army.total !== 'undefined' ? army.total : total) + '</dt><dd>' + city_builder.l('Total') + '</dd>' +
				'</dl>';
		return out;
	},
	
	building_element: function (params) {
		var building_image = params.type;
		var description = '<br /><span class="smalldesc">' + params.data.description + '</span>';
		if (params.type.slice(0, -1) === 'house') {
			var building_image = params.type.slice(0, -1);
		}
		var image = (typeof params.data.visible_upgrades === 'undefined' || params.data.visible_upgrades === false) ? building_image + '1' : building_image + params.data.level;
		return '<div data-type="' + params.type + '" data-level="' + params.data.level + '" ' +
				'style="background:transparent url(' + city_builder.ASSETS_URL + 'images/buildings/' + image + '.png) no-repeat;left:' + params.data.position.x + 'px;top:' + params.data.position.y + 'px" ' +
				'title=\'<span class="buildinginfo">' + params.data.name + '</span> ' + description + '\' ' +
				'id="building-' + params.data.handle + '"' +
				'class="tips slots building"></div>';
	},
	
	resource_storage_el: function (resource, amount) {
		return '<div class="storage-item item-' + resource + '">' +
				'<span class="title">' + city_builder.utils.get_resource_name(resource) + '</span>' +
				'<img src="' + city_builder.ASSETS_URL + 'images/resources/' + resource + '.png" />' +
				'<span class="amount">' + amount + '</amount>' +
				'</div>';
	},
	
	tabs: function (data) {
		var out = '<div class="tabs">' +
				'<ul>';
		for (var i = 0; i < data.length; i++) {
			out += '<li><a href="#tab-' + data[i].toLowerCase() + '">' + data[i] + '</a></li>';
		}
		out += '</ul>';
		for (var i = 0; i < data.length; i++) {
			out += '<div id="tab-' + data[i].toLowerCase() + '">' +
					'</div>';
		}
		out += '</div>';
		return out;
	},
	
	materials_panel: function (materials) {
		var out = '';
		if (typeof materials !== 'undefined') {
			out += '<dt>' + city_builder.l('Uses') + '</dt>';
			for (var item in materials) {
				out += '<dd>' + materials[item] + city_builder.ui.resource_small_img(item) + '</dd>';
			}
		}
		return out;
	},
	
	production_panel: function (materials, level) {
		var out = '';
		if (typeof materials !== 'undefined') {
			out += '<dt>' + city_builder.l('Produces') + '</dt>';
			for (var item in materials) {
				out += '<dd>' + (level * materials[item]) + city_builder.ui.resource_small_img(item) + '</dd>';
			}
		}
		return out;
	},
	
	requires_panel: function (requires) {
		var out = '';
		if (typeof requires.buildings !== 'undefined') {
			out += '<dt>' + city_builder.l('Requires') + '</dt>';
			var b = city_builder.BUILDINGS[city_builder.BUILDINGS.findIndexM(requires.buildings)];
			out += '<dd>' + b.name + '</span>';
		}
		return out;
	},
	
	tax_panel: function (tax, level) {
		var out = '';
		if (typeof tax !== 'undefined') {
			out += '<dt>' + city_builder.l('Tax') + '</dt>';
			out += '<dd>' + (level * tax) + city_builder.ui.resource_small_img('coins') + '</dd>';
		}
		return out;
	},
	
	storage_panel: function (storage, level) {
		var out = '';
		if (typeof storage !== 'undefined') {
			out += '<dt>' + city_builder.l('Storage') + '</dt>';
			out += '<dd>' + (level * storage) + '<img alt="Storage space" class="tips" title="' + city_builder.l('Storage Space') + '" src="' + city_builder.ASSETS_URL + 'images/resources/storage_small.png" /></dd>';
		}
		return out;
	},
	
	resource_small_img: function (resource) {
		return '<img alt="' + city_builder.utils.get_resource_name(resource) + '" class="tips" title="' + city_builder.utils.get_resource_name(resource) + '" src="' + city_builder.ASSETS_URL + 'images/resources/' + resource + '_small.png" />';
	}
};

/**
 * Main Game city object.
 * 
 * @param {type} params
 * @class {city_builder.city}
 * @returns {city_builder.city}
 */
city_builder.city = function(params) {
	
	/**
	 * The name of this city.
	 * 
	 * @private
	 * @type {String}
	 */
	this.name = null;
	
	/**
	 * The name of the city ruler.
	 * 
	 * @private
	 * @type {String}
	 */
	this.ruler = null;
	
	/**
	 * Pointer to the game core.
	 * 
	 * @private
	 * @type {city_builder.game}
	 */
	this.core = null;
	
	/**
	 * List of the buildings in this city.
	 * 
	 * @private
	 * @type {Array}
	 */
	this.buildings = [];
	
	/**
	 * Export data of the buildings list.
	 *
	 * @private
	 * @type {Array}
	 */
	this.buildings_list = [];
	
	/**
	 * Storage space available in this city.
	 * 
	 * @private
	 * @type {Number}
	 */
	this.storage = 0;

	/**
	 * The personality of the city ruler. It affects the relations with the
	 * other cities of the world.
	 * 
	 * @private
	 * @type {String}
	 */
	this.personality = null;
	
	/**
	 * The nationality of the city. It affects the relations with the
	 * other cities of the world.
	 * 
	 * @private
	 * @type {String}
	 */
	this.nationality = null;
	
	/**
	 * The climate of the zone the city resides in. It affects the type of
	 * the buildings you can construct.
	 * 
	 * @private
	 * @type {String}
	 */
	this.climate = null;
	
	/**
	 * Soldiers headquartered in this city.
	 * 
	 * @private
	 * @type {Number}
	 */
	this.army = [];
	
	/**
	 * Flag whether this city belongs to a player or is AI-controlled.
	 *
	 * @private
	 * @type {Boolean}
	 */
	this.player = false;

	/**
	 * Ships built in this city.
	 * 
	 * @private
	 * @type {Number}
	 */
	this.navy = [];

	/**
	 * Mercenary armies available for this city.
	 * 
	 * @private
	 * @type {Number}
	 */
	this.mercenary = [];
	
	/**
	 * The resources of this city.
	 * 
	 * @private
	 * @type {Object}
	 */
	this.resources = {};
	
	this.data = null;
	
	/**
	 * The level of the city.
	 * 
	 * @private
	 * @type {Number}
	 */
	this.level = 1;
	
	/**
	 * List of the imports and exports of this city.
	 * 
	 * @private
	 * @type {Object}
	 */
	this.trades = null;
	
	/**
	 * The avatar of the ruler of this city.
	 * 
	 * @type {Number}
	 * @private
	 */
	this.avatar = null;

	/**
	 * The icon of this city.
	 * 
	 * @type {Number}
	 * @private
	 */
	this.icon = null;

	/**
	 * The influence of this city.
	 *
	 * @type {Object}
	 * @private
	 */
	this.influence = {};
	
	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {city_builder.city}
	 * @param {Object} params
	 */
	this.__constructor = function(params) {
		this.core = params.core;
		this.name = params.name;
		this.data = params.data;
		this.player = (typeof params.player !== 'undefined') ? params.player : false;
		this.level = (typeof params.data.level !== 'undefined') ? params.data.level : 1;
		this.resources = this._build_resources(params);
		this.personality = (typeof params.data.personality !== 'undefined') ? params.data.personality : city_builder.PERSONALITY_TYPE_BALANCED;
		this.nationality = (typeof params.data.nationality !== 'undefined') ? params.data.nationality : city_builder.NATION_TYPE_ROMAN;
		this.climate = (typeof params.data.climate !== 'undefined') ? params.data.climate : city_builder.CLIMATE_TYPE_TEMPERATE;
		this.ruler = (typeof params.data.ruler !== 'undefined') ? params.data.ruler : 0;
		this.avatar = (typeof params.data.avatar !== 'undefined') ? params.data.avatar : 1;
		this.icon = (typeof params.data.icon !== 'undefined') ? params.data.icon : 1;
		this.reset_trades();
		return this;
	};
	
	/**
	 * Adjust the resources according to the city owner.
	 *
	 * @private
	 * @param {Object} params
	 * @returns {Object}
	 */
	this._build_resources = function(params) {
		var resources = {};
		var difficulty = this.get_core().get_difficulty();
		for (var item in city_builder.RESOURCES) {
			if (this.player === true) {
				if (typeof city_builder.RESOURCES_START[difficulty - 1][item] === 'undefined') {
					resources[item] = 0;
				} else {
					resources[item] = city_builder.RESOURCES_START[difficulty - 1][item];
				}
			} else {
				if (typeof params.data.resources[item] !== 'undefined') {
					resources[item] = params.data.resources[item];
				} else {
					resources[item] = 0;
				}
				resources.fame = city_builder.LEVELS[this.get_level()];
			}
		}
		return resources;
	};

	/**
	 * Buy the specified goods from a city.
	 * 
	 * @public
	 * @param {Object|String} city
	 * @param {String} resource
	 * @param {Number} amount
	 * @returns {Object|Boolean}
	 */
	this.buy_from_city = function(city, resource, amount) {
		var resources = this.get_resources();
		var _city;
		if (typeof city === 'string') {
			_city = this.get_core().get_city(city);
			if (city === false) {
				this.get_core().error(city + ' does not exist.');
				return false;
			}
		} else {
			_city = city;
		}
		var trades = _city.get_trades();
		if (trades === null) {
			this.get_core().error(city + ' does not trade any goods.');
			return false;
		}
		if (typeof trades.exports === 'undefined') {
			this.get_core().error(city + ' does not export any goods.');
			return false;
		}
		for (var item in trades.exports) {
			if (item === resource) {
				if (typeof amount === 'undefined') {
					amount = trades.exports[item];
				}
				var discount = Math.ceil((city_builder.RESOURCES[item].price * city_builder.TRADES_ADDITION) / 100);
				var price = city_builder.utils.calc_price_plus_discount(amount, item, discount);
				var city_price = city_builder.utils.calc_price(amount, item);
				var item_discount_price = Math.ceil(city_builder.RESOURCES[item].price + discount);
				if (!this.has_storage_space_for(amount)) {
					return false;
				}
				if (this.dec_coins(price) === false) {
					return false;
				}
				_city.inc_coins(city_price);
				this.add_to_storage(item, amount);
				this.remove_from_exports(_city, item, amount);
				this.raise_influence(city, 2);
				this.raise_prestige();
				this.inc_fame(50);
				this.get_core().refresh_ui();
				this.get_core().notify(this.get_name() + ' bought ' + amount + ' ' + city_builder.utils.get_resource_name(item) + ' from ' + city + ' for ' + item_discount_price + ' coins each, for a total of ' + price + ' coins.', 'Transaction done');
				this.get_core().refresh_panels();
				return {
					buyer: this.get_name(),
					amount: amount,
					goods: city_builder.utils.get_resource_name(item),
					seller: city,
					price: Math.round(city_builder.RESOURCES[item].price + discount),
					totalPrice: price
				};
			}
		}
		this.get_core().error(city + ' does not export the requested goods.');
		return false;
	};
	
	/**
	 * Remove a specified amount of a resource from the storage of this city.
	 * 
	 * @public
	 * @param {String} item
	 * @param {Number} amount
	 * @returns {Boolean}
	 */
	this.remove_resource = function(item, amount) {
		var res = this.get_resources();
		if (!this.has_resources(item, amount)) {
			return false;
		}
		res[item] = res[item] - amount;
		return true;
	};
	
	/**
	 * Add a specified amount of a resource to the storage of this city.
	 * 
	 * @public
	 * @param {String} item
	 * @param {Number} amount
	 * @returns {Boolean}
	 */
	this.add_to_storage = function(item, amount) {
		var res = this.get_resources();
		res[item] = res[item] + amount;
		return true;
	};
	
	/**
	 * Check if the city has the required coins to create this building.
	 * 
	 * @public
	 * @param {Number} coins
	 * @returns {Boolean}
	 */
	this.has_coins = function(coins) {
		var resources = this.get_resources();
		if (this.get_coins() - coins < 0) {
			this.get_core().error(this.get_name() + ' doesn`t have enough ' + city_builder.utils.get_resource_name('coins') + '.');
			return false;
		}
		return true;
	};
	
	/**
	 * Check if this city has the specified goods in storage.
	 * 
	 * @public
	 * @param {String} resource
	 * @param {Number} amount
	 * @returns {Boolean}
	 */
	this.has_resources = function(resource, amount) {
		var res = this.get_resources();
		if ((res[resource] - amount) < 0) {
			this.get_core().error(this.get_name() + ' does not have enough ' + city_builder.utils.get_resource_name(resource) + '.');
			return false;
		}
		return true;
	};
	
	/**
	 * Perform a trades reset (resets all amounts of resources available
	 * for trade and randomize the amount.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.reset_trades = function() {
		if (typeof city_builder.CITIES[this.get_name()] !== 'undefined') {
			this.trades = city_builder.CITIES[this.get_name()].trades;
			for (var goods_type in this.trades) {
				for (var item in this.trades[goods_type]) {
					this.trades[goods_type][item] = city_builder.utils.get_random_by_importance(this.trades[goods_type][item]);
				}
			}
			return true;
		} else {
			return false;
		}
	};
	
	/**
	 * List the specified goods onto the Black Market.
	 * 
	 * @public
	 * @param {String} resource
	 * @param {Number} amount
	 * @returns {Object|Boolean}
	 */
	this.list_black_market = function(resource, amount) {
		var resources = this.get_resources();
		if (this.remove_resource(resource, amount)) {
			var discount = Math.ceil((city_builder.RESOURCES[resource].price * city_builder.BLACK_MARKET_DISCOUNT) / 100);
			var price = city_builder.utils.calc_price_minus_discount(amount, resource, discount);
			this.get_core().add_black_market(resource, amount, price);
			this.get_core().refresh_ui();
			this.get_core().notify(this.get_name() + ' placed ' + amount + ' ' + city_builder.utils.get_resource_name(resource) + ' on the Black Market and will receive ' + price + ' coins next month.', 'Goods listed');
			return {
				seller: this.get_name(),
				amount: amount,
				goods: city_builder.utils.get_resource_name(resource),
				price: price,
				discount: discount
			};
		}
		return false;
	};
	
	/**
	 * Sell the specified goods to a city.
	 * 
	 * @public
	 * @param {Object|String} city
	 * @param {String} resource
	 * @param {Number} amount
	 * @returns {Object|Boolean}
	 */
	this.sell_to_city = function(city, resource, amount) {
		var resources = this.get_resources();
		var _city;
		if (typeof city === 'string') {
			_city = this.get_core().get_city(city);
			if (city === false) {
				this.get_core().error(city + ' does not exist.');
				return false;
			}
		} else {
			_city = city;
		}
		var trades = _city.get_trades();
		if (trades === null) {
			this.get_core().error(city + ' does not trade any goods.');
			return false;
		}
		if (typeof trades.imports === 'undefined') {
			this.get_core().error(city + ' does not import any goods.');
			return false;
		}
		for (var item in trades.imports) {
			if (item === resource) {
				if (typeof amount === 'undefined') {
					amount = trades.imports[item];
				}
				var discount = Math.ceil((city_builder.RESOURCES[item].price * city_builder.TRADES_DISCOUNT) / 100);
				var price = city_builder.utils.calc_price_minus_discount(amount, item, discount);
				var city_price = city_builder.utils.calc_price(amount, item);
				var item_discount_price = Math.ceil(city_builder.RESOURCES[item].price - discount);
				if (!this.remove_resource(item, amount)) {
					return false;
				}
				this.inc_coins(price);
				if (!_city.dec_coins(city_price)) {
					this.get_core().error(city + ' does not have enough coins.');
					return false;
				}
				this.remove_from_imports(_city, item, amount);
				this.raise_influence(city, 1);
				this.raise_prestige();
				this.inc_fame(50);
				this.get_core().refresh_ui();
				this.get_core().notify(this.get_name() + ' sold ' + amount + ' ' + city_builder.utils.get_resource_name(item) + ' to ' + city + ' for ' + item_discount_price + ' coins each, for a total of ' + price + ' coins.', 'Transaction done');
				this.get_core().refresh_panels();
				return {
					seller: this.get_name(),
					amount: amount,
					goods: city_builder.utils.get_resource_name(item),
					buyer: city,
					price: Math.round(city_builder.RESOURCES[item].price - discount),
					totalPrice: price
				};
			}
		}
		this.get_core().error(city + ' does not import the specified goods.');
		return false;
	};
	
	/**
	 * Remove a specified amount of a resource from the trade exports of a city.
	 * 
	 * @public
	 * @param {city_builder.city} city
	 * @param {String} item
	 * @param {Number} amount
	 * @returns {Boolean}
	 */
	this.remove_from_exports = function(city, item, amount) {
		city.trades.exports[item] = city.trades.exports[item] - amount;
		return true;
	};
	
	/**
	 * Remove a specified amount of a resource from the trade imports of a city.
	 * 
	 * @public
	 * @param {city_builder.city} city
	 * @param {String} item
	 * @param {Number} amount
	 * @returns {Boolean}
	 */
	this.remove_from_imports = function(city, item, amount) {
		city.trades.imports[item] = city.trades.imports[item] - amount;
		return true;
	};
	
	/**
	 * Export the game data of this city.
	 * 
	 * @public
	 * @param {Boolean} to_local_storage
	 * @returns {Object}
	 */
	this.export_data = function(to_local_storage) {
		var data = {
			name: this.get_name(),
			ruler: this.get_ruler(),
			level: this.get_level(),
			climate: this.get_climate().id,
			nationality: this.get_nationality().id,
			difficulty: this.get_core().get_difficulty(),
			avatar: this.get_avatar(),
			icon: this.get_icon(),
			influence: this.get_influence(),
			army: this.get_army_total(),
			navy: this.get_navy_total(),
			mercenary: this.get_mercenary(),
			resources: this.get_resources(),
			trades: this.get_core()._get_neighbours_trades(),
			buildings: this.buildings_list,
			black_market: this.get_core().get_black_market(),
			date_time: {
				day: this.get_core().day,
				month: this.get_core().month,
				year: this.get_core().year,
				day_of_month: this.get_core().day_of_month
			},
			settings: this.get_core().get_settings()
		};
		if (to_local_storage === true) {
			localStorage.setItem('city_builder.data', window.btoa(JSON.stringify(data)));
		}
		return data;
	};
	
	/**
	 * Import the game data to this city.
	 * 
	 * @public
	 * @param {Object} data
	 * @returns {city_builder.city}
	 */
	this.import_data = function(data) {
		this.set_name(data.name);
		this.set_ruler(data.ruler);
		this.set_level(data.level);
		this.set_avatar(data.avatar);
		this.set_icon(data.icon);
		this.set_nationality(data.nationality);
		this.set_climate(data.climate);
		this.setup_army(true, data.army);
		this.setup_navy(true, data.navy);
		this.set_mercenary(data.mercenary);
		this.set_resources(data.resources);
		this.get_core().set_date_time(data.date_time);
		this.get_core().set_black_market(data.black_market);
		this.get_core().set_settings_music(data.settings.music);
		this.get_core().set_settings_console(data.settings.console);
		return this;
	};
	
	/**
	 * Get the list of all the buildings in this city.
	 * 
	 * @public
	 * @returns {Array}
	 */
	this.get_buildings = function() {
		return this.buildings;
	};
	
	/**
	 * Get the name of this city.
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_name = function() {
		return this.name;
	};
	
	/**
	 * Set the name of this city.
	 * 
	 * @public
	 * @param {String} value
	 * @returns {city_builder.city}
	 */
	this.set_name = function(value) {
		this.name = value;
		return this;
	};
	
	/**
	 * Return a pointer to the game core.
	 * 
	 * @public
	 * @returns {city_builder.core}
	 */
	this.get_core = function() {
		return this.core;
	};
	
	/**
	 * Raise the level of this city.
	 * 
	 * @public
	 * @returns {city_builder.city}
	 */
	this.level_up = function() {
		this.level++;
		//this.resources.fame = this.resources.fame + city_builder.LEVELS[this.get_level() - 1];
		$('.citylevel').html(this.get_level());
		this.get_core().notify('The city of ' + this.get_name() + ' is now level ' + this.get_level() + '.');
		return this;
	};
	
	/**
	 * Rename this city.
	 * 
	 * @public
	 * @param {String} value
	 * @returns {city_builder.city}
	 */
	this.rename = function(value) {
		this.name = value;
		return this;
	};
	
	/**
	 * Check if the specified building is already built.
	 * 
	 * @public
	 * @param {String} handle
	 * @returns {Boolean}
	 */
	this.is_building_built = function(handle) {
		var buildings = this.get_buildings();
		for (var i = 0; i < buildings.length; i++) {
			if (buildings[i].type === handle) {
				return true;
			}
		}
		return false;
	};
	
	/**
	 * Check if the city has a specific storage space.
	 * 
	 * @public
	 * @param {Number} quantity
	 * @returns {Boolean}
	 */
	this.has_storage_space_for = function(quantity) {
		var storage = this.get_storage_space();
		if (!this.has_storage_space()) {
			return false;
		}
		if ((storage.occupied + quantity) > storage.all) {
			this.get_core().error('There is no storage space in your city to accomodate the new goods.');
			return false;
		}
		return true;
	};
	
	/**
	 * Check if this city has enough storage space.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.has_storage_space = function() {
		var storage = this.get_storage_space();
		if (storage.occupied >= storage.all) {
			this.get_core().error('There is no storage space in your city.');
			return false;
		}
		return true;
	};
	
	/**
	 * Get the storage space of this city.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_storage_space = function() {
		var storage = 0;
		for (var item in this.get_resources()) {
			if (item !== 'coins' && item !== 'fame' && item !== 'prestige' && item !== 'espionage') {
				storage += this.get_resources()[item];
			}
		}
		return {
			occupied: storage,
			all: this.storage
		};
	};
	
	/**
	 * Internal function for building the specified buildings, bypassing
	 * the requirements.
	 * 
	 * @public
	 * @param {String|Object} building_type
	 * @param {Boolean} hidden
	 * @returns {city_builder.building|Boolean}
	 */
	this._create_buildings = function(building_type, hidden) {
		hidden = (typeof hidden !== 'undefined') && hidden === true ? true : false;
		if (typeof building_type === 'object') {
			for (var i = 0; i < building_type.length; i++) {
				var handle = typeof building_type[i].handle !== 'undefined' ? building_type[i].handle : building_type[i];
				var level = typeof building_type[i].level !== 'undefined' ? building_type[i].level : 1;
				var _b = city_builder.BUILDINGS.findIndexM(handle);
				if (_b !== false) {
					var _c = city_builder.BUILDINGS[_b];
					if (level > 1) {
						_c.level = level;
					}
					var _building = new city_builder.building({
						city: this,
						type: handle,
						data: _c,
						hidden: hidden
					});
					this.buildings.push(_building);
					this.buildings_list.push({
						handle: handle,
						level: level
					});
				}
			}
		} else {
			var handle = typeof building_type.handle !== 'undefined' ? building_type.handle : building_type;
			var level = typeof building_type.level !== 'undefined' ? building_type.level : 1;
			var _b = city_builder.BUILDINGS.findIndexM(handle);
			if (_b !== false) {
				var _c = city_builder.BUILDINGS[_b];
				if (level > 1) {
					_c.level = level;
				}
				var _building = new city_builder.building({
					city: this,
					type: handle,
					data: _c,
					hidden: hidden
				});
				this.buildings.push(_building);
				this.buildings_list.push({
					handle: handle,
					level: level
				});
			}
		}
		return false;
	};
	
	/**
	 * Build the specified building.
	 * 
	 * @public
	 * @param {String} building_type
	 * @returns {city_builder.building|Boolean}
	 */
	this.build = function(building_type) {
		var _b = city_builder.BUILDINGS.findIndexM(building_type);
		var resources = this.get_resources();
		if (_b !== false) {
			var _c = city_builder.BUILDINGS[_b];
			if ((typeof _c.requires.city_level !== 'undefined') && (this.level < _c.requires.city_level)) {
				this.get_core().error('Your city level is too low to construct this building.');
				return false;
			}
			if ((resources.coins - _c.cost.coins) < 0) {
				this.get_core().error('You don`t have enough coins to construct this building.');
				return false;
			} else {
				resources.coins = resources.coins - _c.cost.coins;
			}
			for (var item in _c.cost) {
				if (item !== 'coins') {
					if ((this.get_resources()[item] - _c.cost[item]) < 0) {
						this.get_core().error('You don`t have enough ' + item + ' to construct this building.');
						return false;
					} else {
						this.get_resources()[item] = this.get_resources()[item] - _c.cost[item];
					}
				}
			}
			var _building = new city_builder.building({
				city: this,
				type: building_type,
				data: _c
			});
			this.buildings.push(_building);
			this.buildings_list.push({
				handle: building_type,
				level: 1
			});
			this.get_core().refresh_ui();
			this.get_core().save();
			this.get_core().notify('New building constructed: ' + _building.get_name());
			$('.tips').tipsy({
				gravity: $.fn.tipsy.autoNS,
				html: true
			});
			return _building;
		}
		return false;
	};
	
	/**
	 * Get the rank of this city
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_rank = function() {
		var level = this.get_level();
		var half_level = Math.round(level / 2);
		return Math.floor(
			(
				(this.get_fame() / half_level)
				+ (this.get_prestige() / half_level)
				+ (this.get_espionage() / half_level)
				+ ((this.get_army_total().total > 0 ? this.get_army_total().total : 1) / half_level)
				+ ((this.get_navy_total().total > 0 ? this.get_navy_total().total : 1) / (half_level / 2))
			) / half_level
		);
	};
	
	/**
	 * Return a pointer to the specified building in this city by the specified
	 * handle.
	 * 
	 * @public
	 * @param {String} handle
	 * @returns {city_builder.building|Boolean}
	 */
	this.get_building_by_handle = function(handle) {
		var buildings = this.get_buildings();
		for (var i = 0; i < buildings.length; i++) {
			if (buildings[i].get_type() === handle) {
				return buildings[i];
			}
		}
		return false;
	};
	
	/**
	 * Demolish a city building
	 * 
	 * @public
	 * @TODO
	 * @param {Number} id
	 * @returns {city_builder.city}
	 */
	this.demolish = function(id) {
		if (typeof id === 'number') {
			this.buildings.splice(id, 1);
			return true;
		} else if (typeof id === 'string') {
			if (id !== 'marketplace') {
				for (var i = 0; i < this.buildings.length; i++) {
					if (this.buildings[i].get_type() === id) {
						this.buildings.splice(i, 1);
					}
				}
				var bl_id = this.buildings_list.findIndexM(id);
				if (bl_id !== false) {
				    this.buildings_list.splice(bl_id, 1);
				}
				this.get_core().save();
				return true;
			} else {
				return false;
			}
 		} else {
			// TODO
		}
		return false;
	};
	
	/**
	 * Get the coins this city has. This is the coins object.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_coins = function() {
		return this.resources.coins;
	};
	
	/**
	 * Increase this city's coins by the specified amount.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.inc_coins = function(value) {
		return this.set_coins(this.get_coins() + value);
	};
	
	/**
	 * Decrease this city's coins by the specified amount.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.dec_coins = function(value) {
		if (!this.has_coins(value)) {
			return false;
		}
		this.set_coins(this.get_coins() - value);
		return true;
	};
	
	/**
	 * Set this city's coins to the specified value.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.set_coins = function(value) {
		this.resources.coins = value;
		return value;
	};
	
	/**
	 * Return the value of this city's prestige.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_prestige = function() {
		return this.resources.prestige;
	};
	
	/**
	 * Return the value of this city's espionage.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_espionage = function() {
		return this.resources.espionage;
	};
	
	/**
	 * Get the fame this city has.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_fame = function() {
		return this.resources.fame;
	};

	/**
	 * Set the fame of the city.
	 * 
	 * @public
	 * @param {Object} value
	 * @returns {city_builder.city}
	 */
	this.set_fame = function(value) {
		this.resources.fame = value;
		return this;
	};
	
	/**
	 * Set the coins of the city.
	 * 
	 * @public
	 * @param {Object} value
	 * @returns {city_builder.city}
	 */
	this.set_coins = function(value) {
		this.resources.coins = value;
		return this;
	};
	
	/**
	 * Increase this city's fame by the specified amount.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.inc_fame = function(value) {
		return this.set_fame(this.get_fame() + value);
	};
	
	/**
	 * Decrease this city's fame by the specified amount.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.dec_fame = function(value) {
		return this.set_fame(this.get_fame() - value);
	};
	
	/**
	 * Set this city's fame to the specified value.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.set_fame = function(value) {
		this.resources.fame = value;
		return value;
	};
	
	/**
	 * Get the total number of soldiers available in this city.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_army = function() {
		return this.army;
	};
	
	/**
	 * Get the total number of ships available in this city.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_navy = function() {
		return this.navy;
	};
	
	/**
	 * Get the total number of mercenaries available for this city.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_mercenary = function() {
		return this.mercenary;
	};
	
	/**
	 * Get the navy of this city in an object format.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_navy_total = function() {
		var total = 0;
		var total_navy = {};
		for (var item in city_builder.SHIP_TYPES) {
			total_navy[item] = 0;
		}
		for (var i = 0; i < this.navy.length; i++) {
			var ship = this.navy[i].get_name();
			for (var item in total_navy) {
				if (ship === item) {
					total_navy[item]++;
					total++;
				}
			}
		}
		return {
			total: total,
			navy: total_navy
		};
	};
	
	/**
	 * Get the army of this city in an object format.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_army_total = function() {
		var total = 0;
		var total_army = {};
		for (var item in city_builder.SOLDIER_TYPES) {
			total_army[item] = 0;
		}
		for (var i = 0; i < this.army.length; i++) {
			var soldier = this.army[i].get_name();
			for (var item in total_army) {
				if (soldier === item) {
					total_army[item]++;
					total++;
				}
			}
		}
		return {
			total: total,
			army: total_army
		};
	};
	
	/**
	 * Get the mercenaries of this city in an object format.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_mercenary_total = function() {
		var total = 0;
		var total_army = {
			'Militia': 0,
			'Axeman': 0,
			'Bowman': 0,
			'Pikeman': 0,
			'Crossbowman': 0,
			'Knight': 0
		};
		for (var i = 0; i < this.mercenary.length; i++) {
			var soldier = this.mercenary[i].get_name();
			for (var item in total_army) {
				if (soldier === item) {
					total_army[item]++;
					total++;
				}
			}
		}
		return {
			total: total,
			mercenary: total_army
		};
	};
	
	/**
	 * Remove a specific amount of a resource from this city's storage.
	 * 
	 * @public
	 * @param {String} resource
	 * @param {Number} amount
	 * @returns {Boolean}
	 */
	this.remove_resource = function(resource, amount) {
		var res = this.get_resources();
		if (!this.has_resources(resource, amount)) {
			return false;
		}
		res[resource] = res[resource] - amount;
		return true;
	};
	
	/**
	 * Remove resources from this city's storage.
	 * 
	 * @public
	 * @param {Object} resources
	 * @returns {Boolean}
	 */
	this.remove_resources = function(resources) {
		var res = this.get_resources();
		for (var resource in resources) {
			if (!this.has_resources(resource, resources[resource])) {
				return false;
			}
		}
		for (var resource in resources) {
			res[resource] = res[resource] - resources[resource];
		}
		return true;
	};
	
	/**
	 * Check if this mercenary army has already been recruited.
	 * 
	 * @public
	 * @param {String} handle
	 * @returns {Boolean}
	 */
	this.is_mercenary_recruited = function(handle) {
		for (var i = 0; i < this.mercenary.length; i++) {
			if (this.mercenary[i].handle === handle) {
				return true;
			}
		}
		return false;
	};
	
	/**
	 * Ask the City Advisor for tips.
	 * 
	 * @public
	 * @returns {Array}
	 */
	this.call_advisor = function() {
		var resources = this.get_resources();
		var advices = [];
		var resources = this.get_resources();
		if (this.army.length === 0) {
			advices.push('You have no army, this is an open invitation for attack.');
		}
		if (this.army.length < 10 && this.army.length > 0) {
			advices.push('You have a small army, try to recruit some more soldiers.');
		}
		if (this.navy.length === 0) {
			advices.push('You have no navy, this is an open invitation for attack.');
		}
		if (this.army.length < 3 && this.army.length > 0) {
			advices.push('You have a small navy, try to construct some more ships.');
		}
		var storage = this.get_storage_space();
		if (storage.occupied >= storage.all) {
			advices.push('You have no storage space to store your new goods and they will be lost. Sell some goods or build a warehouse.');
		} else if ((storage.all - storage.occupied) < 100) {
			advices.push('You will soon run out of storage space and all goods produced will be lost. Sell some goods or build a warehouse.');
		}
		if (resources.coins < 1000) {
			advices.push('You seem to be losing coins fast, sell some goods or upgrade your houses to get better taxes.');
		}
		if (resources.wood < 100 || resources.stones < 100) {
			advices.push('You are lacking construction materials, buy some stones and/or wood off the World Trade Market.');
		}
		if (resources.coins > 100000) {
			advices.push('You have lots of coins, why not invest some in goods?');
		}
		for (var item in this.resources) {
			if (item !== 'coins' && item !== 'fame' && item !== 'prestige' && item !== 'espionage') {
				if (resources[item] > 1000) {
					advices.push('You seem to have a surplus of ' + city_builder.utils.get_resource_name(item) + '. You can sell some and get coins instead.');
				}
			}
		}
		return advices;
	};
	
	/**
	 * Recruit a soldier for the city's army.
	 * 
	 * @public
	 * @param {String} name
	 * @returns {Boolean}
	 */
	this.recruit_mercenary_army = function(name) {
		for (var i = 0; i < city_builder.MERCENARIES.length; i++) {
			if (name === city_builder.MERCENARIES[i].handle) {
				var price = city_builder.MERCENARIES[i].cost;
				if (this.dec_coins(price) === false) {
					return false;
				}
				var army = {
					id: i,
					handle: name,
					army: []
				};
				for (var item in city_builder.MERCENARIES[i].army) {
					var soldier = city_builder.SOLDIER_TYPES[item];
					var _soldier = new city_builder.soldier({
						name: item,
						data: soldier
					});
					army.army.push(_soldier);
				}
				this.mercenary.push(army);
				this.get_core().notify('The mercenaries of the ' + city_builder.MERCENARIES[i].name + ' are now available for skirmish missions for the duration of one year.', 'Mercenaries recruited.');
				this.get_core().refresh_ui();
				this.get_core().save();
				return true;
			}
		}
		return false;
	};
	
	/**
	 * Construct a ship for the city's navy.
	 * 
	 * @public
	 * @param {String} ship_name
	 * @returns {Boolean}
	 */
	this.recruit_ship = function(ship_name) {
		for (var item in city_builder.SHIP_TYPES) {
			if (ship_name === item) {
				var ship = city_builder.SHIP_TYPES[item];
				if (!this.remove_resources(ship.cost)) {
					return false;
				}
				var _ship = new city_builder.ship({
					name: item,
					data: ship
				});
				this.navy.push(_ship);
				this.get_core().refresh_ui();
				this.get_core().notify('A new ' + ship_name + ' ship has been constructed.', 'New ship');
				this.get_core().save();
				return true;
			}
		}
		return false;
	};
	
	/**
	 * Recruit a soldier for the city's army.
	 * 
	 * @public
	 * @param {String} soldier_name
	 * @returns {Boolean}
	 */
	this.recruit_soldier = function(soldier_name) {
		for (var item in city_builder.SOLDIER_TYPES) {
			if (soldier_name === item) {
				var soldier = city_builder.SOLDIER_TYPES[item];
				if (!this.remove_resources(soldier.cost)) {
					return false;
				}
				var _soldier = new city_builder.soldier({
					name: item,
					data: soldier
				});
				this.army.push(_soldier);
				this.get_core().refresh_ui();
				this.get_core().save();
				return true;
			}
		}
		return false;
	};
	
	/**
	 * Internal function for recruiting a ship for the city's navy.
	 * 
	 * @public
	 * @param {String} ship_name
	 * @returns {city_builder.city}
	 */
	this._recruit_ship = function(ship_name) {
		for (var item in city_builder.SHIP_TYPES) {
			if (ship_name === item) {
				var ship = city_builder.SHIP_TYPES[item];
				var _ship = new city_builder.ship({
					name: item,
					data: ship
				});
				this.navy.push(_ship);
			}
		}
		return this;
	};
	
	/**
	 * Internal function for recruiting a soldier for the city's army.
	 * 
	 * @public
	 * @param {String} soldier_name
	 * @returns {city_builder.city}
	 */
	this._recruit_soldier = function(soldier_name) {
		for (var item in city_builder.SOLDIER_TYPES) {
			if (soldier_name === item) {
				var soldier = city_builder.SOLDIER_TYPES[item];
				var _soldier = new city_builder.soldier({
					name: item,
					data: soldier
				});
				this.army.push(_soldier);
			}
		}
		return this;
	};
	
	/**
	 * Get the navy size of this city.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_navy_size = function() {
		return this.get_navy().length;
	};
	
	/**
	 * Get the army size of this city.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_army_size = function() {
		return this.get_army().length;
	};
	
	/**
	 * Disband a ship from the city's navy.
	 * 
	 * @public
	 * @param {String} ship_name
	 * @returns {Boolean}
	 */
	this.disband_ship = function(ship_name) {
		var navy = this.get_navy();
		for (var i = 0; i < navy.length; i++) {
			var ship = navy[i];
			if (ship.get_name() === ship_name) {
				delete navy.soldier[i];
				return true;
			}
		}
		return false;
	};
	
	/**
	 * Disband a soldier from the city's army.
	 * 
	 * @public
	 * @param {String} soldier_name
	 * @returns {Boolean}
	 */
	this.disband_soldier = function(soldier_name) {
		var army = this.get_army();
		for (var i = 0; i < army.length; i++) {
			var soldier = army[i];
			if (soldier.get_name() === soldier_name) {
				delete army.soldier[i];
				return true;
			}
		}
		return false;
	};
	
	/**
	 * Set the mercenaries of the city.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {city_builder.city}
	 */
	this.set_mercenary = function(value) {
		this.mercenary = value;
		return this;
	};
	
	/**
	 * Set the navy of the city.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {city_builder.city}
	 */
	this.set_navy = function(value) {
		this.navy = value;
		return this;
	};
	
	/**
	 * Set the soldiers of the city.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {city_builder.city}
	 */
	this.set_army = function(value) {
		this.army = value;
		return this;
	};
	
	/**
	 * Get the resources available in this city.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_resources = function() {
		return this.resources;
	};
	
	/**
	 * Set the resources of the city.
	 * 
	 * @public
	 * @param {Object} value
	 * @returns {city_builder.city}
	 */
	this.set_resources = function(value) {
		this.resources = value;
		return this;
	};

	/**
	 * Return the ruler name of this city.
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_ruler = function() {
		return this.ruler;
	};

	/**
	 * Set the ruler name of the city.
	 * 
	 * @public
	 * @param {String} value
	 * @returns {city_builder.city}
	 */
	this.set_ruler = function(value) {
		this.ruler = value;
		return this;
	};
	
	/**
	 * Set the level of the city.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {city_builder.city}
	 */
	this.set_level = function(value) {
		this.level = value;
		return this;
	};
	
	/**
	 * Return the level of this city.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_level = function() {
		return this.level;
	};
	
	/**
	 * Get the imports and exports of this city.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_trades = function() {
		return this.trades;
	};
	
	/**
	 * Set the imports and exports of this city.
	 * 
	 * @public
	 * @param {Object} value
	 * @returns {city_builder.city}
	 */
	this.set_trades = function(value) {
		this.trades = value;
		return this;
	};
	
	/**
	 * Return the personality of the ruler of this city.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_personality = function() {
		return {
			id: this.personality,
			name: city_builder.PERSONALITY_TYPES[this.personality]
		};
	};
	
	/**
	 * Release all the mercenary armies.
	 * 
	 * @public
	 * @returns {city_builder.city}
	 */
	this.release_mercenaries = function() {
		this.mercenary = [];
		this.get_core().notify('At the end of the year, mercenaries from your city have been released.');
		return this;
	};
	
	/**
	 * Setup the navy of this city.
	 * 
	 * @public
	 * @param {Boolean} hidden
	 * @param {Object} data
	 * @returns {city_builder.city}
	 */
	this.setup_navy = function(hidden, data) {
		if (typeof data === 'undefined') {
			var navy = this.data.navy;
			for (var ship in navy) {
				for (var i = 0; i < navy[ship]; i++) {
					if (hidden === true) {
						this._recruit_ship(ship);
					} else {
						this.recruit_ship(ship);
					}
				}
			}
		} else {
			var navy = data.navy;
			for (var ship in navy) {
				for (var i = 0; i < navy[ship]; i++) {
					if (hidden === true) {
						this._recruit_ship(ship);
					} else {
						this.recruit_ship(ship);
					}
				}
			}
		}
		return this;
	};
	
	/**
	 * Setup the army of this city.
	 * 
	 * @public
	 * @param {Boolean} hidden
	 * @param {Object} data
	 * @returns {city_builder.city}
	 */
	this.setup_army = function(hidden, data) {
		if (typeof data === 'undefined') {
			var army = this.data.army;
			for (var soldier in army) {
				for (var i = 0; i < army[soldier]; i++) {
					if (hidden === true) {
						this._recruit_soldier(soldier);
					} else {
						this.recruit_soldier(soldier);
					}
				}
			}
		} else {
			var army = data.army;
			for (var soldier in army) {
				for (var i = 0; i < army[soldier]; i++) {
					if (hidden === true) {
						this._recruit_soldier(soldier);
					} else {
						this.recruit_soldier(soldier);
					}
				}
			}
		}
		return this;
	};
	
	/**
	 * Return the climate of the area of this city.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_climate = function() {
		return {
			id: this.climate,
			name: city_builder.CLIMATE_TYPES[this.climate]
		};
	};
	
	/**
	 * Return the nationality of this city.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_nationality = function() {
		return {
			id: this.nationality,
			name: city_builder.NATION_TYPES[this.nationality]
		};
	};
	
	/**
	 * Raise the espionage of this city by the specified amount.
	 * 
	 * @public
	 * @param {Number} amount
	 * @returns {Number}
	 */
	this.raise_espionage = function(amount) {
		if (typeof amount !== 'undefined') {
			this.resources.espionage += amount;
		} else {
			++this.resources.espionage;
		}
		$('.cityespionage').html(this.get_espionage());
		this.get_core().notify('The espionage of your city raised.');
		return this.resources.espionage;
	};
	
	/**
	 * Raise the prestige of this city by the specified amount.
	 * 
	 * @public
	 * @param {Number} amount
	 * @returns {Number}
	 */
	this.raise_prestige = function(amount) {
		if (typeof amount !== 'undefined') {
			this.resources.prestige += amount;
		} else {
			++this.resources.prestige;
		}
		$('.cityprestige').html(this.get_prestige());
		this.get_core().notify('The prestige of your city raised.');
		return this.resources.prestige;
	};
	
	/**
	 * Lower the prestige of this city by the specified amount.
	 * 
	 * @public
	 * @param {Number} amount
	 * @returns {Number}
	 */
	this.lower_prestige = function(amount) {
		if (typeof amount !== 'undefined') {
			if ((this.resources.prestige - amount) >= 1) {
				this.resources.prestige -= amount;
				this.get_core().notify('The prestige of your city lowered.');
			}
		} else {
			if ((this.resources.prestige - 1) >= 1) {
				--this.resources.prestige;
				this.get_core().notify('The prestige of your city lowered.');
			}
		}
		$('.cityprestige').html(this.get_prestige());
		return this.resources.prestige;
	};
	
	/**
	 * Lower the espionage of this city by the specified amount.
	 * 
	 * @public
	 * @param {Number} amount
	 * @returns {Number}
	 */
	this.lower_espionage = function(amount) {
		if (typeof amount !== 'undefined') {
			if ((this.resources.espionage - amount) >= 1) {
				this.resources.espionage -= amount;
				this.get_core().notify('The espionage of your city lowered.');
			}
		} else {
			if ((this.resources.espionage - 1) >= 1) {
				--this.resources.espionage;
				this.get_core().notify('The espionage of your city lowered.');
			}
		}
		$('.cityespionage').html(this.get_espionage());
		return this.resources.espionage;
	};

	/**
	 * Reset the espionage of this city to 1.
	 * 
	 * @returns {city_builder.city}
	 * @public
	 */
	this.reset_espionage = function() {
		this.resources.espionage = 1;
		$('.cityespionage').html(this.get_espionage());
		return this;
	};

	/**
	 * Reset the prestige of this city to 1.
	 * 
	 * @returns {city_builder.city}
	 * @public
	 */
	this.reset_prestige = function() {
		this.resources.prestige = 1;
		$('.cityprestige').html(this.get_prestige());
		return this;
	};
	
	/**
	 * Set the espionage of this city.
	 * 
	 * @public
	 * @returns {city_builder.city}
	 * @param {Number} value
	 */
	this.set_espionage = function(value) {
		this.resources.espionage = value;
		$('.cityespionage').html(this.get_espionage());
		return this;
	};
	
	/**
	 * Set the prestige of this city.
	 * 
	 * @public
	 * @returns {city_builder.city}
	 * @param {Number} value
	 */
	this.set_prestige = function(value) {
		this.resources.prestige = value;
		$('.cityprestige').html(this.get_prestige());
		return this;
	};
	
	/**
	 * Increase this city's espionage by the specified amount.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.inc_espionage = function(value) {
		return this.set_espionage(this.get_espionage() + value);
	};
	
	/**
	 * Increase this city's prestige by the specified amount.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.inc_prestige = function(value) {
		return this.set_prestige(this.get_prestige() + value);
	};
	
	/**
	 * Decrease this city's espionage by the specified amount.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.dec_espionage = function(value) {
		return this.set_espionage(this.get_espionage() - value);
	};

	/**
	 * Decrease this city's prestige by the specified amount.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.dec_prestige = function(value) {
		return this.set_prestige(this.get_prestige() - value);
	};

	/**
	 * Set this city's espionage to the specified value.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.set_espionage = function(value) {
		this.resources.espionage = value;
		return value;
	};

	/**
	 * Set this city's prestige to the specified value.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.set_prestige = function(value) {
		this.resources.prestige = value;
		return value;
	};
	
	/**
	 * Get the icon of this city.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_icon = function() {
		return this.icon;
	};
	
	/**
	 * Set the icon of this city.
	 * 
	 * @public
	 * @returns {city_builder.city}
	 * @param {Number} value
	 */
	this.set_icon = function(value) {
		this.icon = value;
		return this;
	};

	/**
	 * Get the avatar of the ruler of this city.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_avatar = function() {
		return this.avatar;
	};
	
	/**
	 * Set the avatar of the ruler of this city.
	 * 
	 * @public
	 * @returns {city_builder.city}
	 * @param {Number} value
	 */
	this.set_avatar = function(value) {
		this.avatar = value;
		return this;
	};
	
	/**
	 * Decrease the influence of this city.
	 * 
	 * @public
	 * @param {String} city
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.lower_influence = function(city, value) {
		if (this.influence[city] - value >= 0) {
			this.influence[city] = this.influence[city] - value;
		}
		return this.influence[city];
	};
	
	/**
	 * Increase the influence of this city.
	 * 
	 * @public
	 * @param {String}} city
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.raise_influence = function(city, value) {
		if (this.influence[city] + value <= 100) {
			this.influence[city] = this.influence[city] + value;
		}
		return this.influence[city];
	};
	
	/**
	 * Return all the influence of this city with all the other cities.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_influence = function() {
		return this.influence;
	};
	
	/**
	 * Returns the influenceof this city with a specific city.
	 * 
	 * @public
	 * @param {String} city
	 * @returns {Number}
	 */
	this.get_influence_with_city = function(city) {
		return this.influence[city];
	};
	
	/**
	 * Set the influence of this city.
	 * 
	 * @public
	 * @returns {city_builder.city}
	 * @param {Object} value
	 */
	this.set_influence = function(value) {
		this.influence = value;
		return this;
	};
	
	/**
	 * Set the climate of this city.
	 * 
	 * @public
	 * @returns {city_builder.city}
	 * @param {Number} value
	 */
	this.set_climate = function(value) {
		this.climate = value;
		return this;
	};
	
	/**
	 * Set the nationality of this city.
	 * 
	 * @public
	 * @returns {city_builder.city}
	 * @param {Number} value
	 */
	this.set_nationality = function(value) {
		this.nationality = value;
		return this;
	};
	
	/**
	 * Propose a pact to the specified city.
	 *
	 * @public
	 * @returns {city_builder.city}
	 * @param {city_builder.city}
	 */
	this.propose_pact = function(city) {
		// TODO
		return this;
	};

	/**
	 * Assign a spy to the specified city.
	 *
	 * @public
	 * @returns {city_builder.city}
	 * @param {city_builder.city}
	 */
	this.assign_spy = function(city) {
		// TODO
		return this;
	};

	// Fire up the constructor
	return this.__constructor(params);
};

/**
 * Main Game history object.
 * 
 * @param {type} params
 * @class {city_builder.history}
 * @returns {city_builder.history}
 */
city_builder.history = function (params) {

	/**
	 * Reference to the core object.
	 * 
	 * @type {city_builder.game}
	 */
	this.core = null;

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {city_builder.history}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		this.core = params.core;
		// TODO
		return this;
	};

	// Fire up the constructor
	return this.__constructor(params);
};

/**
 * Main Game event object.
 * 
 * @param {type} params
 * @class {city_builder.event}
 * @returns {city_builder.event}
 */
city_builder.event = function (params) {

	/**
	 * Reference to the core object.
	 * 
	 * @type {city_builder.game}
	 */
	this.core = null;

	/**
	 * Name of the event.
	 *
	 * @private
	 * @type {String}
	 */
	this.name = null;

	/**
	 * Handle of the event.
	 *
	 * @private
	 * @type {String}
	 */
	this.handle = null;

	/**
	 * Event's chance to occur.
	 *
	 * @private
	 * @type {Number}
	 */
	this.chance = 0;

	/**
	 * Event's effect.
	 *
	 * @private
	 * @type {Number}
	 */
	this.effect = null;
	
	/**
	 * Description of the event.
	 *
	 * @private
	 * @type {String}
	 */
	this.description = null;

	/**
	 * Event data.
	 *
	 * @private
	 * @type {Object}
	 */
	this.data = null;

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {city_builder.event}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		this.core = params.core;
		this.name = params.name;
		this.handle = params.handle;
		this.chance = (typeof params.chance !== 'undefined') ? params.chance : 0.001;
		this.description = params.description;
		this.data = params.data;
		this.effect = params.effect;
		this.process();
		return this;
	};

	/**
	 * Process the event data.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.process = function () {
		var random = Math.random().toFixed(4);
		if (random < this.chance) {
			this._process();
			return true;
		}
		return false;
	};

	/**
	 * Notify the player that this event occured.
	 *
	 * @public
	 * @returns {city_builder.event}
	 */
	this.notify = function() {
		this.core._notify({
			title: 'Event occured: ' + this.name,
			content: this.description
				.replace(/CITY/g, this.data.city)
				.replace(/AMOUNT/g, this.data.amount),
			timeout: false,
			other: true
		});
		return this;
	};
	
	/**
	 * Internal function for processing the event data.
	 * 
	 * @private
	 * @returns {city_builder.event}
	 */
	this._process = function () {
		this.notify();
		switch (this.effect) {
			case city_builder.EVENT_EFFECT_LOSE_COINS:
				this.core.get_city().dec_coins(this.data.amount);
				break;
			case city_builder.EVENT_EFFECT_GAIN_COINS:
				this.core.get_city().inc_coins(this.data.amount);
				break;
			case city_builder.EVENT_EFFECT_RAISE_INFLUENCE:
				this.core.get_city().raise_influence(this.core.get_city(this.data.city), this.data.amount);
				break;
			case city_builder.EVENT_EFFECT_LOWER_INFLUENCE:
				this.core.get_city().lower_influence(this.core.get_city(this.data.city), this.data.amount);
				break;
			case city_builder.EVENT_EFFECT_GAIN_FAME:
				this.core.get_city().inc_fame(this.data.amount);
				break;
			case city_builder.EVENT_EFFECT_LOSE_FAME:
				this.core.get_city().dec_fame(this.data.amount);
				break;
			case city_builder.EVENT_EFFECT_GAIN_ESPIONAGE:
				this.core.get_city().inc_espionage(this.data.amount);
				break;
			case city_builder.EVENT_EFFECT_LOSE_ESPIONAGE:
				this.core.get_city().dec_espionage(this.data.amount);
				break;
			case city_builder.EVENT_EFFECT_DESTROY_BUILDING:
				break;
		}
		return this;
	};

	// Fire up the constructor
	return this.__constructor(params);
};

/**
 * Main Game building object.
 * 
 * @param {type} params
 * @class {city_builder.building}
 * @returns {city_builder.building}
 */
city_builder.building = function(params) {
	
	/**
	 * The level of this building.
	 * 
	 * @type {Number}
	 * @private
	 */
	this.level = 1;
	
	/**
	 * Pointer to the city this building is located in.
	 * 
	 * @type {city_builder.city}
	 * @private
	 */
	this.city = null;
	
	/**
	 * The name of this building.
	 * 
	 * @type {String}
	 * @private
	 */
	this.name = null;
	
	/**
	 * The type of this building.
	 * 
	 * @type {String}
	 * @private
	 */
	this.type = null;
	
	/**
	 * Check if this building producing goods.
	 * 
	 * @type {Boolean}
	 * @private
	 */
	this.working = true;
	
	/**
	 * Check if this is a production building.
	 * 
	 * @type {Boolean}
	 * @private
	 */
	this.is_production = false;
	
	/**
	 * Check if this is a municipal building.
	 * 
	 * @type {Boolean}
	 * @private
	 */
	this.is_municipal = false;
		
	/**
	 * Check if this is a housing building.
	 * 
	 * @type {Boolean}
	 * @private
	 */
	this.is_housing = false;

	/**
	 * The DOM handle of this building.
	 *
	 * @type {String}
	 * @private
	 */
	this.handle = null;

	/**
	 * Flag if this building has any problems producing its goods.
	 *
	 * @type {Boolean}
	 * @private
	 */
	this.problems = false;

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {city_builder.building}
	 * @param {Object} params
	 */
	this.__constructor = function(params) {
		var self = this;
		this.city = params.city;
		this.type = params.type;
		this.name = params.data.name;
		this.is_production = (typeof params.data.is_production !== 'undefined' && params.data.is_production === true) ? true : false;
		this.is_municipal = (typeof params.data.is_municipal !== 'undefined' && params.data.is_municipal === true) ? true : false;
		this.is_housing = (typeof params.data.is_housing !== 'undefined' && params.data.is_housing === true) ? true : false;
		this.level = (typeof params.data.level !== 'undefined') ? params.data.level : 1;
		params.data.level = this.level;
		this.handle = params.data.handle;
		$('#building-' + this.handle).empty();
		if (params.hidden !== true) {
			$('section.game').append(city_builder.ui.building_element(params)).on('click', '#building-' + params.data.handle, function() {
				self.get_core().open_panel(new city_builder.panel_building({
					core: self.get_core(),
					header: params.data.name,
					data: params.data
				}));
			});
		}
		var building = this.get_building_data();
		switch (this.type) {
			case 'marketplace':
			case 'warehouse':
				this.get_city().storage = this.get_city().storage + (building.storage * this.get_level());
				break;
		}
		this.get_core().refresh_panels();
		return this;
	};
	
	this.is_upgradable = function() {
		var building = this.get_building_data();
		if (this.level < building.levels) {
			return true;
		}
		return false;
	};

	/**
	 * Upgrade this building.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.upgrade = function() {
		var self = this;
		var city = this.get_city();
		var resources = city.get_resources();
		var next_level = this.get_level() + 1;
		var _b = city_builder.BUILDINGS.findIndexM(this.get_type());
		if (_b !== false) {
			var _c = city_builder.BUILDINGS[_b];
			if (this.is_upgradable() === true) {
				var bl_id = city.buildings_list.findIndexM(this.get_type());
				if (bl_id !== false) {
					if ((resources.coins - (_c.cost.coins * next_level)) < 0) {
						this.get_core().error('You don`t have enough coins to upgrade this building.');
						return false;
					} else {
						resources.coins = resources.coins - (_c.cost.coins * next_level);
					}
					for (var item in _c.cost) {
						if (item !== 'coins') {
							if ((city.get_resources()[item] - (_c.cost[item] * next_level)) < 0) {
								this.get_core().error('You don`t have enough ' + item + ' to upgrade this building.');
								return false;
							} else {
								city.get_resources()[item] = city.get_resources()[item] - (_c.cost[item] * next_level);
							}
						}
					}
					++this.level;
					$('section.game .building[data-type=' + this.get_type() + ']').css({
						'background-image': 'url(./images/buildings/' + ((self.get_type().slice(0, -1) === 'house') ? self.get_type().slice(0, -1) : self.get_type()) + self.get_level() + '.png)'
					});
					this.get_city().buildings_list[bl_id].level = this.get_level();
					this.get_core().refresh_panels();
					this.get_core().save();
					this.get_core().notify(this.get_name() + ' upgraded to level ' + this.get_level());
					return true;
				}
			}
		}
		return false;
	};
	
	/**
	 * Downgrade this building.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.downgrade = function() {
		if (this.level > 1) {
			var bl_id = this.get_city().buildings_list.findIndexM(this.get_type());
			if (bl_id !== false) {
				--this.level;
				this.get_city().buildings_list[bl_id].level = this.get_level();
				this.get_core().refresh_panels();
				this.get_core().save();
				this.get_core().notify(this.get_name() + ' downgraded to level ' + this.get_level());
				return true;
			}
			this.get_core().refresh_panels();
			return true;
		}
		return false;
	};
	
	/**
	 * Check if this building is a housing building.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.is_housing_building = function() {
		return this.is_housing;
	};

	/**
	 * Check if this building is a production building (its production can be
	 * started and stopped).
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.is_production_building = function() {
		return this.is_production;
	};
	
	/**
	 * Check if this building's production is started or stopped.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.is_producing = function() {
		return this.working;
	};
	
	/**
	 * Start this building's production
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.start_production = function() {
		if (this.is_production_building()) {
			this.get_core().notify(this.get_name() + '`s production started.');
			this.working = true;
			this.problems = false;
			this.get_core().refresh_panels();
			$('#building-' + this.handle).empty();
			return true;
		} else {
			return false;
		}
	};
	
	/**
	 * Stop this building's production
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.stop_production = function() {
		if (this.is_production_building()) {
			this.get_core().notify(this.get_name() + '`s production stopped.');
			this.working = false;
			this.problems = true;
			this.get_core().refresh_panels();
			this.notify(city_builder.NOTIFICATION_PRODUCTION_PAUSED);
			return true;
		} else {
			return false;
		}
	};
	
	/**
	 * Demolish this building and remove it from the DOM.
	 * 
	 * @public
	 * @returns {boolean}
	 */
	this.demolish = function() {
		if (this.get_city().demolish(this.get_type())) {
			$('section.game .building[data-type=' + this.get_type() + ']').remove();
			this.get_core().notify(this.get_name() + ' demolished successfully!');
			this.get_core().refresh_panels();
			return true;
		} else {
			return false;
		}
	};
	
	/**
	 * Check if the city has the required materials to create this building.
	 * 
	 * @public
	 * @param {Array|String} mats
	 * @returns {Boolean}
	 */
	this.has_materials = function(mats) {
		var building = this.get_building_data();
		var res = this.get_city_resources();
		var mat = building.materials;
		if (typeof mats === 'object') {
			for (var i = 0; i < mats.length; i++) {
				if (mats[i] !== 'coins') {
					if (res[mats[i]] - mat[mats[i]] < 0) {
						this.get_core().log(this.get_name() + ' doesn`t have enough ' + mats[i] + '.', true);
						this.notify(city_builder.NOTIFICATION_MISSING_RESOURCES);
						this.problems = true;
						return false;
					}
				}
			}
		} else {
			if (res[mats] - mat[mats] < 0) {
				this.get_core().log(this.get_name() + ' doesn`t have enough ' + mats + '.', true);
				this.notify(city_builder.NOTIFICATION_MISSING_RESOURCES);
				this.problems = true;
				return false;
			}
		}
		return true;
	};
	
	/**
	 * Use the materials required for this building's production.
	 * 
	 * @public
	 * @param {String|Array} material
	 * @returns {city_builder.building}
	 */
	this.use_material = function(material) {
		var building = this.get_building_data();
		var mat = building.materials;
		if (typeof material === 'object') {
			for (var i = 0; i < material.length; i++) {
				this.get_city().remove_resource(material[i], mat[material[i]]);
				this.get_core().log(this.get_name() + ' used ' + mat[material[i]] + ' ' + material[i] + '.');
			}
		} else {
			this.get_city().remove_resource(material, mat[material]);
			this.get_core().log(this.get_name() + ' used ' + mat[material] + ' ' + material + '.');
		}
		return this;
	};
	
	/**
	 * Get building data from the main configuration array.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_building_data = function() {
		return city_builder.BUILDINGS[city_builder.BUILDINGS.findIndexM(this.type)];
	};
	
	/**
	 * Get building data.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_data = function() {
		return this.data;
	};
	
	/**
	 * Get the city resources object
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_city_resources = function() {
		return this.get_city().get_resources();
	};
	
	/**
	 * Produce the materials.
	 * 
	 * @public
	 * @param {String|Array} material
	 * @returns {city_builder.building}
	 */
	this.produce_material = function(material) {
		var city = this.get_city();
		var resources = city.get_resources();
		var building = this.get_building_data();
		var prd = building.production;
		if (typeof material === 'object') {
			for (var i = 0; i < material.length; i++) {
				if (!this.is_producing()) {
					return this;
				}
				var amount = prd[material[i]] * this.get_level();
				if (this.get_city().has_storage_space_for(amount)) {
					this.get_city().add_to_storage(material[i], amount);
					if (typeof building.chance !== 'undefined') {
						for (var item in building.chance) {
							var rnd = Math.random();
							if (rnd < building.chance[item]) {
								this.get_core().log(this.get_name() + ' procced extra ' + city_builder.utils.get_resource_name(item) + '.');
								this.get_city().add_to_storage(item, 1);
							}
						}
					}
					this.get_core().log(this.get_name() + ' produced ' + amount + ' ' + material[i] + '.');
				}
			}
		} else {
			var amount = prd[material] * this.get_level();
			if (this.get_city().has_storage_space_for(amount)) {
				if (!this.is_producing()) {
					return this;
				}
				this.get_city().add_to_storage(material, amount);
				if (typeof building.chance !== 'undefined') {
					for (var item in building.chance) {
						var rnd = Math.random();
						if (rnd < building.chance[item]) {
							this.get_core().log(this.get_name() + ' procced extra ' + city_builder.utils.get_resource_name(item) + '.');
							this.get_city().add_to_storage(item, 1);
						}
					}
				}
				this.get_core().log(this.get_name() + ' produced ' + amount + ' ' + material + '.');
			}
		}
		return this;
	};
	
	/**
	 * Process the materials and use the required ones.
	 * 
	 * @public
	 * @returns {city_builder.building}
	 * @param {String|Array} matsProduction
	 * @param {String|Array} matsUse
	 */
	this.process_mats = function(mats_production, mats_use) {
		if (typeof mats_use !== 'undefined') {
			if (this.has_materials(mats_use)) {
				this.use_material(mats_use);
				this.produce_material(mats_production);
			}
		} else {
			this.produce_material(mats_production);
		}
		return this;
	};
	
	/**
	 * Raise the prestige of the city this building is located in.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.adjust_city_prestige = function() {
		var building = this.get_building_data();
		var prd = building.production;
		var amount = prd.prestige;
		this.get_city().inc_prestige(amount);
		this.get_core().log(this.get_name() + ' raised city prestige by ' + amount + '.');
		return this.get_city().get_prestige();
	};

	/**
	 * Raise the fame of the city this building is located in.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.adjust_city_fame = function() {
		var building = this.get_building_data();
		var prd = building.production;
		var amount = prd.fame * this.get_level();
		this.get_city().inc_fame(amount);
		this.get_core().log(this.get_name() + ' raised city fame by ' + amount + '.');
		return this.get_city().get_fame();
	};
	
	/**
	 * Raise the fame of the city this building is located in by converting
	 * coins into fame.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.adjust_city_fame_for_coins = function() {
		var building = this.get_building_data();
		var mat = building.materials;
		var prd = building.production;
		if (this.get_city().has_coins(mat.coins)) {
			var amount = prd.fame * this.get_level();
			this.get_city().inc_fame(amount);
			this.get_city().dec_coins(mat.coins);
			this.get_core().log(this.get_name() + ' raised city fame with ' + amount + ' at the cost of ' + mat.coins + ' coins.');
		}
		return {
			fame: this.get_city().get_fame(),
			coins: this.get_city().get_coins()
		};
	};
	
	/**
	 * Calculate if the house has the required food and processes the tax.
	 * 
	 * @public
	 * @returns {city_builder.building}
	 */
	this.process_tax = function() {
		var _m = [];
		var building = this.get_building_data();
		var mat = building.materials;
		for (var item in mat) {
			_m.push(item);
		}
		if (_m.length > 0) {
			if (this.has_materials(_m)) {
				this.use_material(_m);
				var amount = building.tax * this.get_level();
				this.get_city().inc_coins(amount);
				this.get_core().log(this.get_name() + ' gave ' + amount + ' coins via tax.');
			}
		}
		return this;
	};
	
	/**
	 * Check if this building has the required additional buildings for production.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.has_requirements = function() {
		var good = true;
		var building = this.get_building_data();
		if (typeof building.requires.buildings !== 'undefined') {
			var required = building.requires.buildings;
			if (typeof required === 'object') {
				for (var i = 0; i < required.length; i++) {
					if (!this.get_city().is_building_built(required[i])) {
						good = false;
						var req = city_builder.BUILDINGS[city_builder.BUILDINGS.findIndexM(required[i])];
						this.get_core().log(this.get_name() + ' doesn`t have the required buildings: ' + req.name + '.', true);
						this.notify(city_builder.NOTIFICATION_MISSING_RESOURCES);
						this.problems = true;
					}
				}
			} else {
				if (!this.get_city().is_building_built(required)) {
					good = false;
					var req = city_builder.BUILDINGS[city_builder.BUILDINGS.findIndexM(required)];
					this.get_core().log(this.get_name() + ' doesn`t have the required buildings: ' + req.name + '.', true);
					this.notify(city_builder.NOTIFICATION_MISSING_RESOURCES);
					this.problems = true;
				}
			}
		}
		return good;
	};
	
	/**
	 * Internal function for further processing of the production chain.
	 * 
	 * @private
	 * @returns {city_builder.building}
	 */
	this._process = function() {
		var _p = [];
		var _m = [];
		var building = this.get_building_data();
		var mat = building.materials;
		for (var item in mat) {
			_m.push(item);
		}
		if (building.is_housing === true) {
			if (_m.length > 0) {
				if (this.has_materials(_m)) {
					this.use_material(_m);
					var amount = building.tax * this.get_level();
					this.get_city().inc_coins(amount);
					this.get_core().log(this.get_name() + ' gave ' + amount + ' coins via tax.');
				}
			}
		} else {
			if (this.is_producing()) {
				var prd = building.production;
				for (var item in prd) {
					_p.push(item);
				}
				if (this.has_requirements()) {
					if (_m.length > 0) {
						if (this.has_materials(_m)) {
							this.use_material(_m);
							this.produce_material(_p);
							this.problems = false;
						}
					} else {
						this.produce_material(_p);
						this.problems = false;
					}
				}
			} else {
				this.get_core().log(this.get_name() + ' production is stopped.');
				this.notify(city_builder.NOTIFICATION_PRODUCTION_PAUSED);
				this.problems = true;
			}
		}
		return this;
	};
	
	/**
	 * Check if this building is the marketplace.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.is_marketplace = function() {
		if (this.get_type() === 'marketplace') {
			return true;
		}
		return false;
	};
	
	/**
	 * Main threading method for the building, this does the actual processing each turn.
	 * 
	 * @public
	 * @returns {city_builder.building}
	 */
	this.process = function() {
		var building = this.get_building_data();
		var res = this.get_city_resources();
		var prd = building.production;
		var mat = building.materials;
		switch (this.get_type()) {
			/* STORAGE */
			case 'marketplace':
				this.adjust_city_fame();
				break;
			case 'warehouse':
				break;
			/* MILITARY */
			case 'camp':
				break;
			case 'castle':
				this.adjust_city_fame_for_coins();
				this.adjust_city_prestige();
				break;
			/* MUNICIPAL */
			case 'church':
				this.adjust_city_fame_for_coins();
				break;
			case 'monastery':
				this.adjust_city_fame_for_coins();
				break;
			case 'tavern':
				this.adjust_city_fame_for_coins();
				break;
			/* ALL OTHER */
			default:
				this._process();
				break;
		}
		return this;
	};
	
	/**
	 * Get the city this building is located into
	 * 
	 * @public
	 * @returns {city_builder.city}
	 */
	this.get_city = function() {
		return this.city;
	};
	
	/**
	 * Get a pointer to the game core
	 * 
	 * @public
	 * @returns {city_builder.game}
	 */
	this.get_core = function() {
		return this.get_city().get_core();
	};
	
	/**
	 * Get the name of this building
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_name = function() {
		return this.name;
	};
	
	/**
	 * Check whether this building has problems producing its goods.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.has_problems = function() {
		return this.problems;
	};
	
	/**
	 * Get the level of this building
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_level = function() {
		return this.level;
	};
	
	/**
	 * Get the type of this building
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_type = function() {
		return this.type;
	};
	
	/**
	 * Return the DOM handle of this building.
	 *
	 * @public
	 * @returns {String}
	 */
	this.get_handle = function() {
		return this.handle;
	};

	/**
	 * Perform building notifications.
	 *
	 * @public
	 * @param {Number} notification_type
	 * @returns {city_builder.building}
	 */
	this.notify = function(notification_type) {
		var handle = $('#building-' + this.get_handle());
		switch (notification_type) {
			case city_builder.NOTIFICATION_PRODUCTION_PAUSED:
				handle.empty().append('<span class="notification paused"></span>');
				break;
			case city_builder.NOTIFICATION_MISSING_RESOURCES:
			default:
				handle.empty().append('<span class="notification error"></span>');
				break;
		}
		return this;
	};

	// Fire up the constructor
	return this.__constructor(params);
};

/**
 * Main Game building panel object.
 * 
 * @param {type} params
 * @class {city_builder.panel_building}
 * @returns {city_builder.panel_building}
 */
city_builder.panel_building = function (params) {

	/**
	 * Reference to the core object.
	 * 
	 * @type {city_builder.game}
	 */
	this.core = null;

	/**
	 * DOM id of this panel.
	 * 
	 * @type {String}
	 * @constant
	 */
	this.id = 'building';

	/**
	 * Building data passed to the panel.
	 *
	 * @type {Object}
	 */
	this.params_data = null;

	/**
	 * Object destructor.
	 * 
	 * @private
	 * @returns {Boolean}
	 */
	this.__destructor = function () {
		this.core.console_log('destroying panel with id `' + this.id + '`');
		var el = '#panel-' + this.id;
		$(el).remove();
		this.core.close_panel(this.id);
		$('.tipsy').remove();
		return false;
	};

	/**
	 * Method for destroying the window/panel.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.destroy = function () {
		return this.__destructor();
	};

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {city_builder.panel}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		var self = this;
		this.core = params.core;
		this.params_data = params.data;
		var el = '#panel-' + this.id;
		if (city_builder.ui.panel_exists(el)) {
			this.destroy();
		}
		this.core.console_log('creating panel with id `' + this.id + '`');
		var _c = this.core.get_city().get_building_by_handle(params.data.handle);
		var level = _c.get_level();
		$('.ui').append(city_builder.ui.building_panel_template
			.replace(/{id}/g, this.id)
			.replace(/{building}/g, params.data.handle)
			.replace(/{context}/g, 'building'));
		$(el + ' header .title').html(params.data.name);
		this.refresh();
		if (!_c.is_upgradable()) {
			$(el + ' .footer .upgrade').remove();
		} else {
			$(el).on('click', '.upgrade', function () {
				if (_c.upgrade()) {
					if (!_c.is_upgradable()) {
						$(el + ' .footer .upgrade').remove();
					}
				} else {
					self.core.error('Unable to upgrade the specified building `' + _c.get_name() + '`!');
				}
				return false;
			});
		}
		if (_c.is_marketplace()) {
			$(el + ' .footer .demolish').remove();
		} else {
			$(el).on('click', '.demolish', function () {
				if (_c.demolish()) {
					self.destroy();
				} else {
					self.core.error('Unable to demolish the specified building `' + _c.get_name() + '`!');
				}
				return false;
			});
		}
		if (_c.is_production_building()) {
			if (_c.is_producing()) {
				$(el + ' .pause').removeClass('start');
			} else {
				$(el + ' .start').removeClass('pause');
			}
			$(el).on('click', '.pause', function () {
				_c.stop_production();
				$(this).removeClass('pause').addClass('start');
				return false;
			}).on('click', '.start', function () {
				$(this).removeClass('start').addClass('pause');
				_c.start_production();
				return false;
			});
		} else {
			$(el + ' .start, ' + el + ' .pause').remove();
		}
		$(el).on('click', '.help', function () {
			var term = $(this).data('term');
			var ctxt = $(this).data('ctxt');
			self.core.help(ctxt, term);
			return false;
		}).on('click', '.close', function () {
			self.destroy();
			return false;
		}).draggable({
			handle: 'header',
			containment: 'window',
			snap: '.panel'
		});
		$(el + ' .tabs').tabs();
		$(el + ' .tips').tipsy({
			gravity: 's'
		});
		return this;
	};

	/**
	 * Callback method called when a function from the core needs to refresh
	 * information on this panel.
	 *
	 * @public
	 * @returns {city_builder.panel_building}
	 */
	this.refresh = function() {
		var _c = this.core.get_city().get_building_by_handle(params.data.handle);
		var level = _c.get_level();
		var _t = '<p class="smalldesc">' + this.params_data.description + '</p>' +
			'<dl>' +
				city_builder.ui.cost_panel(this.params_data.cost) +
				city_builder.ui.materials_panel(this.params_data.materials) +
				city_builder.ui.production_panel(this.params_data.production, level) +
				city_builder.ui.requires_panel(this.params_data.requires) +
				city_builder.ui.tax_panel(this.params_data.tax, level) +
				city_builder.ui.storage_panel(this.params_data.storage, level) +
			'</dl>';
		$('#panel-' + this.id + ' .contents').empty().append(_t);
		return this;
	};

	// Fire up the constructor
	return this.__constructor(params);
};

/**
 * Main Game buildings panel object.
 * 
 * @param {type} params
 * @class {city_builder.panel_buildings}
 * @returns {city_builder.panel_buildings}
 */
city_builder.panel_buildings = function (params) {

	/**
	 * Reference to the core object.
	 * 
	 * @type {city_builder.game}
	 */
	this.core = null;
	
	/**
	 * DOM id of this panel.
	 * 
	 * @type {String}
	 * @constant
	 */
	this.id = 'buildings';

	/**
	 * Localized title of the panel.
	 * 
	 * @type {String}
	 */
	this.title = city_builder.l('City Buildings');

	/**
	 * Object destructor.
	 * 
	 * @private
	 * @returns {Boolean}
	 */
	this.__destructor = function () {
		this.core.console_log('destroying panel with id `' + this.id + '`');
		var el = '#panel-' + this.id;
		$(el).remove();
		this.core.close_panel(this.id);
		$('.tipsy').remove();
		return false;
	};

	/**
	 * Method for destroying the window/panel.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.destroy = function () {
		return this.__destructor();
	};

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {city_builder.panel}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		this.core = params.core;
		var self = this;
		var el = '#panel-' + this.id;
		if (city_builder.ui.panel_exists(el)) {
			this.destroy();
		}
		this.core.console_log('creating panel with id `' + this.id + '`');
		var city = this.core.get_city();
		var resources = city.get_resources();
		$('.ui').append(city_builder.ui.generic_panel_template
			.replace(/{id}/g, this.id)
			.replace(/{title}/g, this.title));
		var _t = '<div class="left buildings">';
		var available_buildings = city_builder['CITY_BUILDINGS_' + city.get_climate().name.toUpperCase()];
		_t += '<div class="tabs">' +
				'<ul>';
		for (var category in city_builder.BUILDINGS_CATEGORIES) {
			_t += '<li><a href="#tab-' + category.toLowerCase() + '">' + category + '</a></li>';
		}
		_t += '</ul>';
		for (var category in city_builder.BUILDINGS_CATEGORIES) {
			_t += '<div id="tab-' + category.toLowerCase() + '" class="bldg-tabs">';
			for (var i = 0; i < city_builder.BUILDINGS_CATEGORIES[category].length; i++) {
				var building = city_builder.BUILDINGS_CATEGORIES[category][i];
				if ($.inArray(building, available_buildings) !== -1) {
					var building_data = city_builder.BUILDINGS[city_builder.BUILDINGS.findIndexM(building)];
					var _i = city.is_building_built(building_data.handle);
					_t += '<div data-handle="' + building_data.handle + '" class="building-item' + ((_i === true) ? ' disabled' : '') + '">' +
							'<span class="title">' + building_data.name + '</span>' +
							'<img class="building" src="' + city_builder.ASSETS_URL + 'images/buildings/' + ((building_data.handle.slice(0, -1) === 'house') ? building_data.handle.slice(0, -1) : building_data.handle) + '1.png" />' +
							'</div>';
				}
			}
			_t += '</div>';
		}
		_t += '</div>' +
			'</div><div class="right">' +
				'<fieldset>' +
				'<legend>' + city_builder.l('Description') + '</legend>' +
				'<div class="b-desc"></div>' +
				'</fieldset>' +
				'<fieldset>' +
				'<legend>' + city_builder.l('Cost') + '</legend>' +
				'<div class="b-cost"></div>' +
				'</fieldset>' +
				'<fieldset class="materials">' +
				'<legend>' + city_builder.l('Materials') + '</legend>' +
				'<div class="b-mats"></div>' +
				'</fieldset>' +
				'<fieldset class="production">' +
				'<legend>' + city_builder.l('Production') + '</legend>' +
				'<div class="b-prod"></div>' +
				'</fieldset>' +
				'<fieldset class="extra">' +
				'<legend>' + city_builder.l('Chance of extra materials') + '</legend>' +
				'<div class="b-chance"></div>' +
				'</fieldset>' +
				'<fieldset class="storage">' +
				'<legend>' + city_builder.l('Storage') + '</legend>' +
				'<div class="b-store"></div>' +
				'</fieldset>' +
				'<fieldset class="taxes">' +
				'<legend>' + city_builder.l('Taxes') + '</legend>' +
				'<div class="b-tax"></div>' +
				'</fieldset>' +
				'<fieldset>' +
				'<legend>' + city_builder.l('Requirements') + '</legend>' +
				'<div class="b-req"></div>' +
				'</fieldset>' +
				'<div class="toolbar"></div>' +
			'</div>';
		$(el + ' .contents').append(_t);
		$(el).on('click', '.building-item', function () {
			$(el).addClass('expanded');
			$(el + ' .building-item').removeClass('active');
			$(this).addClass('active');
			$(el + ' .b-chance, ' + el + ' .b-tax, ' + el + ' .b-store, ' + el + ' .b-req, ' + el + ' .b-cost, ' + el + ' .b-name, ' + el + ' .b-desc, ' + el + ' .b-mats, ' + el + ' .b-prod, ' + el + ' .toolbar').empty();
			var handle = $(this).data('handle');
			var building = city_builder.BUILDINGS[city_builder.BUILDINGS.findIndexM(handle)];
			$(el + ' header .title').html(self.title + ' - ' + building.name);
			$(el + ' .b-desc').html(building.description);
			var _z = '<dl class="nomg">';
			for (var y in building.cost) {
				_z += '<dt>' + city_builder.utils.nice_numbers(building.cost[y]) + '</dt><dd><img class="tips" title="' + city_builder.utils.get_resource_name(y) + '" src="' + city_builder.ASSETS_URL + 'images/resources/' + y + '_small.png" /></dd>';
			}
			_z += '</dl>';
			$(el + ' .b-cost').append(_z);
			if (typeof building.requires !== 'undefined') {
				_z = '<dl class="nomg">';
				if (typeof building.requires.buildings !== 'undefined') {
					if (typeof building.requires.buildings === 'object') {
						for (var i = 0; i < building.requires.buildings.length; i++) {
							_z += '<dt>' + city_builder.l('Building') + '</dt><dd>' + self.core.get_building_config_data(building.requires.buildings[i]).name + '</dd>';
						}
					} else {
						_z += '<dt>' + city_builder.l('Building') + '</dt><dd>' + self.core.get_building_config_data(building.requires.buildings).name + '</dd>';
					}
				}
				_z += '<dt>City level</dt><dd>' + building.requires.city_level + '</dd>' +
						'</dl>';
				$(el + ' .b-req').append(_z);
			}
			if (typeof building.chance !== 'undefined') {
				_z = '<dl class="nomg">';
				for (var chance in building.chance) {
					_z += '<dt>' + building.chance[chance] * 100 + '%</dt><dd><img class="tips" title="' + city_builder.utils.get_resource_name(chance) + '" src="' + city_builder.ASSETS_URL + 'images/resources/' + chance + '_small.png" /></dd>';
				}
				_z += '</dl>';
				$(el + ' .b-chance').append(_z);
				$('fieldset.extra').show();
			} else {
				$('fieldset.extra').hide();
			}
			if (building.is_production === true) {
				$('fieldset.taxes, fieldset.production, fieldset.materials, fieldset.storage').hide();
				if (typeof building.production !== 'undefined') {
					_z = '<dl class="nomg">';
					for (var y in building.production) {
						_z += '<dt>' + building.production[y] + '</dt><dd><img class="tips" title="' + city_builder.utils.get_resource_name(y) + '" src="' + city_builder.ASSETS_URL + 'images/resources/' + y + '_small.png" /></dd>';
					}
					_z += '</dl>';
					$(el + ' .b-prod').append(_z);
					$('fieldset.production').show();
				}
				if (typeof building.materials !== 'undefined') {
					_z = '<dl class="nomg">';
					for (var y in building.materials) {
						_z += '<dt>' + building.materials[y] + '</dt><dd><img class="tips" title="' + city_builder.utils.get_resource_name(y) + '" src="' + city_builder.ASSETS_URL + 'images/resources/' + y + '_small.png" /></dd>';
					}
					_z += '</dl>';
					$(el + ' .b-mats').append(_z);
					$('fieldset.materials').show();
				}
			} else if (building.is_housing === true) {
				$('fieldset.production, fieldset.storage').hide();
				if (typeof building.materials !== 'undefined') {
					_z = '<dl class="nomg">';
					for (var y in building.materials) {
						_z += '<dt>' + building.materials[y] + '</dt><dd><img class="tips" title="' + city_builder.utils.get_resource_name(y) + '" src="' + city_builder.ASSETS_URL + 'images/resources/' + y + '_small.png" /></dd>';
					}
					_z += '</dl>';
					$(el + ' .b-mats').append(_z);
					$('fieldset.materials').show();
				}
				if (typeof building.tax !== 'undefined') {
					_z = '<dl class="nomg">' +
							'<dt>Tax</dt>' +
							'<dd>' + building.tax + '<img class="tips" title="' + city_builder.l('Coins') + '" src="' + city_builder.ASSETS_URL + 'images/resources/coins_small.png" /></dd>' +
							'</dl>';
					$(el + ' .b-tax').append(_z);
					$('fieldset.taxes').show();
				}
			} else if (typeof building.storage !== 'undefined') {
				$('fieldset.taxes, fieldset.production, fieldset.materials').hide();
				_z = '<dl class="nomg">' +
						'<dt>' + building.storage + '</dt><dd><img class="tips" title="' + city_builder.l('Storage Space') + '" src="' + city_builder.ASSETS_URL + 'images/resources/storage_small.png" /></dd>' +
						'</dl>';
				$(el + ' .b-store').append(_z);
				$('fieldset.storage').show();
			} else {
				$('fieldset.taxes, fieldset.production, fieldset.materials, fieldset.storage').hide();
			}
			var _i = city.is_building_built(building.handle);
			if (_i !== true) {
				$(el + ' .toolbar').append('<a href="#" class="btn build" data-handle="' + building.handle + '">' + city_builder.l('Build') + '</a>');
			} else {
				$(el + ' .toolbar').append(city_builder.l('You already constructed this building.'));
			}
			$(el + ' .tips').tipsy({
				gravity: 's'
			});
			$(el + ' .right').show();
			return false;
		}).on('click', '.btn.build', function () {
			var handle = $(this).data('handle');
			if (city.build(handle) !== false) {
				$(el + ' .building-item[data-handle=' + handle + ']').addClass('disabled');
				$(el + ' .toolbar').empty().append(city_builder.l('You already have this building.'));
			}
			return false;
		}).on('click', '.close', function () {
			self.destroy();
			return false;
		}).draggable({
			handle: 'header',
			containment: 'window',
			snap: '.panel'
		});
		$(el + ' .tabs').tabs();
		$(el + ' .tips').tipsy({
			gravity: 's'
		});
		$(el).css({
			'left': ($(window).width() / 2) - ($(el).width() / 2),
			'top': ($(window).height() / 2) - ($(el).height() / 2)
		});
		return this;
	};

	/**
	 * Callback method called when a function from the core needs to refresh
	 * information on this panel.
	 *
	 * @public
	 * @returns {city_builder.panel_building}
	 */
	this.refresh = function() {
		return this;
	};
	
	// Fire up the constructor
	return this.__constructor(params);
};

/**
 * Main Game storage panel object.
 * 
 * @param {type} params
 * @class {city_builder.panel_storage}
 * @returns {city_builder.panel_storage}
 */
city_builder.panel_storage = function (params) {
	
	/**
	 * Reference to the core object.
	 * 
	 * @type {city_builder.game}
	 */
	this.core = null;

	/**
	 * DOM id of this panel.
	 * 
	 * @type {String}
	 * @constant
	 */
	this.id = 'storage';

	/**
	 * Localized title of the panel.
	 * 
	 * @type {String}
	 */
	this.title = city_builder.l('City Storage');

	this.expanded = false;

	/**
	 * Object destructor.
	 * 
	 * @private
	 * @returns {Boolean}
	 */
	this.__destructor = function () {
		this.core.console_log('destroying panel with id `' + this.id + '`');
		var el = '#panel-' + this.id;
		$(el).remove();
		this.core.close_panel(this.id);
		$('.tipsy').remove();
		return false;
	};

	/**
	 * Method for destroying the window/panel.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.destroy = function () {
		return this.__destructor();
	};

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {city_builder.panel}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		this.core = params.core;
		var self = this;
		var el = '#panel-' + this.id;
		if (city_builder.ui.panel_exists(el)) {
			this.destroy();
		}
		this.core.console_log('creating panel with id `' + this.id + '`');
		$('.ui').append(city_builder.ui.generic_panel_template
			.replace(/{id}/g, this.id)
			.replace(/{title}/g, this.title));
		this.refresh();
		$(el).on('click', '.close', function () {
			self.destroy();
			return false;
		}).on('click', '.toggle-storage', function () {
			if ($('.toggle-storage').html() === city_builder.l('Show Less Goods')) {
				self.expanded = false;
				$('.toggle-storage').html(city_builder.l('Show More Goods'));
			} else {
				self.expanded = true;
				$('.toggle-storage').html(city_builder.l('Show Less Goods'));
			}
			$('.extra-storage').toggle();
			return false;
		}).draggable({
			handle: 'header',
			containment: 'window',
			snap: '.panel',
			start: function() {
		        $(this).css({
		        	height: 'auto'
		        });
		    },
		    stop: function() {
		        $(this).css({
		        	height: 'auto'
		        });
		    }
		});
		$(el + ' .tabs').tabs();
		$(el + ' .tips').tipsy({
			gravity: 's'
		});
		$(el).css({
			'left': ($(window).width() / 2) - ($(el).width() / 2),
			'top': ($(window).height() / 2) - ($(el).height() / 2)
		});
		return this;
	};

	/**
	 * Callback method called when a function from the core needs to refresh
	 * information on this panel.
	 *
	 * @public
	 * @returns {city_builder.panel_building}
	 */
	this.refresh = function() {
		var city = this.core.get_city();
		var resources = city.get_resources();
		var storage_space = city.get_storage_space();
		var el = '#panel-' + this.id;
		var out = '<div class="main-storage">';
		var main_storage = '';
		var extra_storage = '';
		for (var resource in resources) {
			if (resource !== 'fame' && resource !== 'prestige' && resource !== 'espionage') {
				if ($.inArray(resource, city_builder.MAIN_RESOURCES) !== -1) {
					main_storage += city_builder.ui.resource_storage_el(resource, resources[resource]);
				} else {
					extra_storage += city_builder.ui.resource_storage_el(resource, resources[resource]);
				}
			}
		}
		out += main_storage;
		out += '</div>';
		out += '<div class="extra-storage hidden">';
		out += extra_storage;
		out += '</div>';
		out += '<div class="clearfix"></div>' +
				'<p>' + city_builder.l('Total storage space') + ': ' + storage_space.all + ', ' + city_builder.l('used') + ': ' + storage_space.occupied + '</p>' +
		'<div class="toolbar">' +
			'<a class="btn iblock toggle-storage" href="#">' + city_builder.l('Show More Goods') + '</a>' +
		'</div>';
		$(el + ' .contents').empty().append(out);
		if (this.expanded === true) {
			$('.toggle-storage').trigger('click');
		}
		return this;
	};
	
	// Fire up the constructor
	return this.__constructor(params);
};

/**
 * Main Game storage panel object.
 * 
 * @param {type} params
 * @class {city_builder.panel_city}
 * @returns {city_builder.panel_city}
 */
city_builder.panel_city = function (params) {

	/**
	 * Reference to the core object.
	 * 
	 * @type {city_builder.game}
	 */
	this.core = null;

	/**
	 * DOM id of this panel.
	 * 
	 * @type {String}
	 * @constant
	 */
	this.id = 'city';

	/**
	 * Object destructor.
	 * 
	 * @private
	 * @returns {Boolean}
	 */
	this.__destructor = function () {
		this.core.console_log('destroying panel with id `' + this.id + '`');
		var el = '#panel-' + this.id;
		$(el).remove();
		this.core.close_panel(this.id);
		$('.tipsy').remove();
		return false;
	};

	/**
	 * Method for destroying the window/panel.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.destroy = function () {
		return this.__destructor();
	};

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {city_builder.panel}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		var self = this;
		this.core = params.core;
		var el = '#panel-' + this.id;
		var city = params.data;
		if (city_builder.ui.panel_exists(el)) {
			this.destroy();
		}
		this.core.console_log('creating panel with id `' + this.id + '`');
		var trades = city.get_trades();
		$('.ui').append(city_builder.ui.generic_panel_template
			.replace(/{id}/g, this.id)
			.replace(/{title}/g, 'City of ' + city.get_name()));
		$(el + ' .contents').append(city_builder.ui.tabs([city_builder.l('Info'), city_builder.l('Army'), city_builder.l('Navy'), city_builder.l('Imports'), city_builder.l('Exports')]));
		$(el + ' #tab-info').append('' +
				'<img class="avatar" src="' + city_builder.ASSETS_URL + 'images/avatars/avatar' + city.get_avatar() + '.png" />' +
				'<dl>' +
				'<dt>' + city_builder.l('Ruler') + '</dt><dd>' + city.get_ruler() + '</dd>' +
				'<dt>' + city_builder.l('Climate') + '</dt><dd>' + city.get_climate().name.capitalize() + '</dd>' +
				'<dt>' + city_builder.l('Personality') + '</dt><dd>' + city.get_personality().name.capitalize() + '</dd>' +
				'<dt>' + city_builder.l('Nationality') + '</dt><dd>' + city.get_nationality().name.capitalize() + '</dd>' +
				'<dt>' + city_builder.l('Level') + '</dt><dd>' + city.get_level() + '</dd>' +
				'<dt>' + city_builder.l('Prestige') + '</dt><dd>' + city.get_prestige() + '</dd>' +
				'<dt>' + city_builder.l('Coins') + '</dt><dd>' + city_builder.utils.nice_numbers(city.get_coins()) + '</dd>' +
				'<dt>' + city_builder.l('Influence') + '</dt><dd>' + this.core.get_city().get_influence_with_city(city.get_name()) + '</dd>' +
				'</dl>');
		$(el + ' #tab-army').append(city_builder.ui.army_list(city.get_army_total()));
		$(el + ' #tab-navy').append(city_builder.ui.navy_list(city.get_navy_total()));
		$(el + ' #tab-imports').append('' +
				'<p>' + city_builder.l('Below are the goods this city will be buying this year.') + '</p>' +
				city_builder.ui.trades_list(trades, 'imports'));
		$(el + ' #tab-exports').append('' +
				'<p>' + city_builder.l('Below are the goods this city will be selling this year.') + '</p>' +
				city_builder.ui.trades_list(trades, 'exports'));
		$(el).on('click', '.close', function () {
			self.destroy();
			return false;
		}).draggable({
			handle: 'header',
			containment: 'window',
			snap: '.panel'
		});
		$(el + ' .tabs').tabs();
		$(el + ' .tips').tipsy({
			gravity: 's'
		});
		$(el).css({
			'left': ($(window).width() / 2) - ($(el).width() / 2),
			'top': ($(window).height() / 2) - ($(el).height() / 2)
		});
		return this;
	};

	/**
	 * Callback method called when a function from the core needs to refresh
	 * information on this panel.
	 *
	 * @public
	 * @returns {city_builder.panel_building}
	 */
	this.refresh = function() {
		return this;
	};
	
	// Fire up the constructor
	return this.__constructor(params);
};

/**
 * Main Game help panel object.
 * 
 * @param {type} params
 * @class {city_builder.panel_help}
 * @returns {city_builder.panel_help}
 */
city_builder.panel_help = function (params) {

	/**
	 * Reference to the core object.
	 * 
	 * @type {city_builder.game}
	 */
	this.core = null;

	/**
	 * DOM id of this panel.
	 * 
	 * @type {String}
	 * @constant
	 */
	this.id = 'help';

	/**
	 * Help term to search for.
	 *
	 * @type {String}
	 */
	this.term = null;

	/**
	 * Help context, for ex 'building' or 'army'.
	 *
	 * @type {String}
	 */
	this.ctxt = null;

	/**
	 * Localized title of the panel.
	 * 
	 * @type {String}
	 */
	this.title = city_builder.l('Help');

	/**
	 * Object destructor.
	 * 
	 * @private
	 * @returns {Boolean}
	 */
	this.__destructor = function () {
		this.core.console_log('destroying panel with id `' + this.id + '`');
		var el = '#panel-' + this.id;
		$(el).remove();
		this.core.close_panel(this.id);
		$('.tipsy').remove();
		return false;
	};

	/**
	 * Method for destroying the window/panel.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.destroy = function () {
		return this.__destructor();
	};

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {city_builder.panel}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		this.core = params.core;
		this.term = params.term;
		this.ctxt = params.ctxt;
		var el = '#panel-' + this.id;
		var self = this;
		if (city_builder.ui.panel_exists(el)) {
			this.destroy();
		}
		this.core.console_log('creating panel with id `' + this.id + '`');
		$('.ui').append(city_builder.ui.generic_panel_template
			.replace(/{id}/g, this.id));
		var title = '';
		switch (this.ctxt) {
			case 'building':
				var data = this.core.get_city().get_building_by_handle(this.term);
				title = data.get_name();
				break;
		}
		$(el + ' header .title').html(title !== '' ? 'Help about ' + title : 'Help');
		var _t = '';
		
		$(el + ' .contents').append(_t);
		$(el).on('click', '.close', function () {
			self.destroy();
			return false;
		}).draggable({
			handle: 'header',
			containment: 'window',
			snap: '.panel'
		});
		$(el + ' .tabs').tabs();
		$(el + ' .tips').tipsy({
			gravity: 's'
		});
		$(el).css({
			'left': ($(window).width() / 2) - ($(el).width() / 2),
			'top': ($(window).height() / 2) - ($(el).height() / 2)
		});
		return this;
	};

	/**
	 * Callback method called when a function from the core needs to refresh
	 * information on this panel.
	 *
	 * @public
	 * @returns {city_builder.panel_building}
	 */
	this.refresh = function() {
		return this;
	};
	
	// Fire up the constructor
	return this.__constructor(params);
};

/**
 * Main Game storage panel object.
 * 
 * @param {type} params
 * @class {city_builder.panel_rankings}
 * @returns {city_builder.panel_rankings}
 */
city_builder.panel_rankings = function (params) {
	
	/**
	 * Reference to the core object.
	 * 
	 * @type {city_builder.game}
	 */
	this.core = null;

	/**
	 * DOM id of this panel.
	 * 
	 * @type {String}
	 * @constant
	 */
	this.id = 'rankings';

	/**
	 * Localized title of the panel.
	 * 
	 * @type {String}
	 */
	this.title = city_builder.l('Rankings');

	/**
	 * Object destructor.
	 * 
	 * @private
	 * @returns {Boolean}
	 */
	this.__destructor = function () {
		this.core.console_log('destroying panel with id `' + this.id + '`');
		var el = '#panel-' + this.id;
		$(el).remove();
		this.core.close_panel(this.id);
		$('.tipsy').remove();
		return false;
	};

	/**
	 * Method for destroying the window/panel.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.destroy = function () {
		return this.__destructor();
	};

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {city_builder.panel}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		this.core = params.core;
		var self = this;
		var el = '#panel-' + this.id;
		if (city_builder.ui.panel_exists(el)) {
			this.destroy();
		}
		this.core.console_log('creating panel with id `' + this.id + '`');
		$(el).remove();
		$('.ui').append(city_builder.ui.generic_panel_template
			.replace(/{id}/g, this.id)
			.replace(/{title}/g, this.title));
		this.refresh();
		$(el).on('click', '.close', function () {
			self.destroy();
			return false;
		}).draggable({
			handle: 'header',
			containment: 'window',
			snap: '.panel'
		});
		$(el + ' .tabs').tabs();
		$(el + ' .tips').tipsy({
			gravity: 's'
		});
		$(el).css({
			'left': ($(window).width() / 2) - ($(el).width() / 2),
			'top': ($(window).height() / 2) - ($(el).height() / 2)
		});
		return this;
	};

	/**
	 * Callback method called when a function from the core needs to refresh
	 * information on this panel.
	 *
	 * @public
	 * @returns {city_builder.panel_building}
	 */
	this.refresh = function() {
		var el = '#panel-' + this.id;
		var ranking_list = [];
		for (var item in city_builder.CITIES) {
			ranking_list.push({
				name: item,
				score: this.get_ranking(item)
			});
		}
		ranking_list.push({
			name: this.core.get_city().get_name(),
			score: this.get_ranking(this.core.get_city())
		});
		ranking_list.sort(function(a, b) {
		    var keyA = new Date(a.score);
		    var keyB = new Date(b.score);
		    if (keyA > keyB) {
		    	return -1;
		    }
		    if (keyA < keyB) {
		    	return 1;
		    }
		    return 0;
		});
		var out = '<div class="rankings-list">' +
			'<dl>' +
			'<dt>' + city_builder.l('City') + '</dt>' + 
			'<dd>' + city_builder.l('Score') + '</dd>' +
			'</dl>';
		for (var i = 0; i < ranking_list.length; i++) {
			out += '<dt>' + ranking_list[i].name + '</dt><dd>' + ranking_list[i].score + '</dd>';
		}
		out += '</dl>' +
			'</div>';
		$(el + ' .contents').empty().append(out);
		return this;
	};
	
	/**
	 * Retrieve the current ranking score for a city
	 *
	 * @public
	 * @returns {Number}
	 */
	this.get_ranking = function(city) {
		if (typeof city !== 'undefined' && typeof city === 'string') {
			return this.core.get_city(city).get_rank();
		}
		else if (typeof city !== 'undefined' && typeof city === 'object') {
			return city.get_rank();
		}
		else {
			return this.core.get_city().get_rank();
		}
	};

	// Fire up the constructor
	return this.__constructor(params);
};

/**
 * Send goods to another city panel object.
 * 
 * @param {type} params
 * @class {city_builder.panel_send_goods}
 * @returns {city_builder.panel_send_goods}
 */
city_builder.panel_send_goods = function (params) {
	
	/**
	 * Reference to the core object.
	 * 
	 * @type {city_builder.game}
	 */
	this.core = null;

	/**
	 * DOM id of this panel.
	 * 
	 * @type {String}
	 * @constant
	 */
	this.id = 'sendgoods';

	/**
	 * Localized title of the panel.
	 * 
	 * @type {String}
	 */
	this.title = city_builder.l('Send Goods');

	/**
	 * Object destructor.
	 * 
	 * @private
	 * @returns {Boolean}
	 */
	this.__destructor = function () {
		this.core.console_log('destroying panel with id `' + this.id + '`');
		var el = '#panel-' + this.id;
		$(el).remove();
		this.core.close_panel(this.id);
		$('.tipsy').remove();
		return false;
	};

	/**
	 * Method for destroying the window/panel.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.destroy = function () {
		return this.__destructor();
	};

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {city_builder.panel}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		this.core = params.core;
		var self = this;
		var el = '#panel-' + this.id;
		if (city_builder.ui.panel_exists(el)) {
			this.destroy();
		}
		this.core.console_log('creating panel with id `' + this.id + '`');
		var city = this.core.get_city();
		var resources = city.get_resources();
		$('.ui').append(city_builder.ui.generic_panel_template
			.replace(/{id}/g, this.id)
			.replace(/{title}/g, this.title));
		var out = '';
		
		$(el + ' .contents').empty().append(out);
		$(el).on('click', '.close', function () {
			self.destroy();
			return false;
		}).draggable({
			handle: 'header',
			containment: 'window',
			snap: '.panel'
		});
		$(el + ' .tabs').tabs();
		$(el + ' .tips').tipsy({
			gravity: 's'
		});
		$(el).css({
			'left': ($(window).width() / 2) - ($(el).width() / 2),
			'top': ($(window).height() / 2) - ($(el).height() / 2)
		});
		return this;
	};

	/**
	 * Callback method called when a function from the core needs to refresh
	 * information on this panel.
	 *
	 * @public
	 * @returns {city_builder.panel_building}
	 */
	this.refresh = function() {
		return this;
	};
	
	// Fire up the constructor
	return this.__constructor(params);
};

/**
 * Declare war to another city panel object.
 * 
 * @param {type} params
 * @class {city_builder.panel_declare_war}
 * @returns {city_builder.panel_declare_war}
 */
city_builder.panel_declare_war = function (params) {
	
	/**
	 * Reference to the core object.
	 * 
	 * @type {city_builder.game}
	 */
	this.core = null;

	/**
	 * DOM id of this panel.
	 * 
	 * @type {String}
	 * @constant
	 */
	this.id = 'declarewar';

	/**
	 * Localized title of the panel.
	 * 
	 * @type {String}
	 */
	this.title = city_builder.l('Declare War');

	/**
	 * Object destructor.
	 * 
	 * @private
	 * @returns {Boolean}
	 */
	this.__destructor = function () {
		this.core.console_log('destroying panel with id `' + this.id + '`');
		var el = '#panel-' + this.id;
		$(el).remove();
		this.core.close_panel(this.id);
		$('.tipsy').remove();
		return false;
	};

	/**
	 * Method for destroying the window/panel.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.destroy = function () {
		return this.__destructor();
	};

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {city_builder.panel}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		this.core = params.core;
		var self = this;
		var el = '#panel-' + this.id;
		if (city_builder.ui.panel_exists(el)) {
			this.destroy();
		}
		this.core.console_log('creating panel with id `' + this.id + '`');
		var city = this.core.get_city();
		var otherCity = params.data;
		$('.ui').append(city_builder.ui.generic_panel_template
			.replace(/{id}/g, this.id)
			.replace(/{title}/g, this.title));
		var out = '';
		
		$(el + ' .contents').empty().append(out);
		$(el).on('click', '.close', function () {
			self.destroy();
			return false;
		}).draggable({
			handle: 'header',
			containment: 'window',
			snap: '.panel'
		});
		$(el + ' .tabs').tabs();
		$(el + ' .tips').tipsy({
			gravity: 's'
		});
		$(el).css({
			'left': ($(window).width() / 2) - ($(el).width() / 2),
			'top': ($(window).height() / 2) - ($(el).height() / 2)
		});
		return this;
	};

	/**
	 * Callback method called when a function from the core needs to refresh
	 * information on this panel.
	 *
	 * @public
	 * @returns {city_builder.panel_building}
	 */
	this.refresh = function() {
		return this;
	};
	
	// Fire up the constructor
	return this.__constructor(params);
};

/**
 * Main Game world panel object.
 * 
 * @param {type} params
 * @class {city_builder.panel_world}
 * @returns {city_builder.panel_world}
 */
city_builder.panel_world = function (params) {

	/**
	 * Reference to the core object.
	 * 
	 * @type {city_builder.game}
	 */
	this.core = null;

	/**
	 * DOM id of this panel.
	 * 
	 * @type {String}
	 * @constant
	 */
	this.id = 'world';

	/**
	 * Object destructor.
	 * 
	 * @private
	 * @returns {Boolean}
	 */
	this.__destructor = function () {
		this.core.console_log('destroying panel with id `' + this.id + '`');
		var el = '#panel-' + this.id;
		$(el).remove();
		this.core.close_panel(this.id);
		$('.tipsy').remove();
		return false;
	};

	/**
	 * Method for destroying the window/panel.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.destroy = function () {
		return this.__destructor();
	};

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {city_builder.panel}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		var self = this;
		this.core = params.core;
		var el = '#panel-' + this.id;
		if (city_builder.ui.panel_exists(el)) {
			this.destroy();
		}
		this.core.console_log('creating panel with id `' + this.id + '`');
		var city = this.core.get_city();
		$('.ui').append(city_builder.ui.worldmap_panel_template
			.replace(/{id}/g, this.id));
		var loc = city_builder['CITY_LOCATION_' + city.get_climate().name.toUpperCase()];
		var out = '<div data-name="yourcity" class="tips city c1" title="' + city_builder.l('City of') + ' ' + city.get_name() + '" style="left:' + loc.x + 'px;top:' + loc.y + 'px"></div>';
		for (var item in city_builder.CITIES) {
			out += city_builder.ui.city_worldmap_element(item);
		}
		$(el + ' .contents .worldmap').empty().append(out);
		$(el).on('click', '.close', function () {
			self.destroy();
			return false;
		}).draggable({
			handle: 'header',
			containment: 'window',
			snap: '.panel'
		}).on('click', '.city', function () {
			var city_name = $(this).data('name');
			if (city_name === 'yourcity') {
				self.core.open_panel(new city_builder.panel_advisor({
					core: self.core
				}));
			} else {
				var _city = self.core.get_city(city_name);
				self.core.open_panel(new city_builder.panel_city({
					core: self.core,
					data: _city
				}));
			}
			return false;
		});
		$(el + ' .tabs').tabs();
		$(el + ' .tips').tipsy({
			gravity: 's'
		});
		$(el).css({
			'left': ($(window).width() / 2) - ($(el).width() / 2),
			'top': ($(window).height() / 2) - ($(el).height() / 2)
		});
		return this;
	};

	/**
	 * Callback method called when a function from the core needs to refresh
	 * information on this panel.
	 *
	 * @public
	 * @returns {city_builder.panel_building}
	 */
	this.refresh = function() {
		return this;
	};

	// Fire up the constructor
	return this.__constructor(params);
};

/**
 * Main Game city advisor panel object.
 * 
 * @param {type} params
 * @class {city_builder.panel_advisor}
 * @returns {city_builder.panel_advisor}
 */
city_builder.panel_advisor = function (params) {

	/**
	 * Reference to the core object.
	 * 
	 * @type {city_builder.game}
	 */
	this.core = null;

	/**
	 * DOM id of this panel.
	 * 
	 * @type {String}
	 * @constant
	 */
	this.id = 'advisor';

	/**
	 * Localized title of the panel.
	 * 
	 * @type {String}
	 */
	this.title = city_builder.l('Your City Advisor');

	/**
	 * Object destructor.
	 * 
	 * @private
	 * @returns {Boolean}
	 */
	this.__destructor = function () {
		this.core.console_log('destroying panel with id `' + this.id + '`');
		var el = '#panel-' + this.id;
		$(el).remove();
		this.core.close_panel(this.id);
		$('.tipsy').remove();
		return false;
	};

	/**
	 * Method for destroying the window/panel.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.destroy = function () {
		return this.__destructor();
	};

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {city_builder.panel}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		this.core = params.core;
		var el = '#panel-' + this.id;
		var self = this;
		if (city_builder.ui.panel_exists(el)) {
			this.destroy();
		}
		this.core.console_log('creating panel with id `' + this.id + '`');
		var city = this.core.get_city();
		var buildings = city.get_buildings();
		var can_diplomacy = city.is_building_built('embassy');
		var can_build_ships = city.is_building_built('shipyard');
		var can_recruit_soldiers = city.is_building_built('camp') || city.is_building_built('castle');
		$('.ui').append(city_builder.ui.generic_panel_template
			.replace(/{id}/g, this.id)
			.replace(/{title}/g, this.title));
		$(el + ' .contents').append('<div class="tabs">' +
			'<ul>' +
				'<li><a href="#tab-info">' + city_builder.l('Info') + '</a></li>' +
				'<li><a href="#tab-production">' + city_builder.l('Production') + '</a></li>' +
				'<li><a href="#tab-housing">' + city_builder.l('Housing') + '</a></li>' +
				'<li><a href="#tab-army">' + city_builder.l('Army') + '</a></li>' +
				'<li><a href="#tab-navy">' + city_builder.l('Navy') + '</a></li>' +
				'<li><a href="#tab-mercenary">' + city_builder.l('Mercenaries') + '</a></li>' +
				'<li><a href="#tab-diplomacy">' + city_builder.l('Diplomacy') + '</a></li>' +
			'</ul>' +
			'<div id="tab-info">' +
			'</div>' +
			'<div id="tab-production">' +
			'</div>' +
			'<div id="tab-housing">' +
			'</div>' +
			'<div id="tab-army">' +
			'</div>' +
			'<div id="tab-navy">' +
			'</div>' +
			'<div id="tab-mercenary">' +
			'</div>' +
			'<div id="tab-diplomacy">' +
			'</div>' +
		'</div>');
		this.refresh();
		$(el).on('click', '.pact', function () {
			if (can_diplomacy === true) {
				var city = $(this).data('name');
				var influence = self.core.get_city().get_influence_with_city(city);
				if (influence >= 50) {
					self.core.error('Not implemented yet.');
					/*
					if (self.core.get_city().propose_pact(city) === true) {
						// TODO
					}
					*/

				} else {
					self.core.error(city_builder.l('Your influence on') + ' ' + city + ' ' + city_builder.l('is too low to propose a pact.'));
				}
			} else {
				self.core.error(city_builder.l('You will need to construct an Embassy before being able to propose treaties and pacts to other cities.'));
			}
			return false;
		}).on('click', '.spy', function () {
			if (can_diplomacy === true) {
				var city = $(this).data('name');
				self.core.error('Not implemented yet.');
				/*
				if (self.core.get_city().assign_spy(city) === true) {
					// TODO
				}
				*/
			} else {
				self.core.error(city_builder.l('You will need to construct an Embassy before being able to assign spies to other cities.'));
			}
			return false;
		}).on('click', '.recruit-ship', function () {
			if (can_build_ships === true) {
				var ship = $(this).data('handle');
				self.core.error('Not implemented yet.');
				/*
				if (self.core.get_city().recruit_ship(ship) === true) {
					self._refresh_navy();
				}
				*/
			} else {
				self.core.error(city_builder.l('You will need to construct a Shipyard before being able to construct ships in your city.'));
			}
			return false;
		}).on('click', '.declare-war', function () {
			if (can_diplomacy === true) {
				var name = $(this).data('name');
				var _city = self.core.get_city(name);
				self.core.error('Not implemented yet.');
				/*
				self.core.open_panel(new city_builder.panel_declare_war({
					core: self.core,
					data: _city
				}));
				*/
			} else {
				self.core.error(city_builder.l('You will need to construct an Embassy before being able to declare war to other cities.'));
			}
			return false;
		}).on('click', '.send-goods', function () {
			if (can_diplomacy === true) {
				var name = $(this).data('name');
				var _city = self.core.get_city(name);
				self.core.error('Not implemented yet.');
				/*
				self.core.open_panel(new city_builder.panel_send_goods({
					core: self.core,
					data: _city
				}));
				*/
			} else {
				self.core.error(city_builder.l('You will need to construct an Embassy before being able to send goods to other cities.'));
			}
			return false;
		}).on('click', '.view-city', function () {
			var name = $(this).data('name');
			var _city = self.core.get_city(name);
			self.core.open_panel(new city_builder.panel_city({
				core: self.core,
				data: _city
			}));
			return false;
		}).on('click', '.recruit-soldier', function () {
			if (can_recruit_soldiers === true) {
				var soldier = $(this).data('handle');
				if (self.core.get_city().recruit_soldier(soldier) === true) {
					self._refresh_army();
				}
			} else {
				self.core.error(city_builder.l('You will need to construct a Military Camp or Castle before recruiting soldiers in your city.'));
			}
			return false;
		}).on('click', '.view-merc', function () {
			var _army = $(this).data('id');
			var data = city_builder.MERCENARIES[_army];
			self.core.open_panel(new city_builder.panel_army({
				core: self.core,
				data: data
			}));
			return false;
		}).on('click', '.raid-merc', function () {
			var _army = $(this).data('id');
			var data = city_builder.MERCENARIES[_army];
			self.core.error('Not implemented yet.');
			return false;
		}).on('click', '.campaign-merc', function () {
			var _army = $(this).data('id');
			var data = city_builder.MERCENARIES[_army];
			self.core.error('Not implemented yet.');
			return false;
		}).on('click', '.disband-merc', function () {
			var _army = $(this).data('id');
			var data = city_builder.MERCENARIES[_army];
			self.core.error('Not implemented yet.');
			return false;
		}).on('click', '.close', function () {
			self.destroy();
			return false;
		}).draggable({
			handle: 'header',
			containment: 'window',
			snap: '.panel'
		});
		$(el + ' .tabs').tabs();
		$(el + ' .tips').tipsy({
			gravity: 's'
		});
		$(el).css({
			'left': ($(window).width() / 2) - ($(el).width() / 2),
			'top': ($(window).height() / 2) - ($(el).height() / 2)
		});
		return this;
	};

	/**
	 * Callback method called when a function from the core needs to refresh
	 * information on this panel.
	 *
	 * @public
	 * @returns {city_builder.panel_advisor}
	 */
	this.refresh = function() {
		this._refresh_info();
		this._refresh_production();
		this._refresh_housing();
		this._refresh_army();
		this._refresh_navy();
		this._refresh_mercenaries();
		this._refresh_diplomacy();
		return this;
	};

	this._refresh_mercenaries = function() {
		var city = this.core.get_city();
		var _t = '<p>' + city_builder.l('Mercenary armies are available to hire for a fixed price, they do not cost additional resources but they are only available for raiding and campaign missions, they do not participate in the defense of your city.') + '</p>' +
				'<p>' + city_builder.l('Also, keep in mind that once a mercenary army is hired, they are at your disposal until the end of the current year.') + '</p>' +
				'<div class="hired-mercenaries-list">';
		if (city.mercenary.length > 0) {
			_t += '<table class="normal">';
			for (var i = 0; i < city.mercenary.length; i++) {
				var armyData = city_builder.MERCENARIES[city.mercenary[i].id];
				_t += '<tr>' +
						'<td class="icon"><img src="' + city_builder.ASSETS_URL + 'images/armies/' + armyData.icon + '.png" /></td>' +
						'<td><p class="title">' + armyData.name + '</p><p class="description">' + armyData.description + '</p></td>' +
						'<td class="large">' +
						'<a title="' + city_builder.l('View info on this mercenary army.') + '" data-id="' + city.mercenary[i].id + '" class="tips view-merc" href="#">' + city_builder.l('view') + '</a> ' +
						'<a title="' + city_builder.l('Send this mercenary army on a raiding mission. Depending on the success of the mission, they will return with coins and/or resources.') + '" data-id="' + i + '" class="tips raid-merc" href="#">' + city_builder.l('raid') + '</a> ' +
						'<a title="' + city_builder.l('Send this mercenary arm on a campaign towards a city. Depending on the success of the mission, they will return with prisoniers (future soldiers for your army), coins and/or resources. Winning a campaign will grant you fame and prestige.') + '" data-id="' + i + '" class="tips campaign-merc" href="#">' + city_builder.l('campaign') + '</a> ' +
						'<a title="' + city_builder.l('Disband this mercenary army? They will be available for hire later when you need them.') + '" data-id="' + i + '" class="tips disband-merc" href="#">' + city_builder.l('release') + '</a>' +
						'</td>' +
						'</tr>';

			}
			_t += '</table>';
		} else {
			_t += '<p>' + city_builder.l('You have no mercenary armies hired for your city. Go to the World Market Trades and hire one.') + '</p>';
		}
		_t += '</div>';
		$('#tab-mercenary').empty().append(_t);
		return this;
	};

	this._refresh_diplomacy = function() {
		var city = this.core.get_city();
		var _t = '';
		var can_diplomacy = this.core.get_city().is_building_built('embassy');
		if (can_diplomacy !== true) {
			_t += '<p>' + city_builder.l('You will need to construct an Embassy before being able to propose treaties and pacts to other cities.') + '</p>';
		}
		var cities = this.core.get_cities();
		_t += '<div class="cities-list">' +
				'<table class="normal">';
		for (var i = 1; i < cities.length; i++) {
			_t += '<tr>' +
					'<td class="icon"><img src="' + city_builder.ASSETS_URL + 'images/avatars/avatar' + cities[i].get_avatar() + '.png" /></td>' +
					'<td>' +
					'<p>' +
						'<span class="title">' + cities[i].get_name() + '</span> ' +
						'<span class="description">' + city_builder.l('Leader') + ': ' + cities[i].get_ruler() + ' ' + city_builder.l('Personality') + ': ' + cities[i].get_personality().name + '</span>' +
					'</p>';
			var influence = this.core.get_city().get_influence();
			influence = influence[cities[i].get_name()];
			var _e = '';
			if (influence < 20) {
				_e = ' vbad';
			} else if (influence >= 20 && influence < 50) {
				_e = ' bad';
			} else if (influence >= 50 && influence < 80) {
				_e = ' good';
			} else if (influence >= 80) {
				_e = ' vgood';
			}
			_t += '<div class="progress"><span style="width:' + influence + '%" class="bar' + _e + '"></span></div>';
			_t += '</td>' +
					'<td class="large">' +
					'<a data-name="' + cities[i].get_name() + '" title="' + city_builder.l('View info about this city.') + '" class="tips view-city" href="#">' + city_builder.l('view') + '</a> ' +
					'<a data-name="' + cities[i].get_name() + '" title="' + city_builder.l('Send a spy to this city.') + '" data-id="' + i + '" class="tips spy" href="#">' + city_builder.l('spy') + '</a> ' +
					'<a data-name="' + cities[i].get_name() + '" title="' + city_builder.l('Propose a pact to this city`s ruler.') + '" class="tips pact" href="#">' + city_builder.l('pact') + '</a> ' +
					'<a data-name="' + cities[i].get_name() + '" title="' + city_builder.l('Send goods to this city.') + '" data-id="' + i + '" class="tips send-goods" href="#">' + city_builder.l('send') + '</a> ' +
					'<a data-name="' + cities[i].get_name() + '" title="' + city_builder.l('Declare war to this city.') + '" data-id="' + i + '" class="tips declare-war" href="#">' + city_builder.l('war') + '</a>' +
					'</td>' +
					'</tr>';

		}
		_t += '</table>' +
				'</div>';
		$('#tab-diplomacy').empty().append(_t);
		return this;
	};

	this._refresh_info = function() {
		var city = this.core.get_city();
		var _t = '<img class="avatar" src="' + city_builder.ASSETS_URL + 'images/avatars/avatar' + city.get_avatar() + '.png" />' +
				'<dl>' +
				'<dt>' + city_builder.l('Current date') + '</dt><dd class="citydate">' + this.core.get_date() + '</dd>' +
				'<dt>' + city_builder.l('Ruler') + '</dt><dd>' + city.get_ruler() + '</dd>' +
				'<dt>' + city_builder.l('Climate') + '</dt><dd>' + city.get_climate().name.capitalize() + '</dd>' +
				'<dt>' + city_builder.l('Personality') + '</dt><dd>' + city.get_personality().name.capitalize() + '</dd>' +
				'<dt>' + city_builder.l('Nationality') + '</dt><dd>' + city.get_nationality().name.capitalize() + '</dd>' +
				'<dt>' + city_builder.l('Level') + '</dt><dd class="citylevel">' + city.get_level() + '</dd>' +
				'<dt>' + city_builder.l('Prestige') + '</dt><dd class="cityprestige">' + city.get_prestige() + '</dd>' +
				'<dt>' + city_builder.l('Espionage') + '</dt><dd class="cityespionage">' + city.get_espionage() + '</dd>' +
				'</dl>';
		var advices = city.call_advisor();
		if (advices.length > 0) {
			_t += '<p>' + city_builder.l('Your City Advisor recommends you to:') + '</p>' +
					'<ul class="advices">';
			for (var z = 0; z < advices.length; z++) {
				_t += '<li>' + advices[z] + '</li>';
			}
			_t += '</ul>';
		}
		$('#tab-info').empty().append(_t);
		return this;
	};

	this._refresh_housing = function() {
		var city = this.core.get_city();
		var buildings = city.get_buildings();
		var _t = '<table class="normal">' +
					'<thead>' +
					'<tr>' +
						'<td></td>' +
						'<td class="center">Level</td>' +
						'<td>Tax</td>' +
						'<td>Materials</td>' +
					'</tr>' +
					'</thead>';
		var total_tax = 0;
		for (var l = 0; l < buildings.length; l++) {
			if (buildings[l].is_housing_building() === true) {
				var building_data = buildings[l].get_building_data();
				_t += '<tr' + ((buildings[l].has_problems() === false) ? '' : ' class="notify"') +'>' +
					'<td>' + buildings[l].get_name() + '</td>' +
					'<td class="center">' + buildings[l].get_level() + '</td>' +
					'<td>';
					if (building_data.tax) {
						total_tax += buildings[l].get_level() * building_data.tax;
						_t += ' +' + buildings[l].get_level() * building_data.tax + ' ' + city_builder.ui.resource_small_img('coins');
					}
				_t += '</td>' +
					'<td>';
					if (building_data.materials) {
						for (var item in building_data.materials) {
							_t += ' -' + building_data.materials[item] + ' ' + city_builder.ui.resource_small_img(item);
						}
					}
				_t += '</td>' +
				'</tr>';
			}
		}
		_t += '<tfoot>' +
							'<tr>' +
								'<td></td>' +
								'<td></td>' +
								'<td>Tax income: ' + total_tax + ' ' + city_builder.ui.resource_small_img('coins') + '</td>' +
								'<td></td>' +
							'</tr>' +
						'</tfoot>' +
					'</table>';
		$('#tab-housing').empty().append(_t);
		return this;
	};

	this._refresh_production = function() {
		var city = this.core.get_city();
		var buildings = city.get_buildings();
		var _t = '<table class="normal">' +
					'<thead>' +
					'<tr>' +
						'<td></td>' +
						'<td class="center">Level</td>' +
						'<td>Production</td>' +
						'<td>Materials</td>' +
						'<td class="center">Stopped</td>' +
					'</tr>' +
					'</thead>';
		for (var l = 0; l < buildings.length; l++) {
			if (buildings[l].is_production_building() === true) {
				var building_data = buildings[l].get_building_data();
				_t += '<tr' + ((buildings[l].has_problems() === false) ? '' : ' class="notify"') +'>' +
					'<td>' + buildings[l].get_name() + '</td>' +
					'<td class="center">' + buildings[l].get_level() + '</td>' +
					'<td>';
					if (building_data.production) {
						for (var item in building_data.production) {
							_t += ' +' + buildings[l].get_level() * building_data.production[item] + ' ' + city_builder.ui.resource_small_img(item);
						}
					}
				_t += '</td>' +
					'<td>';
					if (building_data.materials) {
						for (var item in building_data.materials) {
							_t += ' -' + building_data.materials[item] + ' ' + city_builder.ui.resource_small_img(item);
						}
					}
				_t += '</td>' +
					'<td class="center">' + ((buildings[l].is_producing() === true) ? city_builder.l('no') : city_builder.l('yes')) + '</td>' +
				'</tr>';
			}
		}
		_t += '<tfoot>' +
					'<tr>' +
						'<td></td>' +
						'<td class="center">Level</td>' +
						'<td>Production</td>' +
						'<td>Materials</td>' +
						'<td class="center">Stopped</td>' +
					'</tr>' +
					'</tfoot>' +
					'</table>';
		$('#tab-production').empty().append(_t);
		return this;
	};

	/**
	 * Internal function for refreshing the Army tab.
	 * 
	 * @private
	 * @returns {city_builder.panelAdvisor}
	 */
	this._refresh_army = function () {
		var city = this.core.get_city();
		var resources = city.get_resources();
		var _t = '';
		var can_recruit_soldiers = this.core.get_city().is_building_built('camp') || this.core.get_city().is_building_built('castle');
		if (can_recruit_soldiers !== true) {
			_t += '<p>' + city_builder.l('You will need to construct a Military Camp or Castle before being able to recruit soldiers in your city.') + '</p>';
		}
		_t += '<div class="army-list">' +
				'</div>' +
				'<div class="army-recruiter">';
		for (var item in city_builder.SOLDIER_TYPES) {
			_t += '<fieldset>' +
					'<legend>' + item + '</legend>' +
					'<div class="cost">' +
					'<dl class="nomg">';
			for (var res in city_builder.SOLDIER_TYPES[item].cost) {
				_t += '<dt>' + city_builder.utils.nice_numbers(city_builder.SOLDIER_TYPES[item].cost[res]) + '</dt><dd><img class="tips" title="' + resources[res].name + '" src="' + city_builder.ASSETS_URL + 'images/resources/' + res + '_small.png" /></dd>';
			}
			_t += '</dl>' +
					'</div>' +
					'<div class="info">' +
					'<dl class="nomg">' +
					'<dt>Attack</dt><dd>' + city_builder.SOLDIER_TYPES[item].attack + '</dd>' +
					'<dt>Defense</dt><dd>' + city_builder.SOLDIER_TYPES[item].defense + '</dd>' +
					'</dl>' +
					'</div>' +
					'<img data-handle="' + item + '" title="' + city_builder.l('Recruit') + ' ' + item + '" class="tips recruit-soldier" src="' + city_builder.ASSETS_URL + 'images/armies/' + item.toLowerCase() + '.png" />' +
					'</fieldset>';
		}
		_t += '</div>';
		$('#tab-army').empty().append(_t);
		var el = '#panel-' + this.id;
		var _tt = '<fieldset>' +
				'<legend>' + city_builder.l('Current Army') + '</legend>' +
				city_builder.ui.army_list(city.get_army_total(), true) +
				'</fieldset>';
		$(el + ' .army-list').empty().append(_tt);
		return this;
	};

	/**
	 * Internal function for refreshing the Navy tab.
	 * 
	 * @private
	 * @returns {city_builder.panelAdvisor}
	 */
	this._refresh_navy = function () {
		var city = this.core.get_city();
		var resources = city.get_resources();
		var _t = '';
		var can_build_ships = this.core.get_city().is_building_built('shipyard');
		if (can_build_ships !== true) {
			_t += '<p>' + city_builder.l('You will need to construct a Shipyard before being able to construct ships in your city.') + '</p>';
		}
		_t += '<div class="navy-list">' +
				'</div>' +
				'<div class="navy-recruiter">';
		for (var item in city_builder.SHIP_TYPES) {
			_t += '<fieldset>' +
					'<legend>' + item + '</legend>' +
					'<div class="cost">' +
					'<dl class="nomg">';
			for (var res in city_builder.SHIP_TYPES[item].cost) {
				_t += '<dt>' + city_builder.utils.nice_numbers(city_builder.SHIP_TYPES[item].cost[res]) + '</dt><dd><img class="tips" title="' + resources[res].name + '" src="' + city_builder.ASSETS_URL + 'images/resources/' + res + '_small.png" /></dd>';
			}
			_t += '</dl>' +
					'</div>' +
					'<div class="info">' +
					'<dl class="nomg">' +
					'<dt>' + city_builder.l('Attack') + '</dt><dd>' + city_builder.SHIP_TYPES[item].attack + '</dd>' +
					'<dt>' + city_builder.l('Defense') + '</dt><dd>' + city_builder.SHIP_TYPES[item].defense + '</dd>' +
					'</dl>' +
					'</div>' +
					'<img data-handle="' + item + '" title="' + city_builder.l('Recruit') + ' ' + item + '" class="tips recruit-ship" src="' + city_builder.ASSETS_URL + 'images/armies/' + item.toLowerCase().replace(/ /g,"_") + '.png" />' +
					'</fieldset>';
		}
		_t += '</div>';
		$('#tab-navy').empty().append(_t);
		var el = '#panel-' + this.id;
		var _tt = '<fieldset>' +
				'<legend>' + city_builder.l('Current Navy') + '</legend>' +
				city_builder.ui.navy_list(city.get_navy_total(), true) +
				'</fieldset>';
		$(el + ' .navy-list').empty().append(_tt);
		return this;
	};

	// Fire up the constructor
	return this.__constructor(params);
};

/**
 * Main Game army panel object.
 * 
 * @param {type} params
 * @class {city_builder.panel_army}
 * @returns {city_builder.panel_army}
 */
city_builder.panel_army = function (params) {

	/**
	 * Reference to the core object.
	 * 
	 * @type {city_builder.game}
	 */
	this.core = null;

	/**
	 * DOM id of this panel.
	 * 
	 * @type {String}
	 * @constant
	 */
	this.id = 'army';

	/**
	 * Object destructor.
	 * 
	 * @private
	 * @returns {Boolean}
	 */
	this.__destructor = function () {
		this.core.console_log('destroying panel with id `' + this.id + '`');
		var el = '#panel-' + this.id;
		$(el).remove();
		this.core.close_panel(this.id);
		$('.tipsy').remove();
		return false;
	};

	/**
	 * Method for destroying the window/panel.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.destroy = function () {
		return this.__destructor();
	};

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {city_builder.panel}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		var self = this;
		this.core = params.core;
		var el = '#panel-' + this.id;
		if (city_builder.ui.panel_exists(el)) {
			this.destroy();
		}
		var army = params.data;
		this.core.console_log('creating panel with id `' + this.id + '`');
		$('.ui').append(city_builder.ui.generic_panel_template
			.replace(/{id}/g, this.id)
			.replace(/{title}/g, army.name));
		$(el + ' .contents').append(city_builder.ui.tabs(['Info', 'Soldiers', 'Ships']));
		$(el + ' #tab-info').append('<img class="avatar" src="' + city_builder.ASSETS_URL + 'images/armies/' + army.icon + '.png" />' +
				'<p>' + army.description + '</p>');
		$(el + ' #tab-soldiers').append(city_builder.ui.army_list(army));
		$(el + ' #tab-ships').append(city_builder.ui.navy_list(army));
		$(el).on('click', '.close', function () {
			self.destroy();
			return false;
		}).draggable({
			handle: 'header',
			containment: 'window',
			snap: '.panel'
		});
		$(el + ' .tabs').tabs();
		$(el + ' .tips').tipsy({
			gravity: 's'
		});
		$(el).css({
			'left': ($(window).width() / 2) - ($(el).width() / 2),
			'top': ($(window).height() / 2) - ($(el).height() / 2)
		});
		return this;
	};

	/**
	 * Callback method called when a function from the core needs to refresh
	 * information on this panel.
	 *
	 * @public
	 * @returns {city_builder.panel_army}
	 */
	this.refresh = function() {
		return this;
	};

	// Fire up the constructor
	return this.__constructor(params);
};

/**
 * Main Game trades panel object.
 * 
 * @param {type} params
 * @class {city_builder.panel_trades}
 * @returns {city_builder.panel_trades}
 */
city_builder.panel_trades = function (params) {

	/**
	 * Reference to the core object.
	 * 
	 * @type {city_builder.game}
	 */
	this.core = null;

	/**
	 * DOM id of this panel.
	 * 
	 * @type {String}
	 * @constant
	 */
	this.id = 'trades';

	/**
	 * Localized title of the panel.
	 * 
	 * @type {String}
	 */
	this.title = city_builder.l('World Market Trades');

	/**
	 * Object destructor.
	 * 
	 * @private
	 * @returns {Boolean}
	 */
	this.__destructor = function () {
		this.core.console_log('destroying panel with id `' + this.id + '`');
		var el = '#panel-' + this.id;
		$(el).remove();
		this.core.close_panel(this.id);
		$('.tipsy').remove();
		return false;
	};

	/**
	 * Method for destroying the window/panel.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.destroy = function () {
		return this.__destructor();
	};

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {city_builder.panel}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		this.core = params.core;
		var el = '#panel-' + this.id;
		var self = this;
		if (city_builder.ui.panel_exists(el)) {
			this.destroy();
		}
		this.core.console_log('creating panel with id `' + this.id + '`');
		var city = this.core.get_city();
		var _t = '';
		$('.ui').append(city_builder.ui.generic_panel_template
			.replace(/{id}/g, this.id)
			.replace(/{title}/g, this.title));
		_t += city_builder.ui.tabs([city_builder.l('Imports'), city_builder.l('Exports'), city_builder.l('Mercenaries'), city_builder.l('BlackMarket')]);
		$(el + ' .contents').append(_t);
		$(el + ' #tab-imports').append('<p>' + city_builder.l('Below is a list of goods that the other cities in the world are looking to buy. The goods replenish yearly, so plan accordingly.') + '</p><div class="contents"></div>');
		$(el + ' #tab-exports').append('<p>' + city_builder.l('Below is a list of goods that the other cities in the world are looking to sell. The goods replenish yearly, so plan accordingly.') + '</p><div class="contents"></div>');
		$(el + ' #tab-mercenaries').append('<p>' + city_builder.l('Below is a list of mercenary armies that are looking for hire. Mercenaries are available only for raiding and conquest missions, they do not join your city so they will not participate in defense.') + '</p><div class="contents"></div>');
		$(el + ' #tab-blackmarket').append('<p>' + city_builder.l('The Black Market is a way to dump your excess materials when you`re in need of emptying your warehouses, but expect a steep price drop (you get ') + (100 - city_builder.BLACK_MARKET_DISCOUNT) + city_builder.l('% of the actual price). The goods will be taken immediately from your warehouses but you will receive the coins next month. Also, you get no prestige from Black Market trades.') + '</p><div class="contents"></div>');
		this.refresh();
		$(el).on('click', '.buy:not(.disabled)', function () {
			var handle = $(this).data('city');
			var resource = $(this).data('resource');
			if (city.buy_from_city(handle, resource) !== false) {
				self._refresh_exports();
			}
			return false;
		}).on('click', '.sell:not(.disabled)', function () {
			var handle = $(this).data('city');
			var resource = $(this).data('resource');
			if (city.sell_to_city(handle, resource) !== false) {
				self._refresh_imports();
			}
			return false;
		}).on('click', '.bmarket', function () {
			var resource = $('.bm-materials').val();
			var amount = $('.bm-quantity').val();
			if (resource !== '0') {
				city.list_black_market(resource, amount);
				self._refresh_black_market();
				$('.bm-quantity').val('');
			}
			return false;
		}).on('click', '.recruit:not(.disabled)', function () {
			var handle = $(this).data('handle');
			if (city.recruit_mercenary_army(handle) !== false) {
				self._refresh_mercenaries();
			}
			return false;
		}).on('click', '.view-army:not(.disabled)', function () {
			var army = $(this).data('id');
			var army_data = city_builder.MERCENARIES[army];
			self.core.open_panel(new city_builder.panel_army({
				core: self.core,
				data: army_data
			}));
			return false;
		}).on('click', '.close', function () {
			self.destroy();
			return false;
		}).draggable({
			handle: 'header',
			containment: 'window',
			snap: '.panel'
		});
		$(el + ' .tabs').tabs();
		$(el + ' .tips').tipsy({
			gravity: 's'
		});
		$(el).css({
			'left': ($(window).width() / 2) - ($(el).width() / 2),
			'top': ($(window).height() / 2) - ($(el).height() / 2)
		});
		return this;
	};

	/**
	 * Callback method called when a function from the core needs to refresh
	 * information on this panel.
	 *
	 * @public
	 * @returns {city_builder.panel_building}
	 */
	this.refresh = function() {
		this._refresh_imports();
		this._refresh_exports();
		this._refresh_mercenaries();
		this._build_black_market();
		return this;
	};

	/**
	 * Internal function for building the Black Market panel.
	 * 
	 * @returns {city_builder.panelTrades}
	 * @private
	 */
	this._build_black_market = function () {
		var cities = this.core.get_cities();
		var out = '<table class="normal">';
		out += '<thead>' +
				'<tr>' +
				'<td><select class="bm-materials"></select></td>' +
				'<td><input type="text" placeholder="' + city_builder.l('amount') + '" class="bm-quantity" /></td>' +
				'<td><a title="' + city_builder.l('List goods on Black Market') + '" class="tips bmarket" href="#">' + city_builder.l('list') + '</a></td>' +
				'</tr>' +
				'</thead>';
		out += '<tbody>' +
				'</tbody>' +
				'</table>';
		$('#tab-blackmarket > .contents').empty().append(out);
		this._refresh_black_market_materials();
		this._refresh_black_market();
		return this;
	};

	/**
	 * Internal function for refreshing the Black Market panel.
	 * 
	 * @returns {city_builder.panelTrades}
	 * @private
	 */
	this._refresh_black_market = function () {
		var out = '';
		var bm = this.core.get_black_market();
		for (var item in bm) {
			out += '<tr>' +
					'<td>' + city_builder.l('Amount') + ': ' + bm[item].amount + city_builder.ui.resource_small_img(item) + '</td>' +
					'<td>' + city_builder.l('Total price') + ': ' + bm[item].price + city_builder.ui.resource_small_img('coins') + '</td>' +
					'<td>&nbsp;</td>' +
					'</tr>';
		}
		$('#tab-blackmarket > .contents > table > tbody').empty().append(out);
		return this;
	};

	/**
	 * Internal function for refreshing the Black Market resources dropbox.
	 * 
	 * @returns {city_builder.panelTrades}
	 * @private
	 */
	this._refresh_black_market_materials = function () {
		var out = '<option value="0">-- ' + city_builder.l('select') + ' --</option>';
		var city = this.core.get_city();
		var resources = city.get_resources();
		for (var item in resources) {
			if (item !== 'fame' && item !== 'coins' && item !== 'prestige' && item !== 'espionage') {
				out += '<option value="' + item + '"> ' + city_builder.utils.get_resource_name(item) + '</option>';
			}
		}
		$('.bm-materials').empty().append(out);
		return this;
	};

	/**
	 * Internal function for refreshing the Imports panel.
	 * 
	 * @returns {city_builder.panelTrades}
	 * @private
	 */
	this._refresh_imports = function () {
		var cities = this.core.get_cities();
		var out = '<table class="normal">' +
					'<thead>' +
					'<tr>' +
						'<td>City</td>' +
						'<td class="center">Goods</td>' +
						'<td class="center">Amount</td>' +
						'<td class="center">Price</td>' +
						'<td class="center">Discount</td>' +
						'<td class="center">City Price</td>' +
						'<td class="center">Total price</td>' +
						'<td></td>' +
					'</tr>' +
					'</thead>';
		for (var z = 0; z < cities.length; z++) {
			var city = cities[z];
			var trades = cities[z].get_trades();
			var resources = city.get_resources();
			if (trades !== null) {
				var imports = trades.imports;
				for (var item in imports) {
					var discount = Math.ceil((city_builder.RESOURCES[item].price * city_builder.TRADES_DISCOUNT) / 100);
					var discount_price = Math.ceil(city_builder.RESOURCES[item].price - discount);
					out += '<tr>' +
							'<td>' + cities[z].get_name() + '</td>' +
							'<td class="center">' + city_builder.ui.resource_small_img(item) + '</td>' +
							'<td class="center">' + imports[item] + '</td>' +
							'<td class="center">' + city_builder.RESOURCES[item].price + city_builder.ui.resource_small_img('coins') + '</td>' +
							'<td class="center">' + discount + city_builder.ui.resource_small_img('coins') + '</td>' +
							'<td class="center">' + discount_price + city_builder.ui.resource_small_img('coins') + '</td>' +
							'<td class="center">' + Math.ceil(discount_price * imports[item]) + city_builder.ui.resource_small_img('coins') + '</td>' +
							'<td class="center"><a title="' + city_builder.l('Sell those goods') + '" data-resource="' + item + '" data-city="' + cities[z].get_name() + '" class="tips sell' + (imports[item] === 0 ? ' disabled' : '') + '" href="#">' + city_builder.l('sell') + '</a></td>' +
							'</tr>';
				}
			}
		}
		out += '<tfoot>' +
					'<tr>' +
						'<td>City</td>' +
						'<td class="center">Goods</td>' +
						'<td class="center">Amount</td>' +
						'<td class="center">Price</td>' +
						'<td class="center">Discount</td>' +
						'<td class="center">City Price</td>' +
						'<td class="center">Total price</td>' +
						'<td></td>' +
					'</tr>' +
				'</tfoot>' +
			'</table>';
		$('#tab-imports > .contents').empty().append(out);
		return this;
	};

	/**
	 * Internal function for refreshing the Mercenaries panel.
	 * 
	 * @returns {city_builder.panelTrades}
	 * @private
	 */
	this._refresh_mercenaries = function () {
		var out = '<table class="mercenaries">';
		for (var i = 0; i < city_builder.MERCENARIES.length; i++) {
			out += '<tr>' +
					'<td class="icon">' +
						'<img src="' + city_builder.ASSETS_URL + 'images/armies/' + city_builder.MERCENARIES[i].icon + '.png" />' +
					'</td>' +
					'<td>' +
						'<p class="title">' + city_builder.MERCENARIES[i].name + '</p>' +
						'<p class="description">' + city_builder.MERCENARIES[i].description + '</p>' +
					'</td>' +
					'<td>' + 
						city_builder.utils.nice_numbers(city_builder.MERCENARIES[i].cost) + city_builder.ui.resource_small_img('coins') + 
					'</td>' +
					'<td class="medium">' +
						'<a title="' + city_builder.l('View info on this mercenary army') + '" data-id="' + i + '" class="tips view-army" href="#">view</a> ' +
						city_builder.ui.panel_btn('recruit', city_builder.l('Recruit this mercenary army'), city_builder.MERCENARIES[i].handle, 'recruit', this.core.get_city().is_mercenary_recruited(city_builder.MERCENARIES[i].handle)) +
					'</td>' +
				'</tr>';
		}
		out += '</table>';
		$('#tab-mercenaries > .contents').empty().append(out);
		return this;
	};

	/**
	 * Internal function for refreshing the Exports panel.
	 * 
	 * @returns {city_builder.panelTrades}
	 * @private
	 */
	this._refresh_exports = function () {
		var cities = this.core.get_cities();
		var out = '<table class="normal">' +
					'<thead>' +
					'<tr>' +
						'<td>City</td>' +
						'<td class="center">Goods</td>' +
						'<td class="center">Amount</td>' +
						'<td class="center">Price</td>' +
						'<td class="center">Tax</td>' +
						'<td class="center">City Price</td>' +
						'<td class="center">Total price</td>' +
						'<td></td>' +
					'</tr>' +
					'</thead>';
		for (var z = 0; z < cities.length; z++) {
			var city = cities[z];
			var trades = cities[z].get_trades();
			var resources = city.get_resources();
			if (trades !== null) {
				var exports = trades.exports;
				for (var item in exports) {
					var discount = Math.ceil((city_builder.RESOURCES[item].price * city_builder.TRADES_ADDITION) / 100);
					var discount_price = Math.ceil(city_builder.RESOURCES[item].price + discount);
					out += '<tr>' +
							'<td>' + cities[z].get_name() + '</td>' +
							'<td class="center">' + city_builder.ui.resource_small_img(item) + '</td>' +
							'<td class="center">' + exports[item] + '</td>' +
							'<td class="center">' + city_builder.RESOURCES[item].price + city_builder.ui.resource_small_img('coins') + '</td>' +
							'<td class="center">' + discount + city_builder.ui.resource_small_img('coins') + '</td>' +
							'<td class="center">' + discount_price + city_builder.ui.resource_small_img('coins') + '</td>' +
							'<td class="center">' + Math.ceil(discount_price * exports[item]) + city_builder.ui.resource_small_img('coins') + '</td>' +
							'<td class="center"><a title="' + city_builder.l('Buy those goods') + '" data-resource="' + item + '" data-city="' + cities[z].get_name() + '" class="tips buy' + (exports[item] === 0 ? ' disabled' : '') + '" href="#">' + city_builder.l('buy') + '</a></td>' +
							'</tr>';
				}
			}
		}
		out += '<tfoot>' +
					'<tr>' +
						'<td>City</td>' +
						'<td class="center">Goods</td>' +
						'<td class="center">Amount</td>' +
						'<td class="center">Price</td>' +
						'<td class="center">Tax</td>' +
						'<td class="center">City Price</td>' +
						'<td class="center">Total price</td>' +
						'<td></td>' +
					'</tr>' +
				'</tfoot>' +
			'</table>';
		$('#tab-exports > .contents').empty().append(out);
		return this;
	};

	// Fire up the constructor
	return this.__constructor(params);
};

/**
 * Main Game settings panel object.
 * 
 * @param {type} params
 * @class {city_builder.panel_settings}
 * @returns {city_builder.panel_settings}
 */
city_builder.panel_settings = function (params) {

	/**
	 * Reference to the core object.
	 * 
	 * @type {city_builder.game}
	 */
	this.core = null;

	/**
	 * DOM id of this panel.
	 * 
	 * @type {String}
	 * @constant
	 */
	this.id = null;

	/**
	 * Object destructor.
	 * 
	 * @private
	 * @returns {Boolean}
	 */
	this.__destructor = function () {
		this.core.console_log('destroying panel with id `' + this.id + '`');
		var el = '#panel-' + this.id;
		$(el).remove();
		this.core.close_panel(this.id);
		$('.tipsy').remove();
		return false;
	};

	/**
	 * Method for destroying the window/panel.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.destroy = function () {
		return this.__destructor();
	};

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {city_builder.panel}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		$('.panel.pw').remove();
		this.core = params.core;
		this.id = params.id;
		var self = this;
		var el = '#panel-' + this.id;
		if (city_builder.ui.panel_exists(el)) {
			this.destroy();
		}
		this.core.console_log('creating panel with id `' + this.id + '`');
		$('.ui').append(city_builder.ui.generic_panel_template
			.replace(/{id}/g, this.id)
			.replace(/{title}/g, params.header));
		$(el + ' .contents').append(city_builder.ui.tabs([city_builder.l('Sounds'), city_builder.l('UI')]));
		$(el + ' #tab-sounds').append('<div>' +
			'<a href="#" class="music-control ui-control ' + ((this.core.get_settings('music') === true) ? 'on' : 'off') + '">toggle music</a>' +
			'<input class="music-volume" type="range" min="0" max="1" step="0.1" ' + ((this.core.get_settings('music') !== true) ? 'disabled' : '') + ' />' +
			'</div>');
		$(el + ' #tab-ui').append('<div>' +
			'<a href="#" class="console-control ui-control ' + ((this.core.get_settings('console') === true) ? 'on' : 'off') + '">toggle console</a>' +
			'</div>');
		$(el).on('click', '.music-control', function () {
			if ($(this).hasClass('on')) {
				$(this).removeClass('on').addClass('off');
				$('.music-volume').attr('disabled', true);
				self.core.set_settings_music(true);
			} else {
				$(this).removeClass('off').addClass('on');
				$('.music-volume').attr('disabled', false);
				self.core.set_settings_music(false);
			}
			return false;
		}).on('click', '.console-control', function () {
			if ($(this).hasClass('on')) {
				$(this).removeClass('on').addClass('off');
				self.core.set_settings_console(false);
			} else {
				$(this).removeClass('off').addClass('on');
				self.core.set_settings_console(true);
			}
			return false;
		}).on('change', '.music-volume', function () {
			var value = $(this).val();
			self.core.music.volume = value;
			return false;
		}).on('click', '.close', function () {
			self.destroy();
			return false;
		}).draggable({
			handle: 'header',
			containment: 'window',
			snap: '.panel'
		});
		$(el + ' .tabs').tabs();
		$(el + ' .tips').tipsy({
			gravity: 's'
		});
		$(el).css({
			'left': ($(window).width() / 2) - ($(el).width() / 2),
			'top': ($(window).height() / 2) - ($(el).height() / 2)
		});
		return this;
	};

	/**
	 * Callback method called when a function from the core needs to refresh
	 * information on this panel.
	 *
	 * @public
	 * @returns {city_builder.panel_building}
	 */
	this.refresh = function() {
		return this;
	};
	
	// Fire up the constructor
	return this.__constructor(params);
};

/**
 * Main Game soldier object.
 * 
 * @param {type} params
 * @class {city_builder.soldier}
 * @returns {city_builder.soldier}
 */
city_builder.soldier = function (params) {

	/**
	 * Pointer to the city this sodier is located in.
	 * 
	 * @type {city_builder.city}
	 * @private
	 */
	this.city = null;

	/**
	 * Attack rating of this soldier.
	 * 
	 * @type {Number}
	 * @private
	 */
	this.attack = 0;

	/**
	 * Defense rating of this soldier.
	 * 
	 * @type {Number}
	 * @private
	 */
	this.defense = 0;

	/**
	 * Requirements of this soldier.
	 * 
	 * @type {Object}
	 * @private
	 */
	this.cost = null;

	/**
	 * Get the name of this soldier.
	 * 
	 * @type {String}
	 * @private
	 */
	this.name = null;

	/**
	 * Object destructor
	 * 
	 * @private
	 * @returns {Boolean}
	 */
	this.__destructor = function () {
		return false;
	};

	/**
	 * Method for destroying(disbanding) the soldier.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.destroy = function () {
		return this.__destructor();
	};

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {city_builder.soldier}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		this.city = params.city;
		this.name = params.name;
		this.attack = params.data.attack;
		this.defense = params.data.defense;
		this.cost = params.data.cost;
		return this;
	};

	/**
	 * Get the attack rating of this soldier.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_attack = function () {
		return this.attack;
	};

	/**
	 * Get the defense rating of this soldier.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_defense = function () {
		return this.defense;
	};

	/**
	 * Get the recruitment costs of this soldier.
	 * 
	 * @returns {Object}
	 * @public
	 */
	this.get_cost = function () {
		return this.cost;
	};

	/**
	 * Get the city this soldier is located into.
	 * 
	 * @public
	 * @returns {city_builder.city}
	 */
	this.get_city = function () {
		return this.city;
	};

	/**
	 * Get the name of this soldier.
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_name = function () {
		return this.name;
	};

	/**
	 * Get a pointer to the game core.
	 * 
	 * @public
	 * @returns {city_builder.game}
	 */
	this.get_core = function () {
		return this.get_city().get_core();
	};

	// Fire up the constructor
	return this.__constructor(params);
};

/**
 * Main Game ship object.
 * 
 * @param {type} params
 * @class {city_builder.ship}
 * @returns {city_builder.ship}
 */
city_builder.ship = function (params) {

	/**
	 * Pointer to the city this ship is located in.
	 * 
	 * @type {city_builder.city}
	 * @private
	 */
	this.city = null;

	/**
	 * Attack rating of this ship.
	 * 
	 * @type {Number}
	 * @private
	 */
	this.attack = 0;

	/**
	 * Defense rating of this ship.
	 * 
	 * @type {Number}
	 * @private
	 */
	this.defense = 0;

	/**
	 * Requirements of this ship.
	 * 
	 * @type {Object}
	 * @private
	 */
	this.cost = null;

	/**
	 * Get the name of this ship.
	 * 
	 * @type {String}
	 * @private
	 */
	this.name = null;

	/**
	 * Object destructor
	 * 
	 * @private
	 * @returns {Boolean}
	 */
	this.__destructor = function () {
		return false;
	};

	/**
	 * Method for destroying(disbanding) the ship.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.destroy = function () {
		return this.__destructor();
	};

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {city_builder.ship}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		this.city = params.city;
		this.name = params.name;
		this.attack = params.data.attack;
		this.defense = params.data.defense;
		this.cost = params.data.cost;
		return this;
	};

	/**
	 * Get the attack rating of this ship.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_attack = function () {
		return this.attack;
	};

	/**
	 * Get the defense rating of this ship.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_defense = function () {
		return this.defense;
	};

	/**
	 * Get the recruitment costs of this ship.
	 * 
	 * @returns {Object}
	 * @public
	 */
	this.get_cost = function () {
		return this.cost;
	};

	/**
	 * Get the city this ship is located into.
	 * 
	 * @public
	 * @returns {city_builder.city}
	 */
	this.get_city = function () {
		return this.city;
	};

	/**
	 * Get the name of this ship.
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_name = function () {
		return this.name;
	};

	/**
	 * Get a pointer to the game core.
	 * 
	 * @public
	 * @returns {city_builder.game}
	 */
	this.get_core = function () {
		return this.get_city().get_core();
	};

	// Fire up the constructor
	return this.__constructor(params);
};

/**
 * Main Game army object.
 * 
 * @param {type} params
 * @class {city_builder.army}
 * @returns {city_builder.army}
 */
city_builder.army = function (params) {

	/**
	 * Pointer to the city this army is located in.
	 * 
	 * @type {city_builder.city}
	 * @private
	 */
	this.city = null;

	/**
	 * Requirements of this ship.
	 * 
	 * @type {Object}
	 * @private
	 */
	this.cost = null;

	/**
	 * Get the name of this ship.
	 * 
	 * @type {String}
	 * @private
	 */
	this.name = null;

	/**
	 * List of soldiers in this army.
	 *
	 * @type {Array}
	 * @private
	 */
	this.soldiers = [];

	/**
	 * List of ships in this army.
	 *
	 * @type {Array}
	 * @private
	 */
	this.ships = [];

	/**
	 * Object destructor
	 * 
	 * @private
	 * @returns {Boolean}
	 */
	this.__destructor = function () {
		return false;
	};

	/**
	 * Method for destroying(disbanding) the army.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.destroy = function () {
		return this.__destructor();
	};

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {city_builder.army}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		this.city = params.city;
		this.name = params.name;
		this.cost = params.data.cost;
		return this;
	};

	/**
	 * Get the city this army is located into.
	 * 
	 * @public
	 * @returns {city_builder.city}
	 */
	this.get_city = function () {
		return this.city;
	};

	/**
	 * Get the name of this army.
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_name = function () {
		return this.name;
	};

	/**
	 * Get a pointer to the game core.
	 * 
	 * @public
	 * @returns {city_builder.game}
	 */
	this.get_core = function () {
		return this.get_city().get_core();
	};

	// Fire up the constructor
	return this.__constructor(params);
};

/**
 * Main Game core object.
 * 
 * @class {city_builder.game}
 * @returns {city_builder.game}
 */
city_builder.game = function () {

	/**
	 * List of all the cities in the game.
	 * 
	 * @type {Array}
	 * @private
	 */
	this.cities = [];

	/**
	 * Pointer to the audio subsystem component.
	 * 
	 * @private
	 * @type {Object}
	 */
	this.music = null;

	/**
	 * Time day.
	 * 
	 * @type {Number}
	 * @private
	 */
	this.day = 1;

	/**
	 * Time year.
	 * 
	 * @type {Number}
	 * @private
	 */
	this.year = 1;

	/**
	 * Time month.
	 * 
	 * @type {Number}
	 * @private
	 */
	this.month = 1;

	/**
	 * Time day of month 1-30.
	 * 
	 * @type {Number}
	 * @private
	 */
	this.day_of_month = 1;

	/**
	 * Black Market data.
	 * 
	 * @public
	 * @type {Object}
	 */
	this.black_market = {};

	/**
	 * Pointer to an instance of the game API object.
	 * 
	 * @type {city_builder.api}
	 * @public
	 */
	this.api = null;

	/**
	 * Pointer to an instance of the game Jailer object.
	 * 
	 * @type {city_builder.jailer}
	 * @public
	 */
	this.jailer = null;

	/**
	 * Game settings
	 * 
	 * @type {Object}
	 * @private
	 */
	this.settings = {
		console: false,
		music: false
	};

	/**
	 * Pointer to an instance of the game history.
	 *
	 * @type {city_builder.history}
	 * @public
	 */
	this.history = null;

	/**
	 * Game difficulty.
	 *
	 * @type {Number}
	 * @private
	 */
	this.difficulty = city_builder.DIFFICULTY_LEVEL_EASY;

	/**
	 * Array containing the list of all open panels.
	 *
	 * @type {Array}
	 * @private
	 */
	this.panels = [];

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {city_builder.game}
	 */
	this.__constructor = function () {
		var clicked = false;
		var clickY, clickX;
		var self = this;
		this.history = new city_builder.history({
			core: this
		});
		this.jailer = new city_builder.jailer({
			core: this
		});
		this.setup_audio();
		$('.game').on({
			mousemove: function (e) {
				clicked && update_scroll_pos(e);
			},
			mousedown: function (e) {
				clicked = true;
				clickY = e.pageY;
				clickX = e.pageX;
				$('html').css('cursor', '-moz-grab');
			},
			mouseup: function () {
				clicked = false;
				$('html').css('cursor', 'auto');
			}
		});
		var update_scroll_pos = function (e) {
			$(window).scrollTop($(window).scrollTop() + (clickY - e.pageY));
			$(window).scrollLeft($(window).scrollLeft() + (clickX - e.pageX));
		};
		this._setup_start_ui();
		this._setup_toolbar();
		if (localStorage.getItem('city_builder.data') !== null) {
			this.start_game();
		}
		$('.toolbar').on('click', '.do-options', function () {
			self.open_panel(new city_builder.panel_settings({
				core: self,
				id: 'settings',
				header: 'Game Settings'
			}));
			return false;
		}).on('click', '.do-worldmap', function () {
			self.open_panel(city_builder.panel_world({
				core: self
			}));
			return false;
		}).on('click', '.do-restart', function () {
			if (confirm('Are you sure you want to restart the game? You wll lose all progress!') === true) {
				localStorage.removeItem(city_builder.STORAGE_KEY + '.data');
				document.location.reload();
			}
			return false;
		}).on('click', '.do-help', function () {
			self.open_panel(new city_builder.panel_help({
				core: self
			}));
			return false;
		}).on('click', '.do-trades', function () {
			self.open_panel(new city_builder.panel_trades({
				core: self
			}));
			return false;
		}).on('click', '.do-rankings', function () {
			self.open_panel(new city_builder.panel_rankings({
				core: self
			}));
			return false;
		}).on('click', '.do-advisor', function () {
			self.open_panel(new city_builder.panel_advisor({
				core: self
			}));
			return false;
		}).on('click', '.do-storage', function () {
			self.open_panel(new city_builder.panel_storage({
				core: self
			}));
			return false;
		}).on('click', '.do-build', function () {
			self.open_panel(new city_builder.panel_buildings({
				core: self
			}));
			return false;
		});
		$('.console').on('click', '.down', function () {
			$('.console .contents').scrollTo('+=97px', 500);
		}).on('click', '.up', function () {
			$('.console .contents').scrollTo('-=97px', 500);
		});
		this.api = new city_builder.api({
			core: this
		});
		return this;
	};

	/**
	 * Open the UI panel.
	 *
	 * @param {city_builder.panel} panel
	 * @public
	 * @returns {city_builder.game}
	 */
	this.open_panel = function(panel) {
		this.panels.push(panel);
		return this;
	};

	/**
	 * Close the UI panel specified by its id.
	 *
	 * @public
	 * @param {String} id
	 * @returns {city_builder.game}
	 */
	this.close_panel = function(id) {
		var panels = this.get_panels();
		for (var i = 0; i < panels.length; i++) {
			if (panels[i].id === id) {
				panels.splice(i, 1);
			}
		}
		return this;
	};

	/**
	 * Return a pointer to the API object.
	 * 
	 * @returns {city_builder.api}
	 * @public
	 */
	this.get_api = function() {
		return this.api;
	};
	
	/**
	 * Return a pointer to the Jailer object.
	 * 
	 * @public
	 * @returns {city_builder.jailer}
	 */
	this.get_jailer = function() {
		return this.jailer;
	};
	
	/**
	 * Add the specified resource amount and the total price to the
	 * Black Market goods list.
	 * 
	 * @public
	 * @param {String} resource
	 * @param {Number} amount
	 * @param {Number} price
	 * @returns {Object}
	 */
	this.add_black_market = function (resource, amount, price) {
		this.black_market[resource] = {
			resource: resource,
			amount: amount,
			price: price
		};
		return this.black_market;
	};

	/**
	 * Set game storage data.
	 * 
	 * @param {String} key
	 * @param {Mixed} value
	 * @public
	 * @returns {city_builder.game}
	 */
	this.set_storage_data = function (key, value) {
		localStorage.setItem(city_builder.STORAGE_KEY + '.' + key, value);
		return this;
	};

	/**
	 * Retrieve game storage data.
	 * 
	 * @param {String} key
	 * @public
	 * @returns {Mixed}
	 */
	this.get_storage_data = function (key) {
		return localStorage.getItem(city_builder.STORAGE_KEY + '.' + key);
	};

	/**
	 * Set game settings.
	 * 
	 * @param {String} key
	 * @param {Mixed} value
	 * @public
	 * @returns {city_builder.game}
	 */
	this.set_settings = function (key, value) {
		if (typeof value === 'undefined') {
			this.settings = key;
		} else {
			this.settings[key] = value;
		}
		return this;
	};

	/**
	 * Set music on/off.
	 * 
	 * @param {String} key
	 * @param {Mixed} value
	 * @public
	 * @returns {city_builder.game}
	 */
	this.set_settings_music = function(value) {
		if (value === true) {
			this.music.play();
		} else {
			this.music.pause();
		}
		this.set_settings('music', value);
		return this;
	};

	/**
	 * Set console display on/off
	 * 
	 * @param {String} key
	 * @param {Mixed} value
	 * @public
	 * @returns {city_builder.game}
	 */
	this.set_settings_console = function(value) {
		if (value === true) {
			$('aside.console').show();
		} else {
			$('aside.console').hide();
		}
		this.set_settings('console', value);
		return this;
	};

	/**
	 * Retrieve game settings.
	 * 
	 * @param {String} key
	 * @public
	 * @returns {city_builder.game.settings}
	 */
	this.get_settings = function (key) {
		if (typeof key === 'undefined') {
			return this.settings;
		} else {
			return this.settings[key];
		}
	};

	/**
	 * Reset the Black Market goods.
	 * 
	 * @public
	 * @returns {city_builder.game}
	 */
	this.reset_black_market = function () {
		var total = 0;
		for (var item in this.black_market) {
			this.get_city().inc_coins(this.black_market[item].price);
			total += this.black_market[item].price;
		}
		this.black_market = {};
		this.refresh_ui();
		$('#tab-blackmarket > .contents > table > tbody').empty();
		if (total > 0) {
			this.notify(this.get_city().get_name() + ' ' + city_builder.l('received') + ' ' + total + ' ' + city_builder.l('coins from the Black Market for selling goods.'), city_builder.l('Black Market'));
		}
		return this;
	};

	/**
	 * Return the Black Market goods list.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_black_market = function () {
		return this.black_market;
	};

	/**
	 * Set the Black Market goods list to the specified value.
	 * 
	 * @public
	 * @param {Object} value
	 * @returns {city_builder.game}
	 */
	this.set_black_market = function (value) {
		if (typeof value !== 'undefined') {
			this.black_market = value;
		} else {
			this.black_market = {};
		}
		return this;
	};

	/**
	 * Setup the start screen UI.
	 * 
	 * @private
	 * @returns {city_builder.game}
	 */
	this._setup_start_ui = function () {
		var self = this;
		var avatar = 1;
		for (var i = 1; i < city_builder.CLIMATE_TYPES.length; i++) {
			$('.start .climate').append('<option value="' + city_builder['CLIMATE_TYPE_' + city_builder.CLIMATE_TYPES[i].toUpperCase()] + '">' + city_builder.CLIMATE_TYPES[i].capitalize() + '</option>');
		}
		for (var i = 1; i < city_builder.NATION_TYPES.length; i++) {
			$('.start .nation').append('<option value="' + city_builder['NATION_TYPE_' + city_builder.NATION_TYPES[i].toUpperCase()] + '">' + city_builder.NATION_TYPES[i].capitalize() + '</option>');
		}
		for (var i = 1; i <= city_builder.AVATARS; i++) {
			$('.start .avatar-select').append('<img src="' + city_builder.ASSETS_URL + 'images/avatars/avatar' + i + '.png" />');
		}
		$('.start').on('click', '.do-start', function () {
			var name = $('.start .name').val();
			var cityname = $('.start .cityname').val();
			var nation = parseInt($('.start .nation').val());
			var climate = parseInt($('.start .climate').val());
			var difficulty = parseInt($('.start .difficulty').val());
			if (name === '') {
				self.error('Enter your ruler name, for example <strong>Ramses</strong>.', 'Error', true);
				return false;
			}
			if (cityname === '') {
				self.error('Enter your city name, for example <strong>Alexandria</strong>.', 'Error', true);
				return false;
			}
			self.start_game(name, cityname, nation, climate, avatar, difficulty);
			return false;
		}).on('click', '.down', function () {
			if (avatar < city_builder.AVATARS) {
				avatar = avatar + 1;
			}
			$('.start .avatar-select').scrollTo('+=64px', 500);
		}).on('click', '.up', function () {
			if (avatar > 1) {
				avatar = avatar - 1;
			}
			$('.start .avatar-select').scrollTo('-=64px', 500);
		});
		return this;
	};

	/**
	 * Start the game.
	 * 
	 * @returns {city_builder.game}
	 * @public
	 * @param {String} name
	 * @param {String} cityname
	 * @param {Number} nation
	 * @param {Number} climate
	 * @param {Number} avatar
	 * @param {Number} difficulty
	 */
	this.start_game = function (name, cityname, nation, climate, avatar, difficulty) {
		var self = this;
		var data = null;
		this.difficulty = parseInt(difficulty);
		if (localStorage.getItem('city_builder.data') !== null) {
			data = this._load_main_city();
		} else {
			this._setup_main_city(name, cityname, nation, climate, avatar);
		}
		this.setup_neighbours(data);
		this.save();
		$('section.start').remove();
		$('header .cityname').html(this.get_city().get_name());
		$('header .cityavatar').css({
			'background-image': 'url(' + city_builder.ASSETS_URL + 'images/avatars/avatar' + this.get_city().get_avatar() + '.png)'
		});
		this.refresh_ui();
		setInterval(function () {
			self._do_daily();
		}, 12000);
		$('.tips').tipsy({
			gravity: $.fn.tipsy.autoNS,
			html: true
		});
		return this;
	};

	/**
	 * Set the current game date.
	 * 
	 * @public
	 * @param {Object} data
	 * @returns {city_builder.game}
	 */
	this.set_date_time = function (data) {
		this.day = data.day;
		this.month = data.month;
		this.year = data.year;
		this.day_of_month = data.day_of_month;
		return this;
	};

	/**
	 * Setup the audio part of the game.
	 * 
	 * @public
	 * @returns {city_builder.game}
	 */
	this.setup_audio = function () {
		this.music = $('#music').get(0);
		this.music.volume = 0.2;
		if (city_builder.AUTOSTART_MUSIC === true) {
			this.music.play();
		}
		return this;
	};

	/**
	 * Get a pointer to the player's city.
	 * 
	 * @public
	 * @param {String} name
	 * @returns {city_builder.city}
	 */
	this.get_city = function (name) {
		if (typeof name !== 'undefined' && typeof name === 'string') {
			var cities = this.get_cities();
			for (var i = 0; i < cities.length; i++) {
				var city = cities[i];
				if (city.get_name() === name) {
					return city;
				}
			}
		} else {
			return this.cities[0];
		}
		return false;
	};

	/**
	 * Load the main city data from the browser localstorage.
	 * 
	 * @private
	 * @returns {Object}
	 */
	this._load_main_city = function () {
		var data = JSON.parse(window.atob(localStorage.getItem('city_builder.data')));
		this.set_difficulty(data.difficulty);
		var my_city = new city_builder.city({
			name: data.name,
			data: {
				nationality: data.nationality,
				ruler: data.ruler,
				climate: data.climate,
				personality: city_builder.PERSONALITY_TYPE_BALANCED,
				avatar: data.avatar,
				level: data.level
			},
			player: true,
			core: this
		});
		my_city.import_data(data);
		this.cities.push(my_city);
		this.get_city()._create_buildings(data.buildings);
		return data;
	};

	/**
	 * Setup the main city.
	 * 
	 * @private
	 * @param {String} name
	 * @param {String} cityname
	 * @param {Number} nation
	 * @param {Number} climate
	 * @param {Number} avatar
	 * @returns {city_builder.game}
	 */
	this._setup_main_city = function (name, cityname, nation, climate, avatar) {
		var my_city = new city_builder.city({
			name: cityname,
			data: {
				nationality: nation,
				ruler: name,
				climate: climate,
				personality: city_builder.PERSONALITY_TYPE_BALANCED,
				avatar: avatar
			},
			player: true,
			core: this
		});
		var difficulty = this.get_difficulty();
		my_city.setup_army(true, city_builder.ARMIES_START[difficulty - 1]);
		my_city.setup_navy(true, city_builder.ARMIES_START[difficulty - 1]);
		this.cities.push(my_city);
		this.get_city()._create_buildings(city_builder.BUILDINGS_START);
		return this;
	};

	/**
	 * Get building data from the main configuration array.
	 * 
	 * @public
	 * @param {String|Number} handle
	 * @returns {Object}
	 */
	this.get_building_config_data = function (handle) {
		if (typeof handle === 'string') {
			return city_builder.BUILDINGS[city_builder.BUILDINGS.findIndexM(handle)];
		} else if (typeof handle === 'number') {
			for (var i = 0; i < city_builder.BUILDINGS.length; i++) {
				if (city_builder.BUILDINGS[i].handle === handle) {
					return city_builder.BUILDINGS[i];
				}
			}
		} else {
			return false;
		}
	};

	/**
	 * Method that gets called each 'day'.
	 * 
	 * @private
	 * @returns {city_builder.game}
	 */
	this._do_daily = function () {
		this.day++;
		this.log('day ' + this.day_of_month + ' month ' + this.month + ' year ' + this.year);
		var buildings = this.get_city().get_buildings();
		for (var i = 0; i < buildings.length; i++) {
			if (typeof buildings[i] !== 'undefined') {
				buildings[i].process();
			}
		}
		var ev = city_builder.EVENTS[city_builder.utils.get_random(0, city_builder.EVENTS.length - 1)];
		ev.core = this;
		new city_builder.event(ev);
		this.calculate_storage();
		this.refresh_ui();
		this.day_of_month++;
		if (this.day_of_month > 30) {
			this._do_monthly();
		}
		if (this.day >= 360) {
			this._do_yearly();
			this.day = 1;
			this.month = 1;
		}
		this.save();
		this.refresh_panels();
		return this;
	};

	/**
	 * Force refresh of the UI panels open.
	 *
	 * @public
	 * @returns {city_builder.game}
	 */
	this.refresh_panels = function() {
		var panels = this.get_panels();
		for (var x = 0; x < panels.length; x++) {
			panels[x].refresh();
		}
		this.refresh_toolbar();
		return this;
	};

	/**
	 * Save the game data.
	 * 
	 * @public
	 * @returns {city_builder.game}
	 */
	this.save = function () {
		this.get_city().export_data(true);
		return this;
	};

	/**
	 * Open the help panel with the specified context and term.
	 *
	 * @public
	 * @param {String} ctxt
	 * @param {String} term
	 * @returns {city_builder_game} 
	 */
	this.help = function(ctxt, term) {
		this.open_panel(city_builder.panel_help({
			core: this,
			ctxt: ctxt,
			term: term
		}));
		return this;
	};

	/**
	 * Method that gets called each 'month'.
	 * 
	 * @private
	 * @returns {city_builder.game}
	 */
	this._do_monthly = function () {
		this.day_of_month = 1;
		this.month++;
		this.reset_black_market();
		return this;
	};

	/**
	 * Method that gets called each 'year'.
	 * 
	 * @private
	 * @returns {city_builder.game}
	 */
	this._do_yearly = function () {
		var cities = this.get_cities();
		for (var i = 1; i < cities.length; i++) {
			cities[i].reset_trades();
			this.get_city().lower_influence(cities[i].get_name(), city_builder.YEARLY_INFLUENCE_LOSS);
		}
		this.get_city().release_mercenaries();
		this.year++;
		return this;
	};

	/**
	 * Log data to the console.
	 * 
	 * @public
	 * @param {String} message
	 * @param {Boolean} error
	 * @returns {city_builder.game}
	 */
	this.log = function (message, error) {
		if (typeof message !== 'undefined') {
			$('.ui .console .contents').prepend('<div' + ((typeof error !== 'undefined' && error === true) ? ' class="error"' : '') + '>' + '<span>' + city_builder.utils.get_now() + '</span> - ' + message + '</div>');
		} else {
			$('.ui .console .contents').prepend('<div class="separator"></div>');
		}
		return this;
	};

	/**
	 * Log data to the browser console.
	 * 
	 * @param {String} message
	 * @param {Boolean} error
	 * @public
	 * @returns {city_builder.game}
	 */
	this.console_log = function (message, error) {
		if (city_builder.DEBUG === true) {
			console.log((typeof error === true ? 'APP error: ' : 'APP message: ') + message);
		}
		return this;
	};

	/**
	 * Return the game date in a more manageable form.
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_date = function () {
		return 'day ' + this.day_of_month + ' month ' + this.month + ' year ' + this.year;
	};

	/**
	 * Perform a normal notification in the game.
	 * 
	 * @public
	 * @param {String} message
	 * @param {String} title
	 * @param {Number} timeout
	 * @returns {city_builder.game}
	 */
	this.notify = function (message, title, timeout) {
		this._notify({
			title: (typeof title !== 'undefined') ? title : 'Message',
			content: message,
			timeout: typeof timeout !== 'undefined' ? timeout : 15000
		});
		this.log(message);
		return this;
	};

	/**
	 * Internal function for performing an UI notification.
	 * 
	 * @param {type} settings
	 * @returns {city_builder.game}
	 * @private
	 */
	this._notify = function (settings) {
		var container, notty, hide, image, right, left, inner;
		settings = $.extend({
			title: undefined,
			content: undefined,
			timeout: 15000,
			img: city_builder.ASSETS_URL + 'images/ui/icon_notification_1.png',
			showTime: true,
			error: false,
			other: false
		}, settings);
		container = $(".notifications");
		if (!container.length) {
			container = $("<div>", {
				'class': "notifications"
			}).appendTo(document.body);
		}
		notty = $("<div>");
		notty.addClass("notty");
		hide = $("<div>", {
			click: function () {
				$(this).parent().delay(300).queue(function () {
					$(this).clearQueue();
					$(this).remove();
				});
			},
			touchstart: function () {
				$(this).parent().delay(300).queue(function () {
					$(this).clearQueue();
					$(this).remove();
				});
			}
		});
		hide.addClass("hide");
		if (settings.error === true) {
			notty.addClass('error');
			settings.img = city_builder.ASSETS_URL + 'images/ui/icon_notification_2.png';
		}
		if (settings.other === true) {
			notty.addClass('other');
			settings.img = city_builder.ASSETS_URL + 'images/ui/icon_notification_1.png';
		}
		image = $("<div>", {
			style: "background: url('" + settings.img + "')"
		});
		image.addClass("img");
		left = $("<div class='left'>");
		right = $("<div class='right'>");
		var html_title = "<h2>" + settings.title + "</h2>";
		var html_content = settings.content;
		inner = $("<div>", {
			html: html_title + html_content
		});
		inner.addClass("inner");
		inner.appendTo(right);
		image.appendTo(left);
		left.appendTo(notty);
		right.appendTo(notty);
		hide.appendTo(notty);
		function time_since(time) {
			var time_formats = [[2, "One second", "1 second from now"], [60, "seconds", 1], [120, "One minute", "1 minute from now"], [3600, "minutes", 60], [7200, "One hour", "1 hour from now"], [86400, "hours", 3600], [172800, "One day", "tomorrow"], [604800, "days", 86400], [1209600, "One week", "next week"], [2419200, "weeks", 604800], [4838400, "One month", "next month"], [29030400, "months", 2419200], [58060800, "One year", "next year"], [2903040000, "years", 29030400], [5806080000, "One century", "next century"], [58060800000, "centuries", 2903040000]];
			var seconds = (new Date - time) / 1000;
			var list_choice = 1;
			if (seconds < 0) {
				seconds = Math.abs(seconds);
				list_choice = 1;
			}
			var i = 0, format;
			while (format = time_formats[i++]) {
				if (seconds < format[0]) {
					if (typeof format[2] === "string") {
						return format[list_choice];
					} else {
						return Math.floor(seconds / format[2]) + " " + format[1];
					}
				}
			}
			return time;
		}
		var timestamp = Number(new Date());
		var timeHTML = $("<div>", {
			html: "<strong>" + time_since(timestamp) + "</strong> ago"
		});
		timeHTML.addClass("time").attr("title", timestamp);
		timeHTML.appendTo(right);
		setInterval(function () {
			$(".time").each(function () {
				var timing = $(this).attr("title");
				$(this).html("<strong>" + time_since(timing) + "</strong> ago");
			});
		}, 4000);
		notty.hover(function () {
			hide.show();
		}, function () {
			hide.hide();
		});
		notty.prependTo(container);
		notty.show();
		if (settings.timeout) {
			setTimeout(function () {
				notty.delay(300).queue(function () {
					$(this).clearQueue();
					$(this).remove();
				});
			}, settings.timeout);
		}
		return this;
	};

	/**
	 * Perform an error notification in the game.
	 * 
	 * @public
	 * @param {String} message
	 * @param {String} title
	 * @param {Boolean} no_console
	 * @returns {city_builder.game}
	 */
	this.error = function (message, title, no_console) {
		this._notify({
			title: (typeof title !== 'undefined') ? title : 'Error',
			error: true,
			content: message
		});
		if (typeof no_console === 'undefined' || no_console === false) {
			this.log(message, true);
		}
		return this;
	};

	/**
	 * Calculate and return the total and free storage space in the main city.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.calculate_storage = function () {
		var storage = this.get_city().get_storage_space();
		if (storage.occupied >= storage.all) {
			this.error('You ran out of storage space and all goods produced will be lost. Upgrade your warehouse or marketplace.', 'No storage space');
		} else if ((storage.all - storage.occupied) < 100) {
			this.error('You will soon run out of storage space and all goods produced will be lost. Upgrade your warehouse or marketplace.', 'Storage nearly full');
		}
		return storage;
	};

	/**
	 * Refresh the resources toolbar.
	 *
	 * @public
	 * @returns {city_builder.game}
	 */
	this.refresh_toolbar = function() {
		var city = this.get_city();
		var resources = city.get_resources();
		for (var i = 0; i < city_builder.TOOLBAR_RESOURCES.length; i++) {
			var resource = city_builder.TOOLBAR_RESOURCES[i];
			var el = $('.top-panel .' + resource);
			if (typeof resources[resource] !== 'undefined') {
				el.attr('title', resources[resource] + ' ' + city_builder.utils.get_resource_name(resource));
			}
		}
		return this;
	};

	/**
	 * Refresh all the UI information after a property change.
	 * 
	 * @public
	 * @returns {city_builder.game}
	 */
	this.refresh_ui = function () {
		var city = this.get_city();
		var storage_space = city.get_storage_space();
		var needed = city_builder.LEVELS[city.get_level()];
		$('.citylevel').html(city.get_level());
		$('.cityprestige').html(city.get_prestige());
		this.refresh_toolbar();
		if (city.get_fame() >= needed) {
			city.level_up();
			needed = city_builder.LEVELS[city.get_level()];
		}
		$('header .cityfame > span').css({
			width: Math.floor((city.get_fame() * 100) / needed) + '%'
		});
		$('.top-panel > span').tipsy({
			gravity: 'n'
		});
		return this;
	};

	/**
	 * Get the list of all the cities in game.
	 * 
	 * @public
	 * @returns {Array}
	 */
	this.get_cities = function () {
		return this.cities;
	};

	/**
	 * Create all the other cities in the world.
	 * 
	 * @public
	 * @param {Object} data
	 * @returns {city_builder.game}
	 */
	this.setup_neighbours = function (data) {
		var new_city = null;
		for (var item in city_builder.CITIES) {
			new_city = new city_builder.city({
				name: item,
				data: city_builder.CITIES[item],
				player: false,
				core: this
			});
			var climate = new_city.get_climate();
			var climate_buildings = 'CITY_BUILDINGS_' + climate.name.toUpperCase();
			new_city._create_buildings(city_builder[climate_buildings], true);
			new_city.setup_army(true);
			new_city.setup_navy(true);
			if (data !== null) {
				this.get_city().influence[item] = data.influence[item];
				new_city.trades = data.trades[item];
			} else {
				this.get_city().influence[item] = 50;
			}
			this.cities.push(new_city);
		}
		return this;
	};

	/**
	 * Get the list of imports and exports from all the world cities (except main).
	 * 
	 * @private
	 * @returns {Object}
	 */
	this._get_neighbours_trades = function () {
		var data = {};
		var cities = this.get_cities();
		for (var i = 1; i < cities.length; i++) {
			data[cities[i].get_name()] = cities[i].get_trades();
		}
		return data;
	};

	/**
	 * Setup the top bar with the resources.
	 * 
	 * @private
	 * @returns {city_builder.game}
	 */
	this._setup_toolbar = function () {
		var _t = '';
		for (var i = 0; i < city_builder.TOOLBAR_RESOURCES.length; i++) {
			_t += '<span class="' + city_builder.TOOLBAR_RESOURCES[i] + '"></span>';
		}
		$('.top-panel').empty().append(_t);
		return this;
	};

	/**
	 * Get the version of the game.
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_version = function() {
		return city_builder.VERSION;
	};
	
	/**
	 * Get the panels open in the game.
	 * 
	 * @public
	 * @returns {Array}
	 */
	this.get_panels = function() {
		return this.panels;
	};

	/**
	 * Set the difficulty level of the game.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.set_difficulty = function(value) {
		this.difficulty = value;
		return this;
	};

	/**
	 * Get the difficulty level of the game.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_difficulty = function() {
		return this.difficulty;
	};

	// Fire up the constructor
	return this.__constructor();
};

$(document).ready(function () {
	new city_builder.game();
});
