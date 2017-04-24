/**
 * Corsair ship.
 * 
 * @constant
 * @type {Number}
 */
civitas.SHIP_CORSAIR = 0;

/**
 * Caravel ship.
 * 
 * @constant
 * @type {Number}
 */
civitas.SHIP_CARAVEL = 1;

/**
 * Warship ship.
 * 
 * @constant
 * @type {Number}
 */
civitas.SHIP_WARSHIP = 2;

/**
 * Galleon ship.
 * 
 * @constant
 * @type {Number}
 */
civitas.SHIP_GALLEON = 3;

/**
 * Ship of the Line ship.
 * 
 * @constant
 * @type {Number}
 */
civitas.SHIP_SHIPOFTHELINE = 4;

/**
 * Frigate ship.
 * 
 * @constant
 * @type {Number}
 */
civitas.SHIP_FRIGATE = 5;

/**
 * List of ship types, their attributes and cost.
 * 
 * @type {Object}
 * @constant
 */
civitas.SHIPS = {
	'Corsair': {
		id: civitas.SHIP_CORSAIR,
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
	'Caravel': {
		id: civitas.SHIP_CARAVEL,
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
	'Frigate': {
		id: civitas.SHIP_FRIGATE,
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
	'Galleon': {
		id: civitas.SHIP_GALLEON,
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
	'Warship': {
		id: civitas.SHIP_WARSHIP,
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
	'Ship of the Line': {
		id: civitas.SHIP_SHIPOFTHELINE,
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
