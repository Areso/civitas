/**
 * Main Game settlement object.
 * 
 * @param {type} params
 * @class {civitas.objects.settlement}
 * @returns {civitas.objects.settlement}
 */
civitas.objects.settlement = function(params) {
	
	this.id = null;

	/**
	 * Settlement type.
	 *
	 * @private
	 * @type {Number}
	 */
	this.settlement_type = null;

	/**
	 * The name of this settlement.
	 * 
	 * @private
	 * @type {String}
	 */
	this.name = null;
	
	/**
	 * The settlement ruler.
	 * 
	 * @private
	 * @type {String}
	 */
	this.ruler = null;
	
	/**
	 * Pointer to the game core.
	 * 
	 * @private
	 * @type {civitas.game}
	 */
	this.core = null;
	
	/**
	 * List of the buildings in this settlement.
	 * 
	 * @private
	 * @type {Array}
	 */
	this.buildings = [];
	
	/**
	 * List of buildings in a special export format.
	 *
	 * @type {Array}
	 * @private
	 */
	this.buildings_list = [];
	
	/**
	 * Storage space available in this settlement.
	 * 
	 * @private
	 * @type {Number}
	 */
	this.storage = 0;

	/**
	 * Settlement population.
	 *
	 * @private
	 * @type {Number}
	 */
	this.population = 1;

	/**
	 * The climate of the zone the settlement resides in. It affects the type of
	 * the buildings you can construct.
	 * 
	 * @private
	 * @type {String}
	 */
	this.climate = null;
	
	/**
	 * Soldiers headquartered in this settlement.
	 * 
	 * @private
	 * @type {Number}
	 */
	this.army = [];
	
	/**
	 * Flag whether this settlement belongs to a player or is AI-controlled.
	 *
	 * @private
	 * @type {Boolean}
	 */
	this.player = false;

	/**
	 * Ships built in this settlement.
	 * 
	 * @private
	 * @type {Number}
	 */
	this.navy = [];

	/**
	 * Mercenary armies available for this settlement.
	 * 
	 * @private
	 * @type {Number}
	 */
	this.mercenary = [];
	
	/**
	 * List of mercenary armies in a special export format.
	 *
	 * @type {Array}
	 * @private
	 */
	this.mercenary_list = [];

	/**
	 * The resources of this settlement.
	 * 
	 * @private
	 * @type {Object}
	 */
	this.resources = {};
	
	/**
	 * The level of the settlement.
	 * 
	 * @private
	 * @type {Number}
	 */
	this.level = 1;
	
	/**
	 * List of the imports and exports of this settlement.
	 * 
	 * @private
	 * @type {Object}
	 */
	this.trades = null;
	
	/**
	 * The icon of this settlement.
	 * 
	 * @type {Number}
	 * @private
	 */
	this.icon = null;

	/**
	 * The diplomatic status of this settlement.
	 *
	 * @type {Object}
	 * @private
	 */
	this.status = null;

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {civitas.objects.settlement}
	 * @param {Object} params
	 */
	this.__init = function(params) {
		this.core = params.core;
		this.id = params.id;
		this.name = params.name;
		this.player = (typeof params.player !== 'undefined') ? params.player : false;
		this.level = (typeof params.level !== 'undefined') ? params.level : 1;
		this.climate = (typeof params.climate !== 'undefined') ? params.climate : civitas.CLIMATE_TEMPERATE;
		this.religion = (typeof params.religion !== 'undefined') ? params.religion : civitas.RELIGION_NONE;
		this.ruler = params.ruler;
		this.icon = (typeof params.icon !== 'undefined') ? params.icon : 1;
		this.population = (typeof params.population !== 'undefined') ? params.population : this.level * civitas.POPULATION_PER_LEVEL;
		this.settlement_type = (typeof params.settlement_type !== 'undefined') ? params.settlement_type : civitas.CITY;
		if (typeof params.army_list !== 'undefined') {
			this.setup_army(params.army_list);
		}
		if (typeof params.navy_list !== 'undefined') {
			this.setup_navy(params.navy_list);
		}
		if (typeof params.mercenary_list !== 'undefined') {
			this.setup_mercenary(params.mercenary_list);
		} else {
			this.mercenary = [];
		}
		this.status = (typeof params.status !== 'undefined') ? params.status : {};
		this.resources = this._build_resources(params.resources);
		if (typeof params.trades !== 'undefined') {
			this.trades = params.trades;
		} else {
			this.reset_trades();
		}
		if (this.is_player() === false) {
			this.resources.fame = civitas.LEVELS[this.get_level()];
		}
		return this;
	};

	/**
	 * Export settlement data.
	 *
	 * @returns {Object}
	 * @public
	 */
	this.export = function() {
		var data = {
			id: this.get_id(),
			name: this.get_name(),
			player: this.is_player(),
			level: this.get_level(),
			climate: this.get_climate().id,
			religion: this.get_religion().id,
			ruler: this.get_ruler(),
			icon: this.get_icon(),
			trades: this.get_trades(),
			resources: this.get_resources(),
			army_list: this.get_army_total().army,
			navy_list: this.get_navy_total().navy,
			buildings: this.get_buildings_list(),
			settlement_type: this.get_settlement_type(),
			population: this.get_population(),
			mercenary_list: this.get_mercenary_list()
		};
		if (this.is_player()) {
			data.status = this.get_status();
		}
		return data;
	};

	/**
	 * Adjust the resources according to the settlement owner.
	 *
	 * @private
	 * @returns {Object}
	 */
	this._build_resources = function(_resources) {
		var difficulty = this.get_core().get_difficulty();
		var _trades = {};
		if (!this.is_player()) {
			if (this.is_city() && typeof civitas.SETTLEMENTS[this.get_id()] !== 'undefined') {
				_trades = civitas.SETTLEMENTS[this.get_id()].trades.exports;
			}
			for (var item in civitas.RESOURCES) {
				if (typeof _resources[item] === 'undefined') {
					if (typeof _trades[item] !== 'undefined') {
						_resources[item] = civitas.utils.get_random_by_importance(_trades[item]);
					} else {
						_resources[item] = 0;
					}
				}
			}
		} else {
			if (typeof _resources === 'undefined') {
				_resources = civitas.START_RESOURCES[difficulty - 1];
			}
			for (var item in civitas.RESOURCES) {
				if (typeof _resources[item] === 'undefined') {
					_resources[item] = 0;
				}
			}
		}
		return _resources;
	};

	/**
	 * Add a specified amount of a resource to the storage of this settlement.
	 * 
	 * @public
	 * @param {String} item
	 * @param {Number} amount
	 * @returns {Boolean}
	 */
	this.add_to_storage = function(item, amount) {
		if (!civitas.utils.resource_exists(item)) {
			this.get_core().error('The resource you specified does not exist.');
			return false;
		}
		var res = this.get_resources();
		if (typeof res[item] !== 'undefined') {
			res[item] = res[item] + amount;
		} else {
			res[item] = amount;
		}
		return true;
	};
	
	/**
	 * Check if the settlement has the required coins to create this building.
	 * 
	 * @public
	 * @param {Number} coins
	 * @param {Boolean} alert
	 * @returns {Boolean}
	 */
	this.has_coins = function(coins, alert) {
		var resources = this.get_resources();
		if (this.get_coins() - coins < 0) {
			if (alert !== false) {
				this.get_core().error(this.get_name() + ' doesn`t have enough ' + civitas.utils.get_resource_name('coins') + '.');
			}
			return false;
		}
		return true;
	};
	
	/**
	 * Check if this settlement has the specified goods in storage.
	 * 
	 * @public
	 * @param {String} resource
	 * @param {Number} amount
	 * @returns {Boolean}
	 */
	this.has_resources = function(resource, amount) {
		if (!civitas.utils.resource_exists(resource)) {
			this.get_core().error('The resource you specified does not exist.');
			return false;
		}
		var res = this.get_resources();
		if ((res[resource] - amount) < 0) {
			this.get_core().error(this.get_name() + ' does not have enough ' + civitas.utils.get_resource_name(resource) + '.');
			return false;
		}
		return true;
	};

	/**
	 * Get the list of all the buildings in this settlement.
	 * 
	 * @public
	 * @returns {Array}
	 */
	this.get_buildings = function() {
		return this.buildings;
	};

	/**
	 * Get the name of this settlement.
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_name = function() {
		return this.name;
	};

	/**
	 * Set the name of this settlement.
	 * 
	 * @public
	 * @param {String} value
	 * @returns {civitas.objects.settlement}
	 */
	this.set_name = function(value) {
		this.name = value;
		return this;
	};

	/**
	 * Return a pointer to the game core.
	 * 
	 * @public
	 * @returns {civitas.game}
	 */
	this.get_core = function() {
		return this.core;
	};

	/**
	 * Raise the level of this settlement.
	 * 
	 * @public
	 * @returns {civitas.objects.settlement}
	 */
	this.level_up = function() {
		var level = this.get_level();
		this.set_fame(civitas.LEVELS[level]);
		this.level++;
		this.calc_population();
		if (this.is_player()) {
			this.get_core().refresh_panels();
			$('.citylevel').html(this.level);
			this.get_core().notify('The city of ' + this.get_name() + ' is now level ' + this.level + '.');
		}
		return this;
	};

	/**
	 * Rename this settlement.
	 * 
	 * @public
	 * @param {String} value
	 * @returns {civitas.objects.settlement}
	 */
	this.rename = function(value) {
		this.name = value;
		return this;
	};

	/**
	 * Check if the specified building is already built.
	 * 
	 * @public
	 * @param {String} handle
	 * @returns {Boolean}
	 */
	this.is_building_built = function(handle) {
		var buildings = this.get_buildings();
		for (var i = 0; i < buildings.length; i++) {
			if (typeof buildings[i] !== 'undefined') {
				if (buildings[i].type === handle) {
					return true;
				}
			}
		}
		return false;
	};

	/**
	 * Check if the settlement has a specific storage space.
	 * 
	 * @public
	 * @param {Number} quantity
	 * @returns {Boolean}
	 */
	this.has_storage_space_for = function(quantity) {
		var storage = this.get_storage_space();
		if (!this.has_storage_space(true)) {
			return false;
		}
		if ((storage.occupied + quantity) > storage.all) {
			this.get_core().error('There is no storage space in your city to accomodate the new goods.');
			return false;
		}
		return true;
	};
	
	/**
	 * Check if this settlement has enough storage space.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.has_storage_space = function(alert) {
		var storage = this.get_storage_space();
		if (storage.occupied >= storage.all) {
			if (alert === true) {
				this.get_core().error('There is no storage space in your city.');
			}
			return false;
		}
		return true;
	};
	
	/**
	 * Get the storage space of this settlement.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_storage_space = function() {
		var storage = 0;
		for (var item in this.get_resources()) {
			if ($.inArray(item, civitas.NON_RESOURCES) === -1) {
				storage += this.get_resources()[item];
			}
		}
		return {
			occupied: storage,
			all: this.storage
		};
	};
	
	/**
	 * Internal function for building the specified buildings, bypassing
	 * the requirements.
	 * 
	 * @public
	 * @param {String|Object} building_type
	 * @param {Boolean} hidden
	 * @returns {civitas.objects.building|Boolean}
	 */
	this._create_buildings = function(building_type, hidden) {
		hidden = (typeof hidden !== 'undefined') && hidden === true ? true : false;
		if (typeof building_type === 'object') {
			for (var i = 0; i < building_type.length; i++) {
				var handle = typeof building_type[i].handle !== 'undefined' ? building_type[i].handle : building_type[i];
				var level = typeof building_type[i].level !== 'undefined' ? building_type[i].level : 1;
				var working = typeof building_type[i].working !== 'undefined' ? building_type[i].working : true;
				var _b = civitas.BUILDINGS.findIndexM(handle);
				if (_b !== false) {
					var _c = civitas.BUILDINGS[_b];
					if (level > 1) {
						_c.level = level;
					}
					var _building = new civitas.objects.building({
						settlement: this,
						type: handle,
						data: _c,
						hidden: hidden,
						working: working
					});
					this.buildings.push(_building);
					this.buildings_list.push({
						handle: handle,
						level: level,
						working: working
					});
				}
			}
		} else {
			var handle = typeof building_type.handle !== 'undefined' ? building_type.handle : building_type;
			var level = typeof building_type.level !== 'undefined' ? building_type.level : 1;
			var working = typeof building_type.working !== 'undefined' ? building_type.working : true;
			var _b = civitas.BUILDINGS.findIndexM(handle);
			if (_b !== false) {
				var _c = civitas.BUILDINGS[_b];
				if (level > 1) {
					_c.level = level;
				}
				var _building = new civitas.objects.building({
					settlement: this,
					type: handle,
					data: _c,
					hidden: hidden,
					working: working
				});
				this.buildings.push(_building);
				this.buildings_list.push({
					handle: handle,
					level: level,
					working: working
				});
			}
		}
		return false;
	};
	
	/**
	 * Build the specified building.
	 * 
	 * @public
	 * @param {String} building_type
	 * @returns {civitas.objects.building|Boolean}
	 */
	this.build = function(building_type) {
		var _b = civitas.BUILDINGS.findIndexM(building_type);
		if (_b !== false) {
			var _c = civitas.BUILDINGS[_b];
			if ((typeof _c.requires.settlement_level !== 'undefined') && (this.level < _c.requires.settlement_level)) {
				this.get_core().error('Your city level is too low to construct this building.');
				return false;
			}
			if (typeof _c.requires.buildings !== 'undefined') {
				var required = _c.requires.buildings;
				for (var i = 0; i < required.length; i++) {
					if (!this.is_building_built(required[i])) {
						var _z = civitas.BUILDINGS.findIndexM(required[i]);
						_z = civitas.BUILDINGS[_z];
						this.get_core().error('You don`t have the required building ' + _z.name + '.');
						return false;
					}
				}
			}
			for (var item in _c.cost) {
				if ((this.get_resources()[item] - _c.cost[item]) < 0) {
					this.get_core().error('You don`t have enough ' + item + ' to construct this building.');
					return false;
				}
			}
			for (var item in _c.cost) {
				if ((this.get_resources()[item] - _c.cost[item]) >= 0) {
					this.get_resources()[item] = this.get_resources()[item] - _c.cost[item];
				}
			}
			var _building = new civitas.objects.building({
				settlement: this,
				type: building_type,
				data: _c
			});
			this.buildings.push(_building);
			this.buildings_list.push({
				handle: building_type,
				level: 1,
				stopped: false
			});
			this.raise_prestige();
			this.get_core().save_and_refresh();
			this.get_core().notify('New building constructed: ' + _building.get_name());
			$('.tips').tipsy({
				gravity: $.fn.tipsy.autoNS,
				html: true
			});
			return _building;
		}
		return false;
	};
	
	/**
	 * Get the rank of this settlement
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_rank = function() {
		var level = this.get_level();
		var half_level = Math.round(level / 2);
		return {
			fame: this.get_fame(),
			prestige: this.get_prestige(),
			espionage: this.get_espionage(),
			army: this.get_army_total().total,
			navy: this.get_navy_total().total,
			score: Math.floor((
				((this.get_fame() > 0 ? this.get_fame() : 1) / half_level)
				+ (this.get_prestige() / half_level)
				+ (this.get_espionage() / half_level)
				+ ((this.get_army_total().total > 0 ? this.get_army_total().total : 1) / half_level)
				+ ((this.get_navy_total().total > 0 ? this.get_navy_total().total : 1) / (half_level / 2))
			) / half_level)
		};
	};
	
	/**
	 * Return a pointer to the specified building in this settlement by the specified
	 * handle.
	 * 
	 * @public
	 * @param {String} handle
	 * @returns {civitas.objects.building|Boolean}
	 */
	this.get_building_by_handle = function(handle) {
		var buildings = this.get_buildings();
		for (var i = 0; i < buildings.length; i++) {
			if (typeof buildings[i] !== 'undefined') {
				if (buildings[i].get_type() === handle) {
					return buildings[i];
				}
			}
		}
		return false;
	};
	
	/**
	 * Demolish a settlement building
	 * 
	 * @public
	 * @param {Number|String} id
	 * @returns {Boolean}
	 */
	this.demolish = function(id) {
		if (typeof id === 'number') {
			if (id > 0) {
				this.buildings.splice(id, 1);
				this.buildings_list.splice(id, 1);
				return true;
			}
		} else if (typeof id === 'string') {
			if (id !== 'marketplace') {
				for (var i = 0; i < this.buildings.length; i++) {
					if (this.buildings[i].get_type() === id) {
						this.buildings.splice(i, 1);
					}
				}
				var bl_id = this.buildings_list.findIndexM(id);
				if (bl_id !== false) {
				    this.buildings_list.splice(bl_id, 1);
				}
				this.get_core().save();
				return true;
			}
 		}
		return false;
	};
	
	/**
	 * Get the coins this settlement has. This is the coins object.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_coins = function() {
		return this.resources.coins;
	};
	
	/**
	 * Increase this settlement's coins by the specified amount.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.inc_coins = function(value) {
		return this.set_coins(this.get_coins() + value);
	};
	
	/**
	 * Decrease this settlement's coins by the specified amount.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.dec_coins = function(value) {
		if (!this.has_coins(value)) {
			return false;
		}
		this.set_coins(this.get_coins() - value);
		return true;
	};
	
	/**
	 * Set this settlement's coins to the specified value.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.set_coins = function(value) {
		this.resources.coins = value;
		return value;
	};
	
	/**
	 * Set the coins of the settlement.
	 * 
	 * @public
	 * @param {Object} value
	 * @returns {civitas.objects.settlement}
	 */
	this.set_coins = function(value) {
		this.resources.coins = value;
		return this;
	};
	
	/**
	 * Remove a specific amount of a resource from this settlement's storage.
	 * 
	 * @public
	 * @param {String} resource
	 * @param {Number} amount
	 * @returns {Boolean}
	 */
	this.remove_resource = function(resource, amount) {
		var res = this.get_resources();
		if (!this.has_resources(resource, amount)) {
			return false;
		}
		res[resource] = res[resource] - amount;
		return true;
	};
	
	/**
	 * Remove resources from this settlement's storage.
	 * 
	 * @public
	 * @param {Object} resources
	 * @returns {Boolean}
	 */
	this.remove_resources = function(resources) {
		var res = this.get_resources();
		for (var resource in resources) {
			if (!this.has_resources(resource, resources[resource])) {
				return false;
			}
		}
		for (var resource in resources) {
			res[resource] = res[resource] - resources[resource];
		}
		return true;
	};
	
	/**
	 * Ask the City Council for tips.
	 * 
	 * @public
	 * @returns {Array}
	 */
	this.city_council = function() {
		var resources = this.get_resources();
		var storage = this.get_storage_space();
		var advices = [];
		if (this.army.length === 0) {
			advices.push('You have no army, this is an open invitation for attack.');
		}
		if (this.army.length < 10 && this.army.length > 0) {
			advices.push('You have a small army, try to recruit some more soldiers.');
		}
		if (this.navy.length === 0) {
			advices.push('You have no navy, this is an open invitation for attack.');
		}
		if (this.army.length < 3 && this.army.length > 0) {
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
	 * Get the resources available in this settlement.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_resources = function() {
		return this.resources;
	};
	
	/**
	 * Set the resources of the settlement.
	 * 
	 * @public
	 * @param {Object} value
	 * @returns {civitas.objects.settlement}
	 */
	this.set_resources = function(value) {
		this.resources = value;
		return this;
	};

	/**
	 * Return the ruler object of this settlement.
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_ruler = function() {
		return this.ruler;
	};

	/**
	 * Return the ruler name of this settlement.
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_ruler_name = function() {
		return this.ruler.name;
	};

	/**
	 * Return the ruler personality of this settlement.
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_ruler_personality = function() {
		return this.ruler.personality;
	};

	/**
	 * Return the ruler nationality of this settlement.
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_ruler_nationality = function() {
		return this.ruler.nationality;
	};

	/**
	 * Set the ruler name of the settlement.
	 * 
	 * @public
	 * @param {String} value
	 * @returns {civitas.objects.settlement}
	 */
	this.set_ruler = function(value) {
		this.ruler = value;
		return this;
	};
	
	/**
	 * Set the level of the settlement.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {civitas.objects.settlement}
	 */
	this.set_level = function(value) {
		this.level = value;
		return this;
	};
	
	/**
	 * Return the level of this settlement.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_level = function() {
		return this.level;
	};

	/**
	 * Return the personality of the ruler of this settlement.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_personality = function() {
		return {
			id: this.ruler.personality,
			name: civitas.PERSONALITIES[this.ruler.personality]
		};
	};

	/**
	 * Return the climate of the area of this settlement.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_climate = function() {
		return {
			id: this.climate,
			name: civitas.CLIMATES[this.climate]
		};
	};

	/**
	 * Return the nationality of this settlement.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_nationality = function() {
		return {
			id: this.ruler.nationality,
			name: civitas.NATIONS[this.ruler.nationality]
		};
	};

	/**
	 * Get the icon of this settlement.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_icon = function() {
		return this.icon;
	};
	
	/**
	 * Set the icon of this settlement.
	 * 
	 * @public
	 * @returns {civitas.objects.settlement}
	 * @param {Number} value
	 */
	this.set_icon = function(value) {
		this.icon = value;
		return this;
	};

	/**
	 * Get the avatar of the ruler of this settlement.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_ruler_avatar = function() {
		return this.ruler.avatar;
	};
	
	/**
	 * Set the climate of this settlement.
	 * 
	 * @public
	 * @returns {civitas.objects.settlement}
	 * @param {Number} value
	 */
	this.set_climate = function(value) {
		this.climate = value;
		return this;
	};
	
	/**
	 * Set the nationality of this settlement.
	 * 
	 * @public
	 * @returns {civitas.objects.settlement}
	 * @param {Number} value
	 */
	this.set_nationality = function(value) {
		this.nationality = value;
		return this;
	};
	
	/**
	 * Get the list of settlement buildings, for export reasons.
	 *
	 * @public
	 * @returns {Array}
	 */
	this.get_buildings_list = function() {
		return this.buildings_list;
	};

	/**
	 * Get the id of this settlement.
	 *
	 * @public
	 * @returns {Number}
	 */
	this.get_id = function() {
		return this.id;
	};

	/**
	 * Set the id of this settlement.
	 *
	 * @public
	 * @param {Number}
	 * @returns {civitas.game}
	 */
	this.set_id = function(id) {
		this.id = id;
		return this;
	};

	/**
	 * Check if this settlement is a player settlement.
	 *
	 * @public
	 * @returns {Boolean}
	 */
	this.is_player = function() {
		return this.player;
	};

	/**
	 * Return the type of this settlement.
	 *
	 * @public
	 * @returns {Number}
	 */
	this.get_settlement_type = function() {
		return this.settlement_type;
	};

	/**
	 * Return the population of this settlement.
	 *
	 * @public
	 * @returns {Number}
	 */
	this.get_population = function() {
		return this.population;
	};

	/**
	 * Check if this settlement is a city.
	 *
	 * @public
	 * @returns {Boolean}
	 */
	this.is_city = function() {
		return this.settlement_type === civitas.CITY;
	};

	/**
	 * Calculate the number of people living in your settlement.
	 *
	 * @public
	 * @returns {Number}
	 */
	this.calc_population = function() {
		return this.population = this.get_level() * civitas.POPULATION_PER_LEVEL;
	};

	/**
	 * Check if this settlement is a village.
	 *
	 * @public
	 * @returns {Boolean}
	 */
	this.is_village = function() {
		return this.settlement_type === civitas.VILLAGE;
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
		if (typeof settlement === 'object' && this.get_nationality().id === settlement.get_nationality().id) {
			return true;
		} else if (typeof settlement === 'number' || typeof settlement === 'string') {
			settlement = this.get_core().get_settlement(settlement);
			if (this.get_nationality().id === settlement.get_nationality().id) {
				return true;
			}
		}
		return false;
	};

	// Fire up the constructor
	return this.__init(params);
};
