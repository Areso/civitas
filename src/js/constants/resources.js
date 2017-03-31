/**
 * List of all the resources available in-game.
 * 
 * @constant
 * @type {Object}
 */
civitas.RESOURCES = {
	'coins': {
		name: 'Coins'
	},
	'fame': {
		name: 'Fame'
	},
	'prestige': {
		name: 'Prestige'
	},
	'espionage': {
		name: 'Espionage'
	},
	'research': {
		name: 'Research'
	},
	'almonds': {
		name: 'Almonds',
		price: 200
	},
	'barrels': {
		name: 'Barrels',
		price: 60
	},
	'beer': {
		name: 'Beer',
		price: 30
	},
	'books': {
		name: 'Books',
		price: 120
	},
	'bread': {
		name: 'Bread',
		price: 30
	},
	'brine': {
		name: 'Brine',
		price: 10
	},
	'brass': {
		name: 'Brass',
		price: 60
	},
	'candles': {
		name: 'Candles',
		price: 100
	},
	'candlesticks': {
		name: 'Candlesticks',
		price: 170
	},
	'cannons': {
		name: 'Cannons',
		price: 700
	},
	'carpets': {
		name: 'Carpets',
		price: 400
	},
	'catapults': {
		name: 'Catapults',
		price: 1200
	},
	'cattle': {
		name: 'Cattle',
		price: 41
	},
	'cider': {
		name: 'Cider',
		price: 42
	},
	'clay': {
		name: 'Clay',
		price: 35
	},
	'clothes': {
		name: 'Clothes',
		price: 104
	},
	'coal': {
		name: 'Coal',
		price: 34
	},
	'coffee': {
		name: 'Coffee',
		price: 240
	},
	'coffeebeans': {
		name: 'Coffee Beans',
		price: 136
	},
	'copper': {
		name: 'Copper',
		price: 43
	},
	'donkeys': {
		name: 'Donkeys',
		price: 90
	},
	'fish': {
		name: 'Fish',
		price: 16
	},
	'flour': {
		name: 'Flour',
		price: 42
	},
	'furcoats': {
		name: 'Fur coats',
		price: 122
	},
	'furs': {
		name: 'Furs',
		price: 78
	},
	'gems': {
		name: 'Gems',
		price: 460
	},
	'glass': {
		name: 'Glass',
		price: 86
	},
	'glasses': {
		name: 'Glasses',
		price: 140
	},
	'gold': {
		name: 'Gold',
		price: 194
	},
	'goldores': {
		name: 'Gold ores',
		price: 90
	},
	'grapes': {
		name: 'Grapes',
		price: 35
	},
	'hemp': {
		name: 'Hemp',
		price: 46
	},
	'herbs': {
		name: 'Herbs',
		price: 18
	},
	'hides': {
		name: 'Hides',
		price: 25
	},
	'indigo': {
		name: 'Indigo',
		price: 80
	},
	'iron': {
		name: 'Iron',
		price: 86
	},
	'ironores': {
		name: 'Iron ores',
		price: 45
	},
	'leather': {
		name: 'Leather',
		price: 60
	},
	'meat': {
		name: 'Meat',
		price: 30
	},
	'milk': {
		name: 'Milk',
		price: 55
	},
	'paper': {
		name: 'Paper',
		price: 70
	},
	'pearls': {
		name: 'Pearls',
		price: 450
	},
	'perfume': {
		name: 'Perfume',
		price: 305
	},
	'provisions': {
		name: 'Provisions',
		price: 300
	},
	'quartz': {
		name: 'Quartz',
		price: 26
	},
	'ropes': {
		name: 'Ropes',
		price: 42
	},
	'roses': {
		name: 'Roses',
		price: 70
	},
	'salt': {
		name: 'Salt',
		price: 20
	},
	'silk': {
		name: 'Silk',
		price: 320
	},
	'silver': {
		name: 'Silver',
		price: 300
	},
	'spices': {
		name: 'Spices',
		price: 285
	},
	'spyglasses': {
		name: 'Spyglasses',
		price: 280
	},
	'statues': {
		name: 'Statues',
		price: 800
	},
	'stones': {
		name: 'Stones',
		price: 16
	},
	'sugar': {
		name: 'Sugar',
		price: 145
	},
	'sugarcane': {
		name: 'Sugarcane',
		price: 120
	},
	'sulphur': {
		name: 'Sulphur',
		price: 180
	},
	'wax': {
		name: 'Wax',
		price: 40
	},
	'weapons': {
		name: 'Weapons',
		price: 205
	},
	'wheat': {
		name: 'Wheat',
		price: 25
	},
	'wine': {
		name: 'Wine',
		price: 95
	},
	'wood': {
		name: 'Wood',
		price: 17
	},
	'woodplanks': {
		name: 'Wood Planks',
		price: 40
	}
};

/**
 * Resources that don't actually use up storage space, they're more ... virtual.
 *
 * @constant
 * @type {Array}
 */
civitas.NON_RESOURCES = [
	'coins', 'fame', 'prestige', 'espionage', 'research'
];

/**
 * Resources that will be shown on the main Storage Panel side.
 *
 * @constant
 * @type {Array}
 */
civitas.MAIN_RESOURCES = [
	'bread', 'brass', 'cannons', 'cattle', 'cider', 'clay', 'clothes', 'coal', 'copper',
	'fish', 'flour', 'furs', 'herbs', 'hides', 'iron', 'ironores', 'meat', 'milk', 'salt',
	'stones', 'weapons', 'wheat', 'wood', 'woodplanks'
];
