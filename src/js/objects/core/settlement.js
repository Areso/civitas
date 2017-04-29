/**
 * Main Game settlement object.
 * 
 * @param {type} params
 * @class {civitas.objects.settlement}
 * @returns {civitas.objects.settlement}
 */
civitas.objects.settlement = function(params) {
	
	/**
	 * Settlement properties.
	 *
	 * @private
	 * @type {Object}
	 */
	this.properties = {
		id: null,
		type: null,
		name: null,
		storage: null,
		population: null,
		climate: null,
		level: null,
		icon: null,
		population: null,
		ruler: null,
		religion: null,
		player: null
	};

	/**
	 * Diplomacy status with all the settlements in the world.
	 *
	 * @private
	 * @type {Object}
	 */
	this._status = {};

	/**
	 * Pointer to the game core.
	 * 
	 * @private
	 * @type {civitas.game}
	 */
	this._core = null;
	
	/**
	 * List of the buildings in this settlement.
	 * 
	 * @private
	 * @type {Array}
	 */
	this.buildings = [];

	/**
	 * Soldiers headquartered in this settlement.
	 * 
	 * @private
	 * @type {Number}
	 */
	this.army = {};

	/**
	 * Ships built in this settlement.
	 * 
	 * @private
	 * @type {Number}
	 */
	this.navy = {};

	/**
	 * Mercenary armies available for this settlement.
	 * 
	 * @private
	 * @type {Number}
	 */
	this._mercenary = [];
	
	/**
	 * The resources of this settlement.
	 * 
	 * @private
	 * @type {Object}
	 */
	this.resources = {};

	/**
	 * The settlement heroes.
	 *
	 * @private
	 * @type {Array}
	 */
	this._heroes = [];

	/**
	 * List of the imports and exports of this settlement.
	 * 
	 * @private
	 * @type {Object}
	 */
	this.trades = null;

	/**
	 * AI module for this settlement.
	 *
	 * @private
	 * @type {civitas.modules.ai}
	 */
	this._ai = null;

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {civitas.objects.settlement}
	 * @param {Object} params
	 */
	this.__init = function(params) {
		this._core = params.core;
		this.properties.id = params.properties.id;
		this.properties.name = params.properties.name;
		this.properties.player = (typeof params.properties.player !== 'undefined') ? params.properties.player : false;
		this.properties.level = (typeof params.properties.level !== 'undefined') ? params.properties.level : 1;
		this.properties.climate = (typeof params.properties.climate !== 'undefined') ? params.properties.climate : civitas.CLIMATE_TEMPERATE;
		this.properties.religion = (typeof params.properties.religion !== 'undefined') ? params.properties.religion : civitas.RELIGION_NONE;
		this.properties.ruler = params.properties.ruler;
		this.properties.icon = (typeof params.properties.icon !== 'undefined') ? params.properties.icon : 1;
		this.properties.population = (typeof params.properties.population !== 'undefined') ? params.properties.population : this.properties.level * civitas.POPULATION_PER_LEVEL;
		this.properties.type = (typeof params.properties.type !== 'undefined') ? params.properties.type : civitas.CITY;
		this.army = this._setup_army(params.army);
		this.navy = this._setup_navy(params.navy);
		this._mercenary = (typeof params.mercenary !== 'undefined') ? params.mercenary : [];
		this._status = (typeof params.status !== 'undefined') ? params.status : {};
		this._heroes = (typeof params.heroes !== 'undefined') ? params.heroes : [];
		this.resources = this._build_resources(params.resources);
		if (typeof params.trades !== 'undefined') {
			this.trades = params.trades;
		} else {
			this.reset_trades();
		}
		if (this.is_player() === false) {
			this.resources.fame = civitas.LEVELS[this.level()];
			if (this.properties.type === civitas.CITY) {
				this._ai = new civitas.modules.ai({
					core: this,
					type: this.properties.ruler.personality
				});
			}
		}
		return this;
	};

	/**
	 * Get a reference to the AI module.
	 *
	 * @public
	 * @returns {civitas.modules.ai}
	 */
	this.ai = function() {
		return this._ai;
	};

	/**
	 * Export settlement data.
	 *
	 * @returns {Object}
	 * @public
	 */
	this.export = function() {
		var data = {
			properties: this.get_properties(),
			trades: this.get_trades(),
			resources: this.get_resources(),
			army: this.get_army_total().army,
			navy: this.get_navy_total().navy,
			buildings: this.export_buildings(),
			mercenary: this.mercenary(),
			heroes: this.heroes()
		};
		if (this.is_player()) {
			data.status = this.status();
		}
		return data;
	};

	/**
	 * Get the settlement properties.
	 *
	 * @public
	 * @returns {Object}
	 */
	this.get_properties = function() {
		return this.properties;
	};

	/**
	 * Get/set the name of this settlement.
	 * 
	 * @public
	 * @param {String} value
	 * @returns {String}
	 */
	this.name = function(value) {
		if (typeof value !== 'undefined') {
			this.properties.name = value;
		}
		return this.properties.name;
	};

	/**
	 * Return a pointer to the game core.
	 * 
	 * @public
	 * @returns {civitas.game}
	 */
	this.core = function() {
		return this._core;
	};

	/**
	 * Raise the level of this settlement.
	 * 
	 * @public
	 * @returns {civitas.objects.settlement}
	 */
	this.level_up = function() {
		var level = this.level();
		this.fame(civitas.LEVELS[level]);
		this.properties.level++;
		this.properties.population = this.properties.level * civitas.POPULATION_PER_LEVEL;
		if (this.is_player()) {
			this.core().refresh_panels();
			$('.citylevel').html(this.properties.level);
			this.core().notify('The city of ' + this.name() + ' is now level ' + this.properties.level + '.');
		}
		return this;
	};

	/**
	 * Rename this settlement.
	 * 
	 * @public
	 * @param {String} value
	 * @returns {String}
	 */
	this.rename = function(value) {
		return this.name(value);
	};

	/**
	 * Get the rank of this settlement
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_rank = function() {
		var level = this.level();
		var half_level = Math.round(level / 2);
		return {
			fame: this.fame(),
			prestige: this.prestige(),
			espionage: this.espionage(),
			army: this.get_army_total().total,
			navy: this.get_navy_total().total,
			score: Math.floor((
				((this.fame() > 0 ? this.fame() : 1) / half_level)
				+ (this.prestige() / half_level)
				+ (this.espionage() / half_level)
				+ ((this.get_army_total().total > 0 ? this.get_army_total().total : 1) / half_level)
				+ ((this.get_navy_total().total > 0 ? this.get_navy_total().total : 1) / (half_level / 2))
			) / half_level)
		};
	};
	
	/**
	 * Ask the City Council for tips.
	 * 
	 * @public
	 * @returns {Array}
	 */
	this.city_council = function() {
		var resources = this.get_resources();
		var storage = this.storage();
		var advices = [];
		var army = this.get_army_total();
		var navy = this.get_navy_total();
		if (army.total === 0) {
			advices.push('You have no army, this is an open invitation for attack.');
		}
		if (army.total < 10 && army.total > 0) {
			advices.push('You have a small army, try to recruit some more soldiers.');
		}
		if (navy.total === 0) {
			advices.push('You have no navy, this is an open invitation for attack.');
		}
		if (navy.total < 3 && navy.total > 0) {
			advices.push('You have a small navy, try to construct some more ships.');
		}
		if (storage.occupied >= storage.all) {
			advices.push('You have no storage space to store your new goods and they ' +
				'will be lost. Sell some goods or build a warehouse.');
		} else if ((storage.all - storage.occupied) < 100) {
			advices.push('You will soon run out of storage space and all goods produced ' +
				'will be lost. Sell some goods or build a warehouse.');
		}
		if (resources.coins < 1000) {
			advices.push('You seem to be losing coins fast, sell some goods or upgrade ' +
				'your houses to get better taxes.');
		}
		if (resources.wood < 100 || resources.stones < 100 || resources.woodplanks < 50) {
			advices.push('You are lacking construction materials, buy some stones, wood ' +
				'planks and/or wood off the World Trade Market.');
		}
		if (resources.prestige < 100) {
			advices.push('Your settlement`s prestige is too low, start doing trades with the other settlements to improve it.');
		}
		if (resources.faith >= 999) {
			advices.push('You are at maximum faith, start using it from your settlement`s Church.');
		}
		if (resources.research >= 999) {
			advices.push('You are at maximum research, start using it for settlement researches, from your Academy.');
		}
		if (resources.espionage >= 999) {
			advices.push('You are at maximum espionage, start using it for espionage missiong from your Embassy.');
		}
		if (resources.coins > 100000) {
			advices.push('You have lots of coins, why not invest some in goods?');
		}
		for (var item in this.resources) {
			if ($.inArray(item, civitas.NON_RESOURCES) === -1) {
				if (resources[item] > 1000) {
					advices.push('You seem to have a surplus of ' + civitas.utils.get_resource_name(item) + '. You can sell some and get coins instead.');
				}
			}
		}
		var buildings = this.get_buildings();
		var _buildings = [];
		for (var i = 0; i < buildings.length; i++) {
			if (buildings[i].has_problems()) {
				_buildings.push(buildings[i].get_name());
			}
		}
		if (_buildings.length > 0) {
			advices.push((_buildings.length === 1 ? 'One' : 'Several') + ' of your buildings (' + _buildings.join(', ') + ') ' + (_buildings.length === 1 ? 'is' : 'are') + ' not working due to a shortage of materials. Buy more goods.');
		}
		return advices;
	};
	
	/**
	 * Get/set the ruler object of this settlement.
	 * 
	 * @public
	 * @param {Object} value
	 * @returns {Object}
	 */
	this.ruler = function(value) {
		if (typeof value !== 'undefined') {
			this.properties.ruler = value;
		}
		return this.properties.ruler;
	};

	/**
	 * Get/set the level of this settlement.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.level = function(value) {
		if (typeof value !== 'undefined') {
			this.properties.level = value;
		}
		return this.properties.level;
	};

	/**
	 * Get/set the personality of the ruler of this settlement.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Object}
	 */
	this.personality = function(value) {
		if (typeof value !== 'undefined') {
			this.properties.ruler.personality = value;
		}
		return {
			id: this.properties.ruler.personality,
			name: civitas.PERSONALITIES[this.properties.ruler.personality].capitalize()
		};
	};

	/**
	 * Get/set the climate of the area of this settlement.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Object}
	 */
	this.climate = function(value) {
		if (typeof value !== 'undefined') {
			this.properties.climate = value;
		}
		return {
			id: this.properties.climate,
			name: civitas.CLIMATES[this.properties.climate].capitalize()
		};
	};
	
	/**
	 * Get/set the nationality of this settlement.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Object}
	 */
	this.nationality = function(value) {
		if (typeof value !== 'undefined') {
			this.properties.nationality = value;
		}
		return {
			id: this.properties.ruler.nationality,
			name: civitas.NATIONS[this.properties.ruler.nationality].capitalize()
		};
	};

	/**
	 * Get/set the icon of this settlement.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.icon = function(value) {
		if (typeof value !== 'undefined') {
			this.properties.icon = value;
		}
		return this.properties.icon;
	};

	/**
	 * Get/set the id of this settlement.
	 *
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.id = function(value) {
		if (typeof value !== 'undefined') {
			this.properties.id = id;
		}
		return this.properties.id;
	};

	/**
	 * Check if this settlement is a player settlement.
	 *
	 * @public
	 * @returns {Boolean}
	 */
	this.is_player = function() {
		return this.properties.player;
	};

	/**
	 * Return the type of this settlement.
	 *
	 * @public
	 * @returns {Number}
	 */
	this.get_type = function() {
		return this.properties.type;
	};

	/**
	 * Return the population of this settlement.
	 *
	 * @public
	 * @returns {Number}
	 */
	this.population = function() {
		return this.properties.population;
	};

	/**
	 * Check if this settlement is a city.
	 *
	 * @public
	 * @returns {Boolean}
	 */
	this.is_city = function() {
		return this.properties.type === civitas.CITY;
	};

	/**
	 * Check if this settlement is a village.
	 *
	 * @public
	 * @returns {Boolean}
	 */
	this.is_village = function() {
		return this.properties.type === civitas.VILLAGE;
	};

	/**
	 * Refresh the heroes in the Tavern.
	 *
	 * @public
	 * @returns {civitas.objects.settlement}
	 */
	this.refresh_heroes = function() {
		if (this.is_building_built('tavern')) {
			// TODO
		}
	};

	/**
	 * Check if the player settlement's nationality and the one passed as parameter nationality are the same.
	 *
	 * @param {String|civitas.objects.settlement|Number} settlement
	 * @returns {Boolean}
	 * @public
	 */
	this.has_same_nationality = function(settlement) {
		if (typeof settlement === 'object' && this.nationality().id === settlement.nationality().id) {
			return true;
		} else if (typeof settlement === 'number' || typeof settlement === 'string') {
			settlement = this.core().get_settlement(settlement);
			if (this.nationality().id === settlement.nationality().id) {
				return true;
			}
		}
		return false;
	};

	/**
	 * Get/set the heroes of the settlement.
	 *
	 * @public
	 * @returns {Object}
	 */
	this.heroes = function(value) {
		if (typeof value !== 'undefined') {
			this._heroes = value;
		}
		return this._heroes;
	};

	// Fire up the constructor
	return this.__init(params);
};
