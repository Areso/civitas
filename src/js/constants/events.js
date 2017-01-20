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
}];
