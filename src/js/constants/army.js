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
