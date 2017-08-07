/*
 * Item types
 *
 */

civitas.ITEM_TYPE_ARMOR = 1;

civitas.ITEM_TYPE_WEAPON = 2;

civitas.ITEM_TYPE_DRINK = 3;

/*
 * Armor types
 *
 */

civitas.ARMOR_TYPE_CLOTH = 0;

civitas.ARMOR_TYPE_LEATHER = 1;

civitas.ARMOR_TYPE_MAIL = 2;

civitas.ARMOR_TYPE_PLATE = 3;

/*
 * Weapon types
 *
 */

civitas.WEAPON_TYPE_MELEE = 0;

civitas.WEAPON_TYPE_RANGED = 1;

/*
 * Ranged weapon types
 *
 */

civitas.WEAPON_TYPE_RANGED_BOW = 0;

civitas.WEAPON_TYPE_RANGED_CROSSBOW = 1;

civitas.WEAPON_TYPE_RANGED_GUN = 2;

civitas.WEAPON_TYPE_RANGED_THROWN = 3;

/*
 * Melee weapon types
 *
 */

civitas.WEAPON_TYPE_MELEE_DAGGER = 0;

civitas.WEAPON_TYPE_MELEE_AXE_ONE_HAND = 1;

civitas.WEAPON_TYPE_MELEE_AXE_TWO_HAND = 2;

civitas.WEAPON_TYPE_MELEE_FIST = 3;

civitas.WEAPON_TYPE_MELEE_MACE_ONE_HAND = 4;

civitas.WEAPON_TYPE_MELEE_MACE_TWO_HAND = 5;

civitas.WEAPON_TYPE_MELEE_POLEARM = 6;

civitas.WEAPON_TYPE_MELEE_STAFF = 7;

civitas.WEAPON_TYPE_MELEE_SWORD_ONE_HAND = 8;

civitas.WEAPON_TYPE_MELEE_SWORD_TWO_HAND = 9;

/*
 * Item quality
 *
 */

civitas.ITEM_QUALITY_COMMON = 1;

civitas.ITEM_QUALITY_COMMON_COLOR = '#ffffff';

civitas.ITEM_QUALITY_RARE = 3;

civitas.ITEM_QUALITY_RARE_COLOR = '#0070ff';

civitas.ITEM_QUALITY_EPIC = 4;

civitas.ITEM_QUALITY_EPIC_COLOR = '#a335ee';

civitas.ITEM_QUALITY_LEGENDARY = 5;

civitas.ITEM_QUALITY_LEGENDARY_COLOR = '#ff8000';

/*
 * Item slots
 *
 */

civitas.ITEM_SLOT_NONE = 0;

civitas.ITEM_SLOT_HEAD = 1;

civitas.ITEM_SLOT_NECK = 2;

civitas.ITEM_SLOT_CHEST = 3;

civitas.ITEM_SLOT_SHOULDER = 4;

civitas.ITEM_SLOT_LEGS = 5;

civitas.ITEM_SLOT_HANDS = 6;

civitas.ITEM_SLOT_FEET = 7;

civitas.ITEM_SLOT_WAIST = 8;

civitas.ITEM_SLOT_RING = 9;

civitas.ITEM_SLOT_MAIN_HAND = 10;

civitas.ITEM_SLOT_OFF_HAND = 11;

civitas.ITEM_SLOT_ANY_HAND = 12;

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
	id: 100,
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
	id: 101,
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
	id: 102,
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
	id: 103,
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
	id: 104,
	stats: {
		armor: 10
	},
	slot: civitas.ITEM_SLOT_OFF_HAND,
	quality: civitas.ITEM_QUALITY_COMMON,
	cost: 2.2
};
