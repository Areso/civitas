/*!
 * Civitas empire-building game.
 *
 * @author sizeof(cat) <sizeofcat AT riseup.net>
 * @version 0.1.0.492017
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

/*
 * Check for undefined stuff.
 */
if (typeof civitas === 'undefined') {
	var civitas = {};
}

if (typeof civitas.objects === 'undefined') {
	civitas.objects = {};
}

if (typeof civitas.controls === 'undefined') {
	civitas.controls = {};
}

if (typeof civitas.modules === 'undefined') {
	civitas.modules = {};
}

/**
 * i8n function.
 * 
 * @param {String} value
 * @returns {String}
 */
civitas.l = function (value) {
	if (typeof civitas.lang[value] !== 'undefined' && civitas.lang[value] !== '') {
		return civitas.lang[value];
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
civitas.AUTOSTART_MUSIC = false;

/**
 * Max level a settlement can have.
 * 
 * @constant
 * @type {Number}
 */
civitas.MAX_SETTLEMENT_LEVEL = 40;

/**
 * URL to the game assets
 * 
 * @constant
 * @type {String}
 */
civitas.ASSETS_URL = './';

/**
 * Amount of influence your settlement loses each year.
 * 
 * @constant
 * @type {Number}
 */
civitas.YEARLY_INFLUENCE_LOSS = 2;

/**
 * Amount of influence your settlement gains each year.
 * 
 * @constant
 * @type {Number}
 */
civitas.YEARLY_INFLUENCE_GAIN = 2;

/**
 * How many real seconds has a game day.
 *
 * constant
 * @type {Number}
 */
civitas.SECONDS_TO_DAY = 10;

/**
 * Number of city ruler avatars available to choose.
 * 
 * @constant
 * @type {Number}
 */
civitas.AVATARS = 48;

civitas.TRADES_ADDITION = 10;

civitas.TRADES_DISCOUNT = 20;

/**
 * Getting total city population is city_level * civitas.POPULATION_PER_LEVEL.
 *
 * @constant
 * @type {Number}
 */
civitas.POPULATION_PER_LEVEL = 230000;

/**
 * The black market discount.
 * 
 * @constant
 * @type {Number}
 */
civitas.BLACK_MARKET_DISCOUNT = 80;

/**
 * Total number of world maps.
 *
 * @constant
 * @type {Number}
 */
civitas.WORLDMAPS = 4;

/**
 * The resources that will be shown on the toolbar.
 * 
 * @constant
 * @type {Array}
 */
civitas.TOOLBAR_RESOURCES = [
	'coins',
	'wood',
	'stones',
	'woodplanks',
	'wheat',
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
civitas.LEVELS = [
	0, 100, 500, 1000, 3000,
	6500, 12000, 20000, 30000, 45000,
	60000, 85000, 100000, 140000, 180000,
	220000, 290000, 350000, 400000, 500000,
	610000, 730000, 800000, 930000, 1100000,
	1300000, 1500000, 1800000, 2500000, 3000000, 
	4000000, 5500000, 6500000, 8000000, 9000000, 
	10000000, 12000000, 16000000, 20000000, 50000000
];

/**
 * Application version.
 * 
 * @constant
 * @type {String}
 */
civitas.VERSION = '0.1.' + ((new Date()).getMonth() + 1) + '' + (new Date()).getDate() + '' + (new Date()).getFullYear();

/**
 * Whether the application is in debug mode.
 * 
 * @default false
 * @constant
 * @type {Boolean}
 */
civitas.DEBUG = true;

/**
 * Browser localStorage key to store game data into.
 *
 * @constant
 * @type {String}
 */
civitas.STORAGE_KEY = 'civitas';

/**
 * Goods importance, vital means at most 500 stacks of goods will be up for importing
 * or exporting.
 *
 * @constant
 * @type {Number}
 */
civitas.IMPORTANCE_VITAL = 50;

/**
 * Goods importance, high means at most 300 stacks of goods will be up for importing
 * or exporting.
 *
 * @constant
 * @type {Number}
 */
civitas.IMPORTANCE_HIGH = 30;

/**
 * Goods importance, medium means at most 200 stacks of goods will be up for importing
 * or exporting.
 *
 * @constant
 * @type {Number}
 */
civitas.IMPORTANCE_MEDIUM = 20;

/**
 * Goods importance, low means at most 100 stacks of goods will be up for importing
 * or exporting.
 *
 * @constant
 * @type {Number}
 */
civitas.IMPORTANCE_LOW = 10;

/**
 * Difficulty level of the game is easy.
 * 
 * @constant
 * @type {Number}
 */
civitas.DIFFICULTY_EASY = 1;

/**
 * Difficulty level of the game is medium.
 * 
 * @constant
 * @type {Number}
 */
civitas.DIFFICULTY_MEDIUM = 2;

/**
 * Difficulty level of the game is hard.
 * 
 * @constant
 * @type {Number}
 */
civitas.DIFFICULTY_HARD = 3;

/**
 * Difficulty level of the game is hardcore.
 * 
 * @constant
 * @type {Number}
 */
civitas.DIFFICULTY_HARDCORE = 4;

/**
 * When a building is notifying the player it's out of resources (the building, not the player).
 *
 * @constant
 * @type {Number}
 */
civitas.NOTIFICATION_MISSING_RESOURCES = 1;

/**
 * When a building is notifying the player its production is paused manually by the player.
 *
 * @constant
 * @type {Number}
 */
civitas.NOTIFICATION_PRODUCTION_PAUSED = 2;

/**
 * When a building is notifying the player the level of the city is too low.
 *
 * @constant
 * @type {Number}
 */
civitas.NOTIFICATION_SETTLEMENT_LOW_LEVEL = 3;

/**
 * Game type as single player (campaign, local).
 *
 * @constant
 * @type {Number}
 */
civitas.MODE_SINGLEPLAYER = 0;

/**
 * Game type as multi player (networked).
 *
 * @constant
 * @type {Number}
 */
civitas.MODE_MULTIPLAYER = 1;

civitas.lang = {};

/**
 * List of soldiers/ships to start with in various difficulty modes.
 *
 * @constant
 * @type {Object}
 */
civitas.START_ARMY = [
	/* Easy difficulty */
	{
		army: {
			'Militia': 10,
			'Axeman': 2,
			'Bowman': 4
		},
		navy: {
			'Corsair': 2,
			'Caravel': 1
		}
	},
	/* Medium difficulty */
	{
		army: {
			'Militia': 5,
			'Axeman': 1,
			'Bowman': 2
		},
		navy: {
			'Corsair': 1,
			'Caravel': 1
		}
	},
	/* Hard difficulty */
	{
		army: {
			'Militia': 3,
			'Bowman': 2
		},
		navy: {
			'Corsair': 1
		}
	},
	/* Hardcore difficulty */
	{
		army: {},
		navy: {}
	}
];

/**
 * Minimal buildings for a city to operate.
 * 
 * @constant
 * @type {Array}
 */
civitas.START_BUILDINGS = [
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
 * List of resources to start with in various difficulty modes.
 *
 * @constant
 * @type {Object}
 */
civitas.START_RESOURCES = [
	/* Easy difficulty */
	{
		coins: 50000,
		fame: 0,
		faith: 1,
		prestige: 1,
		espionage: 1,
		research: 1,
		bread: 300,
		meat: 100,
		stones: 100,
		weapons: 100,
		wheat: 40,
		wood: 100,
		woodplanks: 50
	},
	/* Medium difficulty */
	{
		coins: 20000,
		fame: 0,
		faith: 1,
		prestige: 1,
		espionage: 1,
		research: 1,
		bread: 300,
		meat: 100,
		stones: 100,
		weapons: 60,
		wheat: 40,
		wood: 100,
		woodplanks: 30
	},
	/* Hard difficulty */
	{
		coins: 10000,
		fame: 0,
		faith: 1,
		prestige: 1,
		espionage: 1,
		research: 1,
		bread: 300,
		meat: 100,
		stones: 70,
		wheat: 40,
		wood: 70,
		woodplanks: 20
	},
	/* Hardcore difficulty */
	{
		coins: 5000,
		fame: 0,
		faith: 1,
		prestige: 1,
		espionage: 1,
		research: 1,
		bread: 100,
		meat: 50,
		stones: 50,
		wheat: 40,
		wood: 50
	}
];

/**
 * List of the possible religion types.
 * 
 * @constant
 * @type {Array}
 */
civitas.RELIGIONS = [
	'none',
	'christianity',
	'islam',
	'judaism',
	'buddhism',
	'hinduism',
	'confucianism',
	'taoism'
];

/**
 * No religion
 * 
 * @constant
 * @type {Number}
 */
civitas.RELIGION_NONE = 0;

/**
 * Christianity
 * 
 * @constant
 * @type {Number}
 */
civitas.RELIGION_CHRISTIANITY = 1;

/**
 * Islam
 * 
 * @constant
 * @type {Number}
 */
civitas.RELIGION_ISLAM = 2;

/**
 * Judaism
 * 
 * @constant
 * @type {Number}
 */
civitas.RELIGION_JUDAISM = 3;

/**
 * Buddhism
 * 
 * @constant
 * @type {Number}
 */
civitas.RELIGION_BUDDHISM = 4;

/**
 * Hinduism
 * 
 * @constant
 * @type {Number}
 */
civitas.RELIGION_HINDUISM = 5;

/**
 * Confucianism
 * 
 * @constant
 * @type {Number}
 */
civitas.RELIGION_CONFUCIANISM = 6;

/**
 * Taoism
 * 
 * @constant
 * @type {Number}
 */
civitas.RELIGION_TAOISM = 7;

/**
 * The maximum value settlement faith can have.
 *
 * @constant
 * @type {Number}
 */
civitas.MAX_FAITH_VALUE = 1000;

/**
 * List of game diplomacy options.
 *
 * @constant
 * @type {Array}
 */
civitas.DIPLOMACIES = [
	'truce',
	'war',
	'pact',
	'alliance',
	'cease fire',
	'pact proposed',
	'alliance proposed',
	'cease fire proposed'
];

/**
 * The campaign is an army.
 *
 * @constant
 * @type {Number}
 */
civitas.CAMPAIGN_ARMY = 1;

/**
 * The campaign is a caravan.
 *
 * @constant
 * @type {Number}
 */
civitas.CAMPAIGN_CARAVAN = 2;

/**
 * Just met, temporary trucem can declare war, can trade.
 * 
 * @constant
 * @type {Number}
 */
civitas.DIPLOMACY_TRUCE = 0;

/**
 * At war, no trades possible.
 * 
 * @constant
 * @type {Number}
 */
civitas.DIPLOMACY_WAR = 1;

/**
 * In a pact, can declare war, can trade.
 * 
 * @constant
 * @type {Number}
 */
civitas.DIPLOMACY_PACT = 2;

/**
 * In an alliance, cannot declare war, can trade with discounts, can share armies.
 * 
 * @constant
 * @type {Number}
 */
civitas.DIPLOMACY_ALLIANCE = 3;

/**
 * A cease fire means a temporary peace.
 * 
 * @constant
 * @type {Number}
 */
civitas.DIPLOMACY_CEASE_FIRE = 4;

/**
 * Propose pact.
 * 
 * @constant
 * @type {Number}
 */
civitas.DIPLOMACY_PROPOSE_PACT = 5;

/**
 * Propose alliance.
 * 
 * @constant
 * @type {Number}
 */
civitas.DIPLOMACY_PROPOSE_ALLIANCE = 6;

/**
 * Propose cease fire.
 * 
 * @constant
 * @type {Number}
 */
civitas.DIPLOMACY_PROPOSE_CEASE_FIRE = 7;

/**
 * Influence gained when selling goods to a settlement.
 *
 * @constant
 * @type {Number}
 */
civitas.EXPORT_INFLUENCE = 2;

/**
 * Influence gained when buying goods from a settlement.
 *
 * @constant
 * @type {Number}
 */
civitas.IMPORT_INFLUENCE = 1;

/**
 * Prestige gained when selling goods to a settlement.
 *
 * @constant
 * @type {Number}
 */
civitas.EXPORT_PRESTIGE = 2;

/**
 * Prestige gained when buying goods from a settlement.
 *
 * @constant
 * @type {Number}
 */
civitas.IMPORT_PRESTIGE = 1;

/**
 * The maximum value settlement prestige can have.
 *
 * @constant
 * @type {Number}
 */
civitas.MAX_PRESTIGE_VALUE = 1000;

/**
 * The maximum value settlement research can have.
 *
 * @constant
 * @type {Number}
 */
civitas.MAX_RESEARCH_VALUE = 1000;

/**
 * The maximum value settlement espionage can have.
 *
 * @constant
 * @type {Number}
 */
civitas.MAX_ESPIONAGE_VALUE = 1000;

/**
 * The maximum value settlement influence can have.
 *
 * @constant
 * @type {Number}
 */
civitas.MAX_INFLUENCE_VALUE = 1000;

/**
 * List of the possible nation types.
 * 
 * @constant
 * @type {Array}
 */
civitas.NATIONS = [
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
	'mongolian',
	'tibetan',
	'persan',
	'khmer',
	'japanese',
	'french'
];

/**
 * Phoenicians
 * 
 * @constant
 * @type {Number}
 */
civitas.NATION_PHOENICIAN = 1;

/**
 * Carthaginans
 * 
 * @constant
 * @type {Number}
 */
civitas.NATION_CARTHAGINIAN = 2;

/**
 * Greeks
 * 
 * @constant
 * @type {Number}
 */
civitas.NATION_GREEK = 3;

/**
 * Egyptians
 * 
 * @constant
 * @type {Number}
 */
civitas.NATION_EGYPTIAN = 4;

/**
 * Assyrians
 * 
 * @constant
 * @type {Number}
 */
civitas.NATION_ASSYRIAN = 5;

/**
 * Romans
 * 
 * @constant
 * @type {Number}
 */
civitas.NATION_ROMAN = 6;

/**
 * Thracians
 * 
 * @constant
 * @type {Number}
 */
civitas.NATION_THRACIAN = 7;

/**
 * Sudanese
 * 
 * @constant
 * @type {Number}
 */
civitas.NATION_SUDANESE = 8;

/**
 * Spanish
 * 
 * @constant
 * @type {Number}
 */
civitas.NATION_SPANISH = 9;

/**
 * Sumerians
 * 
 * @constant
 * @type {Number}
 */
civitas.NATION_SUMERIAN = 10;

/**
 * Chinese
 * 
 * @constant
 * @type {Number}
 */
civitas.NATION_CHINESE = 11;

/**
 * Indian
 * 
 * @constant
 * @type {Number}
 */
civitas.NATION_INDIAN = 12;

/**
 * Franks
 * 
 * @constant
 * @type {Number}
 */
civitas.NATION_FRANKS = 13;

/**
 * Russians
 * 
 * @constant
 * @type {Number}
 */
civitas.NATION_RUSSIAN = 14;

/**
 * Nigerians
 * 
 * @constant
 * @type {Number}
 */
civitas.NATION_NIGERIAN = 15;

/**
 * Malinese
 * 
 * @constant
 * @type {Number}
 */
civitas.NATION_MALINESE = 16;

/**
 * Mongolians
 * 
 * @constant
 * @type {Number}
 */
civitas.NATION_MONGOLIAN = 17;

/**
 * Tibetans
 * 
 * @constant
 * @type {Number}
 */
civitas.NATION_TIBETAN = 18;

/**
 * Persans
 * 
 * @constant
 * @type {Number}
 */
civitas.NATION_PERSAN = 19;

/**
 * Khmer
 * 
 * @constant
 * @type {Number}
 */
civitas.NATION_KHMER = 20;

/**
 * Japanese
 * 
 * @constant
 * @type {Number}
 */
civitas.NATION_JAPANESE = 21;

/**
 * French
 * 
 * @constant
 * @type {Number}
 */
civitas.NATION_FRENCH = 22;

/**
 * List of all the heroes in the world.
 *
 * @type {Object}
 */
civitas.HEROES = {
	1: {
		name: 'Achilles',
		religion: civitas.RELIGION_TAOISM
	}
};

/**
 * List of the possible climate types.
 * 
 * @constant
 * @type {Array}
 */
civitas.CLIMATES = [
	'none',
	'temperate',
	'tropical',
	'arid',
	'polar'
];

/**
 * Temperate climate, all balanced.
 * 
 * @constant
 * @type {Number}
 */
civitas.CLIMATE_TEMPERATE = 1;

/**
 * Tropical climate, favoring farms and exotic goods.
 * 
 * @constant
 * @type {Number}
 */
civitas.CLIMATE_TROPICAL = 2;

/**
 * Arid climate, favoring ore mines.
 * 
 * @constant
 * @type {Number}
 */
civitas.CLIMATE_ARID = 3;

/**
 * Polar climate, very extreme.
 * 
 * @constant
 * @type {Number}
 */
civitas.CLIMATE_POLAR = 4;

/**
 * Worldmap position of city when the climate is temperate.
 * 
 * @constant
 * @type {Object}
 */
civitas.SETTLEMENT_LOCATION_TEMPERATE = {
	x: 500,
	y: 500
};

/**
 * Worldmap position of city when the climate is tropical.
 * 
 * @constant
 * @type {Object}
 */
civitas.SETTLEMENT_LOCATION_TROPICAL = {
	x: 500,
	y: 450
};

/**
 * Worldmap position of city when the climate is arid.
 * 
 * @constant
 * @type {Object}
 */
civitas.SETTLEMENT_LOCATION_ARID = {
	x: 500,
	y: 300
};

/**
 * Worldmap position of city when the climate is polar.
 * 
 * @constant
 * @type {Object}
 */
civitas.SETTLEMENT_LOCATION_POLAR = {
	x: 500,
	y: 60
};

/**
 * List of the possible ruler personality types.
 * 
 * @constant
 * @type {Array}
 */
civitas.PERSONALITIES = [
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
civitas.PERSONALITY_BALANCED = 1;

/**
 * The ruler will always consider diplomacy before going to war.
 * 
 * @constant
 * @type {Number}
 */
civitas.PERSONALITY_DIPLOMAT = 2;

/**
 * If you upset this ruler, he will go to war with you.
 * 
 * @constant
 * @type {Number}
 */
civitas.PERSONALITY_WARLORD = 3;

/**
 * List of soldier types, their attributes and cost.
 * 
 * @type {Object}
 * @constant
 */
civitas.SOLDIERS = {
	'Militia': {
		id: civitas.SOLDIER_MILITIA,
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
		id: civitas.SOLDIER_AXEMAN,
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
		id: civitas.SOLDIER_BOWMAN,
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
		id: civitas.SOLDIER_PIKEMAN,
		attack: 5,
		defense: 4,
		cost: {
			coins: 700,
			provisions: 1,
			iron: 1,
			leather: 1,
			weapons: 5,
			armor: 1
		}
	},
	'Crossbowman': {
		id: civitas.SOLDIER_CROSSBOWMAN,
		attack: 7,
		defense: 2,
		cost: {
			coins: 1000,
			provisions: 2,
			clothes: 1,
			iron: 1,
			weapons: 7,
			armor: 1
		}
	},
	'Knight': {
		id: civitas.SOLDIER_KNIGHT,
		attack: 6,
		defense: 9,
		cost: {
			coins: 1500,
			provisions: 3,
			clothes: 1,
			iron: 1,
			weapons: 9,
			armor: 4
		}
	},
	'Legionnaire': {
		id: civitas.SOLDIER_LEGIONNAIRE,
		attack: 12,
		defense: 14,
		cost: {
			coins: 2500,
			provisions: 6,
			leather: 2,
			iron: 2,
			weapons: 12,
			armor: 12
		}
	}
};

/**
 * Militia
 * 
 * @constant
 * @type {Number}
 */
civitas.SOLDIER_MILITIA = 0;

/**
 * Axemen
 * 
 * @constant
 * @type {Number}
 */
civitas.SOLDIER_AXEMAN = 1;

/**
 * Knights
 * 
 * @constant
 * @type {Number}
 */
civitas.SOLDIER_KNIGHT = 2;

/**
 * Bowmen
 * 
 * @constant
 * @type {Number}
 */
civitas.SOLDIER_BOWMAN = 3;

/**
 * Crossbowmen
 * 
 * @constant
 * @type {Number}
 */
civitas.SOLDIER_CROSSBOWMAN = 4;

/**
 * Pikemen
 * 
 * @constant
 * @type {Number}
 */
civitas.SOLDIER_PIKEMAN = 5;

/**
 * Legionnaires
 * 
 * @constant
 * @type {Number}
 */
civitas.SOLDIER_LEGIONNAIRE = 6;

/**
 * List of mercenary armies available for hire.
 * 
 * @constant
 * @type {Object}
 */
civitas.MERCENARIES = [{
	name: 'Legio I Adiutrix',
	description: 'Legio prima Adiutrix is a Roman legion.',
	handle: 'legio1',
	icon: 1,
	army: {
		'Axeman': 300,
		'Knight': 100,
		'Crossbowman': 220,
		'Pikeman': 200,
		'Legionnaire': 100
	},
	cost: 120000
}, {
	name: 'Legio II Augusta',
	description: 'Legio secunda Augusta is a Roman legion.',
	handle: 'legio2',
	icon: 8,
	army: {
		'Axeman': 220,
		'Knight': 100,
		'Crossbowman': 300,
		'Pikeman': 100,
		'Legionnaire': 100
	},
	cost: 130000
}, {
	name: 'Legio III Cyrenaica',
	description: 'Legio tertia Cyrenaica is a Roman legion.',
	handle: 'legio3',
	icon: 15,
	army: {
		'Axeman': 280,
		'Crossbowman': 500,
		'Pikeman': 180,
		'Legionnaire': 100
	},
	cost: 100000
}, {
	name: 'Legio IV Flavia Felix',
	description: 'Legio quarta Flavia Felix is a Roman legion.',
	handle: 'legio4',
	icon: 9,
	army: {
		'Militia': 140,
		'Axeman': 190,
		'Knight': 90,
		'Bowman': 20,
		'Crossbowman': 100,
		'Pikeman': 180,
		'Legionnaire': 100
	},
	cost: 190000
}, {
	name: 'Legio V Alaudae',
	description: 'Legio quinta Alaudae is a Roman legion.',
	handle: 'legio5',
	icon: 16,
	army: {
		'Militia': 100,
		'Axeman': 200,
		'Bowman': 190,
		'Legionnaire': 130
	},
	cost: 110000
}, {
	name: 'Legio VI Victrix',
	description: 'Legio sexta Victrix is a Roman legion.',
	handle: 'legio6',
	icon: 22,
	army: {
		'Militia': 330,
		'Axeman': 230,
		'Knight': 100,
		'Bowman': 100,
		'Legionnaire': 100
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
	description: 'The Army of the Western Garden is an army established during the ' +
		'reign of Emperor Ling in the Eastern Han Dynasty.',
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
	description: 'The Scholae Palatinae are an elite military guard unit, usually ' +
		'ascribed to the Roman Emperor Constantine the Great as a replacement for the ' +
		'equites singulares Augusti, the cavalry arm of the Praetorian Guard.',
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
	description: 'The Imperial Guards of the Tang Dynasty, also known as the Forbidden ' +
		'Troops were initially honor guards of the emperor and garrisons of the imperial ' +
		'capitals during the Tang`s dinasty formation in early 7th century.',
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
	description: 'The navy of the Order of Saint John, also known as the Maltese Navy, ' +
		'was the first navy of a chivalric order, established in the Middle Ages, around ' +
		'the late 12th century.',
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
 * List of ship types, their attributes and cost.
 * 
 * @type {Object}
 * @constant
 */
civitas.SHIPS = {
	'Corsair': {
		id: civitas.SHIP_CORSAIR,
		attack: 5,
		defense: 5,
		cost: {
			coins: 1000,
			wood: 200,
			leather: 50,
			iron: 50,
			provisions: 50,
			pottery: 10,
			clothes: 50,
			ropes: 10,
			cannons: 5,
			weapons: 10
		}
	},
	'Caravel': {
		id: civitas.SHIP_CARAVEL,
		attack: 10,
		defense: 10,
		cost: {
			coins: 3000,
			wood: 400,
			leather: 60,
			iron: 80,
			provisions: 60,
			pottery: 20,
			clothes: 60,
			ropes: 30,
			cannons: 20
		}
	},
	'Frigate': {
		id: civitas.SHIP_FRIGATE,
		attack: 17,
		defense: 8,
		cost: {
			coins: 3000,
			wood: 400,
			leather: 60,
			iron: 80,
			provisions: 60,
			pottery: 30,
			clothes: 60,
			ropes: 30,
			cannons: 20,
			weapons: 10
		}
	},
	'Galleon': {
		id: civitas.SHIP_GALLEON,
		attack: 15,
		defense: 15,
		cost: {
			coins: 5000,
			wood: 600,
			leather: 70,
			iron: 120,
			provisions: 100,
			pottery: 50,
			clothes: 70,
			ropes: 80,
			cannons: 30,
			weapons: 15
		}
	},
	'Warship': {
		id: civitas.SHIP_WARSHIP,
		attack: 35,
		defense: 30,
		cost: {
			coins: 10000,
			wood: 1000,
			leather: 200,
			iron: 500,
			provisions: 200,
			pottery: 100,
			clothes: 200,
			ropes: 100,
			cannons: 50,
			weapons: 20,
			carpets: 10
		}
	},
	'Ship of the Line': {
		id: civitas.SHIP_SHIPOFTHELINE,
		attack: 55,
		defense: 50,
		cost: {
			coins: 15000,
			wood: 2000,
			coal: 500,
			leather: 400,
			iron: 1500,
			provisions: 200,
			pottery: 140,
			barrels: 100,
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
civitas.SHIP_CORSAIR = 0;

/**
 * Caravel ship.
 * 
 * @constant
 * @type {Number}
 */
civitas.SHIP_CARAVEL = 1;

/**
 * Warship ship.
 * 
 * @constant
 * @type {Number}
 */
civitas.SHIP_WARSHIP = 2;

/**
 * Galleon ship.
 * 
 * @constant
 * @type {Number}
 */
civitas.SHIP_GALLEON = 3;

/**
 * Ship of the Line ship.
 * 
 * @constant
 * @type {Number}
 */
civitas.SHIP_SHIPOFTHELINE = 4;

/**
 * Frigate ship.
 * 
 * @constant
 * @type {Number}
 */
civitas.SHIP_FRIGATE = 5;

/**
 * Buildings native to the tropical climate.
 * 
 * @constant
 * @type {Array}
 */
civitas.SETTLEMENT_BUILDINGS_TROPICAL = [

	/* Municipal */
	'marketplace', 'warehouse', 'tradingpost', 'church', 'monastery', 'camp', 'castle',
	'shipyard', 'embassy', 'academy', 'tavern',

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
	'quartzfactory', 'winery', 'saltworks', 'pottery',
	'charcoalburnerhut', 'opticiansworkshop', 'papermill', 'printingpress',
	'redsmithsworkshop', 'ropeyard', 'glassworks', 'silkweaver',
	'apiary', 'barrelcooperage', 'brewery', 'candlemakersworkshop', 'sugarmill',
	'perfumery', 'weaver', 'provisions', 'carpenter', 'marzipanworkshop',

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
civitas.SETTLEMENT_BUILDINGS_POLAR = [

	/* Municipal */
	'marketplace', 'warehouse', 'tradingpost', 'church', 'monastery', 'camp', 'castle',
	'shipyard', 'embassy', 'academy', 'tavern',

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
	'quartzfactory', 'winery', 'saltworks', 'pottery',
	'charcoalburnerhut', 'opticiansworkshop', 'papermill', 'printingpress',
	'redsmithsworkshop', 'ropeyard', 'glassworks', 'silkweaver', 'marzipanworkshop',
	'apiary', 'barrelcooperage', 'brewery', 'candlemakersworkshop', 'sugarmill',
	'perfumery', 'weaver', 'provisions', 'carpenter'
];

/**
 * Buildings native to the arid climate.
 * 
 * @constant
 * @type {Array}
 */
civitas.SETTLEMENT_BUILDINGS_ARID = [

	/* Municipal */
	'marketplace', 'warehouse', 'tradingpost', 'church', 'monastery', 'camp', 'castle',
	'shipyard', 'embassy', 'academy', 'tavern',

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
	'quartzfactory', 'winery', 'saltworks', 'pottery',
	'charcoalburnerhut', 'opticiansworkshop', 'papermill', 'printingpress',
	'redsmithsworkshop', 'ropeyard', 'glassworks', 'silkweaver',
	'apiary', 'barrelcooperage', 'brewery', 'candlemakersworkshop', 'sugarmill',
	'perfumery', 'weaver', 'provisions', 'carpenter', 'marzipanworkshop',

	/* Farms */
	'cattlefarm', 'cattlefield', 'pigfarm', 'pigfield'
];

/**
 * Buildings native to the temperate climate.
 * 
 * @constant
 * @type {Array}
 */
civitas.SETTLEMENT_BUILDINGS_TEMPERATE = [

	/* Municipal */
	'marketplace', 'warehouse', 'tradingpost', 'church', 'monastery', 'camp', 'castle',
	'shipyard', 'embassy', 'academy', 'tavern',

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
	'quartzfactory', 'winery', 'saltworks', 'pottery',
	'charcoalburnerhut', 'opticiansworkshop', 'papermill', 'printingpress',
	'redsmithsworkshop', 'ropeyard', 'glassworks', 'silkweaver', 'marzipanworkshop',
	'apiary', 'barrelcooperage', 'brewery', 'candlemakersworkshop', 'sugarmill',
	'perfumery', 'weaver', 'provisions', 'carpenter', 'catapultworkshop',

	/* Farms */
	'cattlefarm', 'cattlefield', 'ciderfarm', 'ciderfield', 'grainfarm', 'grainfield',
	'grapesfarm', 'grapesfield',
	'hempfarm', 'hempfield', 'pigfarm', 'pigfield', 'indigofarm'
];

/**
 * All the buildings for a city.
 * 
 * @constant
 * @type {Array}
 */
civitas.BUILDINGS_ALL = [
	'marketplace', 'lumberjack', 'camp', 'warehouse', 'mill', 'castle', 'stone',
	'ironmine', 'trapper', 'almondsfarm', 'almondsfield', 'tavern',
	'shipyard', 'pigfarm', 'cattlefarm', 'pigfield', 'cattlefield', 'house1', 'house2',
	'house3', 'house4', 'house5', 'house6', 'house7',
	'house8', 'house9', 'church', 'bakery', 'butcher', 'grainfarm', 'grainfield',
	'ironsmelter', 'tannery', 'furrier', 'saltmine',
	'coppermine', 'goldmine', 'goldsmelter', 'coppersmelter', 'armory', 'coffeefarm',
	'coffeefield', 'hempfarm', 'hempfield', 'sugarfarm',
	'sugarfield', 'silkfarm', 'silkfield', 'coffeeroaster', 'quartzfactory', 'grapesfarm',
	'grapesfield', 'winery', 'saltworks', 'carpenter', 'pottery',
	'charcoalburnerhut', 'monastery', 'opticiansworkshop', 'papermill', 'printingpress',
	'redsmithsworkshop', 'ropeyard', 'glassworks', 'provisions', 'silkweaver',
	'apiary', 'barrelcooperage', 'brewery', 'candlemakersworkshop', 'indigofarm',
	'ciderfarm', 'ciderfield', 'sugarmill', 'rosenursery', 'catapultworkshop',
	'perfumery', 'tradingpost', 'weaver', 'embassy',  'academy', 'marzipanworkshop'
];

/**
 * Buildings' categories.
 * 
 * @constant
 * @type {Object}
 */
civitas.BUILDINGS_CATEGORIES = {
	'Municipal': [
		'academy',
		'church',
		'embassy',
		'marketplace',
		'monastery',
		'shipyard',
		'tradingpost',
		'warehouse',
		'tavern'
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
		'barrelcooperage',
		'brewery',
		'candlemakersworkshop',
		'carpenter',
		'charcoalburnerhut',
		'coppersmelter',
		'furrier',
		'glassworks',
		'goldsmelter',
		'ironsmelter',
		'lumberjack',
		'opticiansworkshop',
		'papermill',
		'pottery',
		'printingpress',
		'quartzfactory',
		'redsmithsworkshop',
		'ropeyard',
		'saltworks',
		'stone',
		'trapper',
		'tannery',
		'weaver',
		'winery'
	],
	'Exotic': [
		'apiary',
		'coffeeroaster',
		'marzipanworkshop',
		'perfumery',
		'rosenursery',
		'silkweaver',
		'sugarmill'
	],
	'Military': [
		'armory',
		'camp',
		'castle',
		'provisions',
		'catapultworkshop'
	]
};

/**
 * List of all Game buildings.
 * 
 * @constant
 * @type {Array}
 */
civitas.BUILDINGS = [{
		name: 'Marketplace',
		handle: 'marketplace',
		description: 'The Marketplace is the main building of your city and provides a place ' +
			'for the inhabitants of your settlement to gather. It cannot be demolished.',
		storage: 100000,
		is_municipal: true,
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
			settlement_level: 1
		}
	}, {
		name: 'Warehouse',
		handle: 'warehouse',
		description: 'The Warehouse is a trade building that provides market carts that pick up ' +
			'goods from production buildings. A Warehouse also adds extra storage space for the ' +
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
			woodplanks: 200,
			stones: 500
		},
		requires: {
			settlement_level: 10
		}
	}, {
		name: 'Church',
		handle: 'church',
		description: 'A Church provides a massive fame boost to your settlement by using coins and ' +
			'converting them to fame, as well as providing faith for free. Faith allows you to choose a religion for your settlement.',
		is_municipal: true,
		is_production: true,
		production: {
			fame: 50,
			faith: 1
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
			woodplanks: 20,
			stones: 20
		},
		requires: {
			settlement_level: 3
		}
	}, {
		name: 'Trading Post',
		handle: 'tradingpost',
		description: 'The Trading Post allows you to trade resources with other settlements.',
		is_municipal: true,
		position: {
			x: 1590,
			y: 200
		},
		cost: {
			coins: 30000,
			wood: 20,
			woodplanks: 30,
			stones: 40
		},
		requires: {
			settlement_level: 6
		}
	}, {
		name: 'Academy',
		handle: 'academy',
		description: 'The Academy provides research for the settlement it is built into, at the expense of coins.',
		is_municipal: true,
		is_production: true, 
		production: {
			fame: 10,
			research: 1
		},
		materials: {
			coins: 100
		},
		position: {
			x: 1480,
			y: 700
		},
		levels: 3,
		cost: {
			coins: 100000,
			woodplanks: 1000,
			stones: 1000
		},
		requires: {
			settlement_level: 10
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
			espionage: 1
		},
		materials: {
			coins: 50
		},
		position: {
			x: 1620,
			y: 390
		},
		levels: 3,
		cost: {
			coins: 100000,
			woodplanks: 100,
			stones: 100
		},
		requires: {
			settlement_level: 10
		}
	}, {
		name: 'Provision House',
		handle: 'provisions',
		description: 'The Provision House requires various goods to produce provisions for military units.',
		is_production: true,
		production: {
			provisions: 2
		},
		materials: {
			bread: 2,
			meat: 2,
			wine: 1
		},
		position: {
			x: 1234,
			y: 418
		},
		levels: 3,
		cost: {
			coins: 100000,
			wood: 200,
			stones: 200,
			woodplanks: 100
		},
		requires: {
			settlement_level: 8
		}
	}, {
		name: 'Monastery',
		handle: 'monastery',
		description: 'Monastery provides fame for your city in exchange for coins.',
		is_municipal: true,
		is_production: true,
		production: {
			fame: 20,
			faith: 2
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
			woodplanks: 200,
			stones: 200
		},
		requires: {
			settlement_level: 16,
			buildings: ['academy']
		}
	}, {
		name: 'Tavern',
		handle: 'tavern',
		description: 'The Tavern is the place where heroes of the known (and unknown) world hang around. If you are looking to recruit Achilles, build a Tavern. He might show up.',
		is_municipal: true,
		production: {
			fame: 20
		},
		materials: {
			coins: 20
		},
		position: {
			x: 1380,
			y: 180
		},
		levels: 3,
		cost: {
			coins: 100000,
			woodplanks: 200,
			stones: 200,
			wood: 200,
			wine: 100,
			meat: 100
		},
		requires: {
			settlement_level: 16,
			buildings: ['academy', 'castle']
		}
	}, {
		name: 'Shipyard',
		handle: 'shipyard',
		description: 'The Shipyard helps you expand your settlement overseas by housing your ' +
			'ships and providing you with fish and an ultra-small chance to gather pearls.',
		is_production: true,
		position: {
			x: 1746,
			y: 552
		},
		levels: 3,
		chance: {
			pearls: 0.005
		},
		cost: {
			coins: 200000,
			wood: 200,
			woodplanks: 200,
			stones: 100,
			ropes: 10,
			barrels: 10
		},
		production: {
			fish: 4
		},
		requires: {
			settlement_level: 10
		}
	}, {
		name: 'Military Camp',
		handle: 'camp',
		description: 'The military camp is your main base of defense and attack until you can ' +
			'develop a Castle.',
		position: {
			x: 1461,
			y: 153
		},
		cost: {
			coins: 50000,
			wood: 200,
			woodplanks: 200,
			stones: 160
		},
		requires: {
			settlement_level: 8,
			buildings: ['provisions']
		}
	}, {
		name: 'Castle',
		handle: 'castle',
		description: 'The Castle is your main base of operations. It houses your ' +
			'settlement`s soldiers and provides you with prestige and some extra fame.',
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
			woodplanks: 500,
			stones: 500
		},
		requires: {
			settlement_level: 20,
			buildings: ['camp']
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
			y: 710
		},
		cost: {
			coins: 2000,
			stones: 20
		},
		requires: {
			settlement_level: 1
		}
	}, {
		name: 'Carpenter',
		handle: 'carpenter',
		description: '.',
		is_production: true,
		materials: {
			wood: 2
		},
		production: {
			woodplanks: 1
		},
		levels: 3,
		position: {
			x: 150,
			y: 810
		},
		cost: {
			coins: 5000,
			wood: 10,
			stones: 10
		},
		requires: {
			settlement_level: 3
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
		chance: {
			mosaic: 0.001
		},
		requires: {
			settlement_level: 1
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
			gems: 0.0001
		},
		cost: {
			coins: 10000,
			woodplanks: 20,
			stones: 20
		},
		requires: {
			settlement_level: 6
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
			gems: 0.0001
		},
		cost: {
			coins: 10000,
			wood: 20,
			stones: 20
		},
		requires: {
			settlement_level: 3
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
			settlement_level: 3
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
			gems: 0.0001
		},
		cost: {
			coins: 10000,
			wood: 20,
			stones: 20
		},
		requires: {
			settlement_level: 5
		}
	}, {
		name: 'Salt Works',
		handle: 'saltworks',
		description: 'Salt Works requires coal and brine, and it produces salt. Salt is used for ' +
			'leather jerkins by the Tannery, meat by the Butcher`s Shop and fur coats by the ' +
			'Furrier`s Workshop.',
		is_production: true,
		production: {
			salt: 4
		},
		materials: {
			coal: 2,
			brine: 2
		},
		position: {
			x: 1734,
			y: 318
		},
		levels: 3,
		cost: {
			coins: 20000,
			wood: 20,
			stones: 20
		},
		requires: {
			settlement_level: 3
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
			woodplanks: 20,
			stones: 20
		},
		requires: {
			settlement_level: 3
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
			woodplanks: 30,
			stones: 30
		},
		requires: {
			settlement_level: 3
		}
	}, {
		name: 'Pottery Workshop',
		handle: 'pottery',
		description: 'The pottery workshop uses a high-temperature kiln and clay to create ' +
			'pottery for the inhabitants of your settlement.',
		is_production: true,
		production: {
			pottery: 4
		},
		materials: {
			clay: 6
		},
		position: {
			x: 1360,
			y: 630
		},
		levels: 3,
		cost: {
			coins: 30000,
			woodplanks: 30,
			stones: 30,
			clay: 100
		},
		requires: {
			settlement_level: 6
		}
	}, {
		name: 'Armory',
		handle: 'armory',
		description: 'The Armory is a major building that produces weapons and armor for ' +
			'your soldiers. If you want to conquer other settlements, you will need one.',
		is_production: true,
		production: {
			weapons: 1,
			armor: 1
		},
		materials: {
			iron: 10,
			wood: 2,
			leather: 8,
			brass: 4
		},
		position: {
			x: 863,
			y: 131
		},
		levels: 3,
		cost: {
			coins: 50000,
			woodplanks: 100,
			stones: 100
		},
		requires: {
			settlement_level: 6
		}
	}, {
		name: 'Butcher',
		handle: 'butcher',
		description: 'The Butcher slaughters cattle for meat, providing food that is more ' +
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
			woodplanks: 40,
			stones: 40
		},
		requires: {
			settlement_level: 3
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
			woodplanks: 40,
			stones: 50
		},
		requires: {
			settlement_level: 4
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
			woodplanks: 50,
			stones: 50
		},
		requires: {
			settlement_level: 6
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
			woodplanks: 55,
			stones: 55
		},
		requires: {
			settlement_level: 6
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
			settlement_level: 6
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
			woodplanks: 30,
			stones: 40
		},
		requires: {
			settlement_level: 6
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
			settlement_level: 6
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
			settlement_level: 6
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
			woodplanks: 80,
			stones: 60
		},
		requires: {
			settlement_level: 16,
			buildings: ['tradingpost']
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
			woodplanks: 80,
			stones: 60
		},
		requires: {
			settlement_level: 16,
			buildings: ['tradingpost']
		}
	}, {
		name: 'Winery',
		handle: 'winery',
		description: 'The Winery uses the grapes from your Grapes Farm and processes them into wine.',
		is_production: true,
		production: {
			wine: 2
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
			settlement_level: 10
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
			woodplanks: 70,
			stones: 70
		},
		requires: {
			settlement_level: 20
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
			woodplanks: 60,
			stones: 50
		},
		requires: {
			settlement_level: 16
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
			woodplanks: 100,
			stones: 100
		},
		requires: {
			settlement_level: 20
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
			woodplanks: 80,
			stones: 40
		},
		requires: {
			settlement_level: 20,
			buildings: ['tradingpost']
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
			settlement_level: 20
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
			settlement_level: 10
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
			settlement_level: 16
		}
	}, {
		name: 'Marzipan Workshop',
		handle: 'marzipanworkshop',
		description: '.',
		is_production: true,
		production: {
			marzipan: 1
		},
		materials: {
			almonds: 2,
			sugar: 2
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
			settlement_level: 20,
			buildings: ['tradingpost']
		}
	}, {
		name: 'Silk Weaver',
		handle: 'silkweaver',
		description: 'The silk weaking mill requires gold and silk and produces brocade robes.',
		is_production: true,
		production: {
			robes: 1
		},
		materials: {
			silk: 2,
			hemp: 1,
			gold: 2
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
			settlement_level: 20,
			buildings: ['tradingpost']
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
			settlement_level: 8
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
			settlement_level: 10
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
			settlement_level: 9
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
			settlement_level: 9
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
			woodplanks: 80,
			stones: 60
		},
		requires: {
			settlement_level: 20
		}
	}, {
		name: 'Catapult Workshop',
		handle: 'catapultworkshop',
		description: 'The Catapult Workshop builds catapults, which are the ultimate siege weapons.',
		is_production: true,
		production: {
			catapults: 1
		},
		materials: {
			wood: 100,
			copper: 10,
			iron: 20,
			woodplanks: 40,
			ropes: 10,
			sulphur: 10
		},
		position: {
			x: 1110,
			y: 130
		},
		levels: 3,
		cost: {
			coins: 250000,
			woodplanks: 200,
			stones: 300
		},
		requires: {
			settlement_level: 15
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
			wood: 2
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
			settlement_level: 3
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
			settlement_level: 1
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
			settlement_level: 1
		}
	}, {
		name: 'House',
		handle: 'house3',
		description: 'Houses provide coins through taxes and space for your settlers.',
		is_housing: true,
		tax: 15,
		cost: {
			woodplanks: 10,
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
			settlement_level: 3
		}
	}, {
		name: 'House',
		handle: 'house4',
		description: 'Houses provide coins through taxes and space for your settlers.',
		is_housing: true,
		tax: 20,
		cost: {
			woodplanks: 10,
			stones: 20,
			coins: 4000
		},
		materials: {
			bread: 1,
			meat: 1,
			pottery: 1
		},
		position: {
			x: 860,
			y: 552
		},
		levels: 5,
		visible_upgrades: true,
		requires: {
			settlement_level: 6,
			buildings: ['church']
		}
	}, {
		name: 'House',
		handle: 'house5',
		description: 'Houses provide coins through taxes and space for your settlers.',
		is_housing: true,
		tax: 25,
		cost: {
			woodplanks: 25,
			stones: 35,
			coins: 5000
		},
		materials: {
			fish: 2,
			meat: 2,
			pottery: 1,
			beer: 1
		},
		position: {
			x: 764,
			y: 613
		},
		levels: 5,
		visible_upgrades: true,
		requires: {
			settlement_level: 10,
			buildings: ['church']
		}
	}, {
		name: 'House',
		handle: 'house6',
		description: 'Houses provide coins through taxes and space for your settlers.',
		is_housing: true,
		tax: 30,
		cost: {
			woodplanks: 30,
			stones: 45,
			coins: 6000
		},
		materials: {
			fish: 2,
			meat: 2,
			pottery: 1,
			wine: 1
		},
		position: {
			x: 663,
			y: 659
		},
		levels: 5,
		visible_upgrades: true,
		requires: {
			settlement_level: 16,
			buildings: ['church']
		}
	}, {
		name: 'House',
		handle: 'house7',
		description: 'Houses provide coins through taxes and space for your settlers.',
		is_housing: true,
		tax: 35,
		cost: {
			woodplanks: 40,
			stones: 80,
			coins: 7000
		},
		materials: {
			fish: 2,
			meat: 2,
			wine: 1,
			pottery: 1,
			candlesticks: 1
		},
		position: {
			x: 579,
			y: 601
		},
		levels: 5,
		visible_upgrades: true,
		requires: {
			settlement_level: 20,
			buildings: ['academy']
		}
	}, {
		name: 'House',
		handle: 'house8',
		description: 'Houses provide coins through taxes and space for your settlers.',
		is_housing: true,
		tax: 40,
		cost: {
			woodplanks: 50,
			stones: 100,
			coins: 8000
		},
		materials: {
			fish: 2,
			meat: 2,
			wine: 1,
			pottery: 1,
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
			settlement_level: 25,
			buildings: ['academy']
		}
	}, {
		name: 'House',
		handle: 'house9',
		description: 'Houses provide coins through taxes and space for your settlers.',
		is_housing: true,
		tax: 100,
		cost: {
			woodplanks: 100,
			stones: 200,
			coins: 10000
		},
		materials: {
			fish: 2,
			meat: 2,
			wine: 1,
			pottery: 1,
			candlesticks: 1,
			furcoats: 1,
			perfume: 1,
			robes: 1,
			marzipan: 1
		},
		position: {
			x: 447,
			y: 463
		},
		levels: 5,
		visible_upgrades: true,
		requires: {
			settlement_level: 30,
			buildings: ['castle']
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
			settlement_level: 4,
			buildings: ['ciderfield']
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
			clay: 20
		},
		requires: {
			settlement_level: 4
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
			settlement_level: 16,
			buildings: ['almondsfield']
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
			clay: 20
		},
		requires: {
			settlement_level: 16
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
			settlement_level: 2,
			buildings: ['cattlefield']
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
			clay: 20
		},
		requires: {
			settlement_level: 2
		}
	}, {
		name: 'Pig Farm',
		handle: 'pigfarm',
		description: 'A pig farm grows pigs so your settlers can eat food that is more nutritious ' +
			'than bread.',
		is_production: true,
		production: {
			meat: 1,
			hides: 1
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
			settlement_level: 3,
			buildings: ['church', 'pigfield']
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
			clay: 20
		},
		requires: {
			settlement_level: 3
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
			settlement_level: 2,
			buildings: ['grainfield']
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
			clay: 20
		},
		requires: {
			settlement_level: 2
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
			settlement_level: 10,
			buildings: ['grapesfield']
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
			clay: 20
		},
		requires: {
			settlement_level: 10
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
			settlement_level: 16,
			buildings: ['coffeefield']
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
			clay: 40
		},
		requires: {
			settlement_level: 16
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
			settlement_level: 6,
			buildings: ['hempfield']
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
			clay: 20
		},
		requires: {
			settlement_level: 6
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
			settlement_level: 20,
			buildings: ['silkfield']
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
			clay: 100
		},
		requires: {
			settlement_level: 20
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
			settlement_level: 20,
			buildings: ['academy', 'sugarfield']
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
			clay: 100
		},
		requires: {
			settlement_level: 20
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
			settlement_level: 16
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
			settlement_level: 20
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
			settlement_level: 20
		}
	}];

/**
 * Settlement types.
 *
 * @constant
 * @type {Array}
 */
civitas.SETTLEMENT_TYPES = [
	'city',
	'village'
];

/**
 * City settlement.
 *
 * @constant
 * @type {Number}
 */
civitas.CITY = 0;

/**
 * Village settlement.
 *
 * @constant
 * @type {Number}
 */
civitas.VILLAGE = 1;

/**
 * List of all the settlements in the world.
 * 
 * @constant
 * @type {Object}
 */
civitas.SETTLEMENTS = {
	1: {
		icon: 7,
		climate: civitas.CLIMATE_TEMPERATE,
		religion: civitas.RELIGION_CHRISTIANITY,
		level: 35,
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
				armor: civitas.IMPORTANCE_MEDIUM,
				barrels: civitas.IMPORTANCE_MEDIUM,
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
			x: 380,
			y: 190
		}
	},
	2: {
		icon: 4,
		climate: civitas.CLIMATE_TROPICAL,
		religion: civitas.RELIGION_TAOISM,
		level: 32,
		resources: {
			coins: 230000,
			prestige: 700,
			espionage: 1000
		},
		trades: {
			'imports': {
				wax: civitas.IMPORTANCE_LOW,
				pottery: civitas.IMPORTANCE_HIGH,
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
			x: 140,
			y: 400
		}
	},
	3: {
		icon: 7,
		climate: civitas.CLIMATE_TEMPERATE,
		religion: civitas.RELIGION_JUDAISM,
		level: 30,
		resources: {
			coins: 160000,
			prestige: 1000,
			espionage: 800
		},
		trades: {
			'imports': {
				wheat: civitas.IMPORTANCE_VITAL,
				wood: civitas.IMPORTANCE_HIGH,
				barrels: civitas.IMPORTANCE_MEDIUM,
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
				pottery: civitas.IMPORTANCE_HIGH,
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
			x: 240,
			y: 140
		}
	},
	4: {
		icon: 5,
		climate: civitas.CLIMATE_TROPICAL,
		religion: civitas.RELIGION_BUDDHISM,
		level: 28,
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
				armor: civitas.IMPORTANCE_MEDIUM,
				pottery: civitas.IMPORTANCE_HIGH,
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
			x: 890,
			y: 150
		}
	},
	5: {
		icon: 5,
		climate: civitas.CLIMATE_ARID,
		religion: civitas.RELIGION_ISLAM,
		level: 39,
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
			x: 830,
			y: 530
		}
	},
	6: {
		icon: 2,
		climate: civitas.CLIMATE_TROPICAL,
		religion: civitas.RELIGION_HINDUISM,
		level: 29,
		resources: {
			coins: 190000,
			prestige: 700,
			espionage: 500
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
				pottery: civitas.IMPORTANCE_HIGH,
				hides: civitas.IMPORTANCE_LOW,
				paper: civitas.IMPORTANCE_LOW
			}
		},
		army: {
			'Militia': 200,
			'Bowman': 200,
		},
		location: {
			x: 690,
			y: 60
		}
	},
	7: {
		icon: 4,
		climate: civitas.CLIMATE_ARID,
		religion: civitas.RELIGION_CHRISTIANITY,
		level: 22,
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
				pottery: civitas.IMPORTANCE_HIGH,
				meat: civitas.IMPORTANCE_MEDIUM
			},
			'exports': {
				ropes: civitas.IMPORTANCE_MEDIUM,
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
			x: 300,
			y: 480
		}
	},
	8: {
		icon: 7,
		climate: civitas.CLIMATE_POLAR,
		religion: civitas.RELIGION_CHRISTIANITY,
		level: 29,
		resources: {
			coins: 300000,
			prestige: 200,
			espionage: 850
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
				barrels: civitas.IMPORTANCE_MEDIUM,
				candles: civitas.IMPORTANCE_LOW,
				armor: civitas.IMPORTANCE_HIGH,
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
			x: 700,
			y: 280
		}
	},
	9: {
		icon: 4,
		climate: civitas.CLIMATE_TEMPERATE,
		religion: civitas.RELIGION_CONFUCIANISM,
		level: 30,
		resources: {
			coins: 330000,
			prestige: 900,
			espionage: 900
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
			x: 920,
			y: 440
		}
	},
	10: {
		icon: 7,
		climate: civitas.CLIMATE_TEMPERATE,
		religion: civitas.RELIGION_BUDDHISM,
		level: 28,
		resources: {
			coins: 220000,
			prestige: 160,
			espionage: 500
		},
		trades: {
			'imports': {
				flour: civitas.IMPORTANCE_LOW,
				bread: civitas.IMPORTANCE_LOW,
				armor: civitas.IMPORTANCE_HIGH,
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
			x: 900,
			y: 30
		}
	},
	11: {
		icon: 7,
		climate: civitas.CLIMATE_TROPICAL,
		religion: civitas.RELIGION_TAOISM,
		level: 23,
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
				armor: civitas.IMPORTANCE_HIGH,
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
			x: 144,
			y: 290
		}
	},
	12: {
		icon: 7,
		climate: civitas.CLIMATE_ARID,
		religion: civitas.RELIGION_ISLAM,
		level: 27,
		resources: {
			coins: 180000,
			prestige: 300,
			espionage: 300
		},
		trades: {
			'imports': {
				cider: civitas.IMPORTANCE_LOW,
				ropes: civitas.IMPORTANCE_LOW,
				armor: civitas.IMPORTANCE_HIGH,
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
			y: 60
		}
	},
	13: {
		icon: 4,
		climate: civitas.CLIMATE_TEMPERATE,
		religion: civitas.RELIGION_ISLAM,
		level: 36,
		resources: {
			coins: 200000,
			prestige: 710,
			espionage: 450
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
				armor: civitas.IMPORTANCE_HIGH,
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
			x: 700,
			y: 400
		}
	},
	14: {
		icon: 4,
		climate: civitas.CLIMATE_TROPICAL,
		religion: civitas.RELIGION_CHRISTIANITY,
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
			x: 680,
			y: 540
		}
	},
	15: {
		icon: 5,
		climate: civitas.CLIMATE_TEMPERATE,
		religion: civitas.RELIGION_JUDAISM,
		level: 29,
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
				armor: civitas.IMPORTANCE_MEDIUM,
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
			x: 180,
			y: 530
		}
	},
	16: {
		icon: 5,
		climate: civitas.CLIMATE_TEMPERATE,
		religion: civitas.RELIGION_JUDAISM,
		level: 22,
		resources: {
			coins: 100000,
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
				pearls: civitas.IMPORTANCE_MEDIUM,
				ropes: civitas.IMPORTANCE_MEDIUM
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
			y: 340
		}
	},
	17: {
		icon: 7,
		climate: civitas.CLIMATE_TROPICAL,
		religion: civitas.RELIGION_ISLAM,
		level: 26,
		resources: {
			coins: 190000,
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
			x: 130,
			y: 140
		}
	},
	18: {
		icon: 7,
		climate: civitas.CLIMATE_TEMPERATE,
		religion: civitas.RELIGION_CHRISTIANITY,
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
				armor: civitas.IMPORTANCE_MEDIUM,
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
	19: {
		icon: 5,
		climate: civitas.CLIMATE_TEMPERATE,
		religion: civitas.RELIGION_ISLAM,
		level: 27,
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
			x: 800,
			y: 200
		}
	},
	20: {
		icon: 7,
		climate: civitas.CLIMATE_ARID,
		religion: civitas.RELIGION_CONFUCIANISM,
		level: 34,
		resources: {
			coins: 320000,
			prestige: 490,
			espionage: 200
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
				ropes: civitas.IMPORTANCE_MEDIUM,
				cattle: civitas.IMPORTANCE_LOW,
				bread: civitas.IMPORTANCE_LOW,
				meat: civitas.IMPORTANCE_MEDIUM,
				carpets: civitas.IMPORTANCE_LOW,
				cannons: civitas.IMPORTANCE_LOW
			}
		},
		army: {
			'Militia': 20,
			'Axeman': 20,
			'Knight': 20,
			'Bowman': 20,
			'Crossbowman': 20,
			'Pikeman': 20
		},
		location: {
			x: 30,
			y: 30
		}
	},
	21: {
		settlement_type: civitas.VILLAGE,
		religion: civitas.RELIGION_HINDUISM,
		resources: {
			prestige: 1,
			coins: 10000,
			wood: 20,
			stones: 10,
			meat: 80
		},
		nationality: civitas.NATION_JAPANESE,
		location: {
			x: 800,
			y: 480
		},
		population: 1290,
		army: {
			'Militia': 3,
			'Bowman': 3
		}
	},
	22: {
		settlement_type: civitas.VILLAGE,
		religion: civitas.RELIGION_ISLAM,
		resources: {
			prestige: 1,
			coins: 20000,
			silk: 20,
			wheat: 10,
			bread: 20
		},
		population: 610,
		nationality: civitas.NATION_CHINESE,
		location: {
			x: 560,
			y: 100
		},
		army: {
			'Militia': 3,
			'Bowman': 2
		}
	},
	23: {
		settlement_type: civitas.VILLAGE,
		religion: civitas.RELIGION_ISLAM,
		resources: {
			prestige: 1,
			coins: 20000,
			silk: 20,
			wheat: 10,
			bread: 20
		},
		population: 550,
		nationality: civitas.NATION_KHMER,
		location: {
			x: 900,
			y: 300
		},
		army: {
			'Militia': 3,
			'Bowman': 2
		}
	},
	24: {
		settlement_type: civitas.VILLAGE,
		religion: civitas.RELIGION_CHRISTIANITY,
		resources: {
			prestige: 1,
			coins: 20000,
			brass: 20,
			meat: 10,
			goldores: 20
		},
		population: 820,
		nationality: civitas.NATION_INDIAN,
		location: {
			x: 100,
			y: 70
		},
		army: {
			'Militia': 3,
			'Bowman': 2
		}
	},
	25: {
		settlement_type: civitas.VILLAGE,
		religion: civitas.RELIGION_CHRISTIANITY,
		resources: {
			prestige: 1,
			coins: 20000,
			copper: 20,
			flour: 10,
			ironores: 20
		},
		population: 1600,
		nationality: civitas.NATION_PERSAN,
		location: {
			x: 380,
			y: 560
		},
		army: {
			'Militia': 3,
			'Bowman': 2
		}
	},
	26: {
		settlement_type: civitas.VILLAGE,
		religion: civitas.RELIGION_CHRISTIANITY,
		resources: {
			prestige: 1,
			coins: 2000,
			silk: 20,
			wheat: 10,
			bread: 20,
			herbs: 10,
			barrels: 10
		},
		population: 600,
		nationality: civitas.NATION_MONGOLIAN,
		location: {
			x: 570,
			y: 400
		},
		army: {
			'Militia': 6
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
		title: 'Emperor',
		avatar: 1,
		nationality: civitas.NATION_ROMAN,
		personality: civitas.PERSONALITY_WARLORD
	},
	{
		name: 'Cronus',
		title: 'Ruler',
		avatar: 3,
		nationality: civitas.NATION_PHOENICIAN,
		personality: civitas.PERSONALITY_BALANCED
	},
	{
		name: 'Dido',
		title: 'Queen',
		avatar: 41,
		nationality: civitas.NATION_CARTHAGINIAN,
		personality: civitas.PERSONALITY_DIPLOMAT
	},
	{
		name: 'Genghis',
		title: 'Khan',
		avatar: 19,
		nationality: civitas.NATION_MONGOLIAN,
		personality: civitas.PERSONALITY_WARLORD
	},
	{
		name: 'Khufu',
		title: 'Pharaoh',
		avatar: 20,
		nationality: civitas.NATION_EGYPTIAN,
		personality: civitas.PERSONALITY_DIPLOMAT
	},
	{
		name: 'Musa I',
		title: 'Mansa',
		avatar: 30,
		nationality: civitas.NATION_MALINESE,
		personality: civitas.PERSONALITY_WARLORD
	},
	{
		name: 'Sennacherib',
		title: 'King',
		avatar: 34,
		nationality: civitas.NATION_ASSYRIAN,
		personality: civitas.PERSONALITY_BALANCED
	},
	{
		name: 'Pepi',
		title: 'Pharaoh',
		avatar: 40,
		nationality: civitas.NATION_SUDANESE,
		personality: civitas.PERSONALITY_DIPLOMAT
	},
	{
		name: 'Hatshepsut',
		title: 'Pharaoh',
		avatar: 36,
		nationality: civitas.NATION_EGYPTIAN,
		personality: civitas.PERSONALITY_BALANCED
	},
	{
		name: 'Clovis',
		title: 'King',
		avatar: 13,
		nationality: civitas.NATION_FRANKS,
		personality: civitas.PERSONALITY_DIPLOMAT
	},
	{
		name: 'Gilgamesh',
		title: 'King',
		avatar: 31,
		nationality: civitas.NATION_SUMERIAN,
		personality: civitas.PERSONALITY_WARLORD
	},
	{
		name: 'Dalai Lama',
		title: 'Priest',
		avatar: 48,
		nationality: civitas.NATION_TIBETAN,
		personality: civitas.PERSONALITY_DIPLOMAT
	},
	{
		name: 'Ashoka',
		title: 'Emperor',
		avatar: 28,
		nationality: civitas.NATION_INDIAN,
		personality: civitas.PERSONALITY_DIPLOMAT
	},
	{
		name: 'Charlemagne',
		title: 'King',
		avatar: 43,
		nationality: civitas.NATION_FRANKS,
		personality: civitas.PERSONALITY_DIPLOMAT
	},
	{
		name: 'Darius',
		title: 'King',
		avatar: 38,
		nationality: civitas.NATION_PERSAN,
		personality: civitas.PERSONALITY_WARLORD
	},
	{
		name: 'Ivan III',
		title: 'Tzar',
		avatar: 19,
		nationality: civitas.NATION_RUSSIAN,
		personality: civitas.PERSONALITY_WARLORD
	},
	{
		name: 'Qin Shi Huang',
		title: 'Emperor',
		avatar: 45,
		nationality: civitas.NATION_CHINESE,
		personality: civitas.PERSONALITY_DIPLOMAT
	},
	{
		name: 'Ozymandias',
		title: 'Pharaoh',
		avatar: 33,
		nationality: civitas.NATION_EGYPTIAN,
		personality: civitas.PERSONALITY_BALANCED
	},
	{
		name: 'Timur',
		title: 'Emperor',
		avatar: 37,
		nationality: civitas.NATION_PERSAN,
		personality: civitas.PERSONALITY_WARLORD
	},
	{
		name: 'Pol Pot',
		title: 'President',
		avatar: 46,
		nationality: civitas.NATION_KHMER,
		personality: civitas.PERSONALITY_WARLORD
	},
	{
		name: 'Napoleon',
		title: 'Emperor',
		avatar: 47,
		nationality: civitas.NATION_FRENCH,
		personality: civitas.PERSONALITY_WARLORD
	},
	{
		name: 'Hirohito',
		title: 'Emperor',
		avatar: 30,
		nationality: civitas.NATION_JAPANESE,
		personality: civitas.PERSONALITY_DIPLOMAT
	}
];

/**
 * List of world settlement names.
 *
 * @constant
 * @type {Array}
 */
civitas.SETTLEMENT_NAMES = [
	'Alexandria',
	'Rome',
	'Carthage',
	'Constantinople',
	'Karakorum',
	'Niniveh',
	'Damascus',
	'Thebes',
	'Men-nefer',
	'Peshawar',
	'Uruk',
	'Abydos',
	'Chengdu',
	'Mombasa',
	'Apullum',
	'Byblos',
	'Abu',
	'Pi-Ramesses',
	'Djedu',
	'Kyrene',
	'Athens',
	'Menat Khufu',
	'Niani',
	'Novgorod',
	'Sarmizegetusa',
	'Sigiriya',
	'Selima Oasis',
	'Tournai',
	'Taruga',
	'Amarna',
	'Toledo',
	'Mogadishu',
	'Xinjiang',
	'Yinxu',
	'Bublidrus',
	'Mylyra',
	'Ialezus',
	'Thebeia',
	'Demaphos',
	'Smyrnione',
	'Dimonassa',
	'Cyrarnassus',
	'Posigeneia',
	'Kasmigeneia',
	'Khemdjumunein',
	'Sakpi',
	'Kersatennu',
	'Farsou',
	'Dehsa',
	'Djasumar',
	'Absaitunis',
	'Avsi',
	'Wasvarmeru',
	'Behdju',
	'Galamia',
	'Pekies',
	'VyVyrodari',
	'Viasseto',
	'Messibria',
	'Molfeserta',
	'Quanes',
	'Braga',
	'Seicer',
	'Legara',
	'Albadolid',
	'Getastela',
	'Drepanum',
	'Canusium',
	'Mogontiacum',
	'Leucarum',
	'Pautalia',
	'Scallabis',
	'Chernogan',
	'Yelatrov',
	'Novomoksary',
	'Chistongelsk',
	'Timaryevsk',
	'Naberkuta',
	'Koloyevka',
	'Obnirodvinsk',
	'Beloredimir',
	'Kaspikarino',
	'Troten',
	'Neunsee',
	'Weveltals',
	'Oudenhout',
	'Plailimar',
	'Puciennes',
	'Bernsloh',
	'Geiselkau',
	'Waterlina',
	'Clonkenny',
	'Terbommel',
	'Drachnisse',
	'Werdenthal',
	'Erzell',
	'Arrabona',
	'Ugernum',
	'Bulla Regia',
	'Umbracum',
	'Aquae Armenetiae',
	'Isara',
	'Regium Lepidum',
	'Aquisgranium',
	'Gerasa'
];

/**
 * List of random ruler names for settlements and various other obscure reasons.
 *
 * @type {Array}
 * @constant
 */
civitas.NAMES = [
	'Pan',
	'Victor',
	'Lekan',
	'Sheamus',
	'Itumeleng',
	'Varya',
	'Gervas',
	'Stefanija',
	'Meera',
	'Sethunya',
	'Qadir',
	'Lim',
	'Yami',
	'Veasna',
	'Baadur',
	'Sharar',
	'Yuuta',
	'Hallie',
	'Anson',
	'Davis',
	'Ondina',
	'Zan',
	'Gibs',
	'Soth',
	'Naoki',
	'Hachirou',
	'Irmhild'
];

/**
 * Event responsable for destroying a building.
 * 
 * @type {Number}
 * @constant
 */
civitas.EVENT_EFFECT_DESTROY_BUILDING = 0;

/**
 * Event responsable for losing coins.
 * 
 * @type {Number}
 * @constant
 */
civitas.EVENT_EFFECT_LOSE_COINS = 1;

/**
 * Event responsable for gaining coins.
 * 
 * @type {Number}
 * @constant
 */
civitas.EVENT_EFFECT_GAIN_COINS = 2;

/**
 * Event responsable for raising the influence with another city.
 * 
 * @constant
 * @type {Number}
 */
civitas.EVENT_EFFECT_RAISE_INFLUENCE = 3;

/**
 * Event responsable for lowering the influence with another city.
 * 
 * @constant
 * @type {Number}
 */
civitas.EVENT_EFFECT_LOWER_INFLUENCE = 4;

/**
 * Event responsable for losing fame.
 * 
 * @type {Number}
 * @constant
 */
civitas.EVENT_EFFECT_LOSE_FAME = 5;

/**
 * Event responsable for gaining fame.
 * 
 * @type {Number}
 * @constant
 */
civitas.EVENT_EFFECT_GAIN_FAME = 6;

/**
 * Event responsable for losing espionage.
 * 
 * @type {Number}
 * @constant
 */
civitas.EVENT_EFFECT_LOSE_ESPIONAGE = 7;

/**
 * Event responsable for gaining espionage.
 * 
 * @type {Number}
 * @constant
 */
civitas.EVENT_EFFECT_GAIN_ESPIONAGE = 8;

/**
 * List of all available in-game events.
 * 
 * @constant
 * @type {Array}
 */
civitas.EVENTS = [{
	name: 'Great earthquake',
	handle: 'earthquake1',
	description: '',
	chance: 0.0001,
	effect: civitas.EVENT_EFFECT_DESTROY_BUILDING,
	data: {
		amount: 1
	}
}, {
	name: 'Royal marriage',
	handle: 'marriage',
	description: 'A marriage was arranged between a member of your family and the royal family of SETTLEMENT. This raises your influence on SETTLEMENT. Good job!',
	chance: 0.003,
	effect: civitas.EVENT_EFFECT_RAISE_INFLUENCE,
	data: {
		amount: 50,
		settlement: 'Rome'
	}
}, {
	name: 'Raiders attack',
	handle: 'raiders',
	description: 'A band of raiders attacked the outskirts of your settlement. Repairing the affected buildings costs your settlement AMOUNT coins.',
	chance: 0.001,
	effect: civitas.EVENT_EFFECT_LOSE_COINS,
	data: {
		amount: 1000
	}
}, {
	name: 'Discovery',
	handle: 'discovery',
	description: 'The engineers in your settlement made a great discovery which made you more famous, thus gaining AMOUNT fame.',
	chance: 0.006,
	effect: civitas.EVENT_EFFECT_GAIN_FAME,
	data: {
		amount: 100,
	}
}, {
	name: 'Spy found',
	handle: 'spyfound',
	description: 'A spy from SETTLEMENT was found hiding in your settlement, as a reward for finding him you gain AMOUNT espionage.',
	chance: 0.006,
	effect: civitas.EVENT_EFFECT_GAIN_ESPIONAGE,
	data: {
		amount: 10,
		settlement: 'Uruk'
	}
}, {
	name: 'Spy uncovered',
	handle: 'spydiscovered',
	description: 'One of your spies in SETTLEMENT was discovered, SETTLEMENT`s ruler is angry so you lose AMOUNT espionage.',
	chance: 0.008,
	effect: civitas.EVENT_EFFECT_LOSE_ESPIONAGE,
	data: {
		amount: 10,
		settlement: 'Carthage'
	}
}];

/**
 * List of all the resources available in-game.
 * 
 * @constant
 * @type {Object}
 */
civitas.RESOURCES = {
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
	'research': {
		name: 'Research'
	},
	'faith': {
		name: 'Faith'
	},
	'almonds': {
		name: 'Almonds',
		price: 200
	},
	'armor': {
		name: 'Armor',
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
		price: 700,
		imported: true
	},
	'carpets': {
		name: 'Carpets',
		price: 400,
		imported: true
	},
	'catapults': {
		name: 'Catapults',
		price: 1200
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
	'dates': {
		name: 'Dates',
		price: 140,
		imported: true
	},
	'donkeys': {
		name: 'Donkeys',
		price: 90,
		imported: true
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
	'marzipan': {
		name: 'Marzipan',
		price: 280,
		imported: true
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
	'pottery': {
		name: 'Pottery',
		price: 60
	},
	'provisions': {
		name: 'Provisions',
		price: 300
	},
	'quartz': {
		name: 'Quartz',
		price: 26
	},
	'robes': {
		name: 'Robes',
		price: 400
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
		price: 300,
		imported: true
	},
	'spices': {
		name: 'Spices',
		price: 285
	},
	'spyglasses': {
		name: 'Spyglasses',
		price: 280,
		imported: true
	},
	'statues': {
		name: 'Statues',
		price: 800,
		imported: true
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
		price: 180,
		imported: true
	},
	'tools': {
		name: 'Tools',
		price: 35,
		imported: true
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
	},
	'woodplanks': {
		name: 'Wood Planks',
		price: 40
	}
};

/**
 * Resources that don't actually use up storage space, they're more ... virtual.
 *
 * @constant
 * @type {Array}
 */
civitas.NON_RESOURCES = [
	'coins', 'fame', 'prestige', 'espionage', 'research', 'faith'
];

/**
 * Resources that will be shown on the main Storage Panel side.
 *
 * @constant
 * @type {Array}
 */
civitas.MAIN_RESOURCES = [
	'beer', 'bread', 'brass', 'brine', 'cannons', 'cattle', 'cider', 'clay', 'clothes', 
	'coal', 'copper', 'fish', 'flour', 'furs', 'gold', 'goldores', 'herbs', 'hides',
	'iron', 'ironores', 'meat', 'milk', 'ropes', 'salt', 'stones', 'weapons', 'wheat',
	'wine', 'wood', 'woodplanks'
];

/**
 * List of all obtainable game achievements.
 *
 * @constant
 * @type {Array}
 */
civitas.ACHIEVEMENTS = [
	{
		id: 1,
		description: 'Reach level 10.',
		name: 'Kiddo',
		conditions: [
			{
				settlement_level: 10
			}
		]
	}, {
		id: 2,
		description: 'Reach level 20.',
		name: 'Teen',
		conditions: [
			{
				settlement_level: 20
			}
		]
	}, {
		id: 3,
		description: 'Reach level 30.',
		name: 'On my own',
		conditions: [
			{
				settlement_level: 30
			}
		]
	}, {
		id: 4,
		description: 'Reach level 40.',
		name: 'Fear me',
		conditions: [
			{
				settlement_level: 40
			}
		]
	}, {
		id: 5,
		description: 'Gather maximum faith.',
		name: 'Jesus Christ',
		conditions: [
			{
				faith: 1000
			}
		]
	}, {
		id: 6,
		description: 'Gather maximum research.',
		name: 'Albert Einstein',
		conditions: [
			{
				research: 1000
			}
		]
	}, {
		id: 7,
		description: 'Gather 100M coins.',
		name: 'Rottschild',
		conditions: [
			{
				coins: 100000000
			}
		]
	}, {
		id: 8,
		description: 'Gather 500k coins.',
		name: 'Ba dum tss',
		conditions: [
			{
				coins: 500000
			}
		]
	}, {
		id: 9,
		description: 'Gather 100k coins.',
		name: 'Gatherer',
		conditions: [
			{
				coins: 100000
			}
		]
	}, {
		id: 10,
		description: 'Gather 1M coins.',
		name: 'Milionaire',
		conditions: [
			{
				coins: 1000000
			}
		]
	}, {
		id: 11,
		description: 'Gather 10M coins.',
		name: 'Rockefeller',
		conditions: [
			{
				coins: 10000000
			}
		]
	}, {
		id: 12,
		description: 'Gather 10k stones.',
		name: 'Stone Age',
		conditions: [
			{
				resources: [
					{
						stones: 10000
					}
				]
			}
		]
	}, {
		id: 13,
		description: 'Gather 10k wood.',
		name: 'Woody the Woodpecker',
		conditions: [
			{
				resources: [
					{
						wood: 10000
					}
				]
			}
		]
	}, {
		id: 14,
		description: 'Gather 10k meat.',
		name: 'Animal killer',
		conditions: [
			{
				resources: [
					{
						meat: 10000
					}
				]
			}
		]
	}, {
		id: 15,
		description: 'Recruit 500 soldiers.',
		name: 'Warfiend',
		conditions: [
			{
				soldiers: 500
			}
		]
	}, {
		id: 16,
		description: 'Recruit 100 soldiers.',
		name: 'Armed to the teeth',
		conditions: [
			{
				soldiers: 100
			}
		]
	}, {
		id: 17,
		description: 'Recruit 1000 soldiers.',
		name: 'Warlord',
		conditions: [
			{
				soldiers: 1000
			}
		]
	}, {
		id: 18,
		description: 'Recruit 10 ships.',
		name: 'Shipwrecked',
		conditions: [
			{
				ships: 10
			}
		]
	}, {
		id: 19,
		description: 'Recruit 100 ships.',
		name: 'Captain Ahab',
		conditions: [
			{
				ships: 100
			}
		]
	}, {
		id: 20,
		description: 'Gather 100 prestige.',
		name: 'Prestigious',
		conditions: [
			{
				prestige: 100
			}
		]
	}, {
		id: 21,
		description: 'Gather 500 prestige.',
		name: 'The God King',
		conditions: [
			{
				prestige: 500
			}
		]
	}, {
		id: 22,
		description: 'Gather 10 espionage.',
		name: 'You got Mossad-ed!',
		conditions: [
			{
				espionage: 10
			}
		]
	}, {
		id: 23,
		description: 'Gather 100 espionage.',
		name: 'You got Snowden-ed!',
		conditions: [
			{
				espionage: 100
			}
		]
	}, {
		id: 24,
		description: 'Gather 500 espionage.',
		name: 'I spy with my own eye',
		conditions: [
			{
				espionage: 500
			}
		]
	}, {
		id: 25,
		description: 'Gather 1000 espionage.',
		name: 'Anna Chapman',
		conditions: [
			{
				espionage: 1000
			}
		]
	}, {
		id: 26,
		description: 'Gather 10 research.',
		name: 'Initiate',
		conditions: [
			{
				research: 10
			}
		]
	}, {
		id: 27,
		description: 'Gather 100 research.',
		name: 'Researcher',
		conditions: [
			{
				research: 100
			}
		]
	}, {
		id: 28,
		description: 'Gather 500 research.',
		name: 'Searching',
		conditions: [
			{
				research: 500
			}
		]
	}, {
		id: 29,
		description: 'Gather 500 faith.',
		name: 'Disciple',
		conditions: [
			{
				faith: 500
			}
		]
	}, {
		id: 30,
		description: 'Build a Castle.',
		name: 'Castlevania',
		conditions: [
			{
				buildings: 'castle'
			}
		]
	}, {
		id: 31,
		description: 'Build a Church.',
		name: 'Winston Churchill, got it?',
		conditions: [
			{
				buildings: 'church'
			}
		]
	}, {
		id: 32,
		description: 'Build an Academy.',
		name: 'Academician',
		conditions: [
			{
				buildings: 'academy'
			}
		]
	}, {
		id: 33,
		description: 'Build each of the mines (Iron, Gold, Copper and Salt).',
		name: 'All mine!',
		conditions: [
			{
				buildings: [
					'iconmine',
					'goldmine',
					'coppermine',
					'saltmine'
				]
			}
		]
	}, {
		id: 34,
		description: 'Fill out all your storage space.',
		name: 'All filled up',
		conditions: [
			{
				storage: 0
			}
		]
	}, {
		id: 35,
		description: 'Build 10 catapults.',
		name: 'Cat-a-pulter',
		conditions: [
			{
				resources: [
					{
						catapults: 10
					}
				]
			}
		]
	}, {
		id: 36,
		description: 'Build an Embassy.',
		name: 'Gandhi',
		conditions: [
			{
				buildings: 'embassy'
			}
		]
	}, {
		id: 37,
		description: 'Get 100 achievements.',
		name: 'Achivement? Yes please.',
		conditions: [
			{
				achievements: 100
			}
		]
	}, {
		id: 38,
		description: 'Recruit a mercenary army.',
		name: 'Merc',
		conditions: [
			{
				mercenary: 1
			}
		]
	}, {
		id: 39,
		description: 'Reach 10 milion in population',
		name: 'Megalopolis',
		conditions: [
			{
				population: 10000000
			}
		]
	}
];

/**
 * Utils object.
 */
civitas.utils = {

	resource_exists: function(resource) {
		for (var item in civitas.RESOURCES) {
			if (item === resource) {
				return true;
			}
		}
		return false;
	},

	get_distance: function(source, destination) {
		return Math.floor(Math.sqrt(Math.pow(destination.x - source.x, 2) + Math.pow(destination.y - source.y, 2)));
	},

	get_distance_in_days: function(source, destination) {
		return Math.floor(Math.sqrt(Math.pow(destination.x - source.x, 2) + Math.pow(destination.y - source.y, 2)) / 10);
	},

	/**
	 * Format a timestamp to a more human form (x ago).
	 *
	 * @public
	 * @param {Number} time
	 * @returns {Number}
	 */
	time_since: function(time) {
		var time_formats = [
			[
				2, 
				"One second", 
				"1 second from now"
			], 
			[
				60, 
				"seconds", 
				1
			], 
			[
				120, 
				"One minute", 
				"1 minute from now"
			], 
			[
				3600, 
				"minutes", 
				60
			], 
			[
				7200, 
				"One hour", 
				"1 hour from now"
			], 
			[
				86400, 
				"hours", 
				3600
			], 
			[
				172800, 
				"One day", 
				"tomorrow"
			],
			[
				604800, 
				"days", 
				86400], 
			[
				1209600, 
				"One week", 
				"next week"
			], 
			[
				2419200, 
				"weeks", 
				604800
			], 
			[
				4838400, 
				"One month", 
				"next month"
			], 
			[
				29030400, 
				"months", 
				2419200], 
			[
				58060800, 
				"One year", 
				"next year"
			], 
			[
				2903040000, 
				"years", 
				29030400
			], 
			[
				5806080000, 
				"One century", 
				"next century"
			], 
			[
				58060800000, 
				"centuries", 
				2903040000
			]
		];
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
	},

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
		return civitas.utils.get_up_number(
			civitas.utils.get_random(
				Math.floor(Math.random() * importance) * 10 + 10,
				Math.floor(Math.random() * importance) * 10 + 20
			)
		);
	},

	/**
	 * Return the resource name by handle.
	 *
	 * @public
	 * @param {String} handle
	 * @returns {String}
	 */
	get_resource_name: function(handle) {
		return civitas.RESOURCES[handle].name;
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
		return Math.ceil(Math.ceil(civitas.RESOURCES[resource].price - discount) * amount);
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
		return Math.ceil(amount * (civitas.RESOURCES[resource].price));
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
		return Math.ceil(Math.ceil(civitas.RESOURCES[resource].price + discount) * amount);
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
	},

	get_random_unique: function(from) {
		var id = civitas.utils.get_random(0, from.length - 1);
		var element = from[id];
		from.splice(id, 1);
		return element;
	}
};

/**
 * Main Game UI interface.
 */
civitas.ui = {

	building_panel_template: function(id, title) {
		var out = '<div id="panel-' + id + '" class="panel">' +
			'<header>' +
				'<span class="title">' + title + '</span>' +
				'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents"></div>' +
			'<footer class="footer clearfix">' +
				'<a class="tips demolish btn" title="' + civitas.l('Demolish this building') + '"></a>' +
				'<a class="tips pause start btn" title="' + civitas.l('Control (start/pause) production') + '"></a>' +
				'<a class="tips upgrade btn" title="' + civitas.l('Upgrade building') + '"></a>' +
			'</footer>' +
		'</div>';
		return out;
	},

	building_panel: function (params, level) {
		var out = '<p>' + params.description + '</p>' +
			'<dl>' +
				civitas.ui.cost_panel(params.cost) +
				civitas.ui.materials_panel(params.materials) +
				civitas.ui.production_panel(params.production, level) +
				civitas.ui.requires_panel(params.requires) +
				civitas.ui.chance_panel(params.chance, level) +
				civitas.ui.tax_panel(params.tax, level) +
				civitas.ui.storage_panel(params.storage, level) +
			'</dl>';
		return out;
	},

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
			out += '<dt>' + civitas.l('Cost') + '</dt>';
			for (var item in costs) {
				out += '<dd>' + civitas.utils.nice_numbers(costs[item]) + civitas.ui.resource_small_img(item) + '</dd>';
			}
		}
		return out;
	},

	progress: function(value, progress_type, show_value) {
		if (typeof progress_type === 'undefined') {
			progress_type = 'small';
		}
		var _e = '';
		if (value < 10) {
			_e = ' ubad';
		} else if (value >= 10 && value < 30) {
			_e = ' vbad';
		} else if (value >= 30 && value < 40) {
			_e = ' bad';
		} else if (value >= 40 && value < 60) {
			_e = ' good';
		} else if (value >= 60 && value < 90) {
			_e = ' vgood';
		} else if (value >= 90) {
			_e = ' ugood';
		}
		return '<div class="progress ' + progress_type + '"><span class="bar' + _e + '" style="width:' + value + '%">' + (typeof show_value !== 'undefined' ? show_value : value) + '</span></div>';
	},

	army_img: function (name) {
		return '<img class="tips" title="' + name + '" src="' + civitas.ASSETS_URL + 'images/armies/' + name.toLowerCase().replace(/ /g,"_") + '_small.png" />';
	},

	army_list: function (army, no_margin) {
		var out = '<dl' + ((typeof no_margin !== 'undefined' && no_margin === true) ? ' class="nomg"' : '') + '>';
		var total = 0;
		for (var soldier in army.army) {
			out += '<dt>' + army.army[soldier] + '</dt>' +
					'<dd>' + civitas.ui.army_img(soldier) + '</dd>';
			total += army.army[soldier];
		}
		out += '<dt>' + (typeof army.total !== 'undefined' ? army.total : total) + '</dt><dd>' + civitas.l('Total') + '</dd>' +
				'</dl>';
		return out;
	},

	/**
	 * Check if a window exists and is opened.
	 * 
	 * @param {String} id
	 * @public
	 * @returns {Boolean}
	 */
	window_exists: function (id) {
		if ($(id).length == 0) {
			return false;
		}
		return true;
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
						'<dd>' + civitas.ui.resource_small_img(item) + '</dd>';
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
					'<dd>' + civitas.ui.army_img(soldier) + '</dd>';
			total += army.navy[soldier];
		}
		out += '<dt>' + (typeof army.total !== 'undefined' ? army.total : total) + '</dt><dd>' + civitas.l('Total') + '</dd>' +
				'</dl>';
		return out;
	},

	building_element: function (params) {
		var building_image = params.type;
		var description = '<br /><span class="smalldesc">' + params.data.description + '</span>';
		if (params.type.slice(0, -1) === 'house') {
			building_image = params.type.slice(0, -1);
		}
		var image = (typeof params.data.visible_upgrades === 'undefined' || params.data.visible_upgrades === false) ? building_image + '1' : building_image + params.data.level;
		return '<div data-type="' + params.type + '" data-level="' + params.data.level + '" ' +
			'style="background:transparent url(' + civitas.ASSETS_URL + 'images/buildings/' + image + '.png) no-repeat;left:' + params.data.position.x + 'px;top:' + params.data.position.y + 'px" ' +
			'title=\'' + params.data.name + '\' ' + 'id="building-' + params.data.handle + '"' +
			'class="tips slots building"></div>';
	},

	resource_storage_small_el: function (resource, amount) {
		return '<div class="tips storage-item small" title="' + civitas.utils.get_resource_name(resource) + '">' +
				'<img src="' + civitas.ASSETS_URL + 'images/resources/' + resource + '_small.png" />' +
				'<span class="amount">' + amount + '</amount>' +
				'</div>';
	},

	resource_storage_el: function (resource, amount) {
		return '<div class="storage-item">' +
				'<span class="title">' + civitas.utils.get_resource_name(resource) + '</span>' +
				'<img src="' + civitas.ASSETS_URL + 'images/resources/' + resource + '.png" />' +
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
			out += '<dt>' + civitas.l('Uses') + '</dt>';
			for (var item in materials) {
				out += '<dd>' + materials[item] + civitas.ui.resource_small_img(item) + '</dd>';
			}
		}
		return out;
	},

	chance_panel: function (materials, level) {
		var out = '';
		if (typeof materials !== 'undefined') {
			out += '<dt>' + civitas.l('Extra materials') + '</dt>';
			for (var item in materials) {
				out += '<dd>' + (level * materials[item]).toFixed(4) * 100 + '%' + civitas.ui.resource_small_img(item) + '</dd>';
			}
		}
		return out;
	},

	production_panel: function (materials, level) {
		var out = '';
		if (typeof materials !== 'undefined') {
			out += '<dt>' + civitas.l('Produces') + '</dt>';
			for (var item in materials) {
				out += '<dd>' + (level * materials[item]) + civitas.ui.resource_small_img(item) + '</dd>';
			}
		}
		return out;
	},

	requires_panel: function (requires) {
		var out = '';
		if (typeof requires.buildings !== 'undefined') {
			out += '<dt>' + civitas.l('Requires') + '</dt>';
			out += '<dd>';
			for (var i = 0; i <requires.buildings.length; i++) {
				var b = civitas.BUILDINGS[civitas.BUILDINGS.findIndexM(requires.buildings[i])];
				out += b.name + '<br />'
			}
			out += '</dd>';
		}
		return out;
	},

	tax_panel: function (tax, level) {
		var out = '';
		if (typeof tax !== 'undefined') {
			out += '<dt>' + civitas.l('Tax') + '</dt>';
			out += '<dd>' + (level * tax) + civitas.ui.resource_small_img('coins') + '</dd>';
		}
		return out;
	},

	storage_panel: function (storage, level) {
		var out = '';
		if (typeof storage !== 'undefined') {
			out += '<dt>' + civitas.l('Storage') + '</dt>';
			out += '<dd>' + (level * storage) + '<img alt="Storage space" class="tips" title="' + civitas.l('Storage Space') + '" src="' + civitas.ASSETS_URL + 'images/resources/storage_small.png" /></dd>';
		}
		return out;
	},

	resource_small_img: function (resource) {
		return '<img alt="' + civitas.utils.get_resource_name(resource) + '" class="tips" title="' + civitas.utils.get_resource_name(resource) + '" src="' + civitas.ASSETS_URL + 'images/resources/' + resource + '_small.png" />';
	}
};

/**
 * Main Game settlement object.
 * 
 * @param {type} params
 * @class {civitas.objects.settlement}
 * @returns {civitas.objects.settlement}
 */
civitas.objects.settlement = function(params) {
	
	this.id = null;

	/**
	 * Settlement type.
	 *
	 * @private
	 * @type {Number}
	 */
	this.settlement_type = null;

	/**
	 * The name of this settlement.
	 * 
	 * @private
	 * @type {String}
	 */
	this.name = null;
	
	/**
	 * The settlement ruler.
	 * 
	 * @private
	 * @type {String}
	 */
	this.ruler = null;
	
	/**
	 * Pointer to the game core.
	 * 
	 * @private
	 * @type {civitas.game}
	 */
	this.core = null;
	
	/**
	 * List of the buildings in this settlement.
	 * 
	 * @private
	 * @type {Array}
	 */
	this.buildings = [];
	
	/**
	 * List of buildings in a special export format.
	 *
	 * @type {Array}
	 * @private
	 */
	this.buildings_list = [];
	
	/**
	 * Storage space available in this settlement.
	 * 
	 * @private
	 * @type {Number}
	 */
	this.storage = 0;

	/**
	 * Settlement population.
	 *
	 * @private
	 * @type {Number}
	 */
	this.population = 1;

	/**
	 * The climate of the zone the settlement resides in. It affects the type of
	 * the buildings you can construct.
	 * 
	 * @private
	 * @type {String}
	 */
	this.climate = null;
	
	/**
	 * Soldiers headquartered in this settlement.
	 * 
	 * @private
	 * @type {Number}
	 */
	this.army = [];
	
	/**
	 * Flag whether this settlement belongs to a player or is AI-controlled.
	 *
	 * @private
	 * @type {Boolean}
	 */
	this.player = false;

	/**
	 * Ships built in this settlement.
	 * 
	 * @private
	 * @type {Number}
	 */
	this.navy = [];

	/**
	 * Mercenary armies available for this settlement.
	 * 
	 * @private
	 * @type {Number}
	 */
	this.mercenary = [];
	
	/**
	 * List of mercenary armies in a special export format.
	 *
	 * @type {Array}
	 * @private
	 */
	this.mercenary_list = [];

	/**
	 * The resources of this settlement.
	 * 
	 * @private
	 * @type {Object}
	 */
	this.resources = {};
	
	/**
	 * The level of the settlement.
	 * 
	 * @private
	 * @type {Number}
	 */
	this.level = 1;
	
	/**
	 * List of the imports and exports of this settlement.
	 * 
	 * @private
	 * @type {Object}
	 */
	this.trades = null;
	
	/**
	 * The icon of this settlement.
	 * 
	 * @type {Number}
	 * @private
	 */
	this.icon = null;

	/**
	 * The diplomatic status of this settlement.
	 *
	 * @type {Object}
	 * @private
	 */
	this.status = null;

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {civitas.objects.settlement}
	 * @param {Object} params
	 */
	this.__init = function(params) {
		this.core = params.core;
		this.id = params.id;
		this.name = params.name;
		this.player = (typeof params.player !== 'undefined') ? params.player : false;
		this.level = (typeof params.level !== 'undefined') ? params.level : 1;
		this.resources = (typeof params.resources !== 'undefined') ? params.resources : {};
		this.climate = (typeof params.climate !== 'undefined') ? params.climate : civitas.CLIMATE_TEMPERATE;
		this.religion = (typeof params.religion !== 'undefined') ? params.religion : civitas.RELIGION_NONE;
		this.ruler = params.ruler;
		this.icon = (typeof params.icon !== 'undefined') ? params.icon : 1;
		this.population = (typeof params.population !== 'undefined') ? params.population : this.level * civitas.POPULATION_PER_LEVEL;
		this.settlement_type = (typeof params.settlement_type !== 'undefined') ? params.settlement_type : civitas.CITY;
		if (typeof params.army_list !== 'undefined') {
			this.setup_army(params.army_list);
		}
		if (typeof params.navy_list !== 'undefined') {
			this.setup_navy(params.navy_list);
		}
		if (typeof params.mercenary_list !== 'undefined') {
			this.setup_mercenary(params.mercenary_list);
		} else {
			this.mercenary = [];
		}
		this.status = (typeof params.status !== 'undefined') ? params.status : {};
		this._build_resources();
		if (typeof params.trades !== 'undefined') {
			this.trades = params.trades;
		} else {
			this.reset_trades();
		}
		if (this.is_player() === false) {
			this.resources.fame = civitas.LEVELS[this.get_level()];
		}
		return this;
	};

	/**
	 * Export settlement data.
	 *
	 * @returns {Object}
	 * @public
	 */
	this.export = function() {
		var data = {
			id: this.get_id(),
			name: this.get_name(),
			player: this.is_player(),
			level: this.get_level(),
			climate: this.get_climate().id,
			religion: this.get_religion().id,
			ruler: this.get_ruler(),
			icon: this.get_icon(),
			trades: this.get_trades(),
			resources: this.get_resources(),
			army_list: this.get_army_total().army,
			navy_list: this.get_navy_total().navy,
			buildings: this.get_buildings_list(),
			settlement_type: this.get_settlement_type(),
			population: this.get_population(),
			mercenary_list: this.get_mercenary_list()
		};
		if (this.is_player() === true) {
			data.status = this.get_status();
		}
		return data;
	};

	/**
	 * Adjust the resources according to the settlement owner.
	 *
	 * @private
	 * @returns {Object}
	 */
	this._build_resources = function() {
		var difficulty = this.get_core().get_difficulty();
		var _resources = this.resources;
		var _trades = {};
		if (!this.is_player()) {
			if (this.is_city() && typeof civitas.SETTLEMENTS[this.get_id()] !== 'undefined') {
				_trades = civitas.SETTLEMENTS[this.get_id()].trades.exports;
			}
			for (var item in civitas.RESOURCES) {
				if (typeof _resources[item] === 'undefined') {
					if (typeof _trades[item] !== 'undefined') {
						_resources[item] = civitas.utils.get_random_by_importance(_trades[item]);
					} else {
						_resources[item] = 0;
					}
				}
			}
		} else {
			for (var item in civitas.RESOURCES) {
				if (typeof civitas.START_RESOURCES[difficulty - 1][item] === 'undefined') {
					_resources[item] = 0;
				} else {
					_resources[item] = civitas.START_RESOURCES[difficulty - 1][item];
				}
			}
		}
		return _resources;
	};

	/**
	 * Add a specified amount of a resource to the storage of this settlement.
	 * 
	 * @public
	 * @param {String} item
	 * @param {Number} amount
	 * @returns {Boolean}
	 */
	this.add_to_storage = function(item, amount) {
		if (!civitas.utils.resource_exists(item)) {
			this.get_core().error('The resource you specified does not exist.');
			return false;
		}
		var res = this.get_resources();
		if (typeof res[item] !== 'undefined') {
			res[item] = res[item] + amount;
		} else {
			res[item] = amount;
		}
		return true;
	};
	
	/**
	 * Check if the settlement has the required coins to create this building.
	 * 
	 * @public
	 * @param {Number} coins
	 * @returns {Boolean}
	 */
	this.has_coins = function(coins) {
		var resources = this.get_resources();
		if (this.get_coins() - coins < 0) {
			this.get_core().error(this.get_name() + ' doesn`t have enough ' + civitas.utils.get_resource_name('coins') + '.');
			return false;
		}
		return true;
	};
	
	/**
	 * Check if this settlement has the specified goods in storage.
	 * 
	 * @public
	 * @param {String} resource
	 * @param {Number} amount
	 * @returns {Boolean}
	 */
	this.has_resources = function(resource, amount) {
		if (!civitas.utils.resource_exists(resource)) {
			this.get_core().error('The resource you specified does not exist.');
			return false;
		}
		var res = this.get_resources();
		if ((res[resource] - amount) < 0) {
			this.get_core().error(this.get_name() + ' does not have enough ' + civitas.utils.get_resource_name(resource) + '.');
			return false;
		}
		return true;
	};

	/**
	 * Get the list of all the buildings in this settlement.
	 * 
	 * @public
	 * @returns {Array}
	 */
	this.get_buildings = function() {
		return this.buildings;
	};

	/**
	 * Get the name of this settlement.
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_name = function() {
		return this.name;
	};

	/**
	 * Set the name of this settlement.
	 * 
	 * @public
	 * @param {String} value
	 * @returns {civitas.objects.settlement}
	 */
	this.set_name = function(value) {
		this.name = value;
		return this;
	};

	/**
	 * Return a pointer to the game core.
	 * 
	 * @public
	 * @returns {civitas.game}
	 */
	this.get_core = function() {
		return this.core;
	};

	/**
	 * Raise the level of this settlement.
	 * 
	 * @public
	 * @returns {civitas.objects.settlement}
	 */
	this.level_up = function() {
		var level = this.get_level();
		this.set_fame(civitas.LEVELS[level]);
		this.level++;
		this.calc_population();
		$('.citylevel').html(this.level);
		this.get_core().notify('The city of ' + this.get_name() + ' is now level ' + this.level + '.');
		return this;
	};

	/**
	 * Rename this settlement.
	 * 
	 * @public
	 * @param {String} value
	 * @returns {civitas.objects.settlement}
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
			if (typeof buildings[i] !== 'undefined') {
				if (buildings[i].type === handle) {
					return true;
				}
			}
		}
		return false;
	};

	/**
	 * Check if the settlement has a specific storage space.
	 * 
	 * @public
	 * @param {Number} quantity
	 * @returns {Boolean}
	 */
	this.has_storage_space_for = function(quantity) {
		var storage = this.get_storage_space();
		if (!this.has_storage_space(true)) {
			return false;
		}
		if ((storage.occupied + quantity) > storage.all) {
			this.get_core().error('There is no storage space in your city to accomodate the new goods.');
			return false;
		}
		return true;
	};
	
	/**
	 * Check if this settlement has enough storage space.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.has_storage_space = function(alert) {
		var storage = this.get_storage_space();
		if (storage.occupied >= storage.all) {
			if (alert === true) {
				this.get_core().error('There is no storage space in your city.');
			}
			return false;
		}
		return true;
	};
	
	/**
	 * Get the storage space of this settlement.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_storage_space = function() {
		var storage = 0;
		for (var item in this.get_resources()) {
			if ($.inArray(item, civitas.NON_RESOURCES) === -1) {
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
	 * @returns {civitas.objects.building|Boolean}
	 */
	this._create_buildings = function(building_type, hidden) {
		hidden = (typeof hidden !== 'undefined') && hidden === true ? true : false;
		if (typeof building_type === 'object') {
			for (var i = 0; i < building_type.length; i++) {
				var handle = typeof building_type[i].handle !== 'undefined' ? building_type[i].handle : building_type[i];
				var level = typeof building_type[i].level !== 'undefined' ? building_type[i].level : 1;
				var working = typeof building_type[i].working !== 'undefined' ? building_type[i].working : true;
				var _b = civitas.BUILDINGS.findIndexM(handle);
				if (_b !== false) {
					var _c = civitas.BUILDINGS[_b];
					if (level > 1) {
						_c.level = level;
					}
					var _building = new civitas.objects.building({
						settlement: this,
						type: handle,
						data: _c,
						hidden: hidden,
						working: working
					});
					this.buildings.push(_building);
					this.buildings_list.push({
						handle: handle,
						level: level,
						working: working
					});
				}
			}
		} else {
			var handle = typeof building_type.handle !== 'undefined' ? building_type.handle : building_type;
			var level = typeof building_type.level !== 'undefined' ? building_type.level : 1;
			var working = typeof building_type.working !== 'undefined' ? building_type.working : true;
			var _b = civitas.BUILDINGS.findIndexM(handle);
			if (_b !== false) {
				var _c = civitas.BUILDINGS[_b];
				if (level > 1) {
					_c.level = level;
				}
				var _building = new civitas.objects.building({
					settlement: this,
					type: handle,
					data: _c,
					hidden: hidden,
					working: working
				});
				this.buildings.push(_building);
				this.buildings_list.push({
					handle: handle,
					level: level,
					working: working
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
	 * @returns {civitas.objects.building|Boolean}
	 */
	this.build = function(building_type) {
		var _b = civitas.BUILDINGS.findIndexM(building_type);
		if (_b !== false) {
			var _c = civitas.BUILDINGS[_b];
			if ((typeof _c.requires.settlement_level !== 'undefined') && (this.level < _c.requires.settlement_level)) {
				this.get_core().error('Your city level is too low to construct this building.');
				return false;
			}
			if (typeof _c.requires.buildings !== 'undefined') {
				var required = _c.requires.buildings;
				for (var i = 0; i < required.length; i++) {
					if (!this.is_building_built(required[i])) {
						var _z = civitas.BUILDINGS.findIndexM(required[i]);
						_z = civitas.BUILDINGS[_z];
						this.get_core().error('You don`t have the required building ' + _z.name + '.');
						return false;
					}
				}
			}
			for (var item in _c.cost) {
				if ((this.get_resources()[item] - _c.cost[item]) < 0) {
					this.get_core().error('You don`t have enough ' + item + ' to construct this building.');
					return false;
				}
			}
			for (var item in _c.cost) {
				if ((this.get_resources()[item] - _c.cost[item]) >= 0) {
					this.get_resources()[item] = this.get_resources()[item] - _c.cost[item];
				}
			}
			var _building = new civitas.objects.building({
				settlement: this,
				type: building_type,
				data: _c
			});
			this.buildings.push(_building);
			this.buildings_list.push({
				handle: building_type,
				level: 1,
				stopped: false
			});
			this.raise_prestige();
			this.get_core().save_and_refresh();
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
	 * Get the rank of this settlement
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_rank = function() {
		var level = this.get_level();
		var half_level = Math.round(level / 2);
		return {
			fame: this.get_fame(),
			prestige: this.get_prestige(),
			espionage: this.get_espionage(),
			army: this.get_army_total().total,
			navy: this.get_navy_total().total,
			score: Math.floor((
				((this.get_fame() > 0 ? this.get_fame() : 1) / half_level)
				+ (this.get_prestige() / half_level)
				+ (this.get_espionage() / half_level)
				+ ((this.get_army_total().total > 0 ? this.get_army_total().total : 1) / half_level)
				+ ((this.get_navy_total().total > 0 ? this.get_navy_total().total : 1) / (half_level / 2))
			) / half_level)
		};
	};
	
	/**
	 * Return a pointer to the specified building in this settlement by the specified
	 * handle.
	 * 
	 * @public
	 * @param {String} handle
	 * @returns {civitas.objects.building|Boolean}
	 */
	this.get_building_by_handle = function(handle) {
		var buildings = this.get_buildings();
		for (var i = 0; i < buildings.length; i++) {
			if (typeof buildings[i] !== 'undefined') {
				if (buildings[i].get_type() === handle) {
					return buildings[i];
				}
			}
		}
		return false;
	};
	
	/**
	 * Demolish a settlement building
	 * 
	 * @public
	 * @param {Number|String} id
	 * @returns {Boolean}
	 */
	this.demolish = function(id) {
		if (typeof id === 'number') {
			if (id > 0) {
				this.buildings.splice(id, 1);
				this.buildings_list.splice(id, 1);
				return true;
			}
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
			}
 		}
		return false;
	};
	
	/**
	 * Get the coins this settlement has. This is the coins object.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_coins = function() {
		return this.resources.coins;
	};
	
	/**
	 * Increase this settlement's coins by the specified amount.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.inc_coins = function(value) {
		return this.set_coins(this.get_coins() + value);
	};
	
	/**
	 * Decrease this settlement's coins by the specified amount.
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
	 * Set this settlement's coins to the specified value.
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
	 * Set the coins of the settlement.
	 * 
	 * @public
	 * @param {Object} value
	 * @returns {civitas.objects.settlement}
	 */
	this.set_coins = function(value) {
		this.resources.coins = value;
		return this;
	};
	
	/**
	 * Remove a specific amount of a resource from this settlement's storage.
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
	 * Remove resources from this settlement's storage.
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
	 * Ask the City Council for tips.
	 * 
	 * @public
	 * @returns {Array}
	 */
	this.city_council = function() {
		var resources = this.get_resources();
		var storage = this.get_storage_space();
		var advices = [];
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
		if (storage.occupied >= storage.all) {
			advices.push('You have no storage space to store your new goods and they ' +
				'will be lost. Sell some goods or build a warehouse.');
		} else if ((storage.all - storage.occupied) < 100) {
			advices.push('You will soon run out of storage space and all goods produced ' +
				'will be lost. Sell some goods or build a warehouse.');
		}
		if (resources.coins < 1000) {
			advices.push('You seem to be losing coins fast, sell some goods or upgrade ' +
				'your houses to get better taxes.');
		}
		if (resources.wood < 100 || resources.stones < 100 || resources.woodplanks < 50) {
			advices.push('You are lacking construction materials, buy some stones, wood ' +
				'planks and/or wood off the World Trade Market.');
		}
		if (resources.prestige < 100) {
			advices.push('Your settlement`s prestige is too low, start doing trades with the other settlements to improve it.');
		}
		if (resources.faith >= 999) {
			advices.push('You are at maximum faith, start using it from your settlement`s Church.');
		}
		if (resources.research >= 999) {
			advices.push('You are at maximum research, start using it for settlement researches, from your Academy.');
		}
		if (resources.espionage >= 999) {
			advices.push('You are at maximum espionage, start using it for espionage missiong from your Embassy.');
		}
		if (resources.coins > 100000) {
			advices.push('You have lots of coins, why not invest some in goods?');
		}
		for (var item in this.resources) {
			if ($.inArray(item, civitas.NON_RESOURCES) === -1) {
				if (resources[item] > 1000) {
					advices.push('You seem to have a surplus of ' + civitas.utils.get_resource_name(item) + '. You can sell some and get coins instead.');
				}
			}
		}
		var buildings = this.get_buildings();
		var _buildings = [];
		for (var i = 0; i < buildings.length; i++) {
			if (buildings[i].has_problems()) {
				_buildings.push(buildings[i].get_name());
			}
		}
		if (_buildings.length > 0) {
			advices.push((_buildings.length === 1 ? 'One' : 'Several') + ' of your buildings (' + _buildings.join(', ') + ') ' + (_buildings.length === 1 ? 'is' : 'are') + ' not working due to a shortage of materials. Buy more goods.');
		}
		return advices;
	};
	
	/**
	 * Get the resources available in this settlement.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_resources = function() {
		return this.resources;
	};
	
	/**
	 * Set the resources of the settlement.
	 * 
	 * @public
	 * @param {Object} value
	 * @returns {civitas.objects.settlement}
	 */
	this.set_resources = function(value) {
		this.resources = value;
		return this;
	};

	/**
	 * Return the ruler object of this settlement.
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_ruler = function() {
		return this.ruler;
	};

	/**
	 * Return the ruler name of this settlement.
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_ruler_name = function() {
		return this.ruler.name;
	};

	/**
	 * Return the ruler personality of this settlement.
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_ruler_personality = function() {
		return this.ruler.personality;
	};

	/**
	 * Return the ruler nationality of this settlement.
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_ruler_nationality = function() {
		return this.ruler.nationality;
	};

	/**
	 * Set the ruler name of the settlement.
	 * 
	 * @public
	 * @param {String} value
	 * @returns {civitas.objects.settlement}
	 */
	this.set_ruler = function(value) {
		this.ruler = value;
		return this;
	};
	
	/**
	 * Set the level of the settlement.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {civitas.objects.settlement}
	 */
	this.set_level = function(value) {
		this.level = value;
		return this;
	};
	
	/**
	 * Return the level of this settlement.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_level = function() {
		return this.level;
	};

	/**
	 * Return the personality of the ruler of this settlement.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_personality = function() {
		return {
			id: this.ruler.personality,
			name: civitas.PERSONALITIES[this.ruler.personality]
		};
	};

	/**
	 * Return the climate of the area of this settlement.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_climate = function() {
		return {
			id: this.climate,
			name: civitas.CLIMATES[this.climate]
		};
	};

	/**
	 * Return the nationality of this settlement.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_nationality = function() {
		return {
			id: this.ruler.nationality,
			name: civitas.NATIONS[this.ruler.nationality]
		};
	};

	/**
	 * Get the icon of this settlement.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_icon = function() {
		return this.icon;
	};
	
	/**
	 * Set the icon of this settlement.
	 * 
	 * @public
	 * @returns {civitas.objects.settlement}
	 * @param {Number} value
	 */
	this.set_icon = function(value) {
		this.icon = value;
		return this;
	};

	/**
	 * Get the avatar of the ruler of this settlement.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_ruler_avatar = function() {
		return this.ruler.avatar;
	};
	
	/**
	 * Set the climate of this settlement.
	 * 
	 * @public
	 * @returns {civitas.objects.settlement}
	 * @param {Number} value
	 */
	this.set_climate = function(value) {
		this.climate = value;
		return this;
	};
	
	/**
	 * Set the nationality of this settlement.
	 * 
	 * @public
	 * @returns {civitas.objects.settlement}
	 * @param {Number} value
	 */
	this.set_nationality = function(value) {
		this.nationality = value;
		return this;
	};
	
	/**
	 * Get the list of settlement buildings, for export reasons.
	 *
	 * @public
	 * @returns {Array}
	 */
	this.get_buildings_list = function() {
		return this.buildings_list;
	};

	/**
	 * Get the id of this settlement.
	 *
	 * @public
	 * @returns {Number}
	 */
	this.get_id = function() {
		return this.id;
	};

	/**
	 * Set the id of this settlement.
	 *
	 * @public
	 * @param {Number}
	 * @returns {civitas.game}
	 */
	this.set_id = function(id) {
		this.id = id;
		return this;
	};

	/**
	 * Check if this settlement is a player settlement.
	 *
	 * @public
	 * @returns {Boolean}
	 */
	this.is_player = function() {
		return this.player;
	};

	/**
	 * Return the type of this settlement.
	 *
	 * @public
	 * @returns {Number}
	 */
	this.get_settlement_type = function() {
		return this.settlement_type;
	};

	/**
	 * Return the population of this settlement.
	 *
	 * @public
	 * @returns {Number}
	 */
	this.get_population = function() {
		return this.population;
	};

	/**
	 * Check if this settlement is a city.
	 *
	 * @public
	 * @returns {Boolean}
	 */
	this.is_city = function() {
		return this.settlement_type === civitas.CITY;
	};

	/**
	 * Calculate the number of people living in your settlement.
	 *
	 * @public
	 * @returns {Number}
	 */
	this.calc_population = function() {
		return this.population = this.get_level() * civitas.POPULATION_PER_LEVEL;
	};

	/**
	 * Check if this settlement is a village.
	 *
	 * @public
	 * @returns {Boolean}
	 */
	this.is_village = function() {
		return this.settlement_type === civitas.VILLAGE;
	};

	/**
	 * Refresh the heroes in the Tavern.
	 *
	 * @public
	 * @returns {civitas.objects.settlement}
	 */
	this.refresh_heroes = function() {
		if (this.is_building_built('tavern')) {
			// TODO
		}
	};

	/**
	 * Check if the player settlement's nationality and the one passed as parameter nationality are the same.
	 *
	 * @param {String|civitas.objects.settlement|Number} settlement
	 * @returns {Boolean}
	 * @public
	 */
	this.has_same_nationality = function(settlement) {
		if (typeof settlement === 'object' && this.get_nationality().id === settlement.get_nationality().id) {
			return true;
		} else if (typeof settlement === 'number' || typeof settlement === 'string') {
			settlement = this.get_core().get_settlement(settlement);
			if (this.get_nationality().id === settlement.get_nationality().id) {
				return true;
			}
		}
		return false;
	};

	// Fire up the constructor
	return this.__init(params);
};

/**
 * Check if this settlement can recruit soldiers.
 *
 * @public
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.can_research = function() {
	return this.is_building_built('academy');
};

/**
 * Return the value of this settlement's research.
 * 
 * @public
 * @returns {Number}
 */
civitas.objects.settlement.prototype.get_research = function() {
	return this.resources.research;
};

/**
 * Raise the research of this settlement by the specified amount.
 * 
 * @public
 * @param {Number} amount
 * @returns {Number}
 */
civitas.objects.settlement.prototype.raise_research = function(amount) {
	if (typeof amount === 'undefined') {
		amount = 1;
	}
	return this.set_research(this.get_research() + amount);
};

/**
 * Lower the research of this settlement by the specified amount.
 * 
 * @public
 * @param {Number} amount
 * @returns {Number}
 */
civitas.objects.settlement.prototype.lower_research = function(amount) {
	if (typeof amount === 'undefined') {
		amount = 1;
	}
	return this.set_research(this.get_research() - amount);
};

/**
 * Reset the research of this settlement to 1.
 * 
 * @returns {civitas.objects.settlement}
 * @public
 */
civitas.objects.settlement.prototype.reset_research = function() {
	this.resources.research = 1;
	return this;
};

/**
 * Set the research of this settlement.
 * 
 * @public
 * @returns {civitas.objects.settlement}
 * @param {Number} value
 */
civitas.objects.settlement.prototype.set_research = function(value) {
	if (this.resources.research >= civitas.MAX_RESEARCH_VALUE) {
		this.resources.research = civitas.MAX_RESEARCH_VALUE;
	} else if (value < 1 || this.resources.research < 1) {
		this.resources.research = 1;
	} else {
		this.resources.research = value;
	}
	$('.cityresearch').html(this.get_research());
	return this.get_research();
};

/**
 * Get the fame this settlement has.
 * 
 * @public
 * @returns {Object}
 */
civitas.objects.settlement.prototype.get_fame = function() {
	return this.resources.fame;
};

/**
 * Increase this settlement's fame by the specified amount.
 * 
 * @public
 * @param {Number} amount
 * @returns {Number}
 */
civitas.objects.settlement.prototype.raise_fame = function(amount) {
	if (typeof amount === 'undefined') {
		amount = 1;
	}
	return this.set_fame(this.get_fame() + amount);
};

/**
 * Decrease this settlement's fame by the specified amount.
 * 
 * @public
 * @param {Number} amount
 * @returns {Number}
 */
civitas.objects.settlement.prototype.lower_fame = function(amount) {
	if (typeof amount === 'undefined') {
		amount = 1;
	}
	return this.set_fame(this.get_fame() - amount);
};

/**
 * Set this settlement's fame to the specified value.
 * 
 * @public
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.settlement.prototype.set_fame = function(value) {
	var needed = civitas.LEVELS[this.get_level()];
	if (this.resources.fame >= civitas.LEVELS[civitas.MAX_SETTLEMENT_LEVEL - 1]) {
		this.resources.fame = civitas.LEVELS[civitas.MAX_SETTLEMENT_LEVEL - 1];
	} else if (value < 1 || this.resources.fame < 1) {
		this.resources.fame = 1;
	} else {
		this.resources.fame = value;
	}
	$('header .cityfame > span').css({
		width: Math.floor((this.get_fame() * 100) / needed) + '%'
	});
	return value;
};

/**
 * Reset the fame of this settlement to 1.
 * 
 * @returns {civitas.objects.settlement}
 * @public
 */
civitas.objects.settlement.prototype.reset_fame = function() {
	this.set_fame(1);
	return this;
};

/**
 * Change religion of your settlement.
 *
 * @public
 * @param {Number|String} id
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.change_religion = function(id) {
	if (this.get_faith() !== civitas.MAX_FAITH_VALUE && id !== 0) {
		if (this.is_player()) {
			this.get_core().error('You don`t have enough faith to switch religions.');
		}
		return false;
	}
	if ((typeof id === 'number' && this.get_religion().id === id) || (typeof id === 'string' && this.get_religion().name === id)) {
		if (this.is_player()) {
			this.get_core().error('You cannot switch religion to your already existing one.');
		}
		return false;
	}
	if (this.set_religion(id)) {
		this.reset_faith();
		this.refresh_heroes();
		if (this.is_player()) {
			this.get_core().notify('Your settlement`s new religion is <strong>' + this.get_religion().name.capitalize() + '</strong>');
		}
		this.get_core().save_and_refresh();
		return true;
	} else {
		if (this.is_player()) {
			this.get_core().error('Unable to switch religion to the specified one.');
		}
		return false;
	}
	return false;
};

/**
 * Set religion to the specified value.
 *
 * @public
 * @param {Number|String} value
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.set_religion = function(value) {
	if (typeof value === 'number') {
		this.religion = value;
		return true;
	} else if (typeof value === 'string') {
		var pos = $.inArray(value, civitas.RELIGIONS);
		if (pos !== -1) {
			this.religion = pos;
			return true;
		}
	}
	return false;
};

/**
 * Return the religion of this settlement.
 * 
 * @public
 * @returns {Object}
 */
civitas.objects.settlement.prototype.get_religion = function() {
	return {
		id: this.religion,
		name: civitas.RELIGIONS[this.religion]
	};
};

/**
 * Return the value of this settlement's faith.
 * 
 * @public
 * @returns {Number}
 */
civitas.objects.settlement.prototype.get_faith = function() {
	return this.resources.faith;
};

/**
 * Raise the faith of this settlement by the specified amount.
 * 
 * @public
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.settlement.prototype.raise_faith = function(value) {
	if (typeof value === 'undefined') {
		value = 1;
	}
	return this.set_faith(this.get_faith() + value);
};

/**
 * Lower the faith of this settlement by the specified amount.
 * 
 * @public
 * @param {Number} amount
 * @returns {Number}
 */
civitas.objects.settlement.prototype.lower_faith = function(value) {
	if (typeof value === 'undefined') {
		value = 1;
	}
	return this.set_faith(this.get_faith() - value);
};

/**
 * Reset the faith of this settlement to 1.
 * 
 * @returns {Number}
 * @public
 */
civitas.objects.settlement.prototype.reset_faith = function() {
	this.resources.faith = 1;
	return this;
};

/**
 * Set the faith of this settlement.
 * 
 * @public
 * @returns {Number}
 * @param {Number} value
 */
civitas.objects.settlement.prototype.set_faith = function(value) {
	if (this.resources.faith >= civitas.MAX_FAITH_VALUE) {
		this.resources.faith = civitas.MAX_FAITH_VALUE;
	} else if (value < 1 || this.resources.faith < 1) {
		this.resources.faith = 1;
	} else {
		this.resources.faith = value;
	}
	return this.get_faith();
};

/**
 * Return the value of this settlement's espionage.
 * 
 * @public
 * @returns {Number}
 */
civitas.objects.settlement.prototype.get_espionage = function() {
	return this.resources.espionage;
};

/**
 * Raise the espionage of this settlement by the specified amount.
 * 
 * @public
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.settlement.prototype.raise_espionage = function(value) {
	if (typeof value === 'undefined') {
		value = 1;
	}
	return this.set_espionage(this.get_espionage() + value);
};

/**
 * Lower the espionage of this settlement by the specified amount.
 * 
 * @public
 * @param {Number} amount
 * @returns {Number}
 */
civitas.objects.settlement.prototype.lower_espionage = function(value) {
	if (typeof value === 'undefined') {
		value = 1;
	}
	return this.set_espionage(this.get_espionage() - value);
};

/**
 * Reset the espionage of this settlement to 1.
 * 
 * @returns {Number}
 * @public
 */
civitas.objects.settlement.prototype.reset_espionage = function() {
	this.resources.espionage = 1;
	return this;
};

/**
 * Set the espionage of this settlement.
 * 
 * @public
 * @returns {Number}
 * @param {Number} value
 */
civitas.objects.settlement.prototype.set_espionage = function(value) {
	if (this.resources.espionage >= civitas.MAX_ESPIONAGE_VALUE) {
		this.resources.espionage = civitas.MAX_ESPIONAGE_VALUE;
	} else if (value < 1 || this.resources.espionage < 1) {
		this.resources.espionage = 1;
	} else {
		this.resources.espionage = value;
	}
	$('.cityespionage').html(this.get_espionage());
	return this.get_espionage();
};

/**
 * Return the value of this settlement's prestige.
 * 
 * @public
 * @returns {Number}
 */
civitas.objects.settlement.prototype.get_prestige = function() {
	return this.resources.prestige;
};

/**
 * Raise the prestige of this settlement by the specified amount.
 * 
 * @public
 * @param {Number} amount
 * @returns {Number}
 */
civitas.objects.settlement.prototype.raise_prestige = function(amount) {
	if (typeof amount === 'undefined') {
		amount = 1;
	}
	return this.set_prestige(this.get_prestige() + amount);
};

/**
 * Lower the prestige of this settlement by the specified amount.
 * 
 * @public
 * @param {Number} amount
 * @returns {Number}
 */
civitas.objects.settlement.prototype.lower_prestige = function(amount) {
	if (typeof amount === 'undefined') {
		amount = 1;
	}
	return this.set_prestige(this.get_prestige() - amount);
};

/**
 * Reset the prestige of this settlement to 1.
 * 
 * @returns {civitas.objects.settlement}
 * @public
 */
civitas.objects.settlement.prototype.reset_prestige = function() {
	this.resources.prestige = 1;
	return this;
};

/**
 * Set the prestige of this settlement.
 * 
 * @public
 * @returns {civitas.objects.settlement}
 * @param {Number} value
 */
civitas.objects.settlement.prototype.set_prestige = function(value) {
	if (this.resources.prestige >= civitas.MAX_PRESTIGE_VALUE) {
		this.resources.prestige = civitas.MAX_PRESTIGE_VALUE;
	} else if (value < 1 || this.resources.prestige < 1) {
		this.resources.prestige = 1;
	} else {
		this.resources.prestige = value;
	}
	$('.cityprestige').html(this.get_prestige());
	return this.get_prestige();
};

/**
 * Setup mercenary armies.
 *
 * @public
 * @param {Array} mercenary_list
 * @returns {civitas.objects.settlement}
 */
civitas.objects.settlement.prototype.setup_mercenary = function(mercenary_list) {
	for (var i = 0; i < mercenary_list.length; i++) {
		this.recruit_mercenary_army(mercenary_list[i], true);
	}
	return this;
};

/**
 * Get the list of settlement mercenary armies, for export reasons.
 *
 * @public
 * @returns {Array}
 */
civitas.objects.settlement.prototype.get_mercenary_list = function() {
	return this.mercenary_list;
};

/**
 * Check if this settlement can build ships.
 *
 * @public
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.can_build_ships = function() {
	return this.is_building_built('shipyard');
};

/**
 * Check if this settlement can recruit soldiers.
 *
 * @public
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.can_recruit_soldiers = function() {
	return this.is_building_built('camp') || this.is_building_built('castle');
};

/**
 * Recruit a soldier for the settlement's army.
 * 
 * @public
 * @param {String} name
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.recruit_mercenary_army = function(name, hidden) {
	for (var i = 0; i < civitas.MERCENARIES.length; i++) {
		if (name === civitas.MERCENARIES[i].handle) {
			var price = civitas.MERCENARIES[i].cost;
			if (this.dec_coins(price) === false) {
				return false;
			}
			var army = {
				id: i,
				handle: name,
				army: []
			};
			for (var item in civitas.MERCENARIES[i].army) {
				var soldier = civitas.SOLDIERS[item];
				var _soldier = new civitas.objects.soldier({
					name: item,
					settlement: this,
					data: soldier
				});
				army.army.push(_soldier);
			}
			this.mercenary.push(army);
			if (hidden !== true) {
				//this.mercenary_list.push(name);
				this.get_core().notify('The mercenaries of the ' + civitas.MERCENARIES[i].name + ' are now available for skirmish missions for the duration of one year.', 'Mercenaries recruited.');
				this.get_core().refresh();
				this.get_core().save();
			}
			return true;
		}
	}
	return false;
};

/**
 * Construct a ship for the settlement's navy.
 * 
 * @public
 * @param {String} ship_name
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.recruit_ship = function(ship_name) {
	for (var item in civitas.SHIPS) {
		if (ship_name === item) {
			var ship = civitas.SHIPS[item];
			if (!this.remove_resources(ship.cost)) {
				return false;
			}
			var _ship = new civitas.objects.ship({
				name: item,
				data: ship,
				settlement: this
			});
			this.navy.push(_ship);
			this.get_core().refresh();
			this.get_core().notify('A new ' + ship_name + ' ship has been constructed.', 'New ship');
			this.get_core().save();
			return true;
		}
	}
	return false;
};

/**
 * Recruit a soldier for the settlement's army.
 * 
 * @public
 * @param {String} soldier_name
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.recruit_soldier = function(soldier_name) {
	for (var item in civitas.SOLDIERS) {
		if (soldier_name === item) {
			var soldier = civitas.SOLDIERS[item];
			if (!this.remove_resources(soldier.cost)) {
				return false;
			}
			var _soldier = new civitas.objects.soldier({
				settlement: this,
				name: item,
				data: soldier
			});
			this.army.push(_soldier);
			this.get_core().save_and_refresh();
			this.get_core().notify('A new ' + soldier_name + ' has been recruited.', 'New soldier');
			return true;
		}
	}
	return false;
};

/**
 * Internal function for recruiting a ship for the settlement's navy.
 * 
 * @public
 * @param {String} ship_name
 * @returns {civitas.objects.settlement}
 */
civitas.objects.settlement.prototype._recruit_ship = function(ship_name) {
	for (var item in civitas.SHIPS) {
		if (ship_name === item) {
			var ship = civitas.SHIPS[item];
			var _ship = new civitas.objects.ship({
				name: item,
				data: ship,
				settlement: this
			});
			this.navy.push(_ship);
		}
	}
	return this;
};

/**
 * Internal function for recruiting a soldier for the settlement's army.
 * 
 * @public
 * @param {String} soldier_name
 * @returns {civitas.objects.settlement}
 */
civitas.objects.settlement.prototype._recruit_soldier = function(soldier_name) {
	for (var item in civitas.SOLDIERS) {
		if (soldier_name === item) {
			var soldier = civitas.SOLDIERS[item];
			var _soldier = new civitas.objects.soldier({
				name: item,
				data: soldier,
				settlement: this
			});
			this.army.push(_soldier);
		}
	}
	return this;
};

/**
 * Get the navy size of this settlement.
 * 
 * @public
 * @returns {Number}
 */
civitas.objects.settlement.prototype.get_navy_size = function() {
	return this.get_navy().length;
};

/**
 * Get the army size of this settlement.
 * 
 * @public
 * @returns {Number}
 */
civitas.objects.settlement.prototype.get_army_size = function() {
	return this.get_army().length;
};

/**
 * Disband a ship from the settlement's navy.
 * 
 * @public
 * @param {String} ship_name
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.disband_ship = function(ship_name) {
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
 * Disband a soldier from the settlement's army.
 * 
 * @public
 * @param {String} soldier_name
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.disband_soldier = function(soldier_name) {
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
 * Set the mercenaries of the settlement.
 * 
 * @public
 * @param {Number} value
 * @returns {civitas.objects.settlement}
 */
civitas.objects.settlement.prototype.set_mercenary = function(value) {
	this.mercenary = value;
	return this;
};

/**
 * Set the navy of the settlement.
 * 
 * @public
 * @param {Number} value
 * @returns {civitas.objects.settlement}
 */
civitas.objects.settlement.prototype.set_navy = function(value) {
	this.navy = value;
	return this;
};

/**
 * Set the soldiers of the settlement.
 * 
 * @public
 * @param {Number} value
 * @returns {civitas.objects.settlement}
 */
civitas.objects.settlement.prototype.set_army = function(value) {
	this.army = value;
	return this;
};

/**
 * Release all the mercenary armies.
 * 
 * @public
 * @returns {civitas.objects.settlement}
 */
civitas.objects.settlement.prototype.release_mercenaries = function() {
	this.mercenary = [];
	this.get_core().notify('At the end of the year, mercenaries from your city have been released.');
	return this;
};

/**
 * Setup the navy of this settlement.
 * 
 * @public
 * @param {Boolean} hidden
 * @param {Object} data
 * @returns {civitas.objects.settlement}
 */
civitas.objects.settlement.prototype.setup_navy = function(data, hidden) {
	if (typeof hidden === 'undefined') {
		hidden = true;
	}
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
		var navy = data;
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
 * Setup the army of this settlement.
 * 
 * @public
 * @param {Boolean} hidden
 * @param {Object} data
 * @returns {civitas.objects.settlement}
 */
civitas.objects.settlement.prototype.setup_army = function(data, hidden) {
	if (typeof hidden === 'undefined') {
		hidden = true;
	}
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
		var army = data;
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
 * Get the total number of soldiers available in this settlement.
 * 
 * @public
 * @returns {Number}
 */
civitas.objects.settlement.prototype.get_army = function() {
	return this.army;
};
	
/**
 * Get the total number of ships available in this settlement.
 * 
 * @public
 * @returns {Number}
 */
civitas.objects.settlement.prototype.get_navy = function() {
	return this.navy;
};

/**
 * Get the total number of mercenaries available for this settlement.
 * 
 * @public
 * @returns {Number}
 */
civitas.objects.settlement.prototype.get_mercenary = function() {
	return this.mercenary;
};

/**
 * Get the navy of this settlement in an object format.
 * 
 * @public
 * @returns {Object}
 */
civitas.objects.settlement.prototype.get_navy_total = function() {
	var total = 0;
	var total_navy = {};
	for (var item in civitas.SHIPS) {
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
 * Get the army of this settlement in an object format.
 * 
 * @public
 * @returns {Object}
 */
civitas.objects.settlement.prototype.get_army_total = function() {
	var total = 0;
	var total_army = {};
	for (var item in civitas.SOLDIERS) {
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
 * Get the mercenaries of this settlement in an object format.
 * 
 * @public
 * @returns {Object}
 */
civitas.objects.settlement.prototype.get_mercenary_total = function() {
	var total = 0;
	var total_army = {};
	for (var item in civitas.SOLDIERS) {
		total_army[item] = 0;
	}
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
 * Check if this mercenary army has already been recruited.
 * 
 * @public
 * @param {String} handle
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.is_mercenary_recruited = function(handle) {
	for (var i = 0; i < this.mercenary.length; i++) {
		if (this.mercenary[i].handle === handle) {
			return true;
		}
	}
	return false;
};

/**
 * Perform diplomacy missions.
 *
 * @public
 * @param {Number|civitas.objects.settlement|String} settlement
 * @param {Number} mode
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.diplomacy = function(settlement, mode) {
	if (this.can_diplomacy() === true) {
		if (typeof settlement === 'number') {
			this.status[settlement].status = mode;
			if (mode === civitas.DIPLOMACY_WAR) {
				this.status[settlement].influence = 0;
			}
		} else if (typeof settlement === 'object') {
			this.status[settlement.get_id()].status = mode;
			if (mode === civitas.DIPLOMACY_WAR) {
				this.status[settlement].influence = 0;
			}
		} else {

		}
		this.get_core().save_and_refresh();
		return true;
	}
	return false;
};

/**
 * Check if this settlement can conduct diplomacy missions.
 *
 * @public
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.can_diplomacy = function() {
	return this.is_building_built('embassy');
};

/**
 * Returns the influenceof this settlement with a specific settlement.
 * 
 * @public
 * @param {String} settlement
 * @returns {Number}
 */
civitas.objects.settlement.prototype.get_influence_with_settlement = function(settlement) {
	if (typeof settlement === 'number') {
		return this.status[settlement].influence;
	} else if (typeof settlement === 'object') {
		return this.status[settlement.get_id()].influence;
	} else if (typeof settlement === 'string') {
		return this.status[this.get_core().get_settlement(settlement)].influence;
	}
};
	
/**
 * Set the influence of this settlement.
 * 
 * @public
 * @returns {civitas.objects.settlement}
 * @param {Object} value
 */
civitas.objects.settlement.prototype.set_status = function(value) {
	this.status = value;
	return this;
};
	
/**
 * Decrease the influence of this settlement.
 * 
 * @public
 * @param {String} settlement
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.settlement.prototype.lower_influence = function(settlement, value) {
	if (typeof value === 'undefined') {
		value = 1;
	}
	return this.set_influence(settlement, this.get_influence_with_settlement(settlement) - value);
};

/**
 * Set the influence with the specified settlement to this value.
 *
 * @public
 * @param {civitas.objects.settlement} settlement
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.settlement.prototype.set_influence = function(settlement, value) {
	if (typeof settlement === 'object') {
		settlement = settlement.get_id();;
	} else if (typeof settlement === 'string') {
		settlement = this.get_core().get_settlement(settlement);
	}
	if (this.status[settlement].influence >= civitas.MAX_INFLUENCE_VALUE) {
		this.status[settlement].influence = civitas.MAX_INFLUENCE_VALUE;
	} else if (value < 1 || this.status[settlement].influence < 1) {
		this.status[settlement].influence = 1;
	} else {
		this.status[settlement].influence = value;
	}
	return this.get_influence_with_settlement(settlement);
};

/**
 * Increase the influence of this settlement.
 * 
 * @public
 * @param {String} settlement
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.settlement.prototype.raise_influence = function(settlement, value) {
	if (typeof value === 'undefined') {
		value = 1;
	}
	return this.set_influence(settlement, this.get_influence_with_settlement(settlement) + value);
};
	
/**
 * Return all the status of this settlement with all the other cities.
 * 
 * @public
 * @returns {Object}
 */
civitas.objects.settlement.prototype.get_status = function() {
	return this.status;
};
	
/**
 * Return the diplomacy status of this settlement.
 * 
 * @public
 * @returns {Object}
 */
civitas.objects.settlement.prototype.get_diplomacy_status = function(settlement) {
	return {
		id: this.status[settlement].status,
		name: civitas.DIPLOMACIES[this.status[settlement].status]
	};
};

/**
 * Propose a pact to the specified settlement.
 *
 * @public
 * @returns {civitas.objects.settlement}
 * @param {civitas.objects.settlement}
 */
civitas.objects.settlement.prototype.propose_pact = function(settlement) {
	if (this.can_diplomacy() === true) {
		// TODO
		return true;
	}
	return false
};

/**
 * Assign a spy to the specified settlement.
 *
 * @public
 * @returns {civitas.objects.settlement}
 * @param {civitas.objects.settlement}
 */
civitas.objects.settlement.prototype.assign_spy = function(settlement) {
	if (this.can_diplomacy() === true) {
		// TODO
		return true;
	}
	return false
};

/**
 * Check if this settlement can trade resources.
 *
 * @public
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.can_trade = function() {
	return this.is_building_built('tradingpost');
};

/**
 * Buy the specified goods from a settlement.
 * 
 * @public
 * @param {civitas.objects.settlement|String|Number} settlement
 * @param {String} resource
 * @param {Number} amount
 * @returns {Object|Boolean}
 */
civitas.objects.settlement.prototype.buy_from_settlement = function(settlement, resource, amount) {
	if (!civitas.utils.resource_exists(resource)) {
		this.get_core().error('The resource you specified does not exist.');
		return false;
	}
	if (this.can_trade()) {
		var resources = this.get_resources();
		var _settlement;
		if (typeof settlement === 'string' || typeof settlement === 'number') {
			_settlement = this.get_core().get_settlement(settlement);
			if (settlement === false) {
				this.get_core().error(settlement + ' does not exist.');
				return false;
			}
		} else {
			_settlement = settlement;
		}
		var is_double = this.get_religion().id === _settlement.get_religion().id ? true : false;
		var trades = _settlement.get_trades();
		if (trades === null) {
			this.get_core().error(settlement + ' does not trade any goods.');
			return false;
		}
		if (typeof trades.exports === 'undefined') {
			this.get_core().error(settlement + ' does not export any goods.');
			return false;
		}
		for (var item in trades.exports) {
			if (item === resource) {
				if (typeof amount === 'undefined') {
					amount = trades.exports[item];
				}
				var discount = Math.ceil((civitas.RESOURCES[item].price * civitas.TRADES_ADDITION) / 100);
				var price = civitas.utils.calc_price_plus_discount(amount, item, discount);
				var settlement_price = civitas.utils.calc_price(amount, item);
				var item_discount_price = Math.ceil(civitas.RESOURCES[item].price + discount);
				if (!this.has_storage_space_for(amount)) {
					return false;
				}
				if (this.dec_coins(price) === false) {
					return false;
				}
				if (!_settlement.remove_resource(item, amount)) {
					return false;
				}
				_settlement.inc_coins(settlement_price);
				this.add_to_storage(item, amount);
				this.remove_from_exports(_settlement, item, amount);
				this.raise_influence(_settlement.get_id(), (is_double ? civitas.IMPORT_INFLUENCE * 2 : civitas.IMPORT_INFLUENCE));
				this.raise_prestige(is_double ? civitas.IMPORT_PRESTIGE * 2 : civitas.IMPORT_PRESTIGE);
				this.raise_fame(50);
				this.get_core().refresh();
				this.get_core().notify(this.get_name() + ' bought <strong>' + amount + '</strong> ' + civitas.utils.get_resource_name(item) + ' from ' + settlement + ' for <strong>' + item_discount_price + '</strong> coins each, for a total of <strong>' + price + '</strong> coins.', civitas.l('World Market'));
				return {
					buyer: this.get_name(),
					amount: amount,
					goods: civitas.utils.get_resource_name(item),
					seller: settlement,
					price: Math.round(civitas.RESOURCES[item].price + discount),
					totalPrice: price
				};
			}
		}
		this.get_core().error(settlement + ' does not export the requested goods.');
	}
	return false;
};
	
/**
 * Perform a trades reset (resets all amounts of resources available
 * for trade and randomize the amount.
 * 
 * @public
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.reset_trades = function() {
	var trades = {
		'imports': {},
		'exports': {}
	};
	var amount = 0;
	if (typeof civitas.SETTLEMENTS[this.get_id()] !== 'undefined') {
		var _trades = civitas.SETTLEMENTS[this.get_id()].trades;
		for (var goods_type in _trades) {
			for (var item in _trades[goods_type]) {
				amount = civitas.utils.get_random_by_importance(_trades[goods_type][item])
				if (goods_type === 'exports') {
					if (this.resources[item] < amount) {
						this.resources[item] += amount;
					}
					/* else {
						this.resources[item] = Math.floor(this.resources[item] / 2);
					}*/
				}
				trades[goods_type][item] = amount;
			}
		}
		this.trades = trades;
		return true;
	} else {
		this.trades = trades;
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
civitas.objects.settlement.prototype.list_black_market = function(resource, amount) {
	if (!civitas.utils.resource_exists(resource)) {
		this.get_core().error('The resource you specified does not exist.');
		return false;
	}
	var resources = this.get_resources();
	if (this.remove_resource(resource, amount)) {
		var discount = Math.ceil((civitas.RESOURCES[resource].price * civitas.BLACK_MARKET_DISCOUNT) / 100);
		var price = civitas.utils.calc_price_minus_discount(amount, resource, discount);
		this.get_core().add_black_market(resource, amount, price);
		this.get_core().refresh();
		this.get_core().notify(this.get_name() + ' placed ' + amount + ' ' + civitas.utils.get_resource_name(resource) + ' on the Black Market and will receive ' + price + ' coins next month.', civitas.l('Black Market'));
		return {
			seller: this.get_name(),
			amount: amount,
			goods: civitas.utils.get_resource_name(resource),
			price: price,
			discount: discount
		};
	}
	return false;
};
	
/**
 * Sell the specified goods to a settlement.
 * 
 * @public
 * @param {civitas.objects.settlement|String|Number} settlement
 * @param {String} resource
 * @param {Number} amount
 * @returns {Object|Boolean}
 */
civitas.objects.settlement.prototype.sell_to_settlement = function(settlement, resource, amount) {
	if (!civitas.utils.resource_exists(resource)) {
		this.get_core().error('The resource you specified does not exist.');
		return false;
	}
	if (this.can_trade()) {
		var resources = this.get_resources();
		var _settlement;
		if (typeof settlement === 'string' || typeof settlement === 'number') {
			_settlement = this.get_core().get_settlement(settlement);
			if (settlement === false) {
				this.get_core().error(settlement + ' does not exist.');
				return false;
			}
		} else {
			_settlement = settlement;
		}
		var is_double = this.get_religion().id === _settlement.get_religion().id ? true : false;
		var trades = _settlement.get_trades();
		if (trades === null) {
			this.get_core().error(settlement + ' does not trade any goods.');
			return false;
		}
		if (typeof trades.imports === 'undefined') {
			this.get_core().error(settlement + ' does not import any goods.');
			return false;
		}
		for (var item in trades.imports) {
			if (item === resource) {
				if (typeof amount === 'undefined') {
					amount = trades.imports[item];
				}
				var discount = Math.ceil((civitas.RESOURCES[item].price * civitas.TRADES_DISCOUNT) / 100);
				var price = civitas.utils.calc_price_minus_discount(amount, item, discount);
				var settlement_price = civitas.utils.calc_price(amount, item);
				var item_discount_price = Math.ceil(civitas.RESOURCES[item].price - discount);
				if (!this.remove_resource(item, amount)) {
					return false;
				}
				this.inc_coins(price);
				if (!_settlement.dec_coins(settlement_price)) {
					this.get_core().error(settlement + ' does not have enough coins.');
					return false;
				}
				_settlement.add_to_storage(item, amount);
				this.remove_from_imports(_settlement, item, amount);
				this.raise_influence(_settlement.get_id(), (is_double ? civitas.EXPORT_INFLUENCE * 2 : civitas.EXPORT_INFLUENCE));
				this.raise_prestige(is_double ? civitas.EXPORT_PRESTIGE * 2 : civitas.EXPORT_PRESTIGE);
				this.raise_fame(50);
				this.get_core().refresh();
				this.get_core().notify(this.get_name() + ' sold <strong>' + amount + '</strong> ' + civitas.utils.get_resource_name(item) + ' to ' + settlement + ' for <strong>' + item_discount_price + '</strong> coins each, for a total of <strong>' + price + '</strong> coins.', civitas.l('World Market'));
				return {
					seller: this.get_name(),
					amount: amount,
					goods: civitas.utils.get_resource_name(item),
					buyer: settlement,
					price: Math.round(civitas.RESOURCES[item].price - discount),
					totalPrice: price
				};
			}
		}
		this.get_core().error(settlement + ' does not import the specified goods.');
	}
	return false;
};
	
/**
 * Remove a specified amount of a resource from the trade exports of a settlement.
 * 
 * @public
 * @param {civitas.objects.settlement} settlement
 * @param {String} item
 * @param {Number} amount
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.remove_from_exports = function(settlement, item, amount) {
	settlement.trades.exports[item] = settlement.trades.exports[item] - amount;
	return true;
};

/**
 * Remove a specified amount of a resource from the trade imports of a settlement.
 * 
 * @public
 * @param {civitas.objects.settlement} settlement
 * @param {String} item
 * @param {Number} amount
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.remove_from_imports = function(settlement, item, amount) {
	settlement.trades.imports[item] = settlement.trades.imports[item] - amount;
	return true;
};

/**
 * Get the imports and exports of this settlement.
 * 
 * @public
 * @returns {Object}
 */
civitas.objects.settlement.prototype.get_trades = function() {
	return this.trades;
};
	
/**
 * Set the imports and exports of this settlement.
 * 
 * @public
 * @param {Object} value
 * @returns {civitas.objects.settlement}
 */
civitas.objects.settlement.prototype.set_trades = function(value) {
	this.trades = value;
	return this;
};
	
/**
 * Main Game event object.
 * 
 * @param {Object} params
 * @class {civitas.objects.event}
 * @returns {civitas.objects.event}
 */
civitas.objects.event = function (params) {

	/**
	 * Reference to the core object.
	 * 
	 * @type {civitas.game}
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
	 * @returns {civitas.objects.event}
	 * @param {Object} params
	 */
	this.__init = function (params) {
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
		if (random <= this.chance) {
			this._process();
			return true;
		}
		return false;
	};

	/**
	 * Notify the player that this event occured.
	 *
	 * @public
	 * @returns {civitas.objects.event}
	 */
	this.notify = function() {
		this.core._notify({
			title: 'Event occured: ' + this.name,
			content: this.description
				.replace(/SETTLEMENT/g, this.data.settlement)
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
	 * @returns {civitas.objects.event}
	 */
	this._process = function () {
		this.notify();
		var with_settlement = this.core.get_settlement(this.data.settlement);
		switch (this.effect) {
			case civitas.EVENT_EFFECT_LOSE_COINS:
				this.core.get_settlement().dec_coins(this.data.amount);
				break;
			case civitas.EVENT_EFFECT_GAIN_COINS:
				this.core.get_settlement().inc_coins(this.data.amount);
				break;
			case civitas.EVENT_EFFECT_RAISE_INFLUENCE:
				this.core.get_settlement().raise_influence(with_settlement.get_id(), this.data.amount, 'city');
				break;
			case civitas.EVENT_EFFECT_LOWER_INFLUENCE:
				this.core.get_settlement().lower_influence(with_settlement.get_id(), this.data.amount, 'city');
				break;
			case civitas.EVENT_EFFECT_GAIN_FAME:
				this.core.get_settlement().raise_fame(this.data.amount);
				break;
			case civitas.EVENT_EFFECT_LOSE_FAME:
				this.core.get_settlement().lower_fame(this.data.amount);
				break;
			case civitas.EVENT_EFFECT_GAIN_ESPIONAGE:
				this.core.get_settlement().raise_espionage(this.data.amount);
				break;
			case civitas.EVENT_EFFECT_LOSE_ESPIONAGE:
				this.core.get_settlement().lower_espionage(this.data.amount);
				break;
			case civitas.EVENT_EFFECT_DESTROY_BUILDING:
				break;
		}
		return this;
	};

	// Fire up the constructor
	return this.__init(params);
};

/**
 * Main Game building object.
 * 
 * @param {Object} params
 * @class {civitas.objects.building}
 * @returns {civitas.objects.building}
 */
civitas.objects.building = function(params) {

	/**
	 * The level of this building.
	 * 
	 * @type {Number}
	 * @private
	 */
	this.level = 1;

	/**
	 * Pointer to the settlement this building is located in.
	 * 
	 * @type {civitas.objects.settlement}
	 * @private
	 */
	this.settlement = null;

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
	 * @returns {civitas.objects.building}
	 * @param {Object} params
	 */
	this.__init = function(params) {
		var self = this;
		this.settlement = params.settlement;
		this.type = params.type;
		this.name = params.data.name;
		this.is_production = (typeof params.data.is_production !== 'undefined' && params.data.is_production === true) ? true : false;
		this.is_municipal = (typeof params.data.is_municipal !== 'undefined' && params.data.is_municipal === true) ? true : false;
		this.is_housing = (typeof params.data.is_housing !== 'undefined' && params.data.is_housing === true) ? true : false;
		this.level = (typeof params.data.level !== 'undefined') ? params.data.level : 1;
		this.working = (typeof params.working !== 'undefined') ? params.working : true;
		this.handle = params.data.handle;
		params.data.level = this.get_level();
		if (params.hidden !== true) {
			$('section.game').append(civitas.ui.building_element(params)).on('click', '#building-' + this.get_handle(), function() {
				var panel = civitas['PANEL_' + self.get_handle().toUpperCase()];
				if (typeof panel !== 'undefined') {
					self.get_core().open_panel(panel, params.data);
				} else {
					self.get_core().open_panel(civitas.PANEL_BUILDING, params.data);
				}
				return false;
			});
		}
		var building = this.get_building_data();
		switch (this.get_type()) {
			case 'marketplace':
			case 'warehouse':
				this.get_settlement().storage = this.get_settlement().storage + (building.storage * this.get_level());
				break;
		}
		if (params.hidden !== true) {
			if (this.working === false) {
				this.problems = true;
				this.notify(civitas.NOTIFICATION_PRODUCTION_PAUSED);
			} else {
				this.problems = false;
				$('#building-' + this.get_handle()).empty();
			}
			this.get_core().refresh();
		}
		return this;
	};

	/**
	 * Check if the building can be upgraded.
	 *
	 * @returns {Boolean}
	 * @public
	 */
	this.is_upgradable = function() {
		var building = this.get_building_data();
		if (this.get_level() < building.levels) {
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
		var settlement = this.get_settlement();
		var resources = settlement.get_resources();
		var next_level = this.get_level() + 1;
		var _b = civitas.BUILDINGS.findIndexM(this.get_type());
		if (_b !== false) {
			var _c = civitas.BUILDINGS[_b];
			if (this.is_upgradable() === true) {
				var bl_id = settlement.buildings_list.findIndexM(this.get_type());
				if (bl_id !== false) {
					for (var item in _c.cost) {
						if ((settlement.get_resources()[item] - (_c.cost[item] * next_level)) < 0) {
							this.get_core().error('You don`t have enough ' + item + ' to upgrade this building.');
							return false;
						}
					}
					for (var item in _c.cost) {
						if ((settlement.get_resources()[item] - (_c.cost[item] * next_level)) >= 0) {
							settlement.get_resources()[item] = settlement.get_resources()[item] - (_c.cost[item] * next_level);
						}
					}
					++this.level;
					var building_image = self.get_type();
					if (self.get_type().slice(0, -1) === 'house') {
						building_image = self.get_type().slice(0, -1);
					}
					var image = (typeof _c.visible_upgrades === 'undefined' || _c.visible_upgrades === false) ? building_image + '1' : building_image + self.get_level();
					$('section.game .building[data-type=' + this.get_type() + ']').css({
						'background-image': 'url(./images/buildings/' + image + '.png)'
					});
					if (typeof _c.storage !== 'undefined') {
						this.get_settlement().storage = this.get_settlement().storage + _c.storage;
					}
					this.get_settlement().buildings_list[bl_id].level = this.get_level();
					this.get_core().save_and_refresh();
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
		if (this.get_level() > 1) {
			var bl_id = this.get_settlement().buildings_list.findIndexM(this.get_type());
			if (bl_id !== false) {
				--this.level;
				this.get_settlement().buildings_list[bl_id].level = this.get_level();
				this.get_core().save_and_refresh();
				this.get_core().notify(this.get_name() + ' downgraded to level ' + this.get_level());
				return true;
			}
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
	 * Check if this building is a municipal building.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.is_municipal_building = function() {
		return this.is_municipal;
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
		var bl_id = this.get_settlement().buildings_list.findIndexM(this.get_type());
		if (bl_id !== false) {
			if (this.is_production_building()) {
				this.get_core().notify(this.get_name() + '`s production started.');
				this.get_settlement().buildings_list[bl_id].working = true;
				this.working = true;
				this.problems = false;
				this.get_core().save_and_refresh();
				$('#building-' + this.get_handle()).empty();
				return true;
			}
		}
		return false;
	};

	/**
	 * Stop this building's production
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.stop_production = function() {
		var bl_id = this.get_settlement().buildings_list.findIndexM(this.get_type());
		if (bl_id !== false) {
			if (this.is_production_building()) {
				this.get_core().notify(this.get_name() + '`s production stopped.');
				this.get_settlement().buildings_list[bl_id].working = false;
				this.working = false;
				this.problems = true;
				this.get_core().save_and_refresh();
				this.notify(civitas.NOTIFICATION_PRODUCTION_PAUSED);
				return true;
			}
		}
		return false;
	};

	/**
	 * Demolish this building and remove it from the DOM.
	 * 
	 * @public
	 * @returns {boolean}
	 */
	this.demolish = function() {
		if (this.get_settlement().demolish(this.get_type())) {
			$('section.game .building[data-type=' + this.get_type() + ']').remove();
			this.get_core().notify(this.get_name() + ' demolished successfully!');
			return true;
		} else {
			this.get_core().error('Unable to demolish the specified building `' + this.get_name() + '`!');
			return false;
		}
	};

	/**
	 * Check if the settlement has the required materials to create this building.
	 * 
	 * @public
	 * @param {Array|String} mats
	 * @returns {Boolean}
	 */
	this.has_materials = function(mats) {
		var building = this.get_building_data();
		var res = this.get_settlement_resources();
		var mat = building.materials;
		if (typeof mats === 'object') {
			for (var i = 0; i < mats.length; i++) {
				if (mats[i] !== 'coins') {
					if (res[mats[i]] - mat[mats[i]] < 0) {
						this.get_core().log(this.get_name() + ' doesn`t have enough ' + mats[i] + '.', true);
						this.notify(civitas.NOTIFICATION_MISSING_RESOURCES);
						this.problems = true;
						return false;
					}
				}
			}
		} else {
			if (res[mats] - mat[mats] < 0) {
				this.get_core().log(this.get_name() + ' doesn`t have enough ' + mats + '.', true);
				this.notify(civitas.NOTIFICATION_MISSING_RESOURCES);
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
	 * @returns {civitas.objects.building}
	 */
	this.use_material = function(material) {
		var building = this.get_building_data();
		var mat = building.materials;
		if (typeof material === 'object') {
			for (var i = 0; i < material.length; i++) {
				this.get_settlement().remove_resource(material[i], mat[material[i]]);
				this.get_core().log(this.get_name() + ' used ' + mat[material[i]] + ' ' + material[i] + '.');
			}
		} else {
			this.get_settlement().remove_resource(material, mat[material]);
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
		return civitas.BUILDINGS[civitas.BUILDINGS.findIndexM(this.type)];
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
	 * Get the settlement resources object
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_settlement_resources = function() {
		return this.get_settlement().get_resources();
	};

	/**
	 * Produce the materials.
	 * 
	 * @public
	 * @param {String|Array} material
	 * @returns {civitas.objects.building}
	 */
	this.produce_material = function(material) {
		var settlement = this.get_settlement();
		var resources = settlement.get_resources();
		var building = this.get_building_data();
		var prd = building.production;
		if (typeof material === 'object') {
			for (var i = 0; i < material.length; i++) {
				if (!this.is_producing()) {
					return this;
				}
				var amount = prd[material[i]] * this.get_level();
				if (this.get_settlement().has_storage_space_for(amount)) {
					this.get_settlement().add_to_storage(material[i], amount);
					if (typeof building.chance !== 'undefined') {
						for (var item in building.chance) {
							var rnd = Math.random();
							if (rnd < building.chance[item] * this.get_level()) {
								this.get_core().log(this.get_name() + ' procced extra ' + civitas.utils.get_resource_name(item) + '.');
								this.get_settlement().add_to_storage(item, 1);
							}
						}
					}
					this.get_core().log(this.get_name() + ' produced ' + amount + ' ' + material[i] + '.');
				}
			}
		} else {
			var amount = prd[material] * this.get_level();
			if (this.get_settlement().has_storage_space_for(amount)) {
				if (!this.is_producing()) {
					return this;
				}
				this.get_settlement().add_to_storage(material, amount);
				if (typeof building.chance !== 'undefined') {
					for (var item in building.chance) {
						var rnd = Math.random();
						if (rnd < building.chance[item]) {
							this.get_core().log(this.get_name() + ' procced extra ' + civitas.utils.get_resource_name(item) + '.');
							this.get_settlement().add_to_storage(item, 1);
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
	 * @returns {civitas.objects.building}
	 * @param {String|Array} mats_production
	 * @param {String|Array} mats_use
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
	 * Raise the prestige of the settlement this building is located in.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.adjust_settlement_prestige = function() {
		var building = this.get_building_data();
		var prd = building.production;
		var amount = prd.prestige;
		this.get_settlement().raise_prestige(amount * this.get_level());
		this.get_core().log(this.get_name() + ' raised settlement prestige by ' + amount + '.');
		return this.get_settlement().get_prestige();
	};

	/**
	 * Raise the faith of the settlement this building is located in.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.adjust_settlement_faith = function() {
		var building = this.get_building_data();
		var prd = building.production;
		var amount = prd.faith;
		this.get_settlement().raise_faith(amount * this.get_level());
		this.get_core().log(this.get_name() + ' raised settlement faith by ' + amount + '.');
		return this.get_settlement().get_faith();
	};

	/**
	 * Raise the espionage of the settlement this building is located in.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.adjust_settlement_espionage = function() {
		var building = this.get_building_data();
		var prd = building.production;
		var amount = prd.espionage;
		this.get_settlement().raise_espionage(amount * this.get_level());
		this.get_core().log(this.get_name() + ' raised settlement espionage by ' + amount + '.');
		return this.get_settlement().get_espionage();
	};

	/**
	 * Raise the fame of the settlement this building is located in.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.adjust_settlement_fame = function() {
		var building = this.get_building_data();
		var prd = building.production;
		var amount = prd.fame * this.get_level();
		this.get_settlement().raise_fame(amount * this.get_level());
		this.get_core().log(this.get_name() + ' raised settlement fame by ' + amount + '.');
		return this.get_settlement().get_fame();
	};

	/**
	 * Raise the research of the settlement this building is located in by converting
	 * coins into research.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.adjust_settlement_research_for_coins = function() {
		var building = this.get_building_data();
		var mat = building.materials;
		var prd = building.production;
		if (this.get_settlement().has_coins(mat.coins)) {
			var amount = prd.research * this.get_level();
			this.get_settlement().raise_research(amount * this.get_level());
			this.get_settlement().dec_coins(mat.coins);
			this.get_core().log(this.get_name() + ' raised settlement research with ' + amount + ' at the cost of ' + mat.coins + ' coins.');
		}
		return {
			research: this.get_settlement().get_research(),
			coins: this.get_settlement().get_coins()
		};
	};

	/**
	 * Raise the fame of the settlement this building is located in by converting
	 * coins into fame.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.adjust_settlement_fame_for_coins = function() {
		var building = this.get_building_data();
		var mat = building.materials;
		var prd = building.production;
		if (this.get_settlement().has_coins(mat.coins)) {
			var amount = prd.fame * this.get_level();
			this.get_settlement().raise_fame(amount * this.get_level());
			this.get_settlement().dec_coins(mat.coins);
			this.get_core().log(this.get_name() + ' raised settlement fame with ' + amount + ' at the cost of ' + mat.coins + ' coins.');
		}
		return {
			fame: this.get_settlement().get_fame(),
			coins: this.get_settlement().get_coins()
		};
	};

	/**
	 * Calculate if the house has the required food and processes the tax.
	 * 
	 * @public
	 * @returns {civitas.objects.building}
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
				this.get_settlement().inc_coins(amount);
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
			for (var i = 0; i < required.length; i++) {
				if (!this.get_settlement().is_building_built(required[i])) {
					good = false;
					var req = civitas.BUILDINGS[civitas.BUILDINGS.findIndexM(required[i])];
					this.get_core().log(this.get_name() + ' doesn`t have the required buildings: ' + req.name + '.', true);
					this.notify(civitas.NOTIFICATION_MISSING_RESOURCES);
					this.problems = true;
				}
			}
		}
		if (typeof building.requires.settlement_level !== 'undefined') {
			if (building.requires.settlement_level > this.get_settlement().get_level()) {
				this.get_core().log('Your settlement level is too low for ' + this.get_name() + ' to be active.', true);
				this.notify(civitas.NOTIFICATION_SETTLEMENT_LOW_LEVEL);
				good = false;
				this.problems = true;
			}
		}
		return good;
	};

	/**
	 * Internal function for further processing of the production chain.
	 * 
	 * @private
	 * @returns {civitas.objects.building}
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
					this.get_settlement().inc_coins(amount);
					this.get_core().log(this.get_name() + ' gave ' + amount + ' coins via tax.');
				}
			}
		} else {
			if (this.is_producing()) {
				var prd = building.production;
				for (var item in prd) {
					_p.push(item);
				}
				if (this.has_requirements() === true) {
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
				} else {
					this.problems = true;
				}
			} else {
				this.get_core().log(this.get_name() + ' production is stopped.');
				this.notify(civitas.NOTIFICATION_PRODUCTION_PAUSED);
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
	 * @returns {civitas.objects.building}
	 */
	this.process = function() {
		var building = this.get_building_data();
		var res = this.get_settlement_resources();
		var prd = building.production;
		var mat = building.materials;
		if (this.has_requirements() === false) {
			return false;
		}
		switch (this.get_type()) {
			/* STORAGE */
			case 'marketplace':
				this.adjust_settlement_fame();
				break;
			case 'warehouse':
				break;
			/* MILITARY */
			case 'camp':
				break;
			case 'castle':
				this.adjust_settlement_fame_for_coins();
				this.adjust_settlement_prestige();
				break;
			/* MUNICIPAL */
			case 'embassy':
				this.adjust_settlement_fame_for_coins();
				this.adjust_settlement_espionage();
				break;
			case 'church':
				this.adjust_settlement_fame_for_coins();
				this.adjust_settlement_faith();
				break;
			case 'monastery':
				this.adjust_settlement_fame_for_coins();
				this.adjust_settlement_faith();
				break;
			case 'academy':
				this.adjust_settlement_research_for_coins();
				break;
			case 'tavern':
				this.adjust_settlement_fame_for_coins();
				break;
			/* ALL OTHER */
			default:
				this._process();
				break;
		}
		return this;
	};

	/**
	 * Get the settlement this building is located into
	 * 
	 * @public
	 * @returns {civitas.objects.settlement}
	 */
	this.get_settlement = function() {
		return this.settlement;
	};

	/**
	 * Get a pointer to the game core
	 * 
	 * @public
	 * @returns {civitas.game}
	 */
	this.get_core = function() {
		return this.get_settlement().get_core();
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
	 * @returns {civitas.objects.building}
	 */
	this.notify = function(notification_type) {
		var handle = $('#building-' + this.get_handle());
		switch (notification_type) {
			case civitas.NOTIFICATION_PRODUCTION_PAUSED:
				handle.empty().append('<span class="notification paused"></span>');
				break;
			case civitas.NOTIFICATION_MISSING_RESOURCES:
			default:
				handle.empty().append('<span class="notification error"></span>');
				break;
		}
		return this;
	};

	// Fire up the constructor
	return this.__init(params);
};

/**
 * Main Game soldier object.
 * 
 * @param {Object} params
 * @class {civitas.objects.soldier}
 * @returns {civitas.objects.soldier}
 */
civitas.objects.soldier = function (params) {

	/**
	 * Pointer to the settlement this sodier is located in.
	 * 
	 * @type {civitas.objects.settlement}
	 * @private
	 */
	this.settlement = null;

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
	this.__destroy = function () {
		return false;
	};

	/**
	 * Method for destroying(disbanding) the soldier.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.destroy = function () {
		return this.__destroy();
	};

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {civitas.objects.soldier}
	 * @param {Object} params
	 */
	this.__init = function (params) {
		this.settlement = params.settlement;
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
	 * Get the settlement this soldier is located into.
	 * 
	 * @public
	 * @returns {civitas.objects.settlement}
	 */
	this.get_settlement = function () {
		return this.settlement;
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
	 * @returns {civitas.game}
	 */
	this.get_core = function () {
		return this.get_settlement().get_core();
	};

	// Fire up the constructor
	return this.__init(params);
};

/**
 * Main Game ship object.
 * 
 * @param {Object} params
 * @class {civitas.objects.ship}
 * @returns {civitas.objects.ship}
 */
civitas.objects.ship = function (params) {

	/**
	 * Pointer to the settlement this ship is located in.
	 * 
	 * @type {civitas.objects.settlement}
	 * @private
	 */
	this.settlement = null;

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
	this.__destroy = function () {
		return false;
	};

	/**
	 * Method for destroying(disbanding) the ship.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.destroy = function () {
		return this.__destroy();
	};

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {civitas.objects.ship}
	 * @param {Object} params
	 */
	this.__init = function (params) {
		this.settlement = params.settlement;
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
	 * Get the settlement this ship is located into.
	 * 
	 * @public
	 * @returns {civitas.objects.settlement}
	 */
	this.get_settlement = function () {
		return this.settlement;
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
	 * @returns {civitas.game}
	 */
	this.get_core = function () {
		return this.get_settlement().get_core();
	};

	// Fire up the constructor
	return this.__init(params);
};

/**
 * Main Game window object.
 * 
 * @param {Object} params
 * @class {civitas.controls.window}
 * @returns {civitas.controls.window}
 */
civitas.controls.window = function (params) {

	/**
	 * DOM handle of this window.
	 *
	 * @type {String}
	 */
	this.handle = null;

	/**
	 * Reference to the core object.
	 * 
	 * @type {civitas.game}
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
	 * Localized title of the window.
	 * 
	 * @type {String}
	 */
	this.title = null;

	/**
	 * Callback function when the window is shown (created).
	 *
	 * @public
	 * @type {Function}
	 */
	this.on_show = null;

	/**
	 * Callback function when the window is hidden (destroyed).
	 *
	 * @public
	 * @type {Function}
	 */
	this.on_hide = null;

	/**
	 * Object destructor.
	 * 
	 * @private
	 * @returns {Boolean}
	 */
	this.__destroy = function () {
		this.get_core().console_log('destroying window with id `' + this.id + '`');
		$(this.handle).remove();
		$('.tipsy').remove();
		this.on_hide.call(this);
		return false;
	};

	/**
	 * Method for destroying the window.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.destroy = function () {
		return this.__destroy();
	};

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {civitas.controls.window}
	 * @param {Object} params
	 */
	this.__init = function (params) {
		this.core = params.core;
		this.id = params.id;
		this.handle = '#window-' + this.id;
		if (params.on_show instanceof Function) {
			this.on_show = params.on_show;
		} else {
			this.on_show = function() {};
		}
		if (params.on_hide instanceof Function) {
			this.on_hide = params.on_hide;
		} else {
			this.on_hide = function() {};
		}
		if (civitas.ui.window_exists(this.handle)) {
			this.destroy();
		}
		this.get_core().console_log('creating window with id `' + this.id + '`');
		$('body').append(params.template);
		this.on_show.call(this);
		$(this.handle + ' .tips').tipsy({
			gravity: 's'
		});
		return this;
	};

	/**
	 * Return a pointer to the game core.
	 *
	 * @public
	 * @returns {civitas.game}
	 */
	this.get_core = function() {
		return this.core;
	};

	// Fire up the constructor
	return this.__init(params);
};

/**
 * Main Game panel object.
 * 
 * @param {Object} params
 * @class {civitas.controls.panel}
 * @returns {civitas.controls.panel}
 */
civitas.controls.panel = function (params) {

	/**
	 * DOM handle of this panel.
	 *
	 * @type {String}
	 */
	this.handle = null;

	/**
	 * Reference to the core object.
	 * 
	 * @type {civitas.game}
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
	 * Localized title of the panel.
	 * 
	 * @type {String}
	 */
	this.title = null;

	/**
	 * Callback function when the panel is shown.
	 *
	 * @public
	 * @type {Function}
	 */
	this.on_show = null;

	/**
	 * Callback function when the panel is hidden (destroyed).
	 *
	 * @public
	 * @type {Function}
	 */
	this.on_hide = null;

	/**
	 * Callback function when the panel is refreshed.
	 *
	 * @public
	 * @type {Function}
	 */
	this.on_refresh = null;

	/**
	 * Object destructor.
	 * 
	 * @private
	 * @returns {Boolean}
	 */
	this.__destroy = function () {
		this.get_core().console_log('destroying panel with id `' + this.id + '`');
		$(this.handle).remove();
		var panels = this.get_core().get_panels();
		for (var i = 0; i < panels.length; i++) {
			if (panels[i].id === this.id) {
				panels.splice(i, 1);
			}
		}
		$('.tipsy').remove();
		this.on_hide.call(this);
		return false;
	};

	/**
	 * Method for destroying the panel.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.destroy = function () {
		return this.__destroy();
	};

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {civitas.controls.panel}
	 * @param {Object} params
	 */
	this.__init = function (params) {
		var self = this;
		this.core = params.core;
		this.id = params.id;
		this.handle = '#panel-' + this.id;
		if (params.on_show instanceof Function) {
			this.on_show = params.on_show;
		} else {
			this.on_show = function() {};
		}
		if (params.on_hide instanceof Function) {
			this.on_hide = params.on_hide;
		} else {
			this.on_hide = function() {};
		}
		if (params.on_refresh instanceof Function) {
			this.on_refresh = params.on_refresh;
		} else {
			this.on_refresh = function() {};
		}
		if (civitas.ui.panel_exists(this.handle)) {
			this.destroy();
		}
		this.get_core().console_log('creating panel with id `' + this.id + '`');
		if (params.on_template instanceof Function) {
			$('.ui').append(params.on_template.call(this, params));
		} else {
			$('.ui').append(params.template);
		}
		this.on_show.call(this, params);
		if (params.id !== 'army' && typeof params.data !== 'undefined' && typeof params.data.settlement_type === 'undefined') {
			var building = this.get_core().get_settlement().get_building_by_handle(params.data.handle);
			if (!building.is_upgradable()) {
				$(this.handle + ' .footer .upgrade').remove();
			}
			if (building.is_marketplace()) {
				$(this.handle + ' .footer .demolish').remove();
			}
			if (building.is_production_building()) {
				if (building.is_producing()) {
					$(this.handle + ' .pause').removeClass('start');
				} else {
					$(this.handle + ' .start').removeClass('pause');
				}
			} else {
				$(this.handle + ' .start, ' + this.handle + ' .pause').remove();
			}
			$(this.handle).on('click', '.upgrade', function () {
				if (confirm(civitas.l('Are you sure you want to upgrade this building?')) === true) {
					if (building.upgrade()) {
						if (!building.is_upgradable()) {
							$(self.handle + ' .footer .upgrade').remove();
						}
					}
				}
				return false;
			}).on('click', '.demolish', function () {
				if (confirm(civitas.l('Are you sure you want to demolish this building?')) === true) {
					if (building.demolish()) {
						self.destroy();
						core.refresh();
					}
				}
				return false;
			}).on('click', '.pause', function () {
				if (building.stop_production()) {
					$(this).removeClass('pause').addClass('start');
				}
				return false;
			}).on('click', '.start', function () {
				if (building.start_production()) {
					$(this).removeClass('start').addClass('pause');
				}
				return false;
			});
		}
		$(this.handle).on('click', '.close', function () {
			self.destroy();
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
		$(this.handle + ' .tabs').tabs();
		$(this.handle).css({
			'left': ($(window).width() / 2) - ($(this.handle).width() / 2),
			'top': ($(window).height() / 2) - ($(this.handle).height() / 2)
		});
		$('.tipsy').remove();
		$('.tips').tipsy({
			gravity: $.fn.tipsy.autoNS,
			html: true
		});
		return this;
	};

	/**
	 * Return a pointer to the game core.
	 *
	 * @public
	 * @returns {civitas.game}
	 */
	this.get_core = function() {
		return this.core;
	};

	// Fire up the constructor
	return this.__init(params);
};

/**
 * Main Game core object.
 * 
 * @class {civitas.game}
 * @returns {civitas.game}
 */
civitas.game = function () {

	/**
	 * List of all the settlements in the game.
	 * 
	 * @type {Array}
	 * @private
	 */
	this.settlements = [];

	/**
	 * List of game campaigns (caravans and armies).
	 *
	 * @private
	 * @type {Array}
	 */
	this.campaigns = [];

	/**
	 * List of currently completed achievements.
	 *
	 * @private
	 * @type {Array}
	 */
	this.achievements = [];

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
	 * Is the game paused?
	 *
	 * @private
	 * @type {Boolean}
	 */
	this.paused = false;

	/**
	 * Game difficulty.
	 *
	 * @type {Number}
	 * @private
	 */
	this.difficulty = civitas.DIFFICULTY_EASY;

	/**
	 * Array containing the list of all open panels.
	 *
	 * @type {Array}
	 * @private
	 */
	this.panels = [];

	/**
	 * Game worldmap.
	 *
	 * @type {Number}
	 * @private
	 */
	this.worldmap = 1;

	/**
	 * Game mode, single player or multi player.
	 *
	 * @type {Number}
	 * @private
	 */
	this.mode = civitas.MODE_SINGLEPLAYER;

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {civitas.game}
	 */
	this.__init = function () {
		this._build_ui();
		this._setup_audio();
		this._setup_ui();
		if (this.get_storage_data() === false) {
			this.open_window(civitas.WINDOW_OPTIONS);
		} else {
			this.start_game();
		}
		return this;
	};

	/**
	 * Return the UI panel specified by its id.
	 *
	 * @public
	 * @param {String} id
	 * @returns {civitas.game}
	 */
	this.get_panel = function(id) {
		var panels = this.get_panels();
		for (var i = 0; i < panels.length; i++) {
			if (panels[i].id === id) {
				return panels[i];
			}
		}
		return false;
	};

	/**
	 * Close the UI panel specified by its id.
	 *
	 * @public
	 * @param {String} id
	 * @returns {civitas.game}
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
		if (typeof this.black_market[resource] !== 'undefined') {
			var old = this.black_market[resource];
			this.black_market[resource] = {
				resource: resource,
				amount: old.amount + amount,
				price: old.price + price
			};
		} else {
			this.black_market[resource] = {
				resource: resource,
				amount: amount,
				price: price
			};
		}
		return this.black_market;
	};

	/**
	 * Swap game storage data between two keys.
	 * 
	 * @param {String} from
	 * @param {String} to
	 * @public
	 * @returns {Boolean}
	 */
	this.swap_storage_data = function(from, to) {
		var data = this.get_storage_data(from);
		if (data !== false) {
			this.set_storage_data(to, data);
			return true;
		}
		return false;
	};

	/**
	 * Reset (empty) game storage data.
	 * 
	 * @param {String} key
	 * @public
	 * @returns {civitas.game}
	 */
	this.reset_storage_data = function(key) {
		if (typeof key === 'undefined') {
			key = 'live';
		}
		localStorage.removeItem(civitas.STORAGE_KEY + '.' + key);
		return this;
	};

	/**
	 * Set game storage data.
	 * 
	 * @param {String} key
	 * @param {Mixed} value
	 * @public
	 * @returns {civitas.game}
	 */
	this.set_storage_data = function (key, value) {
		localStorage.setItem(civitas.STORAGE_KEY + '.' + key, window.btoa(JSON.stringify(value)));
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
		if (typeof key === 'undefined') {
			key = 'live';
		}
		if (localStorage.getItem(civitas.STORAGE_KEY + '.' + key) !== null) {
			return JSON.parse(window.atob(localStorage.getItem(civitas.STORAGE_KEY + '.' + key)));
		} else {
			return false;
		}
	};

	/**
	 * Set game settings.
	 * 
	 * @param {String} key
	 * @param {Mixed} value
	 * @public
	 * @returns {civitas.game}
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
	 * @returns {civitas.game}
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
	 * @returns {civitas.game}
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
	 * @returns {civitas.game.settings}
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
	 * @private
	 * @returns {civitas.game}
	 */
	this._reset_black_market = function () {
		var total = 0;
		for (var item in this.black_market) {
			this.get_settlement().inc_coins(this.black_market[item].price);
			total += this.black_market[item].price;
		}
		this.black_market = {};
		this.refresh();
		$('#tab-blackmarket > .contents > table > tbody').empty();
		if (total > 0) {
			this.notify(this.get_settlement().get_name() + ' ' + civitas.l('received') + ' ' + total + ' ' + civitas.l('coins from the Black Market for selling goods.'), civitas.l('Black Market'));
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
	 * @returns {civitas.game}
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
	 * Build the game UI.
	 *
	 * @private
	 * @returns {civitas.game}
	 */
	this._build_ui = function() {
		var out = '<section class="ui">' +
			'<header>' +
				'<div class="cityavatar"></div>' +
				'<div class="cityclock">' +
					'<div class="container">' +
						'<div class="hand"></div>' +
					'</div>' +
				'</div>' +
				'<span title="City level" class="tips citylevel"></span>' +
				'<span title="City prestige" class="tips cityprestige"></span>' +
				'<div title="City name" class="tips cityname"></div>' +
				'<div title="City fame" class="tips cityfame">' +
					'<span></span>' +
				'</div>' +
				'<div class="top-panel"></div>' +
			'</header>' +
			'<aside class="console">' +
				'<div class="scrollbar">' +
					'<div class="up"></div>' +
					'<div class="down"></div>' +
				'</div>' +
				'<div class="contents"></div>' +
			'</aside>' +
			'<section class="game"></section>' +
			'<footer>' +
				'<div class="toolbar">' +
					'<div class="tips do-build" title="' + civitas.l('Buildings') + '"></div>' +
					'<div class="tips do-storage" title="' + civitas.l('Storage Space') + '"></div>' +
					'<div class="tips do-trades" title="' + civitas.l('Trades') + '"></div>' +
					'<div class="tips do-council" title="' + civitas.l('City Council') + '"></div>' +
					'<div class="tips do-ranks" title="' + civitas.l('Ranks') + '"></div>' +
					'<div class="tips do-worldmap" title="' + civitas.l('World Map') + '"></div>' +
					'<div class="" title=""></div>' +
					'<div class="" title=""></div>' +
					'<div class="tips do-help" title="' + civitas.l('Help') + '"></div>' +
				'</div>' +
			'</footer>' +
		'</section>' +
		'<audio id="music" loop>' +
			'<source src="music/track1.mp3" type="audio/mpeg">' +
		'</audio>' +
		'<div title="' + civitas.l('Game is doing stuff in the background.') + '" class="loading"></div>';
		$('body').empty().append(out);
		return this;
	};

	/**
	 * Start the game.
	 * 
	 * @returns {civitas.game}
	 * @public
	 * @param {String} name
	 * @param {String} cityname
	 * @param {Number} nation
	 * @param {Number} climate
	 * @param {Number} avatar
	 * @param {Number} difficulty
	 */
	this.start_game = function (name, cityname, nation, climate, avatar, difficulty) {
		$('.ui header .cityclock .container').css({
			animation: 'rotate ' + civitas.SECONDS_TO_DAY + 's infinite steps(10)'
		});
		var self = this;
		var data = null;
		this.difficulty = parseInt(difficulty);
		this.worldmap = civitas.utils.get_random(1, civitas.WORLDMAPS);
		if (this.get_storage_data() !== false) {
			data = this._load_settlement(this.import());
		} else {
			this._create_settlement(name, cityname, nation, climate, avatar);
		}
		this._setup_neighbours(data);
		this._setup_villages(data);
		this.save();
		$('header .cityname').html(this.get_settlement().get_name());
		$('header .cityavatar').css({
			'background-image': 'url(' + civitas.ASSETS_URL + 'images/avatars/avatar' + this.get_settlement().get_ruler_avatar() + '.png)'
		});
		this.refresh();
		var seconds = 1;
		setInterval(function () {
			if (!self.is_paused() && seconds === civitas.SECONDS_TO_DAY) {
				self._do_daily();
				seconds = 1;
			} else if (!self.is_paused()) {
				seconds++;
			}
		}, 1000);
		$(document).keyup(function(e) {
			if (e.keyCode == 27 && !civitas.ui.window_exists('#window-options')) {
				self.show_loader();
				self.open_window(civitas.WINDOW_OPTIONS);
			}
		});
		this.hide_loader();
		return this;
	};

	/**
	 * Pause the game.
	 *
	 * @public
	 * @returns {civitas.game}
	 */
	this.pause = function() {
		this.paused = true;
		$('.ui header .cityclock .container').css({
			animation: 'none'
		});
		return this;
	};

	/**
	 * Resume the game.
	 *
	 * @public
	 * @returns {civitas.game}
	 */
	this.unpause = function() {
		this.paused = false;
		$('.ui header .cityclock .container').css({
			animation: 'rotate ' + civitas.SECONDS_TO_DAY + 's infinite steps(10)'
		});
		return this;
	};

	/**
	 * Check if the game is paused.
	 *
	 * @public
	 * @returns {Boolean}
	 */
	this.is_paused = function() {
		return this.paused;
	};

	/**
	 * Show the game loader.
	 *
	 * @public
	 * @returns {civitas.game}
	 */
	this.show_loader = function() {
		$('.loading').show().tipsy({
			gravity: 'e'
		});
		return this;
	};

	/**
	 * Hide the game loader.
	 *
	 * @public
	 * @returns {civitas.game}
	 */
	this.hide_loader = function() {
		$('.loading').hide();
		return this;
	};

	/**
	 * Set the current game date.
	 * 
	 * @public
	 * @param {Object} data
	 * @returns {civitas.game}
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
	 * @private
	 * @returns {civitas.game}
	 */
	this._setup_audio = function () {
		this.music = $('#music').get(0);
		this.music.volume = 0.2;
		if (civitas.AUTOSTART_MUSIC === true) {
			this.music.play();
		}
		return this;
	};

	/**
	 * Get a pointer to the player's settlement.
	 * 
	 * @public
	 * @param {String} name
	 * @returns {civitas.settlement}
	 */
	this.get_settlement = function (name) {
		if (typeof name !== 'undefined' && typeof name === 'string') {
			var settlements = this.get_settlements();
			for (var i = 0; i < settlements.length; i++) {
				var settlement = settlements[i];
				if (settlement.get_name() === name) {
					return settlement;
				}
			}
		} else if (typeof name !== 'undefined' && typeof name === 'number') {
			var settlements = this.get_settlements();
			for (var i = 0; i < settlements.length; i++) {
				var settlement = settlements[i];
				if (settlement.get_id() === name) {
					return settlement;
				}
			}
		} else {
			return this.settlements[0];
		}
		return false;
	};

	/**
	 * Load the main settlement data.
	 * 
	 * @private
	 * @returns {Object|Boolean}
	 */
	this._load_settlement = function (data) {
		var player_settlement_data = data.settlements[0];
		if (player_settlement_data) {
			player_settlement_data.core = this;
			var new_settlement = new civitas.objects.settlement(player_settlement_data);
			this.settlements.push(new_settlement);
			new_settlement._create_buildings(player_settlement_data.buildings);
			return data;
		}
		return false;
	};

	/**
	 * Setup the main settlement.
	 * 
	 * @private
	 * @param {String} name
	 * @param {String} cityname
	 * @param {Number} nation
	 * @param {Number} climate
	 * @param {Number} avatar
	 * @returns {civitas.game}
	 */
	this._create_settlement = function (name, cityname, nation, climate, avatar) {
		var difficulty = this.get_difficulty();
		var my_settlement = new civitas.objects.settlement({
			name: cityname,
			climate: climate,
			avatar: avatar,
			id: 99,
			player: true,
			ruler: {
				name: name,
				title: '',
				avatar: avatar,
				nationality: nation,
				personality: civitas.PERSONALITY_BALANCED
			},
			army_list: civitas.START_ARMY[difficulty - 1].army,
			navy_list: civitas.START_ARMY[difficulty - 1].navy,
			core: this
		});
		this.settlements.push(my_settlement);
		this.get_settlement()._create_buildings(civitas.START_BUILDINGS);
		return this;
	};

	/**
	 * Get building data from the main configuration array.
	 * 
	 * @public
	 * @param {String|Number} handle
	 * @returns {Object|Boolean}
	 */
	this.get_building_config_data = function (handle) {
		if (typeof handle === 'string') {
			return civitas.BUILDINGS[civitas.BUILDINGS.findIndexM(handle)];
		} else if (typeof handle === 'number') {
			return civitas.BUILDINGS[handle];
		}
		return false;
	};

	/**
	 * Check if any events occured on this day.
	 *
	 * @private
	 * @returns {civitas.game}
	 */
	this._check_for_events = function() {
		var event = civitas.EVENTS[civitas.utils.get_random(0, civitas.EVENTS.length - 1)];
		event.core = this;
		new civitas.objects.event(event);
		return this;
	};

	/**
	 * Process all buildings for materials, costs, etc.
	 *
	 * @public
	 * @returns {civitas.game}
	 */
	this.process_all_buildings = function() {
		var buildings = this.get_settlement().get_buildings();
		for (var i = 0; i < buildings.length; i++) {
			if (typeof buildings[i] !== 'undefined') {
				buildings[i].process();
			}
		}
		return this;
	};

	/**
	 * Method that gets called each 'day'.
	 * 
	 * @private
	 * @returns {civitas.game}
	 */
	this._do_daily = function () {
		this.day++;
		this.log('day ' + this.day_of_month + ' month ' + this.month + ' year ' + this.year);
		this.process_all_buildings();
		this._check_for_events();
		this.calc_storage();
		this.advance_campaigns();
		this.day_of_month++;
		if (this.day_of_month > 30) {
			this._do_monthly();
		}
		if (this.day >= 361) {
			this._do_yearly();
			this.day = 1;
			this.month = 1;
		}
		this.save_and_refresh();
		return this;
	};

	/**
	 * Method that gets called each 'month'.
	 * 
	 * @private
	 * @returns {civitas.game}
	 */
	this._do_monthly = function () {
		this.day_of_month = 1;
		this.month++;
		if (this.month === 3 || this.month === 6 || this.month === 9 || this.month === 12) {
			this._do_quarterly();
		}
		this._reset_black_market();
		return this;
	};

	this._do_quarterly = function() {
		this.refresh_trades();
		return this;
	};

	/**
	 * Refresh the UI, panels and save game.
	 *
	 * @public
	 * @returns {civitas.game}
	 */
	this.save_and_refresh = function() {
		this.check_achievements();
		this.save();
		this.refresh();
		return this;
	};

	/**
	 * Refresh the UI and panels.
	 *
	 * @public
	 * @returns {civitas.game}
	 */
	this.refresh = function() {
		this.refresh_panels();
		this.refresh_toolbar();
		this.refresh_ui();
		$('.tipsy').remove();
		$('.tips').tipsy({
			gravity: $.fn.tipsy.autoNS,
			html: true
		});
		$('.top-panel > span').tipsy({
			gravity: 'n'
		});
		return this;
	};

	/**
	 * Refresh the resources toolbar.
	 *
	 * @public
	 * @returns {civitas.game}
	 */
	this.refresh_toolbar = function() {
		var settlement = this.get_settlement();
		if (typeof settlement !== 'undefined') {
			var resources = settlement.get_resources();
			for (var i = 0; i < civitas.TOOLBAR_RESOURCES.length; i++) {
				var resource = civitas.TOOLBAR_RESOURCES[i];
				var el = $('.top-panel .' + resource);
				if (typeof resources[resource] !== 'undefined') {
					el.attr('title', resources[resource] + ' ' + civitas.utils.get_resource_name(resource));
				}
			}
		}
		return this;
	};

	/**
	 * Refresh all the UI information after a property change.
	 * 
	 * @public
	 * @returns {civitas.game}
	 */
	this.refresh_ui = function () {
		var settlement = this.get_settlement();
		if (typeof settlement !== 'undefined') {
			var storage_space = settlement.get_storage_space();
			var needed = civitas.LEVELS[settlement.get_level()];
			$('.citylevel').html(settlement.get_level());
			$('.cityprestige').html(settlement.get_prestige());
			if (settlement.get_fame() >= needed) {
				settlement.level_up();
				needed = civitas.LEVELS[settlement.get_level()];
			}
			$('header .cityfame > span').css({
				width: Math.floor((settlement.get_fame() * 100) / needed) + '%'
			});
		}
		return this;
	};

	/**
	 * Force refresh of the UI panels open.
	 *
	 * @public
	 * @returns {civitas.game}
	 */
	this.refresh_panels = function() {
		var panels = this.get_panels();
		for (var x = 0; x < panels.length; x++) {
			panels[x].on_refresh();
		}
		return this;
	};

	/**
	 * Save the game data.
	 * 
	 * @public
	 * @returns {civitas.game}
	 */
	this.save = function () {
		this.export(true);
		return this;
	};

	/**
	 * Open the help panel with the specified context and term.
	 *
	 * @public
	 * @param {String} context
	 * @param {String} term
	 * @returns {civitas_game} 
	 */
	this.help = function(context, term) {
		this.open_panel(civitas.PANEL_HELP, {
			context: context,
			term: term
		});
		return this;
	};

	/**
	 * Refresh the world trades.
	 * 
	 * @public
	 * @returns {civitas.game}
	 */
	this.refresh_trades = function() {
		var settlements = this.get_settlements();
		for (var i = 1; i < settlements.length; i++) {
			if (typeof settlements[i] !== 'undefined') {
				if (settlements[i].is_city()) {
					settlements[i].reset_trades();
				}
			}
		}
		this.notify('World Market trades have been refreshed, settlements are looking to make new purchases and sales.', civitas.l('World Market'));
		return this;
	};

	/**
	 * Refresh the influence of each of the cities in the world.
	 * 
	 * @public
	 * @returns {civitas.game}
	 */
	this.refresh_influence = function() {
		var settlements = this.get_settlements();
		for (var i = 1; i < settlements.length; i++) {
			if (typeof settlements[i] !== 'undefined') {
				if (settlements[i].is_city()) {
					if (this.get_settlement().get_religion().id === settlements[i].get_religion().id) {
						this.get_settlement().raise_influence(settlements[i].get_id(), civitas.YEARLY_INFLUENCE_GAIN);
					} else {
						this.get_settlement().lower_influence(settlements[i].get_id(), civitas.YEARLY_INFLUENCE_LOSS);
					}
				} else {
					if (this.get_settlement().get_religion().id === settlements[i].get_religion().id) {
						this.get_settlement().raise_influence(settlements[i].get_id(), civitas.YEARLY_INFLUENCE_GAIN);
					}
				}
			}
		}
		return this;
	};

	/**
	 * Method that gets called each 'year'.
	 * 
	 * @private
	 * @returns {civitas.game}
	 */
	this._do_yearly = function () {
		this.get_settlement().release_mercenaries();
		this.refresh_influence();
		this.year++;
		return this;
	};

	/**
	 * Log data to the console.
	 * 
	 * @public
	 * @param {String} message
	 * @param {Boolean} error
	 * @returns {civitas.game}
	 */
	this.log = function (message, error) {
		if (typeof message !== 'undefined') {
			$('.ui .console .contents').prepend('<div' + ((typeof error !== 'undefined' && error === true) ? ' class="error"' : '') + '>' + '<span>' + civitas.utils.get_now() + '</span> - ' + message + '</div>');
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
	 * @returns {civitas.game}
	 */
	this.console_log = function (message, error) {
		if (civitas.DEBUG === true) {
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
	 * @returns {civitas.game}
	 */
	this.notify = function (message, title, timeout) {
		this._notify({
			title: (typeof title !== 'undefined') ? title : civitas.l('City Council'),
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
	 * @returns {civitas.game}
	 * @private
	 */
	this._notify = function (settings) {
		var container, notty, hide, image, right, left, inner, _container;
		settings = $.extend({
			title: undefined,
			content: undefined,
			timeout: 15000,
			img: civitas.ASSETS_URL + 'images/ui/icon_notification_1.png',
			showTime: true,
			error: false,
			achievement: false,
			other: false
		}, settings);
		if (settings.achievement === false) {
			_container = "notifications";
		} else {
			_container = "achievements-notifications";
		}
		container = $("." + _container);
		if (!container.length) {
			container = $("<div>", {
				'class': _container
			}).appendTo(document.body);
		}
		$('.achievements-notifications').css({
			left: ($(window).width() / 2) - (container.width() / 2)
		});
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
			settings.img = civitas.ASSETS_URL + 'images/ui/icon_notification_2.png';
		}
		if (settings.other === true) {
			notty.addClass('other');
			settings.img = civitas.ASSETS_URL + 'images/ui/icon_notification_1.png';
		}
		if (settings.achievement === true) {
			notty.addClass('achievement');
			settings.img = civitas.ASSETS_URL + 'images/ui/icon_achievement.png';
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
		if (settings.achievement === false) {
			var timestamp = Number(new Date());
			var timeHTML = $("<div>", {
				html: "<strong>" + civitas.utils.time_since(timestamp) + "</strong> ago"
			});
			timeHTML.addClass("time").attr("title", timestamp);
			timeHTML.appendTo(right);
			setInterval(function () {
				$(".time").each(function () {
					var timing = $(this).attr("title");
					$(this).html("<strong>" + civitas.utils.time_since(timing) + "</strong> ago");
				});
			}, 4000);
		}
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
	 * @returns {civitas.game}
	 */
	this.error = function (message, title, no_console) {
		this._notify({
			title: (typeof title !== 'undefined') ? title : civitas.l('City Council'),
			error: true,
			content: message
		});
		if (typeof no_console === 'undefined' || no_console === false) {
			this.log(message, true);
		}
		return this;
	};

	/**
	 * Calculate and return the total and free storage space in the main settlement.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.calc_storage = function () {
		var storage = this.get_settlement().get_storage_space();
		if (storage.occupied >= storage.all) {
			this.error('You ran out of storage space and all goods produced will be lost. Upgrade your warehouse or marketplace.', 'No storage space');
		} else if ((storage.all - storage.occupied) < 100) {
			this.error('You will soon run out of storage space and all goods produced will be lost. Upgrade your warehouse or marketplace.', 'Storage nearly full');
		}
		return storage;
	};

	/**
	 * Get the list of all the settlements in game.
	 * 
	 * @public
	 * @returns {Array}
	 */
	this.get_settlements = function () {
		return this.settlements;
	};

	/**
	 * Import game data.
	 *
	 * @public
	 * @returns {Object}
	 */
	this.import = function() {
		var data = this.get_storage_data().data;
		if (data !== false) {
			this.set_difficulty(data.difficulty);
			this.set_worldmap(data.worldmap);
			this.set_campaigns(data.campaigns);
			this.set_achievements(data.achievements);
			this.set_date_time(data.date_time);
			this.set_black_market(data.black_market);
			this.set_settings_music(data.settings.music);
			this.set_settings_console(data.settings.console);
		} else {
			this.error('There was a problem loading the game data, it is probably corrupted');
			return false;
		}
		return data;
	};

	/**
	 * Export game data.
	 *
	 * @public
	 * @param {Boolean} to_local_storage
	 * @param {Number} slot
	 * @returns {Object}
	 */
	this.export = function(to_local_storage, slot) {
		var settlement = this.get_settlement();
		var settlements_list = [];
		for (var i = 0; i < this.settlements.length; i++) {
			settlements_list.push(this.settlements[i].export());
		}
		var data = {
			settlements: settlements_list,
			difficulty: this.get_difficulty(),
			achievements: this.get_achievements(),
			black_market: this.get_black_market(),
			date_time: {
				day: this.day,
				month: this.month,
				year: this.year,
				day_of_month: this.day_of_month
			},
			campaigns: this.get_campaigns(),
			worldmap: this.get_worldmap(),
			settings: this.get_settings()
		};
		if (to_local_storage === true) {
			var new_data = {
				date: Number(new Date()),
				data: data
			}
			if (typeof slot !== 'undefined') {
				this.set_storage_data('save' + slot, new_data);
			} else {
				this.set_storage_data('live', new_data);
			}
			return new_data;
		}
		return data;
	};

	/**
	 * Setup the villages in the world.
	 *
	 * @private
	 * @returns {civitas.game}
	 */
	this._setup_villages = function() {
		// TODO
	};

	/**
	 * Create all the other settlements in the world.
	 * 
	 * @private
	 * @param {Object} data
	 * @returns {civitas.game}
	 */
	this._setup_neighbours = function (data) {
		var new_settlement = null;
		var settlement_data = null;
		var ruler = null;
		if (data !== null) {
			for (var i = 1; i < data.settlements.length; i++) {
				settlement_data = data.settlements[i];
				settlement_data.core = this;
				new_settlement = new civitas.objects.settlement(settlement_data);
				var climate = new_settlement.get_climate();
				var climate_buildings = 'SETTLEMENT_BUILDINGS_' + climate.name.toUpperCase();
				new_settlement._create_buildings(civitas[climate_buildings], true);
				this.settlements.push(new_settlement);
			}
		} else {
			for (var item in civitas.SETTLEMENTS) {
				item = parseInt(item);
				settlement_data = civitas.SETTLEMENTS[item];
				settlement_data.settlement_type = typeof settlement_data.settlement_type === 'undefined' || settlement_data.settlement_type === civitas.CITY ? civitas.CITY : civitas.VILLAGE;
				if (settlement_data.settlement_type === civitas.VILLAGE) {
					ruler = {
						title: 'Mayor',
						avatar: 40,
						personality: civitas.PERSONALITY_DIPLOMAT,
						name: civitas.utils.get_random_unique(civitas.NAMES),
						nationality: settlement_data.nationality
					};
				} else {
					ruler = civitas.utils.get_random_unique(civitas.RULERS);
				}
				new_settlement = new civitas.objects.settlement({
					core: this,
					id: item,
					population: settlement_data.population,
					settlement_type: settlement_data.settlement_type,
					name: civitas.utils.get_random_unique(civitas.SETTLEMENT_NAMES),
					player: false,
					level: settlement_data.level,
					religion: settlement_data.religion,
					climate: settlement_data.settlement_type === civitas.CITY ? settlement_data.climate : civitas.CLIMATE_TEMPERATE,
					ruler: ruler,
					resources: settlement_data.resources,
					icon: settlement_data.settlement_type === civitas.CITY ? settlement_data.icon : 1,
					army_list: settlement_data.army,
					navy_list: settlement_data.navy
				});
				if (settlement_data.settlement_type === civitas.CITY) {
					var climate = new_settlement.get_climate();
					var climate_buildings = 'SETTLEMENT_BUILDINGS_' + climate.name.toUpperCase();
					new_settlement._create_buildings(civitas[climate_buildings], true);
				}
				this.get_settlement().status[item] = {
					influence: 50,
					status: civitas.DIPLOMACY_TRUCE
				}
				this.settlements.push(new_settlement);
			}
			/*
			for (var item in civitas.VILLAGES) {
				this.get_settlement().status.village[item] = {
					influence: 0,
					status: civitas.DIPLOMACY_TRUCE
				}
			}
			*/
		}
		return this;
	};

	/**
	 * Get the list of imports and exports from all the world settlements (except main).
	 * 
	 * @private
	 * @returns {Object}
	 */
	this._get_neighbours_trades = function () {
		var data = {};
		var settlements = this.get_settlements();
		for (var i = 1; i < settlements.length; i++) {
			if (typeof settlements[i] !== 'undefined') {
				data[settlements[i].get_id()] = settlements[i].get_trades();
			}
		}
		return data;
	};

	/**
	 * Setup the UI.
	 * 
	 * @private
	 * @returns {civitas.game}
	 */
	this._setup_ui = function () {
		var self = this;
		var clicked = false;
		var clickY, clickX;
		var _t = '';
		$('.game').on({
			mousemove: function (e) {
				clicked && update_scroll_pos(e);
			},
			mousedown: function (e) {
				clicked = true;
				clickY = e.pageY;
				clickX = e.pageX;
				$('html').css('cursor', 'grab');
			},
			mouseup: function () {
				clicked = false;
				$('html').css('cursor', 'auto');
			}
		});
		$('.ui > footer').css({
			left: ($(window).width() / 2) - ($('.ui > footer').width() / 2)
		});
		var update_scroll_pos = function (e) {
			$(window).scrollTop($(window).scrollTop() + (clickY - e.pageY));
			$(window).scrollLeft($(window).scrollLeft() + (clickX - e.pageX));
		};
		for (var i = 0; i < civitas.TOOLBAR_RESOURCES.length; i++) {
			_t += '<span class="' + civitas.TOOLBAR_RESOURCES[i] + '"></span>';
		}
		$('.top-panel').empty().append(_t);
		$('.console').on('click', '.down', function () {
			$('.console .contents').scrollTo('+=97px', 500);
		}).on('click', '.up', function () {
			$('.console .contents').scrollTo('-=97px', 500);
		});
		$('.toolbar').on('click', '.do-worldmap', function () {
			self.open_panel(civitas.PANEL_WORLD);
			return false;
		}).on('click', '.do-help', function () {
			self.open_panel(civitas.PANEL_HELP);
			return false;
		}).on('click', '.do-trades', function () {
			self.open_panel(civitas.PANEL_TRADES);
			return false;
		}).on('click', '.do-ranks', function () {
			self.open_panel(civitas.PANEL_RANKS);
			return false;
		}).on('click', '.do-council', function () {
			self.open_panel(civitas.PANEL_COUNCIL);
			return false;
		}).on('click', '.do-storage', function () {
			self.open_panel(civitas.PANEL_STORAGE);
			return false;
		}).on('click', '.do-build', function () {
			self.open_panel(civitas.PANEL_BUILDINGS);
			return false;
		});
		return this;
	};

	/**
	 * Get the version of the game.
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_version = function() {
		return civitas.VERSION;
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

	/**
	 * Check for any achievements completion.
	 *
	 * @public
	 * @returns {civitas.game}
	 */
	this.check_achievements = function() {
		var achievement;
		var condition;
		var settlement = this.get_settlement();
		for (var i = 0; i < civitas.ACHIEVEMENTS.length; i++) {
			achievement = civitas.ACHIEVEMENTS[i];
			for (var z = 0; z < civitas.ACHIEVEMENTS[i].conditions.length; z++) {
				var id = civitas.ACHIEVEMENTS[i].id;
				if (!this.has_achievement(achievement)) {
					condition = achievement.conditions[z];
					if (typeof condition.settlement_level !== 'undefined') {
						if (settlement.get_level() === condition.settlement_level) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.soldiers !== 'undefined') {
						var army = settlement.get_army_total();
						if (army.total >= condition.soldiers) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.ships !== 'undefined') {
						var navy = settlement.get_navy_total();
						if (navy.total >= condition.ships) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.coins !== 'undefined') {
						if (settlement.get_coins() >= condition.coins) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.research !== 'undefined') {
						if (settlement.get_research() >= condition.research) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.faith !== 'undefined') {
						if (settlement.get_faith() >= condition.faith) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.population !== 'undefined') {
						if (settlement.get_population() >= condition.population) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.prestige !== 'undefined') {
						if (settlement.get_prestige() >= condition.prestige) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.espionage !== 'undefined') {
						if (settlement.get_espionage() >= condition.espionage) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.buildings !== 'undefined') {
						if (typeof condition.buildings === 'object') {
							var good = true;
							for (var s = 0; s < condition.buildings.length; s++) {
								if (!settlement.is_building_built(condition.buildings[s])) {
									good = false;
									break;
								}
							}
							if (good === true) {
								this.achievement(achievement);
							}
						} else {
							for (var s = 0; s < settlement.buildings_list.length; s++) {
								if (settlement.buildings_list[s].handle === condition.buildings) {
									this.achievement(achievement);
									break;
								}
							}
						}
					}
					if (typeof condition.resources !== 'undefined') {
						var good = true;
						for (var s = 0; s < condition.resources.length; s++) {
							for (var item in condition.resources[s]) {
								var amount = settlement.resources[item];
								if (amount < condition.resources[s][item]) {
									good = false;
									break;
								}
							}
						}
						if (good === true) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.storage !== 'undefined') {
						if (condition.storage === 0) {
							if (!settlement.has_storage_space()) {
								this.achievement(achievement);
							}
						}
					}
					if (typeof condition.achievements !== 'undefined') {
						if (condition.achievements === this.achievements.length) {
							this.achievement(achievement);
						}
					}
					if (typeof condition.mercenary !== 'undefined') {
						var merc = settlement.get_mercenary();
						if (merc.length >= condition.mercenary) {
							this.achievement(achievement);
						}
					}
				}
			}
		}
		return this;
	};

	/**
	 * Perform an achievement notification in the game.
	 * 
	 * @public
	 * @param {Object} achievement
	 * @returns {civitas.game}
	 */
	this.achievement = function (achievement) {
		this.achievements.push({
			id: achievement.id,
			date: + new Date()
		});
		this._notify({
			title: 'Achievement Completed',
			other: true,
			achievement: true,
			content: achievement.description,
			timeout: false
		});
		return this;
	};

	/**
	 * Check if the current player has the achievement specified by its id.
	 *
	 * @public
	 * @param {Object} achievement
	 * @returns {Boolean}
	 */
	this.has_achievement = function(achievement) {
		for (var i = 0; i < this.achievements.length; i++) {
			if (this.achievements[i].id === achievement.id) {
				return true;
			}
		}
		return false;
	};

	/**
	 * Return a pointer to an existing achievement, searching by id.
	 *
	 * @public
	 * @param {Number} id
	 * @returns {Object|Boolean}
	 */
	this.get_achievement_by_id = function(id) {
		for (var i = 0; i < civitas.ACHIEVEMENTS.length; i++) {
			if (civitas.ACHIEVEMENTS[i].id === id) {
				return civitas.ACHIEVEMENTS[i];
			}
		}
		return false;
	};

	/**
	 * Set the achievements to the specified value.
	 *
	 * @public
	 * @param {Array} value
	 * @returns {civitas.game}
	 */
	this.set_achievements = function(value) {
		this.achievements = value;
		return this;
	};

	/**
	 * Return the completed achievements.
	 *
	 * @public
	 * @returns {Array}
	 */
	this.get_achievements = function() {
		return this.achievements;
	};

	/**
	 * Open a UI panel.
	 *
	 * @public
	 * @param {Object} panel_data
	 * @param {Object} extra_data
	 * @returns {civitas.controls.panel}
	 */
	this.open_panel = function(panel_data, extra_data) {
		panel_data.core = this;
		if (typeof extra_data !== 'undefined') {
			panel_data.data = extra_data;
		}
		var panel = new civitas.controls.panel(panel_data);
		this.panels.push(panel);
		return panel;
	};

	/**
	 * Open a UI window.
	 *
	 * @public
	 * @param {Object} window_data
	 * @param {Object} extra_data
	 * @returns {civitas.controls.window}
	 */
	this.open_window = function(window_data, extra_data) {
		window_data.core = this;
		if (typeof extra_data !== 'undefined') {
			window_data.data = extra_data;
		}
		return new civitas.controls.window(window_data);
	};

	/**
	 * Return the game mode.
	 *
	 * @public
	 * @returns {Number}
	 */
	this.get_mode = function() {
		return this.mode;
	};

	/**
	 * Set the game mode.
	 *
	 * @public
	 * @param {Number} value
	 * @returns {civitas.game}
	 */
	this.set_mode = function(value) {
		this.mode = value;
	};

	/**
	 * Return the id of the current worldmap.
	 *
	 * @public
	 * @returns {Number}
	 */
	this.get_worldmap = function() {
		return this.worldmap;
	};

	/**
	 * Set the id of the current worldmap.
	 *
	 * @public
	 * @param {Number} value
	 * @returns {civitas.game}
	 */
	this.set_worldmap = function(value) {
		this.worldmap = value;
		return this;
	};

	/**
	 * Set the world campaigns.
	 *
	 * @public
	 * @param {Array} value
	 * @returns {civitas.game}
	 */
	this.set_campaigns = function(value) {
		this.campaigns = value;
		return this;
	};

	/**
	 * Return the world campaigns.
	 *
	 * @public
	 * @returns {Array}
	 */
	this.get_campaigns = function() {
		return this.campaigns;
	};

	this.advance_campaigns = function() {
		var settlement = this.get_settlement();
		var other_settlement = null;
		for (var i = 0; i < this.campaigns.length; i++) {
			if (this.campaigns[i].passed === this.campaigns[i].duration - 1) {
				if (this.campaigns[i].source.id === settlement.get_id()) {
					other_settlement = this.get_settlement(this.campaigns[i].destination.id);
					this.notify('The ' + (this.campaigns[i].type === civitas.CAMPAIGN_ARMY ? 'army' : 'caravan') + ' you sent ' + this.campaigns[i].duration + ' days ago to ' + other_settlement.get_name() + ' reached its destination.');
				} else if (this.campaigns[i].destination.id === settlement.get_id()) {
					other_settlement = this.get_settlement(this.campaigns[i].source.id);
					this.notify('The ' + (this.campaigns[i].type === civitas.CAMPAIGN_ARMY ? 'army' : 'caravan') + ' sent by ' + other_settlement.get_name() + ' ' + this.campaigns[i].duration + ' days ago reached your city.');
				}
				this.process_campaign(i);
			} else {
				this.campaigns[i].passed++;
			}
		}
		return this;
	};

	this.process_campaign = function(id) {
		var campaign = this.campaigns[id];
		if (campaign.type === civitas.CAMPAIGN_ARMY && !this.get_settlement().can_diplomacy()) {
			return false;
		}
		if (campaign.type === civitas.CAMPAIGN_CARAVAN && !this.get_settlement().can_trade()) {
			return false;
		}
		switch (campaign.type) {
			case civitas.CAMPAIGN_ARMY:
				break
			case civitas.CAMPAIGN_CARAVAN:
				var total = 0;
				var destination_settlement = this.get_settlement(campaign.destination.id);
				if (typeof campaign.data.resources !== 'undefined') {
					for (var item in campaign.data.resources) {
						if ($.inArray(item, civitas.NON_RESOURCES) === -1) {
							total += civitas.utils.calc_price(campaign.data.resources[item], item);
						} else if (item === 'coins') {
							total += campaign.data.resources[item];
						}
						destination_settlement.add_to_storage(item, campaign.data.resources[item]);
					}
					this.get_settlement().raise_influence(campaign.destination.id, 5);
				}
				break;
		}
		this.remove_campaign(id);
		return this;
	};

	this.add_campaign = function(source_settlement, destination_settlement, type, data) {
		if (type === civitas.CAMPAIGN_ARMY && !this.get_settlement().can_diplomacy()) {
			return false;
		}
		if (type === civitas.CAMPAIGN_CARAVAN && !this.get_settlement().can_trade()) {
			return false;
		}
		var s_loc = civitas['SETTLEMENT_LOCATION_' + source_settlement.get_climate().name.toUpperCase()];
		var d_loc = civitas.SETTLEMENTS[destination_settlement.get_id()].location;
		var duration = civitas.utils.get_distance_in_days(s_loc, d_loc);
		var campaign = {
			source: {
				x: s_loc.x,
				y: s_loc.y,
				id: source_settlement.get_id()
			},
			destination: {
				x: d_loc.x,
				y: d_loc.y,
				id: destination_settlement.get_id()
			},
			duration: duration,
			passed: 0,
			type: type,
			data: data
		};
		this.campaigns.push(campaign);
		this.notify('Your ' + (type === civitas.CAMPAIGN_ARMY ? 'army' : 'caravan') + ' was dispatched towards ' + destination_settlement.get_name() + ' and will reach its destination in ' + duration + ' days.');
		return campaign;
	};

	this.remove_campaign = function(id) {
		var panel;
		if (panel = this.get_panel('campaign')) {
			panel.destroy()
		}
		this.campaigns.splice(id, 1);
		return this;
	};

	/**
	 * Return if the current season is spring.
	 *
	 * @returns {Boolean}
	 * @public
	 */
	this.is_spring = function() {
		if (this.month >= 3 && this.month < 6) {
			return true;
		}
		return false;
	};

	/**
	 * Return if the current season is summer.
	 *
	 * @returns {Boolean}
	 * @public
	 */
	this.is_summer = function() {
		if (this.month >= 6 && this.month < 9) {
			return true;
		}
		return false;
	};

	/**
	 * Return if the current season is autumn.
	 *
	 * @returns {Boolean}
	 * @public
	 */
	this.is_autumn = function() {
		if (this.month >= 9 && this.month < 12) {
			return true;
		}
		return false;
	};

	/**
	 * Return if the current season is winter.
	 *
	 * @returns {Boolean}
	 * @public
	 */
	this.is_winter = function() {
		if (this.month >= 12 || this.month < 3) {
			return true;
		}
		return false;
	};

	// Fire up the constructor
	return this.__init();
};

$(document).ready(function () {
	new civitas.game();
});

/**
 * Settlement panel data.
 *
 * @type {Object}
 */
civitas.PANEL_SETTLEMENT = {
	template: '' +
		'<div id="panel-settlement" class="panel">' +
			'<header>' +
				'<span class="title"></span>' +
				'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents"></div>' +
			'<footer class="footer clearfix">' +
					'<a class="tips attack btn" title="' + civitas.l('Attack this settlement') + '"></a>' +
					'<a class="tips caravan btn" title="' + civitas.l('Send a caravan to this settlement') + '"></a>' +
					'<a class="tips help btn" data-context="settlement" data-term="general" title="' + civitas.l('Info about this settlement') + '"></a>' +
			'</footer>' +
		'</div>',
	params_data: null,
	id: 'settlement',
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
		var my_settlement = core.get_settlement();
		var settlement = params.data;
		var settlement_type = settlement.get_settlement_type();
		this.params_data = params;
		var trades = settlement.get_trades();
		var location = civitas['SETTLEMENT_LOCATION_' + my_settlement.get_climate().name.toUpperCase()];
		$(this.handle + ' header .title').html((settlement.is_city() ? 'City of ' : 'Village of ') + settlement.get_name());
		if (settlement.is_city()) {
			$(this.handle + ' .contents').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Army'), civitas.l('Navy'), civitas.l('Resources'), civitas.l('Imports'), civitas.l('Exports')]));
		} else {
			$(this.handle + ' .contents').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Army'), civitas.l('Navy'), civitas.l('Resources')]));
		}
		this.on_refresh();
		$(this.handle).on('click', '.caravan', function () {
			if (!my_settlement.can_trade()) {
				core.error(civitas.l('You will need to construct a Trading Post before being able to trade resources with other settlements.'));
				return false;
			}
			core.add_campaign(my_settlement, settlement, civitas.CAMPAIGN_CARAVAN, {
				resources: {
					coins: 100000,
					wood: 10,
					stones: 20,
					silk: 10,
					weapons: 100
				}
			});
			self.destroy();
			return false;
		}).on('click', '.attack', function () {
			if (!my_settlement.can_diplomacy()) {
				core.error(civitas.l('You will need to construct an Embassy before being able to propose treaties and pacts to other settlements.'));
				return false;
			}
			my_settlement.diplomacy(settlement.get_id(), civitas.DIPLOMACY_WAR, civitas.SETTLEMENT_TYPES[settlement_type]);
			core.add_campaign(my_settlement, settlement, civitas.CAMPAIGN_ARMY, {
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
				}
			});
			self.destroy();
			return false;
		});
	},
	on_refresh: function() {
		var self = this;
		var core = this.get_core();
		var my_settlement = core.get_settlement();
		var settlement = this.params_data.data;
		var settlement_type = settlement.get_settlement_type();
		var trades = settlement.get_trades();
		var location = civitas['SETTLEMENT_LOCATION_' + my_settlement.get_climate().name.toUpperCase()];
		$(this.handle + ' #tab-info').empty().append('' +
				'<img class="avatar" src="' + civitas.ASSETS_URL + 'images/avatars/avatar' + settlement.get_ruler_avatar() + '.png" />' +
				'<dl>' +
				'<dt>' + settlement.get_ruler().title + '</dt><dd>' + settlement.get_ruler_name() + '</dd>' +
				'<dt>' + civitas.l('Climate') + '</dt><dd>' + settlement.get_climate().name.capitalize() + '</dd>' +
				'<dt>' + civitas.l('Personality') + '</dt><dd>' + settlement.get_personality().name.capitalize() + '</dd>' +
				'<dt>' + civitas.l('Nationality') + '</dt><dd>' + settlement.get_nationality().name.capitalize() + '</dd>' +
				(settlement.is_city() ? 
				'<dt>' + civitas.l('Level') + '</dt><dd>' + settlement.get_level() + '</dd>' +
				'<dt>' + civitas.l('Prestige') + '</dt><dd>' + civitas.ui.progress((settlement.get_prestige() * 100) / civitas.MAX_PRESTIGE_VALUE, 'small', settlement.get_prestige()) + '</dd>' 
				: '' ) + 
				'<dt>' + civitas.l('Coins') + '</dt><dd>' + civitas.utils.nice_numbers(settlement.get_coins()) + '</dd>' +
				'<dt>' + civitas.l('Population') + '</dt><dd>' + civitas.utils.nice_numbers(settlement.get_population()) + '</dd>' +
				'<dt>' + civitas.l('Religion') + '</dt><dd>' + settlement.get_religion().name.capitalize() + '</dd>' +
				'<dt>' + civitas.l('Influence') + '</dt><dd>' + civitas.ui.progress(my_settlement.get_influence_with_settlement(settlement.get_id()), 'small') + '</dd>' +
				'<dt>' + civitas.l('Diplomatic Status') + '</dt><dd>' + my_settlement.get_diplomacy_status(settlement.get_id()).name.capitalize() + '</dd>' +
				'<dt>' + civitas.l('Distance') + '</dt><dd>' + civitas.utils.get_distance(location, civitas.SETTLEMENTS[settlement.get_id()].location) + ' miles (' + civitas.utils.get_distance_in_days(location, civitas.SETTLEMENTS[settlement.get_id()].location) + ' days)</dd>' +
				'</dl>');
		$(this.handle + ' #tab-army').empty().append(civitas.ui.army_list(settlement.get_army_total()));
		$(this.handle + ' #tab-navy').empty().append(civitas.ui.navy_list(settlement.get_navy_total()));
		if (settlement.is_city()) {
			$(this.handle + ' #tab-imports').empty().append('' +
				'<p>' + civitas.l('Below are the goods this city will be buying this year.') + '</p>' +
				civitas.ui.trades_list(trades, 'imports'));
			$(this.handle + ' #tab-exports').empty().append('' +
				'<p>' + civitas.l('Below are the goods this city will be selling this year.') + '</p>' +
				civitas.ui.trades_list(trades, 'exports'));
		}
		var out = '<p>This settlement has the the following resources:</p>';
		for (var item in settlement.get_resources()) {
			if ($.inArray(item, civitas.NON_RESOURCES) === -1 && settlement.resources[item] > 0) {
				out += civitas.ui.resource_storage_small_el(item, settlement.resources[item]);
			}
		}
		$(this.handle + ' #tab-resources').empty().append(out);
	}
};

/**
 * Help panel data.
 *
 * @type {Object}
 */
civitas.PANEL_HELP = {
	template: '' +
		'<div id="panel-help" class="panel">' +
			'<header>' +
				'<span class="title"></span>' +
				'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents">' +
				(civitas.DEBUG === true ?
				'<div class="hr"></div>' +
				'<fieldset class="toolbar">' +
					'<legend>Cheats</legend>' +
					'<a href="#" class="btn iblock one">10k coins</a> ' +
					'<a href="#" class="btn iblock two">100 wood</a> ' +
					'<a href="#" class="btn iblock three">100 stones</a> ' +
					'<a href="#" class="btn iblock four">100 wood planks</a> ' +
					'<a href="#" class="btn iblock five">level up</a> ' +
					'<a href="#" class="btn iblock six">1000 fame</a> ' +
					'<a href="#" class="btn iblock seven">refresh trades</a> ' +
				'</fieldset>' : '') +
			'</div>' +
		'</div>',
	term: null,
	context: null,
	id: 'help',
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
		var settlement = core.get_settlement();
		if (typeof params.data !== 'undefined') {
			this.term = params.data.term;
			this.context = params.data.context;
		}
		var title = '';
		switch (this.context) {
			case 'building':
				var data = core.get_settlement().get_building_by_handle(this.term);
				title = data.get_name();
				break;
			case 'settlement':
				title = 'Settlements';
				break;
		}
		$(this.handle + ' header .title').html(title !== '' ? civitas.l('Help about ') + title : civitas.l('Help'));
		//$(this.handle + ' .contents').append();
		if (civitas.DEBUG === true) {
			$(this.handle).on('click', '.one', function() {
				settlement.inc_coins(10000);
				core.save_and_refresh();
				return false;
			}).on('click', '.two', function() {
				settlement.add_to_storage('wood', 100);
				core.save_and_refresh();
				return false;
			}).on('click', '.three', function() {
				settlement.add_to_storage('stones', 100);
				core.save_and_refresh();
				return false;
			}).on('click', '.four', function() {
				settlement.add_to_storage('woodplanks', 100);
				core.save_and_refresh();
				return false;
			}).on('click', '.five', function() {
				settlement.level_up();
				core.save_and_refresh();
				return false;
			}).on('click', '.six', function() {
				settlement.raise_fame(1000);
				core.save_and_refresh();
				return false;
			}).on('click', '.seven', function() {
				core.refresh_trades();
				core.save_and_refresh();
				return false;
			});
		}
	}
};

/**
 * Building panel data.
 *
 * @type {Object}
 */
civitas.PANEL_BUILDING = {
	template: '' +
		'<div id="panel-building" class="panel pb">' +
			'<header>' +
				'<span class="title"></span>' +
				'<a class="tips close btn" title="' + civitas.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents"></div>' +
			'<footer class="footer clearfix">' +
				'<a class="tips demolish btn" title="' + civitas.l('Demolish this building') + '"></a>' +
				'<a class="tips pause start btn" title="' + civitas.l('Control (start/pause) production') + '"></a>' +
				'<a class="tips upgrade btn" title="' + civitas.l('Upgrade building') + '"></a>' +
				'<a class="tips help btn" data-context="{context}" data-term="{building}" title="' + civitas.l('Info about this building') + '"></a>' +
			'</footer>' +
		'</div>',
	term: null,
	context: null,
	id: 'building',
	on_template: function(params) {
		this.params_data = params.data;
		return params.template.replace(/{building}/g, this.params_data.handle)
			.replace(/{context}/g, 'building');
	},
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
		var el = this.handle;
		var _c = core.get_settlement().get_building_by_handle(this.params_data.handle);
		var level = _c.get_level();
		$(el + ' header .title').html(this.params_data.name);
		this.on_refresh();
		if (!_c.is_upgradable()) {
			$(el + ' .footer .upgrade').remove();
		} else {
			$(el).on('click', '.upgrade', function () {
				if (confirm(civitas.l('Are you sure you want to upgrade this building?')) === true) {
					if (_c.upgrade()) {
						if (!_c.is_upgradable()) {
							$(el + ' .footer .upgrade').remove();
						}
					}
				}
				return false;
			});
		}
		if (_c.is_marketplace()) {
			$(el + ' .footer .demolish').remove();
		} else {
			$(el).on('click', '.demolish', function () {
				if (confirm(civitas.l('Are you sure you want to demolish this building?')) === true) {
					if (_c.demolish()) {
						self.destroy();
						core.refresh();
					}
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
			var context = $(this).data('context');
			core.help(context, term);
			return false;
		});
	},
	on_refresh: function() {
		var _c = this.get_core().get_settlement().get_building_by_handle(this.params_data.handle);
		var level = _c.get_level();
		var _t = '<p class="smalldesc">' + this.params_data.description + '</p>' +
			'<dl>' +
				civitas.ui.cost_panel(this.params_data.cost) +
				civitas.ui.materials_panel(this.params_data.materials) +
				civitas.ui.production_panel(this.params_data.production, level) +
				civitas.ui.requires_panel(this.params_data.requires) +
				civitas.ui.chance_panel(this.params_data.chance, level) +
				civitas.ui.tax_panel(this.params_data.tax, level) +
				civitas.ui.storage_panel(this.params_data.storage, level) +
			'</dl>';
		$('#panel-' + this.id + ' .contents').empty().append(_t);
	}
};

/**
 * Campaign panel data.
 *
 * @type {Object}
 */
civitas.PANEL_CAMPAIGN = {
	template: '' +
		'<div id="panel-campaign" class="panel">' +
			'<header>' +
				'<span class="title"></span>' +
				'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents"></div>' +
		'</div>',
	params_data: null,
	id: 'campaign',
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
		var my_settlement = core.get_settlement();
		var campaign = params.data;
		this.params_data = params;
		$(this.handle + ' .title').empty().html((campaign.type === civitas.CAMPAIGN_ARMY ? civitas.l('Army') : civitas.l('Caravan')));
		if (campaign.type === civitas.CAMPAIGN_ARMY) {
			$(this.handle + ' .contents').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Army'), civitas.l('Navy')]));
		} else {
			$(this.handle + ' .contents').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Resources')]));
		}
		this.on_refresh();
	},
	on_refresh: function() {
		var self = this;
		var core = this.get_core();
		var my_settlement = core.get_settlement();
		var campaign = this.params_data.data;
		var out = '';
		var source = core.get_settlement(campaign.source.id);
		var destination = core.get_settlement(campaign.destination.id);
		var distance = civitas.utils.get_distance(campaign.source, campaign.destination);
		$(this.handle + ' #tab-info').empty().append('' +
			'<img class="avatar" src="' + civitas.ASSETS_URL + 'images/avatars/avatar' + source.get_ruler_avatar() + '.png" />' +
			'<dl>' +
				'<dt>' + civitas.l('Sent By') + '</dt><dd>' + source.get_name() + '</dd>' +
				'<dt>' + civitas.l('Destination') + '</dt><dd>' + destination.get_name() + '</dd>' +
				'<dt>s</dt><dd>d</dd>' +
				'<dt>' + civitas.l('Distance') + '</dt><dd>' + distance + ' miles (' + campaign.duration + ' ' + civitas.l('days') + ')</dd>' +
				'<dt>' + civitas.l('Remaining') + '</dt><dd>' + (10 * (campaign.duration - campaign.passed)) + ' miles (' + (campaign.duration - campaign.passed) + ' ' + civitas.l('days') + ')</dd>' +
			'</dl>');
		if (campaign.type === civitas.CAMPAIGN_ARMY) {
			$(this.handle + ' #tab-army').empty().append(civitas.ui.army_list(campaign.data));
			$(this.handle + ' #tab-navy').empty().append(civitas.ui.navy_list(campaign.data));
		} else {
			if (typeof campaign.data.resources !== 'undefined') {
				out = '<p>' + civitas.l('This caravan has the the following resources:') + '</p>' +
				'<dl>';
				for (var item in campaign.data.resources) {
					out += '<dt>' + campaign.data.resources[item] + '</dt>' +
						'<dd>' + civitas.ui.resource_small_img(item) + '</dd>';
				}
				out += '</dl>';
			} else {
				out = '<p>' + civitas.l('This is an empty caravan with no resources.') + '</p>';
			}
			$(this.handle + ' #tab-resources').empty().append(out);
		}
	}
};

/**
 * Storage panel data.
 *
 * @type {Object}
 */
civitas.PANEL_STORAGE = {
	template: '' +
		'<div id="panel-storage" class="panel">' +
			'<header>' +
				'<span class="title">' + civitas.l('City Storage') + '</span>' +
				'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents"></div>' +
		'</div>',
	expanded: false,
	id: 'storage',
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
		this.on_refresh();
		$(this.handle).on('click', '.toggle-storage', function () {
			if ($('.toggle-storage').html() === civitas.l('Show Less Goods')) {
				self.expanded = false;
				$('.toggle-storage').html(civitas.l('Show More Goods'));
			} else {
				self.expanded = true;
				$('.toggle-storage').html(civitas.l('Show Less Goods'));
			}
			$('.extra-storage').toggle();
			return false;
		});
	},
	on_refresh: function() {
		var settlement = this.get_core().get_settlement();
		var resources = settlement.get_resources();
		var storage_space = settlement.get_storage_space();
		var out = '<div class="main-storage">';
		var main_storage = '';
		var extra_storage = '';
		for (var resource in resources) {
			if ($.inArray(resource, civitas.NON_RESOURCES) === -1) {
				if ($.inArray(resource, civitas.MAIN_RESOURCES) !== -1) {
					main_storage += civitas.ui.resource_storage_el(resource, resources[resource]);
				} else {
					extra_storage += civitas.ui.resource_storage_el(resource, resources[resource]);
				}
			}
		}
		out += main_storage;
		out += '</div>';
		out += '<div class="extra-storage hidden">';
		out += extra_storage;
		out += '</div>';
		out += '<div class="clearfix"></div>' +
				'<p>' + civitas.l('Total storage space') + ': ' + storage_space.all + ', ' + civitas.l('used') + ': ' + storage_space.occupied + '</p>' +
		'<div class="toolbar">' +
			'<a class="btn iblock toggle-storage" href="#">' + civitas.l('Show More Goods') + '</a>' +
		'</div>';
		$(this.handle + ' .contents').empty().append(out);
		if (this.expanded === true) {
			$(this.handle + ' .toggle-storage').trigger('click');
		}
	}
};

/**
 * World panel data.
 *
 * @type {Object}
 */
civitas.PANEL_WORLD = {
	template: '' +
		'<div id="panel-world" class="panel">' +
			'<header>' +
				'<span class="title">' + civitas.l('World Map') + '</span>' +
				'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents">' +
				'<div class="worldmap"></div>' +
			'</div>' +
		'</div>',
	id: 'world',
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
		this.on_refresh();
		$(this.handle).on('click', '.settlement', function () {
			var settlement_name = $(this).data('name');
			if (settlement_name === 'yoursettlement') {
				core.open_panel(civitas.PANEL_COUNCIL);
			} else {
				core.open_panel(civitas.PANEL_SETTLEMENT, core.get_settlement(settlement_name));
			}
			return false;
		}).on('click', '.caravan, .army', function () {
			var id = parseInt($(this).data('id'));
			core.open_panel(civitas.PANEL_CAMPAIGN, core.campaigns[id]);
			return false;
		});
	},
	on_refresh: function() {
		var self = this;
		var core = this.get_core();
		var settlement = core.get_settlement();
		var settlements = core.get_settlements();
		var map = core.get_worldmap();
		var campaigns = core.get_campaigns();
		$(this.handle + ' .worldmap').addClass('w' + map);
		var loc = civitas['SETTLEMENT_LOCATION_' + settlement.get_climate().name.toUpperCase()];
		var out = '<div data-name="yoursettlement" class="tips settlement c1" title="' + civitas.l('City of') + ' ' + settlement.get_name() + '" style="left:' + loc.x + 'px;top:' + loc.y + 'px"></div>';
		for (var i = 1; i < settlements.length; i++) {
			if (settlements[i].get_settlement_type() === civitas.CITY) {
				out += '<div data-name="' + settlements[i].get_name() + '" class="tips settlement c' + civitas.SETTLEMENTS[settlements[i].get_id()].icon + '" title="' + civitas.l('City of') + ' ' + settlements[i].get_name() + '" style="left:' + civitas.SETTLEMENTS[settlements[i].get_id()].location.x + 'px;top:' + civitas.SETTLEMENTS[settlements[i].get_id()].location.y + 'px"></div>';
			} else {
				out += '<div data-name="' + settlements[i].get_name() + '" class="tips settlement v1" title="' + civitas.l('Village of') + ' ' + settlements[i].get_name() + '" style="left:' + civitas.SETTLEMENTS[settlements[i].get_id()].location.x + 'px;top:' + civitas.SETTLEMENTS[settlements[i].get_id()].location.y + 'px"></div>';
			}
		}
		for (var i = 0; i < campaigns.length; i++) {
			var source = campaigns[i].source;
			var destination = campaigns[i].destination;
			var distance_in_days = civitas.utils.get_distance_in_days(source, destination);
			var x = source.x + Math.floor(((destination.x - source.x) / distance_in_days) * campaigns[i].passed);
			var y = source.y - Math.floor(((source.y - destination.y) / distance_in_days) * campaigns[i].passed);
			out += '<div data-id="' + i + '" class="tips ' + (campaigns[i].type === civitas.CAMPAIGN_ARMY ? 'army' : 'caravan') + '" title="' + (campaigns[i].type === civitas.CAMPAIGN_ARMY ? 'Army' : 'Caravan') + '" style="left:' + x + 'px;top:' + y + 'px"></div>';
		}
		$(this.handle + ' .contents .worldmap').empty().append(out);
	}
};

/**
 * Ranks panel data.
 *
 * @type {Object}
 */
civitas.PANEL_RANKS = {
	template: '' +
		'<div id="panel-ranks" class="panel">' +
			'<header>' +
				'<span class="title">' + civitas.l('World Ranks') + '</span>' +
				'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents">' +
				'<div class="ranks-list"></div>' +
			'</div>' +
		'</div>',
	id: 'ranks',
	on_show: function(params) {
		this.on_refresh();
	},
	on_refresh: function() {
		var ranking_list = [];
		var settlements = this.get_core().get_settlements();
		for (var i = 0; i < settlements.length; i++) {
			if (settlements[i].get_settlement_type() === civitas.CITY) {
				ranking_list.push({
					name: settlements[i].get_name(),
					data: settlements[i].get_rank()
				});
			}
		}
		ranking_list.sort(function(a, b) {
		    var keyA = new Date(a.data.score);
		    var keyB = new Date(b.data.score);
		    if (keyA > keyB) {
		    	return -1;
		    }
		    if (keyA < keyB) {
		    	return 1;
		    }
		    return 0;
		});
		var _t = '<table class="normal">';
		_t += '<thead>' +
				'<tr>' +
					'<td class="center">' + civitas.l('Rank') + '</td>' +
					'<td>' + civitas.l('City') + '</td>' +
					'<td class="center">' + civitas.l('Score') + '</td>' +
				'</tr>' +
			'</thead>' +
			'<tbody>';
		for (var i = 0; i < ranking_list.length; i++) {
			_t += '<tr>' +
				'<td class="center">' + (i + 1) + '</td>' +
				'<td>' + ranking_list[i].name + '</td>' +
				'<td class="center">' + ranking_list[i].data.score + '</td>' +
			'</tr>';
		}
		_t += '</tbody>' +
			'</table>';
		$(this.handle + ' .ranks-list').empty().append(_t);
	}
};

/**
 * City Council panel data.
 *
 * @type {Object}
 */
civitas.PANEL_COUNCIL = {
	template: '' +
		'<div id="panel-council" class="panel">' +
			'<header>' +
				'<span class="title">' + civitas.l('City Council') + '</span>' +
				'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents"></div>' +
		'</div>',
	id: 'council',
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
		var el = this.handle;
		var settlement = core.get_settlement();
		$(el + ' .contents').append('' +
			'<div class="tabs">' +
				'<ul>' +
					'<li><a href="#tab-info">' + civitas.l('Info') + '</a></li>' +
					'<li><a href="#tab-tips">' + civitas.l('Tips') + '</a></li>' +
					'<li><a href="#tab-production">' + civitas.l('Production') + '</a></li>' +
					'<li><a href="#tab-housing">' + civitas.l('Housing') + '</a></li>' +
					'<li><a href="#tab-municipal">' + civitas.l('Municipal') + '</a></li>' +
					'<li><a href="#tab-mercenary">' + civitas.l('Mercenaries') + '</a></li>' +
					'<li><a href="#tab-achievements">' + civitas.l('Achievements') + '</a></li>' +
				'</ul>' +
				'<div id="tab-info">' +
				'</div>' +
				'<div id="tab-tips">' +
				'</div>' +
				'<div id="tab-production">' +
				'</div>' +
				'<div id="tab-housing">' +
				'</div>' +
				'<div id="tab-municipal">' +
				'</div>' +
				'<div id="tab-mercenary">' +
				'</div>' +
				'<div id="tab-achievements">' +
					'<div class="achievements-list"></div>' +
				'</div>' +
			'</div>');
		this.on_refresh();
		$(el).on('click', '.view-merc', function () {
			var _army = parseInt($(this).data('id'));
			var data = civitas.MERCENARIES[_army];
			core.open_panel(civitas.PANEL_ARMY, data);
			return false;
		}).on('click', '.raid-merc', function () {
			var _army = parseInt($(this).data('id'));
			var data = civitas.MERCENARIES[_army];
			core.error('Not implemented yet.');
			return false;
		}).on('click', '.campaign-merc', function () {
			var _army = parseInt($(this).data('id'));
			var data = civitas.MERCENARIES[_army];
			core.error('Not implemented yet.');
			return false;
		}).on('click', '.disband-merc', function () {
			var _army = parseInt($(this).data('id'));
			var data = civitas.MERCENARIES[_army];
			core.error('Not implemented yet.');
			return false;
		});
	},
	on_refresh: function() {
		var el = '#panel-' + this.id;
		var core = this.get_core();
		var settlement = core.get_settlement();
		var settlements = core.get_settlements();
		var buildings = settlement.get_buildings();
		var resources = settlement.get_resources();
		var achievements = core.get_achievements();
		var advices = settlement.city_council();
		var el = '#panel-' + this.id;
		var _t = '<p>' + civitas.l('Mercenary armies are available to hire for a fixed price, they do not cost additional resources but they are only available for raiding and campaign missions, they do not participate in the defense of your city.') + '</p>' +
				'<p>' + civitas.l('Also, keep in mind that once a mercenary army is hired, they are at your disposal until the end of the current year.') + '</p>' +
				'<div class="hired-mercenaries-list">';
		if (settlement.mercenary.length > 0) {
			_t += '<table class="normal">';
			for (var i = 0; i < settlement.mercenary.length; i++) {
				var armyData = civitas.MERCENARIES[settlement.mercenary[i].id];
				_t += '<tr>' +
						'<td class="icon"><img src="' + civitas.ASSETS_URL + 'images/armies/' + armyData.icon + '.png" /></td>' +
						'<td><p class="title">' + armyData.name + '</p><p class="description">' + armyData.description + '</p></td>' +
						'<td class="large">' +
						'<a title="' + civitas.l('View info on this mercenary army.') + '" data-id="' + settlement.mercenary[i].id + '" class="tips view-merc" href="#">' + civitas.l('view') + '</a> ' +
						'<a title="' + civitas.l('Send this mercenary army on a raiding mission. Depending on the success of the mission, they will return with coins and/or resources.') + '" data-id="' + i + '" class="tips raid-merc" href="#">' + civitas.l('raid') + '</a> ' +
						'<a title="' + civitas.l('Send this mercenary arm on a campaign towards a city. Depending on the success of the mission, they will return with prisoniers (future soldiers for your army), coins and/or resources. Winning a campaign will grant you fame and prestige.') + '" data-id="' + i + '" class="tips campaign-merc" href="#">' + civitas.l('campaign') + '</a> ' +
						'<a title="' + civitas.l('Disband this mercenary army? They will be available for hire later when you need them.') + '" data-id="' + i + '" class="tips disband-merc" href="#">' + civitas.l('release') + '</a>' +
						'</td>' +
						'</tr>';

			}
			_t += '</table>';
		} else {
			_t += '<p>' + civitas.l('You have no mercenary armies hired for your city. Go to the World Market Trades and hire one.') + '</p>';
		}
		_t += '</div>';
		$('#panel-' + this.id + ' #tab-mercenary').empty().append(_t);
		_t = '';
		if (achievements.length > 0) {
			for (var i = 0; i < achievements.length; i++) {
				var achievement_data = core.get_achievement_by_id(achievements[i].id);
				if (achievement_data !== false) {
					_t += '<div class="achievement">' +
						'<div class="left">' +
							'<div class="ach img"></div>' +
						'</div>' +
						'<div class="right">' +
							'<div class="inner">' +
								'<h2>' + achievement_data.name + '</h2>' +
								achievement_data.description +
							'</div>' +
							'<div class="time" title="' + achievements[i].date + '">' +
								'<strong>' + civitas.utils.time_since(achievements[i].date) + '</strong> ago' +
							'</div>' +
						'</div>' +
					'</div>';
				}
			}
		} else {
			_t += '<p>You have no achievements so far. Keep playing!</p>'
		}
		$('#panel-' + this.id + ' .achievements-list').empty().append(_t);
		_t = '<img class="avatar" src="' + civitas.ASSETS_URL + 'images/avatars/avatar' + settlement.get_ruler_avatar() + '.png" />' +
				'<dl>' +
				'<dt>' + civitas.l('Current date') + '</dt><dd class="citydate">' + core.get_date() + '</dd>' +
				'<dt>' + civitas.l('Ruler') + '</dt><dd>' + settlement.get_ruler_name() + '</dd>' +
				'<dt>' + civitas.l('Climate') + '</dt><dd>' + settlement.get_climate().name.capitalize() + '</dd>' +
				'<dt>' + civitas.l('Personality') + '</dt><dd>' + settlement.get_personality().name.capitalize() + '</dd>' +
				'<dt>' + civitas.l('Nationality') + '</dt><dd>' + settlement.get_nationality().name.capitalize() + '</dd>' +
				'<dt>' + civitas.l('Population') + '</dt><dd>' + civitas.utils.nice_numbers(settlement.get_population()) + '</dd>' +
				'<dt>' + civitas.l('Religion') + '</dt><dd>' + settlement.get_religion().name.capitalize() + '</dd>' +
				'<dt>' + civitas.l('Level') + '</dt><dd>' + civitas.ui.progress((settlement.get_level() * 100) / civitas.MAX_SETTLEMENT_LEVEL, 'small', settlement.get_level()) + '</dd>' +
				'<dt>' + civitas.l('Prestige') + '</dt><dd>' + civitas.ui.progress((settlement.get_prestige() * 100) / civitas.MAX_PRESTIGE_VALUE, 'small', settlement.get_prestige()) + '</dd>' +
				'<dt>' + civitas.l('Espionage') + '</dt><dd>' + civitas.ui.progress((settlement.get_espionage() * 100) / civitas.MAX_ESPIONAGE_VALUE, 'small', settlement.get_espionage()) + '</dd>' +
				'<dt>' + civitas.l('Faith') + '</dt><dd>' + civitas.ui.progress((settlement.get_faith() * 100) / civitas.MAX_FAITH_VALUE, 'small', settlement.get_faith()) + '</dd>' +
				'<dt>' + civitas.l('Research') + '</dt><dd>' + civitas.ui.progress((settlement.get_research() * 100) / civitas.MAX_RESEARCH_VALUE, 'small', settlement.get_research()) + '</dd>' +
			'</dl>';
		$('#panel-' + this.id + ' #tab-info').empty().append(_t);
		_t = '';
		if (advices.length > 0) {
			_t += '<ul class="advices">';
			for (var z = 0; z < advices.length; z++) {
				_t += '<li>' + advices[z] + '</li>';
			}
			_t += '</ul>';
		}
		$('#panel-' + this.id + ' #tab-tips').empty().append(_t);
		_t = '<table class="normal">' +
					'<thead>' +
					'<tr>' +
						'<td></td>' +
						'<td class="center">' + civitas.l('Level') + '</td>' +
						'<td>' + civitas.l('Raises') + '</td>' +
						'<td>' + civitas.l('Uses') + '</td>' +
					'</tr>' +
					'</thead>';
		var total_costs = 0;
		var total_benefits = {
			fame: 0,
			espionage: 0,
			research: 0
		}
		for (var l = 0; l < buildings.length; l++) {
			if (buildings[l].is_municipal_building()) {
				var building_data = buildings[l].get_building_data();
				_t += '<tr' + ((buildings[l].has_problems() === false) ? '' : ' class="notify"') +'>' +
					'<td>' + buildings[l].get_name() + '</td>' +
					'<td class="center">' + buildings[l].get_level() + '</td>' +
					'<td>';
					'<td>';
					if (building_data.production) {
						for (var item in building_data.production) {
							total_benefits[item] += (buildings[l].has_problems() === false) ? buildings[l].get_level() * building_data.production[item] : 0;
							_t += ' +' + buildings[l].get_level() * building_data.production[item] + ' ' + civitas.ui.resource_small_img(item);
						}
					}
				_t += '</td>' +
					'<td>';
					if (building_data.materials) {
						for (var item in building_data.materials) {
							total_costs += (buildings[l].has_problems() === false) ? building_data.materials[item] : 0;
							_t += ' -' + building_data.materials[item] + ' ' + civitas.ui.resource_small_img(item);
						}
					}
				_t += '</td>' +
				'</tr>';
			}
		}
		var _z = '';
		for (var item in total_benefits) {
			if (total_benefits[item] > 0) {
				_z += ' +' + total_benefits[item] + ' ' + civitas.ui.resource_small_img(item);
			}
		}
		_t += '<tfoot>' +
							'<tr>' +
								'<td>' + civitas.l('Total') + '</td>' +
								'<td></td>' +
								'<td>' + _z + '</td>' +
								'<td>-' + total_costs + ' ' + civitas.ui.resource_small_img('coins') + '</td>' +
							'</tr>' +
						'</tfoot>' +
					'</table>';
		$('#panel-' + this.id + ' #tab-municipal').empty().append(_t);
		_t = '<table class="normal">' +
					'<thead>' +
					'<tr>' +
						'<td></td>' +
						'<td class="center">' + civitas.l('Level') + '</td>' +
						'<td>' + civitas.l('Tax') + '</td>' +
						'<td>' + civitas.l('Materials') + '</td>' +
					'</tr>' +
					'</thead>';
		var total_tax = 0;
		for (var l = 0; l < buildings.length; l++) {
			if (buildings[l].is_housing_building()) {
				var building_data = buildings[l].get_building_data();
				_t += '<tr' + ((buildings[l].has_problems() === false) ? '' : ' class="notify"') +'>' +
					'<td>' + buildings[l].get_name() + '</td>' +
					'<td class="center">' + buildings[l].get_level() + '</td>' +
					'<td>';
					if (building_data.tax) {
						total_tax += (buildings[l].has_problems() === false) ? buildings[l].get_level() * building_data.tax : 0;
						_t += ' +' + buildings[l].get_level() * building_data.tax + ' ' + civitas.ui.resource_small_img('coins');
					}
				_t += '</td>' +
					'<td>';
					if (building_data.materials) {
						for (var item in building_data.materials) {
							_t += ' -' + building_data.materials[item] + ' ' + civitas.ui.resource_small_img(item);
						}
					}
				_t += '</td>' +
				'</tr>';
			}
		}
		_t += '<tfoot>' +
							'<tr>' +
								'<td>' + civitas.l('Income') + '</td>' +
								'<td></td>' +
								'<td>+' + total_tax + ' ' + civitas.ui.resource_small_img('coins') + '</td>' +
								'<td></td>' +
							'</tr>' +
						'</tfoot>' +
					'</table>';
		$('#panel-' + this.id + ' #tab-housing').empty().append(_t);
		_t = '<table class="normal">' +
					'<thead>' +
					'<tr>' +
						'<td></td>' +
						'<td class="center">' + civitas.l('Level') + '</td>' +
						'<td>' + civitas.l('Production') + '</td>' +
						'<td>' + civitas.l('Materials') + '</td>' +
						'<td class="center">' + civitas.l('Stopped') + '</td>' +
					'</tr>' +
					'</thead>';
		for (var l = 0; l < buildings.length; l++) {
			if (buildings[l].is_production_building() && buildings[l].is_municipal_building() === false) {
				var building_data = buildings[l].get_building_data();
				_t += '<tr' + ((buildings[l].has_problems() === false) ? '' : ' class="notify"') +'>' +
					'<td>' + buildings[l].get_name() + '</td>' +
					'<td class="center">' + buildings[l].get_level() + '</td>' +
					'<td>';
					if (building_data.production) {
						for (var item in building_data.production) {
							_t += ' +' + buildings[l].get_level() * building_data.production[item] + ' ' + civitas.ui.resource_small_img(item);
						}
					}
				_t += '</td>' +
					'<td>';
					if (building_data.materials) {
						for (var item in building_data.materials) {
							_t += ' -' + building_data.materials[item] + ' ' + civitas.ui.resource_small_img(item);
						}
					}
				_t += '</td>' +
					'<td class="center">' + ((buildings[l].is_producing() === true) ? civitas.l('no') : civitas.l('yes')) + '</td>' +
				'</tr>';
			}
		}
		_t += '<tfoot>' +
					'<tr>' +
						'<td></td>' +
						'<td class="center">' + civitas.l('Level') + '</td>' +
						'<td>' + civitas.l('Production') + '</td>' +
						'<td>' + civitas.l('Materials') + '</td>' +
						'<td class="center">' + civitas.l('Stopped') + '</td>' +
					'</tr>' +
				'</tfoot>' +
			'</table>';
		$('#panel-' + this.id + ' #tab-production').empty().append(_t);
	}
};

/**
 * Army panel data.
 *
 * @type {Object}
 */
civitas.PANEL_ARMY = {
	template: '' +
		'<div id="panel-army" class="panel">' +
			'<header>' +
				'<span class="title"></span>' +
				'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents"></div>' +
		'</div>',
	id: 'army',
	on_show: function(params) {
		var army = params.data;
		$(this.handle + ' header .title').html(army.name);
		$(this.handle + ' .contents').append(civitas.ui.tabs(['Info', 'Soldiers', 'Ships']));
		$(this.handle + ' #tab-info').append('<img class="avatar" src="' + civitas.ASSETS_URL + 'images/armies/' + ((typeof army.icon !== 'undefined') ? army.icon : '22') + '.png" /><p>' + army.description + '</p>');
		$(this.handle + ' #tab-soldiers').append(civitas.ui.army_list(army));
		$(this.handle + ' #tab-ships').append(civitas.ui.navy_list(army));
	}
};

/**
 * Buildings panel data.
 *
 * @type {Object}
 */
civitas.PANEL_BUILDINGS = {
	template: '' +
		'<div id="panel-buildings" class="panel">' +
			'<header>' +
				'<span class="title">' + civitas.l('City Buildings') + '</span>' +
				'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents"></div>' +
		'</div>',
	id: 'buildings',
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
		var settlement = core.get_settlement();
		var resources = settlement.get_resources();
		var el = this.handle;
		var _t = '<div class="left buildings">';
		var available_buildings = civitas['SETTLEMENT_BUILDINGS_' + settlement.get_climate().name.toUpperCase()];
		_t += '<div class="tabs">' +
				'<ul>';
		for (var category in civitas.BUILDINGS_CATEGORIES) {
			_t += '<li><a href="#tab-' + category.toLowerCase() + '">' + category + '</a></li>';
		}
		_t += '</ul>';
		for (var category in civitas.BUILDINGS_CATEGORIES) {
			_t += '<div id="tab-' + category.toLowerCase() + '" class="bldg-tabs">';
			for (var i = 0; i < civitas.BUILDINGS_CATEGORIES[category].length; i++) {
				var building = civitas.BUILDINGS_CATEGORIES[category][i];
				if ($.inArray(building, available_buildings) !== -1) {
					var building_data = civitas.BUILDINGS[civitas.BUILDINGS.findIndexM(building)];
					var _i = settlement.is_building_built(building_data.handle);
					_t += '<div data-handle="' + building_data.handle + '" class="building-item' + ((_i === true) ? ' disabled' : '') + '">' +
							'<span class="title">' + building_data.name + '</span>' +
							'<img class="building" src="' + civitas.ASSETS_URL + 'images/buildings/' + ((building_data.handle.slice(0, -1) === 'house') ? building_data.handle.slice(0, -1) : building_data.handle) + '1.png" />' +
							'</div>';
				}
			}
			_t += '</div>';
		}
		_t += '</div>' +
			'</div><div class="buildings-info right">' +
				'<div class="b-desc"></div>' +
				'<fieldset>' +
				'<legend>' + civitas.l('Cost') + '</legend>' +
				'<div class="b-cost"></div>' +
				'</fieldset>' +
				'<fieldset class="materials">' +
				'<legend>' + civitas.l('Materials') + '</legend>' +
				'<div class="b-mats"></div>' +
				'</fieldset>' +
				'<fieldset class="production">' +
				'<legend>' + civitas.l('Production') + '</legend>' +
				'<div class="b-prod"></div>' +
				'</fieldset>' +
				'<fieldset class="extra">' +
				'<legend>' + civitas.l('Extra materials') + '</legend>' +
				'<div class="b-chance"></div>' +
				'</fieldset>' +
				'<fieldset class="storage">' +
				'<legend>' + civitas.l('Storage') + '</legend>' +
				'<div class="b-store"></div>' +
				'</fieldset>' +
				'<fieldset class="taxes">' +
				'<legend>' + civitas.l('Taxes') + '</legend>' +
				'<div class="b-tax"></div>' +
				'</fieldset>' +
				'<fieldset>' +
				'<legend>' + civitas.l('Requirements') + '</legend>' +
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
			var building = civitas.BUILDINGS[civitas.BUILDINGS.findIndexM(handle)];
			$(el + ' header .title').html(civitas.l('City Buildings') + ' - ' + building.name);
			$(el + ' .b-desc').html(building.description);
			var _z = '<dl class="nomg">';
			for (var y in building.cost) {
				_z += '<dt>' + civitas.utils.nice_numbers(building.cost[y]) + '</dt><dd><img class="tips" title="' + civitas.utils.get_resource_name(y) + '" src="' + civitas.ASSETS_URL + 'images/resources/' + y + '_small.png" /></dd>';
			}
			_z += '</dl>';
			$(el + ' .b-cost').append(_z);
			if (typeof building.requires !== 'undefined') {
				_z = '<dl class="nomg">';
				if (typeof building.requires.buildings !== 'undefined') {
					if (typeof building.requires.buildings === 'object') {
						for (var i = 0; i < building.requires.buildings.length; i++) {
							_z += '<dt>' + civitas.l('Building') + '</dt><dd>' + core.get_building_config_data(building.requires.buildings[i]).name + '</dd>';
						}
					} else {
						_z += '<dt>' + civitas.l('Building') + '</dt><dd>' + core.get_building_config_data(building.requires.buildings).name + '</dd>';
					}
				}
				_z += '<dt>' + civitas.l('City level') + '</dt><dd>' + building.requires.settlement_level + '</dd>' +
						'</dl>';
				$(el + ' .b-req').append(_z);
			}
			if (typeof building.chance !== 'undefined') {
				_z = '<dl class="nomg">';
				for (var chance in building.chance) {
					_z += '<dt>' + building.chance[chance] * 100 + '%</dt><dd><img class="tips" title="' + civitas.utils.get_resource_name(chance) + '" src="' + civitas.ASSETS_URL + 'images/resources/' + chance + '_small.png" /></dd>';
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
						_z += '<dt>' + building.production[y] + '</dt><dd><img class="tips" title="' + civitas.utils.get_resource_name(y) + '" src="' + civitas.ASSETS_URL + 'images/resources/' + y + '_small.png" /></dd>';
					}
					_z += '</dl>';
					$(el + ' .b-prod').append(_z);
					$('fieldset.production').show();
				}
				if (typeof building.materials !== 'undefined') {
					_z = '<dl class="nomg">';
					for (var y in building.materials) {
						_z += '<dt>' + building.materials[y] + '</dt><dd><img class="tips" title="' + civitas.utils.get_resource_name(y) + '" src="' + civitas.ASSETS_URL + 'images/resources/' + y + '_small.png" /></dd>';
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
						_z += '<dt>' + building.materials[y] + '</dt><dd><img class="tips" title="' + civitas.utils.get_resource_name(y) + '" src="' + civitas.ASSETS_URL + 'images/resources/' + y + '_small.png" /></dd>';
					}
					_z += '</dl>';
					$(el + ' .b-mats').append(_z);
					$('fieldset.materials').show();
				}
				if (typeof building.tax !== 'undefined') {
					_z = '<dl class="nomg">' +
							'<dt>Tax</dt>' +
							'<dd>' + building.tax + '<img class="tips" title="' + civitas.l('Coins') + '" src="' + civitas.ASSETS_URL + 'images/resources/coins_small.png" /></dd>' +
							'</dl>';
					$(el + ' .b-tax').append(_z);
					$('fieldset.taxes').show();
				}
			} else if (typeof building.storage !== 'undefined') {
				$('fieldset.taxes, fieldset.production, fieldset.materials').hide();
				_z = '<dl class="nomg">' +
						'<dt>' + building.storage + '</dt><dd><img class="tips" title="' + civitas.l('Storage Space') + '" src="' + civitas.ASSETS_URL + 'images/resources/storage_small.png" /></dd>' +
						'</dl>';
				$(el + ' .b-store').append(_z);
				$('fieldset.storage').show();
			} else {
				$('fieldset.taxes, fieldset.production, fieldset.materials, fieldset.storage').hide();
			}
			var _i = settlement.is_building_built(building.handle);
			if (_i !== true) {
				$(el + ' .toolbar').append('<a href="#" class="btn build" data-handle="' + building.handle + '">' + civitas.l('Build') + '</a>');
			} else {
				$(el + ' .toolbar').append(civitas.l('You already constructed this building.'));
			}
			$(el + ' .right').show();
			return false;
		}).on('click', '.btn.build', function () {
			var handle = $(this).data('handle');
			if (settlement.build(handle) !== false) {
				$(el + ' .building-item[data-handle=' + handle + ']').addClass('disabled');
				$(el + ' .toolbar').empty().append(civitas.l('You already have this building.'));
			}
			return false;
		});
	}
};

/**
 * Trades panel data.
 *
 * @type {Object}
 */
civitas.PANEL_TRADES = {
	template: '' +
		'<div id="panel-trades" class="panel">' +
			'<header>' +
				'<span class="title">' + civitas.l('World Market') + '</span>' +
				'<a class="tips btn close" title="' + civitas.l('Close this panel') + '"></a>' +
			'</header>' +
			'<div class="contents"></div>' +
		'</div>',
	id: 'trades',
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
		var settlement = core.get_settlement();
		var el = this.handle;
		var _t = '';
		_t += civitas.ui.tabs([civitas.l('Export'), civitas.l('Import'), civitas.l('Mercenaries'), civitas.l('BlackMarket'), civitas.l('Prices')]);
		$(el + ' .contents').append(_t);
		$(el + ' #tab-import').append('<p>' + civitas.l('Below is a list of goods that the other cities in the world are looking to sell. The goods replenish every three months, so plan accordingly. You will need to build a Trading Post before being able to sell goods.') + '</p><div class="contents"></div>');
		$(el + ' #tab-export').append('<p>' + civitas.l('Below is a list of goods that the other cities in the world are looking to buy. The goods replenish every three months, so plan accordingly. You will need to build a Trading Post before being able to buy goods.') + '</p><div class="contents"></div>');
		$(el + ' #tab-mercenaries').append('<p>' + civitas.l('Below is a list of mercenary armies that are looking for hire. Mercenaries are available only for raiding and conquest missions, they do not join your city so they will not participate in defense.') + '</p><div class="contents"></div>');
		$(el + ' #tab-blackmarket').append('<p>' + civitas.l('The Black Market is a way to dump your excess materials when you`re in need of emptying your warehouses, but expect a steep price drop (taxes for all Black Market trades are <strong>') + civitas.BLACK_MARKET_DISCOUNT + civitas.l('%</strong>). The goods will be taken immediately from your warehouses but you will receive the coins at the <strong>start of the next month</strong>. Also, you get <strong>no prestige</strong> from Black Market trades.') + '</p><div class="contents"></div>');
		$(el + ' #tab-prices').append('<div class="contents"></div>');
		this.on_refresh();
		$(el).on('click', '.buy:not(.disabled)', function () {
			if (!settlement.can_trade()) {
				core.error(civitas.l('You will need to construct a Trading Post before being able to trade resources with other settlements.'));
				return false;
			}
			var handle = $(this).data('settlement');
			var resource = $(this).data('resource');
			if (settlement.buy_from_settlement(handle, resource) !== false) {
				self.on_refresh();
			}
			return false;
		}).on('click', '.sell:not(.disabled)', function () {
			if (!settlement.can_trade()) {
				core.error(civitas.l('You will need to construct a Trading Post before being able to trade resources with other settlements.'));
				return false;
			}
			var handle = $(this).data('settlement');
			var resource = $(this).data('resource');
			if (settlement.sell_to_settlement(handle, resource) !== false) {
				self.on_refresh();
			}
			return false;
		}).on('click', '.bmarket', function () {
			var resource = $('.bm-materials').val();
			var auto_amount = $('.bm-quantity').val();
			var manual_amount = $('.bm-qty-manual').val();
			var amount = manual_amount === '' ? parseInt(auto_amount) : parseInt(manual_amount);
			if (resource !== '0' && amount > 0) {
				if (settlement.list_black_market(resource, amount)) {
					self.on_refresh();
				}
			} else {
				core.error(civitas.l('Select a resource and the amount of it you want to place on the Black Market.'));
			}
			return false;
		}).on('click', '.recruit:not(.disabled)', function () {
			var handle = $(this).data('handle');
			if (settlement.recruit_mercenary_army(handle) !== false) {
				self.on_refresh();
			}
			return false;
		}).on('click', '.view-army:not(.disabled)', function () {
			var army = parseInt($(this).data('id'));
			var army_data = civitas.MERCENARIES[army];
			core.open_panel(civitas.PANEL_ARMY, army_data);
			return false;
		});
	},
	on_refresh: function() {
		var core = this.get_core();
		var settlement = core.get_settlement();
		var settlements = core.get_settlements();
		var out = '<table class="normal">';
		out += '<thead>' +
				'<tr>' +
				'<td>' + civitas.l('Resources') + ': <select class="bm-materials"></select></td>' +
				'<td>' + civitas.l('Quantity') + ': ' +
				'<select class="bm-quantity">' +
				'<option value="0">-- ' + civitas.l('select') + ' --</option>' +
				'<option value="10">10</option>' +
				'<option value="100">100</option>' +
				'<option value="1000">1000</option>' +
				'<option value="10000">10000</option>' +
				'</select>' +
				' ' + civitas.l('or enter manually') + ' <input type="text" placeholder="' + civitas.l('amount') + '" class="small bm-qty-manual" />' +
				'</td>' +
				'<td><a title="' + civitas.l('List goods on Black Market') + '" class="tips bmarket" href="#">' + civitas.l('list') + '</a></td>' +
				'</tr>' +
				'</thead>';
		out += '<tbody>' +
				'</tbody>' +
				'</table>';
		$('#tab-blackmarket > .contents').empty().append(out);

		var out = '';
		var bm = core.get_black_market();
		for (var item in bm) {
			out += '<tr>' +
					'<td>' + civitas.l('Amount') + ': ' + bm[item].amount + civitas.ui.resource_small_img(item) + '</td>' +
					'<td>' + civitas.l('Total price') + ': ' + bm[item].price + civitas.ui.resource_small_img('coins') + '</td>' +
					'<td>&nbsp;</td>' +
					'</tr>';
		}
		$('#tab-blackmarket > .contents > table > tbody').empty().append(out);

		var out = '<option value="0">-- ' + civitas.l('select') + ' --</option>';
		var resources = settlement.get_resources();
		for (var item in resources) {
			if ($.inArray(item, civitas.NON_RESOURCES) === -1) {
				out += '<option value="' + item + '"> ' + civitas.utils.get_resource_name(item) + '</option>';
			}
		}
		$('.bm-materials').empty().append(out);

		var out = '<table class="normal">' +
					'<thead>' +
					'<tr>' +
						'<td>' + civitas.l('City') + '</td>' +
						'<td class="center">' + civitas.l('Goods') + '</td>' +
						'<td class="center">' + civitas.l('Amount') + '</td>' +
						'<td class="center">' + civitas.l('Price') + '</td>' +
						'<td class="center">' + civitas.l('Discount') + '</td>' +
						'<td class="center">' + civitas.l('City Price') + '</td>' +
						'<td class="center">' + civitas.l('Total price') + '</td>' +
						'<td></td>' +
					'</tr>' +
					'</thead>';
		for (var z = 0; z < settlements.length; z++) {
			var settlement = settlements[z];
			var trades = settlements[z].get_trades();
			var resources = settlement.get_resources();
			if (trades !== null) {
				var imports = trades.imports;
				for (var item in imports) {
					var discount = Math.ceil((civitas.RESOURCES[item].price * civitas.TRADES_DISCOUNT) / 100);
					var discount_price = Math.ceil(civitas.RESOURCES[item].price - discount);
					out += '<tr>' +
							'<td>' + settlements[z].get_name() + '</td>' +
							'<td class="center">' + civitas.ui.resource_small_img(item) + '</td>' +
							'<td class="center">' + imports[item] + '</td>' +
							'<td class="center">' + civitas.RESOURCES[item].price + civitas.ui.resource_small_img('coins') + '</td>' +
							'<td class="center">' + discount + civitas.ui.resource_small_img('coins') + '</td>' +
							'<td class="center">' + discount_price + civitas.ui.resource_small_img('coins') + '</td>' +
							'<td class="center">' + Math.ceil(discount_price * imports[item]) + civitas.ui.resource_small_img('coins') + '</td>' +
							'<td class="center"><a title="' + civitas.l('Sell those goods') + '" data-resource="' + item + '" data-settlement="' + settlements[z].get_name() + '" class="tips sell' + (imports[item] === 0 ? ' disabled' : '') + '" href="#">' + civitas.l('sell') + '</a></td>' +
							'</tr>';
				}
			}
		}
		out += '<tfoot>' +
					'<tr>' +
						'<td>' + civitas.l('City') + '</td>' +
						'<td class="center">' + civitas.l('Goods') + '</td>' +
						'<td class="center">' + civitas.l('Amount') + '</td>' +
						'<td class="center">' + civitas.l('Price') + '</td>' +
						'<td class="center">' + civitas.l('Discount') + '</td>' +
						'<td class="center">' + civitas.l('City Price') + '</td>' +
						'<td class="center">' + civitas.l('Total price') + '</td>' +
						'<td></td>' +
					'</tr>' +
				'</tfoot>' +
			'</table>';
		$('#tab-export > .contents').empty().append(out);

		var out = '<table class="mercenaries">';
		for (var i = 0; i < civitas.MERCENARIES.length; i++) {
			out += '<tr>' +
					'<td class="icon">' +
						'<img src="' + civitas.ASSETS_URL + 'images/armies/' + civitas.MERCENARIES[i].icon + '.png" />' +
					'</td>' +
					'<td>' +
						'<p class="title">' + civitas.MERCENARIES[i].name + '</p>' +
						'<p class="description">' + civitas.MERCENARIES[i].description + '</p>' +
					'</td>' +
					'<td>' + 
						civitas.utils.nice_numbers(civitas.MERCENARIES[i].cost) + civitas.ui.resource_small_img('coins') + 
					'</td>' +
					'<td class="medium">' +
						'<a title="' + civitas.l('View info on this mercenary army') + '" data-id="' + i + '" class="tips view-army" href="#">view</a> ' +
						civitas.ui.panel_btn('recruit', civitas.l('Recruit this mercenary army'), civitas.MERCENARIES[i].handle, 'recruit', settlement.is_mercenary_recruited(civitas.MERCENARIES[i].handle)) +
					'</td>' +
				'</tr>';
		}
		out += '</table>';
		$('#tab-mercenaries > .contents').empty().append(out);

		var out = '<table class="normal">' +
					'<thead>' +
					'<tr>' +
						'<td>' + civitas.l('City') + '</td>' +
						'<td class="center">' + civitas.l('Goods') + '</td>' +
						'<td class="center">' + civitas.l('Amount') + '</td>' +
						'<td class="center">' + civitas.l('Price') + '</td>' +
						'<td class="center">' + civitas.l('Tax') + '</td>' +
						'<td class="center">' + civitas.l('City Price') + '</td>' +
						'<td class="center">' + civitas.l('Total price') + '</td>' +
						'<td></td>' +
					'</tr>' +
					'</thead>';
		for (var z = 0; z < settlements.length; z++) {
			var settlement = settlements[z];
			var trades = settlements[z].get_trades();
			var resources = settlement.get_resources();
			if (trades !== null) {
				var exports = trades.exports;
				for (var item in exports) {
					var discount = Math.ceil((civitas.RESOURCES[item].price * civitas.TRADES_ADDITION) / 100);
					var discount_price = Math.ceil(civitas.RESOURCES[item].price + discount);
					out += '<tr>' +
							'<td>' + settlements[z].get_name() + '</td>' +
							'<td class="center">' + civitas.ui.resource_small_img(item) + '</td>' +
							'<td class="center">' + exports[item] + '</td>' +
							'<td class="center">' + civitas.RESOURCES[item].price + civitas.ui.resource_small_img('coins') + '</td>' +
							'<td class="center">' + discount + civitas.ui.resource_small_img('coins') + '</td>' +
							'<td class="center">' + discount_price + civitas.ui.resource_small_img('coins') + '</td>' +
							'<td class="center">' + Math.ceil(discount_price * exports[item]) + civitas.ui.resource_small_img('coins') + '</td>' +
							'<td class="center"><a title="' + civitas.l('Buy those goods') + '" data-resource="' + item + '" data-settlement="' + settlements[z].get_name() + '" class="tips buy' + (exports[item] === 0 ? ' disabled' : '') + '" href="#">' + civitas.l('buy') + '</a></td>' +
							'</tr>';
				}
			}
		}
		out += '<tfoot>' +
					'<tr>' +
						'<td>' + civitas.l('City') + '</td>' +
						'<td class="center">' + civitas.l('Goods') + '</td>' +
						'<td class="center">' + civitas.l('Amount') + '</td>' +
						'<td class="center">' + civitas.l('Price') + '</td>' +
						'<td class="center">' + civitas.l('Tax') + '</td>' +
						'<td class="center">' + civitas.l('City Price') + '</td>' +
						'<td class="center">' + civitas.l('Total price') + '</td>' +
						'<td></td>' +
					'</tr>' +
				'</tfoot>' +
			'</table>';
		$('#tab-import > .contents').empty().append(out);

		var out = '<table class="normal">' +
					'<thead>' +
					'<tr>' +
						'<td>' + civitas.l('Resource') + '</td>' +
						'<td class="center">' + civitas.l('Icon') + '</td>' +
						'<td class="center">' + civitas.l('Price') + '</td>' +
						'<td class="center tips" title="This is the price you get for selling one unit of the resource to another settlement, minus the <strong>' + civitas.TRADES_DISCOUNT + '%</strong> export taxes.">' + civitas.l('Sell Price') + '</td>' +
						'<td class="center tips" title="This is the price you get for buying one unit of the resource from another settlement, plus the <strong>' + civitas.TRADES_ADDITION + '%</strong> import taxes.">' + civitas.l('Buy Price') + '</td>' +
						'<td class="center tips" title="This is the price you get for placing one unit of the resource on the Black Market, minus the <strong>' + civitas.BLACK_MARKET_DISCOUNT + '%</strong> taxes.">' + civitas.l('BM Price') + '</td>' +
						'<td class="center tips" title="If the resource is listed as produced, that possibility depends on the location and climate of your settlement (ex. tropical settlements can build <strong>Sugar Farms</strong> and produce <strong>Sugar</strong>).">' + civitas.l('Type') + '</td>' +
					'</tr>' +
					'</thead>';
		for (var item in civitas.RESOURCES) {
			if ($.inArray(item, civitas.NON_RESOURCES) === -1) {
				var discount = Math.ceil((civitas.RESOURCES[item].price * civitas.TRADES_ADDITION) / 100);
				var tax = Math.ceil((civitas.RESOURCES[item].price * civitas.TRADES_DISCOUNT) / 100);
				var bm_tax = Math.ceil((civitas.RESOURCES[item].price * civitas.BLACK_MARKET_DISCOUNT) / 100);
				out += '<tr>' +
					'<td>' + civitas.RESOURCES[item].name + '</td>' +
					'<td class="center">' + civitas.ui.resource_small_img(item) + '</td>' +
					'<td class="center">' + civitas.RESOURCES[item].price + civitas.ui.resource_small_img('coins') + '</td>' +
					'<td class="center">' + (civitas.RESOURCES[item].price - tax) + civitas.ui.resource_small_img('coins') + '</td>' +
					'<td class="center">' + (civitas.RESOURCES[item].price + discount) + civitas.ui.resource_small_img('coins') + '</td>' +
					'<td class="center">' + (civitas.RESOURCES[item].price - bm_tax) + civitas.ui.resource_small_img('coins') + '</td>' +
					'<td class="center">' + ((civitas.RESOURCES[item].imported === true) ? civitas.l('imported') : civitas.l('produced')) + '</td>' +
				'</tr>';
			}
		}
		out += '<tfoot>' +
					'<tr>' +
						'<td>' + civitas.l('Resource') + '</td>' +
						'<td class="center">' + civitas.l('Icon') + '</td>' +
						'<td class="center">' + civitas.l('Price') + '</td>' +
						'<td class="center">' + civitas.l('Sell Price') + '</td>' +
						'<td class="center">' + civitas.l('Buy Price') + '</td>' +
						'<td class="center">' + civitas.l('BM Price') + '</td>' +
						'<td class="center">' + civitas.l('Type') + '</td>' +
					'</tr>' +
				'</tfoot>' +
			'</table>';
		$('#tab-prices > .contents').empty().append(out);

	}
};

/**
 * Military Camp panel data.
 *
 * @type {Object}
 */
civitas.PANEL_CAMP = {
	template: civitas.ui.building_panel_template('camp', civitas.l('Military Camp')),
	id: 'camp',
	on_show: function(params) {
		var self = this;
		this.params_data = params.data;
		var core = this.get_core();
		$(this.handle + ' .contents').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Army')]));
		this.on_refresh();
		$(this.handle).on('click', '.recruit-soldier', function () {
			var soldier = $(this).data('handle');
			if (core.get_settlement().recruit_soldier(soldier)) {
				self.on_refresh();
			}
			return false;
		});
	},
	on_refresh: function() {
		var core = this.get_core();
		var settlement = core.get_settlement();
		var building = core.get_settlement().get_building_by_handle(this.params_data.handle);
		$(this.handle + ' #tab-info').empty().append(civitas.ui.building_panel(this.params_data, building.get_level()));
		var _t = '<div class="army-list">' +
				'</div>' +
				'<div class="army-recruiter">';
		for (var item in civitas.SOLDIERS) {
			_t += '<fieldset>' +
					'<legend>' + item + '</legend>' +
					'<div class="cost">' +
					'<dl class="nomg">';
			for (var res in civitas.SOLDIERS[item].cost) {
				_t += '<dt>' + civitas.utils.nice_numbers(civitas.SOLDIERS[item].cost[res]) + '</dt><dd>' + civitas.ui.resource_small_img(res) + '</dd>';
			}
			_t += '</dl>' +
					'</div>' +
					'<div class="info">' +
					'<dl class="nomg">' +
					'<dt>Attack</dt><dd>' + civitas.SOLDIERS[item].attack + '</dd>' +
					'<dt>Defense</dt><dd>' + civitas.SOLDIERS[item].defense + '</dd>' +
					'</dl>' +
					'</div>' +
					'<img data-handle="' + item + '" title="' + civitas.l('Recruit') + ' ' + item + '" class="tips recruit-soldier" src="' + civitas.ASSETS_URL + 'images/armies/' + item.toLowerCase() + '.png" />' +
					'</fieldset>';
		}
		_t += '</div>';
		$(this.handle + ' #tab-army').empty().append(_t);
		_t = '<fieldset>' +
				'<legend>' + civitas.l('Current Army') + '</legend>' +
				civitas.ui.army_list(settlement.get_army_total(), true) +
				'</fieldset>';
		$(this.handle + ' .army-list').empty().append(_t);
	}
};

/**
 * Shipyard panel data.
 *
 * @type {Object}
 */
civitas.PANEL_SHIPYARD = {
	template: civitas.ui.building_panel_template('shipyard', civitas.l('Shipyard')),
	id: 'shipyard',
	on_show: function(params) {
		this.params_data = params.data;
		var core = this.get_core();
		$(this.handle + ' .contents').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Navy')]));
		this.on_refresh();
		$(this.handle).on('click', '.recruit-ship', function () {
			var ship = $(this).data('handle');
			core.error(civitas.l('Not implemented yet.'));
			return false;
		});
	},
	on_refresh: function() {
		var core = this.get_core();
		var settlement = core.get_settlement();
		var building = core.get_settlement().get_building_by_handle(this.params_data.handle);
		var level = building.get_level();
		$(this.handle + ' #tab-info').empty().append(civitas.ui.building_panel(this.params_data, level));
		var _t = '<div class="navy-list">' +
				'</div>' +
				'<div class="navy-recruiter">';
		for (var item in civitas.SHIPS) {
			_t += '<fieldset>' +
					'<legend>' + item + '</legend>' +
					'<div class="cost">' +
					'<dl class="nomg">';
			for (var res in civitas.SHIPS[item].cost) {
				_t += '<dt>' + civitas.utils.nice_numbers(civitas.SHIPS[item].cost[res]) + '</dt><dd>' + civitas.ui.resource_small_img(res) + '</dd>';
			}
			_t += '</dl>' +
					'</div>' +
					'<div class="info">' +
					'<dl class="nomg">' +
					'<dt>' + civitas.l('Attack') + '</dt><dd>' + civitas.SHIPS[item].attack + '</dd>' +
					'<dt>' + civitas.l('Defense') + '</dt><dd>' + civitas.SHIPS[item].defense + '</dd>' +
					'</dl>' +
					'</div>' +
					'<img data-handle="' + item + '" title="' + civitas.l('Recruit') + ' ' + item + '" class="tips recruit-ship" src="' + civitas.ASSETS_URL + 'images/armies/' + item.toLowerCase().replace(/ /g,"_") + '.png" />' +
					'</fieldset>';
		}
		_t += '</div>';
		$(this.handle + ' #tab-navy').empty().append(_t);
		_t = '<fieldset>' +
				'<legend>' + civitas.l('Current Navy') + '</legend>' +
				civitas.ui.navy_list(settlement.get_navy_total(), true) +
				'</fieldset>';
		$(this.handle + ' .navy-list').empty().append(_t);
	}
};

/**
 * Church panel data.
 *
 * @type {Object}
 */
civitas.PANEL_CHURCH = {
	template: civitas.ui.building_panel_template('church', civitas.l('Church')),
	id: 'church',
	on_show: function(params) {
		var self = this;
		this.params_data = params.data;
		var settlement = this.get_core().get_settlement();
		$(this.handle + ' .contents').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Religion')]));
		this.on_refresh();
		$(this.handle).on('click', '.religion', function() {
			var id = parseInt($(this).data('id'));
			if (confirm(civitas.l('Are you sure you want to switch religions? You will lose all your accumulated faith!')) === true) {
				settlement.change_religion(id);
			}
			return false;
		});
	},
	on_refresh: function() {
		var core = this.get_core();
		var settlement = core.get_settlement();
		var building = core.get_settlement().get_building_by_handle(this.params_data.handle);
		$(this.handle + ' #tab-info').empty().append(civitas.ui.building_panel(this.params_data, building.get_level()));
		var _t = '<div class="section">' +
			civitas.ui.progress((settlement.get_faith() * 100) / civitas.MAX_FAITH_VALUE, 'large', settlement.get_faith()) +
		'</div>' +
		'<p>Changing your settlement`s religion requires 1000 faith and resets your settlement`s faith. Each religion gives you access to different heroes in your Tavern and gives you a boost to the influence with the cities sharing the same religion.</p>' +
		'<div class="religion-list">';
		for (var i = 0; i < civitas.RELIGIONS.length; i++) {
			_t += '<div data-handle="' + civitas.RELIGIONS[i] + '" data-id="' + i + '" class="religion' + (settlement.get_religion().id === i ? ' selected' : '') + '">' +
				'<span>' + civitas.RELIGIONS[i].capitalize() + '</span>' +
			'</div>';
		}
		_t += '</div>';
		$(this.handle + ' #tab-religion').empty().append(_t);
	}
};

/**
 * Embassy panel data.
 *
 * @type {Object}
 */
civitas.PANEL_EMBASSY = {
	template: civitas.ui.building_panel_template('embassy', civitas.l('Embassy')),
	id: 'embassy',
	on_show: function(params) {
		var self = this;
		this.params_data = params.data;
		var core = this.get_core();
		var settlement = core.get_settlement();
		var _c = core.get_settlement().get_building_by_handle(this.params_data.handle);
		$(this.handle + ' .contents').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Diplomacy'), civitas.l('Espionage')]));
		this.on_refresh();
		$(this.handle).on('click', '.pact', function () {
			if (!settlement.can_diplomacy()) {
				core.error(civitas.l('You will need to construct an Embassy before being able to propose treaties and pacts to other settlements.'));
				return false;
			}
			var _settlement = parseInt($(this).data('id'));
			var influence = core.get_settlement().get_influence_with_settlement(_settlement);
			if (influence >= 50) {
				core.error('Not implemented yet.');
			} else {
				core.error(civitas.l('Your influence on') + ' ' + _settlement + ' ' + civitas.l('is too low to propose a pact.'));
			}
			return false;
		}).on('click', '.spy', function () {
			if (!settlement.can_diplomacy()) {
				core.error(civitas.l('You will need to construct an Embassy before being able to assign spies to other settlements.'));
				return false;
			}
			var _settlement = parseInt($(this).data('id'));
			core.error(civitas.l('Not implemented yet.'));
			return false;
		}).on('click', '.declare-war', function () {
			if (!settlement.can_diplomacy()) {
				core.error(civitas.l('You will need to construct an Embassy before being able to declare war to other settlements.'));
				return false;
			}
			var name = parseInt($(this).data('id'));
			var _settlement = core.get_settlement(name);
			core.error(civitas.l('Not implemented yet.'));
			return false;
		}).on('click', '.send-goods', function () {
			if (!settlement.can_diplomacy()) {
				core.error(civitas.l('You will need to construct an Embassy before being able to send goods to other settlements.'));
				return false;
			}
			var name = parseInt($(this).data('id'));
			var _settlement = core.get_settlement(name);
			core.error(civitas.l('Not implemented yet.'));
			return false;
		}).on('click', '.view-settlement', function () {
			var name = parseInt($(this).data('id'));
			var _settlement = core.get_settlement(name);
			core.open_panel(civitas.PANEL_SETTLEMENT, _settlement);
			return false;
		})
	},
	on_refresh: function() {
		var core = this.get_core();
		var settlement = core.get_settlement();
		var settlements = core.get_settlements();
		var status = settlement.get_status();
		var building = core.get_settlement().get_building_by_handle(this.params_data.handle);
		var level = building.get_level();
		$(this.handle + ' #tab-info').empty().append(civitas.ui.building_panel(this.params_data, level));
		var _t = '<div class="section">' +
			civitas.ui.progress((settlement.get_espionage() * 100) / civitas.MAX_ESPIONAGE_VALUE, 'large', settlement.get_espionage()) +
		'</div>';
		$(this.handle + ' #tab-espionage').empty().append(_t);
		_t = '<div class="settlements-list">' +
				'<table class="normal">';
		for (var i = 1; i < settlements.length; i++) {
			_t += '<tr>' +
					'<td class="icon"><img src="' + civitas.ASSETS_URL + 'images/avatars/avatar' + settlements[i].get_ruler_avatar() + '.png" /></td>' +
					'<td>' +
					'<p>' +
						'<span class="title">' + (settlements[i].is_city() ? 'City of' : 'Village of') + ' ' + settlements[i].get_name() + '</span> ' +
						'<span class="description">' + civitas.l('Leader') + ': ' + settlements[i].get_ruler_name() + '</span>' +
					'</p>' +
				civitas.ui.progress(status[settlements[i].get_id()].influence, 'big') +
					'</td>' +
					'<td class="large">' +
						'<a data-id="' + settlements[i].get_id() + '" title="' + civitas.l('View info about this settlement.') + '" class="tips view-settlement" href="#">' + civitas.l('view') + '</a> ' +
						'<a data-id="' + settlements[i].get_id() + '" title="' + civitas.l('Send a spy to this settlement.') + '" data-id="' + i + '" class="tips spy" href="#">' + civitas.l('spy') + '</a> ' +
						'<a data-id="' + settlements[i].get_id() + '" title="' + civitas.l('Propose a pact to this settlement`s ruler.') + '" class="tips pact" href="#">' + civitas.l('pact') + '</a> ' +
						'<a data-id="' + settlements[i].get_id() + '" title="' + civitas.l('Send goods to this settlement.') + '" data-id="' + i + '" class="tips send-goods" href="#">' + civitas.l('send') + '</a> ' +
						'<a data-id="' + settlements[i].get_id() + '" title="' + civitas.l('Declare war to this settlement.') + '" data-id="' + i + '" class="tips declare-war" href="#">' + civitas.l('war') + '</a>' +
					'</td>' +
				'</tr>';
		}
		_t += '</table>' +
				'</div>';
		$(this.handle + ' #tab-diplomacy').empty().append(_t);
	}
};

/**
 * Academy panel data.
 *
 * @type {Object}
 */
civitas.PANEL_ACADEMY = {
	template: civitas.ui.building_panel_template('academy', civitas.l('Academy')),
	id: 'academy',
	on_show: function(params) {
		this.params_data = params.data;
		$(this.handle + ' .contents').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Research')]));
		this.on_refresh();
	},
	on_refresh: function() {
		var core = this.get_core();
		var settlement = core.get_settlement();
		var building = core.get_settlement().get_building_by_handle(this.params_data.handle);
		$(this.handle + ' #tab-info').empty().append(civitas.ui.building_panel(this.params_data, building.get_level()));
		var _t = '<div class="section">' +
			civitas.ui.progress((settlement.get_research() * 100) / civitas.MAX_RESEARCH_VALUE, 'large', settlement.get_research()) +
		'</div>';
		$(this.handle + ' #tab-research').empty().append(_t);
	}
};

/**
 * Options window data.
 *
 * @type {Object}
 */
civitas.WINDOW_OPTIONS = {
	id: 'options',
	template: '' +
		'<section id="window-options" class="window">' +
			'<div class="logo">Civitas</div>' +
			'<fieldset>' +
				'<div class="new-game">' +
					'<p>' + civitas.l('Choose your city details well, climate changes and game difficulty affects your building options and resources.') + '</p>' +
					'<dl>' +
						'<dt class="clearfix">' + civitas.l('Your Name') + ':</dt>' +
						'<dd><input type="text" class="name text-input" /></dd>' +
						'<dt class="clearfix">' + civitas.l('City Name') + ':</dt>' +
						'<dd><input type="text" class="cityname text-input" /></dd>' +
						'<dt class="clearfix">' + civitas.l('Nationality') + ':</dt>' +
						'<dd>' +
							'<select class="nation text-input"></select>' +
						'</dd>' +
						'<dt class="clearfix">' + civitas.l('Climate') + ':</dt>' +
						'<dd>' +
							'<select class="climate text-input"></select>' +
						'</dd>' +
						'<dt class="clearfix">' + civitas.l('Difficulty') + ':</dt>' +
						'<dd>' +
							'<select class="difficulty text-input">' +
								'<option value="1">' + civitas.l('Easy') + '</option>' +
								'<option value="2">' + civitas.l('Medium') + '</option>' +
								'<option value="3">' + civitas.l('Hard') + '</option>' +
								'<option value="4">' + civitas.l('Hardcore') + '</option>' +
							'</select>' +
						'</dd>' +
						'<dt class="clearfix">' + civitas.l('Avatar') + ':</dt>' +
						'<dd class="avatar-select-container">' +
							'<div class="avatar-select"></div>' +
							'<div class="scrollbar">' +
								'<div class="up"></div>' +
								'<div class="down"></div>' +
							'</div>' +
						'</dd>' +
					'</dl>' +
					'<a href="#" class="do-start highlight button">' + civitas.l('Start Playing') + '</a>' +
				'</div>' +
				'<a href="#" class="do-pause button">' + civitas.l('Pause') + '</a>' +
				'<a href="#" class="do-restart button">' + civitas.l('Restart') + '</a>' +
				'<a href="#" class="do-save button">' + civitas.l('Save / Load') + '</a>' +
				'<ul class="save-slots">' +
					'<li data-id="1"><span class="date">' + civitas.l('empty save game') + '</span><span title="' + civitas.l('Delete this save game') + '" class="tips delete"></span><span title="' + civitas.l('Save your game here') + '" class="tips save"></span><span title="' + civitas.l('Load this save game') + '" class="tips load"></span></a>' +
					'<li data-id="2"><span class="date">' + civitas.l('empty save game') + '</span><span title="' + civitas.l('Delete this save game') + '" class="tips delete"></span><span title="' + civitas.l('Save your game here') + '" class="tips save"></span><span title="' + civitas.l('Load this save game') + '" class="tips load"></span></a>' +
					'<li data-id="3"><span class="date">' + civitas.l('empty save game') + '</span><span title="' + civitas.l('Delete this save game') + '" class="tips delete"></span><span title="' + civitas.l('Save your game here') + '" class="tips save"></span><span title="' + civitas.l('Load this save game') + '" class="tips load"></span></a>' +
				'</ul>' +
				'<a href="#" class="do-options button">' + civitas.l('Options') + '</a>' +
				'<div class="options-game"></div>' +
				'<a href="#" class="do-about button">' + civitas.l('About') + '</a>' +
				'<div class="about-game">' +
					'<a class="github" href="https://github.com/sizeofcat/civitas"><img class="tips" title="' + civitas.l('Visit the project page on GitHub') + '" src="../images/ui/github.png" /></a>' +
					'<p>' + civitas.l('Civitas is written by <a href="https://sizeof.cat">sizeof(cat)</a>.') + '</p>' +
					'<p>' + civitas.l('Big thanks to') + ':</p>' +
					'<ul>' +
						'<li><a href="https://soundcloud.com/shantifax">Shantifax</a> for the music (Glandula Pinealis).</li>' +
						'<li>Brendan Eich for Javascript.</li>' +
						'<li><a href="http://bluebyte.com">Blue Byte</a> for Anno 1404.</li>' +
					'</ul>' +
				'</div>' +
				'<br />' +
				'<a href="#" class="do-resume button">' + civitas.l('Resume Playing') + '</a>' +
			'</fieldset>' +
		'</section>',
	on_show: function() {
		var self = this;
		var avatar = 1;
		var core = this.get_core();
		var el = '#window-' + this.id;
		var game_started = core.get_storage_data();
		if (core.get_mode() !== civitas.MODE_SINGLEPLAYER) {
			$('.do-save').hide();
		} else {
			if (game_started !== false) {
				$('.new-game').hide();
				$('.do-pause, .do-restart, .do-resume, .do-options, .save-slots > li span.save').show();
			} else {
				$('.new-game').show();
				$('.do-pause, .do-restart, .do-resume, .do-options, .save-slots > li span.save').hide();
			}
			var saved_slots = false;
			for (var i = 1; i <= 3; i++) {
				var data;
				if (data = core.get_storage_data('save' + i)) {
					$('.save-slots > li[data-id=' + i + '] > span.load').show();
					$('.save-slots > li[data-id=' + i + '] > span.date').html(civitas.utils.time_since(data.date) + ' ago');
					saved_slots = true;
				} else {
					$('.save-slots > li[data-id=' + i + '] > span.load, .save-slots > li[data-id=' + i + '] > span.delete').hide();
				}
			}
			if (saved_slots === false && game_started === false) {
				$('.do-save, .save-slots').hide();
			}
		}
		for (var i = 1; i < civitas.CLIMATES.length; i++) {
			$(el + ' .climate').append('<option value="' + civitas['CLIMATE_' + civitas.CLIMATES[i].toUpperCase()] + '">' + civitas.CLIMATES[i].capitalize() + '</option>');
		}
		for (var i = 1; i < civitas.NATIONS.length; i++) {
			$(el + ' .nation').append('<option value="' + civitas['NATION_' + civitas.NATIONS[i].toUpperCase()] + '">' + civitas.NATIONS[i].capitalize() + '</option>');
		}
		for (var i = 1; i <= civitas.AVATARS; i++) {
			$(el + ' .avatar-select').append('<img src="' + civitas.ASSETS_URL + 'images/avatars/avatar' + i + '.png" />');
		}
		$(el + ' .options-game').append(civitas.ui.tabs([civitas.l('Sounds'), civitas.l('UI'), civitas.l('Gameplay')]));
		$(el + ' #tab-sounds').append('<div>' +
			'<a href="#" class="music-control ui-control ' + ((this.core.get_settings('music') === true) ? 'on' : 'off') + '">' + civitas.l('toggle music') + '</a>' +
			'<input class="music-volume" type="range" min="0" max="1" step="0.1" ' + ((this.core.get_settings('music') !== true) ? 'disabled' : '') + ' />' +
			'</div>');
		$(el + ' #tab-ui').append('<div>' +
			'<a href="#" class="console-control ui-control ' + ((this.core.get_settings('console') === true) ? 'on' : 'off') + '">' + civitas.l('toggle console') + '</a>' +
			'</div>');
		$(el + ' .tabs').tabs();
		$(el).on('click', '.do-start', function () {
			var name = $(el + ' .name').val();
			var cityname = $(el + ' .cityname').val();
			var nation = parseInt($(el + ' .nation').val());
			var climate = parseInt($(el + ' .climate').val());
			var difficulty = parseInt($(el + ' .difficulty').val());
			if (name === '') {
				core.error('Enter your ruler name, for example <strong>Ramses</strong>.', 'Error', true);
				return false;
			}
			if (cityname === '') {
				core.error('Enter your city name, for example <strong>Alexandria</strong>.', 'Error', true);
				return false;
			}
			core.show_loader();
			core.start_game(name, cityname, nation, climate, avatar, difficulty);
			self.destroy();
			return false;
		}).on('click', '.down', function () {
			if (avatar < civitas.AVATARS) {
				avatar = avatar + 1;
			}
			$(el + ' .avatar-select').scrollTo('+=64px', 500);
		}).on('click', '.up', function () {
			if (avatar > 1) {
				avatar = avatar - 1;
			}
			$(el + ' .avatar-select').scrollTo('-=64px', 500);
		}).on('click', '.do-resume', function () {
			core.hide_loader();
			core.unpause();
			self.destroy();
			return false;
		}).on('click', '.do-pause', function () {
			if (core.is_paused() === true) {
				$(this).removeClass('highlight').html(civitas.l('Pause'));
				core.show_loader();
				core.unpause();
			} else {
				$(this).addClass('highlight').html(civitas.l('Unpause'));
				core.hide_loader();
				core.pause();
			}
			return false;
		}).on('click', '.do-options', function () {
			$(el + ' .options-game').slideToggle();
			return false;
		}).on('click', '.do-about', function () {
			$(el + ' .about-game').slideToggle();
			return false;
		}).on('click', '.do-restart', function () {
			if (confirm(civitas.l('Are you sure you want to restart the game? You wll lose all progress!')) === true) {
				core.reset_storage_data();
				document.location.reload();
			}
			return false;
		}).on('click', '.do-save', function () {
			if (core.get_mode() === civitas.MODE_SINGLEPLAYER) {
				$(el + ' .save-slots').slideToggle();
			}
			return false;
		}).on('click', '.save-slots > li > .save', function () {
			if (core.get_mode() === civitas.MODE_SINGLEPLAYER) {
				var el = $(this).parent();
				var id = parseInt(el.data('id'));
				if (id >= 1 && id <= 3) {
					if (confirm(civitas.l('Are you sure you want to save the game in this slot? An already existing save will be overwritten!')) === true) {
						var data = core.export(true, id);
						el.children('span.load, span.delete').show();
						el.children('span.date').html(civitas.utils.time_since(data.date) + ' ago');
					}
				}
			}
			return false;
		}).on('click', '.save-slots > li > .delete', function () {
			if (core.get_mode() === civitas.MODE_SINGLEPLAYER) {
				var el = $(this).parent();
				var id = parseInt(el.data('id'));
				if (id >= 1 && id <= 3) {
					if (confirm(civitas.l('Are you sure you want to delete the save game from this slot? All data from that game will be lost!')) === true) {
						core.reset_storage_data('save' + id);
						el.children('span.load, span.delete').hide();
						el.children('span.date').html(civitas.l('empty save game'));
						el.children('span.save').show();
					}
				}
			}
			return false;
		}).on('click', '.save-slots > li > .load', function () {
			if (core.get_mode() === civitas.MODE_SINGLEPLAYER) {
				var el = $(this).parent();
				var id = parseInt(el.data('id'));
				if (id >= 1 && id <= 3) {
					if (confirm(civitas.l('Are you sure you want to load the game from this slot? An already existing game will be lost!')) === true) {
						if (core.swap_storage_data('save' + id, 'live') !== false) {
							document.location.reload();
						} else {
							core.error('There was a problem loading the game data, it is probably corrupted. Save game data will be deleted now.');
							core.reset_storage_data('save' + id);
							el.children('span.load, span.delete').hide();
							el.children('span.date').html(civitas.l('empty save game'));
							el.children('span.save').show();
						}
					}
				}
			}
			return false;
		}).on('click', '.music-control', function () {
			if ($(this).hasClass('on')) {
				$(this).removeClass('on').addClass('off');
				$('.music-volume').attr('disabled', true);
				core.set_settings_music(true);
			} else {
				$(this).removeClass('off').addClass('on');
				$('.music-volume').attr('disabled', false);
				core.set_settings_music(false);
			}
			return false;
		}).on('click', '.console-control', function () {
			if ($(this).hasClass('on')) {
				$(this).removeClass('on').addClass('off');
				core.set_settings_console(false);
			} else {
				$(this).removeClass('off').addClass('on');
				core.set_settings_console(true);
			}
			return false;
		}).on('change', '.music-volume', function () {
			var value = $(this).val();
			core.music.volume = value;
			return false;
		});
	},
	on_hide: function() {
		this.get_core().hide_loader();
	}
};
