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
