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
