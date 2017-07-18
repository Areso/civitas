/**
 * Get the list of settlement buildings, for export reasons.
 *
 * @public
 * @returns {Array}
 */
civitas.objects.settlement.prototype.export_buildings = function() {
	var buildings_list = [];
	for (var i = 0; i < this.buildings.length; i++) {
		buildings_list.push({
			handle: this.buildings[i].get_handle(),
			level: this.buildings[i].get_level(),
			stopped: this.buildings[i].is_stopped()
		});
	}
	return buildings_list;
};

/**
 * Return a pointer to the specified building in this settlement by the specified
 * handle.
 * 
 * @public
 * @param {String} handle
 * @returns {civitas.objects.building|Boolean}
 */
civitas.objects.settlement.prototype.get_building = function(handle) {
	var buildings = this.get_buildings();
	if (typeof handle === 'string') {
		for (var i = 0; i < buildings.length; i++) {
			if (typeof buildings[i] !== 'undefined') {
				if (buildings[i].get_type() === handle) {
					return buildings[i];
				}
			}
		}
	}
	return false;
};

/**
 * Internal method for creating a building.
 *
 * @private
 * @param {String|Object} building
 * @param {Boolean} hidden
 * returns {Boolean}
 */
civitas.objects.settlement.prototype._create_building = function(building, hidden) {
	hidden = (typeof hidden !== 'undefined') && hidden === true ? true : false;
	var building_data = false;
	var handle = typeof building.handle !== 'undefined' ? building.handle : building;
	var level = typeof building.level !== 'undefined' ? building.level : 1;
	var stopped = typeof building.stopped !== 'undefined' ? building.stopped : false;
	if (building_data = this.get_building_data(handle)) {
		if (level > 1) {
			building_data.level = level;
		}
		var new_building = new civitas.objects.building({
			settlement: this,
			type: handle,
			data: building_data,
			hidden: hidden,
			stopped: stopped
		});
		this.buildings.push(new_building);
		return true;
	}
	return false;
};

/**
 * Internal function for building the specified buildings, bypassing
 * the requirements.
 * 
 * @public
 * @param {String|Object} building_type
 * @param {Boolean} hidden
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype._create_buildings = function(building_type, hidden) {
	if (typeof building_type === 'object') {
		for (var i = 0; i < building_type.length; i++) {
			this._create_building(building_type[i], hidden);
		}
		return true;
	} else {
		this._create_building(building_type, hidden);
		return true;
	}
	return false;
};

/**
 * Get the building data.
 *
 * @public
 * @param {String} handle
 * @returns {Object|Boolean}
 */
civitas.objects.settlement.prototype.get_building_data = function(handle) {
	var id = civitas.BUILDINGS.findIndexM(handle);
	if (id !== false) {
		return civitas.BUILDINGS[id];
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
civitas.objects.settlement.prototype.build = function(building_type) {
	var building_data = false;
	if (building_data = this.get_building_data(building_type)) {
		if ((typeof building_data.requires.settlement_level !== 'undefined') && 
			(this.properties.level < building_data.requires.settlement_level)) {
			if (this.is_player()) {
				this.core().error('Your city level is too low to construct this building.');
			}
			return false;
		}
		if (typeof building_data.requires.buildings !== 'undefined') {
			var required = building_data.requires.buildings;
			for (var item in required) {
				if (!this.is_building_built(item, required[item])) {
					var _z = civitas.BUILDINGS.findIndexM(item);
					_z = civitas.BUILDINGS[_z];
					if (this.is_player()) {
						this.core().error('You don`t have the required level ' + required[item] + 
							' ' + _z.name + '.');
					}
					return false;
				}
			}
		}
		if (!this.has_resources(building_data.cost)) {
			if (this.is_player()) {
				this.core().error('You don`t have enough resources to construct this building.');
			}
			return false;
		}
		if (!this.remove_resources(building_data.cost)) {
			return galse;
		}
		var _building = new civitas.objects.building({
			settlement: this,
			type: building_type,
			data: building_data
		});
		this.buildings.push(_building);
		this.raise_prestige();
		if (this.is_player()) {
			this.core().save_and_refresh();
			this.core().notify('A new ' + _building.get_name() + ' was just constructed in ' +
				'your city.');
			$('.tips').tipsy({
				gravity: $.fn.tipsy.autoNS,
				html: true
			});
		}
		return _building;
	}
	return false;
};

/**
 * Check if the specified building is already built.
 * 
 * @public
 * @param {String} handle
 * @param {Number} level
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.is_building_built = function(handle, level) {
	if (typeof level === 'undefined') {
		level = 1;
	}
	var buildings = this.get_buildings();
	for (var i = 0; i < buildings.length; i++) {
		if (typeof buildings[i] !== 'undefined') {
			if (buildings[i].type === handle && buildings[i].level >= level) {
				return true;
			}
		}
	}
	return false;
};

/**
 * Get the list of all the buildings in this settlement.
 * 
 * @public
 * @returns {Array}
 */
civitas.objects.settlement.prototype.get_buildings = function() {
	return this.buildings;
};
