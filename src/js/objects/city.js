/**
 * Main Game city object.
 * 
 * @param {type} params
 * @class {city_builder.city}
 * @returns {city_builder.city}
 */
city_builder.city = function(params) {
	
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
	 * @type {city_builder.game}
	 */
	this.core = null;
	
	/**
	 * List of the buildings in this city.
	 * 
	 * @private
	 * @type {Array}
	 */
	this.buildings = [];
	
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
	
	this.influence = {};
	
	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {city_builder.city}
	 * @param {Object} params
	 */
	this.__constructor = function(params) {
		this.core = params.core;
		this.name = params.name;
		this.data = params.data;
		this.level = (typeof params.data.level !== 'undefined') ? params.data.level : 1;
		this.resources = city_builder.RESOURCES;
		this.resources.fame = (typeof params.level !== 'undefined') ? {
			name: 'Fame',
			handle: 'fame',
			total: city_builder.LEVELS[params.data.level],
			amount: 1
		} : city_builder.RESOURCES['fame'];
		if (typeof params.data.coins !== 'undefined') {
			this.resources.coins.storage = params.data.coins;
		}
		this.personality = (typeof params.data.personality !== 'undefined') ? params.data.personality : city_builder.PERSONALITY_TYPE_BALANCED;
		this.nationality = (typeof params.data.nationality !== 'undefined') ? params.data.nationality : city_builder.NATION_TYPE_ROMAN;
		this.climate = (typeof params.data.climate !== 'undefined') ? params.data.climate : city_builder.CLIMATE_TYPE_TEMPERATE;
		this.ruler = (typeof params.data.ruler !== 'undefined') ? params.data.ruler : 0;
		this.avatar = (typeof params.data.avatar !== 'undefined') ? params.data.avatar : 1;
		this.reset_trades();
		return this;
	};
	
	/**
	 * Buy the specified goods from a city.
	 * 
	 * @public
	 * @param {Object|String} city
	 * @param {String} resource
	 * @param {Number} amount
	 * @returns {Object|Boolean}
	 */
	this.buy_from_city = function(city, resource, amount) {
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
				var discount = (city_builder.RESOURCES[item].price * city_builder.TRADES_ADDITION) / 100;
				var price = city_builder.utils.calc_price_plus_discount(amount, item, discount);//Math.round(amount * city_builder.RESOURCES[item].price + discount);
				if (!this.has_storage_space_for(amount)) {
					return false;
				}
				if (this.dec_coins_amount(price) === false) {
					return false;
				}
				this.add_to_storage(item, amount);
				this.remove_from_exports(_city, item, amount);
				this.raise_influence(city, 2);
				this.raise_prestige();
				this.inc_fame_amount(50);
				this.get_core().refresh_ui();
				this.get_core().notify(this.get_name() + ' bought ' + amount + ' ' + city_builder.RESOURCES[item].name + ' from ' + city + ' for ' + (city_builder.RESOURCES[item].price + discount) + ' coins each, for a total of ' + price + ' coins.', 'Transaction done');
				return {
					buyer: this.get_name(),
					amount: amount,
					goods: city_builder.RESOURCES[item].name,
					seller: city,
					price: Math.round(city_builder.RESOURCES[item].price + discount),
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
		res[item].storage = res[item].storage - amount;
		return true;
	};
	
	/*
	 this.removeFromStorage = function(item, amount) {
	 var res = this.getResources();
	 res[item].storage = res[item].storage - amount;
	 return true;
	 };
	 */
	
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
		res[item].storage = res[item].storage + amount;
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
		if (this.get_coins_amount() - coins < 0) {
			this.get_core().error(this.get_name() + ' doesn`t have enough ' + city_builder.RESOURCES.coins.name + '.');
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
		if ((res[resource].storage - amount) < 0) {
			this.get_core().error(this.get_name() + ' does not have enough ' + city_builder.RESOURCES[resource].name + '.');
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
		if (typeof city_builder.CITIES[this.get_name()] !== 'undefined') {
			this.trades = city_builder.CITIES[this.get_name()].trades;
			for (var goods_type in this.trades) {
				for (var item in this.trades[goods_type]) {
					this.trades[goods_type][item] = get_random_goods_by_importance(this.trades[goods_type][item]);
				}
			}
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
		if (this.remove_resource(resource, amount)) {
			var discount = (city_builder.RESOURCES[resource].price * city_builder.BLACK_MARKET_DISCOUNT) / 100;
			var price = city_builder.utils.calculate_price_minus_discount(amount, resource, discount);
			this.get_core().add_black_market(resource, amount, price);
			this.get_core().refresh_ui();
			this.get_core().notify(this.get_name() + ' placed ' + amount + ' ' + city_builder.RESOURCES[resource].name + ' on the Black Market and will receive ' + price + ' coins next month.', 'Goods listed');
			return {
				seller: this.get_name(),
				amount: amount,
				goods: city_builder.RESOURCES[resource].name,
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
	 * @param {Object|String} city
	 * @param {String} resource
	 * @param {Number} amount
	 * @returns {Object|Boolean}
	 */
	this.sell_to_city = function(city, resource, amount) {
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
				var discount = (city_builder.RESOURCES[item].price * city_builder.TRADES_DISCOUNT) / 100;
				var price = city_builder.utils.calc_price_plus_discount(amount, item, discount);//Math.round(amount * city_builder.RESOURCES[item].price - discount);
				/*
				 if (!this.hasCoins(price)) {
				 return false;
				 }
				 if (!this.hasStorageSpaceFor(amount)) {
				 return false;
				 }
				 */
				if (!this.remove_resource(item, amount)) {
					return false;
				}
				this.inc_coins_amount(price);
				if (!_city.dec_coins_amount(city_builder.utils.calc_price(amount, item))) {
					this.get_core().error(city + ' does not have enough coins.');
					return false;
				}
				this.remove_from_imports(_city, item, amount);
				this.raise_influence(city, 1);
				this.raise_prestige();
				this.inc_fame_amount(50);
				this.get_core().refresh_ui();
				this.get_core().notify(this.get_name() + ' sold ' + amount + ' ' + city_builder.RESOURCES[item].name + ' to ' + city + ' for ' + (city_builder.RESOURCES[item].price - discount) + ' coins each, for a total of ' + price + ' coins.', 'Transaction done');
				return {
					seller: this.get_name(),
					amount: amount,
					goods: city_builder.RESOURCES[item].name,
					buyer: city,
					price: Math.round(city_builder.RESOURCES[item].price - discount),
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
	 * @param {city_builder.city} city
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
	 * @param {city_builder.city} city
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
			avatar: this.get_avatar(),
			influence: this.get_influence(),
			army: this.get_army_total(),
			navy: this.get_navy_total(),
			mercenary: this.get_mercenary(),
			resources: this.get_resources(),
			trades: this.get_core()._get_neighbours_trades(),
			buildings: this.buildings_list,
			black_market: this.get_core().get_black_market(),
			date_time: {
				day: this.get_core().day,
				month: this.get_core().month,
				year: this.get_core().year,
				day_of_month: this.get_core().day_of_month
			}
		};
		if (to_local_storage === true) {
			localStorage.setItem('city_builder.data', window.btoa(JSON.stringify(data)));
		}
		return data;
	};
	
	/**
	 * Import the game data to this city.
	 * 
	 * @public
	 * @param {Object} data
	 * @returns {city_builder.city}
	 */
	this.import_data = function(data) {
		this.set_name(data.name);
		this.set_ruler(data.ruler);
		this.set_level(data.level);
		this.set_avatar(data.avatar);
		this.set_nationality(data.nationality);
		this.set_climate(data.climate);
		this.setup_army(true, data.army);
		this.setup_navy(true, data.navy);
		this.set_mercenary(data.mercenary);
		this.set_resources(data.resources);
		this.get_core().set_date_time(data.date_time);
		this.get_core().set_black_market(data.black_market);
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
	 * @returns {city_builder.city}
	 */
	this.set_name = function(value) {
		this.name = value;
		return this;
	};
	
	/**
	 * Return a pointer to the game core.
	 * 
	 * @public
	 * @returns {city_builder.core}
	 */
	this.get_core = function() {
		return this.core;
	};
	
	/**
	 * Raise the level of this city.
	 * 
	 * @public
	 * @returns {city_builder.city}
	 */
	this.level_up = function() {
		this.level++;
		this.resources.fame.total = this.resources.fame.total + this.resources.fame.amount;
		this.resources.fame.amount = 1;
		$('.citylevel').html(this.get_level());
		this.get_core().notify('The city of ' + this.get_name() + ' is now level ' + this.get_level() + '.');
		return this;
	};
	
	/**
	 * Rename this city.
	 * 
	 * @public
	 * @param {String} value
	 * @returns {city_builder.city}
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
		if (!this.has_storage_space()) {
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
	this.has_storage_space = function() {
		var storage = this.get_storage_space();
		if (storage.occupied >= storage.all) {
			this.get_core().error('There is no storage space in your city.');
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
			if (item !== 'coins' && item !== 'fame' && item !== 'prestige') {
				storage += this.get_resources()[item].storage;
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
	 * @returns {city_builder.building|Boolean}
	 */
	this._create_buildings = function(building_type, hidden) {
		hidden = (typeof hidden !== 'undefined') && hidden === true ? true : false;
		if (typeof building_type === 'object') {
			for (var i = 0; i < building_type.length; i++) {
				var _b = city_builder.BUILDINGS.findIndexM(building_type[i]);
				if (_b !== false) {
					var _c = city_builder.BUILDINGS[_b];
					var _building = new city_builder.building({
						city: this,
						type: building_type[i],
						data: _c,
						hidden: hidden
					});
					this.buildings.push(_building);
					this.buildings_list.push(building_type[i]);
				}
			}
		} else {
			var _b = city_builder.BUILDINGS.findIndexM(building_type);
			if (_b !== false) {
				var _c = city_builder.BUILDINGS[_b];
				var _building = new city_builder.building({
					city: this,
					type: building_type,
					data: _c,
					hidden: hidden
				});
				this.buildings.push(_building);
				this.buildings_list.push(building_type);
			}
		}
		return false;
	};
	
	/**
	 * Build the specified building.
	 * 
	 * @public
	 * @param {String} building_type
	 * @returns {city_builder.building|Boolean}
	 */
	this.build = function(building_type) {
		var _b = city_builder.BUILDINGS.findIndexM(building_type);
		if (_b !== false) {
			var _c = city_builder.BUILDINGS[_b];
			if ((typeof _c.requires.city_level !== 'undefined') && (this.level < _c.requires.city_level)) {
				this.get_core().error('Your city level is too low to construct this building.');
				return false;
			}
			if ((this.resources.coins.storage - _c.cost.coins) < 0) {
				this.get_core().error('You don`t have enough coins to construct this building.');
				return false;
			} else {
				this.resources.coins.storage = this.resources.coins.storage - _c.cost.coins;
			}
			for (var item in _c.cost) {
				if (item !== 'coins') {
					if ((this.get_resources()[item].storage - _c.cost[item]) < 0) {
						this.get_core().error('You don`t have enough ' + item + ' to construct this building.');
						return false;
					} else {
						this.get_resources()[item].storage = this.get_resources()[item].storage - _c.cost[item];
					}
				}
			}
			var _building = new city_builder.building({
				city: this,
				type: building_type,
				data: _c
			});
			this.buildings.push(_building);
			this.buildings_list.push(building_type);
			this.get_core().refresh_ui();
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
		return Math.floor((this.get_level() * this.get_fame_amount() * this.get_prestige_amount() * (this.get_army_total().total > 0 ? this.get_army_total().total: 1)) / 128);
	};
	
	/**
	 * Return a pointer to the specified building in this city by the specified
	 * handle.
	 * 
	 * @public
	 * @param {String} handle
	 * @returns {city_builder.building|Boolean}
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
	 * @returns {city_builder.city}
	 */
	this.demolish = function(id) {
		if (typeof id === 'number') {
			this.buildings.splice(id, 1);
		} else if (typeof id === 'string') {
			// TODO
		} else {
			// TODO
		}
		return this;
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
	 * Get the number of coins this city has.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_coins_amount = function() {
		return this.get_coins().storage;
	};
	
	/**
	 * Increase this city's coins by the specified amount.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.inc_coins_amount = function(value) {
		return this.set_coins_amount(this.get_coins_amount() + value);
	};
	
	/**
	 * Decrease this city's coins by the specified amount.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.dec_coins_amount = function(value) {
		if (!this.has_coins(value)) {
			return false;
		}
		this.set_coins_amount(this.get_coins_amount() - value);
		return true;
	};
	
	/**
	 * Set this city's coins to the specified value.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.set_coins_amount = function(value) {
		this.get_coins().storage = value;
		return value;
	};
	
	/**
	 * Return the value of this city's prestige.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_prestige = function() {
		return this.resources.prestige;
	};
	
	/**
	 * Get the fame this city has. This is the fame object.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_fame = function() {
		return this.resources.fame;
	};
	
	/**
	 * Set the fame of the city.
	 * 
	 * @public
	 * @param {Object} value
	 * @returns {city_builder.city}
	 */
	this.set_fame = function(value) {
		this.resources.fame = value;
		return this;
	};
	
	/**
	 * Set the coins of the city.
	 * 
	 * @public
	 * @param {Object} value
	 * @returns {city_builder.city}
	 */
	this.set_coins = function(value) {
		this.resources.coins = value;
		return this;
	};
	
	/**
	 * Get the number of fame this city has.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_fame_amount = function() {
		return this.get_fame().amount;
	};
	
	/**
	 * Increase this city's fame by the specified amount.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.inc_fame_amount = function(value) {
		return this.set_fame_amount(this.get_fame_amount() + value);
	};
	
	/**
	 * Decrease this city's fame by the specified amount.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.dec_fame_amount = function(value) {
		return this.set_fame_amount(this.get_fame_amount() - value);
	};
	
	/**
	 * Set this city's fame to the specified value.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.set_fame_amount = function(value) {
		this.get_fame().amount = value;
		return value;
	};
	
	/**
	 * Get the total number of soldiers available in this city.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_army = function() {
		return this.army;
	};
	
	/**
	 * Get the total number of ships available in this city.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_navy = function() {
		return this.navy;
	};
	
	/**
	 * Get the total number of mercenaries available for this city.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_mercenary = function() {
		return this.mercenary;
	};
	
	/**
	 * Get the navy of this city in an object format.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_navy_total = function() {
		var total = 0;
		var total_navy = {
			'Corsair': 0,
			'Caravel': 0,
			'Warship': 0
		};
		for (var i = 0; i < this.navy.length; i++) {
			var ship = this.navy[i].get_name();
			for (var item in total_navy) {
				if (ship === item) {
					total_navy[item]++;
					total++;
				}
			}
		}
		return {
			total: total,
			navy: total_navy
		};
	};
	
	/**
	 * Get the army of this city in an object format.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_army_total = function() {
		var total = 0;
		var total_army = {
			'Militia': 0,
			'Axeman': 0,
			'Bowman': 0,
			'Pikeman': 0,
			'Crossbowman': 0,
			'Knight': 0
		};
		for (var i = 0; i < this.army.length; i++) {
			var soldier = this.army[i].get_name();
			for (var item in total_army) {
				if (soldier === item) {
					total_army[item]++;
					total++;
				}
			}
		}
		return {
			total: total,
			army: total_army
		};
	};
	
	/**
	 * Get the mercenaries of this city in an object format.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_mercenary_total = function() {
		var total = 0;
		var total_army = {
			'Militia': 0,
			'Axeman': 0,
			'Bowman': 0,
			'Pikeman': 0,
			'Crossbowman': 0,
			'Knight': 0
		};
		for (var i = 0; i < this.mercenary.length; i++) {
			var soldier = this.mercenary[i].get_name();
			for (var item in total_army) {
				if (soldier === item) {
					total_army[item]++;
					total++;
				}
			}
		}
		return {
			total: total,
			mercenary: total_army
		};
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
		res[resource].storage = res[resource].storage - amount;
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
			res[resource].storage = res[resource].storage - resources[resource];
		}
		return true;
	};
	
	/**
	 * Check if this mercenary army has already been recruited.
	 * 
	 * @public
	 * @param {String} handle
	 * @returns {Boolean}
	 */
	this.is_mercenary_recruited = function(handle) {
		for (var i = 0; i < this.mercenary.length; i++) {
			if (this.mercenary[i].handle === handle) {
				return true;
			}
		}
		return false;
	};
	
	/**
	 * Ask the City Advisor for tips.
	 * 
	 * @public
	 * @returns {Array}
	 */
	this.call_advisor = function() {
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
		var storage = this.get_storage_space();
		if (storage.occupied >= storage.all) {
			advices.push('You have no storage space to store your new goods and they will be lost. Sell some goods or build a warehouse.');
		} else if ((storage.all - storage.occupied) < 100) {
			advices.push('You will soon run out of storage space and all goods produced will be lost. Sell some goods or build a warehouse.');
		}
		if (this.resources.coins.storage < 1000) {
			advices.push('You seem to be losing coins fast, sell some goods or upgrade your houses to get better taxes.');
		}
		if (this.resources.wood.storage < 100 || this.resources.stones.storage < 100) {
			advices.push('You are lacking construction materials, buy some stones and/or wood off the World Trade Market.');
		}
		if (this.resources.coins.storage > 100000) {
			advices.push('You have lots of coins, why not invest some in goods?');
		}
		for (var item in this.resources) {
			if (item !== 'coins' && item !== 'fame' && item !== 'prestige') {
				if (this.resources[item].storage > 1000) {
					advices.push('You seem to have a surplus of ' + city_builder.RESOURCES[item].name + '. You can sell some and get coins instead.');
				}
			}
		}
		return advices;
	};
	
	/**
	 * Recruit a soldier for the city's army.
	 * 
	 * @public
	 * @param {String} name
	 * @returns {Boolean}
	 */
	this.recruit_mercenary_army = function(name) {
		for (var i = 0; i < city_builder.MERCENARIES.length; i++) {
			if (name === city_builder.MERCENARIES[i].handle) {
				var price = city_builder.MERCENARIES[i].cost;
				if (this.dec_coins_amount(price) === false) {
					return false;
				}
				var army = {
					id: i,
					handle: name,
					army: []
				};
				for (var item in city_builder.MERCENARIES[i].army) {
					var soldier = city_builder.SOLDIER_TYPES[item];
					var _soldier = new city_builder.soldier({
						name: item,
						data: soldier
					});
					army.army.push(_soldier);
				}
				this.mercenary.push(army);
				this.get_core().notify('The mercenaries of the ' + city_builder.MERCENARIES[i].name + ' are now available for skirmish missions for the duration of one year.', 'Mercenaries recruited.');
				this.get_core().refresh_ui();
				this.get_core().save();
				return true;
			}
		}
		return false;
	};
	
	/**
	 * Construct a ship for the city's navy.
	 * 
	 * @public
	 * @param {String} ship_name
	 * @returns {Boolean}
	 */
	this.recruit_ship = function(ship_name) {
		for (var item in city_builder.SHIP_TYPES) {
			if (ship_name === item) {
				var ship = city_builder.SHIP_TYPES[item];
				if (!this.remove_resources(ship.cost)) {
					return false;
				}
				var _ship = new city_builder.ship({
					name: item,
					data: ship
				});
				this.navy.push(_ship);
				this.get_core().refresh_ui();
				this.get_core().notify('A new ' + ship_name + ' ship has been constructed.', 'New ship');
				this.get_core().save();
				return true;
			}
		}
		return false;
	};
	
	/**
	 * Recruit a soldier for the city's army.
	 * 
	 * @public
	 * @param {String} soldier_name
	 * @returns {Boolean}
	 */
	this.recruit_soldier = function(soldier_name) {
		for (var item in city_builder.SOLDIER_TYPES) {
			if (soldier_name === item) {
				var soldier = city_builder.SOLDIER_TYPES[item];
				if (!this.remove_resources(soldier.cost)) {
					return false;
				}
				var _soldier = new city_builder.soldier({
					name: item,
					data: soldier
				});
				this.army.push(_soldier);
				this.get_core().refresh_ui();
				this.get_core().save();
				return true;
			}
		}
		return false;
	};
	
	/**
	 * Internal function for recruiting a ship for the city's navy.
	 * 
	 * @public
	 * @param {String} ship_name
	 * @returns {city_builder.city}
	 */
	this._recruit_ship = function(ship_name) {
		for (var item in city_builder.SHIP_TYPES) {
			if (ship_name === item) {
				var ship = city_builder.SHIP_TYPES[item];
				var _ship = new city_builder.ship({
					name: item,
					data: ship
				});
				this.navy.push(_ship);
			}
		}
		return this;
	};
	
	/**
	 * Internal function for recruiting a soldier for the city's army.
	 * 
	 * @public
	 * @param {String} soldier_name
	 * @returns {city_builder.city}
	 */
	this._recruit_soldier = function(soldier_name) {
		for (var item in city_builder.SOLDIER_TYPES) {
			if (soldier_name === item) {
				var soldier = city_builder.SOLDIER_TYPES[item];
				var _soldier = new city_builder.soldier({
					name: item,
					data: soldier
				});
				this.army.push(_soldier);
			}
		}
		return this;
	};
	
	/**
	 * Get the navy size of this city.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_navy_size = function() {
		return this.get_navy().length;
	};
	
	/**
	 * Get the army size of this city.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_army_size = function() {
		return this.get_army().length;
	};
	
	/**
	 * Disband a ship from the city's navy.
	 * 
	 * @public
	 * @param {String} ship_name
	 * @returns {Boolean}
	 */
	this.disband_ship = function(ship_name) {
		var navy = this.get_navy();
		for (var i = 0; i < navy.length; i++) {
			var ship = navy[i];
			if (ship.get_name() === ship_name) {
				delete navy.soldier[i];
				return true;
			}
		}
		return false;
	};
	
	/**
	 * Disband a soldier from the city's army.
	 * 
	 * @public
	 * @param {String} soldier_name
	 * @returns {Boolean}
	 */
	this.disband_soldier = function(soldier_name) {
		var army = this.get_army();
		for (var i = 0; i < army.length; i++) {
			var soldier = army[i];
			if (soldier.get_name() === soldier_name) {
				delete army.soldier[i];
				return true;
			}
		}
		return false;
	};
	
	/**
	 * Set the mercenaries of the city.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {city_builder.city}
	 */
	this.set_mercenary = function(value) {
		this.mercenary = value;
		return this;
	};
	
	/**
	 * Set the navy of the city.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {city_builder.city}
	 */
	this.set_navy = function(value) {
		this.navy = value;
		return this;
	};
	
	/**
	 * Set the soldiers of the city.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {city_builder.city}
	 */
	this.set_army = function(value) {
		this.army = value;
		return this;
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
	 * @returns {city_builder.city}
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
	 * @returns {city_builder.city}
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
	 * @returns {city_builder.city}
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
	 * @returns {city_builder.city}
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
			name: city_builder.PERSONALITY_TYPES[this.personality]
		};
	};
	
	/**
	 * Release all the mercenary armies.
	 * 
	 * @public
	 * @returns {city_builder.city}
	 */
	this.release_mercenaries = function() {
		this.mercenary = [];
		this.get_core().notify('At the end of the year, mercenaries from your city have been released.');
		return this;
	};
	
	/**
	 * Setup the navy of this city.
	 * 
	 * @public
	 * @param {Boolean} hidden
	 * @param {Object} data
	 * @returns {city_builder.city}
	 */
	this.setup_navy = function(hidden, data) {
		if (typeof data === 'undefined') {
			var navy = this.data.navy;
			for (var ship in navy) {
				for (var i = 0; i < navy[ship]; i++) {
					if (hidden === true) {
						this._recruit_ship(ship);
					} else {
						this.recruit_ship(ship);
					}
				}
			}
		} else {
			var navy = data.navy;
			for (var ship in navy) {
				for (var i = 0; i < navy[ship]; i++) {
					if (hidden === true) {
						this._recruit_ship(ship);
					} else {
						this.recruit_ship(ship);
					}
				}
			}
		}
		return this;
	};
	
	/**
	 * Setup the army of this city.
	 * 
	 * @public
	 * @param {Boolean} hidden
	 * @param {Object} data
	 * @returns {city_builder.city}
	 */
	this.setup_army = function(hidden, data) {
		if (typeof data === 'undefined') {
			var army = this.data.army;
			for (var soldier in army) {
				for (var i = 0; i < army[soldier]; i++) {
					if (hidden === true) {
						this._recruit_soldier(soldier);
					} else {
						this.recruit_soldier(soldier);
					}
				}
			}
		} else {
			var army = data.army;
			for (var soldier in army) {
				for (var i = 0; i < army[soldier]; i++) {
					if (hidden === true) {
						this._recruit_soldier(soldier);
					} else {
						this.recruit_soldier(soldier);
					}
				}
			}
		}
		return this;
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
			name: city_builder.CLIMATE_TYPES[this.climate]
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
			name: city_builder.NATION_TYPES[this.nationality]
		};
	};
	
	/**
	 * Raise the prestige of this city by the specified amount.
	 * 
	 * @public
	 * @param {Number} amount
	 * @returns {Number}
	 */
	this.raise_prestige = function(amount) {
		if (typeof amount !== 'undefined') {
			this.resources.prestige.amount += amount;
		} else {
			++this.resources.prestige.amount;
		}
		$('.cityprestige').html(this.get_prestige_amount());
		this.get_core().notify('The prestige of your city raised.');
		return this.resources.prestige.amount;
	};
	
	/**
	 * Lower the prestige of this city by the specified amount.
	 * 
	 * @public
	 * @param {Number} amount
	 * @returns {Number}
	 */
	this.lower_prestige = function(amount) {
		if (typeof amount !== 'undefined') {
			if ((this.resources.prestige.amount - amount) >= 1) {
				this.resources.prestige.amount -= amount;
				this.get_core().notify('The prestige of your city lowered.');
			}
		} else {
			if ((this.resources.prestige.amount - 1) >= 1) {
				--this.resources.prestige.amount;
				this.get_core().notify('The prestige of your city lowered.');
			}
		}
		$('.cityprestige').html(this.get_prestige_amount());
		return this.resources.prestige.amount;
	};
	
	/**
	 * Reset the prestige of this city to 0.
	 * 
	 * @returns {city_builder.city}
	 * @public
	 */
	this.reset_prestige = function() {
		this.resources.prestige.amount = 1;
		$('.cityprestige').html(this.get_prestige_amount());
		return this;
	};
	
	/**
	 * Set the prestige of this city.
	 * 
	 * @public
	 * @returns {city_builder.city}
	 * @param {Number} value
	 */
	this.set_prestige = function(value) {
		this.resources.prestige.amount = value;
		$('.cityprestige').html(this.get_prestige_amount());
		return this;
	};
	
	/**
	 * Increase this city's prestige by the specified amount.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.inc_prestige_amount = function(value) {
		return this.set_prestige_amount(this.get_prestige_amount() + value);
	};
	
	/**
	 * Decrease this city's prestige by the specified amount.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.dec_prestige_amount = function(value) {
		return this.set_prestige_amount(this.get_prestige_amount() - value);
	};

	/**
	 * Set this city's prestige to the specified value.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.set_prestige_amount = function(value) {
		this.get_prestige().amount = value;
		return value;
	};

	/**
	 * Get the number of prestige this city has.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_prestige_amount = function() {
		return this.get_prestige().amount;
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
	 * @returns {city_builder.city}
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
	 * @param {String}} city
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
	 * @returns {city_builder.city}
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
	 * @returns {city_builder.city}
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
	 * @returns {city_builder.city}
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
	 * @returns {city_builder.city}
	 * @param {city_builder.city}
	 */
	this.propose_pact = function(city) {
		// TODO
		return this;
	};

	/**
	 * Assign a spy to the specified city.
	 *
	 * @public
	 * @returns {city_builder.city}
	 * @param {city_builder.city}
	 */
	this.assign_spy = function(city) {
		// TODO
		return this;
	};

	// Fire up the constructor
	return this.__constructor(params);
};
