/**
 * Main Game city object.
 * 
 * @param {type} params
 * @class {civitas.objects.city}
 * @returns {civitas.objects.city}
 */
civitas.objects.city = function(params) {
	
	/**
	 * The name of this city.
	 * 
	 * @private
	 * @type {String}
	 */
	this.name = null;
	
	/**
	 * The name of the city ruler.
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
	 * List of the buildings in this city.
	 * 
	 * @private
	 * @type {Array}
	 */
	this.buildings = [];
	
	/**
	 * Export data of the buildings list.
	 *
	 * @private
	 * @type {Array}
	 */
	this.buildings_list = [];
	
	/**
	 * Storage space available in this city.
	 * 
	 * @private
	 * @type {Number}
	 */
	this.storage = 0;

	/**
	 * The personality of the city ruler. It affects the relations with the
	 * other cities of the world.
	 * 
	 * @private
	 * @type {String}
	 */
	this.personality = null;
	
	/**
	 * The nationality of the city. It affects the relations with the
	 * other cities of the world.
	 * 
	 * @private
	 * @type {String}
	 */
	this.nationality = null;
	
	/**
	 * The climate of the zone the city resides in. It affects the type of
	 * the buildings you can construct.
	 * 
	 * @private
	 * @type {String}
	 */
	this.climate = null;
	
	/**
	 * Soldiers headquartered in this city.
	 * 
	 * @private
	 * @type {Number}
	 */
	this.army = [];
	
	/**
	 * Flag whether this city belongs to a player or is AI-controlled.
	 *
	 * @private
	 * @type {Boolean}
	 */
	this.player = false;

	/**
	 * Ships built in this city.
	 * 
	 * @private
	 * @type {Number}
	 */
	this.navy = [];

	/**
	 * Mercenary armies available for this city.
	 * 
	 * @private
	 * @type {Number}
	 */
	this.mercenary = [];
	
	/**
	 * The resources of this city.
	 * 
	 * @private
	 * @type {Object}
	 */
	this.resources = {};
	
	this.data = null;
	
	/**
	 * The level of the city.
	 * 
	 * @private
	 * @type {Number}
	 */
	this.level = 1;
	
	/**
	 * List of the imports and exports of this city.
	 * 
	 * @private
	 * @type {Object}
	 */
	this.trades = null;
	
	/**
	 * The avatar of the ruler of this city.
	 * 
	 * @type {Number}
	 * @private
	 */
	this.avatar = null;

	/**
	 * The icon of this city.
	 * 
	 * @type {Number}
	 * @private
	 */
	this.icon = null;

	/**
	 * The influence of this city.
	 *
	 * @type {Object}
	 * @private
	 */
	this.influence = {};
	
	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {civitas.objects.city}
	 * @param {Object} params
	 */
	this.__init = function(params) {
		this.core = params.core;
		this.name = params.name;
		this.data = params.data;
		this.player = (typeof params.player !== 'undefined') ? params.player : false;
		this.level = (typeof params.data.level !== 'undefined') ? params.data.level : 1;
		this.resources = this._build_resources(params);
		this.personality = (typeof params.data.personality !== 'undefined') ? params.data.personality : civitas.PERSONALITY_BALANCED;
		this.nationality = (typeof params.data.nationality !== 'undefined') ? params.data.nationality : civitas.NATION_ROMAN;
		this.climate = (typeof params.data.climate !== 'undefined') ? params.data.climate : civitas.CLIMATE_TEMPERATE;
		this.ruler = (typeof params.data.ruler !== 'undefined') ? params.data.ruler : 0;
		this.avatar = (typeof params.data.avatar !== 'undefined') ? params.data.avatar : 1;
		this.icon = (typeof params.data.icon !== 'undefined') ? params.data.icon : 1;
		this.reset_trades();
		return this;
	};
	
	/**
	 * Adjust the resources according to the city owner.
	 *
	 * @private
	 * @param {Object} params
	 * @returns {Object}
	 */
	this._build_resources = function(params) {
		var resources = {};
		var difficulty = this.get_core().get_difficulty();
		for (var item in civitas.RESOURCES) {
			if (this.player === true) {
				if (typeof civitas.START_RESOURCES[difficulty - 1][item] === 'undefined') {
					resources[item] = 0;
				} else {
					resources[item] = civitas.START_RESOURCES[difficulty - 1][item];
				}
			} else {
				if (typeof params.data.resources[item] !== 'undefined') {
					resources[item] = params.data.resources[item];
				} else {
					resources[item] = 0;
				}
				resources.fame = civitas.LEVELS[this.get_level()];
			}
		}
		return resources;
	};

	/**
	 * Buy the specified goods from a city.
	 * 
	 * @public
	 * @param {civitas.objects.city|String} city
	 * @param {String} resource
	 * @param {Number} amount
	 * @returns {Object|Boolean}
	 */
	this.buy_from_city = function(city, resource, amount) {
		var resources = this.get_resources();
		var _city;
		if (typeof city === 'string') {
			_city = this.get_core().get_city(city);
			if (city === false) {
				this.get_core().error(city + ' does not exist.');
				return false;
			}
		} else {
			_city = city;
		}
		var trades = _city.get_trades();
		if (trades === null) {
			this.get_core().error(city + ' does not trade any goods.');
			return false;
		}
		if (typeof trades.exports === 'undefined') {
			this.get_core().error(city + ' does not export any goods.');
			return false;
		}
		for (var item in trades.exports) {
			if (item === resource) {
				if (typeof amount === 'undefined') {
					amount = trades.exports[item];
				}
				var discount = Math.ceil((civitas.RESOURCES[item].price * civitas.TRADES_ADDITION) / 100);
				var price = civitas.utils.calc_price_plus_discount(amount, item, discount);
				var city_price = civitas.utils.calc_price(amount, item);
				var item_discount_price = Math.ceil(civitas.RESOURCES[item].price + discount);
				if (!this.has_storage_space_for(amount)) {
					return false;
				}
				if (this.dec_coins(price) === false) {
					return false;
				}
				_city.inc_coins(city_price);
				this.add_to_storage(item, amount);
				this.remove_from_exports(_city, item, amount);
				this.raise_influence(city, 2);
				this.raise_prestige();
				this.inc_fame(50);
				this.get_core().refresh_ui();
				this.get_core().notify(this.get_name() + ' bought ' + amount + ' ' + civitas.utils.get_resource_name(item) + ' from ' + city + ' for ' + item_discount_price + ' coins each, for a total of ' + price + ' coins.', 'Transaction done');
				this.get_core().refresh_panels();
				return {
					buyer: this.get_name(),
					amount: amount,
					goods: civitas.utils.get_resource_name(item),
					seller: city,
					price: Math.round(civitas.RESOURCES[item].price + discount),
					totalPrice: price
				};
			}
		}
		this.get_core().error(city + ' does not export the requested goods.');
		return false;
	};
	
	/**
	 * Remove a specified amount of a resource from the storage of this city.
	 * 
	 * @public
	 * @param {String} item
	 * @param {Number} amount
	 * @returns {Boolean}
	 */
	this.remove_resource = function(item, amount) {
		var res = this.get_resources();
		if (!this.has_resources(item, amount)) {
			return false;
		}
		res[item] = res[item] - amount;
		return true;
	};
	
	/**
	 * Add a specified amount of a resource to the storage of this city.
	 * 
	 * @public
	 * @param {String} item
	 * @param {Number} amount
	 * @returns {Boolean}
	 */
	this.add_to_storage = function(item, amount) {
		var res = this.get_resources();
		res[item] = res[item] + amount;
		return true;
	};
	
	/**
	 * Check if the city has the required coins to create this building.
	 * 
	 * @public
	 * @param {Number} coins
	 * @returns {Boolean}
	 */
	this.has_coins = function(coins) {
		var resources = this.get_resources();
		if (this.get_coins() - coins < 0) {
			this.get_core().error(this.get_name() + ' doesn`t have enough ' + civitas.utils.get_resource_name('coins') + '.');
			return false;
		}
		return true;
	};
	
	/**
	 * Check if this city has the specified goods in storage.
	 * 
	 * @public
	 * @param {String} resource
	 * @param {Number} amount
	 * @returns {Boolean}
	 */
	this.has_resources = function(resource, amount) {
		var res = this.get_resources();
		if ((res[resource] - amount) < 0) {
			this.get_core().error(this.get_name() + ' does not have enough ' + civitas.utils.get_resource_name(resource) + '.');
			return false;
		}
		return true;
	};
	
	/**
	 * Perform a trades reset (resets all amounts of resources available
	 * for trade and randomize the amount.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.reset_trades = function() {
		var trades = {
			'imports': {},
			'exports': {}
		};
		if (typeof civitas.CITIES[this.get_name()] !== 'undefined') {
			var _trades = civitas.CITIES[this.get_name()].trades;
			for (var goods_type in _trades) {
				for (var item in _trades[goods_type]) {
					trades[goods_type][item] = civitas.utils.get_random_by_importance(_trades[goods_type][item]);
				}
			}
			this.trades = trades;
			return true;
		} else {
			return false;
		}
	};
	
	/**
	 * List the specified goods onto the Black Market.
	 * 
	 * @public
	 * @param {String} resource
	 * @param {Number} amount
	 * @returns {Object|Boolean}
	 */
	this.list_black_market = function(resource, amount) {
		var resources = this.get_resources();
		if (this.remove_resource(resource, amount)) {
			var discount = Math.ceil((civitas.RESOURCES[resource].price * civitas.BLACK_MARKET_DISCOUNT) / 100);
			var price = civitas.utils.calc_price_minus_discount(amount, resource, discount);
			this.get_core().add_black_market(resource, amount, price);
			this.get_core().refresh_ui();
			this.get_core().notify(this.get_name() + ' placed ' + amount + ' ' + civitas.utils.get_resource_name(resource) + ' on the Black Market and will receive ' + price + ' coins next month.', 'Goods listed');
			return {
				seller: this.get_name(),
				amount: amount,
				goods: civitas.utils.get_resource_name(resource),
				price: price,
				discount: discount
			};
		}
		return false;
	};
	
	/**
	 * Sell the specified goods to a city.
	 * 
	 * @public
	 * @param {civitas.objects.city|String} city
	 * @param {String} resource
	 * @param {Number} amount
	 * @returns {Object|Boolean}
	 */
	this.sell_to_city = function(city, resource, amount) {
		var resources = this.get_resources();
		var _city;
		if (typeof city === 'string') {
			_city = this.get_core().get_city(city);
			if (city === false) {
				this.get_core().error(city + ' does not exist.');
				return false;
			}
		} else {
			_city = city;
		}
		var trades = _city.get_trades();
		if (trades === null) {
			this.get_core().error(city + ' does not trade any goods.');
			return false;
		}
		if (typeof trades.imports === 'undefined') {
			this.get_core().error(city + ' does not import any goods.');
			return false;
		}
		for (var item in trades.imports) {
			if (item === resource) {
				if (typeof amount === 'undefined') {
					amount = trades.imports[item];
				}
				var discount = Math.ceil((civitas.RESOURCES[item].price * civitas.TRADES_DISCOUNT) / 100);
				var price = civitas.utils.calc_price_minus_discount(amount, item, discount);
				var city_price = civitas.utils.calc_price(amount, item);
				var item_discount_price = Math.ceil(civitas.RESOURCES[item].price - discount);
				if (!this.remove_resource(item, amount)) {
					return false;
				}
				this.inc_coins(price);
				if (!_city.dec_coins(city_price)) {
					this.get_core().error(city + ' does not have enough coins.');
					return false;
				}
				this.remove_from_imports(_city, item, amount);
				this.raise_influence(city, 1);
				this.raise_prestige();
				this.inc_fame(50);
				this.get_core().refresh_ui();
				this.get_core().notify(this.get_name() + ' sold ' + amount + ' ' + civitas.utils.get_resource_name(item) + ' to ' + city + ' for ' + item_discount_price + ' coins each, for a total of ' + price + ' coins.', 'Transaction done');
				this.get_core().refresh_panels();
				return {
					seller: this.get_name(),
					amount: amount,
					goods: civitas.utils.get_resource_name(item),
					buyer: city,
					price: Math.round(civitas.RESOURCES[item].price - discount),
					totalPrice: price
				};
			}
		}
		this.get_core().error(city + ' does not import the specified goods.');
		return false;
	};
	
	/**
	 * Remove a specified amount of a resource from the trade exports of a city.
	 * 
	 * @public
	 * @param {civitas.objects.city} city
	 * @param {String} item
	 * @param {Number} amount
	 * @returns {Boolean}
	 */
	this.remove_from_exports = function(city, item, amount) {
		city.trades.exports[item] = city.trades.exports[item] - amount;
		return true;
	};

	/**
	 * Remove a specified amount of a resource from the trade imports of a city.
	 * 
	 * @public
	 * @param {civitas.objects.city} city
	 * @param {String} item
	 * @param {Number} amount
	 * @returns {Boolean}
	 */
	this.remove_from_imports = function(city, item, amount) {
		city.trades.imports[item] = city.trades.imports[item] - amount;
		return true;
	};

	/**
	 * Export the game data of this city.
	 * 
	 * @public
	 * @param {Boolean} to_local_storage
	 * @returns {Object}
	 */
	this.export_data = function(to_local_storage) {
		var data = {
			name: this.get_name(),
			ruler: this.get_ruler(),
			level: this.get_level(),
			climate: this.get_climate().id,
			nationality: this.get_nationality().id,
			difficulty: this.get_core().get_difficulty(),
			avatar: this.get_avatar(),
			icon: this.get_icon(),
			influence: this.get_influence(),
			army: this.get_army_total(),
			navy: this.get_navy_total(),
			mercenary: this.get_mercenary(),
			resources: this.get_resources(),
			trades: this.get_core()._get_neighbours_trades(),
			buildings: this.buildings_list,
			achievements: this.get_core().get_achievements(),
			black_market: this.get_core().get_black_market(),
			date_time: {
				day: this.get_core().day,
				month: this.get_core().month,
				year: this.get_core().year,
				day_of_month: this.get_core().day_of_month
			},
			settings: this.get_core().get_settings()
		};
		if (to_local_storage === true) {
			localStorage.setItem('civitas.data', window.btoa(JSON.stringify(data)));
		}
		return data;
	};

	/**
	 * Import the game data to this city.
	 * 
	 * @public
	 * @param {Object} data
	 * @returns {civitas.objects.city}
	 */
	this.import_data = function(data) {
		this.set_name(data.name);
		this.set_ruler(data.ruler);
		this.set_level(data.level);
		this.set_avatar(data.avatar);
		this.set_icon(data.icon);
		this.set_nationality(data.nationality);
		this.get_core().set_achievements(data.achievements);
		this.set_climate(data.climate);
		this.setup_army(true, data.army);
		this.setup_navy(true, data.navy);
		this.set_mercenary(data.mercenary);
		this.set_resources(data.resources);
		this.get_core().set_date_time(data.date_time);
		this.get_core().set_black_market(data.black_market);
		this.get_core().set_settings_music(data.settings.music);
		this.get_core().set_settings_console(data.settings.console);
		return this;
	};

	/**
	 * Get the list of all the buildings in this city.
	 * 
	 * @public
	 * @returns {Array}
	 */
	this.get_buildings = function() {
		return this.buildings;
	};

	/**
	 * Get the name of this city.
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_name = function() {
		return this.name;
	};

	/**
	 * Set the name of this city.
	 * 
	 * @public
	 * @param {String} value
	 * @returns {civitas.objects.city}
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
	 * Raise the level of this city.
	 * 
	 * @public
	 * @returns {civitas.objects.city}
	 */
	this.level_up = function() {
		this.level++;
		$('.citylevel').html(this.get_level());
		this.get_core().notify('The city of ' + this.get_name() + ' is now level ' + this.get_level() + '.');
		return this;
	};

	/**
	 * Rename this city.
	 * 
	 * @public
	 * @param {String} value
	 * @returns {civitas.objects.city}
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
			if (buildings[i].type === handle) {
				return true;
			}
		}
		return false;
	};

	/**
	 * Check if the city has a specific storage space.
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
	 * Check if this city has enough storage space.
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
	 * Get the storage space of this city.
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
						city: this,
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
					city: this,
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
		var resources = this.get_resources();
		if (_b !== false) {
			var _c = civitas.BUILDINGS[_b];
			if ((typeof _c.requires.city_level !== 'undefined') && (this.level < _c.requires.city_level)) {
				this.get_core().error('Your city level is too low to construct this building.');
				return false;
			}
			if ((resources.coins - _c.cost.coins) < 0) {
				this.get_core().error('You don`t have enough coins to construct this building.');
				return false;
			} else {
				resources.coins = resources.coins - _c.cost.coins;
			}
			for (var item in _c.cost) {
				if (item !== 'coins') {
					if ((this.get_resources()[item] - _c.cost[item]) < 0) {
						this.get_core().error('You don`t have enough ' + item + ' to construct this building.');
						return false;
					} else {
						this.get_resources()[item] = this.get_resources()[item] - _c.cost[item];
					}
				}
			}
			var _building = new civitas.objects.building({
				city: this,
				type: building_type,
				data: _c
			});
			this.buildings.push(_building);
			this.buildings_list.push({
				handle: building_type,
				level: 1,
				stopped: false
			});
			this.get_core().refresh_ui();
			this.get_core().refresh_panels();
			this.get_core().save();
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
	 * Get the rank of this city
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_rank = function() {
		var level = this.get_level();
		var half_level = Math.round(level / 2);
		return Math.floor(
			(
				(this.get_fame() / half_level)
				+ (this.get_prestige() / half_level)
				+ (this.get_espionage() / half_level)
				+ ((this.get_army_total().total > 0 ? this.get_army_total().total : 1) / half_level)
				+ ((this.get_navy_total().total > 0 ? this.get_navy_total().total : 1) / (half_level / 2))
			) / half_level
		);
	};
	
	/**
	 * Return a pointer to the specified building in this city by the specified
	 * handle.
	 * 
	 * @public
	 * @param {String} handle
	 * @returns {civitas.objects.building|Boolean}
	 */
	this.get_building_by_handle = function(handle) {
		var buildings = this.get_buildings();
		for (var i = 0; i < buildings.length; i++) {
			if (buildings[i].get_type() === handle) {
				return buildings[i];
			}
		}
		return false;
	};
	
	/**
	 * Demolish a city building
	 * 
	 * @public
	 * @TODO
	 * @param {Number} id
	 * @returns {civitas.objects.city}
	 */
	this.demolish = function(id) {
		if (typeof id === 'number') {
			this.buildings.splice(id, 1);
			return true;
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
			} else {
				return false;
			}
 		} else {
			// TODO
		}
		return false;
	};
	
	/**
	 * Get the coins this city has. This is the coins object.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_coins = function() {
		return this.resources.coins;
	};
	
	/**
	 * Increase this city's coins by the specified amount.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.inc_coins = function(value) {
		return this.set_coins(this.get_coins() + value);
	};
	
	/**
	 * Decrease this city's coins by the specified amount.
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
	 * Set this city's coins to the specified value.
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
	 * Set the coins of the city.
	 * 
	 * @public
	 * @param {Object} value
	 * @returns {civitas.objects.city}
	 */
	this.set_coins = function(value) {
		this.resources.coins = value;
		return this;
	};
	
	/**
	 * Remove a specific amount of a resource from this city's storage.
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
	 * Remove resources from this city's storage.
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
	 * Ask the City Advisor for tips.
	 * 
	 * @public
	 * @returns {Array}
	 */
	this.call_advisor = function() {
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
			advices.push('You have no storage space to store your new goods and they will be lost. Sell some goods or build a warehouse.');
		} else if ((storage.all - storage.occupied) < 100) {
			advices.push('You will soon run out of storage space and all goods produced will be lost. Sell some goods or build a warehouse.');
		}
		if (resources.coins < 1000) {
			advices.push('You seem to be losing coins fast, sell some goods or upgrade your houses to get better taxes.');
		}
		if (resources.wood < 100 || resources.stones < 100) {
			advices.push('You are lacking construction materials, buy some stones and/or wood off the World Trade Market.');
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
			advices.push('Several of your buildings (' + _buildings.join(', ') + ') are not working due to a shortage of materials. Buy more goods.');
		}
		return advices;
	};
	
	/**
	 * Get the resources available in this city.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_resources = function() {
		return this.resources;
	};
	
	/**
	 * Set the resources of the city.
	 * 
	 * @public
	 * @param {Object} value
	 * @returns {civitas.objects.city}
	 */
	this.set_resources = function(value) {
		this.resources = value;
		return this;
	};

	/**
	 * Return the ruler name of this city.
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_ruler = function() {
		return this.ruler;
	};

	/**
	 * Set the ruler name of the city.
	 * 
	 * @public
	 * @param {String} value
	 * @returns {civitas.objects.city}
	 */
	this.set_ruler = function(value) {
		this.ruler = value;
		return this;
	};
	
	/**
	 * Set the level of the city.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {civitas.objects.city}
	 */
	this.set_level = function(value) {
		this.level = value;
		return this;
	};
	
	/**
	 * Return the level of this city.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_level = function() {
		return this.level;
	};
	
	/**
	 * Get the imports and exports of this city.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_trades = function() {
		return this.trades;
	};
	
	/**
	 * Set the imports and exports of this city.
	 * 
	 * @public
	 * @param {Object} value
	 * @returns {civitas.objects.city}
	 */
	this.set_trades = function(value) {
		this.trades = value;
		return this;
	};
	
	/**
	 * Return the personality of the ruler of this city.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_personality = function() {
		return {
			id: this.personality,
			name: civitas.PERSONALITIES[this.personality]
		};
	};
	
	/**
	 * Return the climate of the area of this city.
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
	 * Return the nationality of this city.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_nationality = function() {
		return {
			id: this.nationality,
			name: civitas.NATIONS[this.nationality]
		};
	};
	
	/**
	 * Get the icon of this city.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_icon = function() {
		return this.icon;
	};
	
	/**
	 * Set the icon of this city.
	 * 
	 * @public
	 * @returns {civitas.objects.city}
	 * @param {Number} value
	 */
	this.set_icon = function(value) {
		this.icon = value;
		return this;
	};

	/**
	 * Get the avatar of the ruler of this city.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_avatar = function() {
		return this.avatar;
	};
	
	/**
	 * Set the avatar of the ruler of this city.
	 * 
	 * @public
	 * @returns {civitas.objects.city}
	 * @param {Number} value
	 */
	this.set_avatar = function(value) {
		this.avatar = value;
		return this;
	};
	
	/**
	 * Decrease the influence of this city.
	 * 
	 * @public
	 * @param {String} city
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.lower_influence = function(city, value) {
		if (this.influence[city] - value >= 0) {
			this.influence[city] = this.influence[city] - value;
		}
		return this.influence[city];
	};
	
	/**
	 * Increase the influence of this city.
	 * 
	 * @public
	 * @param {String} city
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.raise_influence = function(city, value) {
		if (this.influence[city] + value <= 100) {
			this.influence[city] = this.influence[city] + value;
		}
		return this.influence[city];
	};
	
	/**
	 * Return all the influence of this city with all the other cities.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_influence = function() {
		return this.influence;
	};
	
	/**
	 * Returns the influenceof this city with a specific city.
	 * 
	 * @public
	 * @param {String} city
	 * @returns {Number}
	 */
	this.get_influence_with_city = function(city) {
		return this.influence[city];
	};
	
	/**
	 * Set the influence of this city.
	 * 
	 * @public
	 * @returns {civitas.objects.city}
	 * @param {Object} value
	 */
	this.set_influence = function(value) {
		this.influence = value;
		return this;
	};
	
	/**
	 * Set the climate of this city.
	 * 
	 * @public
	 * @returns {civitas.objects.city}
	 * @param {Number} value
	 */
	this.set_climate = function(value) {
		this.climate = value;
		return this;
	};
	
	/**
	 * Set the nationality of this city.
	 * 
	 * @public
	 * @returns {civitas.objects.city}
	 * @param {Number} value
	 */
	this.set_nationality = function(value) {
		this.nationality = value;
		return this;
	};
	
	/**
	 * Propose a pact to the specified city.
	 *
	 * @public
	 * @returns {civitas.objects.city}
	 * @param {civitas.objects.city}
	 */
	this.propose_pact = function(city) {
		// TODO
		return this;
	};

	/**
	 * Assign a spy to the specified city.
	 *
	 * @public
	 * @returns {civitas.objects.city}
	 * @param {civitas.objects.city}
	 */
	this.assign_spy = function(city) {
		// TODO
		return this;
	};

	// Fire up the constructor
	return this.__init(params);
};
