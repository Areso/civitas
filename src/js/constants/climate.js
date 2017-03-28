/**
 * List of the possible climate types.
 * 
 * @constant
 * @type {Array}
 */
civitas.CLIMATE_TYPES = [
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
civitas.CLIMATE_TYPE_TEMPERATE = 1;

/**
 * Tropical climate, favoring farms and exotic goods.
 * 
 * @constant
 * @type {Number}
 */
civitas.CLIMATE_TYPE_TROPICAL = 2;

/**
 * Arid climate, favoring ore mines.
 * 
 * @constant
 * @type {Number}
 */
civitas.CLIMATE_TYPE_ARID = 3;

/**
 * Continental climate, no sea access.
 * 
 * @constant
 * @type {Number}
 */
civitas.CLIMATE_TYPE_CONTINENTAL = 4;

/**
 * Polar climate, very extreme.
 * 
 * @constant
 * @type {Number}
 */
civitas.CLIMATE_TYPE_POLAR = 5;

/**
 * Worldmap position of city when the climate is temperate.
 * 
 * @constant
 * @type {Object}
 */
civitas.CITY_LOCATION_TEMPERATE = {
	x: 530,
	y: 150
};

/**
 * Worldmap position of city when the climate is tropical.
 * 
 * @constant
 * @type {Object}
 */
civitas.CITY_LOCATION_TROPICAL = {
	x: 45,
	y: 250
};

/**
 * Worldmap position of city when the climate is arid.
 * 
 * @constant
 * @type {Object}
 */
civitas.CITY_LOCATION_ARID = {
	x: 340,
	y: 130
};

/**
 * Worldmap position of city when the climate is continental.
 * 
 * @constant
 * @type {Object}
 */
civitas.CITY_LOCATION_CONTINENTAL = {
	x: 540,
	y: 150
};

/**
 * Worldmap position of city when the climate is polar.
 * 
 * @constant
 * @type {Object}
 */
civitas.CITY_LOCATION_POLAR = {
	x: 490,
	y: 10
};
