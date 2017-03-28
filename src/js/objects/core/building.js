/**
 * Main Game building object.
 * 
 * @param {Object} params
 * @class {city_builder.objects.building}
 * @returns {city_builder.objects.building}
 */
city_builder.objects.building = function(params) {
	
	/**
	 * The level of this building.
	 * 
	 * @type {Number}
	 * @private
	 */
	this.level = 1;
	
	/**
	 * Pointer to the city this building is located in.
	 * 
	 * @type {city_builder.objects.city}
	 * @private
	 */
	this.city = null;
	
	/**
	 * The name of this building.
	 * 
	 * @type {String}
	 * @private
	 */
	this.name = null;
	
	/**
	 * The type of this building.
	 * 
	 * @type {String}
	 * @private
	 */
	this.type = null;
	
	/**
	 * Check if this building producing goods.
	 * 
	 * @type {Boolean}
	 * @private
	 */
	this.working = true;
	
	/**
	 * Check if this is a production building.
	 * 
	 * @type {Boolean}
	 * @private
	 */
	this.is_production = false;
	
	/**
	 * Check if this is a municipal building.
	 * 
	 * @type {Boolean}
	 * @private
	 */
	this.is_municipal = false;
		
	/**
	 * Check if this is a housing building.
	 * 
	 * @type {Boolean}
	 * @private
	 */
	this.is_housing = false;

	/**
	 * The DOM handle of this building.
	 *
	 * @type {String}
	 * @private
	 */
	this.handle = null;

	/**
	 * Flag if this building has any problems producing its goods.
	 *
	 * @type {Boolean}
	 * @private
	 */
	this.problems = false;

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {city_builder.objects.building}
	 * @param {Object} params
	 */
	this.__constructor = function(params) {
		var self = this;
		this.city = params.city;
		this.type = params.type;
		this.name = params.data.name;
		this.is_production = (typeof params.data.is_production !== 'undefined' && params.data.is_production === true) ? true : false;
		this.is_municipal = (typeof params.data.is_municipal !== 'undefined' && params.data.is_municipal === true) ? true : false;
		this.is_housing = (typeof params.data.is_housing !== 'undefined' && params.data.is_housing === true) ? true : false;
		this.level = (typeof params.data.level !== 'undefined') ? params.data.level : 1;
		params.data.level = this.level;
		this.handle = params.data.handle;
		$('#building-' + this.handle).empty();
		if (params.hidden !== true) {
			$('section.game').append(city_builder.ui.building_element(params)).on('click', '#building-' + params.data.handle, function() {
				self.get_core().open_panel(new city_builder.controls.panel_building({
					core: self.get_core(),
					header: params.data.name,
					data: params.data
				}));
			});
		}
		var building = this.get_building_data();
		switch (this.type) {
			case 'marketplace':
			case 'warehouse':
				this.get_city().storage = this.get_city().storage + (building.storage * this.get_level());
				break;
		}
		this.get_core().refresh_panels();
		return this;
	};
	
	this.is_upgradable = function() {
		var building = this.get_building_data();
		if (this.level < building.levels) {
			return true;
		}
		return false;
	};

	/**
	 * Upgrade this building.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.upgrade = function() {
		var self = this;
		var city = this.get_city();
		var resources = city.get_resources();
		var next_level = this.get_level() + 1;
		var _b = city_builder.BUILDINGS.findIndexM(this.get_type());
		if (_b !== false) {
			var _c = city_builder.BUILDINGS[_b];
			if (this.is_upgradable() === true) {
				var bl_id = city.buildings_list.findIndexM(this.get_type());
				if (bl_id !== false) {
					if ((resources.coins - (_c.cost.coins * next_level)) < 0) {
						this.get_core().error('You don`t have enough coins to upgrade this building.');
						return false;
					} else {
						resources.coins = resources.coins - (_c.cost.coins * next_level);
					}
					for (var item in _c.cost) {
						if (item !== 'coins') {
							if ((city.get_resources()[item] - (_c.cost[item] * next_level)) < 0) {
								this.get_core().error('You don`t have enough ' + item + ' to upgrade this building.');
								return false;
							} else {
								city.get_resources()[item] = city.get_resources()[item] - (_c.cost[item] * next_level);
							}
						}
					}
					++this.level;
					$('section.game .building[data-type=' + this.get_type() + ']').css({
						'background-image': 'url(./images/buildings/' + ((self.get_type().slice(0, -1) === 'house') ? self.get_type().slice(0, -1) : self.get_type()) + self.get_level() + '.png)'
					});
					this.get_city().buildings_list[bl_id].level = this.get_level();
					this.get_core().refresh_panels();
					this.get_core().save();
					this.get_core().notify(this.get_name() + ' upgraded to level ' + this.get_level());
					return true;
				}
			}
		}
		return false;
	};
	
	/**
	 * Downgrade this building.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.downgrade = function() {
		if (this.level > 1) {
			var bl_id = this.get_city().buildings_list.findIndexM(this.get_type());
			if (bl_id !== false) {
				--this.level;
				this.get_city().buildings_list[bl_id].level = this.get_level();
				this.get_core().refresh_panels();
				this.get_core().save();
				this.get_core().notify(this.get_name() + ' downgraded to level ' + this.get_level());
				return true;
			}
			this.get_core().refresh_panels();
			return true;
		}
		return false;
	};
	
	/**
	 * Check if this building is a housing building.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.is_housing_building = function() {
		return this.is_housing;
	};

	/**
	 * Check if this building is a production building (its production can be
	 * started and stopped).
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.is_production_building = function() {
		return this.is_production;
	};
	
	/**
	 * Check if this building's production is started or stopped.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.is_producing = function() {
		return this.working;
	};
	
	/**
	 * Start this building's production
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.start_production = function() {
		if (this.is_production_building()) {
			this.get_core().notify(this.get_name() + '`s production started.');
			this.working = true;
			this.problems = false;
			this.get_core().refresh_panels();
			$('#building-' + this.handle).empty();
			return true;
		} else {
			return false;
		}
	};
	
	/**
	 * Stop this building's production
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.stop_production = function() {
		if (this.is_production_building()) {
			this.get_core().notify(this.get_name() + '`s production stopped.');
			this.working = false;
			this.problems = true;
			this.get_core().refresh_panels();
			this.notify(city_builder.NOTIFICATION_PRODUCTION_PAUSED);
			return true;
		} else {
			return false;
		}
	};
	
	/**
	 * Demolish this building and remove it from the DOM.
	 * 
	 * @public
	 * @returns {boolean}
	 */
	this.demolish = function() {
		if (this.get_city().demolish(this.get_type())) {
			$('section.game .building[data-type=' + this.get_type() + ']').remove();
			this.get_core().notify(this.get_name() + ' demolished successfully!');
			this.get_core().refresh_panels();
			return true;
		} else {
			return false;
		}
	};
	
	/**
	 * Check if the city has the required materials to create this building.
	 * 
	 * @public
	 * @param {Array|String} mats
	 * @returns {Boolean}
	 */
	this.has_materials = function(mats) {
		var building = this.get_building_data();
		var res = this.get_city_resources();
		var mat = building.materials;
		if (typeof mats === 'object') {
			for (var i = 0; i < mats.length; i++) {
				if (mats[i] !== 'coins') {
					if (res[mats[i]] - mat[mats[i]] < 0) {
						this.get_core().log(this.get_name() + ' doesn`t have enough ' + mats[i] + '.', true);
						this.notify(city_builder.NOTIFICATION_MISSING_RESOURCES);
						this.problems = true;
						return false;
					}
				}
			}
		} else {
			if (res[mats] - mat[mats] < 0) {
				this.get_core().log(this.get_name() + ' doesn`t have enough ' + mats + '.', true);
				this.notify(city_builder.NOTIFICATION_MISSING_RESOURCES);
				this.problems = true;
				return false;
			}
		}
		return true;
	};
	
	/**
	 * Use the materials required for this building's production.
	 * 
	 * @public
	 * @param {String|Array} material
	 * @returns {city_builder.objects.building}
	 */
	this.use_material = function(material) {
		var building = this.get_building_data();
		var mat = building.materials;
		if (typeof material === 'object') {
			for (var i = 0; i < material.length; i++) {
				this.get_city().remove_resource(material[i], mat[material[i]]);
				this.get_core().log(this.get_name() + ' used ' + mat[material[i]] + ' ' + material[i] + '.');
			}
		} else {
			this.get_city().remove_resource(material, mat[material]);
			this.get_core().log(this.get_name() + ' used ' + mat[material] + ' ' + material + '.');
		}
		return this;
	};
	
	/**
	 * Get building data from the main configuration array.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_building_data = function() {
		return city_builder.BUILDINGS[city_builder.BUILDINGS.findIndexM(this.type)];
	};
	
	/**
	 * Get building data.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_data = function() {
		return this.data;
	};
	
	/**
	 * Get the city resources object
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_city_resources = function() {
		return this.get_city().get_resources();
	};
	
	/**
	 * Produce the materials.
	 * 
	 * @public
	 * @param {String|Array} material
	 * @returns {city_builder.objects.building}
	 */
	this.produce_material = function(material) {
		var city = this.get_city();
		var resources = city.get_resources();
		var building = this.get_building_data();
		var prd = building.production;
		if (typeof material === 'object') {
			for (var i = 0; i < material.length; i++) {
				if (!this.is_producing()) {
					return this;
				}
				var amount = prd[material[i]] * this.get_level();
				if (this.get_city().has_storage_space_for(amount)) {
					this.get_city().add_to_storage(material[i], amount);
					if (typeof building.chance !== 'undefined') {
						for (var item in building.chance) {
							var rnd = Math.random();
							if (rnd < building.chance[item]) {
								this.get_core().log(this.get_name() + ' procced extra ' + city_builder.utils.get_resource_name(item) + '.');
								this.get_city().add_to_storage(item, 1);
							}
						}
					}
					this.get_core().log(this.get_name() + ' produced ' + amount + ' ' + material[i] + '.');
				}
			}
		} else {
			var amount = prd[material] * this.get_level();
			if (this.get_city().has_storage_space_for(amount)) {
				if (!this.is_producing()) {
					return this;
				}
				this.get_city().add_to_storage(material, amount);
				if (typeof building.chance !== 'undefined') {
					for (var item in building.chance) {
						var rnd = Math.random();
						if (rnd < building.chance[item]) {
							this.get_core().log(this.get_name() + ' procced extra ' + city_builder.utils.get_resource_name(item) + '.');
							this.get_city().add_to_storage(item, 1);
						}
					}
				}
				this.get_core().log(this.get_name() + ' produced ' + amount + ' ' + material + '.');
			}
		}
		return this;
	};
	
	/**
	 * Process the materials and use the required ones.
	 * 
	 * @public
	 * @returns {city_builder.objects.building}
	 * @param {String|Array} mats_production
	 * @param {String|Array} mats_use
	 */
	this.process_mats = function(mats_production, mats_use) {
		if (typeof mats_use !== 'undefined') {
			if (this.has_materials(mats_use)) {
				this.use_material(mats_use);
				this.produce_material(mats_production);
			}
		} else {
			this.produce_material(mats_production);
		}
		return this;
	};
	
	/**
	 * Raise the prestige of the city this building is located in.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.adjust_city_prestige = function() {
		var building = this.get_building_data();
		var prd = building.production;
		var amount = prd.prestige;
		this.get_city().inc_prestige(amount);
		this.get_core().log(this.get_name() + ' raised city prestige by ' + amount + '.');
		return this.get_city().get_prestige();
	};

	/**
	 * Raise the fame of the city this building is located in.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.adjust_city_fame = function() {
		var building = this.get_building_data();
		var prd = building.production;
		var amount = prd.fame * this.get_level();
		this.get_city().inc_fame(amount);
		this.get_core().log(this.get_name() + ' raised city fame by ' + amount + '.');
		return this.get_city().get_fame();
	};
	
	/**
	 * Raise the fame of the city this building is located in by converting
	 * coins into fame.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.adjust_city_fame_for_coins = function() {
		var building = this.get_building_data();
		var mat = building.materials;
		var prd = building.production;
		if (this.get_city().has_coins(mat.coins)) {
			var amount = prd.fame * this.get_level();
			this.get_city().inc_fame(amount);
			this.get_city().dec_coins(mat.coins);
			this.get_core().log(this.get_name() + ' raised city fame with ' + amount + ' at the cost of ' + mat.coins + ' coins.');
		}
		return {
			fame: this.get_city().get_fame(),
			coins: this.get_city().get_coins()
		};
	};
	
	/**
	 * Calculate if the house has the required food and processes the tax.
	 * 
	 * @public
	 * @returns {city_builder.objects.building}
	 */
	this.process_tax = function() {
		var _m = [];
		var building = this.get_building_data();
		var mat = building.materials;
		for (var item in mat) {
			_m.push(item);
		}
		if (_m.length > 0) {
			if (this.has_materials(_m)) {
				this.use_material(_m);
				var amount = building.tax * this.get_level();
				this.get_city().inc_coins(amount);
				this.get_core().log(this.get_name() + ' gave ' + amount + ' coins via tax.');
			}
		}
		return this;
	};
	
	/**
	 * Check if this building has the required additional buildings for production.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.has_requirements = function() {
		var good = true;
		var building = this.get_building_data();
		if (typeof building.requires.buildings !== 'undefined') {
			var required = building.requires.buildings;
			if (typeof required === 'object') {
				for (var i = 0; i < required.length; i++) {
					if (!this.get_city().is_building_built(required[i])) {
						good = false;
						var req = city_builder.BUILDINGS[city_builder.BUILDINGS.findIndexM(required[i])];
						this.get_core().log(this.get_name() + ' doesn`t have the required buildings: ' + req.name + '.', true);
						this.notify(city_builder.NOTIFICATION_MISSING_RESOURCES);
						this.problems = true;
					}
				}
			} else {
				if (!this.get_city().is_building_built(required)) {
					good = false;
					var req = city_builder.BUILDINGS[city_builder.BUILDINGS.findIndexM(required)];
					this.get_core().log(this.get_name() + ' doesn`t have the required buildings: ' + req.name + '.', true);
					this.notify(city_builder.NOTIFICATION_MISSING_RESOURCES);
					this.problems = true;
				}
			}
		}
		return good;
	};
	
	/**
	 * Internal function for further processing of the production chain.
	 * 
	 * @private
	 * @returns {city_builder.objects.building}
	 */
	this._process = function() {
		var _p = [];
		var _m = [];
		var building = this.get_building_data();
		var mat = building.materials;
		for (var item in mat) {
			_m.push(item);
		}
		if (building.is_housing === true) {
			if (_m.length > 0) {
				if (this.has_materials(_m)) {
					this.use_material(_m);
					var amount = building.tax * this.get_level();
					this.get_city().inc_coins(amount);
					this.get_core().log(this.get_name() + ' gave ' + amount + ' coins via tax.');
				}
			}
		} else {
			if (this.is_producing()) {
				var prd = building.production;
				for (var item in prd) {
					_p.push(item);
				}
				if (this.has_requirements()) {
					if (_m.length > 0) {
						if (this.has_materials(_m)) {
							this.use_material(_m);
							this.produce_material(_p);
							this.problems = false;
						}
					} else {
						this.produce_material(_p);
						this.problems = false;
					}
				}
			} else {
				this.get_core().log(this.get_name() + ' production is stopped.');
				this.notify(city_builder.NOTIFICATION_PRODUCTION_PAUSED);
				this.problems = true;
			}
		}
		return this;
	};
	
	/**
	 * Check if this building is the marketplace.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.is_marketplace = function() {
		if (this.get_type() === 'marketplace') {
			return true;
		}
		return false;
	};
	
	/**
	 * Main threading method for the building, this does the actual processing each turn.
	 * 
	 * @public
	 * @returns {city_builder.objects.building}
	 */
	this.process = function() {
		var building = this.get_building_data();
		var res = this.get_city_resources();
		var prd = building.production;
		var mat = building.materials;
		switch (this.get_type()) {
			/* STORAGE */
			case 'marketplace':
				this.adjust_city_fame();
				break;
			case 'warehouse':
				break;
			/* MILITARY */
			case 'camp':
				break;
			case 'castle':
				this.adjust_city_fame_for_coins();
				this.adjust_city_prestige();
				break;
			/* MUNICIPAL */
			case 'church':
				this.adjust_city_fame_for_coins();
				break;
			case 'monastery':
				this.adjust_city_fame_for_coins();
				break;
			case 'tavern':
				this.adjust_city_fame_for_coins();
				break;
			/* ALL OTHER */
			default:
				this._process();
				break;
		}
		return this;
	};
	
	/**
	 * Get the city this building is located into
	 * 
	 * @public
	 * @returns {city_builder.objects.city}
	 */
	this.get_city = function() {
		return this.city;
	};
	
	/**
	 * Get a pointer to the game core
	 * 
	 * @public
	 * @returns {city_builder.game}
	 */
	this.get_core = function() {
		return this.get_city().get_core();
	};
	
	/**
	 * Get the name of this building
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_name = function() {
		return this.name;
	};
	
	/**
	 * Check whether this building has problems producing its goods.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.has_problems = function() {
		return this.problems;
	};
	
	/**
	 * Get the level of this building
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_level = function() {
		return this.level;
	};
	
	/**
	 * Get the type of this building
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_type = function() {
		return this.type;
	};
	
	/**
	 * Return the DOM handle of this building.
	 *
	 * @public
	 * @returns {String}
	 */
	this.get_handle = function() {
		return this.handle;
	};

	/**
	 * Perform building notifications.
	 *
	 * @public
	 * @param {Number} notification_type
	 * @returns {city_builder.objects.building}
	 */
	this.notify = function(notification_type) {
		var handle = $('#building-' + this.get_handle());
		switch (notification_type) {
			case city_builder.NOTIFICATION_PRODUCTION_PAUSED:
				handle.empty().append('<span class="notification paused"></span>');
				break;
			case city_builder.NOTIFICATION_MISSING_RESOURCES:
			default:
				handle.empty().append('<span class="notification error"></span>');
				break;
		}
		return this;
	};

	// Fire up the constructor
	return this.__constructor(params);
};
