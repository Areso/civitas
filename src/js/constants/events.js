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
 * Event responsable for losing faith.
 * 
 * @type {Number}
 * @constant
 */
civitas.EVENT_EFFECT_LOSE_FAITH = 9;

/**
 * Event responsable for gaining faith.
 * 
 * @type {Number}
 * @constant
 */
civitas.EVENT_EFFECT_GAIN_FAITH = 10;

/**
 * Event responsable for losing research.
 * 
 * @type {Number}
 * @constant
 */
civitas.EVENT_EFFECT_LOSE_RESEARCH = 11;

/**
 * Event responsable for gaining research.
 * 
 * @type {Number}
 * @constant
 */
civitas.EVENT_EFFECT_GAIN_RESEARCH = 12;

/**
 * Event responsable for upgrading a random building.
 * 
 * @type {Number}
 * @constant
 */
civitas.EVENT_EFFECT_UPGRADE_BUILDING = 13;

/**
 * List of all available in-game events.
 * 
 * @constant
 * @type {Array}
 */
civitas.EVENTS = [{
	name: 'Great earthquake',
	description: '',
	chance: 0.0001,
	effect: civitas.EVENT_EFFECT_DESTROY_BUILDING,
	data: {
		amount: 1
	}
}, {
	name: 'Royal marriage',
	description: 'A marriage was arranged between a member of your family and the royal family of SETTLEMENT. This raises your influence on SETTLEMENT. Good job!',
	chance: 0.003,
	effect: civitas.EVENT_EFFECT_RAISE_INFLUENCE,
	data: {
		amount: 10
	}
}, {
	name: 'Raiders attack',
	description: 'A band of raiders attacked the outskirts of your settlement. Repairing the affected buildings costs your settlement AMOUNT coins.',
	chance: 0.001,
	effect: civitas.EVENT_EFFECT_LOSE_COINS,
	data: {
		amount: 1000
	}
}, {
	name: 'Discovery',
	description: 'The engineers in your settlement made a great discovery which made you more famous, thus gaining AMOUNT fame.',
	chance: 0.006,
	effect: civitas.EVENT_EFFECT_GAIN_FAME,
	data: {
		amount: 100,
	}
}, {
	name: 'Foreign spy discovered',
	description: 'A spy from SETTLEMENT was found hiding in your settlement, as a reward for finding him you gain AMOUNT espionage.',
	chance: 0.006,
	effect: civitas.EVENT_EFFECT_GAIN_ESPIONAGE,
	data: {
		amount: 10
	}
}, {
	name: 'Your spy uncovered',
	description: 'One of your spies in SETTLEMENT was discovered, SETTLEMENT`s ruler is angry so you lose AMOUNT prestige.',
	chance: 0.008,
	effect: civitas.EVENT_EFFECT_LOSE_PRESTIGE,
	data: {
		amount: 2
	}
}];
