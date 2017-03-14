if (typeof city_builder === 'undefined')
	var city_builder = {};

/**
 * i8n function.
 * 
 * @param {String} value
 * @returns {String}
 */
city_builder.l = function (value) {
	if (typeof city_builder.lang[value] !== 'undefined' && city_builder.lang[value] !== '') {
		return city_builder.lang[value];
	}
	else {
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
city_builder.MAX_CITY_LEVEL = 30;

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
city_builder.AVATARS = 36;

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
	2200000, 2400000, 2600000, 2800000, 3000000
];

/**
 * Application version.
 * 
 * @constant
 * @type {String}
 */
city_builder.VERSION = '0.1.0';

/**
 * Whether the application is in debug mode.
 * 
 * @default false
 * @constant
 * @type {Boolean}
 */
city_builder.DEBUG = true;

city_builder.STORAGE_KEY = 'city_builder';
