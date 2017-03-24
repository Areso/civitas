/**
 * Main Game building object.
 * 
 * @param {type} params
 * @class {city_builder.building}
 * @returns {city_builder.building}
 */
city_builder.building = function(params) {
	
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
	 * @type {city_builder.city}
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
	 * Object constructor.
	 * 
	 * @private
	 * @returns {city_builder.building}
	 * @param {Object} params
	 */
	this.__constructor = function(params) {
		var self = this;
		this.city = params.city;
		this.type = params.type;
		this.name = params.data.name;
		this.isProduction = (typeof params.data.is_production !== 'undefined' && params.data.is_production === true) ? true : false;
		this.isMunicipal = (typeof params.data.is_municipal !== 'undefined' && params.data.is_municipal === true) ? true : false;
		this.level = (typeof params.data.level !== 'undefined') ? params.data.level : 1;
		params.data.level = this.level;
		if (params.hidden !== true) {
			$('section.game').append(city_builder.ui.building_element(params)).on('click', '#building-' + params.data.handle, function() {
				new city_builder.panel_building({
					core: self.get_core(),
					header: params.data.name,
					data: params.data
				});
			});
		}
		var building = this.get_building_data();
		switch (this.type) {
			case 'marketplace':
			case 'warehouse':
				this.get_city().storage = this.get_city().storage + building.storage;
				break;
		}
		return this;
	};
	
	/**
	 * Upgrade this building.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.upgrade = function() {
		var building = this.get_building_data();
		if (this.level < building.upgrades) {
			++this.level;
			return true;
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
			--this.level;
			return true;
		}
		return false;
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
			return true;
		}
		else {
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
			return true;
		}
		else {
			return false;
		}
	};
	
	/**
	 * Demolish this building and remove it from the DOM.
	 * 
	 * @TODO
	 * @public
	 * @returns {city_builder.building}
	 */
	this.demolish = function() {
		$('section.game .building[data=' + this.get_type() + ']').remove();
		return this;
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
					if (res[mats[i]].storage - mat[mats[i]] < 0) {
						this.get_core().log(this.get_name() + ' doesn`t have enough ' + mats[i] + '.', true);
						return false;
					}
				}
			}
		}
		else {
			if (res[mats].storage - mat[mats] < 0) {
				this.get_core().log(this.get_name() + ' doesn`t have enough ' + mats + '.', true);
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
	 * @returns {city_builder.building}
	 */
	this.use_material = function(material) {
		var building = this.get_building_data();
		//var res = this.get_city_resources();
		var mat = building.materials;
		if (typeof material === 'object') {
			for (var i = 0; i < material.length; i++) {
				this.get_city().remove_resource(material[i], mat[material[i]]);
				//res[material[i]].storage = res[material[i]].storage - mat[material[i]];
				this.get_core().log(this.get_name() + ' used ' + mat[material[i]] + ' ' + material[i] + '.');
			}
		}
		else {
			this.get_city().remove_resource(material, mat[material]);
			//res[material].storage = res[material].storage - mat[material];
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
	 * @returns {city_builder.building}
	 */
	this.produce_material = function(material) {
		var building = this.get_building_data();
		var prd = building.production;
		if (typeof material === 'object') {
			for (var i = 0; i < material.length; i++) {
				if (!this.is_producing()) {
					this.get_core().log(this.get_name() + ' production is stopped.');
					return this;
				}
				var amount = prd[material[i]] * this.get_level();
				if (this.get_city().has_storage_space_for(amount)) {
					this.get_city().add_to_storage(material[i], amount);
					if (typeof building.chance !== 'undefined') {
						for (var item in building.chance) {
							var rnd = Math.random();
							if (rnd < building.chance[item]) {
								this.get_core().log(this.get_name() + ' procced extra ' + city_builder.RESOURCES[item].name + '.');
								this.get_city().add_to_storage(item, 1);
							}
						}
					}
					this.get_core().log(this.get_name() + ' produced ' + amount + ' ' + material[i] + '.');
				}
			}
		}
		else {
			var amount = prd[material] * this.get_level();
			if (this.get_city().has_storage_space_for(amount)) {
				if (!this.is_producing()) {
					this.get_core().log(this.get_name() + ' production is stopped.');
					return this;
				}
				this.get_city().add_to_storage(material, amount);
				if (typeof building.chance !== 'undefined') {
					for (var item in building.chance) {
						var rnd = Math.random();
						if (rnd < building.chance[item]) {
							this.get_core().log(this.get_name() + ' procced extra ' + city_builder.RESOURCES[item].name + '.');
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
	 * @returns {city_builder.building}
	 * @param {String|Array} matsProduction
	 * @param {String|Array} matsUse
	 */
	this.process_mats = function(mats_production, mats_use) {
		if (typeof mats_use !== 'undefined') {
			if (this.has_materials(mats_use)) {
				this.use_material(mats_use);
				this.produce_material(mats_production);
			}
		}
		else {
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
		this.get_city().inc_prestige_amount(amount);
		this.get_core().log(this.get_name() + ' raised city prestige by ' + amount + '.');
		return this.get_city().get_prestige().amount;
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
		this.get_city().inc_fame_amount(amount);
		this.get_core().log(this.get_name() + ' raised city fame by ' + amount + '.');
		return this.get_city().get_fame().amount;
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
			this.get_city().inc_fame_amount(amount);
			this.get_city().dec_coins_amount(mat.coins);
			this.get_core().log(this.get_name() + ' raised city fame with ' + amount + ' at the cost of ' + mat.coins + ' coins.');
		}
		return {
			fame: this.get_city().get_fame().amount,
			coins: this.get_city().get_coins().amount
		};
	};
	
	/**
	 * Calculate if the house has the required food and processes the tax.
	 * 
	 * @public
	 * @returns {city_builder.building}
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
				this.get_city().inc_coins_amount(amount);
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
					}
				}
			}
			else {
				if (!this.get_city().is_building_built(required)) {
					good = false;
					var req = city_builder.BUILDINGS[city_builder.BUILDINGS.findIndexM(required)];
					this.get_core().log(this.get_name() + ' doesn`t have the required buildings: ' + req.name + '.', true);
				}
			}
		}
		return good;
	};
	
	/**
	 * Internal function for further processing of the production chain.
	 * 
	 * @private
	 * @returns {city_builder.building}
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
					this.get_city().inc_coins_amount(amount);
					this.get_core().log(this.get_name() + ' gave ' + amount + ' coins via tax.');
				}
			}
		}
		else {
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
						}
					}
					else {
						this.produce_material(_p);
					}
				}
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
	 * @returns {city_builder.building}
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
	 * @returns {city_builder.city}
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
	
	// Fire up the constructor
	return this.__constructor(params);
};
