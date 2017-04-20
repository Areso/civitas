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
