/**
 * List of soldier types, their attributes and cost.
 * 
 * @type {Object}
 * @constant
 */
civitas.SOLDIER_TYPES = {
	'Militia': {
		id: civitas.SOLDIER_TYPE_MILITIA,
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
		id: civitas.SOLDIER_TYPE_AXEMAN,
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
		id: civitas.SOLDIER_TYPE_BOWMAN,
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
		id: civitas.SOLDIER_TYPE_PIKEMAN,
		attack: 5,
		defense: 4,
		cost: {
			coins: 700,
			bread: 1,
			meat: 1,
			beer: 1,
			iron: 1,
			leather: 1,
			weapons: 5
		}
	},
	'Crossbowman': {
		id: civitas.SOLDIER_TYPE_CROSSBOWMAN,
		attack: 7,
		defense: 2,
		cost: {
			coins: 1000,
			bread: 1,
			meat: 1,
			beer: 1,
			clothes: 1,
			iron: 1,
			weapons: 7
		}
	},
	'Knight': {
		id: civitas.SOLDIER_TYPE_KNIGHT,
		attack: 6,
		defense: 9,
		cost: {
			coins: 1500,
			bread: 1,
			meat: 1,
			wine: 1,
			clothes: 1,
			iron: 1,
			weapons: 9
		}
	}
};

/**
 * Militia
 * 
 * @constant
 * @type {Number}
 */
civitas.SOLDIER_TYPE_MILITIA = 0;

/**
 * Axemen
 * 
 * @constant
 * @type {Number}
 */
civitas.SOLDIER_TYPE_AXEMAN = 1;

/**
 * Knights
 * 
 * @constant
 * @type {Number}
 */
civitas.SOLDIER_TYPE_KNIGHT = 2;

/**
 * Bowmen
 * 
 * @constant
 * @type {Number}
 */
civitas.SOLDIER_TYPE_BOWMAN = 3;

/**
 * Crossbowmen
 * 
 * @constant
 * @type {Number}
 */
civitas.SOLDIER_TYPE_CROSSBOWMAN = 4;

/**
 * Pikemen
 * 
 * @constant
 * @type {Number}
 */
civitas.SOLDIER_TYPE_PIKEMAN = 5;

/**
 * List of mercenary armies available for hire.
 * 
 * @constant
 * @type {Object}
 */
civitas.MERCENARIES = [{
	name: 'Legio I Adiutrix',
	description: 'Legio prima Adiutrix (First Auxiliary legion) is a Roman legion.',
	handle: 'legio1',
	icon: 1,
	army: {
		'Axeman': 300,
		'Knight': 100,
		'Crossbowman': 220,
		'Pikeman': 300
	},
	cost: 120000
}, {
	name: 'Legio II Augusta',
	description: 'Legio secunda Augusta (Second Augustan Legion) is a Roman legion.',
	handle: 'legio2',
	icon: 8,
	army: {
		'Axeman': 220,
		'Knight': 100,
		'Crossbowman': 300,
		'Pikeman': 140
	},
	cost: 130000
}, {
	name: 'Legio III Cyrenaica',
	description: 'Legio tertia Cyrenaica (Third Cyrenean legion) is a Roman legion.',
	handle: 'legio3',
	icon: 15,
	army: {
		'Axeman': 280,
		'Crossbowman': 500,
		'Pikeman': 180
	},
	cost: 100000
}, {
	name: 'Legio IV Flavia Felix',
	description: 'Legio quarta Flavia Felix (Fourth Lucky Flavian Legion) is a Roman legion.',
	handle: 'legio4',
	icon: 9,
	army: {
		'Militia': 140,
		'Axeman': 190,
		'Knight': 90,
		'Bowman': 120,
		'Crossbowman': 200,
		'Pikeman': 180
	},
	cost: 190000
}, {
	name: 'Legio V Alaudae',
	description: 'Legio quinta Alaudae (Fifth Larks Legion) is a Roman legion.',
	handle: 'legio5',
	icon: 16,
	army: {
		'Militia': 400,
		'Axeman': 200,
		'Bowman': 190
	},
	cost: 110000
}, {
	name: 'Legio VI Victrix',
	description: 'Legio sexta Victrix (Sixth Victorious Legion) is a Roman legion.',
	handle: 'legio6',
	icon: 22,
	army: {
		'Militia': 330,
		'Axeman': 230,
		'Knight': 100,
		'Bowman': 200
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
	description: 'The Army of the Western Garden is an army established during the reign of Emperor Ling in the Eastern Han Dynasty.',
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
	description: 'The Scholae Palatinae are an elite military guard unit, usually ascribed to the Roman Emperor Constantine the Great as a replacement for the equites singulares Augusti, the cavalry arm of the Praetorian Guard.',
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
	description: 'The Imperial Guards of the Tang Dynasty, also known as the Forbidden Troops were initially honor guards of the emperor and garrisons of the imperial capitals during the Tang`s dinasty formation in early 7th century.',
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
	description: 'The navy of the Order of Saint John, also known as the Maltese Navy, was the first navy of a chivalric order, established in the Middle Ages, around the late 12th century.',
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
 * List of soldiers/ships to start with in various difficulty modes.
 *
 * @constant
 * @type {Object}
 */
civitas.ARMIES_START = [{
		army: {
			'Militia': 10,
			'Axeman': 2,
			'Bowman': 4
		},
		navy: {
			'Corsair': 2,
			'Caravel': 1
		}
	}, {
		army: {
			'Militia': 5,
			'Axeman': 1,
			'Bowman': 2
		},
		navy: {
			'Corsair': 1,
			'Caravel': 1
		}
	}, {
		army: {
			'Militia': 3,
			'Bowman': 2
		},
		navy: {
			'Corsair': 1
		}
	}, {
		army: {},
		navy: {}
}];
