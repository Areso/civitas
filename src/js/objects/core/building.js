/**
 * Main Game building object.
 * 
 * @param {Object} params
 * @class {civitas.objects.building}
 * @returns {civitas.objects.building}
 */
civitas.objects.building = function(params) {

	/**
	 * The level of this building.
	 * 
	 * @type {Number}
	 * @private
	 */
	this.level = 1;

	/**
	 * Pointer to the settlement this building is located in.
	 * 
	 * @type {civitas.objects.settlement}
	 * @private
	 */
	this.settlement = null;

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
	this.stopped = false;

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
	 * @returns {civitas.objects.building}
	 * @param {Object} params
	 */
	this.__init = function(params) {
		var self = this;
		this.settlement = params.settlement;
		this.type = params.type;
		this.name = params.data.name;
		this.is_production = (typeof params.data.is_production !== 'undefined' && params.data.is_production === true) ? true : false;
		this.is_municipal = (typeof params.data.is_municipal !== 'undefined' && params.data.is_municipal === true) ? true : false;
		this.is_housing = (typeof params.data.is_housing !== 'undefined' && params.data.is_housing === true) ? true : false;
		this.level = (typeof params.data.level !== 'undefined') ? params.data.level : 1;
		this.stopped = (typeof params.stopped !== 'undefined') ? params.stopped : false;
		this.handle = params.data.handle;
		params.data.level = this.get_level();
		if (params.hidden !== true && this.settlement.is_player()) {
			$('section.game').append(civitas.ui.building_element(params)).on('click', '#building-' + this.get_handle(), function() {
				var panel = civitas['PANEL_' + self.get_handle().toUpperCase()];
				if (typeof panel !== 'undefined') {
					self.core().open_panel(panel, params.data);
				} else {
					self.core().open_panel(civitas.PANEL_BUILDING, params.data);
				}
				return false;
			});
			if (this.stopped === true) {
				this.problems = true;
				this.notify(civitas.NOTIFICATION_PRODUCTION_PAUSED);
			} else {
				this.problems = false;
				this.notify();
			}
			this.core().refresh();
		}
		var building = this.get_building_data();
		switch (this.get_type()) {
			case 'marketplace':
			case 'warehouse':
				this.get_settlement().storage(this.get_settlement().storage().all + (building.storage * this.get_level()));
				break;
		}
		return this;
	};

	/**
	 * Check if the building can be upgraded.
	 *
	 * @returns {Boolean}
	 * @public
	 */
	this.is_upgradable = function() {
		var building = this.get_building_data();
		if (this.get_level() < building.levels) {
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
		var core = this.core();
		var settlement = this.get_settlement();
		var resources = settlement.get_resources();
		var next_level = this.get_level() + 1;
		var data = this.get_building_data(this.get_type());
		var building_image = this.get_type();
		if (data && this.is_upgradable() && settlement.is_building_built(this.get_type())) {
			for (var item in data.cost) {
				if ((resources[item] - (data.cost[item] * next_level)) < 0) {
					if (settlement.is_player()) {
						core.error('You don`t have enough ' + item + ' to upgrade this building.');
					}
					return false;
				}
			}
			for (var item in data.cost) {
				if ((resources[item] - (data.cost[item] * next_level)) >= 0) {
					resources[item] = resources[item] - (data.cost[item] * next_level);
				}
			}
			this.set_level(next_level);
			if (settlement.is_player()) {
				if (this.get_type().slice(0, 5) === 'house') {
					building_image = this.get_type().slice(0, 5);
				}
				$('section.game .building[data-type=' + this.get_type() + ']').css({
					'background-image': 'url(./images/buildings/' + ((typeof data.visible_upgrades === 'undefined' || data.visible_upgrades === false) ? building_image + '1' : building_image + this.get_level()) + '.png)'
				});
			}
			if (typeof data.storage !== 'undefined') {
				settlement.storage(settlement.storage().all + data.storage);
			}
			if (settlement.is_player()) {
				core.save_and_refresh();
				core.notify(this.get_name() + ' upgraded to level ' + this.get_level());
			}
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
		var settlement = this.get_settlement();
		if (this.get_level() > 1 && this.get_settlement().is_building_built(this.get_type())) {
			var building_image = this.get_type();
			var data = this.get_building_data(this.get_type());
			--this.level;
			if (settlement.is_player()) {
				if (this.get_type().slice(0, 5) === 'house') {
					building_image = this.get_type().slice(0, 5);
				}
				$('section.game .building[data-type=' + this.get_type() + ']').css({
					'background-image': 'url(./images/buildings/' + ((typeof data.visible_upgrades === 'undefined' || data.visible_upgrades === false) ? building_image + '1' : building_image + this.get_level()) + '.png)'
				});
				this.core().save_and_refresh();
				this.core().notify(this.get_name() + ' downgraded to level ' + this.get_level());
			}
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
	 * Check if this building is a municipal building.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.is_municipal_building = function() {
		return this.is_municipal;
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
	this.is_stopped = function() {
		return this.stopped;
	};

	/**
	 * Start this building's production
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.start_production = function() {
		if (this.get_settlement().is_building_built(this.get_type()) && this.is_production_building()) {
			if (this.get_settlement().is_player()) {
				this.core().notify(this.get_name() + '`s production started.');
				this.notify();
			}
			this.stopped = false;
			this.problems = false;
			this.core().save_and_refresh();
			return true;
		}
		return false;
	};

	/**
	 * Stop this building's production
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.stop_production = function() {
		if (this.get_settlement().is_building_built(this.get_type()) && this.is_production_building()) {
			if (this.get_settlement().is_player()) {
				this.core().notify(this.get_name() + '`s production stopped.');
				this.notify(civitas.NOTIFICATION_PRODUCTION_PAUSED);
			}
			this.stopped = true;
			this.problems = true;
			this.core().save_and_refresh();
			return true;
		}
		return false;
	};

	/**
	 * Demolish this building and remove it from the DOM.
	 * 
	 * @public
	 * @returns {boolean}
	 */
	this.demolish = function() {
		var settlement = this.get_settlement();
		if (this.get_type() !== 'marketplace') {
			for (var i = 0; i < settlement.buildings.length; i++) {
				if (settlement.buildings[i].get_type() === this.get_type()) {
					settlement.buildings.splice(i, 1);
				}
			}
			if (settlement.is_player()) {
				$('section.game > .building[data-type=' + this.get_type() + ']').remove();
				this.core().notify(this.get_name() + ' demolished successfully!');
			}
			return true;
		} else {
			if (settlement.is_player()) {
				this.core().error('Unable to demolish the specified building `' + this.get_name() + '`!');
			}
			return false;
		}
	};

	/**
	 * Internal helper method for checking if the settlement has the required material.
	 *
	 * @private
	 * @param {String} material
	 * @returns {Boolean}
	 */
	this._has_material = function(material, notify) {
		var building = this.get_building_data();
		var materials = building.materials;
		var resources = this.get_settlement_resources();
		if (resources[material] - materials[material] < 0) {
			if (this.get_settlement().is_player()) {
				if (typeof notify !== 'undefined' && notify === true) {
					this.core().log(this.get_name() + ' doesn`t have enough ' + material + '.', true);
				}
				this.notify(civitas.NOTIFICATION_MISSING_RESOURCES);
			}
			this.problems = true;
			return false;
		}
		return true;
	};

	/**
	 * Check if the settlement has the required materials to create this building.
	 * 
	 * @public
	 * @param {Array|String} materials
	 * @returns {Boolean}
	 */
	this.has_materials = function(materials, notify) {
		if (typeof materials === 'object') {
			for (var i = 0; i < materials.length; i++) {
				if (materials[i] !== 'coins') {
					return this._has_material(materials[i], notify);
				}
			}
		} else {
			return this._has_material(materials, notify);
		}
		return true;
	};

	/**
	 * Use the materials required for this building's production.
	 * 
	 * @public
	 * @param {String|Array} material
	 * @returns {civitas.objects.building}
	 */
	this.use_material = function(material) {
		var settlement = this.get_settlement();
		var building = this.get_building_data();
		var _material = building.materials;
		if (typeof material === 'object') {
			for (var i = 0; i < material.length; i++) {
				settlement.remove_resource(material[i], _material[material[i]]);
				if (settlement.is_player()) {
					this.core().log(this.get_name() + ' used ' + _material[material[i]] + ' ' + material[i] + '.');
				}
			}
		} else {
			settlement.remove_resource(material, _material[material]);
			if (settlement.is_player()) {
				this.core().log(this.get_name() + ' used ' + _material[material] + ' ' + material + '.');
			}
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
		return civitas.BUILDINGS[civitas.BUILDINGS.findIndexM(this.type)];
	};

	/**
	 * Get the settlement resources object
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_settlement_resources = function() {
		return this.get_settlement().get_resources();
	};

	/**
	 * Internal helper method to produce a material.
	 *
	 * @private
	 * @param {String} material
	 * @returns {civitas.objects.building}
	 */
	this._produce_material = function(material) {
		if (this.is_stopped()) {
			return this;
		}
		var settlement = this.get_settlement();
		var resources = settlement.get_resources();
		var building = this.get_building_data();
		var production = building.production;
		var amount = production[material] * this.get_level();
		var chance;
		var random_amount;
		if (material === 'faith') {
			this.get_settlement().raise_faith(amount);
		} else if (material === 'research') {
			this.get_settlement().raise_research(amount);
		} else if (material === 'espionage') {
			this.get_settlement().raise_espionage(amount);
		} else if (material === 'fame') {
			this.get_settlement().raise_fame(amount);
		} else if (material === 'prestige') {
			this.get_settlement().raise_prestige(amount);
		} else {
			if (!this.get_settlement().has_storage_space_for(amount)) {
				return this;
			}
			this.get_settlement().add_to_storage(material, amount);
			if (typeof building.chance !== 'undefined') {
				for (var item in building.chance) {
					chance = Math.random();
					if (chance < building.chance[item]) {
						random_amount = civitas.utils.get_random(1, 5);
						if (this.get_settlement().is_player()) {
							this.core().log(this.get_name() + ' procced ' + random_amount + ' extra ' + civitas.utils.get_resource_name(item) + '.');
						}
						this.get_settlement().add_to_storage(item, random_amount);
					}
				}
			}
		}
		if (this.get_settlement().is_player()) {
			this.core().log(this.get_name() + ' produced ' + amount + ' ' + material + '.');
		}
		return this;
	};

	/**
	 * Produce the materials.
	 * 
	 * @public
	 * @param {String|Array} material
	 * @returns {civitas.objects.building}
	 */
	this.produce_material = function(material) {
		if (typeof material === 'object') {
			for (var i = 0; i < material.length; i++) {
				this._produce_material(material[i]);
			}
		} else {
			this._produce_material(material);
		}
		this.notify();
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
			for (var item in required) {
				if (!this.get_settlement().is_building_built(item, required[item])) {
					good = false;
					if (this.get_settlement().is_player()) {
						this.core().log(this.get_name() + ' doesn`t have the required level ' + required[item] + ' ' + this.get_building_data(item).name + '.', true);
						this.notify(civitas.NOTIFICATION_MISSING_RESOURCES);
					}
					this.problems = true;
				}
			}
		}
		if (typeof building.requires.settlement_level !== 'undefined') {
			if (building.requires.settlement_level > this.get_settlement().level()) {
				if (this.get_settlement().is_player()) {
					this.core().log('Your settlement level is too low for ' + this.get_name() + ' to be active.', true);
					this.notify(civitas.NOTIFICATION_SETTLEMENT_LOW_LEVEL);
				}
				good = false;
				this.problems = true;
			}
		}
		return good;
	};

	/**
	 * Main threading method for the building, this does the actual processing each turn.
	 * 
	 * @public
	 * @returns {civitas.objects.building}
	 */
	this.process = function() {
		if (!this.has_requirements()) {
			return false;
		}
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
					this.get_settlement().inc_coins(amount);
					if (this.get_settlement().is_player()) {
						this.core().log(this.get_name() + ' gave ' + amount + ' coins via tax.');
					}
					this.notify();
				}
			}
		} else {
			if (!this.is_stopped()) {
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
					this.notify();
				} else {
					this.problems = true;
				}
			} else {
				if (this.get_settlement().is_player()) {
					this.core().log(this.get_name() + ' production is stopped.');
					this.notify(civitas.NOTIFICATION_PRODUCTION_PAUSED);
				}
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
	 * Get the settlement this building is located into
	 * 
	 * @public
	 * @returns {civitas.objects.settlement}
	 */
	this.get_settlement = function() {
		return this.settlement;
	};

	/**
	 * Get a pointer to the game core
	 * 
	 * @public
	 * @returns {civitas.game}
	 */
	this.core = function() {
		return this.get_settlement().core();
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
	 * Set the level of this building
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {civitas.objects.building}
	 */
	this.set_level = function(value) {
		this.level = value;
		return this;
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
	 * @returns {civitas.objects.building}
	 */
	this.notify = function(notification_type) {
		if (typeof notification_type !== 'undefined') {
			if (this.get_settlement().is_player()) {
				var handle = $('section.game > #building-' + this.get_handle());
				switch (notification_type) {
					case civitas.NOTIFICATION_PRODUCTION_PAUSED:
						handle.empty().append('<span class="notification paused"></span>');
						break;
					case civitas.NOTIFICATION_MISSING_RESOURCES:
					default:
						handle.empty().append('<span class="notification error"></span>');
						break;
				}
			}
		} else {
			$('section.game > #building-' + this.get_handle()).empty();
		}
		return this;
	};

	// Fire up the constructor
	return this.__init(params);
};
