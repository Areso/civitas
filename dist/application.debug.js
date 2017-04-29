/*!
 * Civitas empire-building game.
 *
 * @author sizeof(cat) <sizeofcat AT riseup.net>
 * @version 0.1.0.4292017
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
civitas.WORLDMAPS = 10;

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
	'bread',
	'meat',
	'iron',
	'weapons',
	'tools',
	'gold'
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

/**
 * Diplomacy proposal action.
 *
 * @constant
 * @type {Number}
 */
civitas.ACTION_DIPLOMACY = 0;

/**
 * Campaign action.
 *
 * @constant
 * @type {Number}
 */
civitas.ACTION_CAMPAIGN = 1;

/**
 * Error notification
 *
 * @constant
 * @type {Number}
 */
civitas.NOTIFY_ERROR = 0;

/**
 * Achievement notification
 *
 * @constant
 * @type {Number}
 */
civitas.NOTIFY_ACHIEVEMENT = 1;

/**
 * Normal notification
 *
 * @constant
 * @type {Number}
 */
civitas.NOTIFY_NORMAL = 2;

/**
 * Event notification.
 *
 * @constant
 * @type {Number}
 */
civitas.NOTIFY_EVENT = 3;

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
			militia: 10,
			axeman: 2,
			bowman: 4
		},
		navy: {
			corsair: 2,
			caravel: 1
		}
	},
	/* Medium difficulty */
	{
		army: {
			militia: 5,
			axeman: 1,
			bowman: 2
		},
		navy: {
			corsair: 1,
			caravel: 1
		}
	},
	/* Hard difficulty */
	{
		army: {
			militia: 3,
			bowman: 2
		},
		navy: {
			corsair: 1
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
		coins: 55000,
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
		woodplanks: 50,
		tools: 40
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
		woodplanks: 30,
		tools: 20
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
		woodplanks: 20,
		tools: 10
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
	'cease fire proposed',
	'proposed to join you',
	'vassal'
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
 * The campaign is a spy.
 *
 * @constant
 * @type {Number}
 */
civitas.CAMPAIGN_SPY = 3;

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
 * Propose to join your settlement.
 * 
 * @constant
 * @type {Number}
 */
civitas.DIPLOMACY_PROPOSE_JOIN = 8;

/**
 * Vassal villages count as part of your empire.
 * 
 * @constant
 * @type {Number}
 */
civitas.DIPLOMACY_VASSAL = 9;

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
 * The success rate of an espionage mission is the espionage points assigned to the mission
 * divided by this value.
 *
 * @constant
 * @type {Number}
 */
civitas.MAX_ESPIONAGE_SUCESS_RATE = 100;

/**
 * The maximum value settlement influence can have.
 *
 * @constant
 * @type {Number}
 */
civitas.MAX_INFLUENCE_VALUE = 100;

/**
 * List of game diplomacy options.
 *
 * @constant
 * @type {Array}
 */
civitas.SPY_MISSIONS = [
	'none',
	'adopt religion',
	'influence settlement',
	'steal resources',
	'instigate turmoil'
];

/**
 * Spy mission to do absolutely nothing in the target city (except maybe get noticed?).
 *
 * @constant
 * @type {Number}
 */
civitas.SPY_MISSION_NONE = 0;

/**
 * Spy mission to persuade the target city to take the same religion as the spy home city.
 *
 * @constant
 * @type {Number}
 */
civitas.SPY_MISSION_RELIGION = 1;

/**
 * Spy mission to raise the influence of the spy's home city with the target city.
 *
 * @constant
 * @type {Number}
 */
civitas.SPY_MISSION_INFLUENCE = 2;

/**
 * Spy mission to steal resources from the target city.
 *
 * @constant
 * @type {Number}
 */
civitas.SPY_MISSION_STEAL_RESOURCES = 3;

/**
 * Spy mission to instigate turmoil in the target city.
 *
 * @constant
 * @type {Number}
 */
civitas.SPY_MISSION_INSTIGATE = 4;

/**
 * Initial resource costs for sending a caravan.
 *
 * @constant
 * @type {Object}
 */
civitas.CARAVAN_COSTS = {
	coins: 1000,
	donkeys: 10,
	wood: 10,
	ropes: 2,
	provisions: 1
}

/**
 * Initial resource costs for sending a spy mission.
 *
 * @constant
 * @type {Object}
 */
civitas.SPY_COSTS = {
	coins: 500,
	spyglasses: 1,
	weapons: 1,
	provisions: 1
}

/**
 * Initial resource costs for sending an army.
 *
 * @constant
 * @type {Object}
 */
civitas.ARMY_COSTS = {
	coins: 2000,
	provisions: 1
}

/**
 * Amount of influence a settlement gains when sending a caravan to another settlement.
 *
 * @constant
 * @type {Number}
 */
civitas.CARAVAN_INFLUENCE = 5;

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
	militia: {
		name: 'Militia',
		attack: 1,
		defense: 1,
		cost: {
			coins: 100,
			bread: 1,
			weapons: 1
		}
	},
	swordsman: {
		name: 'Swordsman',
		attack: 3,
		defense: 2,
		cost: {
			coins: 300,
			bread: 1,
			meat: 1,
			weapons: 2
		}
	},
	axeman: {
		name: 'Axeman',
		attack: 4,
		defense: 4,
		cost: {
			coins: 400,
			bread: 1,
			meat: 3,
			weapons: 2
		}
	},
	bowman: {
		name: 'Bowman',
		attack: 6,
		defense: 1,
		cost: {
			coins: 500,
			bread: 1,
			meat: 3,
			weapons: 4
		}
	},
	pikeman: {
		name: 'Pikeman',
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
	crossbowman: {
		name: 'Crossbowman',
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
	knight: {
		name: 'Knight',
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
	legionnaire: {
		name: 'Legionnaire',
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
	},
	crusader: {
		name: 'Crusader',
		attack: 16,
		defense: 18,
		cost: {
			coins: 3000,
			provisions: 8,
			leather: 3,
			iron: 4,
			weapons: 15,
			armor: 15
		}
	}
};

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
		axeman: 300,
		knight: 100,
		crossbowman: 220,
		pikeman: 200,
		legionnaire: 100
	},
	cost: 120000
}, {
	name: 'Legio II Augusta',
	description: 'Legio secunda Augusta is a Roman legion.',
	handle: 'legio2',
	icon: 8,
	army: {
		axeman: 220,
		knight: 100,
		crossbowman: 300,
		pikeman: 100,
		legionnaire: 100
	},
	cost: 130000
}, {
	name: 'Legio III Cyrenaica',
	description: 'Legio tertia Cyrenaica is a Roman legion.',
	handle: 'legio3',
	icon: 15,
	army: {
		axeman: 280,
		crossbowman: 500,
		pikeman: 180,
		legionnaire: 100
	},
	cost: 100000
}, {
	name: 'Legio IV Flavia Felix',
	description: 'Legio quarta Flavia Felix is a Roman legion.',
	handle: 'legio4',
	icon: 9,
	army: {
		militia: 140,
		axeman: 190,
		knight: 90,
		bowman: 20,
		crossbowman: 100,
		pikeman: 180,
		legionnaire: 100
	},
	cost: 190000
}, {
	name: 'Legio V Alaudae',
	description: 'Legio quinta Alaudae is a Roman legion.',
	handle: 'legio5',
	icon: 16,
	army: {
		militia: 100,
		axeman: 200,
		bowman: 190,
		legionnaire: 130
	},
	cost: 110000
}, {
	name: 'Legio VI Victrix',
	description: 'Legio sexta Victrix is a Roman legion.',
	handle: 'legio6',
	icon: 22,
	army: {
		militia: 330,
		axeman: 230,
		knight: 100,
		bowman: 100,
		legionnaire: 100
	},
	cost: 140000
}, {
	name: 'Varangian Guard',
	description: 'The Varangian Guard is an elite unit of the Byzantine Army.',
	handle: 'varangian',
	icon: 18,
	army: {
		militia: 410,
		axeman: 210,
		bowman: 190,
		crossbowman: 100,
		pikeman: 220
	},
	cost: 120000
}, {
	name: 'Magna Societas Catalanorum',
	description: 'The Catalan Company of the East, officially the Magna Societas ' +
		'Catalanorum is a company of mercenaries founded by Roger de Flor.',
	handle: 'catalan',
	icon: 23,
	army: {
		axeman: 310,
		knight: 120,
		bowman: 210,
		pikeman: 310
	},
	cost: 100000
}, {
	name: 'Army of the Western Garden',
	description: 'The Army of the Western Garden is an army established during the ' +
		'reign of Emperor Ling in the Eastern Han Dynasty.',
	handle: 'western',
	icon: 27,
	army: {
		axeman: 290,
		knight: 40,
		bowman: 170,
		pikeman: 300
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
		axeman: 10,
		knight: 200,
		bowman: 100,
		pikeman: 210
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
		axeman: 290,
		knight: 80,
		bowman: 100,
		pikeman: 210
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
		corsair: 19,
		caravel: 14,
		warship: 12,
		shipoftheline: 10
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
	corsair: {
		name: 'Corsair',
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
			gunpowder: 2
		}
	},
	caravel: {
		name: 'Caravel',
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
			cannons: 20,
			gunpowder: 5,
			weapons: 10
		}
	},
	frigate: {
		name: 'Frigate',
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
			gunpowder: 10,
			weapons: 10
		}
	},
	galleon: {
		name: 'Galleon',
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
			gunpowder: 15,
			weapons: 15
		}
	},
	warship: {
		name: 'Warship',
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
			gunpowder: 20,
			carpets: 10
		}
	},
	shipoftheline: {
		name: 'Ship of the Line',
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
			gunpowder: 30,
			weapons: 50
		}
	}
};

/**
 * Buildings native to the tropical climate.
 * 
 * @constant
 * @type {Array}
 */
civitas.SETTLEMENT_BUILDINGS_TROPICAL = [

	/* Municipal */
	'marketplace', 'warehouse', 'tradingpost', 'church', 'monastery', 'camp', 'castle',
	'shipyard', 'embassy', 'academy', 'tavern', 'tournir',

	/* Housing */
	'house1', 'house2', 'house3', 'house4', 'house5', 'house6', 'house7', 'house8',
	'house9', 'house10', 'house11', 'house12',

	/* Food Production */
	'mill', 'bakery', 'butcher',

	/* Mines */
	'coppermine', 'ironmine', 'saltmine',

	/* Smelters */
	'goldsmelter', 'coppersmelter', 'ironsmelter',

	/* Industry */
	'lumberjack', 'stone', 'trapper', 'tannery', 'furrier', 'armory', 'coffeeroaster',
	'quartzfactory', 'winery', 'saltworks', 'pottery',
	'charcoalburnerhut', 'opticiansworkshop', 'papermill', 'printingpress', 'gunpowdermill',
	'redsmithsworkshop', 'ropeyard', 'glassworks', 'silkweaver', 'jeweler', 'toolmaker',
	'apiary', 'barrelcooperage', 'brewery', 'candlemakersworkshop', 'sugarmill',
	'perfumery', 'weaver', 'clothingfactory', 'provisions', 'carpenter', 'marzipanworkshop', 'cannonfoundry',

	/* Farms */
	'almondsfarm', 'almondsfield', 'cattlefarm', 'cattlefield', 'coffeefarm', 'coffeefield',
	'grainfarm', 'grainfield',
	'grapesfarm', 'grapesfield', 'hempfarm', 'hempfield', 'pigfarm', 'pigfield',
	'sugarfarm', 'sugarfield', 'indigofarm', 'indigofield'
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
	'shipyard', 'embassy', 'academy', 'tavern', 'tournir',

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
	'quartzfactory', 'winery', 'saltworks', 'pottery', 'jeweler', 'toolmaker',
	'charcoalburnerhut', 'opticiansworkshop', 'papermill', 'printingpress', 'gunpowdermill',
	'redsmithsworkshop', 'ropeyard', 'glassworks', 'silkweaver', 'marzipanworkshop',
	'apiary', 'barrelcooperage', 'brewery', 'candlemakersworkshop', 'sugarmill', 'cannonfoundry',
	'perfumery', 'weaver', 'clothingfactory', 'provisions', 'carpenter'
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
	'shipyard', 'embassy', 'academy', 'tavern', 'tournir',

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
	'quartzfactory', 'winery', 'saltworks', 'pottery', 'jeweler', 'toolmaker',
	'charcoalburnerhut', 'opticiansworkshop', 'papermill', 'printingpress',
	'redsmithsworkshop', 'ropeyard', 'glassworks', 'silkweaver', 'gunpowdermill',
	'apiary', 'barrelcooperage', 'brewery', 'candlemakersworkshop', 'sugarmill',
	'perfumery', 'weaver', 'clothingfactory', 'provisions', 'carpenter', 'marzipanworkshop', 'cannonfoundry',

	/* Farms */
	'cattlefarm', 'cattlefield', 'pigfarm', 'pigfield', 'spicefarm', 'spicefield'
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
	'shipyard', 'embassy', 'academy', 'tavern', 'tournir',

	/* Housing */
	'house1', 'house2', 'house3', 'house4', 'house5', 'house6', 'house7', 'house8',
	'house9', 'house10', 'house11', 'house12',

	/* Food Production */
	'mill', 'bakery', 'butcher',

	/* Mines */
	'coppermine', 'goldmine', 'ironmine', 'saltmine',

	/* Smelters */
	'goldsmelter', 'coppersmelter', 'ironsmelter',

	/* Industry */
	'lumberjack', 'stone', 'trapper', 'tannery', 'furrier', 'armory', 'coffeeroaster',
	'quartzfactory', 'winery', 'saltworks', 'pottery', 'jeweler', 'toolmaker',
	'charcoalburnerhut', 'opticiansworkshop', 'papermill', 'printingpress', 'gunpowdermill',
	'redsmithsworkshop', 'ropeyard', 'glassworks', 'silkweaver', 'marzipanworkshop',
	'apiary', 'barrelcooperage', 'brewery', 'candlemakersworkshop', 'sugarmill',
	'perfumery', 'weaver', 'clothingfactory', 'provisions', 'carpenter', 'catapultworkshop', 'cannonfoundry',

	/* Farms */
	'cattlefarm', 'cattlefield', 'ciderfarm', 'ciderfield', 'grainfarm', 'grainfield',
	'grapesfarm', 'grapesfield', 'rosenursery', 'rosefield',
	'hempfarm', 'hempfield', 'pigfarm', 'pigfield', 'indigofarm', 'indigofield'
];

/**
 * All the buildings for a city.
 * 
 * @constant
 * @type {Array}
 */
civitas.BUILDINGS_ALL = [
	'marketplace', 'lumberjack', 'camp', 'warehouse', 'mill', 'castle', 'stone',
	'ironmine', 'trapper', 'almondsfarm', 'almondsfield', 'tavern', 'tournir',
	'shipyard', 'pigfarm', 'cattlefarm', 'pigfield', 'cattlefield', 'house1', 'house2',
	'house3', 'house4', 'house5', 'house6', 'house7',
	'house8', 'house9', 'house10', 'house11', 'house12', 'church', 'bakery', 'butcher',
	'grainfarm', 'grainfield', 'ironsmelter', 'tannery', 'furrier', 'saltmine',
	'coppermine', 'goldmine', 'goldsmelter', 'coppersmelter', 'armory', 'coffeefarm',
	'coffeefield', 'hempfarm', 'hempfield', 'sugarfarm', 'spicefarm', 'spicefield',
	'sugarfield', 'silkfarm', 'silkfield', 'coffeeroaster', 'quartzfactory', 'grapesfarm',
	'grapesfield', 'winery', 'saltworks', 'carpenter', 'pottery', 'jeweler', 'toolmaker',
	'charcoalburnerhut', 'monastery', 'opticiansworkshop', 'papermill', 'printingpress',
	'redsmithsworkshop', 'ropeyard', 'glassworks', 'provisions', 'silkweaver', 'gunpowdermill',
	'apiary', 'barrelcooperage', 'brewery', 'candlemakersworkshop', 'indigofarm', 'indigofield',
	'ciderfarm', 'ciderfield', 'sugarmill', 'rosenursery', 'rosefield', 'catapultworkshop', 'cannonfoundry',
	'perfumery', 'tradingpost', 'clothingfactory', 'weaver', 'embassy',  'academy', 'marzipanworkshop'
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
		'tournir',
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
		'house9',
		'house10',
		'house11',
		'house12'
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
		'indigofield',
		'pigfarm',
		'pigfield',
		'rosenursery',
		'rosefield',
		'silkfarm',
		'silkfield',
		'spicefarm',
		'spicefield',
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
		'pottery',
		'quartzfactory',
		'ropeyard',
		'saltworks',
		'clothingfactory',
		'stone',
		'trapper',
		'tannery',
		'weaver',
		'gunpowdermill',
		'toolmaker'
	],
	'Luxury': [
		'apiary',
		'coffeeroaster',
		'jeweler',
		'marzipanworkshop',
		'opticiansworkshop',
		'papermill',
		'perfumery',
		'printingpress',
		'redsmithsworkshop',
		'silkweaver',
		'sugarmill',
		'winery'
	],
	'Military': [
		'armory',
		'cannonfoundry',
		'castle',
		'catapultworkshop',
		'camp',
		'provisions'
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
		is_production: true,
		is_municipal: true,
		levels: 4,
		large: true,
		visible_upgrades: true,
		production: {
			fame: 5
		},
		cost: {
			coins: 100000
		},
		position: {
			x: 750,
			y: 520
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
		levels: 10,
		visible_upgrades: true,
		position: {
			x: 1162,
			y: 365
		},
		cost: {
			coins: 150000,
			wood: 500,
			woodplanks: 200,
			stones: 500,
			tools: 50
		},
		requires: {
			settlement_level: 16
		}
	}, {
		name: 'Church',
		handle: 'church',
		description: 'A Church provides a massive fame boost to your settlement by using coins and ' +
			'converting them to fame, as well as providing faith for free. Faith allows you to choose a religion for your settlement.',
		is_municipal: true,
		is_production: true,
		production: {
			fame: 10,
			faith: 1
		},
		materials: {
			coins: 50
		},
		visible_upgrades: true,
		position: {
			x: 590,
			y: 400
		},
		levels: 3,
		cost: {
			coins: 10000,
			wood: 20,
			woodplanks: 20,
			stones: 20,
			tools: 10
		},
		requires: {
			settlement_level: 3
		}
	}, {
		name: 'Trading Post',
		handle: 'tradingpost',
		description: 'The Trading Post gives you the opportunity to trade resources and send caravans to other settlements.',
		is_municipal: true,
		position: {
			x: 1570,
			y: 180
		},
		cost: {
			coins: 15000,
			wood: 40,
			woodplanks: 40,
			stones: 40
		},
		requires: {
			settlement_level: 4
		}
	}, {
		name: 'Academy',
		handle: 'academy',
		description: 'The Academy provides a minor amount of fame each day as well as research for this settlement at the expense of coins.',
		is_municipal: true,
		is_production: true, 
		production: {
			fame: 5,
			research: 1
		},
		materials: {
			coins: 100
		},
		position: {
			x: 760,
			y: 440
		},
		levels: 3,
		cost: {
			coins: 100000,
			woodplanks: 1000,
			stones: 1000,
			tools: 20
		},
		requires: {
			settlement_level: 10
		}
	}, {
		name: 'Embassy',
		handle: 'embassy',
		description: 'An Embassy is required to propose pacts, declare war, send spies to other settlements.',
		is_municipal: true,
		is_production: true, 
		production: {
			fame: 5,
			espionage: 1
		},
		materials: {
			coins: 50
		},
		position: {
			x: 680,
			y: 480
		},
		levels: 3,
		cost: {
			coins: 100000,
			woodplanks: 100,
			stones: 100,
			tools: 10
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
			x: 1270,
			y: 420
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
		description: 'A Monastery provides fame and faith for your city in exchange for coins.',
		is_municipal: true,
		is_production: true,
		production: {
			fame: 5,
			faith: 2
		},
		materials: {
			coins: 20
		},
		position: {
			x: 1000,
			y: 380
		},
		levels: 3,
		cost: {
			coins: 50000,
			woodplanks: 200,
			stones: 200,
			tools: 20
		},
		requires: {
			settlement_level: 26,
			buildings: {
				academy: 1
			}
		}
	}, {
		name: 'Tavern',
		handle: 'tavern',
		description: 'The Tavern is the place where heroes of the known (and unknown) world hang around. If you are looking to recruit Achilles, build a Tavern. He might show up.',
		is_municipal: true,
		is_special: true,
		/*
		// TODO
		materials: {
			coins: 20,
			wine: 3,
			beer: 3,
			cider: 3,
			meat: 2,
			oil: 1
		},*/
		position: {
			x: 680,
			y: 350
		},
		levels: 3,
		cost: {
			coins: 100000,
			woodplanks: 200,
			stones: 200,
			wood: 200,
			wine: 100,
			meat: 100,
			tools: 50
		},
		requires: {
			settlement_level: 16,
			buildings: {
				academy: 2
			}
		}
	}, {
		name: 'Shipyard',
		handle: 'shipyard',
		description: 'The Shipyard helps you expand your settlement overseas by housing your ' +
			'ships and providing you with fish and an ultra-small chance to gather pearls.',
		is_production: true,
		position: {
			x: 1760,
			y: 570
		},
		levels: 5,
		chance: {
			pearls: 0.005
		},
		cost: {
			coins: 200000,
			wood: 200,
			woodplanks: 200,
			stones: 100,
			ropes: 10,
			barrels: 10,
			tools: 20
		},
		production: {
			fish: 3
		},
		requires: {
			settlement_level: 10
		}
	}, {
		name: 'Military Camp',
		handle: 'camp',
		description: 'The military camp is your main base of defense and attack. If you plan on going to war, you will need a Military Camp.',
		position: {
			x: 360,
			y: 540
		},
		levels: 3,
		visible_upgrades: true,
		large: true,
		cost: {
			coins: 50000,
			wood: 200,
			woodplanks: 200,
			stones: 160,
			tools: 10
		},
		requires: {
			settlement_level: 8,
			buildings: {
				provisions: 1
			}
		}
	}, {
		name: 'Castle',
		handle: 'castle',
		description: 'The Castle is your main base of operations. It houses your ' +
			'settlement`s soldiers and provides you with prestige and some extra fame.',
		is_production: true,
		is_municipal: true,
		large: true,
		production: {
			fame: 100,
			prestige: 1
		},
		levels: 2,
		visible_upgrades: true,
		position: {
			x: 970,
			y: 60
		},
		materials: {
			coins: 200
		},
		cost: {
			coins: 1000000,
			wood: 500,
			woodplanks: 500,
			stones: 500,
			tools: 100
		},
		requires: {
			settlement_level: 20,
			buildings: {
				camp: 1
			}
		}
	}, {
		name: 'Lumberjack',
		handle: 'lumberjack',
		description: 'A Lumberjack provides you with wood which you can use for creating additional ' +
			'buildings, resources or sell to other settlements.',
		is_production: true,
		production: {
			wood: 4
		},
		levels: 5,
		position: {
			x: 120,
			y: 760
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
		description: 'The Carpenter processes the wood from the Lumberjack into wood planks that are required for more advanced buildings.',
		is_production: true,
		materials: {
			wood: 2
		},
		production: {
			woodplanks: 2
		},
		levels: 5,
		position: {
			x: 180,
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
		description: 'A Stone Quarry produces stone blocks that are the basis of any buildings you ' +
			'wish to construct.',
		is_production: true,
		production: {
			stones: 1,
			clay: 1
		},
		position: {
			x: 490,
			y: 243
		},
		levels: 5,
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
		description: 'The Gold Mine extracts gold ores from the mountains you own (provided you ' +
			'own some). Gold ores can be smelted later into gold bars.',
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
		name: 'Tournir Area',
		handle: 'tournir',
		description: 'The Tournir Area is providing your city with prestige, a chance to train your soldiers and has a chance of giving your city free coins.',
		extralarge: true,
		is_municipal: true,
		is_production: true,
		production: {
			prestige: 1
		},
		position: {
			x: 890,
			y: 610
		},
		chance: {
			coins: 0.1
		},
		cost: {
			coins: 1000000,
			wood: 2000,
			stones: 2000,
			clay: 2000,
			weapons: 100,
			armor: 100,
			tools: 100
		},
		requires: {
			settlement_level: 40,
			buildings: {
				castle: 1,
				academy: 1
			}
		}
	}, {
		name: 'Iron Mine',
		handle: 'ironmine',
		description: 'The Iron Mine extracts iron ores from the mountains you own (provided you own ' +
			'some). Iron ores can be smelted later into iron bars.',
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
		description: 'A Salt Mine extracts brine that can be processed further into salt in a Salt ' +
			'Works.',
		is_production: true,
		production: {
			brine: 1
		},
		position: {
			x: 172,
			y: 258
		},
		levels: 5,
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
			'some). Copper ores can be smelted later into brass.',
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
		description: 'A Salt Works requires coal and brine for producing salt. Salt is a very useful resource so make sure your settlement has plenty.',
		is_production: true,
		production: {
			salt: 3
		},
		materials: {
			coal: 2,
			brine: 2
		},
		position: {
			x: 1734,
			y: 330
		},
		levels: 3,
		cost: {
			coins: 20000,
			wood: 20,
			stones: 20
		},
		requires: {
			settlement_level: 4
		}
	}, {
		name: 'Mill',
		handle: 'mill',
		description: 'The Mill produces flour from the wheat cultivated by your Grain Farm.',
		is_production: true,
		production: {
			flour: 3
		},
		materials: {
			wheat: 2
		},
		position: {
			x: 1170,
			y: 500
		},
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
		description: 'The Bakery creates bread from flour, thus providing your settlers with basic food.',
		is_production: true,
		production: {
			bread: 4
		},
		materials: {
			flour: 2
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
		description: 'The Pottery Workshop uses a high-temperature kiln and clay to create pottery for the inhabitants of your settlement.',
		is_production: true,
		production: {
			pottery: 4
		},
		materials: {
			clay: 8
		},
		position: {
			x: 1360,
			y: 680
		},
		levels: 3,
		cost: {
			coins: 30000,
			woodplanks: 30,
			stones: 30,
			clay: 100
		},
		requires: {
			settlement_level: 8
		}
	}, {
		name: 'Gunpowder Mill',
		handle: 'gunpowdermill',
		description: 'A Gunpowder Mill is creating highly useful (and unstable) gunpowder from the sulphur found in your Charcoal Burner`s Hut.',
		is_production: true,
		production: {
			gunpowder: 1
		},
		materials: {
			sulphur: 10
		},
		position: {
			x: 1530,
			y: 800
		},
		levels: 3,
		cost: {
			coins: 30000,
			woodplanks: 30,
			stones: 30,
			clay: 100,
			tools: 20
		},
		requires: {
			settlement_level: 26
		}
	}, {
		name: 'Armory',
		handle: 'armory',
		description: 'The Armory is a major building that produces weapons and armor for your soldiers. If you want to conquer other settlements, you will need to build one and keep it stocked with materials.',
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
			stones: 100,
			tools: 20
		},
		requires: {
			settlement_level: 9
		}
	}, {
		name: 'Butcher',
		handle: 'butcher',
		description: 'The Butcher slaughters cattle for meat, providing food that is more nutritious. Hides will be processed further at the Tannery.',
		is_production: true,
		production: {
			meat: 3,
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
		levels: 5,
		cost: {
			coins: 25000,
			woodplanks: 40,
			stones: 40
		},
		requires: {
			settlement_level: 4
		}
	}, {
		name: 'Iron smelter',
		handle: 'ironsmelter',
		description: 'The Iron Smelter (or foundry) smelts iron ores into iron bars using coal, ready to be transformed into weapons.',
		is_production: true,
		production: {
			iron: 4
		},
		materials: {
			ironores: 4,
			coal: 1
		},
		position: {
			x: 1300,
			y: 100
		},
		levels: 5,
		cost: {
			coins: 40000,
			woodplanks: 40,
			stones: 50
		},
		requires: {
			settlement_level: 7
		}
	}, {
		name: 'Copper smelter',
		handle: 'coppersmelter',
		description: 'The Copper Smelter smelts copper ores into brass using coal.',
		is_production: true,
		production: {
			brass: 2
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
			settlement_level: 8
		}
	}, {
		name: 'Gold smelter',
		handle: 'goldsmelter',
		description: 'The Gold Smelter smelts gold ores into gold bars using coal.',
		is_production: true,
		production: {
			gold: 1
		},
		materials: {
			goldores: 4,
			coal: 1
		},
		position: {
			x: 1260,
			y: 170
		},
		levels: 3,
		cost: {
			coins: 40000,
			woodplanks: 55,
			stones: 55
		},
		requires: {
			settlement_level: 12
		}
	}, {
		name: 'Trapper`s Lodge',
		handle: 'trapper',
		description: 'The trapper captures wild animals and gathers their furs.',
		is_production: true,
		production: {
			furs: 2
		},
		position: {
			x: 160,
			y: 400
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
			settlement_level: 9
		}
	}, {
		name: 'Clothing Factory',
		handle: 'clothingfactory',
		description: '.',
		is_production: true,
		production: {
			clothes: 1
		},
		materials: {
			fibers: 2
		},
		position: {
			x: 1400,
			y: 600
		},
		levels: 3,
		cost: {
			coins: 15000,
			wood: 40,
			stones: 40
		},
		requires: {
			settlement_level: 15
		}
	}, {
		name: 'Weaver`s Hut',
		handle: 'weaver',
		description: 'The weaver uses a hefty amount of hemp to produce fiber for clothes.',
		is_production: true,
		production: {
			fibers: 2
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
			coins: 10000,
			wood: 30,
			stones: 30
		},
		requires: {
			settlement_level: 12
		}
	}, {
		name: 'Tannery',
		handle: 'tannery',
		description: 'The Tannery produces leather clothes from processed animal hides.',
		is_production: true,
		production: {
			leather: 3
		},
		materials: {
			hides: 4,
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
			settlement_level: 8
		}
	}, {
		name: 'Coffee roaster',
		handle: 'coffeeroaster',
		description: 'The Coffee Roaster uses the coffee beans from your Coffee Farm and processes ' +
			'them into coffee.',
		is_production: true,
		production: {
			coffee: 1
		},
		materials: {
			coffeebeans: 4
		},
		position: {
			x: 1620,
			y: 390
		},
		levels: 3,
		cost: {
			coins: 70000,
			woodplanks: 80,
			stones: 60,
			tools: 20
		},
		requires: {
			settlement_level: 28,
			buildings: {
				tradingpost: 1
			}
		}
	}, {
		name: 'Sugar Mill',
		handle: 'sugarmill',
		description: 'The Sugar Mill processes any sugar cane you have in storage into sugar.',
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
			stones: 60,
			tools: 10
		},
		requires: {
			settlement_level: 26,
			buildings: {
				tradingpost: 1
			}
		}
	}, {
		name: 'Winery',
		handle: 'winery',
		description: 'The Winery uses the grapes from your Grapes Farm and processes them into wine. You will need to import the bottles from another settlement though.',
		is_production: true,
		production: {
			wine: 2
		},
		materials: {
			grapes: 4,
			barrels: 1,
			bottles: 1
		},
		position: {
			x: 1150,
			y: 810
		},
		levels: 5,
		cost: {
			coins: 50000,
			wood: 50,
			stones: 40,
			tools: 10
		},
		requires: {
			settlement_level: 14
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
			y: 620
		},
		levels: 3,
		cost: {
			coins: 81000,
			woodplanks: 70,
			stones: 70,
			tools: 10
		},
		requires: {
			settlement_level: 24
		}
	}, {
		name: 'Paper Mill',
		handle: 'papermill',
		description: 'The Paper Mill uses wood to produce paper, which is used together with indigo to produce books at the Printing House.',
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
			stones: 50,
			tools: 10
		},
		requires: {
			settlement_level: 22
		}
	}, {
		name: 'Printing Press',
		handle: 'printingpress',
		description: 'The Printing Press produces books from paper using indigo ink.',
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
			y: 600
		},
		levels: 3,
		cost: {
			coins: 84000,
			woodplanks: 100,
			stones: 100,
			tools: 10
		},
		requires: {
			settlement_level: 28
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
			x: 1480,
			y: 700
		},
		levels: 3,
		cost: {
			coins: 90000,
			woodplanks: 80,
			stones: 40,
			tools: 10
		},
		requires: {
			settlement_level: 30,
			buildings: {
				tradingpost: 1
			}
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
			x: 840,
			y: 230
		},
		levels: 3,
		cost: {
			coins: 75000,
			wood: 70,
			stones: 50,
			tools: 10
		},
		requires: {
			settlement_level: 22
		}
	}, {
		name: 'Ropeyard',
		handle: 'ropeyard',
		description: 'The Ropeyard produces ropes that are needed for your city`s ships.',
		is_production: true,
		production: {
			ropes: 1
		},
		materials: {
			hemp: 1
		},
		position: {
			x: 1720,
			y: 720
		},
		levels: 3,
		cost: {
			coins: 15000,
			wood: 70,
			stones: 60,
			tools: 10
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
			x: 1740,
			y: 460
		},
		levels: 3,
		cost: {
			coins: 50000,
			wood: 50,
			stones: 80
		},
		requires: {
			settlement_level: 22
		}
	}, {
		name: 'Marzipan Workshop',
		handle: 'marzipanworkshop',
		description: 'The Marzipan Workshop uses milk, almonds and sugar from city storage to create delicious marzipan. Your settlers will definitely appreciate it.',
		is_production: true,
		production: {
			marzipan: 1
		},
		materials: {
			almonds: 2,
			sugar: 2,
			milk: 4
		},
		position: {
			x: 1380,
			y: 380
		},
		levels: 3,
		cost: {
			coins: 50000,
			wood: 50,
			stones: 80,
			tools: 10
		},
		requires: {
			settlement_level: 26,
			buildings: {
				tradingpost: 1
			}
		}
	}, {
		name: 'Silk Weaver',
		handle: 'silkweaver',
		description: 'The Silk Weaver requires hemp, gold and silk and produces brocade robes.',
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
			y: 760
		},
		levels: 3,
		cost: {
			coins: 50000,
			wood: 50,
			stones: 80,
			tools: 10
		},
		requires: {
			settlement_level: 23,
			buildings: {
				tradingpost: 1
			}
		}
	}, {
		name: 'Quartz factory',
		handle: 'quartzfactory',
		description: 'The Quartz Factory provides your city with quartz.',
		is_production: true,
		production: {
			quartz: 2
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
			settlement_level: 16
		}
	}, {
		name: 'Apiary',
		handle: 'apiary',
		description: 'The Apiary produces bees wax for use in candles.',
		is_production: true,
		production: {
			wax: 2
		},
		position: {
			x: 1600,
			y: 280
		},
		levels: 3,
		cost: {
			coins: 40000,
			wood: 50,
			stones: 40
		},
		requires: {
			settlement_level: 16
		}
	}, {
		name: 'Barrel Cooperage',
		handle: 'barrelcooperage',
		description: 'The Barrel Cooperage creates barrels from wood and iron.',
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
			stones: 70,
			tools: 10
		},
		requires: {
			settlement_level: 9
		}
	}, {
		name: 'Brewery',
		handle: 'brewery',
		description: 'The Brewery brews beer from wheat. Beer is needed for higher-level hourses or your city`s navy.',
		is_production: true,
		production: {
			beer: 2
		},
		materials: {
			barrels: 1,
			wheat: 2
		},
		position: {
			x: 830,
			y: 760
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
			x: 1380,
			y: 180
		},
		levels: 3,
		cost: {
			coins: 45000,
			woodplanks: 80,
			stones: 60,
			tools: 10
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
			gunpowder: 10
		},
		position: {
			x: 1110,
			y: 100
		},
		levels: 3,
		cost: {
			coins: 250000,
			woodplanks: 200,
			stones: 300,
			tools: 20
		},
		requires: {
			settlement_level: 20
		}
	}, {
		name: 'Cannon Foundry',
		handle: 'cannonfoundry',
		description: 'The Cannon Foundry is responsable with the manufacture of the city cannons.',
		is_production: true,
		production: {
			cannons: 1
		},
		materials: {
			wood: 70,
			copper: 10,
			iron: 10,
			woodplanks: 10,
			ropes: 2,
			gunpowder: 8
		},
		position: {
			x: 1160,
			y: 170
		},
		levels: 3,
		cost: {
			coins: 200000,
			woodplanks: 200,
			stones: 300,
			tools: 20
		},
		requires: {
			settlement_level: 18
		}
	}, {
		name: 'Charcoal Burner`s Hut',
		handle: 'charcoalburnerhut',
		description: 'The Charcoal Burner`s Hut burns wood into coal and sulphur, which is needed by all your smelters.',
		is_production: true,
		production: {
			coal: 4,
			sulphur: 1
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
			settlement_level: 5
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
			y: 320
		},
		levels: 6,
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
			x: 840,
			y: 380
		},
		levels: 6,
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
			x: 890,
			y: 440
		},
		levels: 6,
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
			x: 940,
			y: 500
		},
		levels: 6,
		visible_upgrades: true,
		requires: {
			settlement_level: 6,
			buildings: {
				church: 1
			}
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
			x: 990,
			y: 560
		},
		levels: 6,
		visible_upgrades: true,
		requires: {
			settlement_level: 10,
			buildings: {
				church: 1
			}
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
			x: 890,
			y: 600
		},
		levels: 6,
		visible_upgrades: true,
		requires: {
			settlement_level: 16,
			buildings: {
				church: 2
			}
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
			pottery: 1,
			wine: 1,
			candlesticks: 1
		},
		position: {
			x: 790,
			y: 640
		},
		levels: 6,
		visible_upgrades: true,
		requires: {
			settlement_level: 20,
			buildings: {
				academy: 1
			}
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
			x: 690,
			y: 680
		},
		levels: 6,
		visible_upgrades: true,
		requires: {
			settlement_level: 25,
			buildings: {
				academy: 2
			}
		}
	}, {
		name: 'House',
		handle: 'house9',
		description: 'Houses provide coins through taxes and space for your settlers.',
		is_housing: true,
		tax: 50,
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
			perfume: 1
		},
		position: {
			x: 640,
			y: 620
		},
		levels: 6,
		visible_upgrades: true,
		requires: {
			settlement_level: 30,
			buildings: {
				academy: 2
			}
		}
	}, {
		name: 'House',
		handle: 'house10',
		description: 'Houses provide coins through taxes and space for your settlers.',
		is_housing: true,
		tax: 60,
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
			robes: 1
		},
		position: {
			x: 590,
			y: 560
		},
		levels: 6,
		visible_upgrades: true,
		requires: {
			settlement_level: 32,
			buildings: {
				church: 2,
				academy: 2
			}
		}
	}, {
		name: 'House',
		handle: 'house11',
		description: 'Houses provide coins through taxes and space for your settlers.',
		is_housing: true,
		tax: 80,
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
			x: 540,
			y: 500
		},
		levels: 6,
		visible_upgrades: true,
		requires: {
			settlement_level: 36,
			buildings: {
				church: 2,
				academy: 2
			}
		}
	}, {
		name: 'House',
		handle: 'house12',
		description: 'Houses provide coins through taxes and space for your settlers.',
		is_housing: true,
		tax: 100,
		cost: {
			woodplanks: 100,
			stones: 200,
			coins: 10000
		},
		materials: {
			meat: 4,
			wine: 2,
			pottery: 2,
			candlesticks: 1,
			furcoats: 1,
			perfume: 1,
			robes: 1,
			marzipan: 1,
			glasses: 1,
			jewelery: 1
		},
		position: {
			x: 490,
			y: 440
		},
		levels: 6,
		visible_upgrades: true,
		requires: {
			settlement_level: 40,
			buildings: {
				church: 3,
				academy: 3,
				castle: 1,
				tournir: 1
			}
		}
	}, {
		name: 'Cider Farm',
		handle: 'ciderfarm',
		description: 'The Cider Farm produces cider, a basic drink for your settlers',
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
			settlement_level: 6,
			buildings: {
				ciderfield: 1
			}
		}
	}, {
		name: 'Cider field',
		handle: 'ciderfield',
		description: 'A Cider Field is required for the Cider Farm to operate.',
		position: {
			x: 1430,
			y: 850
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
		name: 'Almonds farm',
		handle: 'almondsfarm',
		is_production: true,
		description: 'The Almonds Farm cultivates almonds for marzipan manufacture or export.',
		production: {
			almonds: 1
		},
		levels: 3,
		position: {
			x: 260,
			y: 620
		},
		cost: {
			coins: 40000,
			wood: 30,
			stones: 30
		},
		requires: {
			settlement_level: 36,
			buildings: {
				almondsfield: 1
			}
		}
	}, {
		name: 'Almonds field',
		handle: 'almondsfield',
		description: 'An Almonds Field is required for the Almonds Farm to operate.',
		position: {
			x: 200,
			y: 670
		},
		cost: {
			coins: 5000,
			wood: 10,
			clay: 20
		},
		requires: {
			settlement_level: 36
		}
	}, {
		name: 'Cattle Farm',
		handle: 'cattlefarm',
		description: 'A Cattle Farm grows cattle so your settlers can eat food that is more nutritious than bread.',
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
			x: 900,
			y: 860
		},
		cost: {
			coins: 10000,
			wood: 20,
			stones: 20
		},
		requires: {
			settlement_level: 3,
			buildings: {
				cattlefield: 1
			}
		}
	}, {
		name: 'Cattle field',
		handle: 'cattlefield',
		description: 'A Cattle Field is required for the Cattle Farm to operate.',
		position: {
			x: 830,
			y: 900
		},
		cost: {
			coins: 1000,
			wood: 10,
			clay: 20
		},
		requires: {
			settlement_level: 3
		}
	}, {
		name: 'Pig Farm',
		handle: 'pigfarm',
		description: 'A Pig Farm grows pigs so your settlers can eat food that is more nutritious than bread.',
		is_production: true,
		production: {
			meat: 1,
			hides: 1
		},
		levels: 3,
		materials: {
			herbs: 2,
			coins: 5
		},
		position: {
			x: 700,
			y: 800
		},
		cost: {
			coins: 15000,
			wood: 20,
			stones: 20
		},
		requires: {
			settlement_level: 3,
			buildings: {
				church: 1,
				pigfield: 1
			}
		}
	}, {
		name: 'Pig field',
		handle: 'pigfield',
		description: 'A Pig Field is required for the Pig Farm to operate.',
		position: {
			x: 760,
			y: 850
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
		description: 'A Grain Farm cultivates wheat that will be later transformed into bread, ' +
			'and your settlers will live happily ever after.',
		is_production: true,
		production: {
			wheat: 2,
			herbs: 1
		},
		levels: 3,
		position: {
			x: 1027,
			y: 870
		},
		cost: {
			coins: 10000,
			wood: 20,
			stones: 20
		},
		requires: {
			settlement_level: 2,
			buildings: {
				grainfield: 1
			}
		}
	}, {
		name: 'Grain field',
		handle: 'grainfield',
		description: 'A Grain Field is required for the Grain Farm to operate.',
		position: {
			x: 1080,
			y: 910
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
		description: 'A Grapes Farm provides your city with grapes for wine.',
		is_production: true,
		production: {
			grapes: 2,
			herbs: 1
		},
		levels: 3,
		position: {
			x: 1200,
			y: 860
		},
		cost: {
			coins: 15000,
			wood: 20,
			stones: 20
		},
		requires: {
			settlement_level: 16,
			buildings: {
				grapesfield: 1
			}
		}
	}, {
		name: 'Grapes field',
		handle: 'grapesfield',
		description: 'A Grapes Field is required for the Grapes Farm to operate.',
		position: {
			x: 1270,
			y: 830
		},
		cost: {
			coins: 1500,
			wood: 10,
			clay: 20
		},
		requires: {
			settlement_level: 16
		}
	}, {
		name: 'Coffee farm',
		handle: 'coffeefarm',
		description: 'A Coffee Farm cultivates coffee beans in your city, ready to be processed into coffee.',
		is_production: true,
		production: {
			coffeebeans: 2,
			herbs: 1
		},
		levels: 3,
		position: {
			x: 224,
			y: 500
		},
		cost: {
			coins: 60000,
			wood: 20,
			stones: 20
		},
		requires: {
			settlement_level: 36,
			buildings: {
				coffeefield: 1
			}
		}
	}, {
		name: 'Coffee field',
		handle: 'coffeefield',
		description: 'A Coffee Field is required for the Coffee Farm to operate.',
		position: {
			x: 180,
			y: 544
		},
		cost: {
			coins: 6000,
			wood: 10,
			clay: 40
		},
		requires: {
			settlement_level: 36
		}
	}, {
		name: 'Hemp farm',
		handle: 'hempfarm',
		description: 'A Hemp Farm provides your city with hemp.',
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
			settlement_level: 10,
			buildings: {
				hempfield: 1
			}
		}
	}, {
		name: 'Hemp field',
		handle: 'hempfield',
		description: 'A Hemp Field is required for the Hemp Farm to operate.',
		position: {
			x: 298,
			y: 746
		},
		cost: {
			coins: 2000,
			wood: 10,
			clay: 20
		},
		requires: {
			settlement_level: 10
		}
	}, {
		name: 'Silk farm',
		handle: 'silkfarm',
		description: 'A Silk Farm provides your city with silk.',
		is_production: true,
		production: {
			silk: 2
		},
		levels: 3,
		position: {
			x: 470,
			y: 820
		},
		cost: {
			coins: 80000,
			wood: 20,
			stones: 20
		},
		requires: {
			settlement_level: 28,
			buildings: {
				silkfield: 1
			}
		}
	}, {
		name: 'Silk field',
		handle: 'silkfield',
		description: 'A Silk Field is required for the Silk Farm to operate.',
		position: {
			x: 400,
			y: 860
		},
		cost: {
			coins: 8000,
			wood: 10,
			clay: 100
		},
		requires: {
			settlement_level: 28
		}
	}, {
		name: 'Sugar Cane Farm',
		handle: 'sugarfarm',
		description: 'A Sugar Cane Farm provides your city with sugar cane.',
		is_production: true,
		production: {
			sugarcane: 2,
			herbs: 1
		},
		levels: 3,
		position: {
			x: 550,
			y: 854
		},
		cost: {
			coins: 100000,
			wood: 20,
			stones: 20
		},
		requires: {
			settlement_level: 24,
			buildings: {
				academy: 1,
				sugarfield: 1
			}
		}
	}, {
		name: 'Sugar field',
		handle: 'sugarfield',
		description: 'A Sugar Field is required for the Sugar Farm to operate.',
		position: {
			x: 500,
			y: 900
		},
		cost: {
			coins: 10000,
			wood: 10,
			clay: 100
		},
		requires: {
			settlement_level: 24
		}
	}, {
		name: 'Indigo farm',
		handle: 'indigofarm',
		is_production: true,
		description: 'The Indigo Farm produces indigo that can be turned to ink and used to create books.',
		production: {
			indigo: 1,
			herbs: 1
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
			settlement_level: 20,
			buildings: {
				indigofield: 1
			}
		}
	}, {
		name: 'Indigo field',
		handle: 'indigofield',
		description: 'An Indigo Field is required for the Indigo Farm to operate.',
		position: {
			x: 310,
			y: 910
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
		name: 'Rose Farm',
		handle: 'rosenursery',
		is_production: true,
		description: 'The Rose Farm produces roses which are needed to manufacture perfume.',
		production: {
			roses: 1,
			herbs: 1
		},
		levels: 3,
		position: {
			x: 600,
			y: 790
		},
		cost: {
			coins: 20000,
			wood: 50,
			stones: 50,
			clay: 50
		},
		requires: {
			settlement_level: 26,
			buildings: {
				academy: 1,
				rosefield: 1
			}
		}
	}, {
		name: 'Roses field',
		handle: 'rosefield',
		description: 'A Roses Field is required for the Rose Farm to operate.',
		position: {
			x: 540,
			y: 750
		},
		cost: {
			coins: 10000,
			wood: 10,
			clay: 100
		},
		requires: {
			settlement_level: 26
		}
	}, {
		name: 'Spice Farm',
		handle: 'spicefarm',
		is_production: true,
		description: 'The Spice Farm is responsable for the production of spices.',
		production: {
			spices: 1,
			herbs: 1
		},
		levels: 3,
		position: {
			x: 380,
			y: 790
		},
		cost: {
			coins: 200000,
			wood: 60,
			stones: 60,
			clay: 60
		},
		requires: {
			settlement_level: 32,
			buildings: {
				academy: 1,
				spicefield: 1
			}
		}
	}, {
		name: 'Spice field',
		handle: 'spicefield',
		description: 'A Spice Field is required for the Spice Farm to operate.',
		position: {
			x: 430,
			y: 750
		},
		cost: {
			coins: 20000,
			wood: 40,
			clay: 300
		},
		requires: {
			settlement_level: 32
		}
	}, {
		name: 'Toolmaker Workshop',
		handle: 'toolmaker',
		is_production: true,
		description: 'Tools are needed to construct higher-level buildings, and a Toolmaker Workshop will create those for your settlement.',
		production: {
			tools: 2
		},
		materials: {
			wood: 1,
			iron: 1,
			coal: 1,
			brass: 1
		},
		levels: 3,
		position: {
			x: 1600,
			y: 600
		},
		cost: {
			coins: 30000,
			wood: 80,
			stones: 80,
			clay: 60
		},
		requires: {
			settlement_level: 8
		}
	}, {
		name: 'Jeweler',
		handle: 'jeweler',
		is_production: true,
		description: 'The Jeweler processes pearls into jewelery for your settlers (and traders).',
		production: {
			jewelery: 1
		},
		materials: {
			pearls: 10
		},
		levels: 3,
		position: {
			x: 1600,
			y: 900
		},
		cost: {
			coins: 55000,
			wood: 60,
			stones: 60,
			clay: 60,
			tools: 10
		},
		requires: {
			settlement_level: 20
		}
	}];

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
			coins: 2300000,
			prestige: 700,
			espionage: 400
		},
		trades: {
			imports: {
				gold: civitas.IMPORTANCE_MEDIUM,
				milk: civitas.IMPORTANCE_HIGH,
				goldores: civitas.IMPORTANCE_HIGH,
				weapons: civitas.IMPORTANCE_LOW,
				herbs: civitas.IMPORTANCE_HIGH,
				sugarcane: civitas.IMPORTANCE_HIGH,
				quartz: civitas.IMPORTANCE_HIGH,
				gunpowder: civitas.IMPORTANCE_HIGH,
				roses: civitas.IMPORTANCE_MEDIUM,
				wine: civitas.IMPORTANCE_VITAL,
				clay: civitas.IMPORTANCE_VITAL,
				provisions: civitas.IMPORTANCE_HIGH,
				fish: civitas.IMPORTANCE_MEDIUM,
				catapults: civitas.IMPORTANCE_MEDIUM
			},
			exports: {
				hemp: civitas.IMPORTANCE_VITAL,
				indigo: civitas.IMPORTANCE_HIGH,
				armor: civitas.IMPORTANCE_MEDIUM,
				sugar: civitas.IMPORTANCE_HIGH,
				barrels: civitas.IMPORTANCE_MEDIUM,
				paper: civitas.IMPORTANCE_HIGH,
				woodplanks: civitas.IMPORTANCE_MEDIUM,
				stones: civitas.IMPORTANCE_HIGH
			}
		},
		army: {
			militia: 40,
			axeman: 30,
			knight: 10,
			bowman: 20,
			crossbowman: 10,
			pikeman: 30
		},
		navy: {
			corsair: 4,
			caravel: 2,
			galleon: 2,
			warship: 6,
			shipoftheline: 1
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
			coins: 2300000,
			prestige: 700,
			espionage: 1000
		},
		trades: {
			imports: {
				wax: civitas.IMPORTANCE_HIGH,
				pottery: civitas.IMPORTANCE_HIGH,
				sugar: civitas.IMPORTANCE_VITAL,
				sugarcane: civitas.IMPORTANCE_MEDIUM,
				glasses: civitas.IMPORTANCE_HIGH,
				furs: civitas.IMPORTANCE_VITAL,
				stones: civitas.IMPORTANCE_HIGH,
				fish: civitas.IMPORTANCE_HIGH,
				mosaic: civitas.IMPORTANCE_HIGH,
				candles: civitas.IMPORTANCE_LOW,
				bread: civitas.IMPORTANCE_VITAL,
				pearls: civitas.IMPORTANCE_LOW,
				salt: civitas.IMPORTANCE_HIGH
			},
			exports: {
				leather: civitas.IMPORTANCE_MEDIUM,
				indigo: civitas.IMPORTANCE_LOW,
				flour: civitas.IMPORTANCE_VITAL,
				donkeys: civitas.IMPORTANCE_HIGH,
				glass: civitas.IMPORTANCE_MEDIUM,
				coal: civitas.IMPORTANCE_HIGH,
				gunpowder: civitas.IMPORTANCE_HIGH,
				bottles: civitas.IMPORTANCE_HIGH,
				fish: civitas.IMPORTANCE_HIGH,
				woodplanks: civitas.IMPORTANCE_VITAL,
				wood: civitas.IMPORTANCE_VITAL
			}
		},
		navy: {
			corsair: 6,
			caravel: 4,
			galleon: 2,
			warship: 3,
			shipoftheline: 4
		},
		army: {
			militia: 40,
			axeman: 50,
			knight: 10,
			bowman: 50,
			crossbowman: 50,
			pikeman: 40
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
			coins: 1600000,
			prestige: 1000,
			espionage: 800
		},
		trades: {
			imports: {
				wheat: civitas.IMPORTANCE_VITAL,
				wood: civitas.IMPORTANCE_HIGH,
				barrels: civitas.IMPORTANCE_MEDIUM,
				provisions: civitas.IMPORTANCE_HIGH,
				furs: civitas.IMPORTANCE_VITAL,
				sugar: civitas.IMPORTANCE_LOW,
				bottles: civitas.IMPORTANCE_HIGH,
				jewelery: civitas.IMPORTANCE_HIGH,
				tools: civitas.IMPORTANCE_HIGH,
				woodplanks: civitas.IMPORTANCE_HIGH,
				sugarcane: civitas.IMPORTANCE_LOW,
				clay: civitas.IMPORTANCE_VITAL
			},
			exports: {
				herbs: civitas.IMPORTANCE_HIGH,
				silver: civitas.IMPORTANCE_VITAL,
				sugarcane: civitas.IMPORTANCE_HIGH,
				glasses: civitas.IMPORTANCE_LOW,
				furcoats: civitas.IMPORTANCE_MEDIUM,
				indigo: civitas.IMPORTANCE_LOW,
				pottery: civitas.IMPORTANCE_HIGH,
				wheat: civitas.IMPORTANCE_HIGH
			}
		},
		army: {
			militia: 1210,
			axeman: 520,
			crossbowman: 320,
			pikeman: 300
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
			coins: 2000000,
			prestige: 500,
			espionage: 300
		},
		trades: {
			imports: {
				flour: civitas.IMPORTANCE_HIGH,
				milk: civitas.IMPORTANCE_VITAL,
				brass: civitas.IMPORTANCE_HIGH,
				furs: civitas.IMPORTANCE_LOW,
				goldores: civitas.IMPORTANCE_HIGH,
				fibers: civitas.IMPORTANCE_MEDIUM,
				fish: civitas.IMPORTANCE_VITAL,
				cider: civitas.IMPORTANCE_LOW,
				silk: civitas.IMPORTANCE_HIGH,
				cattle: civitas.IMPORTANCE_MEDIUM,
				wheat: civitas.IMPORTANCE_VITAL
			},
			exports: {
				meat: civitas.IMPORTANCE_VITAL,
				clothes: civitas.IMPORTANCE_VITAL,
				fish: civitas.IMPORTANCE_HIGH,
				bottles: civitas.IMPORTANCE_HIGH,
				camels: civitas.IMPORTANCE_HIGH,
				armor: civitas.IMPORTANCE_MEDIUM,
				gunpowder: civitas.IMPORTANCE_HIGH,
				pottery: civitas.IMPORTANCE_HIGH,
				coffeebeans: civitas.IMPORTANCE_HIGH,
				silk: civitas.IMPORTANCE_LOW
			}
		},
		army: {
			militia: 90,
			axeman: 70,
			bowman: 50,
			crossbowman: 30,
			pikeman: 90
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
			coins: 2000000,
			prestige: 800,
			espionage: 900
		},
		trades: {
			imports: {
				barrels: civitas.IMPORTANCE_HIGH,
				books: civitas.IMPORTANCE_LOW,
				paper: civitas.IMPORTANCE_LOW,
				coal: civitas.IMPORTANCE_VITAL,
				provisions: civitas.IMPORTANCE_HIGH,
				herbs: civitas.IMPORTANCE_HIGH,
				tools: civitas.IMPORTANCE_HIGH,
				copper: civitas.IMPORTANCE_MEDIUM,
				mosaic: civitas.IMPORTANCE_MEDIUM,
				woodplanks: civitas.IMPORTANCE_HIGH,
				indigo: civitas.IMPORTANCE_HIGH
			},
			exports: {
				coal: civitas.IMPORTANCE_VITAL,
				ironores: civitas.IMPORTANCE_LOW,
				copper: civitas.IMPORTANCE_MEDIUM,
				goldores: civitas.IMPORTANCE_LOW,
				oil: civitas.IMPORTANCE_HIGH,
				camels: civitas.IMPORTANCE_VITAL,
				iron: civitas.IMPORTANCE_LOW,
				gold: civitas.IMPORTANCE_VITAL,
				catapults: civitas.IMPORTANCE_MEDIUM,
				brass: civitas.IMPORTANCE_LOW
			}
		},
		army: {
			militia: 40,
			axeman: 120,
			knight: 10,
			bowman: 120,
			crossbowman: 30,
			pikeman: 50
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
			coins: 1900000,
			prestige: 700,
			espionage: 500
		},
		trades: {
			imports: {
				meat: civitas.IMPORTANCE_HIGH,
				milk: civitas.IMPORTANCE_LOW,
				weapons: civitas.IMPORTANCE_VITAL,
				roses: civitas.IMPORTANCE_MEDIUM,
				fibers: civitas.IMPORTANCE_HIGH,
				perfume: civitas.IMPORTANCE_LOW,
				sulphur: civitas.IMPORTANCE_HIGH,
				goldores: civitas.IMPORTANCE_HIGH,
				jewelery: civitas.IMPORTANCE_HIGH,
				iron: civitas.IMPORTANCE_VITAL,
				ironores: civitas.IMPORTANCE_VITAL
			},
			exports: {
				brine: civitas.IMPORTANCE_MEDIUM,
				clothes: civitas.IMPORTANCE_HIGH,
				glass: civitas.IMPORTANCE_HIGH,
				oil: civitas.IMPORTANCE_HIGH,
				wheat: civitas.IMPORTANCE_VITAL,
				pottery: civitas.IMPORTANCE_HIGH,
				hides: civitas.IMPORTANCE_LOW,
				paper: civitas.IMPORTANCE_HIGH
			}
		},
		army: {
			militia: 200,
			bowman: 200,
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
			coins: 6300000,
			prestige: 780,
			espionage: 400
		},
		trades: {
			imports: {
				silk: civitas.IMPORTANCE_LOW,
				clothes: civitas.IMPORTANCE_HIGH,
				leather: civitas.IMPORTANCE_HIGH,
				bottles: civitas.IMPORTANCE_HIGH,
				brine: civitas.IMPORTANCE_MEDIUM,
				hides: civitas.IMPORTANCE_HIGH,
				clay: civitas.IMPORTANCE_MEDIUM,
				bottles: civitas.IMPORTANCE_MEDIUM,
				pottery: civitas.IMPORTANCE_HIGH,
				meat: civitas.IMPORTANCE_MEDIUM
			},
			exports: {
				ropes: civitas.IMPORTANCE_MEDIUM,
				gold: civitas.IMPORTANCE_LOW,
				iron: civitas.IMPORTANCE_VITAL,
				gunpowder: civitas.IMPORTANCE_HIGH,
				sulphur: civitas.IMPORTANCE_HIGH,
				ironores: civitas.IMPORTANCE_MEDIUM,
				copper: civitas.IMPORTANCE_HIGH,
				camels: civitas.IMPORTANCE_HIGH,
				woodplanks: civitas.IMPORTANCE_MEDIUM,
				coal: civitas.IMPORTANCE_LOW
			}
		},
		army: {
			militia: 40,
			axeman: 30,
			knight: 10,
			bowman: 20,
			crossbowman: 10,
			pikeman: 30
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
			coins: 3000000,
			prestige: 200,
			espionage: 850
		},
		trades: {
			imports: {
				furs: civitas.IMPORTANCE_HIGH,
				goldores: civitas.IMPORTANCE_HIGH,
				gold: civitas.IMPORTANCE_VITAL,
				milk: civitas.IMPORTANCE_MEDIUM,
				brine: civitas.IMPORTANCE_VITAL,
				leather: civitas.IMPORTANCE_LOW,
				herbs: civitas.IMPORTANCE_HIGH,
				woodplanks: civitas.IMPORTANCE_MEDIUM,
				fish: civitas.IMPORTANCE_VITAL,
				furcoats: civitas.IMPORTANCE_VITAL
			},
			exports: {
				herbs: civitas.IMPORTANCE_VITAL,
				statues: civitas.IMPORTANCE_VITAL,
				camels: civitas.IMPORTANCE_HIGH,
				wax: civitas.IMPORTANCE_HIGH,
				barrels: civitas.IMPORTANCE_MEDIUM,
				candles: civitas.IMPORTANCE_LOW,
				armor: civitas.IMPORTANCE_HIGH,
				salt: civitas.IMPORTANCE_MEDIUM
			}
		},
		army: {
			militia: 40,
			axeman: 30,
			knight: 10,
			bowman: 20,
			crossbowman: 10,
			pikeman: 30
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
			coins: 3300000,
			prestige: 900,
			espionage: 900
		},
		trades: {
			imports: {
				perfume: civitas.IMPORTANCE_MEDIUM,
				coffee: civitas.IMPORTANCE_LOW,
				cider: civitas.IMPORTANCE_HIGH,
				hemp: civitas.IMPORTANCE_HIGH,
				bottles: civitas.IMPORTANCE_HIGH,
				wine: civitas.IMPORTANCE_HIGH,
				hides: civitas.IMPORTANCE_VITAL,
				beer: civitas.IMPORTANCE_HIGH,
				mosaic: civitas.IMPORTANCE_VITAL,
				woodplanks: civitas.IMPORTANCE_HIGH,
				silk: civitas.IMPORTANCE_MEDIUM
			},
			exports: {
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
			militia: 40,
			axeman: 320,
			knight: 10,
			bowman: 220,
			crossbowman: 210,
			pikeman: 90
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
			coins: 2200000,
			prestige: 160,
			espionage: 500
		},
		trades: {
			imports: {
				flour: civitas.IMPORTANCE_LOW,
				bread: civitas.IMPORTANCE_HIGH,
				fibers: civitas.IMPORTANCE_HIGH,
				woodplanks: civitas.IMPORTANCE_MEDIUM,
				armor: civitas.IMPORTANCE_HIGH,
				brass: civitas.IMPORTANCE_MEDIUM,
				sulphur: civitas.IMPORTANCE_HIGH,
				brine: civitas.IMPORTANCE_MEDIUM,
				copper: civitas.IMPORTANCE_VITAL,
				clay: civitas.IMPORTANCE_MEDIUM,
				coal: civitas.IMPORTANCE_VITAL
			},
			exports: {
				wood: civitas.IMPORTANCE_LOW,
				meat: civitas.IMPORTANCE_HIGH,
				jewelery: civitas.IMPORTANCE_HIGH,
				camels: civitas.IMPORTANCE_MEDIUM,
				gunpowder: civitas.IMPORTANCE_HIGH,
				stones: civitas.IMPORTANCE_VITAL,
				wine: civitas.IMPORTANCE_MEDIUM
			}
		},
		army: {
			militia: 90,
			axeman: 90,
			knight: 1,
			bowman: 20,
			crossbowman: 20,
			pikeman: 30
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
			coins: 1800000,
			prestige: 200,
			espionage: 450
		},
		trades: {
			imports: {
				furs: civitas.IMPORTANCE_LOW,
				bread: civitas.IMPORTANCE_VITAL,
				hides: civitas.IMPORTANCE_MEDIUM,
				clay: civitas.IMPORTANCE_HIGH,
				milk: civitas.IMPORTANCE_LOW,
				fibers: civitas.IMPORTANCE_MEDIUM,
				tools: civitas.IMPORTANCE_HIGH,
				goldores: civitas.IMPORTANCE_HIGH,
				gold: civitas.IMPORTANCE_HIGH,
				furcoats: civitas.IMPORTANCE_HIGH,
				leather: civitas.IMPORTANCE_LOW
			},
			exports: {
				spyglasses: civitas.IMPORTANCE_VITAL,
				wax: civitas.IMPORTANCE_LOW,
				bottles: civitas.IMPORTANCE_HIGH,
				armor: civitas.IMPORTANCE_HIGH,
				candles: civitas.IMPORTANCE_LOW,
				salt: civitas.IMPORTANCE_MEDIUM,
				copper: civitas.IMPORTANCE_VITAL,
				stones: civitas.IMPORTANCE_HIGH,
				sugarcane: civitas.IMPORTANCE_HIGH
			}
		},
		army: {
			militia: 40,
			axeman: 30,
			knight: 10,
			bowman: 20,
			crossbowman: 10,
			pikeman: 30
		},
		navy: {
			corsair: 2,
			caravel: 2,
			galleon: 2,
			warship: 2
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
			coins: 1800000,
			prestige: 300,
			espionage: 300
		},
		trades: {
			imports: {
				cider: civitas.IMPORTANCE_LOW,
				ropes: civitas.IMPORTANCE_LOW,
				armor: civitas.IMPORTANCE_HIGH,
				wax: civitas.IMPORTANCE_MEDIUM,
				sugar: civitas.IMPORTANCE_LOW,
				bottles: civitas.IMPORTANCE_HIGH,
				bread: civitas.IMPORTANCE_VITAL,
				wood: civitas.IMPORTANCE_VITAL,
				woodplanks: civitas.IMPORTANCE_MEDIUM,
				stones: civitas.IMPORTANCE_VITAL
			},
			exports: {
				almonds: civitas.IMPORTANCE_LOW,
				roses: civitas.IMPORTANCE_HIGH,
				grapes: civitas.IMPORTANCE_LOW,
				hemp: civitas.IMPORTANCE_LOW,
				oil: civitas.IMPORTANCE_HIGH,
				coffeebeans: civitas.IMPORTANCE_LOW,
				coffee: civitas.IMPORTANCE_LOW,
				catapults: civitas.IMPORTANCE_MEDIUM,
				spices: civitas.IMPORTANCE_MEDIUM
			}
		},
		army: {
			militia: 40,
			axeman: 30,
			knight: 10,
			bowman: 20,
			crossbowman: 10,
			pikeman: 30
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
			coins: 2000000,
			prestige: 710,
			espionage: 450
		},
		trades: {
			imports: {
				meat: civitas.IMPORTANCE_LOW,
				milk: civitas.IMPORTANCE_LOW,
				copper: civitas.IMPORTANCE_VITAL,
				weapons: civitas.IMPORTANCE_LOW,
				roses: civitas.IMPORTANCE_MEDIUM,
				perfume: civitas.IMPORTANCE_LOW,
				sugarcane: civitas.IMPORTANCE_HIGH,
				sulphur: civitas.IMPORTANCE_HIGH,
				tools: civitas.IMPORTANCE_HIGH,
				provisions: civitas.IMPORTANCE_HIGH,
				iron: civitas.IMPORTANCE_VITAL,
				ironores: civitas.IMPORTANCE_HIGH
			},
			exports: {
				brine: civitas.IMPORTANCE_MEDIUM,
				clothes: civitas.IMPORTANCE_LOW,
				armor: civitas.IMPORTANCE_HIGH,
				glass: civitas.IMPORTANCE_HIGH,
				wheat: civitas.IMPORTANCE_VITAL,
				stones: civitas.IMPORTANCE_HIGH,
				hides: civitas.IMPORTANCE_LOW,
				pottery: civitas.IMPORTANCE_HIGH,
				paper: civitas.IMPORTANCE_LOW
			}
		},
		army: {
			militia: 120,
			bowman: 32,
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
			coins: 2800000,
			prestige: 600,
			espionage: 580
		},
		trades: {
			imports: {
				meat: civitas.IMPORTANCE_LOW,
				milk: civitas.IMPORTANCE_LOW,
				weapons: civitas.IMPORTANCE_LOW,
				furs: civitas.IMPORTANCE_VITAL,
				stones: civitas.IMPORTANCE_HIGH,
				roses: civitas.IMPORTANCE_MEDIUM,
				perfume: civitas.IMPORTANCE_LOW,
				iron: civitas.IMPORTANCE_VITAL,
				ironores: civitas.IMPORTANCE_VITAL
			},
			exports: {
				brine: civitas.IMPORTANCE_MEDIUM,
				clothes: civitas.IMPORTANCE_LOW,
				glass: civitas.IMPORTANCE_HIGH,
				wheat: civitas.IMPORTANCE_VITAL,
				oil: civitas.IMPORTANCE_HIGH,
				jewelery: civitas.IMPORTANCE_HIGH,
				hides: civitas.IMPORTANCE_LOW,
				paper: civitas.IMPORTANCE_LOW
			}
		},
		army: {
			militia: 40,
			axeman: 30,
			knight: 10,
			bowman: 20,
			crossbowman: 10,
			pikeman: 30
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
			coins: 1100000,
			prestige: 180,
			espionage: 200
		},
		trades: {
			imports: {
				meat: civitas.IMPORTANCE_LOW,
				iron: civitas.IMPORTANCE_HIGH,
				brass: civitas.IMPORTANCE_LOW,
				cider: civitas.IMPORTANCE_LOW,
				stones: civitas.IMPORTANCE_HIGH,
				copper: civitas.IMPORTANCE_VITAL,
				brine: civitas.IMPORTANCE_MEDIUM,
				grapes: civitas.IMPORTANCE_LOW,
				jewelery: civitas.IMPORTANCE_HIGH,
				pottery: civitas.IMPORTANCE_HIGH,
				coal: civitas.IMPORTANCE_MEDIUM,
				woodplanks: civitas.IMPORTANCE_HIGH,
				ironores: civitas.IMPORTANCE_HIGH
			},
			exports: {
				wine: civitas.IMPORTANCE_HIGH,
				silk: civitas.IMPORTANCE_LOW,
				wood: civitas.IMPORTANCE_MEDIUM,
				armor: civitas.IMPORTANCE_MEDIUM,
				hemp: civitas.IMPORTANCE_VITAL,
				tools: civitas.IMPORTANCE_HIGH,
				cattle: civitas.IMPORTANCE_LOW,
				statues: civitas.IMPORTANCE_VITAL
			}
		},
		army: {
			militia: 40,
			axeman: 30,
			knight: 10,
			bowman: 20,
			crossbowman: 10,
			pikeman: 30
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
			coins: 1000000,
			prestige: 360,
			espionage: 500
		},
		trades: {
			imports: {
				furs: civitas.IMPORTANCE_LOW,
				hides: civitas.IMPORTANCE_VITAL,
				milk: civitas.IMPORTANCE_MEDIUM,
				gems: civitas.IMPORTANCE_LOW,
				brass: civitas.IMPORTANCE_VITAL,
				sugarcane: civitas.IMPORTANCE_HIGH,
				sulphur: civitas.IMPORTANCE_HIGH,
				goldores: civitas.IMPORTANCE_HIGH,
				wheat: civitas.IMPORTANCE_HIGH,
				stones: civitas.IMPORTANCE_HIGH,
				catapults: civitas.IMPORTANCE_MEDIUM,
				clay: civitas.IMPORTANCE_LOW
			},
			exports: {
				silver: civitas.IMPORTANCE_VITAL,
				wax: civitas.IMPORTANCE_MEDIUM,
				candles: civitas.IMPORTANCE_LOW,
				salt: civitas.IMPORTANCE_VITAL,
				pearls: civitas.IMPORTANCE_MEDIUM,
				pottery: civitas.IMPORTANCE_MEDIUM,
				oil: civitas.IMPORTANCE_HIGH,
				ropes: civitas.IMPORTANCE_MEDIUM
			}
		},
		army: {
			militia: 40,
			axeman: 30,
			knight: 10,
			bowman: 20,
			crossbowman: 10,
			pikeman: 30
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
			coins: 1900000,
			prestige: 400,
			espionage: 500
		},
		trades: {
			imports: {
				wheat: civitas.IMPORTANCE_VITAL,
				mosaic: civitas.IMPORTANCE_MEDIUM,
				wood: civitas.IMPORTANCE_HIGH,
				furs: civitas.IMPORTANCE_VITAL,
				fibers: civitas.IMPORTANCE_HIGH,
				sugar: civitas.IMPORTANCE_MEDIUM,
				sugarcane: civitas.IMPORTANCE_LOW,
				clay: civitas.IMPORTANCE_VITAL
			},
			exports: {
				silver: civitas.IMPORTANCE_VITAL,
				glasses: civitas.IMPORTANCE_LOW,
				tools: civitas.IMPORTANCE_HIGH,
				furcoats: civitas.IMPORTANCE_MEDIUM,
				bottles: civitas.IMPORTANCE_HIGH,
				camels: civitas.IMPORTANCE_HIGH,
				indigo: civitas.IMPORTANCE_LOW,
				woodplanks: civitas.IMPORTANCE_MEDIUM,
				wheat: civitas.IMPORTANCE_LOW
			}
		},
		army: {
			militia: 40,
			axeman: 30,
			knight: 10,
			bowman: 20,
			crossbowman: 10,
			pikeman: 30
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
			coins: 2400000,
			prestige: 500,
			espionage: 800
		},
		trades: {
			imports: {
				salt: civitas.IMPORTANCE_MEDIUM,
				stones: civitas.IMPORTANCE_VITAL,
				armor: civitas.IMPORTANCE_MEDIUM,
				jewelery: civitas.IMPORTANCE_HIGH,
				brine: civitas.IMPORTANCE_MEDIUM,
				gems: civitas.IMPORTANCE_LOW,
				hides: civitas.IMPORTANCE_VITAL,
				pottery: civitas.IMPORTANCE_HIGH,
				pearls: civitas.IMPORTANCE_LOW
			},
			exports: {
				donkeys: civitas.IMPORTANCE_VITAL,
				sulphur: civitas.IMPORTANCE_VITAL,
				silk: civitas.IMPORTANCE_MEDIUM,
				glass: civitas.IMPORTANCE_HIGH,
				woodplanks: civitas.IMPORTANCE_MEDIUM,
				sugarcane: civitas.IMPORTANCE_HIGH,
				sugar: civitas.IMPORTANCE_HIGH,
				meat: civitas.IMPORTANCE_HIGH,
				carpets: civitas.IMPORTANCE_LOW,
				cannons: civitas.IMPORTANCE_LOW
			}
		},
		army: {
			militia: 80,
			axeman: 40,
			bowman: 10,
			crossbowman: 30,
			pikeman: 10
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
			coins: 2400000,
			prestige: 420,
			espionage: 700
		},
		trades: {
			imports: {
				gold: civitas.IMPORTANCE_LOW,
				goldores: civitas.IMPORTANCE_HIGH,
				weapons: civitas.IMPORTANCE_LOW,
				hemp: civitas.IMPORTANCE_HIGH,
				salt: civitas.IMPORTANCE_MEDIUM,
				bread: civitas.IMPORTANCE_HIGH,
				woodplanks: civitas.IMPORTANCE_HIGH,
				stones: civitas.IMPORTANCE_VITAL,
				gems: civitas.IMPORTANCE_LOW,
				pearls: civitas.IMPORTANCE_LOW
			},
			exports: {
				donkeys: civitas.IMPORTANCE_VITAL,
				sulphur: civitas.IMPORTANCE_VITAL,
				silk: civitas.IMPORTANCE_MEDIUM,
				glass: civitas.IMPORTANCE_HIGH,
				bottles: civitas.IMPORTANCE_HIGH,
				roses: civitas.IMPORTANCE_LOW,
				cattle: civitas.IMPORTANCE_LOW,
				bread: civitas.IMPORTANCE_LOW,
				meat: civitas.IMPORTANCE_MEDIUM,
				carpets: civitas.IMPORTANCE_LOW,
				cannons: civitas.IMPORTANCE_LOW
			}
		},
		army: {
			militia: 40,
			axeman: 30,
			knight: 10,
			bowman: 20,
			crossbowman: 10,
			pikeman: 30
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
			coins: 3200000,
			prestige: 490,
			espionage: 200
		},
		trades: {
			imports: {
				gold: civitas.IMPORTANCE_HIGH,
				goldores: civitas.IMPORTANCE_MEDIUM,
				fibers: civitas.IMPORTANCE_HIGH,
				weapons: civitas.IMPORTANCE_LOW,
				salt: civitas.IMPORTANCE_MEDIUM,
				woodplanks: civitas.IMPORTANCE_MEDIUM,
				copper: civitas.IMPORTANCE_VITAL,
				stones: civitas.IMPORTANCE_VITAL,
				gems: civitas.IMPORTANCE_LOW,
				pottery: civitas.IMPORTANCE_HIGH,
				clay: civitas.IMPORTANCE_HIGH,
				pearls: civitas.IMPORTANCE_LOW
			},
			exports: {
				donkeys: civitas.IMPORTANCE_VITAL,
				sulphur: civitas.IMPORTANCE_VITAL,
				silk: civitas.IMPORTANCE_MEDIUM,
				glass: civitas.IMPORTANCE_HIGH,
				roses: civitas.IMPORTANCE_LOW,
				ropes: civitas.IMPORTANCE_MEDIUM,
				sugarcane: civitas.IMPORTANCE_HIGH,
				cattle: civitas.IMPORTANCE_LOW,
				bread: civitas.IMPORTANCE_LOW,
				meat: civitas.IMPORTANCE_MEDIUM,
				carpets: civitas.IMPORTANCE_LOW,
				cannons: civitas.IMPORTANCE_LOW
			}
		},
		army: {
			militia: 20,
			axeman: 20,
			knight: 20,
			bowman: 20,
			crossbowman: 20,
			pikeman: 20
		},
		location: {
			x: 30,
			y: 30
		}
	},
	21: {
		type: civitas.VILLAGE,
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
			militia: 3,
			bowman: 3
		}
	},
	22: {
		type: civitas.VILLAGE,
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
			militia: 3,
			bowman: 2
		}
	},
	23: {
		type: civitas.VILLAGE,
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
			militia: 3,
			bowman: 2
		}
	},
	24: {
		type: civitas.VILLAGE,
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
			militia: 3,
			bowman: 2
		}
	},
	25: {
		type: civitas.VILLAGE,
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
			militia: 3,
			bowman: 2
		}
	},
	26: {
		type: civitas.VILLAGE,
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
			militia: 6
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
	'Actium',
	'Tripolis',
	'Troia',
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
 * List of all available in-game events.
 * 
 * @constant
 * @type {Array}
 */
civitas.EVENTS = [{
	name: 'Great earthquake',
	description: '',
	chance: 0.00001,
	destroy: {
		amount: 1
	}
}, {
	name: 'Royal marriage',
	description: 'A marriage was arranged between a member of your family and the royal family of SETTLEMENT. This raises your influence on SETTLEMENT by INFLUENCE. Good job!',
	chance: 0.0001,
	raise: {
		influence: 10
	}
}, {
	name: 'Raiders attack',
	description: 'A band of raiders attacked the outskirts of your settlement. Repairing the affected buildings costs your settlement COINS coins.',
	chance: 0.0002,
	lower: {
		coins: 1000
	}
}, {
	name: 'Discovery',
	description: 'The engineers in your settlement made a great discovery which made you more famous, thus gaining FAME fame and RESEARCH research.',
	chance: 0.0004,
	raise: {
		fame: 100,
		research: 10
	}
}, {
	name: 'Foreign spy discovered',
	description: 'A spy from SETTLEMENT was found hiding in your settlement, as a reward for finding him you gain ESPIONAGE espionage.',
	chance: 0.002,
	raise: {
		espionage: 10
	}
}, {
	name: 'Your spy uncovered',
	description: 'One of your spies in SETTLEMENT was discovered, SETTLEMENT`s ruler is angry so you lose PRESTIGE prestige.',
	chance: 0.003,
	lower: {
		prestige: 2
	}
}];

/**
 * List of all the resources available in-game.
 * 
 * @constant
 * @type {Object}
 */
civitas.RESOURCES = {
	coins: {
		name: 'Coins'
	},
	fame: {
		name: 'Fame'
	},
	prestige: {
		name: 'Prestige'
	},
	espionage: {
		name: 'Espionage'
	},
	research: {
		name: 'Research'
	},
	faith: {
		name: 'Faith'
	},
	almonds: {
		name: 'Almonds',
		price: 180
	},
	armor: {
		name: 'Armor',
		price: 220
	},
	barrels: {
		name: 'Barrels',
		price: 60
	},
	beer: {
		name: 'Beer',
		price: 30
	},
	books: {
		name: 'Books',
		price: 100
	},
	bottles: {
		name: 'Bottles',
		price: 10,
		imported: true
	},
	bread: {
		name: 'Bread',
		price: 30
	},
	brine: {
		name: 'Brine',
		price: 10
	},
	brass: {
		name: 'Brass',
		price: 60
	},
	camels: {
		name: 'Camels',
		price: 110,
		imported: true
	},
	candles: {
		name: 'Candles',
		price: 100
	},
	candlesticks: {
		name: 'Candlesticks',
		price: 170
	},
	cannons: {
		name: 'Cannons',
		price: 700
	},
	carpets: {
		name: 'Carpets',
		price: 400,
		imported: true
	},
	catapults: {
		name: 'Catapults',
		price: 1200
	},
	cattle: {
		name: 'Cattle',
		price: 43
	},
	cider: {
		name: 'Cider',
		price: 45
	},
	clay: {
		name: 'Clay',
		price: 20
	},
	clothes: {
		name: 'Clothes',
		price: 104
	},
	coal: {
		name: 'Coal',
		price: 36
	},
	coffee: {
		name: 'Coffee',
		price: 300
	},
	coffeebeans: {
		name: 'Coffee Beans',
		price: 220
	},
	copper: {
		name: 'Copper',
		price: 43
	},
	dates: {
		name: 'Dates',
		price: 160,
		imported: true
	},
	donkeys: {
		name: 'Donkeys',
		price: 90,
		imported: true
	},
	fibers: {
		name: 'Fibers',
		price: 80
	},
	fish: {
		name: 'Fish',
		price: 16
	},
	flour: {
		name: 'Flour',
		price: 40
	},
	furcoats: {
		name: 'Fur coats',
		price: 122
	},
	furs: {
		name: 'Furs',
		price: 78
	},
	gems: {
		name: 'Gems',
		price: 460
	},
	glass: {
		name: 'Glass',
		price: 86
	},
	glasses: {
		name: 'Glasses',
		price: 140
	},
	gold: {
		name: 'Gold',
		price: 260
	},
	goldores: {
		name: 'Gold ores',
		price: 80
	},
	grapes: {
		name: 'Grapes',
		price: 35
	},
	gunpowder: {
		name: 'Gunpowder',
		price: 420
	},
	hemp: {
		name: 'Hemp',
		price: 46
	},
	herbs: {
		name: 'Herbs',
		price: 18
	},
	hides: {
		name: 'Hides',
		price: 25
	},
	indigo: {
		name: 'Indigo',
		price: 80
	},
	iron: {
		name: 'Iron',
		price: 82
	},
	ironores: {
		name: 'Iron ores',
		price: 42
	},
	jewelery: {
		name: 'Jewelery',
		price: 900
	},
	leather: {
		name: 'Leather',
		price: 60
	},
	marzipan: {
		name: 'Marzipan',
		price: 150
	},
	meat: {
		name: 'Meat',
		price: 30
	},
	milk: {
		name: 'Milk',
		price: 30
	},
	mosaic: {
		name: 'Mosaic',
		price: 200
	},
	oil: {
		name: 'Oil',
		price: 370,
		imported: true
	},
	paper: {
		name: 'Paper',
		price: 70
	},
	pearls: {
		name: 'Pearls',
		price: 450
	},
	perfume: {
		name: 'Perfume',
		price: 305
	},
	pottery: {
		name: 'Pottery',
		price: 55
	},
	provisions: {
		name: 'Provisions',
		price: 300
	},
	quartz: {
		name: 'Quartz',
		price: 18
	},
	robes: {
		name: 'Robes',
		price: 400
	},
	ropes: {
		name: 'Ropes',
		price: 42
	},
	roses: {
		name: 'Roses',
		price: 70
	},
	salt: {
		name: 'Salt',
		price: 20
	},
	silk: {
		name: 'Silk',
		price: 320
	},
	silver: {
		name: 'Silver',
		price: 300,
		imported: true
	},
	spices: {
		name: 'Spices',
		price: 285
	},
	spyglasses: {
		name: 'Spyglasses',
		price: 280,
		imported: true
	},
	statues: {
		name: 'Statues',
		price: 1200,
		imported: true
	},
	stones: {
		name: 'Stones',
		price: 16
	},
	sugar: {
		name: 'Sugar',
		price: 145
	},
	sugarcane: {
		name: 'Sugarcane',
		price: 120
	},
	sulphur: {
		name: 'Sulphur',
		price: 180
	},
	tools: {
		name: 'Tools',
		price: 35
	},
	wax: {
		name: 'Wax',
		price: 40
	},
	weapons: {
		name: 'Weapons',
		price: 220
	},
	wheat: {
		name: 'Wheat',
		price: 25
	},
	wine: {
		name: 'Wine',
		price: 95
	},
	wood: {
		name: 'Wood',
		price: 17
	},
	woodplanks: {
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
 * Resources that can be assigned to an army.
 *
 * @constant
 * @type {Array}
 */
civitas.ARMY_RESOURCES = [
	'cannons', 'catapults'
];

/**
 * List of all obtainable game achievements.
 *
 * @constant
 * @type {Array}
 */
civitas.ACHIEVEMENTS = [
	{
		description: 'Reach level 10.',
		name: 'Kiddo',
		conditions: {
			settlement_level: 10
		}
	}, {
		description: 'Reach level 20.',
		name: 'Teen',
		conditions: {
			settlement_level: 20
		}
	}, {
		description: 'Reach level 30.',
		name: 'On my own',
		conditions: {
			settlement_level: 30
		}
	}, {
		description: 'Reach level 40.',
		name: 'Fear me',
		conditions: {
			settlement_level: 40
		}
	}, {
		description: 'Gather maximum faith.',
		name: 'Jesus Christ',
		conditions: {
			resources: {
				faith: 1000
			}
		}
	}, {
		description: 'Gather maximum research.',
		name: 'Albert Einstein',
		conditions: {
			resources: {
				research: 1000
			}
		}
	}, {
		description: 'Gather 100M coins.',
		name: 'Rottschild',
		conditions: {
			resources: {
				coins: 100000000
			}
		}
	}, {
		description: 'Gather 500k coins.',
		name: 'Ba dum tss',
		conditions: {
			resources: {
				coins: 500000
			}
		}
	}, {
		description: 'Gather 100k coins.',
		name: 'Gatherer',
		conditions: {
			resources: {
				coins: 100000
			}
		}
	}, {
		description: 'Gather 1M coins.',
		name: 'Milionaire',
		conditions: {
			resources: {
				coins: 1000000
			}
		}
	}, {
		description: 'Gather 10M coins.',
		name: 'Rockefeller',
		conditions: {
			resources: {
				coins: 10000000
			}
		}
	}, {
		description: 'Gather 10k stones.',
		name: 'Stone Age',
		conditions: {
			resources: {
				stones: 10000
			}
		}
	}, {
		description: 'Gather 10k wood.',
		name: 'Woody the Woodpecker',
		conditions: {
			resources: {
				wood: 10000
			}
		}
	}, {
		description: 'Gather 10k meat.',
		name: 'Animal killer',
		conditions: {
			resources: {
				meat: 10000
			}
		}
	}, {
		description: 'Recruit 500 soldiers.',
		name: 'Warfiend',
		conditions: {
			soldiers: 500
		}
	}, {
		description: 'Recruit 100 soldiers.',
		name: 'Armed to the teeth',
		conditions: {
			soldiers: 100
		}
	}, {
		description: 'Recruit 1000 soldiers.',
		name: 'Warlord',
		conditions: {
			soldiers: 1000
		}
	}, {
		description: 'Recruit 10 ships.',
		name: 'Shipwrecked',
		conditions: {
			ships: 10
		}
	}, {
		description: 'Recruit 100 ships.',
		name: 'Captain Ahab',
		conditions: {
			ships: 100
		}
	}, {
		description: 'Gather 100 prestige.',
		name: 'Prestigious',
		conditions: {
			resources: {
				prestige: 100
			}
		}
	}, {
		description: 'Gather 500 prestige.',
		name: 'The God King',
		conditions: {
			resources: {
				prestige: 500
			}
		}
	}, {
		description: 'Gather 10 espionage.',
		name: 'You got Mossad-ed!',
		conditions: {
			resources: {
				espionage: 10
			}
		}
	}, {
		description: 'Gather 100 espionage.',
		name: 'You got Snowden-ed!',
		conditions: {
			resources: {
				espionage: 100
			}
		}
	}, {
		description: 'Gather 500 espionage.',
		name: 'I spy with my own eye',
		conditions: {
			resources: {
				espionage: 500
			}
		}
	}, {
		description: 'Gather 1000 espionage.',
		name: 'Anna Chapman',
		conditions: {
			resources: {
				espionage: 1000
			}
		}
	}, {
		description: 'Gather 10 research.',
		name: 'Initiate',
		conditions: {
			resources: {
				research: 10
			}
		}
	}, {
		description: 'Gather 100 research.',
		name: 'Researcher',
		conditions: {
			resources: {
				research: 100
			}
		}
	}, {
		description: 'Gather 500 research.',
		name: 'Searching',
		conditions: {
			resources: {
				research: 500
			}
		}
	}, {
		description: 'Gather 500 faith.',
		name: 'Disciple',
		conditions: {
			resources: {
				faith: 500
			}
		}
	}, {
		description: 'Build a Castle.',
		name: 'Castlevania',
		conditions: {
			buildings: {
				castle: 1
			}
		}
	}, {
		description: 'Build a Church.',
		name: 'Winston Churchill, got it?',
		conditions: {
			buildings: {
				church: 1
			}
		}
	}, {
		description: 'Build an Academy.',
		name: 'Academician',
		conditions: {
			buildings: {
				academy: 1
			}
		}
	}, {
		description: 'Build each of the mines (Iron, Gold, Copper and Salt).',
		name: 'All mine!',
		conditions: {
			buildings: {
				iconmine: 1,
				goldmine: 1,
				coppermine: 1,
				saltmine: 1
			}
		}
	}, {
		description: 'Fill out all your storage space.',
		name: 'All filled up',
		conditions: {
			storage: 0
		}
	}, {
		description: 'Build 10 catapults.',
		name: 'Cat-a-pulter',
		conditions: {
			resources: {
				catapults: 10
			}
		}
	}, {
		description: 'Build an Embassy.',
		name: 'Gandhi',
		conditions: {
			buildings: {
				embassy: 1
			}
		}
	}, {
		description: 'Get 100 achievements.',
		name: 'Achivement? Yes please.',
		conditions: {
			achievements: 100
		}
	}, {
		description: 'Recruit a mercenary army.',
		name: 'Merc',
		conditions: {
			mercenary: 1
		}
	}, {
		description: 'Reach 10 milion in population.',
		name: 'Megalopolis',
		conditions: {
			population: 10000000
		}
	}, {
		description: 'Upgrade Academy to level 3.',
		name: 'Too much research',
		conditions: {
			buildings: {
				academy: 3
			}
		}
	}, {
		description: 'Upgrade Castle to level 3.',
		name: 'Goldilocks',
		conditions: {
			buildings: {
				castle: 3
			}
		}
	}, {
		description: 'Upgrade Church to level 3.',
		name: 'Cathedral',
		conditions: {
			buildings: {
				church: 3
			}
		}
	}, {
		description: 'Build a Tournir Area.',
		name: 'Richard Lionheart',
		conditions: {
			buildings: {
				tournir: 1
			}
		}
	}, {
		description: 'Send a caravan.',
		name: 'Donkey Lord',
		conditions: {
			diplomacy: {
				caravan: 1
			}
		}
	}, {
		description: 'Send a spy.',
		name: 'Bond. James Bond.',
		conditions: {
			diplomacy: {
				spy: 1
			}
		}
	}, {
		description: 'Send an army.',
		name: 'Warrior',
		conditions: {
			diplomacy: {
				army: 1
			}
		}
	}, {
		description: 'Declare war to another settlement.',
		name: 'Warlord',
		conditions: {
			diplomacy: {
				war: 1
			}
		}
	}, {
		description: 'Propose to another settlement to join you.',
		name: 'The One to Rule Them All',
		conditions: {
			diplomacy: {
				join: 1
			}
		}
	}, {
		description: 'Propose a pact to another settlement.',
		name: 'The Friendly',
		conditions: {
			diplomacy: {
				pact: 1
			}
		}
	}, {
		description: 'Propose an alliance to another settlement.',
		name: 'The Pacifist',
		conditions: {
			diplomacy: {
				alliance: 1
			}
		}
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

	window_about_section: function() {
		var out = '<a href="#" class="do-about button">' + civitas.l('About') + '</a>' +
			'<div class="about-game">' +
				'<a class="github" target="_blank" href="https://github.com/sizeofcat/civitas"><img class="tips" title="' + civitas.l('Visit the project page on GitHub') + '" src="../images/ui/github.png" /></a>' +
				'<p>' + civitas.l('Civitas is written by <a target="_blank" href="https://sizeof.cat">sizeof(cat)</a>.') + '</p>' +
				'<p>' + civitas.l('Big thanks to') + ':</p>' +
				'<ul>' +
					'<li><a target="_blank" href="https://soundcloud.com/shantifax">Shantifax</a> for the music (Glandula Pinealis).</li>' +
					'<li><a target="_blank" href="https://brendaneich.com/">Brendan Eich</a> for Javascript.</li>' +
					'<li><a target="_blank" href="http://bluebyte.com">Blue Byte</a> for Anno 1404.</li>' +
				'</ul>' +
			'</div>';
		return out;
	},

	generic_panel_template: function(title) {
		if (typeof title === 'undefined') {
			title = '';
		}
		var out = '<div id="panel-{ID}" class="panel">' +
			'<header>' + title +
				'<a class="tips close" title="' + civitas.l('Close') + '"></a>' +
			'</header>' +
			'<section></section>' +
		'</div>';
		return out;
	},

	building_panel_template: function(title) {
		if (typeof title === 'undefined') {
			title = '';
		}
		var out = '<div id="panel-{ID}" class="panel">' +
			'<header>' + title +
				'<a class="tips close" title="' + civitas.l('Close') + '"></a>' +
			'</header>' +
			'<section></section>' +
			'<footer>' +
				'<a class="tips demolish" title="' + civitas.l('Demolish this building') + '"></a>' +
				'<a class="tips pause start"></a>' +
				'<a class="tips upgrade" title="' + civitas.l('Upgrade building') + '"></a>' +
			'</footer>' +
		'</div>';
		return out;
	},

	building_panel: function (params, level) {
		var out = '<p>' + params.description + '</p>' +
			'<dl>' +
				civitas.ui.level_panel(params.level, level) +
				civitas.ui.cost_panel(params.cost, level, params.levels) +
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

	level_panel: function (level, new_level) {
		var out = '<dt>' + civitas.l('Level') + '</dt>' +
			'<dd>' + new_level + '</dd>';
		return out;
	},

	cost_panel: function (costs, level, levels) {
		var out = '';
		if (typeof costs !== 'undefined') {
			out += '<dt>' + civitas.l('Cost') + '</dt>';
			for (var item in costs) {
				out += '<dd>' + civitas.utils.nice_numbers(costs[item]) + civitas.ui.resource_small_img(item) + (typeof levels !== 'undefined' && level < levels ? ' / ' + civitas.utils.nice_numbers(costs[item] * (level + 1)) + civitas.ui.resource_small_img(item) : '') + '</dd>';
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
		return '<div class="progress ' + progress_type + '">' +
			'<div class="bar' + _e + '" style="width:' + value + '%">' +
				'<p>' + (typeof show_value !== 'undefined' ? show_value : value) + '</p>' +
			'</div>' +
		'</div>';
	},

	navy_img: function (name) {
		return '<img class="tips" title="' + civitas.SHIPS[name].name + '" src="' + civitas.ASSETS_URL + 'images/armies/' + name.toLowerCase().replace(/ /g,"_") + '_small.png" />';
	},

	army_img: function (name) {
		return '<img class="tips" title="' + civitas.SOLDIERS[name].name + '" src="' + civitas.ASSETS_URL + 'images/armies/' + name.toLowerCase().replace(/ /g,"_") + '_small.png" />';
	},

	army_list: function (army, no_margin) {
		var out = '<dl' + ((typeof no_margin !== 'undefined' && no_margin === true) ? ' class="nomg"' : '') + '>';
		var total = 0;
		for (var soldier in army.army) {
			if (army.army[soldier] > 0) {
				out += '<dt>' + army.army[soldier] + '</dt>' +
						'<dd>' + civitas.ui.army_img(soldier) + '</dd>';
				total += army.army[soldier];
			}
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
				if (trade[item] > 0) {
					out += '<dt>' + trade[item] + '</dt>' +
						'<dd>' + civitas.ui.resource_small_img(item) + '</dd>';
				}
			}
			out += '</dl>';
		}
		return out;
	},

	navy_list: function (army, no_margin) {
		var out = '<dl' + ((typeof no_margin !== 'undefined' && no_margin === true) ? ' class="nomg"' : '') + '>';
		var total = 0;
		for (var ship in army.navy) {
			if (army.navy[ship] > 0) {
				out += '<dt>' + army.navy[ship] + '</dt>' +
						'<dd>' + civitas.ui.navy_img(ship) + '</dd>';
				total += army.navy[ship];
			}
		}
		out += '<dt>' + (typeof army.total !== 'undefined' ? army.total : total) + '</dt><dd>' + civitas.l('Total') + '</dd>' +
				'</dl>';
		return out;
	},

	building_element: function (params) {
		var building_image = params.type;
		var description = '<br /><span class="smalldesc">' + params.data.description + '</span>';
		if (params.type.slice(0, 5) === 'house') {
			building_image = params.type.slice(0, 5);
		}
		var image = (typeof params.data.visible_upgrades === 'undefined' || params.data.visible_upgrades === false) ? building_image + '1' : building_image + params.data.level;
		return '<div data-type="' + params.type + '" data-level="' + params.data.level + '" ' +
			'style="background:transparent url(' + civitas.ASSETS_URL + 'images/buildings/' + image + '.png) no-repeat;left:' + params.data.position.x + 'px;top:' + params.data.position.y + 'px" ' +
			'title=\'' + params.data.name + '\' ' + 'id="building-' + params.data.handle + '"' +
			'class="tips building' + (params.data.large === true ? ' large' : '') + (params.data.extralarge === true ? ' extralarge' : '') + '"></div>';
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
			out += '<li><a href="#tab-' + data[i].toLowerCase().replace(/ /g, "-") + '">' + data[i] + '</a></li>';
		}
		out += '</ul>';
		for (var i = 0; i < data.length; i++) {
			out += '<div id="tab-' + data[i].toLowerCase().replace(/ /g, "-") + '">' +
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
		if (typeof requires.buildings !== 'undefined' || typeof requires.settlement_level !== 'undefined') {
			out += '<dt>' + civitas.l('Requires') + '</dt>';
			out += '<dd>';
			if (typeof requires.buildings !== 'undefined') {
				for (var item in requires.buildings) {
					var b = civitas.BUILDINGS[civitas.BUILDINGS.findIndexM(item)];
					out += b.name + ' level ' + requires.buildings[item] + '<br />'
				}
			}
			if (typeof requires.settlement_level !== 'undefined') {
				out += civitas.l('City level') + ' ' + requires.settlement_level;
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
	
	/**
	 * Settlement properties.
	 *
	 * @private
	 * @type {Object}
	 */
	this.properties = {
		id: null,
		type: null,
		name: null,
		storage: null,
		population: null,
		climate: null,
		level: null,
		icon: null,
		population: null,
		ruler: null,
		religion: null,
		player: null
	};

	/**
	 * Diplomacy status with all the settlements in the world.
	 *
	 * @private
	 * @type {Object}
	 */
	this._status = {};

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
	 * Soldiers headquartered in this settlement.
	 * 
	 * @private
	 * @type {Number}
	 */
	this.army = {};

	/**
	 * Ships built in this settlement.
	 * 
	 * @private
	 * @type {Number}
	 */
	this.navy = {};

	/**
	 * Mercenary armies available for this settlement.
	 * 
	 * @private
	 * @type {Number}
	 */
	this._mercenary = [];
	
	/**
	 * The resources of this settlement.
	 * 
	 * @private
	 * @type {Object}
	 */
	this.resources = {};

	/**
	 * The settlement heroes.
	 *
	 * @private
	 * @type {Array}
	 */
	this._heroes = [];

	/**
	 * List of the imports and exports of this settlement.
	 * 
	 * @private
	 * @type {Object}
	 */
	this.trades = null;

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {civitas.objects.settlement}
	 * @param {Object} params
	 */
	this.__init = function(params) {
		this.core = params.core;
		this.properties.id = params.properties.id;
		this.properties.name = params.properties.name;
		this.properties.player = (typeof params.properties.player !== 'undefined') ? params.properties.player : false;
		this.properties.level = (typeof params.properties.level !== 'undefined') ? params.properties.level : 1;
		this.properties.climate = (typeof params.properties.climate !== 'undefined') ? params.properties.climate : civitas.CLIMATE_TEMPERATE;
		this.properties.religion = (typeof params.properties.religion !== 'undefined') ? params.properties.religion : civitas.RELIGION_NONE;
		this.properties.ruler = params.properties.ruler;
		this.properties.icon = (typeof params.properties.icon !== 'undefined') ? params.properties.icon : 1;
		this.properties.population = (typeof params.properties.population !== 'undefined') ? params.properties.population : this.properties.level * civitas.POPULATION_PER_LEVEL;
		this.properties.type = (typeof params.properties.type !== 'undefined') ? params.properties.type : civitas.CITY;
		this.army = this._setup_army(params.army);
		this.navy = this._setup_navy(params.navy);
		this._mercenary = (typeof params.mercenary !== 'undefined') ? params.mercenary : [];
		this._status = (typeof params.status !== 'undefined') ? params.status : {};
		this._heroes = (typeof params.heroes !== 'undefined') ? params.heroes : [];
		this.resources = this._build_resources(params.resources);
		if (typeof params.trades !== 'undefined') {
			this.trades = params.trades;
		} else {
			this.reset_trades();
		}
		if (this.is_player() === false) {
			this.resources.fame = civitas.LEVELS[this.level()];
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
			properties: this.get_properties(),
			trades: this.get_trades(),
			resources: this.get_resources(),
			army: this.get_army_total().army,
			navy: this.get_navy_total().navy,
			buildings: this.export_buildings(),
			mercenary: this.mercenary(),
			heroes: this.heroes()
		};
		if (this.is_player()) {
			data.status = this.status();
		}
		return data;
	};

	/**
	 * Get the settlement properties.
	 *
	 * @public
	 * @returns {Object}
	 */
	this.get_properties = function() {
		return this.properties;
	};

	/**
	 * Get/set the name of this settlement.
	 * 
	 * @public
	 * @param {String} value
	 * @returns {String}
	 */
	this.name = function(value) {
		if (typeof value !== 'undefined') {
			this.properties.name = value;
		}
		return this.properties.name;
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
		var level = this.level();
		this.fame(civitas.LEVELS[level]);
		this.properties.level++;
		this.properties.population = this.properties.level * civitas.POPULATION_PER_LEVEL;
		if (this.is_player()) {
			this.get_core().refresh_panels();
			$('.citylevel').html(this.properties.level);
			this.get_core().notify('The city of ' + this.name() + ' is now level ' + this.properties.level + '.');
		}
		return this;
	};

	/**
	 * Rename this settlement.
	 * 
	 * @public
	 * @param {String} value
	 * @returns {String}
	 */
	this.rename = function(value) {
		return this.name(value);
	};

	/**
	 * Get the rank of this settlement
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_rank = function() {
		var level = this.level();
		var half_level = Math.round(level / 2);
		return {
			fame: this.fame(),
			prestige: this.prestige(),
			espionage: this.espionage(),
			army: this.get_army_total().total,
			navy: this.get_navy_total().total,
			score: Math.floor((
				((this.fame() > 0 ? this.fame() : 1) / half_level)
				+ (this.prestige() / half_level)
				+ (this.espionage() / half_level)
				+ ((this.get_army_total().total > 0 ? this.get_army_total().total : 1) / half_level)
				+ ((this.get_navy_total().total > 0 ? this.get_navy_total().total : 1) / (half_level / 2))
			) / half_level)
		};
	};
	
	/**
	 * Ask the City Council for tips.
	 * 
	 * @public
	 * @returns {Array}
	 */
	this.city_council = function() {
		var resources = this.get_resources();
		var storage = this.storage();
		var advices = [];
		var army = this.get_army_total();
		var navy = this.get_navy_total();
		if (army.total === 0) {
			advices.push('You have no army, this is an open invitation for attack.');
		}
		if (army.total < 10 && army.total > 0) {
			advices.push('You have a small army, try to recruit some more soldiers.');
		}
		if (navy.total === 0) {
			advices.push('You have no navy, this is an open invitation for attack.');
		}
		if (navy.total < 3 && navy.total > 0) {
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
	 * Get/set the ruler object of this settlement.
	 * 
	 * @public
	 * @param {Object} value
	 * @returns {Object}
	 */
	this.ruler = function(value) {
		if (typeof value !== 'undefined') {
			this.properties.ruler = value;
		}
		return this.properties.ruler;
	};

	/**
	 * Get/set the level of this settlement.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.level = function(value) {
		if (typeof value !== 'undefined') {
			this.properties.level = value;
		}
		return this.properties.level;
	};

	/**
	 * Get/set the personality of the ruler of this settlement.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Object}
	 */
	this.personality = function(value) {
		if (typeof value !== 'undefined') {
			this.properties.ruler.personality = value;
		}
		return {
			id: this.properties.ruler.personality,
			name: civitas.PERSONALITIES[this.properties.ruler.personality].capitalize()
		};
	};

	/**
	 * Get/set the climate of the area of this settlement.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Object}
	 */
	this.climate = function(value) {
		if (typeof value !== 'undefined') {
			this.properties.climate = value;
		}
		return {
			id: this.properties.climate,
			name: civitas.CLIMATES[this.properties.climate].capitalize()
		};
	};
	
	/**
	 * Get/set the nationality of this settlement.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Object}
	 */
	this.nationality = function(value) {
		if (typeof value !== 'undefined') {
			this.properties.nationality = value;
		}
		return {
			id: this.properties.ruler.nationality,
			name: civitas.NATIONS[this.properties.ruler.nationality].capitalize()
		};
	};

	/**
	 * Get/set the icon of this settlement.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.icon = function(value) {
		if (typeof value !== 'undefined') {
			this.properties.icon = value;
		}
		return this.properties.icon;
	};

	/**
	 * Get/set the id of this settlement.
	 *
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.id = function(value) {
		if (typeof value !== 'undefined') {
			this.properties.id = id;
		}
		return this.properties.id;
	};

	/**
	 * Check if this settlement is a player settlement.
	 *
	 * @public
	 * @returns {Boolean}
	 */
	this.is_player = function() {
		return this.properties.player;
	};

	/**
	 * Return the type of this settlement.
	 *
	 * @public
	 * @returns {Number}
	 */
	this.get_type = function() {
		return this.properties.type;
	};

	/**
	 * Return the population of this settlement.
	 *
	 * @public
	 * @returns {Number}
	 */
	this.population = function() {
		return this.properties.population;
	};

	/**
	 * Check if this settlement is a city.
	 *
	 * @public
	 * @returns {Boolean}
	 */
	this.is_city = function() {
		return this.properties.type === civitas.CITY;
	};

	/**
	 * Check if this settlement is a village.
	 *
	 * @public
	 * @returns {Boolean}
	 */
	this.is_village = function() {
		return this.properties.type === civitas.VILLAGE;
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
		if (typeof settlement === 'object' && this.nationality().id === settlement.nationality().id) {
			return true;
		} else if (typeof settlement === 'number' || typeof settlement === 'string') {
			settlement = this.get_core().get_settlement(settlement);
			if (this.nationality().id === settlement.nationality().id) {
				return true;
			}
		}
		return false;
	};

	/**
	 * Get/set the heroes of the settlement.
	 *
	 * @public
	 * @returns {Object}
	 */
	this.heroes = function(value) {
		if (typeof value !== 'undefined') {
			this._heroes = value;
		}
		return this._heroes;
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
	return this.research(this.research() + amount);
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
	return this.research(this.research() - amount);
};

/**
 * Reset the research of this settlement to 1.
 * 
 * @returns {Number}
 * @public
 */
civitas.objects.settlement.prototype.reset_research = function() {
	return this.research(1);
};

/**
 * Get/set the research of this settlement.
 * 
 * @public
 * @returns {Number}
 * @param {Number} value
 */
civitas.objects.settlement.prototype.research = function(value) {
	if (typeof value !== 'undefined') {
		if (value < 1 || this.resources.research < 1) {
			this.resources.research = 1;
		} else {
			this.resources.research = value;
		}
		if (this.resources.research >= civitas.MAX_RESEARCH_VALUE) {
			this.resources.research = civitas.MAX_RESEARCH_VALUE;
		}
	}
	return this.resources.research;
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
	return this.fame(this.fame() + amount);
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
	return this.fame(this.fame() - amount);
};

/**
 * Get/set this settlement's fame.
 * 
 * @public
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.settlement.prototype.fame = function(value) {
	if (typeof value !== 'undefined') {
		if (this.resources.fame >= civitas.LEVELS[civitas.MAX_SETTLEMENT_LEVEL - 1]) {
			this.resources.fame = civitas.LEVELS[civitas.MAX_SETTLEMENT_LEVEL - 1];
		} else if (value < 0 || this.resources.fame < 0) {
			this.resources.fame = 0;
		} else {
			this.resources.fame = value;
		}
		return value;
	} else {
		return this.resources.fame;
	}
};

/**
 * Reset the fame of this settlement to 1.
 * 
 * @returns {Number}
 * @public
 */
civitas.objects.settlement.prototype.reset_fame = function() {
	return this.fame(0);
};

/**
 * Change religion of your settlement.
 *
 * @public
 * @param {Number|String} id
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.change_religion = function(id) {
	if (this.faith() !== civitas.MAX_FAITH_VALUE && id !== 0) {
		if (this.is_player()) {
			this.get_core().error('You don`t have enough faith to switch religions.');
		}
		return false;
	}
	if ((typeof id === 'number' && this.religion().id === id) || (typeof id === 'string' && this.religion().name === id)) {
		if (this.is_player()) {
			this.get_core().error('You cannot switch religion to your already existing one.');
		}
		return false;
	}
	if (this.religion(id)) {
		this.reset_faith();
		this.refresh_heroes();
		if (this.is_player()) {
			this.get_core().notify('Your settlement`s new religion is <strong>' + this.religion().name + '</strong>');
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
 * Get/set the religion of this settlement.
 * 
 * @public
 * @returns {Object}
 */
civitas.objects.settlement.prototype.religion = function(value) {
	if (typeof value !== 'undefined') {
		if (typeof value === 'number') {
			this.properties.religion = value;
			return true;
		} else if (typeof value === 'string') {
			var pos = $.inArray(value, civitas.RELIGIONS);
			if (pos !== -1) {
				this.properties.religion = pos;
				return true;
			}
		}
	}
	return {
		id: this.properties.religion,
		name: civitas.RELIGIONS[this.properties.religion].capitalize()
	};
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
	return this.faith(this.faith() + value);
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
	return this.faith(this.faith() - value);
};

/**
 * Reset the faith of this settlement to 1.
 * 
 * @returns {Number}
 * @public
 */
civitas.objects.settlement.prototype.reset_faith = function() {
	return this.faith(1);
};

/**
 * Get/set the faith of this settlement.
 * 
 * @public
 * @returns {Number}
 * @param {Number} value
 */
civitas.objects.settlement.prototype.faith = function(value) {
	if (typeof value !== 'undefined') {
		if (value < 1 || this.resources.faith < 1) {
			this.resources.faith = 1;
		} else {
			this.resources.faith = value;
		}
		if (this.resources.faith >= civitas.MAX_FAITH_VALUE) {
			this.resources.faith = civitas.MAX_FAITH_VALUE;
		}
	}
	return this.resources.faith;
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
	return this.espionage(this.espionage() + value);
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
	return this.espionage(this.espionage() - value);
};

/**
 * Reset the espionage of this settlement to 1.
 * 
 * @returns {Number}
 * @public
 */
civitas.objects.settlement.prototype.reset_espionage = function() {
	return this.espionage(1);
};

/**
 * Get/set the espionage of this settlement.
 * 
 * @public
 * @returns {Number}
 * @param {Number} value
 */
civitas.objects.settlement.prototype.espionage = function(value) {
	if (typeof value !== 'undefined') {
		if (value < 1 || this.resources.espionage < 1) {
			this.resources.espionage = 1;
		} else {
			this.resources.espionage = value;
		}
		if (this.resources.espionage >= civitas.MAX_ESPIONAGE_VALUE) {
			this.resources.espionage = civitas.MAX_ESPIONAGE_VALUE;
		}
	}
	return this.resources.espionage;
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
	return this.prestige(this.prestige() + amount);
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
	return this.prestige(this.prestige() - amount);
};

/**
 * Reset the prestige of this settlement to 1.
 * 
 * @returns {Number}
 * @public
 */
civitas.objects.settlement.prototype.reset_prestige = function() {
	return this.prestige(1);
};

/**
 * Get/set the prestige of this settlement.
 * 
 * @public
 * @returns {Number}
 * @param {Number} value
 */
civitas.objects.settlement.prototype.prestige = function(value) {
	if (typeof value !== 'undefined') {
		if (value < 1 || this.resources.prestige < 1) {
			this.resources.prestige = 1;
		} else {
			this.resources.prestige = value;
		}
		if (this.resources.prestige >= civitas.MAX_PRESTIGE_VALUE) {
			this.resources.prestige = civitas.MAX_PRESTIGE_VALUE;
		}
	}
	return this.resources.prestige;
};

/**
 * Increase this settlement's coins by the specified amount.
 * 
 * @public
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.settlement.prototype.inc_coins = function(value) {
	return this.coins(this.coins() + value);
};
	
/**
 * Decrease this settlement's coins by the specified amount.
 * 
 * @public
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.settlement.prototype.dec_coins = function(value) {
	if (!this.has_coins(value)) {
		return false;
	}
	this.coins(this.coins() - value);
	return true;
};
	
/**
 * Get/set the coins of the settlement.
 * 
 * @public
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.settlement.prototype.coins = function(value) {
	if (typeof value !== 'undefined') {
		this.resources.coins = value;
	}
	return this.resources.coins;
};
		
/**
 * Remove a specific amount of a resource silently from this settlement's storage.
 * 
 * @public
 * @param {String} resource
 * @param {Number} amount
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.remove_resource_silent = function(resource, amount) {
	var resources = this.get_resources();
	resources[resource] = resources[resource] - amount;
	if (resources[resource] < 0) {
		resources[resource] = 0;
	}
	return true;
};
	
/**
 * Remove a specific amount of a resource from this settlement's storage.
 * 
 * @public
 * @param {String} resource
 * @param {Number} amount
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.remove_resource = function(resource, amount) {
	var resources = this.get_resources();
	if (!this.has_resources(resource, amount)) {
		return false;
	}
	resources[resource] = resources[resource] - amount;
	return true;
};
	
/**
 * Remove resources from this settlement's storage.
 * 
 * @public
 * @param {Object} resources
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.remove_resources = function(resources) {
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
 * Check if the settlement has a specific storage space.
 * 
 * @public
 * @param {Number} quantity
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.has_storage_space_for = function(quantity) {
	var storage = this.storage();
	if (!this.has_storage_space(true)) {
		return false;
	}
	if ((storage.occupied + quantity) > storage.all) {
		//this.get_core().error('There is no storage space in your city to accomodate the new goods.');
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
civitas.objects.settlement.prototype.has_storage_space = function(alert) {
	var storage = this.storage();
	if (storage.occupied >= storage.all) {
		if (alert === true) {
			if (this.is_player()) {
				this.get_core().error('There is no storage space in your city.');
			}
		}
		return false;
	}
	return true;
};
	
/**
 * Get/set the storage space of this settlement.
 * 
 * @public
 * @returns {Object}
 */
civitas.objects.settlement.prototype.storage = function(value) {
	if (typeof value !== 'undefined') {
		this.properties.storage = value;
	}
	var storage = 0;
	for (var item in this.get_resources()) {
		if ($.inArray(item, civitas.NON_RESOURCES) === -1) {
			storage += this.get_resources()[item];
		}
	}
	return {
		occupied: storage,
		all: this.properties.storage
	};
};
	
/**
 * Adjust the resources according to the settlement owner.
 *
 * @private
 * @returns {Object}
 */
civitas.objects.settlement.prototype._build_resources = function(_resources) {
	var difficulty = this.get_core().get_difficulty();
	var _trades = {};
	if (!this.is_player()) {
		if (this.is_city() && typeof civitas.SETTLEMENTS[this.id()] !== 'undefined') {
			_trades = civitas.SETTLEMENTS[this.id()].trades.exports;
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
		if (typeof _resources === 'undefined') {
			_resources = civitas.START_RESOURCES[difficulty - 1];
		}
		for (var item in civitas.RESOURCES) {
			if (typeof _resources[item] === 'undefined') {
				_resources[item] = 0;
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
civitas.objects.settlement.prototype.add_to_storage = function(item, amount) {
	if (!civitas.utils.resource_exists(item)) {
		if (this.is_player()) {
			this.get_core().error('The resource you specified does not exist.');
		}
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
 * @param {Boolean} alert
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.has_coins = function(coins, alert) {
	if (this.coins() - coins < 0) {
		if (alert !== false) {
			if (this.is_player()) {
				this.get_core().error(this.name() + ' doesn`t have enough ' + civitas.utils.get_resource_name('coins') + '.');
			}
		}
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
civitas.objects.settlement.prototype.has_resources = function(resource, amount) {
	if (!civitas.utils.resource_exists(resource)) {
		if (this.is_player()) {
			this.get_core().error('The resource you specified does not exist.');
		}
		return false;
	}
	var res = this.get_resources();
	if ((res[resource] - amount) < 0) {
		if (this.is_player()) {
			this.get_core().error(this.name() + ' does not have enough ' + civitas.utils.get_resource_name(resource) + '.');
		}
		return false;
	}
	return true;
};

/**
 * Get the resources available in this settlement.
 * 
 * @public
 * @returns {Object}
 */
civitas.objects.settlement.prototype.get_resources = function() {
	return this.resources;
};
	
/**
 * Set the resources of the settlement.
 * 
 * @public
 * @param {Object} value
 * @returns {civitas.objects.settlement}
 */
civitas.objects.settlement.prototype.set_resources = function(value) {
	this.resources = value;
	return this;
};

/**
 * Get the list of settlement buildings, for export reasons.
 *
 * @public
 * @returns {Array}
 */
civitas.objects.settlement.prototype.export_buildings = function() {
	var buildings_list = [];
	for (var i = 0; i < this.buildings.length; i++) {
		buildings_list.push({
			handle: this.buildings[i].get_handle(),
			level: this.buildings[i].get_level(),
			stopped: this.buildings[i].is_stopped()
		});
	}
	return buildings_list;
};

/**
 * Return a pointer to the specified building in this settlement by the specified
 * handle.
 * 
 * @public
 * @param {String} handle
 * @returns {civitas.objects.building|Boolean}
 */
civitas.objects.settlement.prototype.get_building = function(handle) {
	var buildings = this.get_buildings();
	if (typeof handle === 'string') {
		for (var i = 0; i < buildings.length; i++) {
			if (typeof buildings[i] !== 'undefined') {
				if (buildings[i].get_type() === handle) {
					return buildings[i];
				}
			}
		}
	}
	return false;
};

/**
 * Internal method for creating a building.
 *
 * @private
 * @param {String|Object} building
 * @param {Boolean} hidden
 * returns {Boolean}
 */
civitas.objects.settlement.prototype._create_building = function(building, hidden) {
	hidden = (typeof hidden !== 'undefined') && hidden === true ? true : false;
	var building_data = false;
	var handle = typeof building.handle !== 'undefined' ? building.handle : building;
	var level = typeof building.level !== 'undefined' ? building.level : 1;
	var stopped = typeof building.stopped !== 'undefined' ? building.stopped : false;
	if (building_data = this.get_building_data(handle)) {
		if (level > 1) {
			building_data.level = level;
		}
		var _building = new civitas.objects.building({
			settlement: this,
			type: handle,
			data: building_data,
			hidden: hidden,
			stopped: stopped
		});
		this.buildings.push(_building);
		return true;
	}
	return false;
};

/**
 * Internal function for building the specified buildings, bypassing
 * the requirements.
 * 
 * @public
 * @param {String|Object} building_type
 * @param {Boolean} hidden
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype._create_buildings = function(building_type, hidden) {
	if (typeof building_type === 'object') {
		for (var i = 0; i < building_type.length; i++) {
			this._create_building(building_type[i], hidden);
		}
		return true;
	} else {
		this._create_building(building_type, hidden);
		return true;
	}
	return false;
};

/**
 * Get the building data.
 *
 * @public
 * @param {String} handle
 * @returns {Object|Boolean}
 */
civitas.objects.settlement.prototype.get_building_data = function(handle) {
	var id = civitas.BUILDINGS.findIndexM(handle);
	if (id !== false) {
		return civitas.BUILDINGS[id];
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
civitas.objects.settlement.prototype.build = function(building_type) {
	var building_data = false;
	if (building_data = this.get_building_data(building_type)) {
		if ((typeof building_data.requires.settlement_level !== 'undefined') && (this.properties.level < building_data.requires.settlement_level)) {
			if (this.is_player()) {
				this.get_core().error('Your city level is too low to construct this building.');
			}
			return false;
		}
		if (typeof building_data.requires.buildings !== 'undefined') {
			var required = building_data.requires.buildings;
			for (var item in required) {
				if (!this.is_building_built(item, required[item])) {
					var _z = civitas.BUILDINGS.findIndexM(item);
					_z = civitas.BUILDINGS[_z];
					if (this.is_player()) {
						this.get_core().error('You don`t have the required level ' + required[item] + ' ' + _z.name + '.');
					}
					return false;
				}
			}
		}
		for (var item in building_data.cost) {
			if ((this.get_resources()[item] - building_data.cost[item]) < 0) {
				if (this.is_player()) {
					this.get_core().error('You don`t have enough ' + item + ' to construct this building.');
				}
				return false;
			}
		}
		for (var item in building_data.cost) {
			if ((this.get_resources()[item] - building_data.cost[item]) >= 0) {
				this.get_resources()[item] = this.get_resources()[item] - building_data.cost[item];
			}
		}
		var _building = new civitas.objects.building({
			settlement: this,
			type: building_type,
			data: building_data
		});
		this.buildings.push(_building);
		this.raise_prestige();
		if (this.is_player()) {
			this.get_core().save_and_refresh();
			this.get_core().notify('New building constructed: ' + _building.get_name());
			$('.tips').tipsy({
				gravity: $.fn.tipsy.autoNS,
				html: true
			});
		}
		return _building;
	}
	return false;
};

/**
 * Check if the specified building is already built.
 * 
 * @public
 * @param {String} handle
 * @param {Number} level
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.is_building_built = function(handle, level) {
	if (typeof level === 'undefined') {
		level = 1;
	}
	var buildings = this.get_buildings();
	for (var i = 0; i < buildings.length; i++) {
		if (typeof buildings[i] !== 'undefined') {
			if (buildings[i].type === handle && buildings[i].level >= level) {
				return true;
			}
		}
	}
	return false;
};

/**
 * Get the list of all the buildings in this settlement.
 * 
 * @public
 * @returns {Array}
 */
civitas.objects.settlement.prototype.get_buildings = function() {
	return this.buildings;
};

/**
 * Internal method for the initial setup of the settlement's army.
 *
 * @private
 * @param {Object} params
 * @returns {Object}
 */
civitas.objects.settlement.prototype._setup_army = function(params) {
	var army = {};
	for (var item in civitas.SOLDIERS) {
		if (typeof params !== 'undefined' && typeof params[item] !== 'undefined') {
			army[item] = params[item];
		} else {
			army[item] = 0;
		}
	}
	return army;
};

/**
 * Internal method for the initial setup of the settlement's navy.
 *
 * @private
 * @param {Object} params
 * @returns {Object}
 */
civitas.objects.settlement.prototype._setup_navy = function(params) {
	var navy = {};
	for (var item in civitas.SHIPS) {
		if (typeof params !== 'undefined' && typeof params[item] !== 'undefined') {
			navy[item] = params[item];
		} else {
			navy[item] = 0;
		}
	}
	return navy;
};

/**
 * Get the list of settlement mercenary armies.
 *
 * @public
 * @param {Array} value
 * @returns {Array}
 */
civitas.objects.settlement.prototype.mercenary = function(value) {
	if (typeof value !== 'undefined') {
		this._mercenary = value;
	}
	return this._mercenary;
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
	return this.is_building_built('camp');
};

/**
 * Recruit a soldier for the settlement's army.
 * 
 * @public
 * @param {String} name
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.recruit_mercenary_army = function(name) {
	for (var i = 0; i < civitas.MERCENARIES.length; i++) {
		if (name === civitas.MERCENARIES[i].handle) {
			var price = civitas.MERCENARIES[i].cost;
			if (this.dec_coins(price) === false) {
				return false;
			}
			var army = {
				id: i,
				handle: name,
				army: {}
			};
			for (var item in civitas.SOLDIERS) {
				if (typeof civitas.MERCENARIES[i].army[item] !== 'undefined') {
					army.army[item] = civitas.MERCENARIES[i].army[item];
				} else {
					army.army[item] = 0;
				}
			}
			this._mercenary.push(army);
			if (this.is_player()) {
				this.get_core().notify('The mercenaries of the ' + civitas.MERCENARIES[i].name + ' are now available for skirmish missions for the duration of one year.', 'Mercenaries recruited.');
			}
			this.get_core().save_and_refresh();
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
	if (typeof this.navy[ship_name] !== 'undefined') {
		this.navy[ship_name] = this.navy[ship_name] + 1;
	} else {
		this.navy[ship_name] = 1;
	}
	if (this.is_player()) {
		this.get_core().save_and_refresh();
		this.get_core().notify('A new ' + ship_name + ' ship has been constructed.', 'New ship');
	}
	return true;
};

/**
 * Recruit a soldier for the settlement's army.
 * 
 * @public
 * @param {String} soldier_name
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.recruit_soldier = function(soldier_name) {
	if (typeof this.army[soldier_name] !== 'undefined') {
		this.army[soldier_name] = this.army[soldier_name] + 1;
	} else {
		this.army[soldier_name] = 1;
	}
	if (this.is_player()) {
		this.get_core().save_and_refresh();
		this.get_core().notify('A new ' + soldier_name + ' has been recruited.', 'New soldier');
	}
	return true;
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
	if (typeof this.navy[ship_name] === 'undefined') {
		return false;
	} else {
		if (this.navy[ship_name] - 1 >= 0) {
			this.navy[ship_name] = this.navy[ship_name] - 1;
		} else {
			this.navy[ship_name] = 0;
		}
	}
	return true;
};

/**
 * Disband a soldier from the settlement's army.
 * 
 * @public
 * @param {String} soldier_name
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.disband_soldier = function(soldier_name) {
	if (typeof this.army[soldier_name] === 'undefined') {
		return false;
	} else {
		if (this.army[soldier_name] - 1 >= 0) {
			this.army[soldier_name] = this.army[soldier_name] - 1;
		} else {
			this.army[soldier_name] = 0;
		}
	}
	return true;
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
	this._mercenary = [];
	if (this.is_player()) {
		this.get_core().notify('At the end of the year, mercenaries from your city have been released.');
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
 * Get the navy of this settlement in an object format.
 * 
 * @public
 * @param {Object} navy
 * @returns {Object}
 */
civitas.objects.settlement.prototype.get_navy_total = function(navy) {
	var attack = 0;
	var defense = 0;
	var total = 0;
	if (typeof navy === 'undefined') {
		navy = this.navy;
	}
	for (var item in navy) {
		attack += civitas.SHIPS[item].attack * navy[item];
		defense += civitas.SHIPS[item].defense * navy[item];
		total = total + navy[item];
	}
	return {
		total: total,
		attack: attack,
		defense: defense,
		navy: navy
	};
};

/**
 * Get the army of this settlement in an object format.
 * 
 * @public
 * @param {Object} army
 * @returns {Object}
 */
civitas.objects.settlement.prototype.get_army_total = function(army) {
	var total = 0;
	var attack = 0;
	var defense = 0;
	if (typeof army === 'undefined') {
		army = this.army;
	}
	for (var item in army) {
		attack += civitas.SOLDIERS[item].attack * army[item];
		defense += civitas.SOLDIERS[item].defense * army[item];
		total += army[item];
	}
	return {
		total: total,
		attack: attack,
		defense: defense,
		army: army
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
	for (var i = 0; i < this._mercenary.length; i++) {
		if (this._mercenary[i].handle === handle) {
			return true;
		}
	}
	return false;
};

/**
 * Release a recruited mercenary army.
 *
 * @public
 * @param {Number} id
 * @returns {civitas.objects.settlement}
 */
civitas.objects.settlement.prototype.release_mercenary = function(id) {
	var mercenary_army_data = civitas.MERCENARIES[id];
	this._mercenary.splice(id, 1);
	if (this.is_player()) {
		this.get_core().notify(mercenary_army_data.name + ' has been released from its duties.');
	}
	return this;
};

/**
 * Perform diplomacy missions.
 *
 * @public
 * @param {Number|civitas.objects.settlement} settlement
 * @param {Number} mode
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.diplomacy = function(settlement, mode) {
	if (typeof settlement === 'object') {
		settlement = settlement.id();
	}
	if (this.can_diplomacy() === true && typeof settlement === 'number') {
		this._status[settlement].status = mode;
		if (mode === civitas.DIPLOMACY_WAR) {
			this.reset_influence(settlement);
		} else if (mode === civitas.DIPLOMACY_ALLIANCE) {
			this.set_influence(settlement, civitas.MAX_INFLUENCE_VALUE);
		} else if (mode === civitas.DIPLOMACY_PACT) {
			this.set_influence(settlement, Math.ceil(civitas.MAX_INFLUENCE_VALUE / 2));
		} else if (mode === civitas.DIPLOMACY_CEASE_FIRE) {
			this.set_influence(settlement, Math.ceil(civitas.MAX_INFLUENCE_VALUE / 4));
		} else if (mode === civitas.DIPLOMACY_VASSAL) {
			this.set_influence(settlement, civitas.MAX_INFLUENCE_VALUE);
		}
		this.get_core().save_and_refresh();
		return true;
	}
	return false;
};

civitas.objects.settlement.prototype.status = function(settlement, value) {
	if (typeof value !== 'undefined') {
		this._status[settlement] = value;
	}
	if (typeof settlement !== 'undefined') {
		return this._status[settlement];
	} else {
		return this._status;
	}
};

/**
 * Check if this settlement can recruit heroes.
 *
 * @public
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.can_recruit_heroes = function() {
	return this.is_building_built('tavern');
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
		return this._status[settlement].influence;
	} else if (typeof settlement === 'object') {
		return this._status[settlement.id()].influence;
	} else if (typeof settlement === 'string') {
		return this._status[this.get_core().get_settlement(settlement)].influence;
	}
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
		settlement = settlement.id();
	} else if (typeof settlement === 'string') {
		settlement = this.get_core().get_settlement(settlement);
	}
	if (value < 1 || this._status[settlement].influence < 1) {
		this._status[settlement].influence = 1;
	} else {
		this._status[settlement].influence = value;
	}
	if (this._status[settlement].influence >= civitas.MAX_INFLUENCE_VALUE) {
		this._status[settlement].influence = civitas.MAX_INFLUENCE_VALUE;
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
 * Reset the influence of this settlement to 1.
 * 
 * @param {Number} settlement_id
 * @returns {civitas.objects.settlement}
 * @public
 */
civitas.objects.settlement.prototype.reset_influence = function(settlement_id) {
	this.set_influence(settlement_id, 1);
	return this;
};
	
/**
 * Return the diplomacy status of this settlement.
 * 
 * @public
 * @returns {Object}
 */
civitas.objects.settlement.prototype.get_diplomacy_status = function(settlement) {
	return {
		id: this._status[settlement].status,
		name: civitas.DIPLOMACIES[this._status[settlement].status].capitalize()
	};
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
		if (this.is_player()) {
			this.get_core().error('The resource you specified does not exist.');
		}
		return false;
	}
	if (this.can_trade()) {
		var resources = this.get_resources();
		var _settlement;
		if (typeof settlement === 'string' || typeof settlement === 'number') {
			_settlement = this.get_core().get_settlement(settlement);
			if (settlement === false) {
				if (this.is_player()) {
					this.get_core().error(settlement + ' does not exist.');
				}
				return false;
			}
		} else {
			_settlement = settlement;
		}
		var is_double = this.religion().id === _settlement.religion().id ? true : false;
		var trades = _settlement.get_trades();
		if (trades === null) {
			if (this.is_player()) {
				this.get_core().error(settlement + ' does not trade any goods.');
			}
			return false;
		}
		if (typeof trades.exports === 'undefined') {
			if (this.is_player()) {
				this.get_core().error(settlement + ' does not export any goods.');
			}
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
				this.raise_influence(_settlement.id(), (is_double ? civitas.IMPORT_INFLUENCE * 2 : civitas.IMPORT_INFLUENCE));
				this.raise_prestige(is_double ? civitas.IMPORT_PRESTIGE * 2 : civitas.IMPORT_PRESTIGE);
				this.raise_fame(50);
				this.get_core().refresh();
				if (this.is_player()) {
					this.get_core().notify(this.name() + ' bought <strong>' + amount + '</strong> ' + civitas.utils.get_resource_name(item) + ' from ' + settlement + ' for <strong>' + item_discount_price + '</strong> coins each, for a total of <strong>' + price + '</strong> coins.', civitas.l('World Market'));
				}
				return {
					buyer: this.name(),
					amount: amount,
					goods: civitas.utils.get_resource_name(item),
					seller: settlement,
					price: Math.round(civitas.RESOURCES[item].price + discount),
					totalPrice: price
				};
			}
		}
		if (this.is_player()) {
			this.get_core().error(settlement + ' does not export the requested goods.');
		}
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
	if (typeof civitas.SETTLEMENTS[this.id()] !== 'undefined') {
		var _trades = civitas.SETTLEMENTS[this.id()].trades;
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
 * Add the specified resource amount and the total price to the
 * Black Market goods list.
 * 
 * @public
 * @param {String} resource
 * @param {Number} amount
 * @param {Number} price
 * @returns {Object}
 */
civitas.objects.settlement.prototype.add_black_market = function (resource, amount, price) {
	var core = this.get_core();
	if (typeof core.black_market[resource] !== 'undefined') {
		var old = core.black_market[resource];
		core.black_market[resource] = {
			resource: resource,
			amount: old.amount + amount,
			price: old.price + price
		};
	} else {
		core.black_market[resource] = {
			resource: resource,
			amount: amount,
			price: price
		};
	}
	return core.black_market;
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
		if (this.is_player()) {
			this.get_core().error('The resource you specified does not exist.');
		}
		return false;
	}
	var resources = this.get_resources();
	if (this.remove_resource(resource, amount)) {
		var discount = Math.ceil((civitas.RESOURCES[resource].price * civitas.BLACK_MARKET_DISCOUNT) / 100);
		var price = civitas.utils.calc_price_minus_discount(amount, resource, discount);
		this.add_black_market(resource, amount, price);
		this.get_core().refresh();
		if (this.is_player()) {
			this.get_core().notify(this.name() + ' placed ' + amount + ' ' + civitas.utils.get_resource_name(resource) + ' on the Black Market and will receive ' + price + ' coins next month.', civitas.l('Black Market'));
		}
		return {
			seller: this.name(),
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
		if (this.is_player()) {
			this.get_core().error('The resource you specified does not exist.');
		}
		return false;
	}
	if (this.can_trade()) {
		var resources = this.get_resources();
		var _settlement;
		if (typeof settlement === 'string' || typeof settlement === 'number') {
			_settlement = this.get_core().get_settlement(settlement);
			if (settlement === false) {
				if (this.is_player()) {
					this.get_core().error(settlement + ' does not exist.');
				}
				return false;
			}
		} else {
			_settlement = settlement;
		}
		var is_double = this.religion().id === _settlement.religion().id ? true : false;
		var trades = _settlement.get_trades();
		if (trades === null) {
			if (this.is_player()) {
				this.get_core().error(settlement + ' does not trade any goods.');
			}
			return false;
		}
		if (typeof trades.imports === 'undefined') {
			if (this.is_player()) {
				this.get_core().error(settlement + ' does not import any goods.');
			}
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
					if (this.is_player()) {
						this.get_core().error(settlement + ' does not have enough coins.');
					}
					return false;
				}
				_settlement.add_to_storage(item, amount);
				this.remove_from_imports(_settlement, item, amount);
				this.raise_influence(_settlement.id(), (is_double ? civitas.EXPORT_INFLUENCE * 2 : civitas.EXPORT_INFLUENCE));
				this.raise_prestige(is_double ? civitas.EXPORT_PRESTIGE * 2 : civitas.EXPORT_PRESTIGE);
				this.raise_fame(50);
				this.get_core().refresh();
				if (this.is_player()) {
					this.get_core().notify(this.name() + ' sold <strong>' + amount + '</strong> ' + civitas.utils.get_resource_name(item) + ' to ' + settlement + ' for <strong>' + item_discount_price + '</strong> coins each, for a total of <strong>' + price + '</strong> coins.', civitas.l('World Market'));
				}
				return {
					seller: this.name(),
					amount: amount,
					goods: civitas.utils.get_resource_name(item),
					buyer: settlement,
					price: Math.round(civitas.RESOURCES[item].price - discount),
					totalPrice: price
				};
			}
		}
		if (this.is_player()) {
			this.get_core().error(settlement + ' does not import the specified goods.');
		}
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
	 * Event data for lowering stuff.
	 *
	 * @private
	 * @type {Object}
	 */
	this.lower = null;

	/**
	 * Event data for raising stuff.
	 *
	 * @private
	 * @type {Object}
	 */
	this.raise = null;

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
		this.chance = (typeof params.chance !== 'undefined') ? params.chance : 0.001;
		this.description = params.description;
		this.raise = typeof params.raise !== 'undefined' ? params.raise : null;
		this.lower = typeof params.lower !== 'undefined' ? params.lower : null;
		this.process();
		return this;
	};

	/**
	 * Process the event data.
	 * 
	 * @public
	 * @returns {civitas.objects.event}
	 */
	this.process = function () {
		var core = this.get_core();
		var random_settlement_id = civitas.utils.get_random(1, core.settlements.length);
		var with_settlement = core.get_settlement(random_settlement_id);
		var description = this.description.replace(/SETTLEMENT/g, with_settlement.name());
		if (this.raise !== null) {
			for (var item in this.raise) {
				if (item === 'influence') {
					core.get_settlement().raise_influence(with_settlement.id(), this.raise[item]);
				} else {
					core.get_settlement().add_to_storage(item, this.raise[item]);
				}
				var replace = new RegExp(item.toUpperCase(), 'g');
				description = description.replace(replace, this.raise[item]);
			}
		}
		if (this.lower !== null) {
			for (var item in this.lower) {
				if (item === 'influence') {
					core.get_settlement().lower_influence(with_settlement.id(), this.lower[item]);
				} else {
					core.get_settlement().remove_resource_silent(item, this.lower[item]);
				}
				var replace = new RegExp(item.toUpperCase(), 'g');
				description = description.replace(replace, this.lower[item]);
			}
		}
		if (core.get_settlement().is_player()) {
			core._notify({
				title: 'Event occured: ' + this.name,
				content: description,
				timeout: false,
				mode: civitas.NOTIFY_EVENT
			});
		}
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
	this.stopped = false;

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
		this.stopped = (typeof params.stopped !== 'undefined') ? params.stopped : false;
		this.handle = params.data.handle;
		params.data.level = this.get_level();
		if (params.hidden !== true && this.settlement.is_player()) {
			$('section.game').append(civitas.ui.building_element(params)).on('click', '#building-' + this.get_handle(), function() {
				var panel = civitas['PANEL_' + self.get_handle().toUpperCase()];
				if (typeof panel !== 'undefined') {
					self.get_core().open_panel(panel, params.data);
				} else {
					self.get_core().open_panel(civitas.PANEL_BUILDING, params.data);
				}
				return false;
			});
			if (this.stopped === true) {
				this.problems = true;
				this.notify(civitas.NOTIFICATION_PRODUCTION_PAUSED);
			} else {
				this.problems = false;
				this.notify();
			}
			this.get_core().refresh();
		}
		var building = this.get_building_data();
		switch (this.get_type()) {
			case 'marketplace':
			case 'warehouse':
				this.get_settlement().storage(this.get_settlement().storage().all + (building.storage * this.get_level()));
				break;
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
		var core = this.get_core();
		var settlement = this.get_settlement();
		var resources = settlement.get_resources();
		var next_level = this.get_level() + 1;
		var data = this.get_building_data(this.get_type());
		var building_image = this.get_type();
		if (data && this.is_upgradable() && settlement.is_building_built(this.get_type())) {
			for (var item in data.cost) {
				if ((resources[item] - (data.cost[item] * next_level)) < 0) {
					if (settlement.is_player()) {
						core.error('You don`t have enough ' + item + ' to upgrade this building.');
					}
					return false;
				}
			}
			for (var item in data.cost) {
				if ((resources[item] - (data.cost[item] * next_level)) >= 0) {
					resources[item] = resources[item] - (data.cost[item] * next_level);
				}
			}
			this.set_level(next_level);
			if (settlement.is_player()) {
				if (this.get_type().slice(0, 5) === 'house') {
					building_image = this.get_type().slice(0, 5);
				}
				$('section.game .building[data-type=' + this.get_type() + ']').css({
					'background-image': 'url(./images/buildings/' + ((typeof data.visible_upgrades === 'undefined' || data.visible_upgrades === false) ? building_image + '1' : building_image + this.get_level()) + '.png)'
				});
			}
			if (typeof data.storage !== 'undefined') {
				settlement.storage(settlement.storage().all + data.storage);
			}
			if (settlement.is_player()) {
				core.save_and_refresh();
				core.notify(this.get_name() + ' upgraded to level ' + this.get_level());
			}
			return true;
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
		var settlement = this.get_settlement();
		if (this.get_level() > 1 && this.get_settlement().is_building_built(this.get_type())) {
			var building_image = this.get_type();
			var data = this.get_building_data(this.get_type());
			--this.level;
			if (settlement.is_player()) {
				if (this.get_type().slice(0, 5) === 'house') {
					building_image = this.get_type().slice(0, 5);
				}
				$('section.game .building[data-type=' + this.get_type() + ']').css({
					'background-image': 'url(./images/buildings/' + ((typeof data.visible_upgrades === 'undefined' || data.visible_upgrades === false) ? building_image + '1' : building_image + this.get_level()) + '.png)'
				});
				this.get_core().save_and_refresh();
				this.get_core().notify(this.get_name() + ' downgraded to level ' + this.get_level());
			}
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
	this.is_stopped = function() {
		return this.stopped;
	};

	/**
	 * Start this building's production
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.start_production = function() {
		if (this.get_settlement().is_building_built(this.get_type()) && this.is_production_building()) {
			if (this.get_settlement().is_player()) {
				this.get_core().notify(this.get_name() + '`s production started.');
				this.notify();
			}
			this.stopped = false;
			this.problems = false;
			this.get_core().save_and_refresh();
			return true;
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
		if (this.get_settlement().is_building_built(this.get_type()) && this.is_production_building()) {
			if (this.get_settlement().is_player()) {
				this.get_core().notify(this.get_name() + '`s production stopped.');
				this.notify(civitas.NOTIFICATION_PRODUCTION_PAUSED);
			}
			this.stopped = true;
			this.problems = true;
			this.get_core().save_and_refresh();
			return true;
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
		var settlement = this.get_settlement();
		if (this.get_type() !== 'marketplace') {
			for (var i = 0; i < settlement.buildings.length; i++) {
				if (settlement.buildings[i].get_type() === this.get_type()) {
					settlement.buildings.splice(i, 1);
				}
			}
			if (settlement.is_player()) {
				$('section.game > .building[data-type=' + this.get_type() + ']').remove();
				this.get_core().notify(this.get_name() + ' demolished successfully!');
			}
			return true;
		} else {
			if (settlement.is_player()) {
				this.get_core().error('Unable to demolish the specified building `' + this.get_name() + '`!');
			}
			return false;
		}
	};

	/**
	 * Internal helper method for checking if the settlement has the required material.
	 *
	 * @private
	 * @param {String} material
	 * @returns {Boolean}
	 */
	this._has_material = function(material, notify) {
		var building = this.get_building_data();
		var materials = building.materials;
		var resources = this.get_settlement_resources();
		if (resources[material] - materials[material] < 0) {
			if (this.get_settlement().is_player()) {
				if (typeof notify !== 'undefined' && notify === true) {
					this.get_core().log(this.get_name() + ' doesn`t have enough ' + material + '.', true);
				}
				this.notify(civitas.NOTIFICATION_MISSING_RESOURCES);
			}
			this.problems = true;
			return false;
		}
		return true;
	};

	/**
	 * Check if the settlement has the required materials to create this building.
	 * 
	 * @public
	 * @param {Array|String} materials
	 * @returns {Boolean}
	 */
	this.has_materials = function(materials, notify) {
		if (typeof materials === 'object') {
			for (var i = 0; i < materials.length; i++) {
				if (materials[i] !== 'coins') {
					return this._has_material(materials[i], notify);
				}
			}
		} else {
			return this._has_material(materials, notify);
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
		var settlement = this.get_settlement();
		var building = this.get_building_data();
		var _material = building.materials;
		if (typeof material === 'object') {
			for (var i = 0; i < material.length; i++) {
				settlement.remove_resource(material[i], _material[material[i]]);
				if (settlement.is_player()) {
					this.get_core().log(this.get_name() + ' used ' + _material[material[i]] + ' ' + material[i] + '.');
				}
			}
		} else {
			settlement.remove_resource(material, _material[material]);
			if (settlement.is_player()) {
				this.get_core().log(this.get_name() + ' used ' + _material[material] + ' ' + material + '.');
			}
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
	 * Get the settlement resources object
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_settlement_resources = function() {
		return this.get_settlement().get_resources();
	};

	/**
	 * Internal helper method to produce a material.
	 *
	 * @private
	 * @param {String} material
	 * @returns {civitas.objects.building}
	 */
	this._produce_material = function(material) {
		if (this.is_stopped()) {
			return this;
		}
		var settlement = this.get_settlement();
		var resources = settlement.get_resources();
		var building = this.get_building_data();
		var production = building.production;
		var amount = production[material] * this.get_level();
		var chance;
		var random_amount;
		if (material === 'faith') {
			this.get_settlement().raise_faith(amount);
		} else if (material === 'research') {
			this.get_settlement().raise_research(amount);
		} else if (material === 'espionage') {
			this.get_settlement().raise_espionage(amount);
		} else if (material === 'fame') {
			this.get_settlement().raise_fame(amount);
		} else if (material === 'prestige') {
			this.get_settlement().raise_prestige(amount);
		} else {
			if (!this.get_settlement().has_storage_space_for(amount)) {
				return this;
			}
			this.get_settlement().add_to_storage(material, amount);
			if (typeof building.chance !== 'undefined') {
				for (var item in building.chance) {
					chance = Math.random();
					if (chance < building.chance[item]) {
						random_amount = civitas.utils.get_random(1, 5);
						if (this.get_settlement().is_player()) {
							this.get_core().log(this.get_name() + ' procced ' + random_amount + ' extra ' + civitas.utils.get_resource_name(item) + '.');
						}
						this.get_settlement().add_to_storage(item, random_amount);
					}
				}
			}
		}
		if (this.get_settlement().is_player()) {
			this.get_core().log(this.get_name() + ' produced ' + amount + ' ' + material + '.');
		}
		return this;
	};

	/**
	 * Produce the materials.
	 * 
	 * @public
	 * @param {String|Array} material
	 * @returns {civitas.objects.building}
	 */
	this.produce_material = function(material) {
		if (typeof material === 'object') {
			for (var i = 0; i < material.length; i++) {
				this._produce_material(material[i]);
			}
		} else {
			this._produce_material(material);
		}
		this.notify();
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
			for (var item in required) {
				if (!this.get_settlement().is_building_built(item, required[item])) {
					good = false;
					if (this.get_settlement().is_player()) {
						this.get_core().log(this.get_name() + ' doesn`t have the required level ' + required[item] + ' ' + this.get_building_data(item).name + '.', true);
						this.notify(civitas.NOTIFICATION_MISSING_RESOURCES);
					}
					this.problems = true;
				}
			}
		}
		if (typeof building.requires.settlement_level !== 'undefined') {
			if (building.requires.settlement_level > this.get_settlement().level()) {
				if (this.get_settlement().is_player()) {
					this.get_core().log('Your settlement level is too low for ' + this.get_name() + ' to be active.', true);
					this.notify(civitas.NOTIFICATION_SETTLEMENT_LOW_LEVEL);
				}
				good = false;
				this.problems = true;
			}
		}
		return good;
	};

	/**
	 * Main threading method for the building, this does the actual processing each turn.
	 * 
	 * @public
	 * @returns {civitas.objects.building}
	 */
	this.process = function() {
		if (!this.has_requirements()) {
			return false;
		}
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
					if (this.get_settlement().is_player()) {
						this.get_core().log(this.get_name() + ' gave ' + amount + ' coins via tax.');
					}
					this.notify();
				}
			}
		} else {
			if (!this.is_stopped()) {
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
					this.notify();
				} else {
					this.problems = true;
				}
			} else {
				if (this.get_settlement().is_player()) {
					this.get_core().log(this.get_name() + ' production is stopped.');
					this.notify(civitas.NOTIFICATION_PRODUCTION_PAUSED);
				}
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
	 * Set the level of this building
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {civitas.objects.building}
	 */
	this.set_level = function(value) {
		this.level = value;
		return this;
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
		if (typeof notification_type !== 'undefined') {
			if (this.get_settlement().is_player()) {
				var handle = $('section.game > #building-' + this.get_handle());
				switch (notification_type) {
					case civitas.NOTIFICATION_PRODUCTION_PAUSED:
						handle.empty().append('<span class="notification paused"></span>');
						break;
					case civitas.NOTIFICATION_MISSING_RESOURCES:
					default:
						handle.empty().append('<span class="notification error"></span>');
						break;
				}
			}
		} else {
			$('section.game > #building-' + this.get_handle()).empty();
		}
		return this;
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
		$('body').append(params.template.replace(/{ID}/g, params.id));
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
 * Main modal object.
 * 
 * @param {Object} params
 * @class {civitas.controls.modal}
 * @returns {civitas.controls.modal}
 */
civitas.controls.modal = function (params) {

	/**
	 * Reference to the core object.
	 * 
	 * @type {civitas.game}
	 */
	this.core = null;

	/**
	 * Template of the modal window.
	 *
	 * @private
	 * @type {String}
	 */
	this.template = '<div class="modal-overlay">' +
			'<div class="modal">' +
				'<header></header>' +
				'<section></section>' +
				'<footer></footer>' +
			'</div>' +
		'</div>';

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {civitas.controls.modal}
	 * @param {Object} params
	 */
	this.__init = function(params) {
		this.core = params.core;
		var self = this;
		$('body').append(this.template);
		$(window).bind('resize', function() {
			self._resize();
		});
		return this;
	};

	/**
	 * Main method to show the modal window.
	 *
	 * @public
	 * @param {Object} options
	 * @returns {civitas.objects.modal}
	 */
	this.alert = function(options) {
		var self = this;
		var settlement = false;
		if (this.core.settlements.length > 0) {
			settlement = this.core.get_settlement();
		}
		if (this._is_open()) {
			return false;
		}
		this.core.show_loader();
		$('.modal').css({
			width: '400px'
		});
		this._resize();
		$('.modal header').html(options.title);
		$('.modal footer').html('<a data-id="yes" href="#" class="btn float-right">' + civitas.l('Yes') + '</a>' +
			'<a data-id="no" href="#" class="btn">' + civitas.l('No') + '</a>');
		$('.modal section').html((settlement ? '<img class="avatar" src="' + civitas.ASSETS_URL + 'images/avatars/avatar' + this.core.get_settlement().ruler().avatar + '.png" />' : '') +
			'<p>' + options.text + '</p>');
		$('.modal footer').on('click', 'a', function() {
			self._action($(this).data('id'));
			return false;
		});
		$('.modal-overlay, .modal').show();
		if (typeof options.on_click === 'function') {
			this.on_click = options.on_click;
		}
		return this;
	};

	/**
	 * Internal method to check out if the modal window is already open.
	 *
	 * @private
	 * @returns {Boolean}
	 */
	this._is_open = function() {
		return $('.modal').css('display') === "block";
	};

	/**
	 * Internal method for resetting the modal window.
	 *
	 * @private
	 * @returns {Boolean}
	 */
	this._clear = function() {
		$('.modal-overlay').remove();
		$('body').append(this.template);
		this.core.hide_loader();
		this._resize();
		return true;
	};

	/**
	 * Internal method for triggering the click event on the buttons.
	 *
	 * @private
	 * @param {String} key
	 */
	this._action = function(key) {
		this._clear();
		this.on_click(key);
	};

	/**
	 * Internal method for resizing the modal window.
	 *
	 * @private
	 * @returns {civitas.objects.modal}
	 */
	this._resize = function() {
		var lbox = $('.modal');
		var height = parseInt((lbox.css('height')).replace('px', ''));
		var width = parseInt((lbox.css('width')).replace('px', ''));
		lbox.css({
			top: ($(window).height() / 2) - 100 + 'px',
			left: ($(window).width() - width) / 2 + 'px'
		});
		return this;
	};

	/**
	 * Callback function.
	 *
	 * @public
	 */
	this.on_click = function() {
		// nothing here, move along.
	};

	/**
	 * Object destructor.
	 * 
	 * @private
	 * @returns {Boolean}
	 */
	this.__destroy = function() {
		$('.modal-overlay').remove();
		$(window).unbind('resize');
		return false;
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
	 * Data passed to this panel.
	 *
	 * @private
	 * @type {Object}
	 */
	this.params_data = null;

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
		this.params_data = params.data;
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
		$('.ui').append(params.template.replace(/{ID}/g, params.id));
		if (typeof this.params_data !== 'undefined' && typeof this.params_data.name !== 'undefined' && typeof this.params_data.name !== 'function') {
			$(this.handle + ' header').append(this.params_data.name);
		}
		this.on_show.call(this, params);
		this.on_refresh.call(this, params);
		if (typeof params.data !== 'undefined') {
			var building = this.get_core().get_settlement().get_building(params.data.handle);
			if (building !== false) {
				if (!building.is_upgradable()) {
					$(this.handle + ' footer .upgrade').remove();
				}
				if (building.is_marketplace()) {
					$(this.handle + ' footer .demolish').remove();
				}
				if (building.is_production_building()) {
					if (!building.is_stopped()) {
						$(this.handle + ' .pause').removeClass('start').attr('title', civitas.l('Stop production'));
					} else {
						$(this.handle + ' .start').removeClass('pause').attr('title', civitas.l('Start production'));
					}
				} else {
					$(this.handle + ' .start, ' + this.handle + ' .pause').remove();
				}
				$(this.handle).on('click', '.upgrade', function () {
					self.get_core().open_modal(
						function(button) {
							if (button === 'yes') {
								if (building.upgrade()) {
									if (!building.is_upgradable()) {
										$(self.handle + ' footer .upgrade').remove();
									}
								}
							}
						},
						'Are you sure you want to upgrade this building?'
					);
					return false;
				}).on('click', '.demolish', function () {
					self.get_core().open_modal(
						function(button) {
							if (button === 'yes') {
								if (building.demolish()) {
									self.destroy();
									self.get_core().save_and_refresh();
								}
							}
						},
						'Are you sure you want to demolish this building?'
					);
					return false;
				}).on('click', '.pause', function () {
					if (building.stop_production()) {
						$(this).removeClass('pause').addClass('start');
						$(this).attr('title', civitas.l('Start production'));
					}
					return false;
				}).on('click', '.start', function () {
					if (building.start_production()) {
						$(this).removeClass('start').addClass('pause');
						$(this).attr('title', civitas.l('Stop production'));
					}
					return false;
				});
			}
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
	 * Game actions queue.
	 *
	 * @private
	 * @type {Array}
	 */
	this.queue = [];

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
	 * Encryption data, for now it's safe (famous last words) since we're only doing local storage.
	 *
	 * @private
	 * @type {String}
	 */
	this.encryption = {
		key: null,
		key_size: 256,
		iv_size: 128,
		iterations: 100,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7
	};

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
	this.worldmap = null;

	/**
	 * Game mode, single player or multi player.
	 *
	 * @type {Number}
	 * @private
	 */
	this.mode = civitas.MODE_SINGLEPLAYER;

	/**
	 * Modal window instance.
	 *
	 * @private
	 * @type {Object}
	 */
	this.modal = null;

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
		if (!this.has_storage_data()) {
			this.open_window(civitas.WINDOW_SIGNUP);
		} else {
			this.open_window(civitas.WINDOW_SIGNIN);
		}
		return this;
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
			this.notify(this.get_settlement().name() + ' ' + civitas.l('received') + ' ' + total + ' ' + civitas.l('coins from the Black Market for selling goods.'), civitas.l('Black Market'));
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
	 * Internal method for starting up a game.
	 *
	 * @private
	 * @param {Object} data
	 * @returns {civitas.game}
	 */
	this._setup_game = function(data) {
		var self = this;
		this._setup_neighbours(data);
		$('header .cityname').html(this.get_settlement().name());
		$('header .cityavatar').css({
			'background-image': 'url(' + civitas.ASSETS_URL + 'images/avatars/avatar' + this.get_settlement().ruler().avatar + '.png)'
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
		this.save_and_refresh();
		return this;
	};

	/**
	 * Start a new game.
	 *
	 * @public
	 * @param {String} name
	 * @param {String} cityname
	 * @param {Number} nation
	 * @param {Number} climate
	 * @param {Number} avatar
	 * @param {Number} difficulty
	 * @param {String} password
	 * @returns {Boolean}
	 */
	this.new_game = function(name, cityname, nation, climate, avatar, difficulty, password) {
		this.show_loader();
		var data = null;
		var game_data = this.get_storage_data();
		this.encryption.key = password;
		this.difficulty = parseInt(difficulty);
		this.worldmap = civitas.utils.get_random(1, civitas.WORLDMAPS);
		this._create_settlement(name, cityname, nation, climate, avatar);
		this._setup_game(null);
		return true;
	};

	/**
	 * Load a game decrypting it with the specified password.
	 *
	 * @public
	 * @param {String} password
	 * @returns {Boolean}
	 */
	this.load_game = function(password) {
		var data = null;
		this.encryption.key = password;
		var game_data = this.get_storage_data();
		if (game_data) {
			this.show_loader();
			data = this._load_settlement(this.import(game_data.data));
		} else {
			return false;
		}
		this._setup_game(data);
		return true;
	};

	/**
	 * Pause the game.
	 *
	 * @public
	 * @returns {civitas.game}
	 */
	this.pause = function() {
		this.paused = true;
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
		var random = Math.random().toFixed(5);
		var event;
		for (var i = 0; i < civitas.EVENTS.length; i++) {
			var _event = civitas.EVENTS[i];
			if (random <= _event.chance) {
				event = _event;
				event.core = this;
				new civitas.objects.event(event);
				return this;
			}
		}
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
		this.advance_queue();
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
		if (this.month === 6 || this.month === 12) {
			this._do_biannually();
		}
		this._reset_black_market();
		return this;
	};

	/**
	 * Method that gets called twice per year.
	 * 
	 * @private
	 * @returns {civitas.game}
	 */
	this._do_biannually = function() {
		this.refresh_trades();
		return this;
	};

	/**
	 * Method that gets called four times every year.
	 * 
	 * @private
	 * @returns {civitas.game}
	 */
	this._do_quarterly = function() {
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
	 * @private
	 * @returns {civitas.game}
	 */
	this._refresh_influence = function() {
		var settlements = this.get_settlements();
		for (var i = 1; i < settlements.length; i++) {
			if (typeof settlements[i] !== 'undefined') {
				if (settlements[i].is_city()) {
					if (this.get_settlement().religion().id === settlements[i].religion().id) {
						this.get_settlement().raise_influence(settlements[i].id(), civitas.YEARLY_INFLUENCE_GAIN);
					} else if ((this.get_settlement().get_diplomacy_status(settlements[i].id()) === civitas.DIPLOMACY_VASSAL) || (this.get_settlement().get_diplomacy_status(settlements[i].id()) === civitas.DIPLOMACY_ALLIANCE)) {
						this.get_settlement().raise_influence(settlements[i].id());
					} else {
						this.get_settlement().lower_influence(settlements[i].id(), civitas.YEARLY_INFLUENCE_LOSS);
					}
				} else {
					if (this.get_settlement().religion().id === settlements[i].religion().id) {
						this.get_settlement().raise_influence(settlements[i].id(), civitas.YEARLY_INFLUENCE_GAIN);
					} else if ((this.get_settlement().get_diplomacy_status(settlements[i].id()) === civitas.DIPLOMACY_VASSAL) || (this.get_settlement().get_diplomacy_status(settlements[i].id()) === civitas.DIPLOMACY_ALLIANCE)) {
						this.get_settlement().raise_influence(settlements[i].id());
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
		this._refresh_influence();
		this.year++;
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
	 * Calculate and return the total and free storage space in the main settlement.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.calc_storage = function () {
		var storage = this.get_settlement().storage();
		if (storage.occupied >= storage.all) {
			this.error('You ran out of storage space and all goods produced will be lost. Upgrade your warehouse or marketplace.', 'No storage space');
		} else if ((storage.all - storage.occupied) < 100) {
			this.error('You will soon run out of storage space and all goods produced will be lost. Upgrade your warehouse or marketplace.', 'Storage nearly full');
		}
		return storage;
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
 * Get a pointer to the player's settlement.
 * 
 * @public
 * @param {String} name
 * @returns {civitas.settlement|Boolean}
 */
civitas.game.prototype.get_settlement = function (name) {
	var settlements = this.get_settlements();
	if (typeof name === 'undefined') {
		return settlements[0];
	}
	if (typeof name === 'string') {
		for (var i = 0; i < settlements.length; i++) {
			if (settlements[i].name() === name) {
				return settlements[i];
			}
		}
	} else if (typeof name === 'number') {
		for (var i = 0; i < settlements.length; i++) {
			if (settlements[i].id() === name) {
				return settlements[i];
			}
		}
	}
	return false;
};

/**
 * Load the main settlement data.
 * 
 * @private
 * @param {Object} data
 * @returns {Object|Boolean}
 */
civitas.game.prototype._load_settlement = function (data) {
	var player_settlement_data = data.settlements[0];
	var new_settlement;
	if (player_settlement_data) {
		player_settlement_data.core = this;
		new_settlement = new civitas.objects.settlement(player_settlement_data);
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
civitas.game.prototype._create_settlement = function (name, cityname, nation, climate, avatar) {
	var difficulty = this.get_difficulty();
	var my_settlement = new civitas.objects.settlement({
		properties: {
			name: cityname,
			climate: climate,
			avatar: avatar,
			id: 0,
			player: true,
			ruler: {
				name: name,
				title: '',
				avatar: avatar,
				nationality: nation,
				personality: civitas.PERSONALITY_BALANCED
			}
		},
		army: civitas.START_ARMY[difficulty - 1].army,
		navy: civitas.START_ARMY[difficulty - 1].navy,
		core: this
	});
	this.settlements.push(my_settlement);
	this.get_settlement()._create_buildings(civitas.START_BUILDINGS);
	return this;
};

/**
 * Get the list of all the settlements in game.
 * 
 * @public
 * @returns {Array}
 */
civitas.game.prototype.get_settlements = function () {
	return this.settlements;
};

/**
 * Create all the other settlements in the world.
 * 
 * @private
 * @param {Object} data
 * @returns {civitas.game}
 */
civitas.game.prototype._setup_neighbours = function (data) {
	var new_settlement = null;
	var settlement_data = null;
	var ruler = null;
	if (data !== null) {
		for (var i = 1; i < data.settlements.length; i++) {
			settlement_data = data.settlements[i];
			settlement_data.core = this;
			new_settlement = new civitas.objects.settlement(settlement_data);
			var climate = new_settlement.climate();
			var climate_buildings = 'SETTLEMENT_BUILDINGS_' + climate.name.toUpperCase();
			new_settlement._create_buildings(civitas[climate_buildings], true);
			this.settlements.push(new_settlement);
		}
	} else {
		for (var item in civitas.SETTLEMENTS) {
			item = parseInt(item);
			settlement_data = civitas.SETTLEMENTS[item];
			settlement_data.type = typeof settlement_data.type === 'undefined' || settlement_data.type === civitas.CITY ? civitas.CITY : civitas.VILLAGE;
			if (settlement_data.type === civitas.VILLAGE) {
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
				properties: {
					id: item,
					population: settlement_data.population,
					type: settlement_data.type,
					name: civitas.utils.get_random_unique(civitas.SETTLEMENT_NAMES),
					player: false,
					level: settlement_data.level,
					religion: settlement_data.religion,
					climate: settlement_data.type === civitas.CITY ? settlement_data.climate : civitas.CLIMATE_TEMPERATE,
					ruler: ruler,
					icon: settlement_data.type === civitas.CITY ? settlement_data.icon : 1
				},
				resources: settlement_data.resources,
				army: settlement_data.army,
				navy: settlement_data.navy
			});
			if (settlement_data.type === civitas.CITY) {
				var climate = new_settlement.climate();
				var climate_buildings = 'SETTLEMENT_BUILDINGS_' + climate.name.toUpperCase();
				new_settlement._create_buildings(civitas[climate_buildings], true);
			}
			this.get_settlement().status(item, {
				influence: 50,
				status: civitas.DIPLOMACY_TRUCE
			});
			this.settlements.push(new_settlement);
		}
	}
	return this;
};

/**
 * Get the list of imports and exports from all the world settlements (except main).
 * 
 * @private
 * @returns {Object}
 */
civitas.game.prototype._get_neighbours_trades = function () {
	var data = {};
	var settlements = this.get_settlements();
	for (var i = 1; i < settlements.length; i++) {
		if (typeof settlements[i] !== 'undefined') {
			data[settlements[i].id()] = settlements[i].get_trades();
		}
	}
	return data;
};

/**
 * Reset (empty) game storage data.
 * 
 * @param {String} key
 * @public
 * @returns {civitas.game}
 */
civitas.game.prototype.reset_storage_data = function(key) {
	if (typeof key === 'undefined') {
		key = 'live';
	}
	localStorage.removeItem(civitas.STORAGE_KEY + '.' + key);
	return this;
};

/**
 * Encrypt data using AES encryption.
 *
 * @public
 * @param {String} data
 * @returns {String}
 */
civitas.game.prototype.encrypt = function(data) {
	var salt = CryptoJS.lib.WordArray.random(128 / 8);
	var key = CryptoJS.PBKDF2(this.encryption.key, salt, {
		keySize: this.encryption.key_size / 32,
		iterations: this.encryption.iterations
	});
	var iv = CryptoJS.lib.WordArray.random(128 / 8);
	var encrypted = CryptoJS.AES.encrypt(data, key, { 
		iv: iv,
		padding: this.encryption.padding,
		mode: this.encryption.mode
	});
	return salt.toString() + iv.toString() + encrypted.toString();
};

/**
 * Decrypt data using AES encryption.
 *
 * @public
 * @param {String} data
 * @returns {String}
 */
civitas.game.prototype.decrypt = function(data) {
	var salt = CryptoJS.enc.Hex.parse(data.substr(0, 32));
	var iv = CryptoJS.enc.Hex.parse(data.substr(32, 32))
	var encrypted = data.substring(64);
	var key = CryptoJS.PBKDF2(this.encryption.key, salt, {
		keySize: this.encryption.key_size / 32,
		iterations: this.encryption.iterations
	});
	var decrypted = CryptoJS.AES.decrypt(encrypted, key, { 
		iv: iv, 
		padding: this.encryption.padding,
		mode: this.encryption.mode
	});
	try {
  		decrypted = decrypted.toString(CryptoJS.enc.Utf8);
  	} catch (err) {
  		return false;
  	}
  	return decrypted;
};

/**
 * Set game storage data.
 * 
 * @param {String} key
 * @param {Mixed} value
 * @public
 * @returns {civitas.game}
 */
civitas.game.prototype.set_storage_data = function (key, value) {
	localStorage.setItem(civitas.STORAGE_KEY + '.' + key, this.encrypt(JSON.stringify(value)));
	return this;
};

/**
 * Check if there is any stored data.
 *
 * @public
 * @returns {Boolean}
 */
civitas.game.prototype.has_storage_data = function(key) {
	if (typeof key === 'undefined') {
		key = 'live';
	}
	if (localStorage.getItem(civitas.STORAGE_KEY + '.' + key) !== null) {
		return true;
	} else {
		return false;
	}
};

/**
 * Retrieve game storage data.
 * 
 * @param {String} key
 * @public
 * @returns {Mixed}
 */
civitas.game.prototype.get_storage_data = function (key) {
	if (typeof key === 'undefined') {
		key = 'live';
	}
	if (this.has_storage_data(key)) {
		var decrypted = this.decrypt(localStorage.getItem(civitas.STORAGE_KEY + '.' + key));
		if (decrypted !== false) {
			return JSON.parse(decrypted);
		}
	}
	return false;
};

/**
 * Import game data.
 *
 * @public
 * @returns {Object}
 */
civitas.game.prototype.import = function(data) {
	if (data !== false) {
		this.set_difficulty(data.difficulty);
		this.set_worldmap(data.worldmap);
		this.set_queue(data.queue);
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
civitas.game.prototype.export = function(to_local_storage, slot) {
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
		queue: this.get_queue(),
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
 * Save the game data.
 * 
 * @public
 * @returns {civitas.game}
 */
civitas.game.prototype.save = function () {
	this.export(true);
	return this;
};

/**
 * Return the UI panel specified by its id.
 *
 * @public
 * @param {String} id
 * @returns {civitas.controls.panel|Boolean}
 */
civitas.game.prototype.get_panel = function(id) {
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
civitas.game.prototype.close_panel = function(id) {
	var panels = this.get_panels();
	for (var i = 0; i < panels.length; i++) {
		if (panels[i].id === id) {
			panels.splice(i, 1);
		}
	}
	return this;
};
	
/**
 * Build the game UI.
 *
 * @private
 * @returns {civitas.game}
 */
civitas.game.prototype._build_ui = function() {
	var out = '<section class="ui">' +
			'<header>' +
				'<div title="' + civitas.l('City Council') + '" class="tips cityavatar"></div>' +
				'<span title="' + civitas.l('City level') + '" class="tips citylevel"></span>' +
				'<div title="' + civitas.l('City name') + '" class="tips cityname"></div>' +
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
					'<a href="#" data-action="panel" data-panel="buildings" class="tips" title="' + civitas.l('Buildings') + '"></a>' +
					'<a href="#" data-action="panel" data-panel="storage" class="tips" title="' + civitas.l('Storage Space') + '"></a>' +
					'<a href="#" data-action="panel" data-panel="trades" class="tips" title="' + civitas.l('Trades') + '"></a>' +
					'<a href="#" data-action="panel" data-panel="council" class="tips" title="' + civitas.l('City Council') + '"></a>' +
					'<a href="#" data-action="panel" data-panel="ranks" class="tips" title="' + civitas.l('Ranks') + '"></a>' +
					'<a href="#" data-action="panel" data-panel="world" class="tips" title="' + civitas.l('World Map') + '"></a>' +
					'<a href="#" class="" title=""></a>' +
					'<a href="#" class="" title=""></a>' +
					'<a href="#" data-action="panel" data-panel="help" class="tips" title="' + civitas.l('Help') + '"></a>' +
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
 * Show the game loader.
 *
 * @public
 * @returns {civitas.game}
 */
civitas.game.prototype.show_loader = function() {
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
civitas.game.prototype.hide_loader = function() {
	$('.loading').hide();
	return this;
};

/**
 * Refresh the UI and panels.
 *
 * @public
 * @returns {civitas.game}
 */
civitas.game.prototype.refresh = function() {
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
civitas.game.prototype.refresh_toolbar = function() {
	var settlement = this.get_settlement();
	if (typeof settlement !== 'undefined') {
		var resources = settlement.get_resources();
		for (var i = 0; i < civitas.TOOLBAR_RESOURCES.length; i++) {
			var resource = civitas.TOOLBAR_RESOURCES[i];
			if (typeof resources[resource] !== 'undefined') {
				$('.top-panel .' + resource).attr('title', resources[resource] + ' ' + civitas.utils.get_resource_name(resource));
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
civitas.game.prototype.refresh_ui = function () {
	var settlement = this.get_settlement();
	if (typeof settlement !== 'undefined') {
		$('.citylevel').html(settlement.level());
		if (settlement.fame() >= civitas.LEVELS[settlement.level()]) {
			settlement.level_up();
		}
	}
	return this;
};

/**
 * Force refresh of the UI panels open.
 *
 * @public
 * @returns {civitas.game}
 */
civitas.game.prototype.refresh_panels = function() {
	var panels = this.get_panels();
	for (var x = 0; x < panels.length; x++) {
		panels[x].on_refresh();
	}
	return this;
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
civitas.game.prototype.notify = function (message, title, timeout) {
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
civitas.game.prototype._notify = function (settings) {
	var container, notty, hide, image, right, left, inner, _container;
	settings = $.extend({
		title: undefined,
		content: undefined,
		timeout: 15000,
		img: undefined,
		mode: civitas.NOTIFY_NORMAL
	}, settings);
	if (settings.mode === civitas.NOTIFY_ACHIEVEMENT) {
		_container = 'achievements-notifications';
	} else {
		_container = 'notifications';
	}
	container = $('.' + _container);
	if (!container.length) {
		container = $("<div>", {
			'class': _container
		}).appendTo(document.body);
	}
	$('.achievements-notifications').css({
		left: ($(window).width() / 2) - (container.width() / 2)
	});
	notty = $('<div>');
	notty.addClass('notty');
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
	hide.addClass('hide');
	if (settings.mode === civitas.NOTIFY_ERROR) {
		notty.addClass('error');
		settings.img = civitas.ASSETS_URL + 'images/ui/icon_error.png';
	} else if (settings.mode === civitas.NOTIFY_EVENT) {
		notty.addClass('event');
		settings.img = civitas.ASSETS_URL + 'images/ui/icon_research.png';
	} else if (settings.mode === civitas.NOTIFY_ACHIEVEMENT) {
		notty.addClass('achievement');
		settings.img = civitas.ASSETS_URL + 'images/ui/icon_achievement.png';
	} else {
		settings.img = civitas.ASSETS_URL + 'images/ui/icon_notification.png';
	}
	image = $('<div>', {
		style: "background: url('" + settings.img + "')"
	});
	image.addClass('img');
	left = $("<div class='left'>");
	right = $("<div class='right'>");
	inner = $('<div>', {
		html: '<h2>' + settings.title + '</h2>' + settings.content
	});
	inner.addClass("inner");
	inner.appendTo(right);
	image.appendTo(left);
	left.appendTo(notty);
	right.appendTo(notty);
	hide.appendTo(notty);
	if (settings.mode !== civitas.NOTIFY_ACHIEVEMENT) {
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
civitas.game.prototype.error = function (message, title, no_console) {
	this._notify({
		title: (typeof title !== 'undefined') ? title : civitas.l('City Council'),
		mode: civitas.NOTIFY_ERROR,
		content: message
	});
	if (typeof no_console === 'undefined' || no_console === false) {
		this.log(message, true);
	}
	return this;
};

/**
 * Setup the UI.
 * 
 * @private
 * @returns {civitas.game}
 */
civitas.game.prototype._setup_ui = function () {
	var self = this;
	var clicked = false;
	var clickY, clickX;
	var _t = '';
	$('.game').on({
		mousemove: function (e) {
			clicked && update_scroll_pos(e);
			//handle_mouse(e);
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
	var x, y;
	function handle_mouse(e) {
		if (x && y) {
			window.scrollBy(e.clientX - x, e.clientY - y);
		}
		x = e.clientX;
		y = e.clientY;
	}
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
	$('.ui').on('click', '.console .down', function () {
		$('.console .contents').scrollTo('+=97px', 500);
	}).on('click', '.console .up', function () {
		$('.console .contents').scrollTo('-=97px', 500);
	}).on('click', '.cityavatar', function () {
		self.open_panel(civitas.PANEL_COUNCIL);
		return false;
	}).on('click', 'a[data-action=panel]', function () {
		var panel = $(this).data('panel').toUpperCase();
		if (typeof civitas['PANEL_' + panel] !== 'undefined') {
			self.open_panel(civitas['PANEL_' + panel]);
		}
		return false;
	});
	return this;
};

/**
 * Get the panels open in the game.
 * 
 * @public
 * @returns {Array}
 */
civitas.game.prototype.get_panels = function() {
	return this.panels;
};

/**
 * Open a UI panel.
 *
 * @public
 * @param {Object} panel_data
 * @param {Object} extra_data
 * @returns {civitas.controls.panel}
 */
civitas.game.prototype.open_panel = function(panel_data, extra_data) {
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
civitas.game.prototype.open_window = function(window_data, extra_data) {
	window_data.core = this;
	if (typeof extra_data !== 'undefined') {
		window_data.data = extra_data;
	}
	return new civitas.controls.window(window_data);
};

/**
 * Open a modal window (usually to ask for confirmations).
 *
 * @public
 * @param {Function} callback
 * @param {String} text
 * @param {String} title
 * @returns {civitas.game}
 */
civitas.game.prototype.open_modal = function(callback, text, title) {
	if (this.modal === null) {
		this.modal = new civitas.controls.modal({
			core: this
		});
	}
	this.modal.alert({
		title: typeof title !== 'undefined' ? title : 'City Council',
		text: text,
		on_click: callback
	});
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
civitas.game.prototype.log = function (message, error) {
	if ($('.ui .console .contents div').length > 1000) {
		$('.ui .console .contents').empty();
	}
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
civitas.game.prototype.console_log = function (message, error) {
	if (civitas.DEBUG === true) {
		console.log((typeof error === true ? 'APP error: ' : 'APP message: ') + message);
	}
	return this;
};

/**
 * Set the game queue.
 *
 * @public
 * @param {Array} value
 * @returns {civitas.game}
 */
civitas.game.prototype.set_queue = function(value) {
	this.queue = value;
	return this;
};

/**
 * Return the game queue.
 *
 * @public
 * @returns {Array}
 */
civitas.game.prototype.get_queue = function() {
	return this.queue;
};

/**
 * Advance the game queue.
 *
 * @public
 * @returns {civitas.game}
 */
civitas.game.prototype.advance_queue = function() {
	for (var i = 0; i < this.queue.length; i++) {
		if (this.queue[i].passed === this.queue[i].duration - 1) {
			this.process_action(i);
		} else {
			this.queue[i].passed++;
		}
	}
	return this;
};

/**
 * Process an action from the game queue.
 *
 * @public
 * @param {Number} id
 * @returns {civitas.game}
 */
civitas.game.prototype.process_action = function(id) {
	var campaign = this.queue[id];
	var failed = true;
	var settlement = this.get_settlement(campaign.source.id);
	var destination_settlement = this.get_settlement(campaign.destination.id);
	if (campaign.mode === civitas.ACTION_CAMPAIGN) {
		var random = Math.ceil(Math.random() * 100);
		var class_name = '';
		var amount = Math.floor(campaign.data.espionage / 100);
		if (settlement.is_player()) {
			if (campaign.type === civitas.CAMPAIGN_ARMY && !settlement.can_recruit_soldiers()) {
				this.remove_action(id);
				return false;
			}
			if (campaign.type === civitas.CAMPAIGN_SPY && !settlement.can_diplomacy()) {
				this.remove_action(id);
				return false;
			}
			if (campaign.type === civitas.CAMPAIGN_CARAVAN && !settlement.can_trade()) {
				this.remove_action(id);
				return false;
			}
		}
		if (campaign.type === civitas.CAMPAIGN_ARMY) {
			class_name = 'army';
		} else if (campaign.type === civitas.CAMPAIGN_CARAVAN) {
			class_name = 'caravan';
		} else if (campaign.type === civitas.CAMPAIGN_SPY) {
			class_name = 'spy';
		}
		switch (campaign.type) {
			case civitas.CAMPAIGN_ARMY:
				var source_army = settlement.get_army_total();
				var destination_army = destination_settlement.get_army_total();
				var diff1 = source_army.attack - destination_army.defense;
				var diff2 = source_army.defense - destination_army.attack;
				// TODO
				//console.log(diff1 + '=' + diff2);
				break;
			case civitas.CAMPAIGN_SPY:
				if (typeof campaign.data.espionage !== 'undefined') {
					switch (campaign.data.mission) {
						case civitas.SPY_MISSION_RELIGION:
							if (random <= Math.ceil(campaign.data.espionage / civitas.MAX_ESPIONAGE_SUCESS_RATE)) {
								if (campaign.source.id === settlement.id()) {
									destination_settlement.religion(campaign.data.religion);
									var religion = destination_settlement.religion();
									this.notify('The spy you sent ' + campaign.duration + ' days ago to ' + destination_settlement.name() + ' reached its destination and managed to convince the settlement council to change the religion to ' + religion.name + '.');
								} else if (campaign.destination.id === settlement.id()) {
									destination_settlement = this.get_settlement(campaign.source.id);
									settlement.religion(campaign.data.religio);
									var religion = settlement.religion();
									this.notify('The spy sent by ' + destination_settlement.name() + ' ' + campaign.duration + ' days ago to our city reached its destination and managed to convince your city council to change the religion to ' + religion.name + '.');
								}
								failed = false;
							}
							break;
						case civitas.SPY_MISSION_INFLUENCE:
							if (random <= Math.ceil(campaign.data.espionage / civitas.MAX_ESPIONAGE_SUCESS_RATE)) {
								if (campaign.source.id === settlement.id()) {
									settlement.raise_influence(campaign.destination.id, amount);
									this.notify('The spy you sent ' + campaign.duration + ' days ago to ' + destination_settlement.name() + ' reached its destination and increased your influence over this settlement.');
								} else if (campaign.destination.id === settlement.id()) {
									destination_settlement = this.get_settlement(campaign.source.id);
									// TODO
									//destination_settlement.raise_influence(campaign.destination.id, amount);
									this.notify('The spy sent by ' + destination_settlement.name() + ' ' + campaign.duration + ' days ago to our city reached its destination and lowered your influence over this settlement.');
								}
								failed = false;
							}
							break;
						case civitas.SPY_MISSION_STEAL_RESOURCES:
							if (random <= Math.ceil(campaign.data.espionage / civitas.MAX_ESPIONAGE_SUCESS_RATE)) {
								// TODO
								failed = false;
							}
							break;
						case civitas.SPY_MISSION_INSTIGATE:
							if (random <= Math.ceil(campaign.data.espionage / civitas.MAX_ESPIONAGE_SUCESS_RATE)) {
								if (campaign.source.id === settlement.id()) {
									destination_settlement.lower_prestige(amount);
									this.notify('The spy you sent ' + campaign.duration + ' days ago to ' + destination_settlement.name() + ' reached its destination and incited the population to revolt, therefore lowering the prestige of the city.');
								} else if (campaign.destination.id === settlement.id()) {
									destination_settlement = this.get_settlement(campaign.source.id);
									settlement.lower_prestige(amount);
									this.notify('The spy sent by ' + destination_settlement.name() + ' ' + campaign.duration + ' days ago to our city reached its destination and incited our population to revolt, therefore lowering the prestige of our city.');
								}
								failed = false;
							}
							break;
					}
				}
				break;
			case civitas.CAMPAIGN_CARAVAN:
				var total = 0;
				if (typeof campaign.data.resources !== 'undefined') {
					for (var item in campaign.data.resources) {
						if ($.inArray(item, civitas.NON_RESOURCES) === -1) {
							total += civitas.utils.calc_price(campaign.data.resources[item], item);
						} else if (item === 'coins') {
							total += campaign.data.resources[item];
						}
						destination_settlement.add_to_storage(item, campaign.data.resources[item]);
					}
					settlement.raise_influence(campaign.destination.id, civitas.CARAVAN_INFLUENCE);
				}
				break;
		}
		if (failed === true) {
			if (campaign.source.id === settlement.id()) {
				this.notify('The ' + class_name + ' you sent ' + campaign.duration + ' days ago to ' + destination_settlement.name() + ' reached its destination.');
			} else if (campaign.destination.id === settlement.id()) {
				destination_settlement = this.get_settlement(campaign.source.id);
				this.notify('The ' + class_name + ' sent by ' + destination_settlement.name() + ' ' + campaign.duration + ' days ago reached our city.');
			}
		}
	} else if (campaign.mode === civitas.ACTION_DIPLOMACY) {
		if (settlement.is_player() && !settlement.can_diplomacy()) {
			this.remove_action(id);
			return false;
		}
		switch (campaign.type) {
			case civitas.DIPLOMACY_PROPOSE_PACT:
				settlement.diplomacy(destination_settlement, civitas.DIPLOMACY_PACT);
				//failed = false;
				break;
			case civitas.DIPLOMACY_PROPOSE_ALLIANCE:
				settlement.diplomacy(destination_settlement, civitas.DIPLOMACY_ALLIANCE);
				//failed = false;
				break;
			case civitas.DIPLOMACY_PROPOSE_CEASE_FIRE:
				settlement.diplomacy(destination_settlement, civitas.DIPLOMACY_CEASE_FIRE);
				//failed = false;
				break;
			case civitas.DIPLOMACY_PROPOSE_JOIN:
				settlement.diplomacy(destination_settlement, civitas.DIPLOMACY_VASSAL);
				//failed = false;
				break;
		}
		if (failed === true) {
			if (campaign.source.id === settlement.id()) {
				this.notify('The proposal you sent ' + campaign.duration + ' days ago to ' + destination_settlement.name() + ' was accepted.');
			}
		}
	}
	this.remove_action(id);
	return this;
};

/**
 * Add a campaign to the game queue.
 *
 * @public
 * @param {civitas.objects.settlement} source_settlement
 * @param {civitas.objects.settlement} destination_settlement
 * @param {Number} mode
 * @param {Number} type
 * @param {Object} data
 * @returns {Object}
 */
civitas.game.prototype.add_to_queue = function(source_settlement, destination_settlement, mode, type, data) {
	var class_name = '';
	if (source_settlement.id() === this.get_settlement().id()) {
		var s_loc = civitas['SETTLEMENT_LOCATION_' + source_settlement.climate().name.toUpperCase()];
	} else {
		var s_loc = civitas.SETTLEMENTS[source_settlement.id()].location;
	}
	if (destination_settlement.id() === this.get_settlement().id()) {
		var d_loc = civitas['SETTLEMENT_LOCATION_' + destination_settlement.climate().name.toUpperCase()];
	} else {
		var d_loc = civitas.SETTLEMENTS[destination_settlement.id()].location;
	}
	var duration = civitas.utils.get_distance_in_days(s_loc, d_loc);
	if (mode === civitas.ACTION_CAMPAIGN) {
		if (type === civitas.CAMPAIGN_ARMY) {
			if (!source_settlement.can_recruit_soldiers()) {
				return false;
			}
			class_name = 'army';
			var army = source_settlement.get_army_total();
			var navy = source_settlement.get_navy_total();
			var mission_costs = civitas.ARMY_COSTS;
			for (var item in mission_costs) {
				if (item === 'coins') {
					mission_costs[item] = civitas.ARMY_COSTS[item] * duration;
				} else if (item === 'provisions') {
					mission_costs[item] = Math.ceil((civitas.ARMY_COSTS[item] * duration) / 2);
				}
			}
			var merged = $.extend({}, data.resources);
			for (var prop in mission_costs) {
				if (merged[prop]) {
					merged[prop] += mission_costs[prop];
				} else {
					merged[prop] = mission_costs[prop];
				}
			}
			if (!source_settlement.remove_resources(merged)) {
				return false;
			}
			for (var item in army.army) {
				if (army.army[item] - data.army[item] < 0) {
					return false;
				}
			}
			for (var item in navy.navy) {
				if (navy.navy[item] - data.navy[item] < 0) {
					return false;
				}
			}
			for (var item in army.army) {
				army.army[item] = army.army[item] - data.army[item];
			}
			for (var item in navy.navy) {
				navy.navy[item] = navy.navy[item] - data.navy[item];
			}
			var settlement_type = destination_settlement.get_type();
			source_settlement.diplomacy(destination_settlement.id(), civitas.DIPLOMACY_WAR);
		} else if (type === civitas.CAMPAIGN_SPY) {
			if (!source_settlement.can_diplomacy()) {
				return false;
			}
			class_name = 'spy';
			if (data.espionage > source_settlement.espionage()) {
				return false;
			}
			var mission_costs = civitas.SPY_COSTS;
			for (var item in mission_costs) {
				if (item === 'coins') {
					mission_costs[item] = civitas.SPY_COSTS[item] * duration;
				} else if (item === 'provisions') {
					mission_costs[item] = Math.ceil((civitas.SPY_COSTS[item] * duration) / 2);
				}
			}
			if (!source_settlement.remove_resources(mission_costs)) {
				return false;
			}
			source_settlement.lower_espionage(data.espionage);
			if (data.mission === civitas.SPY_MISSION_RELIGION) {
				source_settlement.reset_faith();
			}
		} else if (type === civitas.CAMPAIGN_CARAVAN) {
			if (!source_settlement.can_trade()) {
				return false;
			}
			class_name = 'caravan';
			var mission_costs = civitas.CARAVAN_COSTS;
			for (var item in mission_costs) {
				if (item === 'coins') {
					mission_costs[item] = civitas.CARAVAN_COSTS[item] * duration;
				} else if (item === 'provisions') {
					mission_costs[item] = Math.ceil((civitas.CARAVAN_COSTS[item] * duration) / 2);
				}
			}
			var merged = $.extend({}, data.resources);
			for (var prop in mission_costs) {
				if (merged[prop]) {
					merged[prop] += mission_costs[prop];
				} else {
					merged[prop] = mission_costs[prop];
				}
			}
			if (!source_settlement.remove_resources(merged)) {
				return false;
			}
		}
		if (source_settlement.id() === this.get_settlement().id()) {
			this.notify('Your ' + class_name + ' was dispatched towards ' + destination_settlement.name() + ' and will reach its destination in ' + duration + ' days.');
		}
	} else if (mode === civitas.ACTION_DIPLOMACY) {
		duration = Math.ceil(duration / 2);
		if (source_settlement.id() === this.get_settlement().id()) {
			this.notify('Your proposal was dispatched towards ' + destination_settlement.name() + ' and will reach its destination in ' + duration + ' days.');
		}
	}
	var action = {
		mode: mode,
		source: {
			x: s_loc.x,
			y: s_loc.y,
			id: source_settlement.id()
		},
		destination: {
			x: d_loc.x,
			y: d_loc.y,
			id: destination_settlement.id()
		},
		duration: duration,
		passed: 0,
		type: type,
		data: data
	};
	this.queue.push(action);
	this.save_and_refresh();
	return action;
};

/**
 * Remove an action from the game queue.
 *
 * @public
 * @param {Number} id
 * @returns {civitas.game}
 */
civitas.game.prototype.remove_action = function(id) {
	var panel;
	if (panel = this.get_panel('campaign')) {
		panel.destroy();
	}
	this.queue.splice(id, 1);
	return this;
};

/**
 * Check for any achievements completion.
 *
 * @public
 * @returns {civitas.game}
 */
civitas.game.prototype.check_achievements = function() {
	var achievement;
	var condition;
	var settlement = this.get_settlement();
	for (var i = 0; i < civitas.ACHIEVEMENTS.length; i++) {
		achievement = civitas.ACHIEVEMENTS[i];
		if (!this.has_achievement(i)) {
			for (var cond_item in achievement.conditions) {
				condition = achievement.conditions[cond_item];
				if (cond_item === 'settlement_level') {
					if (settlement.level() === condition) {
						this.achievement(i, achievement);
					}
				}
				if (cond_item === 'soldiers') {
					var army = settlement.get_army_total();
					if (army.total >= condition) {
						this.achievement(i, achievement);
					}
				}
				if (cond_item === 'ships') {
					var navy = settlement.get_navy_total();
					if (navy.total >= condition) {
						this.achievement(i, achievement);
					}
				}
				if (cond_item === 'population') {
					if (settlement.population() >= condition) {
						this.achievement(i, achievement);
					}
				}
				if (cond_item === 'buildings') {
					for (var item in condition) {
						var good = true;
						if (!settlement.is_building_built(item, condition[item])) {
							good = false;
							break;
						}
					}
					if (good === true) {
						this.achievement(i, achievement);
					}
				}
				if (cond_item === 'resources') {
					var good = true;
					for (var item in condition) {
						var amount = settlement.resources[item];
						if (amount < condition[item]) {
							good = false;
							break;
						}
					}
					if (good === true) {
						this.achievement(i, achievement);
					}
				}
				if (cond_item === 'storage') {
					if (condition === 0) {
						if (!settlement.has_storage_space()) {
							this.achievement(i, achievement);
						}
					}
				}
				if (cond_item === 'achievements') {
					if (condition === this.achievements.length) {
						this.achievement(i, achievement);
					}
				}
				if (cond_item === 'mercenary') {
					var merc = settlement.mercenary();
					if (merc.length >= condition) {
						this.achievement(i, achievement);
					}
				}
				if (cond_item === 'diplomacy') {
					var queue_actions = this.get_queue();
					for (var m = 0; m < queue_actions.length; m++) {
						for (var item in condition) {
							if ((item === 'spy' && queue_actions[m].mode === civitas.ACTION_CAMPAIGN && queue_actions[m].type === civitas.CAMPAIGN_SPY) ||
								(item === 'caravan' && queue_actions[m].mode === civitas.ACTION_CAMPAIGN && queue_actions[m].type === civitas.CAMPAIGN_CARAVAN) ||
								(item === 'army' && queue_actions[m].mode === civitas.ACTION_CAMPAIGN && queue_actions[m].type === civitas.CAMPAIGN_ARMY) ||
								(item === 'war' && queue_actions[m].mode === civitas.ACTION_DIPLOMACY && queue_actions[m].type === civitas.DIPLOMACY_WAR) ||
								(item === 'pact' && queue_actions[m].mode === civitas.ACTION_DIPLOMACY && queue_actions[m].type === civitas.DIPLOMACY_PACT) ||
								(item === 'alliance' && queue_actions[m].mode === civitas.ACTION_DIPLOMACY && queue_actions[m].type === civitas.DIPLOMACY_ALLIANCE) ||
								(item === 'join' && queue_actions[m].mode === civitas.ACTION_DIPLOMACY && queue_actions[m].type === civitas.DIPLOMACY_JOIN))
							{
								this.achievement(i, achievement);
							}
						}
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
 * @param {Number} id
 * @returns {civitas.game}
 */
civitas.game.prototype.achievement = function (id, achievement) {
	this.achievements.push({
		id: id,
		date: + new Date()
	});
	this._notify({
		title: 'Achievement Completed',
		mode: civitas.NOTIFY_ACHIEVEMENT,
		content: achievement.description,
		timeout: false
	});
	return this;
};

/**
 * Check if the current player has the achievement specified by its id.
 *
 * @public
 * @param {Number} id
 * @returns {Object|Boolean}
 */
civitas.game.prototype.has_achievement = function(id) {
	for (var i = 0; i < this.achievements.length; i++) {
		if (this.achievements[i].id === id) {
			return this.achievements[i];
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
civitas.game.prototype.set_achievements = function(value) {
	this.achievements = value;
	return this;
};

/**
 * Return the completed achievements.
 *
 * @public
 * @returns {Array}
 */
civitas.game.prototype.get_achievements = function() {
	return this.achievements;
};

/**
 * Settlement panel data.
 *
 * @type {Object}
 */
civitas.PANEL_SETTLEMENT = {
	template: '' +
		'<div id="panel-{ID}" class="panel">' +
			'<header>' +
				'<a class="tips close" title="' + civitas.l('Close') + '"></a>' +
			'</header>' +
			'<section></section>' +
			'<footer>' +
				'<a class="tips attack" title="' + civitas.l('Attack this settlement.') + '" href="#"></a>' +
				'<a class="tips caravan" title="' + civitas.l('Send a caravan to this settlement.') + '" href="#"></a>' +
				'<a class="tips spy" title="' + civitas.l('Send a spy to this settlement.') + '" href="#"></a>' +
				'<a class="tips alliance" title="' + civitas.l('Propose an alliance to this settlement.') + '" href="#"></a>' +
				'<a class="tips pact" title="' + civitas.l('Propose a pact to this settlement.') + '" href="#"></a>' +
				'<a class="tips ceasefire" title="' + civitas.l('Propose a cease fire to this settlement.') + '" href="#"></a>' +
				'<a class="tips join" title="' + civitas.l('Ask this settlement to join your city.') + '" href="#"></a>' +
				'<a class="tips war" title="' + civitas.l('Declare war to this settlement.') + '" href="#"></a>' +
			'</footer>' +
		'</div>',
	params_data: null,
	id: 'settlement',
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
		var my_settlement = core.get_settlement();
		var settlement = params.data;
		var settlement_type = settlement.get_type();
		this.params_data = params;
		var trades = settlement.get_trades();
		var location = civitas['SETTLEMENT_LOCATION_' + my_settlement.climate().name.toUpperCase()];
		$(this.handle + ' header').append((settlement.is_city() ? civitas.l('City of') + ' ' : civitas.l('Village of') + ' ') + settlement.name());
		if (settlement.is_city()) {
			$(this.handle + ' section').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Army'), civitas.l('Navy'), civitas.l('Resources'), civitas.l('Imports'), civitas.l('Exports')]));
		} else {
			$(this.handle + ' section').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Army'), civitas.l('Navy'), civitas.l('Resources')]));
		}
		$(this.handle).on('click', '.alliance', function () {
			if (!my_settlement.can_diplomacy()) {
				core.error(civitas.l('You will need to construct an Embassy before being able to propose an alliance to other settlements.'));
				return false;
			}
			core.open_modal(
				function(button) {
					if (button === 'yes') {
						if (!core.add_to_queue(my_settlement, settlement, civitas.ACTION_DIPLOMACY, civitas.DIPLOMACY_PROPOSE_ALLIANCE, {})) {
							core.error(civitas.l('There was an error proposing an alliance to this settlement, check the data you entered and try again.'));
						}
					}
				},
				'Are you sure you want to propose an alliance to this settlement?'
			);
			return false;
		}).on('click', '.join', function () {
			if (!my_settlement.can_diplomacy()) {
				core.error(civitas.l('You will need to construct an Embassy before being able to ask other settlements to join your city.'));
				return false;
			}
			core.open_modal(
				function(button) {
					if (button === 'yes') {
						if (!core.add_to_queue(my_settlement, settlement, civitas.ACTION_DIPLOMACY, civitas.DIPLOMACY_PROPOSE_JOIN, {})) {
							core.error(civitas.l('There was an error proposing this settlement to join your city, check the data you entered and try again.'));
						}
					}
				},
				'Are you sure you want to propose this this settlement to join you?'
			);
			return false;
		}).on('click', '.pact', function () {
			if (!my_settlement.can_diplomacy()) {
				core.error(civitas.l('You will need to construct an Embassy before being able to propose a pact to other settlements.'));
				return false;
			}
			core.open_modal(
				function(button) {
					if (button === 'yes') {
						if (!core.add_to_queue(my_settlement, settlement, civitas.ACTION_DIPLOMACY, civitas.DIPLOMACY_PROPOSE_PACT, {})) {
							core.error(civitas.l('There was an error proposing a pact to this settlement, check the data you entered and try again.'));
						}
					}
				},
				'Are you sure you want to propose a pact to this settlement?'
			);
			return false;
		}).on('click', '.ceasefire', function () {
			if (!my_settlement.can_diplomacy()) {
				core.error(civitas.l('You will need to construct an Embassy before being able to propose a cease fire to other settlements.'));
				return false;
			}
			core.open_modal(
				function(button) {
					if (button === 'yes') {
						if (!core.add_to_queue(my_settlement, settlement, civitas.ACTION_DIPLOMACY, civitas.DIPLOMACY_PROPOSE_CEASE_FIRE, {})) {
							core.error(civitas.l('There was an error proposing a cease fire to this settlement, check the data you entered and try again.'));
						}
					}
				},
				'Are you sure you want to propose a cease fire to this settlement?'
			);
			return false;
		}).on('click', '.war', function () {
			if (!my_settlement.can_diplomacy()) {
				core.error(civitas.l('You will need to construct an Embassy before being able to declare war to other settlements.'));
				return false;
			}
			core.open_modal(
				function(button) {
					if (button === 'yes') {
						my_settlement.diplomacy(settlement.id(), civitas.DIPLOMACY_WAR);
					}
				},
				'Are you sure you want to declare war to this settlement?<br /><br />You will lose all influence over ' + settlement.name() + ' and the settlement might retaliate back!'
			);
			return false;
		}).on('click', '.caravan', function () {
			if (!my_settlement.can_trade()) {
				core.error(civitas.l('You will need to construct a Trading Post before being able to trade resources with other settlements.'));
				return false;
			}
			core.open_panel(civitas.PANEL_NEW_CARAVAN, settlement);
			return false;
		}).on('click', '.spy', function () {
			if (!my_settlement.can_diplomacy()) {
				core.error(civitas.l('You will need to construct an Embassy before being able to send spies to other settlements.'));
				return false;
			}
			core.open_panel(civitas.PANEL_NEW_SPY, settlement);
			return false;
		}).on('click', '.attack', function () {
			if (!my_settlement.can_recruit_soldiers()) {
				core.error(civitas.l('You will need to construct a Military Camp before being able to attack other settlements.'));
				return false;
			}
			core.open_panel(civitas.PANEL_NEW_ARMY, settlement);
			return false;
		});
	},
	on_refresh: function() {
		var self = this;
		var core = this.get_core();
		var my_settlement = core.get_settlement();
		var settlement = this.params_data.data;
		var settlement_type = settlement.get_type();
		var trades = settlement.get_trades();
		var _status = my_settlement.get_diplomacy_status(settlement.id());
		var location = civitas['SETTLEMENT_LOCATION_' + my_settlement.climate().name.toUpperCase()];
		$(this.handle + ' #tab-info').empty().append('' +
			'<img class="avatar" src="' + civitas.ASSETS_URL + 'images/avatars/avatar' + settlement.ruler().avatar + '.png" />' +
			'<dl>' +
				'<dt>' + settlement.ruler().title + '</dt><dd>' + settlement.ruler().name + '</dd>' +
				'<dt>' + civitas.l('Climate') + '</dt><dd>' + settlement.climate().name + '</dd>' +
				'<dt>' + civitas.l('Personality') + '</dt><dd>' + settlement.personality().name + '</dd>' +
				'<dt>' + civitas.l('Nationality') + '</dt><dd>' + settlement.nationality().name + '</dd>' +
				(settlement.is_city() ? 
				'<dt>' + civitas.l('Level') + '</dt><dd>' + settlement.level() + '</dd>' +
				'<dt>' + civitas.l('Prestige') + '</dt><dd>' + civitas.ui.progress((settlement.prestige() * 100) / civitas.MAX_PRESTIGE_VALUE, 'small', settlement.prestige()) + '</dd>' 
				: '' ) + 
				'<dt>' + civitas.l('Coins') + '</dt><dd>' + civitas.utils.nice_numbers(settlement.coins()) + '</dd>' +
				'<dt>' + civitas.l('Population') + '</dt><dd>' + civitas.utils.nice_numbers(settlement.population()) + '</dd>' +
				'<dt>' + civitas.l('Religion') + '</dt><dd>' + settlement.religion().name + '</dd>' +
				'<dt>' + civitas.l('Influence') + '</dt><dd>' + civitas.ui.progress(my_settlement.get_influence_with_settlement(settlement.id()), 'small') + '</dd>' +
				'<dt>' + civitas.l('Diplomatic Status') + '</dt><dd>' + my_settlement.get_diplomacy_status(settlement.id()).name + '</dd>' +
				'<dt>' + civitas.l('Distance') + '</dt><dd>' + civitas.utils.get_distance(location, civitas.SETTLEMENTS[settlement.id()].location) + ' miles (' + civitas.utils.get_distance_in_days(location, civitas.SETTLEMENTS[settlement.id()].location) + ' days)</dd>' +
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
		var out = '<p>' + civitas.l('This settlement has the the following resources:') + '</p>';
		for (var item in settlement.get_resources()) {
			if ($.inArray(item, civitas.NON_RESOURCES) === -1 && settlement.resources[item] > 0) {
				out += civitas.ui.resource_storage_small_el(item, settlement.resources[item]);
			}
		}
		if (_status.id === civitas.DIPLOMACY_VASSAL) {
			$(this.handle + ' .btn.attack, ' + this.handle + ' .btn.spy').hide();
		} else {
			$(this.handle + ' .btn.attack, ' + this.handle + ' .btn.spy').show();
		}
		$(this.handle + ' #tab-resources').empty().append(out);
		if (my_settlement.can_diplomacy()) {
			if (_status.id === civitas.DIPLOMACY_PACT && settlement_type === civitas.CITY) {
				$(this.handle + ' footer .alliance').show();
			} else {
				$(this.handle + ' footer .alliance').hide();
			}
			if (_status.id === civitas.DIPLOMACY_TRUCE || _status.id === civitas.DIPLOMACY_CEASE_FIRE) {
				$(this.handle + ' footer .pact').show();
			} else {
				$(this.handle + ' footer .pact').hide();
			}
			if (_status.id === civitas.DIPLOMACY_WAR) {
				$(this.handle + ' footer .ceasefire').show();
			} else {
				$(this.handle + ' footer .ceasefire').hide();
			}
			if (_status.id !== civitas.DIPLOMACY_WAR && _status.id !== civitas.DIPLOMACY_VASSAL) {
				$(this.handle + ' footer .war').show();
			} else {
				$(this.handle + ' footer .war').hide();
			}
			if (_status.id === civitas.DIPLOMACY_PACT && settlement_type === civitas.VILLAGE) {
				$(this.handle + ' footer .join').show();
			} else {
				$(this.handle + ' footer .join').hide();
			}
		}
	}
};

/**
 * Help panel data.
 *
 * @type {Object}
 */
civitas.PANEL_HELP = {
	template: civitas.ui.generic_panel_template(),
	id: 'help',
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
		var settlement = core.get_settlement();
		$(this.handle + ' section').append(civitas.ui.tabs([civitas.l('About'), civitas.l('Buildings'), civitas.l('Settlements'), civitas.l('Religion'), civitas.l('Research'), civitas.l('Cheats')]));
		$(this.handle + ' header').append(civitas.l('Help'));
		$(this.handle + ' #tab-buildings').empty().append(
			'<fieldset>' +
				'<legend>Table of Contents</legend>' +
				'<ul>' +
					'<li><a href="#">Intro</a></li>' +
					'<li><a href="#">Build</a></li>' +
					'<li><a href="#">Upgrade</a></li>' +
					'<li><a href="#">Demolish</a></li>' +
					'<li><a href="#">Production</a></li>' +
					'<li><a href="#">Housing</a></li>' +
					'<li><a href="#">Municipal</a></li>' +
					'<li><a href="#">Storage</a></li>' +
					'<li><a href="#">Coins</a></li>' +
				'</ul>' +
			'</fieldset>' +
			'<h3>Intro</h3>' +
			'<p>In Civitas, buildings are the backbone of your city, providing you with goods for export.</p>' +
			'<h3>Build</h3>' +
			'<p>Each building has some special requirements to build, whether a required city level or another existing building.</p>' +
			'<h3>Upgrade</h3>' +
			'<p>Upgrading one of your buildings has several benefits, besides the obvious estetic one.</p>' +
			'<img title="Level 1 house" class="tips" src="' + civitas.ASSETS_URL + 'images/buildings/house1.png" /> ' +
			'<img title="Level 3 house" class="tips" src="' + civitas.ASSETS_URL + 'images/buildings/house3.png" /> ' +
			'<img title="Maximum level house" class="tips" src="' + civitas.ASSETS_URL + 'images/buildings/house5.png" />' +
			'<p>Upgrading a building costs the initial building price multiplied by the level. So, if a building initially costs 100 ' + civitas.ui.resource_small_img('coins') + ' and 20 ' + civitas.ui.resource_small_img('wood') + ' to construct, upgrading it to level 2 will cost 200 ' + civitas.ui.resource_small_img('coins') + ' and 40 ' + civitas.ui.resource_small_img('wood') + ', so on.</p>' +
			'<p>When a building is upgraded, it produces the inital amount of goods multiplied by the level of the building. Keep in mind that the materials it uses for production are the same as for a building of level 1, so upgrading a building is an easy way of getting double (or triple) the production goods for the same materials as the previous level used.</p>' +
			'<h3>Demolish</h3>' +
			'<p>Demolishing a building has no actual benefits except it no longer used the production materials (a better way to adjust that will be to stop the production of the specific building, this way you can restart it when you want).</p>' +
			'<h3>Production</h3>' +
			'<p></p>' +
			'<h3>Housing</h3>' +
			'<p></p>' +
			'<h3>Municipal</h3>' +
			'<p></p>' +
			'<h3>Storage</h3>' +
			'<p>The goods you`re producing need a storage place inside your city, the initial Marketplace provides some storage space (100k <img src="' + civitas.ASSETS_URL + 'images/resources/storage_small.png" /> ), and it can be increased even further with upgrading, but you will need to build Warehouses to store all the goods. If you have no free storage space, the produced goods will be lost.</p>' +
			'<h3>Coins</h3>' +
			'<p>Your city can only gain coins through trades and taxes.</p>');
		$(this.handle + ' #tab-religion').empty().append('<h2>Religion</h2>' +
			'');
		$(this.handle + ' #tab-settlements').empty().append('<fieldset>' +
				'<legend>Table of Contents</legend>' +
				'<ul>' +
					'<li><a href="#">Intro</a></li>' +
					'<li><a href="#">Cities and villages</a></li>' +
					'<li><a href="#">Diplomacy</a></li>' +
					'<li><a href="#">Fame and levels</a></li>' +
					'<li><a href="#">Influence</a></li>' +
					'<li><a href="#">Espionage</a></li>' +
					'<li><a href="#">Prestige</a></li>' +
					'<li><a href="#">Pacts and alliances</a></li>' +
					'<li><a href="#">Wars</a></li>' +
					'<li><a href="#">Caravans</a></li>' +
				'</ul>' +
			'</fieldset>' +
			'<h3>Intro</h3>' +
			'<p></p>' +
			'<h3>Cities and villages</h3>' +
			'<p></p>' +
			'<h3>Diplomacy</h3>' +
			'<p></p>' +
			'<h3>Fame and levels</h3>' +
			'<p>Each time you reach a specific fame level, your city gets a new level, thus you never lose your initial fame. There are several ways of getting extra fame (besides your initial Marketplace), there are several municipal buildings that add a small amount of fame to your city each day (this amount can be increased by upgrading the buildings).</p>' +
			'<p>There is no fixed way in which you can lose fame, except the random events that occur from time to time, or if another city manages to incite your population to revolt.</p>' +
			'<p>The current maximum level a settlement can reach is <strong>' + civitas.MAX_SETTLEMENT_LEVEL + '</strong> and to reach that level your city will need <strong>' + civitas.utils.nice_numbers(civitas.LEVELS[civitas.MAX_SETTLEMENT_LEVEL - 1]) + '</strong> ' + civitas.ui.resource_small_img('fame') + '. There is no fixed date (in game or real days) to reach that level, it all depends on your decisions, buildings, diplomacy, etc.</p>' +
			'<h3>Influence</h3>' +
			'<p>All settlements in the game world have an influence rating with each of the other settlements. The influence drops over time (yearly) and needs to be kept above a certain level, else the other cities might attack your city.</p>' +
			'<p>Maximum influence a settlement can have is <strong>' + civitas.MAX_INFLUENCE_VALUE + '</strong>.</p>' +
			'<h3>Espionage</h3>' +
			'<p>After building your city Embassy, you can start assigning spies to other settlements using your accumulated espionage points. Depending on the amount of espionage you use for a spy mission, that mission has a rate of success. The most points you can assign are <strong>' + civitas.MAX_ESPIONAGE_VALUE + '</strong> ' + civitas.ui.resource_small_img('espionage') + ' (maximum espionage points a city can get) and this gives you approximately a <strong>' + (civitas.MAX_ESPIONAGE_VALUE / civitas.MAX_ESPIONAGE_SUCESS_RATE) + '%</strong> success rate.</p>' +
			'<h3>Prestige</h3>' +
			'<p>Prestige is a very important feature of your city because it influences the way other settlements see you and they will act upon that information. Low prestige might be good for your city if you plan to lay low and prepare (the other settlements won`t bother to go to war with a city with low prestige unless you manage somehow to piss them off) but usually, your city prestige should raise with the city level.</p>' +
			'<p>Prestige is gained through trading with other settlements, sending caravans with resources to help them when in need, etc. Random events can also affect your city prestige. The maximum prestige a settlement can get is <strong>' + civitas.MAX_PRESTIGE_VALUE + '</strong> ' + civitas.ui.resource_small_img('prestige') + '.</p>' +
			'<h3>Pacts and alliances</h3>' +
			'<p></p>' +
			'<h3>Wars</h3>' +
			'<p></p>' +
			'<h3>Caravans</h3>' +
			'<p></p>');
		$(this.handle + ' #tab-about').empty().append('<h2>About Civitas</h2>' +
			'<p>Civitas is an empire-building game written in Javascript with the help of the <a target="_blank" href="https://jquery.com">jQuery</a> library. All the development is done over <a target="_blank" href="https://github.com/sizeofcat/civitas">GitHub</a> and everybody can contribute.</p>' +
			'<p>Civitas is written by <a target="_blank" href="https://sizeof.cat">sizeof(cat)</a>, is free and distributed under the <a target="_blank" href="https://raw.githubusercontent.com/sizeofcat/civitas/master/LICENSE">MIT license</a>.</p>' +
			'<p>Big thanks to:</p>' +
			'<ul>' +
				'<li><a target="_blank" href="https://soundcloud.com/shantifax">Shantifax</a> for the music (Glandula Pinealis).</li>' +
				'<li><a target="_blank" href="https://brendaneich.com/">Brendan Eich</a> for Javascript.</li>' +
				'<li><a target="_blank" href="http://bluebyte.com">Blue Byte</a> for Anno 1404.</li>' +
			'</ul>');
		$(this.handle + ' #tab-research').empty().append('<h2>Research</h2>' +
			'');
		$(this.handle + ' #tab-diplomacy').empty().append('<h2>Diplomacy</h2>' +
			'');
		if (civitas.DEBUG === true) {
			$(this.handle + ' #tab-cheats').empty().append('<h2>Cheats</h2>' +
				'<div class="toolbar">' +
					'<a href="#" class="btn iblock thirteen">' + civitas.l('+1k coins') + '</a> ' +
					'<a href="#" class="btn iblock one">' + civitas.l('+10k coins') + '</a> ' +
					'<a href="#" class="btn iblock nine">' + civitas.l('+100k coins') + '</a> ' +
					'<a href="#" class="btn iblock eight">' + civitas.l('+1M coins') + '</a> <br /><br />' +
					'<a href="#" class="btn iblock two">' + civitas.l('+100 wood') + '</a> ' +
					'<a href="#" class="btn iblock three">' + civitas.l('+100 stones') + '</a> ' +
					'<a href="#" class="btn iblock thirty">' + civitas.l('+4 bread') + '</a> ' +
					'<a href="#" class="btn iblock fifteen">' + civitas.l('+1000 provisions') + '</a> ' +
					'<a href="#" class="btn iblock four">' + civitas.l('+100 wood planks') + '</a> <br /><br />' +
					'<a href="#" class="btn iblock five">' + civitas.l('level up') + '</a> ' +
					'<a href="#" class="btn iblock fourteen">' + civitas.l('+900 faith') + '</a> ' +
					'<a href="#" class="btn iblock six">' + civitas.l('+1000 fame') + '</a> ' +
					'<a href="#" class="btn iblock ten">' + civitas.l('+5000 fame') + '</a> <br /><br />' +
					'<a href="#" class="btn iblock seven">' + civitas.l('refresh trades') + '</a> <br /><br />' +
					'<a href="#" class="btn iblock eleven">' + civitas.l('random soldiers') + '</a> ' +
					'<a href="#" class="btn iblock twelve">' + civitas.l('random ships') + '</a> ' +
				'</div>');
			$(this.handle).on('click', '.eleven', function() {
				var army = settlement.get_army_total();
				for (var soldier in army.army) {
					army.army[soldier] = civitas.utils.get_random(1, 100);
				}
				core.save_and_refresh();
				return false;
			}).on('click', '.twelve', function() {
				var navy = settlement.get_navy_total();
				for (var ship in navy.navy) {
					navy.navy[ship] = civitas.utils.get_random(1, 10);
				}
				core.save_and_refresh();
				return false;
			}).on('click', '.fourteen', function() {
				settlement.raise_faith(900);
				core.save_and_refresh();
				return false;
			}).on('click', '.thirteen', function() {
				settlement.inc_coins(1000);
				core.save_and_refresh();
				return false;
			}).on('click', '.nine', function() {
				settlement.inc_coins(100000);
				core.save_and_refresh();
				return false;
			}).on('click', '.eight', function() {
				settlement.inc_coins(1000000);
				core.save_and_refresh();
				return false;
			}).on('click', '.one', function() {
				settlement.inc_coins(10000);
				core.save_and_refresh();
				return false;
			}).on('click', '.fifteen', function() {
				settlement.add_to_storage('provisions', 1000);
				core.save_and_refresh();
				return false;
			}).on('click', '.two', function() {
				settlement.add_to_storage('wood', 100);
				core.save_and_refresh();
				return false;
			}).on('click', '.thirty', function() {
				settlement.add_to_storage('bread', 4);
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
			}).on('click', '.ten', function() {
				settlement.raise_fame(5000);
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
	template: civitas.ui.building_panel_template(),
	id: 'building',
	on_refresh: function() {
		var building = this.get_core().get_settlement().get_building(this.params_data.handle);
		if (building) {
			$(this.handle + ' section').empty().append(civitas.ui.building_panel(this.params_data, building.get_level()));
		}
	}
};

/**
 * Campaign panel data.
 *
 * @type {Object}
 */
civitas.PANEL_CAMPAIGN = {
	template: civitas.ui.generic_panel_template(),
	params_data: null,
	id: 'campaign',
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
		var my_settlement = core.get_settlement();
		var campaign = params.data;
		var class_name = '';
		this.params_data = params;
		if (campaign.type === civitas.CAMPAIGN_ARMY) {
			class_name = 'army';
		} else if (campaign.type === civitas.CAMPAIGN_CARAVAN) {
			class_name = 'caravan';
		} else if (campaign.type === civitas.CAMPAIGN_SPY) {
			class_name = 'spy';
		}
		$(this.handle + ' header').append(class_name.capitalize() + ' ' + civitas.l('mission'));
		if (campaign.type === civitas.CAMPAIGN_ARMY) {
			$(this.handle + ' section').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Army'), civitas.l('Navy'), civitas.l('War Machines')]));
		} else if (campaign.type === civitas.CAMPAIGN_CARAVAN) {
			$(this.handle + ' section').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Resources')]));
		} else if (campaign.type === civitas.CAMPAIGN_SPY) {
			$(this.handle + ' section').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Spy')]));
		}
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
			'<img class="avatar" src="' + civitas.ASSETS_URL + 'images/avatars/avatar' + source.ruler().avatar + '.png" />' +
			'<dl>' +
				'<dt>' + civitas.l('Sent By') + '</dt><dd>' + source.name() + '</dd>' +
				'<dt>' + civitas.l('Destination') + '</dt><dd>' + destination.name() + '</dd>' +
				'<dt>-empty-</dt><dd>-test-</dd>' +
				'<dt>' + civitas.l('Distance') + '</dt><dd>' + distance + ' miles (' + campaign.duration + ' ' + civitas.l('days') + ')</dd>' +
				'<dt>' + civitas.l('Remaining') + '</dt><dd>' + (10 * (campaign.duration - campaign.passed)) + ' miles (' + (campaign.duration - campaign.passed) + ' ' + civitas.l('days') + ')</dd>' +
			'</dl>');
		if (campaign.type === civitas.CAMPAIGN_ARMY) {
			$(this.handle + ' #tab-army').empty().append(civitas.ui.army_list(campaign.data));
			$(this.handle + ' #tab-navy').empty().append(civitas.ui.navy_list(campaign.data));
			if (typeof campaign.data.resources !== 'undefined' && !$.isEmptyObject(campaign.data.resources)) {
				out = '<p>' + civitas.l('This army has the the following war machines:') + '</p>' +
				'<dl>';
				for (var item in campaign.data.resources) {
					out += '<dt>' + campaign.data.resources[item] + '</dt>' +
						'<dd>' + civitas.ui.resource_small_img(item) + '</dd>';
				}
				out += '</dl>';
			} else {
				out = '<p>' + civitas.l('This army has no war machines.') + '</p>';
			}
			$(this.handle + ' #tab-war-machines').empty().append(out);
		} else if (campaign.type === civitas.CAMPAIGN_CARAVAN) {
			if (typeof campaign.data.resources !== 'undefined' && !$.isEmptyObject(campaign.data.resources)) {
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
		} else if (campaign.type === civitas.CAMPAIGN_SPY) {
			out = '<dl>' +
				'<dt>' + civitas.l('Mission') + '</dt>' +
				'<dd>' + civitas.SPY_MISSIONS[campaign.data.mission].capitalize() + '</dd>' +
				(campaign.data.mission === civitas.SPY_MISSION_RELIGION ? '<dt>' + civitas.l('Religion') + '</dt>' +
				'<dd>' + civitas.RELIGIONS[campaign.data.religion].capitalize() + '</dd>' : '') +
				'<dt>' + civitas.l('Espionage') + '</dt>' +
				'<dd>' + campaign.data.espionage + ' ' + civitas.ui.resource_small_img('espionage') + '</dd>' +
				'<dt>' + civitas.l('Success chance') + '</dt>' +
				'<dd>' + Math.ceil(campaign.data.espionage / 100) + '%</dd>' +
			'</dl>';
			$(this.handle + ' #tab-spy').empty().append(out);
		}
	}
};

/**
 * Storage panel data.
 *
 * @type {Object}
 */
civitas.PANEL_STORAGE = {
	template: civitas.ui.generic_panel_template(civitas.l('City Storage')),
	expanded: false,
	id: 'storage',
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
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
		var storage_space = settlement.storage();
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
		$(this.handle + ' section').empty().append(out);
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
	template: civitas.ui.generic_panel_template(civitas.l('World Map')),
	id: 'world',
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
		var map = core.get_worldmap();
		$(this.handle + ' section').append('<div class="worldmap"></div>');
		$(this.handle + ' .worldmap').addClass('w' + map);
		$(this.handle).on('click', '.settlement', function () {
			var _settlement_name = $(this).data('name');
			if (_settlement_name === 'yoursettlement') {
				core.open_panel(civitas.PANEL_COUNCIL);
			} else {
				core.open_panel(civitas.PANEL_SETTLEMENT, core.get_settlement(_settlement_name));
			}
			return false;
		}).on('click', '.caravan, .army, .spy', function () {
			var _action_id = parseInt($(this).data('id'));
			if (core.queue[_action_id].mode === civitas.ACTION_CAMPAIGN) {
				core.open_panel(civitas.PANEL_CAMPAIGN, core.queue[_action_id]);
			}
			return false;
		});
	},
	on_refresh: function() {
		var self = this;
		var core = this.get_core();
		var settlement = core.get_settlement();
		var settlements = core.get_settlements();
		var queue_actions = core.get_queue();
		var class_name = '';
		var loc = civitas['SETTLEMENT_LOCATION_' + settlement.climate().name.toUpperCase()];
		var out = '<div data-name="yoursettlement" class="tips settlement c1" title="' + civitas.l('City of') + ' ' + settlement.name() + '" style="left:' + loc.x + 'px;top:' + loc.y + 'px"></div>';
		for (var i = 1; i < settlements.length; i++) {
			if (settlements[i].get_type() === civitas.CITY) {
				out += '<div data-name="' + settlements[i].name() + '" class="tips settlement c' + civitas.SETTLEMENTS[settlements[i].id()].icon + '" title="' + civitas.l('City of') + ' ' + settlements[i].name() + '" style="left:' + civitas.SETTLEMENTS[settlements[i].id()].location.x + 'px;top:' + civitas.SETTLEMENTS[settlements[i].id()].location.y + 'px"></div>';
			} else {
				out += '<div data-name="' + settlements[i].name() + '" class="tips settlement v1" title="' + civitas.l('Village of') + ' ' + settlements[i].name() + '" style="left:' + civitas.SETTLEMENTS[settlements[i].id()].location.x + 'px;top:' + civitas.SETTLEMENTS[settlements[i].id()].location.y + 'px"></div>';
			}
		}
		for (var i = 0; i < queue_actions.length; i++) {
			var action = queue_actions[i];
			if (action.type === civitas.CAMPAIGN_ARMY) {
				class_name = 'army';
			} else if (action.type === civitas.CAMPAIGN_CARAVAN) {
				class_name = 'caravan';
			} else if (action.type === civitas.CAMPAIGN_SPY) {
				class_name = 'spy';
			}
			var source = action.source;
			var destination = action.destination;
			var distance_in_days = civitas.utils.get_distance_in_days(source, destination);
			if (action.mode === civitas.ACTION_DIPLOMACY) {
				distance_in_days = distance_in_days / 2;
			}
			var _source = core.get_settlement(source.id);
			var _destination = core.get_settlement(destination.id)
			var x = source.x + Math.floor(((destination.x - source.x) / distance_in_days) * action.passed);
			var y = source.y - Math.floor(((source.y - destination.y) / distance_in_days) * action.passed);
			if (action.mode === civitas.ACTION_CAMPAIGN) {
				out += '<div data-id="' + i + '" class="tips ' + class_name + '" title="' + class_name.capitalize() + ' from ' + _source.name() + ' to ' + _destination.name() + '" style="left:' + x + 'px;top:' + y + 'px"></div>';
			} else if (action.mode === civitas.ACTION_DIPLOMACY) {
				out += '<div data-id="' + i + '" class="tips messenger" title="Diplomatic mission from ' + _source.name() + ' to ' + _destination.name() + '" style="left:' + x + 'px;top:' + y + 'px"></div>';
			}
		}
		$(this.handle + ' section .worldmap').empty().append(out);
	}
};

/**
 * Ranks panel data.
 *
 * @type {Object}
 */
civitas.PANEL_RANKS = {
	template: civitas.ui.generic_panel_template(civitas.l('World Rankings')),
	id: 'ranks',
	on_show: function(params) {
		$(this.handle + ' section').append('<div class="ranks-list"></div>');
	},
	on_refresh: function() {
		var ranking_list = [];
		var settlements = this.get_core().get_settlements();
		for (var i = 0; i < settlements.length; i++) {
			if (settlements[i].get_type() === civitas.CITY) {
				ranking_list.push({
					name: settlements[i].name(),
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
 * Create a new army panel data.
 *
 * @type {Object}
 */
civitas.PANEL_NEW_ARMY = {
	template: '' +
		'<div id="panel-{ID}" class="panel">' +
			'<header>' + civitas.l('Create army') +
				'<a class="tips close" title="' + civitas.l('Close') + '"></a>' +
			'</header>' +
			'<section></section>' +
			'<div class="toolbar clearfix">' +
				'<a class="dispatch btn iblock" href="#">' + civitas.l('Dispatch') + '</a>' +
			'</div>' +
		'</div>',
	id: 'new-army',
	on_show: function(params) {
		this.resources = {};
		var self = this;
		var core = this.get_core();
		var my_settlement = core.get_settlement();
		var settlement = params.data;
		var settlements = core.get_settlements();
		var army = my_settlement.get_army_total();
		var location = civitas['SETTLEMENT_LOCATION_' + my_settlement.climate().name.toUpperCase()];
		var distance = civitas.utils.get_distance_in_days(location, civitas.SETTLEMENTS[settlement.id()].location);
		this.assigned_army = {};
		this.assigned_navy = {};
		for (var item in army.army) {
			this.assigned_army[item] = army.army[item];
		}
		var navy = my_settlement.get_navy_total();
		for (var item in navy.navy) {
			this.assigned_navy[item] = navy.navy[item];
		}
		var _t = '<div class="column">' +
			'<fieldset>' +
				'<legend>' + civitas.l('Initial costs') + '</legend>' +
				'<dl>';
		for (var item in civitas.ARMY_COSTS) {
			var _cost = 0;
			if (item === 'coins') {
				_cost = civitas.ARMY_COSTS[item] * distance;
			} else if (item === 'provisions') {
				_cost = Math.ceil((civitas.ARMY_COSTS[item] * distance) / 2);
			} else {
				_cost = civitas.ARMY_COSTS[item];
			}
			_t += '<dt>' + civitas.utils.nice_numbers(_cost) + '</dt>' +
				'<dd>' + civitas.ui.resource_small_img(item) + '</dd>';
		}
		_t += '</dl>' +
			'</fieldset>' +
			'<fieldset>' +
				'<legend>' + civitas.l('Soldiers') + '</legend>';
		for (var item in army.army) {
			_t += '<div class="army-item">' +
					'<a href="#" data-max="' + army.army[item] + '" data-soldier="' + item + '" class="army-item-inc">+</a>' +
					'<a href="#" data-max="' + army.army[item] + '" data-soldier="' + item + '" class="army-item-dec">-</a>' +
					'<img class="tips" title="' + item + '" src="' + civitas.ASSETS_URL + 'images/armies/' + item.toLowerCase().replace(/ /g,"_") + '.png" />' +
					'<span class="amount">' + army.army[item] + '</span>' +
				'</div>';
		}
		_t += '</fieldset>' +
		'<fieldset>' +
			'<legend>' + civitas.l('Destination') + '</legend>' +
			'<select class="army-destination">' +
				'<option value="0">-- ' + civitas.l('select') + ' --</option>';
		for (var i = 1; i < settlements.length; i++) {
			_t += '<option ' + (settlement && (settlements[i].id() === settlement.id()) ? 'selected ' : '') + 'value="' + settlements[i].id() + '">' + (settlements[i].is_city() ? civitas.l('City of') + ' ' : civitas.l('Village of') + ' ') + settlements[i].name() + '</option>';
		}
		_t += '</select>' +
			'</fieldset>' +
		'</div>' +
		'<div class="column">';
		if (my_settlement.can_build_ships()) {
			_t += '<fieldset>' +
					'<legend>' + civitas.l('Ships') + '</legend>';
			for (var item in navy.navy) {
				_t += '<div class="navy-item">' +
						'<a href="#" data-max="' + navy.navy[item] + '" data-ship="' + item + '" class="navy-item-inc">+</a>' +
						'<a href="#" data-max="' + navy.navy[item] + '" data-ship="' + item + '" class="navy-item-dec">-</a>' +
						'<img class="tips" title="' + item + '" src="' + civitas.ASSETS_URL + 'images/armies/' + item.toLowerCase().replace(/ /g,"_") + '.png" />' +
						'<span class="amount">' + navy.navy[item] + '</span>' +
					'</div>';
			}
			_t += '</fieldset>';
		}
		_t += '<fieldset class="select-combo">' +
			'<legend>' + civitas.l('War Machines') + '</legend>' +
			'<select class="army-resources-select">' +
				'<option value="0">-- ' + civitas.l('select') + ' --</option>';
		var resources = my_settlement.get_resources();
		for (var item in resources) {
			if ($.inArray(item, civitas.ARMY_RESOURCES) !== -1) {
				_t += '<option value="' + item + '"> ' + civitas.utils.get_resource_name(item) + '</option>';
			}
		}
		_t += '</select>' +
			'<input title="' + civitas.l('Add the resources to the list.') + '" type="button" class="tips army-resources-add" value="+" />' +
			'<input title="' + civitas.l('Amount of selected resource to add to the army.') + '" type="number" value="1" class="tips army-resources-amount" min="1" max="999" />' +
			'<div class="army-resources clearfix"></div>' +
		'</fieldset>';
		if (my_settlement.can_recruit_heroes()) {
			var heroes = my_settlement.get_heroes();
			_t += '<fieldset>' +
				'<legend>' + civitas.l('Hero') + '</legend>' +
				'<select class="army-hero">';
			if ($.isEmptyObject(heroes)) {
				_t += '<option value="0">-- ' + civitas.l('no heroes available') + ' --</option>';
			} else {
				_t += '<option value="0">-- ' + civitas.l('select') + ' --</option>';
				for (var item in heroes) {
					_t += '<option value="' + item + '">' + heroes[item] + '</option>';
				}
			}
			_t += '</select>' +
			'</fieldset>';
		} else {
			_t += '<p><strong>' + civitas.l('Note') + '!</strong> ' + civitas.l('Build a Tavern to be able to recruit powerful heroes and assign them to your armies.') + '</p>';		
		}
		_t += '</div>';
		$(this.handle + ' section').empty().append(_t);
		this.generate_table_data = function() {
			var _t = '<table class="army-resources clearfix">' +
				'<thead>' +
				'<tr>' +
				'<td>' + civitas.l('Amount') + '</td>' +
				'<td>' + civitas.l('Resource') + '</td>' +
				'<td></td>' +
				'</tr>' +
				'</thead>' +
				'<tbody>';
			for (var item in this.resources) {
				_t += '<tr>' +
					'<td>' + this.resources[item] + '</td>' +
					'<td>' + civitas.ui.resource_small_img(item) + '</td>' +
					'<td>' +
						'<a title="' + civitas.l('Remove this resource from the army.') + '" href="#" data-id="' + item + '" class="tips army-resources-delete">-</a>' +
					'</td>' +
				'</tr>';
			}
			_t += '</tbody>' +
			'</table>';
			$(this.handle + ' .army-resources').empty().append(_t);
		};
		$(this.handle).on('click', '.army-resources-add', function() {
			var amount = parseInt($(self.handle + ' .army-resources-amount').val());
			var resource = $(self.handle + ' .army-resources-select').val();
			if (resource !== '0') {
				if (typeof self.resources[resource] !== 'undefined' && !my_settlement.has_resources(resource, self.resources[resource] + amount)) {
					return false;
				} else if (typeof self.resources[resource] === 'undefined' && !my_settlement.has_resources(resource, amount)) {
					return false;
				}
				if (typeof self.resources[resource] !== 'undefined') {
					self.resources[resource] = self.resources[resource] + amount;
				} else {
					self.resources[resource] = amount;
				}
				self.generate_table_data();
			}
			return false;
		}).on('click', '.army-resources-delete', function() {
			var resource = $(this).data('id');
			delete self.resources[resource];
			self.generate_table_data();
			return false;
		}).on('click', '.navy-item-inc', function() {
			var max = parseInt($(this).data('max'));
			var ship = $(this).data('ship');
			var current = parseInt($(this).parent().children('.amount').html());
			if (current + 1 <= max) {
				self.assigned_navy[ship] = current + 1;
				$(this).parent().children('.amount').html(current + 1);
			}
			return false;
		}).on('click', '.navy-item-dec', function() {
			var max = parseInt($(this).data('max'));
			var ship = $(this).data('ship');
			var current = parseInt($(this).parent().children('.amount').html());
			if (current - 1 >= 0) {
				self.assigned_navy[ship] = current - 1;
				$(this).parent().children('.amount').html(current - 1);
			}
			return false;
		}).on('click', '.army-item-inc', function() {
			var max = parseInt($(this).data('max'));
			var soldier = $(this).data('soldier');
			var current = parseInt($(this).parent().children('.amount').html());
			if (current + 1 <= max) {
				self.assigned_army[soldier] = current + 1;
				$(this).parent().children('.amount').html(current + 1);
			}
			return false;
		}).on('click', '.army-item-dec', function() {
			var max = parseInt($(this).data('max'));
			var soldier = $(this).data('soldier');
			var current = parseInt($(this).parent().children('.amount').html());
			if (current - 1 >= 0) {
				self.assigned_army[soldier] = current - 1;
				$(this).parent().children('.amount').html(current - 1);
			}
			return false;
		}).on('click', '.dispatch', function() {
			if (!my_settlement.can_recruit_soldiers()) {
				core.error(civitas.l('You will need to construct a Military Camp before being able to attack other settlements.'));
				return false;
			}
			var destination = parseInt($(self.handle + ' .army-destination').val());
			if ((settlement && settlement.id() !== destination) || !settlement) {
				settlement = core.get_settlement(destination);
			}
			if (destination === 0 || !settlement || (my_settlement.get_army_total(self.assigned_army).total === 0 && my_settlement.get_navy_total(self.assigned_navy).total === 0)) {
				core.error(civitas.l('There was an error creating and dispatching the army, check the data you entered and try again.'));
				return false;
			}
			if (core.add_to_queue(my_settlement, settlement, civitas.ACTION_CAMPAIGN, civitas.CAMPAIGN_ARMY, {
				army: self.assigned_army,
				navy: self.assigned_navy,
				resources: self.resources
			})) {
				self.destroy();
			} else {
				core.error(civitas.l('There was an error creating and dispatching the army, check the data you entered and try again.'));
			}
			return false;
		});
	},
	on_refresh: function() {
		var core = this.get_core();
		var my_settlement = core.get_settlement();
	}
};

/**
 * Create a new spy panel data.
 *
 * @type {Object}
 */
civitas.PANEL_NEW_SPY = {
	template: '' +
		'<div id="panel-{ID}" class="panel">' +
			'<header>' + civitas.l('Create spy') +
				'<a class="tips close" title="' + civitas.l('Close') + '"></a>' +
			'</header>' +
			'<section></section>' +
			'<div class="toolbar">' +
				'<a class="btn dispatch" href="#">' + civitas.l('Dispatch') + '</a>' +
			'</div>' +
		'</div>',
	id: 'new-spy',
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
		var my_settlement = core.get_settlement();
		var settlement = params.data;
		var settlements = core.get_settlements();
		var espionage = my_settlement.espionage();
		var location = civitas['SETTLEMENT_LOCATION_' + my_settlement.climate().name.toUpperCase()];
		var distance = civitas.utils.get_distance_in_days(location, civitas.SETTLEMENTS[settlement.id()].location);
		var _t = '<fieldset>' +
			'<legend>' + civitas.l('Initial costs') + '</legend>' +
			'<dl>';
		for (var item in civitas.SPY_COSTS) {
			var _cost = 0;
			if (item === 'coins') {
				_cost = civitas.SPY_COSTS[item] * distance;
			} else if (item === 'provisions') {
				_cost = Math.ceil((civitas.SPY_COSTS[item] * distance) / 2);
			} else {
				_cost = civitas.SPY_COSTS[item];
			}
			_t += '<dt>' + civitas.utils.nice_numbers(_cost) + '</dt>' +
				'<dd>' + civitas.ui.resource_small_img(item) + '</dd>';
		}
		_t += '</dl>' +
		'</fieldset>' +
		'<fieldset>' +
			'<legend>' + civitas.l('Destination') + '</legend>' +
			'<select class="espionage-destination">' +
				'<option value="0">-- ' + civitas.l('select') + ' --</option>';
		for (var i = 1; i < settlements.length; i++) {
			_t += '<option ' + (settlement && (settlements[i].id() === settlement.id()) ? 'selected ' : '') + 'value="' + settlements[i].id() + '">' + (settlements[i].is_city() ? civitas.l('City of') + ' ' : civitas.l('Village of') + ' ') + settlements[i].name() + '</option>';
		}
		_t += '</select>' +
		'</fieldset>' +
		'<fieldset class="range-combo">' +
			'<legend>' + civitas.l('Espionage') + '</legend>' +
			'<input type="range" value="' + espionage + '" min="1" max="' + espionage + '" class="espionage-range" />' +
			'<input type="text" readonly value="' + espionage + '" class="espionage-value tips" title="' + civitas.l('Total espionage assigned to this spy.') + '" />' +
			'<input type="text" readonly value="' + Math.ceil(espionage / 100) + '%" class="espionage-chance tips" title="' + civitas.l('Chance of mission success.') + '" />' +
		'</fieldset>' +
		'<fieldset>' +
			'<legend>' + civitas.l('Mission') + '</legend>' +
			'<select class="espionage-mission">' +
				'<option value="0">-- ' + civitas.l('select') + ' --</option>';
		for (var i = 1; i < civitas.SPY_MISSIONS.length; i++) {
			_t += '<option value="' + i + '">' + civitas.SPY_MISSIONS[i].capitalize() + '</option>';
		}
		_t += '</select>' +
		'</fieldset>' +
		'<fieldset class="espionage-rel">' +
			'<legend>' + civitas.l('Religion') + (settlement ? ' (currently ' + settlement.religion().name + ')': '') + '</legend>' +
			'<select class="espionage-religion">';
		for (var i = 0; i < civitas.RELIGIONS.length; i++) {
			_t += '<option value="' + i + '">' + civitas.RELIGIONS[i].capitalize() + (i === my_settlement.religion().id ? ' (' + civitas.l('your religion') + ')' : '') + '</option>';
		}
		_t += '</select>' +
		'<p><strong>' + civitas.l('Note') + '!</strong> ' + civitas.l('Attempting to change a settlement`s religion uses up all your accumulated faith.') + '</p>' +
		'</fieldset>';
		$(this.handle + ' section').empty().append(_t);
		$(this.handle).on('change', '.espionage-range', function() {
			var value = parseInt($(this).val());
			$(self.handle + ' .espionage-value').val(value);
			$(self.handle + ' .espionage-chance').val(Math.ceil(value / 100) + '%');
		}).on('change', '.espionage-mission', function() {
			var value = parseInt($(this).val());
			if (value === civitas.SPY_MISSION_RELIGION) {
				$(self.handle + ' .espionage-rel').show();
			} else {
				$(self.handle + ' .espionage-rel').hide();
			}
		}).on('click', '.dispatch', function() {
			if (!my_settlement.can_diplomacy()) {
				core.error(civitas.l('You will need to construct an Embassy before being able to send spies to other settlements.'));
				return false;
			}
			var _espionage = parseInt($(self.handle + ' .espionage-value').val());
			var destination = parseInt($(self.handle + ' .espionage-destination').val());
			var mission = parseInt($(self.handle + ' .espionage-mission').val());
			if ((settlement && settlement.id() !== destination) || !settlement) {
				settlement = core.get_settlement(destination);
			}
			if (destination === 0 || _espionage > espionage || !settlement || mission <= 0) {
				core.error(civitas.l('There was an error creating and dispatching the spy, check the data you entered and try again.'));
				return false;
			}
			var data = {
				espionage: _espionage,
				mission: mission
			};
			if (mission === civitas.SPY_MISSION_RELIGION) {
				var _religion = parseInt($(self.handle + ' .espionage-religion').val());
				data.religion = _religion;
			}
			if (core.add_to_queue(my_settlement, settlement, civitas.ACTION_CAMPAIGN, civitas.CAMPAIGN_SPY, data)) {
				self.destroy();
			} else {
				core.error(civitas.l('There was an error creating and dispatching the spy, check the data you entered and try again.'));
			}
			return false;
		});
	},
	on_refresh: function() {
		var core = this.get_core();
		var my_settlement = core.get_settlement();
		var espionage = my_settlement.espionage();
		$(this.handle + ' .espionage-range').attr('max', espionage);
	}
};

/**
 * Create a new caravan panel data.
 *
 * @type {Object}
 */
civitas.PANEL_NEW_CARAVAN = {
	template: '' +
		'<div id="panel-{ID}" class="panel">' +
			'<header>' + civitas.l('Create caravan') +
				'<a class="tips close" title="' + civitas.l('Close') + '"></a>' +
			'</header>' +
			'<section></section>' +
			'<div class="toolbar">' +
				'<a class="btn dispatch" href="#">' + civitas.l('Dispatch') + '</a>' +
			'</div>' +
		'</div>',
	id: 'new-caravan',
	on_show: function(params) {
		this.resources = {};
		var self = this;
		var core = this.get_core();
		var my_settlement = core.get_settlement();
		var settlement = params.data;
		var settlements = core.get_settlements();
		var location = civitas['SETTLEMENT_LOCATION_' + my_settlement.climate().name.toUpperCase()];
		var distance = civitas.utils.get_distance_in_days(location, civitas.SETTLEMENTS[settlement.id()].location);
		var _t = '<fieldset>' +
			'<legend>' + civitas.l('Initial costs') + '</legend>' +
			'<dl>';
		for (var item in civitas.CARAVAN_COSTS) {
			var _cost = 0;
			if (item === 'coins') {
				_cost = civitas.CARAVAN_COSTS[item] * distance;
			} else if (item === 'provisions') {
				_cost = Math.ceil((civitas.CARAVAN_COSTS[item] * distance) / 2);
			} else {
				_cost = civitas.CARAVAN_COSTS[item];
			}
			_t += '<dt>' + civitas.utils.nice_numbers(_cost) + '</dt>' +
				'<dd>' + civitas.ui.resource_small_img(item) + '</dd>';
		}
		_t += '</dl>' +
		'</fieldset>' +
		'<fieldset>' +
			'<legend>' + civitas.l('Destination') + '</legend>' +
			'<select class="caravan-destination">' +
				'<option value="0">-- ' + civitas.l('select') + ' --</option>';
		for (var i = 1; i < settlements.length; i++) {
			_t += '<option ' + (settlement && (settlements[i].id() === settlement.id()) ? 'selected ' : '') + 'value="' + settlements[i].id() + '">' + (settlements[i].is_city() ? civitas.l('City of') + ' ' : civitas.l('Village of') + ' ') + settlements[i].name() + '</option>';
		}
		_t += '</select>' +
		'</fieldset>' +
		'<fieldset class="select-combo">' +
			'<legend>' + civitas.l('Resources') + '</legend>' +
			'<select class="caravan-resources-select">' +
				'<option value="0">-- ' + civitas.l('select') + ' --</option>' +
				'<option value="coins"> ' + civitas.l('Coins') + '</option>';
		var resources = my_settlement.get_resources();
		for (var item in resources) {
			if ($.inArray(item, civitas.NON_RESOURCES) === -1) {
				_t += '<option value="' + item + '"> ' + civitas.utils.get_resource_name(item) + '</option>';
			}
		}
		_t += '</select>' +
			'<input title="' + civitas.l('Add the resources to the list.') + '" type="button" class="tips caravan-resources-add" value="+" />' +
			'<input title="' + civitas.l('Amount of selected resource to add to the caravan.') + '" type="number" value="1" class="tips caravan-resources-amount" min="1" max="999" />' +
			'<div class="caravan-resources clearfix"></div>' +
		'</fieldset>';
		$(this.handle + ' section').empty().append(_t);
		this.generate_table_data = function() {
			var _t = '<table class="caravan-resources clearfix">' +
				'<thead>' +
				'<tr>' +
				'<td>' + civitas.l('Amount') + '</td>' +
				'<td>' + civitas.l('Resource') + '</td>' +
				'<td></td>' +
				'</tr>' +
				'</thead>' +
				'<tbody>';
			for (var item in this.resources) {
				_t += '<tr>' +
					'<td>' + this.resources[item] + '</td>' +
					'<td>' + civitas.ui.resource_small_img(item) + '</td>' +
					'<td>' +
						'<a title="' + civitas.l('Remove this resource from the caravan.') + '" href="#" data-id="' + item + '" class="tips caravan-resources-delete">-</a>' +
					'</td>' +
				'</tr>';
			}
			_t += '</tbody>' +
			'</table>';
			$(this.handle + ' .caravan-resources').empty().append(_t);
		};
		$(this.handle).on('click', '.caravan-resources-add', function() {
			var amount = parseInt($(self.handle + ' .caravan-resources-amount').val());
			var resource = $(self.handle + ' .caravan-resources-select').val();
			if (resource !== '0') {
				if (typeof self.resources[resource] !== 'undefined' && !my_settlement.has_resources(resource, self.resources[resource] + amount)) {
					return false;
				} else if (typeof self.resources[resource] === 'undefined' && !my_settlement.has_resources(resource, amount)) {
					return false;
				}
				if (typeof self.resources[resource] !== 'undefined') {
					self.resources[resource] = self.resources[resource] + amount;
				} else {
					self.resources[resource] = amount;
				}
				self.generate_table_data();
			}
			return false;
		}).on('click', '.caravan-resources-delete', function() {
			var resource = $(this).data('id');
			delete self.resources[resource];
			self.generate_table_data();
			return false;
		}).on('click', '.dispatch', function() {
			if (!my_settlement.can_trade()) {
				core.error(civitas.l('You will need to construct a Trading Post before being able to trade resources with other settlements.'));
				return false;
			}
			var destination = parseInt($(self.handle + ' .caravan-destination').val());
			if ((settlement && settlement.id() !== destination) || !settlement) {
				settlement = core.get_settlement(destination);
			}
			if (destination === 0 || !settlement || $.isEmptyObject(self.resources)) {
				core.error(civitas.l('There was an error creating and dispatching the caravan, check the data you entered and try again.'));
				return false;
			}
			if (core.add_to_queue(my_settlement, settlement, civitas.ACTION_CAMPAIGN, civitas.CAMPAIGN_CARAVAN, {
				resources: self.resources
			})) {
				self.destroy();
			} else {
				core.error(civitas.l('There was an error creating and dispatching the caravan, check the data you entered and try again.'));
			}
			return false;
		});
	}
};

/**
 * City Council panel data.
 *
 * @type {Object}
 */
civitas.PANEL_COUNCIL = {
	template: civitas.ui.generic_panel_template(civitas.l('City Council')),
	id: 'council',
	on_show: function(params) {
		var core = this.get_core();
		$(this.handle + ' section').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Tips'), civitas.l('Production'), civitas.l('Housing'), civitas.l('Municipal'), civitas.l('Mercenary'), civitas.l('Achievements')]));
		$(this.handle).on('click', '.view-merc', function () {
			var _army = parseInt($(this).data('id'));
			var data = civitas.MERCENARIES[_army];
			core.open_panel(civitas.PANEL_ARMY, data);
			return false;
		}).on('click', '.raid-merc', function () {
			var _army = parseInt($(this).data('id'));
			core.error('Not implemented yet.');
			return false;
		}).on('click', '.disband-merc', function () {
			self.get_core().open_modal(
				function(button) {
					if (button === 'yes') {
						var _army = parseInt($(this).data('id'));
						core.get_settlement().release_mercenary(_army);
						core.save_and_refresh();
					}
				},
				'Are you sure you want to release this mercenary army? You won`t be able to use them anymore!'
			);
			return false;
		}).on('click', '.building-info', function() {
			var handle = $(this).data('handle');
			var panel = civitas['PANEL_' + handle.toUpperCase()];
			var building_data = core.get_building_config_data(handle);
			if (handle && building_data) {
				if (typeof panel !== 'undefined') {
					core.open_panel(panel, building_data);
				} else {
					core.open_panel(civitas.PANEL_BUILDING, building_data);
				}
			}
			return false;
		});
	},
	on_refresh: function() {
		var core = this.get_core();
		var settlement = core.get_settlement();
		var settlements = core.get_settlements();
		var buildings = settlement.get_buildings();
		var resources = settlement.get_resources();
		var achievements = core.get_achievements();
		var advices = settlement.city_council();
		var total_costs = 0;
		var total_tax = 0;
		var army_data;
		var achievement_data;
		var building_data;
		var _z = '';
		var total_benefits = {
			fame: 0,
			espionage: 0,
			research: 0,
			faith: 0
		}
		var mercenary = settlement.mercenary();
		var _t = '<p>' + civitas.l('Mercenary armies are available to hire for a fixed price, they do not cost additional resources but they are only available for raiding and campaign missions, they do not participate in the defense of your city.') + '</p>' +
				'<p>' + civitas.l('Also, keep in mind that once a mercenary army is hired, they are at your disposal until the end of the current year.') + '</p>' +
				'<div class="hired-mercenaries-list">';
		if (mercenary.length > 0) {
			_t += '<table class="normal">';
			for (var i = 0; i < mercenary.length; i++) {
				army_data = civitas.MERCENARIES[mercenary[i].id];
				_t += '<tr>' +
						'<td class="icon"><img src="' + civitas.ASSETS_URL + 'images/armies/' + army_data.icon + '.png" /></td>' +
						'<td><p class="title">' + army_data.name + '</p><p class="description">' + army_data.description + '</p></td>' +
						'<td class="large">' +
						'<a title="' + civitas.l('View info on this mercenary army.') + '" data-id="' + mercenary[i].id + '" class="tips view-merc" href="#">' + civitas.l('view') + '</a> ' +
						'<a title="' + civitas.l('Send this mercenary army on a raiding mission towards a specific settlement.') + '" data-id="' + i + '" class="tips raid-merc" href="#">' + civitas.l('raid') + '</a> ' +
						'<a title="' + civitas.l('Disband this mercenary army? They will be available for hire later when you need them.') + '" data-id="' + i + '" class="tips disband-merc" href="#">' + civitas.l('release') + '</a>' +
						'</td>' +
						'</tr>';

			}
			_t += '</table>';
		} else {
			_t += '<p>' + civitas.l('You have no mercenary armies hired for your city. Go to the World Market Trades and hire one.') + '</p>';
		}
		_t += '</div>';
		$(this.handle + ' #tab-mercenary').empty().append(_t);
		_t = '<div class="achievements-list">';
		for (var i = 0; i < civitas.ACHIEVEMENTS.length; i++) {
			var has_ach = core.has_achievement(i);
			_t += '<div class="achievement' + (has_ach !== false ? ' has' : '') + '">' +
				'<div class="left">' +
					'<div class="ach img"></div>' +
				'</div>' +
				'<div class="right">' +
					'<div class="inner">' +
						'<h2>' + civitas.ACHIEVEMENTS[i].name + '</h2>' +
						civitas.ACHIEVEMENTS[i].description +
					'</div>' +
					(has_ach !== false ? '<div class="time" title="' + has_ach.date + '">' +
						'<strong>' + civitas.utils.time_since(has_ach.date) + '</strong> ago' +
					'</div>' : '') +
				'</div>' +
			'</div>';
		}
		_t += '</div>';
		$(this.handle + ' #tab-achievements').empty().append(_t);
		_t = '<img class="avatar" src="' + civitas.ASSETS_URL + 'images/avatars/avatar' + settlement.ruler().avatar + '.png" />' +
				'<dl>' +
				'<dt>' + civitas.l('Current date') + '</dt><dd class="citydate">' + core.get_date() + '</dd>' +
				'<dt>' + civitas.l('Ruler') + '</dt><dd>' + settlement.ruler().name + '</dd>' +
				'<dt>' + civitas.l('Climate') + '</dt><dd>' + settlement.climate().name + '</dd>' +
				'<dt>' + civitas.l('Personality') + '</dt><dd>' + settlement.personality().name + '</dd>' +
				'<dt>' + civitas.l('Nationality') + '</dt><dd>' + settlement.nationality().name + '</dd>' +
				'<dt>' + civitas.l('Population') + '</dt><dd>' + civitas.utils.nice_numbers(settlement.population()) + '</dd>' +
				'<dt>' + civitas.l('Religion') + '</dt><dd>' + settlement.religion().name + '</dd>' +
				'<dt>' + civitas.l('Level') + '</dt><dd>' + civitas.ui.progress((settlement.level() * 100) / civitas.MAX_SETTLEMENT_LEVEL, 'small', settlement.level()) + '</dd>' +
				'<dt>' + civitas.l('Fame') + '</dt><dd>' + civitas.ui.progress((settlement.fame() * 100) / civitas.LEVELS[civitas.MAX_SETTLEMENT_LEVEL - 1], 'small', civitas.utils.nice_numbers(settlement.fame()) + ' / ' + civitas.utils.nice_numbers(civitas.LEVELS[settlement.level()])) + '</dd>' +
				'<dt>' + civitas.l('Prestige') + '</dt><dd>' + civitas.ui.progress((settlement.prestige() * 100) / civitas.MAX_PRESTIGE_VALUE, 'small', settlement.prestige()) + '</dd>' +
				'<dt>' + civitas.l('Espionage') + '</dt><dd>' + civitas.ui.progress((settlement.espionage() * 100) / civitas.MAX_ESPIONAGE_VALUE, 'small', settlement.espionage()) + '</dd>' +
				'<dt>' + civitas.l('Faith') + '</dt><dd>' + civitas.ui.progress((settlement.faith() * 100) / civitas.MAX_FAITH_VALUE, 'small', settlement.faith()) + '</dd>' +
				'<dt>' + civitas.l('Research') + '</dt><dd>' + civitas.ui.progress((settlement.research() * 100) / civitas.MAX_RESEARCH_VALUE, 'small', settlement.research()) + '</dd>' +
			'</dl>';
		$(this.handle + ' #tab-info').empty().append(_t);
		_t = '';
		if (advices.length > 0) {
			_t += '<ul class="advices">';
			for (var z = 0; z < advices.length; z++) {
				_t += '<li>' + advices[z] + '</li>';
			}
			_t += '</ul>';
		}
		$(this.handle + ' #tab-tips').empty().append(_t);
		_t = '<table class="normal">' +
			'<thead>' +
				'<tr>' +
					'<td></td>' +
					'<td class="center">' + civitas.l('Level') + '</td>' +
					'<td>' + civitas.l('Raises') + '</td>' +
					'<td>' + civitas.l('Uses') + '</td>' +
				'</tr>' +
			'</thead>';
		for (var l = 0; l < buildings.length; l++) {
			if (buildings[l].is_municipal_building()) {
				building_data = buildings[l].get_building_data();
				_t += '<tr' + ((buildings[l].has_problems() === false) ? '' : ' class="notify"') +'>' +
					'<td><a href="#" class="building-info" data-handle="' + buildings[l].get_handle() + '">' + buildings[l].get_name() + '</a></td>' +
					'<td class="center">' + buildings[l].get_level() + '</td>' +
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
						'<td>' + (total_costs > 0 ? '-' : '') + total_costs + ' ' + civitas.ui.resource_small_img('coins') + '</td>' +
					'</tr>' +
				'</tfoot>' +
			'</table>';
		$(this.handle + ' #tab-municipal').empty().append(_t);
		_t = '<table class="normal">' +
			'<thead>' +
				'<tr>' +
					'<td></td>' +
					'<td class="center">' + civitas.l('Level') + '</td>' +
					'<td>' + civitas.l('Tax') + '</td>' +
					'<td>' + civitas.l('Materials') + '</td>' +
				'</tr>' +
			'</thead>';
		for (var l = 0; l < buildings.length; l++) {
			if (buildings[l].is_housing_building()) {
				building_data = buildings[l].get_building_data();
				_t += '<tr' + ((buildings[l].has_problems() === false) ? '' : ' class="notify"') +'>' +
					'<td><a href="#" class="building-info" data-handle="' + buildings[l].get_handle() + '">' + buildings[l].get_name() + '</a></td>' +
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
		$(this.handle + ' #tab-housing').empty().append(_t);
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
				building_data = buildings[l].get_building_data();
				_t += '<tr' + ((buildings[l].has_problems() === false) ? '' : ' class="notify"') +'>' +
					'<td><a href="#" class="building-info" data-handle="' + buildings[l].get_handle() + '">' + buildings[l].get_name() + '</a></td>' +
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
					'<td class="center">' + ((!buildings[l].is_stopped()) ? civitas.l('no') : civitas.l('yes')) + '</td>' +
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
		$(this.handle + ' #tab-production').empty().append(_t);
	}
};

/**
 * Army panel data.
 *
 * @type {Object}
 */
civitas.PANEL_ARMY = {
	template: civitas.ui.generic_panel_template(),
	id: 'army',
	on_show: function(params) {
		var army = params.data;
		$(this.handle + ' header').append(army.name);
		$(this.handle + ' section').append(civitas.ui.tabs(['Info', 'Soldiers', 'Ships']));
		$(this.handle + ' #tab-info').append('<img class="avatar" src="' + civitas.ASSETS_URL + 'images/armies/' + ((typeof army.icon !== 'undefined') ? army.icon : '22') + '.png" />' +
			'<p>' + army.description + '</p>');
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
	template: civitas.ui.generic_panel_template(civitas.l('City Buildings')),
	id: 'buildings',
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
		var settlement = core.get_settlement();
		var resources = settlement.get_resources();
		var el = this.handle;
		var _t = '<div class="left buildings">';
		var available_buildings = civitas['SETTLEMENT_BUILDINGS_' + settlement.climate().name.toUpperCase()];
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
							'<img class="building" src="' + civitas.ASSETS_URL + 'images/buildings/' + ((building_data.handle.slice(0, 5) === 'house') ? building_data.handle.slice(0, 5) : building_data.handle) + '1.png" />' +
							'</div>';
				}
			}
			_t += '</div>';
		}
		_t += '</div>' +
			'</div>' +
			'<div class="buildings-info right">' +
				'<div class="b-desc"></div>' +
				'<fieldset class="levels">' +
					'<legend>' + civitas.l('Levels') + '</legend>' +
					'<div class="b-levels"></div>' +
				'</fieldset>' +
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
		$(el + ' section').append(_t);
		$(el).on('click', '.building-item', function () {
			$(el).addClass('expanded');
			$(el + ' .building-item').removeClass('active');
			$(this).addClass('active');
			$(el + ' .b-chance, ' + el + ' .b-tax, ' + el + ' .b-store, ' + el + ' .b-req, ' + el + ' .b-cost, ' + el + ' .b-name, ' + el + ' .b-desc, ' + el + ' .b-mats, ' + el + ' .b-prod, ' + el + ' .toolbar').empty();
			var handle = $(this).data('handle');
			var building = civitas.BUILDINGS[civitas.BUILDINGS.findIndexM(handle)];
			$(el + ' header span').empty().html(civitas.l('City Buildings') + ' - ' + building.name);
			$(el + ' .b-desc').html(building.description);
			var _z = '<dl class="nomg">';
			for (var y in building.cost) {
				_z += '<dt>' + civitas.utils.nice_numbers(building.cost[y]) + '</dt>' +
					'<dd><img class="tips" title="' + civitas.utils.get_resource_name(y) + '" src="' + civitas.ASSETS_URL + 'images/resources/' + y + '_small.png" /></dd>';
			}
			_z += '</dl>';
			$(el + ' .b-cost').append(_z);
			if (typeof building.levels !== 'undefined') {
				$(el + ' .b-levels').empty().append('<dl class="nomg">' +
					'<dt>' + civitas.l('Upgrades') + '</dt>' +
						'<dd>' + building.levels + '</dd>' +
				'</dl>');
				$('fieldset.levels').show();
			} else {
				$('fieldset.levels').hide();
			}
			if (typeof building.requires !== 'undefined') {
				_z = '<dl class="nomg">';
				if (typeof building.requires.buildings !== 'undefined') {
					for (var item in building.requires.buildings) {
						_z += '<dt>' + civitas.l('Building') + '</dt>' +
							'<dd>' + core.get_building_config_data(item).name + ' level ' + building.requires.buildings[item] + '</dd>';
					}
				}
				_z += '<dt>' + civitas.l('City level') + '</dt>' +
					'<dd>' + building.requires.settlement_level + '</dd>' +
				'</dl>';
				$(el + ' .b-req').append(_z);
			}
			if (typeof building.chance !== 'undefined') {
				_z = '<dl class="nomg">';
				for (var chance in building.chance) {
					_z += '<dt>' + building.chance[chance] * 100 + '%</dt>' +
						'<dd><img class="tips" title="' + civitas.utils.get_resource_name(chance) + '" src="' + civitas.ASSETS_URL + 'images/resources/' + chance + '_small.png" /></dd>';
				}
				_z += '</dl>';
				$(el + ' .b-chance').append(_z);
				$('fieldset.extra').show();
			} else {
				$('fieldset.extra').hide();
			}
			if (building.is_production === true) {
				if (typeof building.production !== 'undefined') {
					_z = '<dl class="nomg">';
					for (var y in building.production) {
						_z += '<dt>' + building.production[y] + '</dt>' +
							'<dd><img class="tips" title="' + civitas.utils.get_resource_name(y) + '" src="' + civitas.ASSETS_URL + 'images/resources/' + y + '_small.png" /></dd>';
					}
					_z += '</dl>';
					$(el + ' .b-prod').append(_z);
					$('fieldset.production').show();
				} else {
					$('fieldset.production').hide();
				}
				if (typeof building.materials !== 'undefined') {
					_z = '<dl class="nomg">';
					for (var y in building.materials) {
						_z += '<dt>' + building.materials[y] + '</dt>' +
							'<dd><img class="tips" title="' + civitas.utils.get_resource_name(y) + '" src="' + civitas.ASSETS_URL + 'images/resources/' + y + '_small.png" /></dd>';
					}
					_z += '</dl>';
					$(el + ' .b-mats').append(_z);
					$('fieldset.materials').show();
				} else {
					$('fieldset.materials').hide();
				}
			} else {
				$('fieldset.production, fieldset.materials').hide();
			}
			if (building.is_housing === true) {
				if (typeof building.materials !== 'undefined') {
					_z = '<dl class="nomg">';
					for (var y in building.materials) {
						_z += '<dt>' + building.materials[y] + '</dt>' +
							'<dd><img class="tips" title="' + civitas.utils.get_resource_name(y) + '" src="' + civitas.ASSETS_URL + 'images/resources/' + y + '_small.png" /></dd>';
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
			} else {
				$('fieldset.taxes').hide();
			}
			if (typeof building.storage !== 'undefined') {
				$('fieldset.taxes, fieldset.materials').hide();
				_z = '<dl class="nomg">' +
						'<dt>' + building.storage + '</dt>' +
						'<dd><img class="tips" title="' + civitas.l('Storage Space') + '" src="' + civitas.ASSETS_URL + 'images/resources/storage_small.png" /></dd>' +
					'</dl>';
				$(el + ' .b-store').append(_z);
				$('fieldset.storage').show();
			} else {
				$('fieldset.storage').hide();
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
				$(el + ' .toolbar').empty().append(civitas.l('You already constructed this building.'));
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
	template: civitas.ui.generic_panel_template(civitas.l('World Market')),
	id: 'trades',
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
		var settlement = core.get_settlement();
		var el = this.handle;
		var _t = '';
		_t += civitas.ui.tabs([civitas.l('Export'), civitas.l('Import'), civitas.l('Mercenaries'), civitas.l('BlackMarket'), civitas.l('Prices')]);
		$(el + ' section').append(_t);
		$(el + ' #tab-import').append('<p>' + civitas.l('Below is a list of goods that the other cities in the world are looking to sell. The goods replenish every six months, so plan accordingly. You will need to build a Trading Post before being able to sell goods.') + '</p><div class="contents"></div>');
		$(el + ' #tab-export').append('<p>' + civitas.l('Below is a list of goods that the other cities in the world are looking to buy. The goods replenish every six months, so plan accordingly. You will need to build a Trading Post before being able to buy goods.') + '</p><div class="contents"></div>');
		$(el + ' #tab-mercenaries').append('<p>' + civitas.l('Below is a list of mercenary armies that are looking for hire. Mercenaries are available only for raiding and conquest missions, they do not join your city so they will not participate in defense.') + '</p><div class="contents"></div>');
		$(el + ' #tab-blackmarket').append('<p>' + civitas.l('The Black Market is a way to dump your excess materials when you`re in need of emptying your warehouses, but expect a steep price drop (taxes for all Black Market trades are <strong>') + civitas.BLACK_MARKET_DISCOUNT + civitas.l('%</strong>). The goods will be taken immediately from your warehouses but you will receive the coins at the <strong>start of the next month</strong>. Also, you get <strong>no prestige</strong> from Black Market trades.') + '</p><div class="contents"></div>');
		$(el + ' #tab-prices').append('<div class="contents"></div>');
		$(el + ' #tab-blackmarket > .contents').append('' +
			'<table class="normal">' +
				'<thead>' +
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
							' ' + civitas.l('or enter manually') + ' <input type="number" min="1" max="100000" placeholder="' + civitas.l('amount') + '" class="small bm-qty-manual" />' +
						'</td>' +
						'<td>' +
							'<a title="' + civitas.l('List goods on Black Market') + '" class="tips bmarket" href="#">' + civitas.l('List') + '</a>' +
						'</td>' +
					'</tr>' +
				'</thead>' +
				'<tbody>' +
				'</tbody>' +
			'</table>');
		var out = '<option value="0">-- ' + civitas.l('select') + ' --</option>';
		var resources = settlement.get_resources();
		for (var item in resources) {
			if ($.inArray(item, civitas.NON_RESOURCES) === -1) {
				out += '<option value="' + item + '"> ' + civitas.utils.get_resource_name(item) + '</option>';
			}
		}
		$(el + ' .bm-materials').empty().append(out);
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
							'<td>' + settlements[z].name() + '</td>' +
							'<td class="center">' + civitas.ui.resource_small_img(item) + '</td>' +
							'<td class="center">' + imports[item] + '</td>' +
							'<td class="center">' + civitas.RESOURCES[item].price + civitas.ui.resource_small_img('coins') + '</td>' +
							'<td class="center">' + discount + civitas.ui.resource_small_img('coins') + '</td>' +
							'<td class="center">' + discount_price + civitas.ui.resource_small_img('coins') + '</td>' +
							'<td class="center">' + Math.ceil(discount_price * imports[item]) + civitas.ui.resource_small_img('coins') + '</td>' +
							'<td class="center"><a title="' + civitas.l('Sell those goods') + '" data-resource="' + item + '" data-settlement="' + settlements[z].name() + '" class="tips sell' + (imports[item] === 0 ? ' disabled' : '') + '" href="#">' + civitas.l('sell') + '</a></td>' +
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
						civitas.ui.panel_btn('recruit', civitas.l('Recruit this mercenary army'), civitas.MERCENARIES[i].handle, 'recruit', core.get_settlement().is_mercenary_recruited(civitas.MERCENARIES[i].handle)) +
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
							'<td>' + settlements[z].name() + '</td>' +
							'<td class="center">' + civitas.ui.resource_small_img(item) + '</td>' +
							'<td class="center">' + exports[item] + '</td>' +
							'<td class="center">' + civitas.RESOURCES[item].price + civitas.ui.resource_small_img('coins') + '</td>' +
							'<td class="center">' + discount + civitas.ui.resource_small_img('coins') + '</td>' +
							'<td class="center">' + discount_price + civitas.ui.resource_small_img('coins') + '</td>' +
							'<td class="center">' + Math.ceil(discount_price * exports[item]) + civitas.ui.resource_small_img('coins') + '</td>' +
							'<td class="center"><a title="' + civitas.l('Buy those goods') + '" data-resource="' + item + '" data-settlement="' + settlements[z].name() + '" class="tips buy' + (exports[item] === 0 ? ' disabled' : '') + '" href="#">' + civitas.l('buy') + '</a></td>' +
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
	template: civitas.ui.building_panel_template(),
	id: 'camp',
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
		$(this.handle + ' section').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Army')]));
		var _t = '<div class="army-list"></div>' +
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
					'<img data-handle="' + item + '" title="' + civitas.l('Recruit') + ' ' + item.name + '" class="tips recruit-soldier" src="' + civitas.ASSETS_URL + 'images/armies/' + item.toLowerCase() + '.png" />' +
				'</fieldset>';
		}
		_t += '</div>';
		$(this.handle + ' #tab-army').empty().append(_t);
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
		var building = core.get_settlement().get_building(this.params_data.handle);
		if (building) {
			$(this.handle + ' #tab-info').empty().append(civitas.ui.building_panel(this.params_data, building.get_level()));
			$(this.handle + ' .army-list').empty().append('<fieldset>' +
					'<legend>' + civitas.l('Current Army') + '</legend>' +
					civitas.ui.army_list(settlement.get_army_total(), true) +
				'</fieldset>');
		}
	}
};

/**
 * Shipyard panel data.
 *
 * @type {Object}
 */
civitas.PANEL_SHIPYARD = {
	template: civitas.ui.building_panel_template(),
	id: 'shipyard',
	on_show: function(params) {
		var core = this.get_core();
		$(this.handle + ' section').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Navy')]));
		var _t = '<div class="navy-list"></div>' +
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
					'<img data-handle="' + item + '" title="' + civitas.l('Recruit') + ' ' + item.name + '" class="tips recruit-ship" src="' + civitas.ASSETS_URL + 'images/armies/' + item.toLowerCase().replace(/ /g,"_") + '.png" />' +
				'</fieldset>';
		}
		_t += '</div>';
		$(this.handle + ' #tab-navy').empty().append(_t);
		$(this.handle).on('click', '.recruit-ship', function () {
			var ship = $(this).data('handle');
			core.error(civitas.l('Not implemented yet.'));
			return false;
		});
	},
	on_refresh: function() {
		var core = this.get_core();
		var settlement = core.get_settlement();
		var building = core.get_settlement().get_building(this.params_data.handle);
		if (building) {
			var level = building.get_level();
			$(this.handle + ' #tab-info').empty().append(civitas.ui.building_panel(this.params_data, level));
			$(this.handle + ' .navy-list').empty().append('<fieldset>' +
					'<legend>' + civitas.l('Current Navy') + '</legend>' +
					civitas.ui.navy_list(settlement.get_navy_total(), true) +
				'</fieldset>');
		}
	}
};

/**
 * Church panel data.
 *
 * @type {Object}
 */
civitas.PANEL_CHURCH = {
	template: civitas.ui.building_panel_template(),
	id: 'church',
	on_show: function(params) {
		var self = this;
		var settlement = this.get_core().get_settlement();
		$(this.handle + ' section').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Religion')]));
		$(this.handle).on('click', '.religion', function() {
			var id = parseInt($(this).data('id'));
			self.get_core().open_modal(
				function(button) {
					if (button === 'yes') {
						settlement.change_religion(id);
					}
				},
				'Are you sure you want to switch religions? You will lose all your city`s faith!'
			);
			return false;
		});
	},
	on_refresh: function() {
		var core = this.get_core();
		var settlement = core.get_settlement();
		var building = core.get_settlement().get_building(this.params_data.handle);
		if (building) {
			$(this.handle + ' #tab-info').empty().append(civitas.ui.building_panel(this.params_data, building.get_level()));
			var _t = '<div class="section">' +
				civitas.ui.progress((settlement.faith() * 100) / civitas.MAX_FAITH_VALUE, 'large', settlement.faith()) +
			'</div>' +
			'<p>Changing your settlement`s religion requires <strong>' + civitas.MAX_FAITH_VALUE + '</strong> faith, each religion gives you access to different heroes in your Tavern and gives you a boost to the influence with the cities sharing the same religion.</p>' +
			'<div class="religion-list">';
			for (var i = 0; i < civitas.RELIGIONS.length; i++) {
				_t += '<div data-handle="' + civitas.RELIGIONS[i] + '" data-id="' + i + '" class="religion' + (settlement.religion().id === i ? ' selected' : '') + '">' +
					'<span>' + civitas.RELIGIONS[i].capitalize() + '</span>' +
				'</div>';
			}
			_t += '</div>';
			$(this.handle + ' #tab-religion').empty().append(_t);
		}
	}
};

/**
 * Embassy panel data.
 *
 * @type {Object}
 */
civitas.PANEL_EMBASSY = {
	template: civitas.ui.building_panel_template(),
	id: 'embassy',
	on_show: function(params) {
		var self = this;
		var core = this.get_core();
		var settlement = core.get_settlement();
		var settlements = core.get_settlements();
		var status = settlement.status();
		var building = core.get_settlement().get_building(this.params_data.handle);
		var level = building.get_level();
		$(this.handle + ' section').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Diplomacy'), civitas.l('Espionage')]));
		$(this.handle + ' #tab-diplomacy').empty().append('<div class="settlements-list"></div>');
		$(this.handle).on('click', '.view', function () {
			var _settlement_id = parseInt($(this).data('id'));
			var _settlement = core.get_settlement(_settlement_id);
			if (_settlement) {
				core.open_panel(civitas.PANEL_SETTLEMENT, _settlement);
			}
			return false;
		});
	},
	on_refresh: function() {
		var core = this.get_core();
		var settlement = core.get_settlement();
		var settlements = core.get_settlements();
		var status = settlement.status();
		var building = core.get_settlement().get_building(this.params_data.handle);
		if (building) {
			var level = building.get_level();
			$(this.handle + ' #tab-info').empty().append(civitas.ui.building_panel(this.params_data, level));
			$(this.handle + ' #tab-espionage').empty().append('<div class="section">' +
				civitas.ui.progress((settlement.espionage() * 100) / civitas.MAX_ESPIONAGE_VALUE, 'large', settlement.espionage()) +
			'</div>');
			var _t = '<table class="normal">';
			for (var i = 1; i < settlements.length; i++) {
				var _status = settlement.get_diplomacy_status(settlements[i].id());
				var settlement_type = settlements[i].get_type();
				_t += '<tr>' +
						'<td class="icon">' +
							'<a data-id="' + settlements[i].id() + '" title="' + civitas.l('View info about this settlement.') + '" class="tips view" href="#">' +
								'<img src="' + civitas.ASSETS_URL + 'images/avatars/avatar' + settlements[i].ruler().avatar + '.png" />' +
							'</a>' +
						'</td>' +
						'<td>' +
							'<p class="title">' + (settlements[i].is_city() ? 'City of' : 'Village of') + ' ' + settlements[i].name() + '</p> ' +
							'<div data-id="' + settlements[i].id() + '" >' + civitas.ui.progress(status[settlements[i].id()].influence, 'big') + '</div>' +
						'</td>' +
						'<td>' +
							'<p>' + civitas.l('Leader') + ': <strong>' + settlements[i].ruler().name + '</strong>' + '</p>' +
							'<p>' + civitas.l('Personality') + ': <strong>' + settlements[i].personality().name + '</strong>' + '</p>' +
							'<p>' + civitas.l('Diplomatic Status') + ': <strong>' + settlement.get_diplomacy_status(settlements[i].id()).name + '</strong>' + '</p>' +
						'</td>' +
					'</tr>';
			}
			_t += '</table>';
			$(this.handle + ' .settlements-list').empty().append(_t);
		}
	}
};

/**
 * Tavern panel data.
 *
 * @type {Object}
 */
civitas.PANEL_TAVERN = {
	template: civitas.ui.building_panel_template(),
	id: 'tavern',
	on_show: function(params) {
		$(this.handle + ' section').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Heroes')]));
	},
	on_refresh: function() {
		var core = this.get_core();
		var building = core.get_settlement().get_building(this.params_data.handle);
		if (building) {
			$(this.handle + ' #tab-info').empty().append(civitas.ui.building_panel(this.params_data, building.get_level()));
			$(this.handle + ' #tab-heroes').empty().append('<p>Not implemented yet.</p>');
		}
	}
};

/**
 * Academy panel data.
 *
 * @type {Object}
 */
civitas.PANEL_ACADEMY = {
	template: civitas.ui.building_panel_template(),
	id: 'academy',
	on_show: function(params) {
		$(this.handle + ' section').append(civitas.ui.tabs([civitas.l('Info'), civitas.l('Research')]));
	},
	on_refresh: function() {
		var core = this.get_core();
		var settlement = core.get_settlement();
		var research = settlement.research();
		var building = core.get_settlement().get_building(this.params_data.handle);
		if (building) {
			$(this.handle + ' #tab-info').empty().append(civitas.ui.building_panel(this.params_data, building.get_level()));
			$(this.handle + ' #tab-research').empty().append('<div class="section">' +
					civitas.ui.progress((research * 100) / civitas.MAX_RESEARCH_VALUE, 'large', research) +
				'</div>' +
				'<p>Not implemented yet.</p>');
		}
	}
};

/**
 * Login window data.
 *
 * @type {Object}
 */
civitas.WINDOW_SIGNIN = {
	id: 'signin',
	template: '' +
		'<section id="window-{ID}" class="window">' +
			'<div class="logo">Civitas</div>' +
			'<fieldset>' +
				'<div class="new-game">' +
					'<p>' + civitas.l('Enter the city password to decrypt the game data.') + '</p>' +
					'<dl>' +
						'<dt class="clearfix">' + civitas.l('Password') + ':</dt>' +
						'<dd><input type="password" class="password text-input" /></dd>' +
					'</dl>' +
					'<a href="#" class="do-start highlight button">' + civitas.l('Load Game') + '</a>' +
				'</div>' +
				'<a href="#" class="do-restart button">' + civitas.l('Restart') + '</a>' +
				civitas.ui.window_about_section() +
			'</fieldset>' +
		'</section>',
	on_show: function() {
		var self = this;
		var avatar = 1;
		var savegame = null;
		var core = this.get_core();
		$(this.handle).on('click', '.do-start', function () {
			var password = $(self.handle + ' .password').val();
			if (password === '') {
				core.error('Enter your city password.', 'Error', true);
				return false;
			}
			if (!core.load_game(password)) {
				$(self.handle + ' .password').val('');
				core.error('Error decrypting the game data with the specified password. Try again.', 'Error', true);
			} else {
				self.destroy();
			}
			return false;
		}).on('click', '.do-restart', function () {
			core.open_modal(
				function(button) {
					if (button === 'yes') {
						core.reset_storage_data();
						document.location.reload();
					}
				},
				'Are you sure you want to restart the game? You wll lose all progress on the current game!',
				'Civitas'
			);
			return false;
		}).on('click', '.do-about', function () {
			$(self.handle + ' .about-game').slideToggle();
			return false;
		});
	},
	on_hide: function() {
		this.get_core().hide_loader();
	}
};

/**
 * Sign Up window data.
 *
 * @type {Object}
 */
civitas.WINDOW_SIGNUP = {
	id: 'signup',
	template: '' +
		'<section id="window-{ID}" class="window">' +
			'<div class="logo">Civitas</div>' +
			'<fieldset>' +
				'<div class="new-game">' +
					'<p>' + civitas.l('Choose your city details well, climate changes and game difficulty affects your building options and resources.') + '</p>' +
					'<dl>' +
						'<dt class="clearfix">' + civitas.l('Your Name') + ':</dt>' +
						'<dd><input type="text" maxlength="12" title="' + civitas.l('Maximum of 12 characters.') + '" class="tips name text-input" /></dd>' +
						'<dt class="clearfix">' + civitas.l('Password') + ':</dt>' +
						'<dd><input type="password" class="password text-input" /></dd>' +
						'<dt class="clearfix">' + civitas.l('Confirm Password') + ':</dt>' +
						'<dd><input type="password" class="password2 text-input" /></dd>' +
						'<div class="hr"></div>' +
						'<dt class="clearfix">' + civitas.l('City Name') + ':</dt>' +
						'<dd><input type="text" maxlength="12" title="' + civitas.l('Maximum of 12 characters.') + '" class="tips cityname text-input" /></dd>' +
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
				civitas.ui.window_about_section() +
			'</fieldset>' +
		'</section>',
	on_show: function() {
		var self = this;
		var avatar = 1;
		var core = this.get_core();
		for (var i = 1; i < civitas.CLIMATES.length; i++) {
			$(this.handle + ' .climate').append('<option value="' + civitas['CLIMATE_' + civitas.CLIMATES[i].toUpperCase()] + '">' + civitas.CLIMATES[i].capitalize() + '</option>');
		}
		for (var i = 1; i < civitas.NATIONS.length; i++) {
			$(this.handle + ' .nation').append('<option value="' + civitas['NATION_' + civitas.NATIONS[i].toUpperCase()] + '">' + civitas.NATIONS[i].capitalize() + '</option>');
		}
		for (var i = 1; i <= civitas.AVATARS; i++) {
			$(this.handle + ' .avatar-select').append('<img src="' + civitas.ASSETS_URL + 'images/avatars/avatar' + i + '.png" />');
		}
		$(this.handle).on('click', '.do-start', function () {
			var password = $(self.handle + ' .password').val();
			var password2 = $(self.handle + ' .password2').val();
			var name = $(self.handle + ' .name').val();
			var cityname = $(self.handle + ' .cityname').val();
			var nation = parseInt($(self.handle + ' .nation').val());
			var climate = parseInt($(self.handle + ' .climate').val());
			var difficulty = parseInt($(self.handle + ' .difficulty').val());
			if (name.length > 12) {
				name = name.substring(0, 12);
			}
			if (cityname.length > 12) {
				cityname = cityname.substring(0, 12);
			}
			if (name === '') {
				core.error('Enter your ruler name, for example <strong>Ramses</strong>.', 'Error', true);
				return false;
			}
			if (cityname === '') {
				core.error('Enter your city name, for example <strong>Alexandria</strong>.', 'Error', true);
				return false;
			}
			if (password === '') {
				core.error('Enter a strong password for your city.', 'Error', true);
				return false;
			}
			if (password !== password2) {
				core.error('Your passwords do not match.', 'Error', true);
				return false;
			}
			core.new_game(name, cityname, nation, climate, avatar, difficulty, password);
			self.destroy();
			return false;
		}).on('click', '.down', function () {
			if (avatar < civitas.AVATARS) {
				avatar = avatar + 1;
			}
			$(self.handle + ' .avatar-select').scrollTo('+=64px', 500);
		}).on('click', '.up', function () {
			if (avatar > 1) {
				avatar = avatar - 1;
			}
			$(self.handle + ' .avatar-select').scrollTo('-=64px', 500);
		}).on('click', '.do-about', function () {
			$(self.handle + ' .about-game').slideToggle();
			return false;
		});
	},
	on_hide: function() {
		this.get_core().hide_loader();
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
		'<section id="window-{ID}" class="window">' +
			'<div class="logo">Civitas</div>' +
			'<fieldset>' +
				'<a href="#" class="do-pause button">' + civitas.l('Pause') + '</a>' +
				'<a href="#" class="do-restart button">' + civitas.l('Restart') + '</a>' +
				'<a href="#" class="do-options button">' + civitas.l('Options') + '</a>' +
				'<div class="options-game"></div>' +
				civitas.ui.window_about_section() +
				'<br />' +
				'<a href="#" class="do-resume button">' + civitas.l('Resume Playing') + '</a>' +
			'</fieldset>' +
		'</section>',
	on_show: function() {
		var self = this;
		var avatar = 1;
		var core = this.get_core();
		$(this.handle + ' .options-game').append(civitas.ui.tabs([civitas.l('Sounds'), civitas.l('UI'), civitas.l('Gameplay')]));
		$(this.handle + ' #tab-sounds').append('<div>' +
			'<a href="#" class="music-control ui-control ' + ((this.core.get_settings('music') === true) ? 'on' : 'off') + '">' + civitas.l('toggle music') + '</a>' +
			'<input class="music-volume" type="range" min="0" max="1" step="0.1" ' + ((this.core.get_settings('music') !== true) ? 'disabled' : '') + ' />' +
			'</div>');
		$(this.handle + ' #tab-ui').append('<div>' +
			'<a href="#" class="console-control ui-control ' + ((this.core.get_settings('console') === true) ? 'on' : 'off') + '">' + civitas.l('toggle console') + '</a>' +
			'</div>');
		$(this.handle + ' .tabs').tabs();
		$(this.handle).on('click', '.do-resume', function () {
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
			$(self.handle + ' .options-game').slideToggle();
			return false;
		}).on('click', '.do-about', function () {
			$(self.handle + ' .about-game').slideToggle();
			return false;
		}).on('click', '.do-restart', function () {
			core.open_modal(
				function(button) {
					if (button === 'yes') {
						core.reset_storage_data();
						document.location.reload();
					}
				},
				'Are you sure you want to restart the game? You wll lose all progress on the current game!',
				'Civitas'
			);
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
			core.save();
			return false;
		}).on('click', '.console-control', function () {
			if ($(this).hasClass('on')) {
				$(this).removeClass('on').addClass('off');
				core.set_settings_console(false);
			} else {
				$(this).removeClass('off').addClass('on');
				core.set_settings_console(true);
			}
			core.save();
			return false;
		}).on('change', '.music-volume', function () {
			var value = $(this).val();
			core.music.volume = value;
			core.save();
			return false;
		});
	},
	on_hide: function() {
		this.get_core().hide_loader();
	}
};
