/*
 * Item types
 *
 */

civitas.ITEM_TYPE_ARMOR = 1;

civitas.ITEM_TYPE_WEAPON = 2;

/*
 * Armor types
 *
 */

civitas.ARMOR_TYPE_CLOTH = 1;

civitas.ARMOR_TYPE_LEATHER = 2;

civitas.ARMOR_TYPE_MAIL = 3;

civitas.ARMOR_TYPE_PLATE = 4;

/*
 * Weapon types
 *
 */

civitas.WEAPON_TYPE_MELEE = 1;

civitas.WEAPON_TYPE_RANGED = 2;

/*
 * Ranged weapon types
 *
 */

civitas.WEAPON_TYPE_RANGED_BOW = 1;

civitas.WEAPON_TYPE_RANGED_CROSSBOW = 2;

civitas.WEAPON_TYPE_RANGED_GUN = 3;

civitas.WEAPON_TYPE_RANGED_THROWN = 4;

/*
 * Melee weapon types
 *
 */

civitas.WEAPON_TYPE_MELEE_DAGGER = 1;

civitas.WEAPON_TYPE_MELEE_AXE_ONE_HAND = 2;

civitas.WEAPON_TYPE_MELEE_AXE_TWO_HAND = 3;

civitas.WEAPON_TYPE_MELEE_FIST = 4;

civitas.WEAPON_TYPE_MELEE_MACE_ONE_HAND = 5;

civitas.WEAPON_TYPE_MELEE_MACE_TWO_HAND = 6;

civitas.WEAPON_TYPE_MELEE_POLEARM = 7;

civitas.WEAPON_TYPE_MELEE_STAFF = 8;

civitas.WEAPON_TYPE_MELEE_SWORD_ONE_HAND = 9;

civitas.WEAPON_TYPE_MELEE_SWORD_TWO_HAND = 10;

/*
 * Item quality
 *
 */

civitas.ITEM_QUALITY_COMMON = 1;

civitas.ITEM_QUALITY_RARE = 2;

civitas.ITEM_QUALITY_EPIC = 3;

civitas.ITEM_QUALITY_LEGENDARY = 4;

civitas.ITEM_QUALITY_LIST = [
	'',
	'Common',
	'Rare',
	'Epic',
	'Legendary'
];

civitas.ITEM_QUALITY_COLORS = [
	'',
	'#00ff00',
	'#0070ff',
	'#a335ee',
	'#ff8000'
];
/*
 * Item slots
 *
 */

civitas.ITEM_SLOT_NONE = 0;

civitas.ITEM_SLOT_NECK = 1;

civitas.ITEM_SLOT_HEAD = 2;

civitas.ITEM_SLOT_RING = 3;

civitas.ITEM_SLOT_SHOULDER = 4;

civitas.ITEM_SLOT_CHEST = 5;

civitas.ITEM_SLOT_LEGS = 6;

civitas.ITEM_SLOT_HANDS = 7;

civitas.ITEM_SLOT_WAIST = 8;

civitas.ITEM_SLOT_FEET = 9;

civitas.ITEM_SLOT_MAIN_HAND = 10;

civitas.ITEM_SLOT_OFF_HAND = 11;

civitas.ITEM_SLOT_ANY_HAND = 12;

civitas.ITEM_SLOTS_NUM = 12;

civitas.ITEM_SLOTS_LIST = [
	'',
	'Neck',
	'Head',
	'Ring',
	'Shoulder',
	'Chest',
	'Legs',
	'Hands',
	'Waist',
	'Feet',
	'Main Hand',
	'Off Hand',
	''
];

/*
 * Random items
 *
 */

civitas.RANDOM_UNCOMMON = [
	{
		name: 'ITEM of Spirit',
		stats: {
			spirit: 0
		}
	},
	{
		name: 'ITEM of Intellect',
		stats: {
			intellect: 0
		}
	},
	{
		name: 'ITEM of Strength',
		stats: {
			strength: 0
		}
	},
	{
		name: 'ITEM of Stamina',
		stats: {
			spirit: 0
		}
	},
	{
		name: 'ITEM of Agility',
		stats: {
			agility: 0
		}
	},
	{
		name: 'ITEM of the Tiger',
		stats: {
			strength: 0,
			agility: 0
		}
	},
	{
		name: 'ITEM of the Bear',
		stats: {
			strength: 0,
			stamina: 0
		}
	},
	{
		name: 'ITEM of the Gorilla',
		stats: {
			strength: 0,
			intellect: 0
		}
	},
	{
		name: 'ITEM of the Boar',
		stats: {
			strength: 0,
			spirit: 0
		}
	},
	{
		name: 'ITEM of the Monkey',
		stats: {
			agility: 0,
			stamina: 0
		}
	},
	{
		name: 'ITEM of the Falcon',
		stats: {
			agility: 0,
			intellect: 0
		}
	},
	{
		name: 'ITEM of the Wolf',
		stats: {
			agility: 0,
			spirit: 0
		}
	},
	{
		name: 'ITEM of the Eagle',
		stats: {
			stamina: 0,
			intellect: 0
		}
	},
	{
		name: 'ITEM of the Whale',
		stats: {
			stamina: 0,
			spirit: 0
		}
	},
	{
		name: 'ITEM of the Owl',
		stats: {
			intellect: 0,
			spirit: 0
		}
	},
	{
		name: 'ITEM of the Bandit',
		stats: {
			agility: 0,
			stamina: 0,
			attackPower: 0
		}
	},
	{
		name: 'ITEM of the Beast',
		stats: {
			agility: 0,
			strength: 0,
			stamina: 0
		}
	}
];

/*
 * Weapon items
 *
 */

civitas.ITEM_WEAPON_DAGGER_WICKED = {
	name: 'Wicked Dagger',
	id: 1,
	stats: {
		damageMin: 0,
		damageMax: 2,
		speed: 1.60
	},
	slot: civitas.ITEM_SLOT_ANY_HAND,
	type: civitas.WEAPON_TYPE_MELEE,
	quality: civitas.ITEM_QUALITY_COMMON,
	cost: 1
};

civitas.ITEM_WEAPON_DAGGER_DIRK = {
	name: 'Wicked Dirk',
	id: 2,
	stats: {
		damageMin: 1,
		damageMax: 3,
		speed: 1.60
	},
	slot: civitas.ITEM_SLOT_ANY_HAND,
	type: civitas.WEAPON_TYPE_MELEE,
	quality: civitas.ITEM_QUALITY_COMMON,
	cost: 1.2
};

civitas.ITEM_WEAPON_AXE_SMALL = {
	name: 'Small Axe',
	id: 3,
	stats: {
		damageMin: 3,
		damageMax: 10,
		speed: 1.60
	},
	slot: civitas.ITEM_SLOT_ANY_HAND,
	type: civitas.WEAPON_TYPE_MELEE,
	quality: civitas.ITEM_QUALITY_COMMON,
	cost: 2.2
};

civitas.ITEM_WEAPON_SWORD_SMALL = {
	name: 'Small Sword',
	id: 4,
	stats: {
		damageMin: 2,
		damageMax: 4,
		speed: 1.60
	},
	slot: civitas.ITEM_SLOT_ANY_HAND,
	type: civitas.WEAPON_TYPE_MELEE,
	quality: civitas.ITEM_QUALITY_COMMON,
	cost: 2.2
};

civitas.ITEM_WEAPON_BUCKLER_SMALL = {
	name: 'Small Buckler',
	id: 5,
	stats: {
		armor: 10
	},
	slot: civitas.ITEM_SLOT_OFF_HAND,
	quality: civitas.ITEM_QUALITY_COMMON,
	cost: 2.2
};

civitas.ITEM_EXCALIBUR = {
	name: 'Excalibur',
	id: 6,
	stats: {
		damageMin: 10,
		damageMax: 50,
		speed: 1.0,
		agility: 20,
		stamina: 10,
		strength: 30
	},
	slot: civitas.ITEM_SLOT_MAIN_HAND,
	type: civitas.ITEM_TYPE_WEAPON,
	secondary_type: civitas.WEAPON_TYPE_MELEE,
	quality: civitas.ITEM_QUALITY_LEGENDARY,
	cost: 1
};

civitas.ITEM_CROWN_OF_KINGS = {
	name: 'Crown of Kings',
	id: 7,
	stats: {
		armor: 10,
		stamina: 10,
		strength: 30
	},
	slot: civitas.ITEM_SLOT_HEAD,
	type: civitas.ITEM_TYPE_ARMOR,
	secondary_type: civitas.ARMOR_TYPE_PLATE,
	quality: civitas.ITEM_QUALITY_RARE,
	cost: 1
};

civitas.ITEM_BULWARK_OF_GODS = {
	name: 'The Bulwark of Gods',
	id: 8,
	stats: {
		armor: 100,
		stamina: 20,
		strength: 50
	},
	slot: civitas.ITEM_SLOT_OFF_HAND,
	type: civitas.ITEM_TYPE_ARMOR,
	secondary_type: civitas.ARMOR_TYPE_PLATE,
	quality: civitas.ITEM_QUALITY_EPIC,
	cost: 1
};

civitas.ITEM_CHESTPIECE_OF_ZEUS = {
	name: 'Chestpiece of Zeus',
	id: 9,
	stats: {
		armor: 200,
		stamina: 30,
		agility: 20,
		strength: 20
	},
	slot: civitas.ITEM_SLOT_CHEST,
	type: civitas.ITEM_TYPE_ARMOR,
	secondary_type: civitas.ARMOR_TYPE_PLATE,
	quality: civitas.ITEM_QUALITY_EPIC,
	cost: 1
};

civitas.ITEM_ARCHAIC_WAIST_BAND = {
	name: 'Archaic Waist Band',
	id: 10,
	stats: {
		armor: 5,
		stamina: 3,
		strength: 2,
		intellect: 2
	},
	slot: civitas.ITEM_SLOT_WAIST,
	type: civitas.ITEM_TYPE_ARMOR,
	secondary_type: civitas.ARMOR_TYPE_PLATE,
	quality: civitas.ITEM_QUALITY_RARE,
	cost: 1
};

civitas.ITEM_ALCMENE_BAND = {
	name: 'Alcmene Band',
	id: 11,
	stats: {
		armor: 2,
		stamina: 2,
		strength: 1,
		agility: 2,
		intellect: 1,
		spirit: 10
	},
	slot: civitas.ITEM_SLOT_RING,
	type: civitas.ITEM_TYPE_ARMOR,
	secondary_type: civitas.ARMOR_TYPE_PLATE,
	quality: civitas.ITEM_QUALITY_EPIC,
	cost: 1
};

civitas.ITEM_SUN_NECKLACE = {
	name: 'Sun Necklace',
	flavour: 'From Amun Ra to his beloved son.',
	id: 11,
	stats: {
		armor: 4,
		stamina: 2,
		strength: 1,
		intellect: 10,
		spirit: 1
	},
	slot: civitas.ITEM_SLOT_NECK,
	type: civitas.ITEM_TYPE_ARMOR,
	secondary_type: civitas.ARMOR_TYPE_PLATE,
	quality: civitas.ITEM_QUALITY_LEGENDARY,
	cost: 1
};

civitas.ITEM_TROJAN_BASTARD_SWORD = {
	name: 'Trojan Bastard Sword',
	flavour: 'Hector`s sword, dropped by the fallen Trojan prince.',
	id: 12,
	stats: {
		damageMin: 8,
		damageMax: 34,
		speed: 1.3,
		stamina: 15,
		strength: 10
	},
	slot: civitas.ITEM_SLOT_MAIN_HAND,
	type: civitas.ITEM_TYPE_WEAPON,
	secondary_type: civitas.WEAPON_TYPE_MELEE,
	quality: civitas.ITEM_QUALITY_LEGENDARY,
	cost: 1
};

civitas.ITEM_SPEAR_OF_DESTINY = {
	name: 'Spear of Destiny',
	flavour: 'The spear that befell the Trojan prince, Hector.',
	id: 13,
	stats: {
		damageMin: 25,
		damageMax: 90,
		speed: 2,
		stamina: 40,
		strength: 3
	},
	slot: civitas.ITEM_SLOT_MAIN_HAND,
	type: civitas.ITEM_TYPE_WEAPON,
	secondary_type: civitas.WEAPON_TYPE_MELEE,
	quality: civitas.ITEM_QUALITY_LEGENDARY,
	cost: 1
};

civitas.ITEM_GOLDEN_KATANA = {
	name: 'Golden Katana',
	id: 14,
	stats: {
		damageMin: 10,
		damageMax: 20,
		speed: 1.1,
		stamina: 10,
		agility: 20,
		strength: 5
	},
	slot: civitas.ITEM_SLOT_OFF_HAND,
	type: civitas.ITEM_TYPE_WEAPON,
	secondary_type: civitas.WEAPON_TYPE_MELEE,
	quality: civitas.ITEM_QUALITY_RARE,
	cost: 1
};

civitas.ITEM_ETHEREAL_BOOTS = {
	name: 'Ethereal Boots',
	id: 15,
	stats: {
		armor: 6,
		strength: 10,
		agility: 10
	},
	slot: civitas.ITEM_SLOT_FEET,
	type: civitas.ITEM_TYPE_ARMOR,
	secondary_type: civitas.ARMOR_TYPE_PLATE,
	quality: civitas.ITEM_QUALITY_RARE,
	cost: 1
};

civitas.ITEM_SHOULDERPADS_OF_VALOR = {
	name: 'Shoulderpads of Valor',
	id: 16,
	stats: {
		armor: 15,
		strength: 20,
		stamina: 10
	},
	slot: civitas.ITEM_SLOT_SHOULDER,
	type: civitas.ITEM_TYPE_ARMOR,
	secondary_type: civitas.ARMOR_TYPE_PLATE,
	quality: civitas.ITEM_QUALITY_COMMON,
	cost: 1
};

civitas.ITEM_MOUNTAIN_TROLLS = {
	name: 'Mountain Trolls',
	id: 17,
	stats: {
		armor: 25,
		agility: 10,
		stamina: 30
	},
	slot: civitas.ITEM_SLOT_LEGS,
	type: civitas.ITEM_TYPE_ARMOR,
	secondary_type: civitas.ARMOR_TYPE_PLATE,
	quality: civitas.ITEM_QUALITY_EPIC,
	cost: 1
};

civitas.ITEM_GAUNTLETS_OF_GHASTLY_GLARE = {
	name: 'Gauntlets of Ghastly Glare',
	flavour: 'Ghastly indeed ...',
	id: 18,
	stats: {
		armor: 10,
		strength: 20,
		stamina: 2,
		intellect: 30
	},
	slot: civitas.ITEM_SLOT_HANDS,
	type: civitas.ITEM_TYPE_ARMOR,
	secondary_type: civitas.ARMOR_TYPE_PLATE,
	quality: civitas.ITEM_QUALITY_EPIC,
	cost: 1
};
