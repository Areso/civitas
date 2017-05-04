civitas.objects.settlement.prototype.has_soldiers = function(data) {
	var army = this.get_army();
	for (var item in army) {
		if (army[item] - data[item] < 0) {
			return false;
		}
	}
	return true;
};

civitas.objects.settlement.prototype.adjust_campaign_cost = function(cost, duration, resources) {
	var mission_costs = cost;
	for (var item in mission_costs) {
		if (item === 'coins') {
			mission_costs[item] = Math.ceil(cost[item] * duration);
		} else if (item === 'provisions') {
			mission_costs[item] = Math.ceil((cost[item] * duration) / 2);
		}
	}
	if (typeof resources !== 'undefined') {
		var merged_costs = $.extend({}, resources);
		for (var item in mission_costs) {
			if (merged_costs[item]) {
				merged_costs[item] += mission_costs[item];
			} else {
				merged_costs[item] = mission_costs[item];
			}
		}
		return merged_costs;
	}
	return mission_costs;
};

civitas.objects.settlement.prototype.split_army = function(data) {
	var army = this.get_army();
	if (this.has_soldiers(data)) {
		for (var item in army) {
			if (army[item] - data[item] >= 0) {
				army[item] = army[item] - data[item];
			} else {
				army[item] = 0;
			}
		}
		return true;
	}
	return false;
};

civitas.objects.settlement.prototype.has_ships = function(data) {
	var navy = this.get_navy();
	for (var item in navy) {
		if (navy[item] - data[item] < 0) {
			return false;
		}
	}
	return true;
};

civitas.objects.settlement.prototype.split_navy = function(data) {
	var navy = this.get_navy();
	if (this.has_ships(data)) {
		for (var item in navy) {
			if (navy[item] - data[item] >= 0) {
				navy[item] = navy[item] - data[item];
			} else {
				navy[item] = 0;
			}
		}
		return true;
	}
	return false;
};

/**
 * Return the number of the total navy.
 * 
 * @public
 * @param {Object} navy
 * @returns {Object}
 */
civitas.objects.settlement.prototype.has_navy = function(navy) {
	var total = 0;
	if (typeof navy === 'undefined') {
		navy = this.navy;
	}
	for (var item in navy) {
		total = total + navy[item];
	}
	return total;
};

/**
 * Return the number of the total army.
 * 
 * @public
 * @param {Object} army
 * @returns {Object}
 */
civitas.objects.settlement.prototype.has_army = function(army) {
	var total = 0;
	if (typeof army === 'undefined') {
		army = this.army;
	}
	for (var item in army) {
		total += army[item];
	}
	return total;
};

/**
 * Merge two armies.
 *
 * @public
 * @param {Object} army
 */
civitas.objects.settlement.prototype.merge_army = function(army) {
	var _army = this.get_army();
	var merged_army = $.extend({}, _army);
	for (var item in army) {
		if (merged_army[item]) {
			merged_army[item] += army[item];
		} else {
			merged_army[item] = army[item];
		}
	}
	this.army = merged_army;
};

/**
 * Merge two navies.
 *
 * @public
 * @param {Object} navy
 */
civitas.objects.settlement.prototype.merge_navy = function(navy) {
	var _navy = this.get_navy();
	var merged_navy = $.extend({}, _navy);
	for (var item in navy) {
		if (merged_navy[item]) {
			merged_navy[item] += navy[item];
		} else {
			merged_navy[item] = navy[item];
		}
	}
	this.navy = merged_navy;
};

/**
 * Method for the setup of the settlement's army.
 *
 * @public
 * @param {Object} params
 * @returns {Object}
 */
civitas.objects.settlement.prototype.load_army = function(params) {
	var army = {};
	for (var item in civitas.SOLDIERS) {
		if (typeof params !== 'undefined' && typeof params[item] !== 'undefined') {
			army[item] = params[item];
		} else {
			army[item] = 0;
		}
	}
	return army;
};

/**
 * Internal method for the initial setup of the settlement's navy.
 *
 * @private
 * @param {Object} params
 * @returns {Object}
 */
civitas.objects.settlement.prototype.load_navy = function(params) {
	var navy = {};
	for (var item in civitas.SHIPS) {
		if (typeof params !== 'undefined' && typeof params[item] !== 'undefined') {
			navy[item] = params[item];
		} else {
			navy[item] = 0;
		}
	}
	return navy;
};

/**
 * Get the list of settlement mercenary armies.
 *
 * @public
 * @param {Array} value
 * @returns {Array}
 */
civitas.objects.settlement.prototype.mercenary = function(value) {
	if (typeof value !== 'undefined') {
		this._mercenary = value;
	}
	return this._mercenary;
};

/**
 * Check if this settlement can build ships.
 *
 * @public
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.can_build_ships = function() {
	return this.is_building_built('shipyard');
};

/**
 * Check if this settlement can recruit soldiers.
 *
 * @public
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.can_recruit_soldiers = function() {
	return this.is_building_built('camp');
};

/**
 * Recruit a soldier for the settlement's army.
 * 
 * @public
 * @param {String} name
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.recruit_mercenary_army = function(name) {
	for (var i = 0; i < civitas.MERCENARIES.length; i++) {
		if (name === civitas.MERCENARIES[i].handle) {
			var price = civitas.MERCENARIES[i].cost;
			if (this.dec_coins(price) === false) {
				return false;
			}
			var army = {
				id: i,
				handle: name,
				army: {}
			};
			for (var item in civitas.SOLDIERS) {
				if (typeof civitas.MERCENARIES[i].army[item] !== 'undefined') {
					army.army[item] = civitas.MERCENARIES[i].army[item];
				} else {
					army.army[item] = 0;
				}
			}
			this._mercenary.push(army);
			if (this.is_player()) {
				this.core().notify('The mercenaries of the ' + civitas.MERCENARIES[i].name + ' are now available for skirmish missions for the duration of one year.', 'Mercenaries recruited.');
			} else {
				this.core().log('The city of ' + this.name() + ' hired the mercenaries of ' + civitas.MERCENARIES[i].name + '.');
			}
			this.core().save_and_refresh();
			return true;
		}
	}
	return false;
};

/**
 * Construct a ship for the settlement's navy.
 * 
 * @public
 * @param {String} ship_name
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.recruit_ship = function(ship_name) {
	if (typeof this.navy[ship_name] !== 'undefined' && this.navy[ship_name] !== null ) {
		this.navy[ship_name] = this.navy[ship_name] + 1;
	} else {
		this.navy[ship_name] = 1;
	}
	if (this.is_player()) {
		this.core().save_and_refresh();
	}
	return true;
};

/**
 * Recruit a soldier for the settlement's army.
 * 
 * @public
 * @param {String} soldier_name
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.recruit_soldier = function(soldier_name) {
	if (typeof this.army[soldier_name] !== 'undefined' && this.army[soldier_name] !== null ) {
		this.army[soldier_name] = this.army[soldier_name] + 1;
	} else {
		this.army[soldier_name] = 1;
	}
	if (this.is_player()) {
		this.core().save_and_refresh();
	}
	return true;
};

/**
 * Disband a ship from the settlement's navy.
 * 
 * @public
 * @param {String} ship_name
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.disband_ship = function(ship_name) {
	if (typeof this.navy[ship_name] === 'undefined') {
		return false;
	} else {
		if (this.navy[ship_name] - 1 >= 0) {
			this.navy[ship_name] = this.navy[ship_name] - 1;
		} else {
			this.navy[ship_name] = 0;
		}
	}
	return true;
};

/**
 * Disband a soldier from the settlement's army.
 * 
 * @public
 * @param {String} soldier_name
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.disband_soldier = function(soldier_name) {
	if (typeof this.army[soldier_name] === 'undefined') {
		return false;
	} else {
		if (this.army[soldier_name] - 1 >= 0) {
			this.army[soldier_name] = this.army[soldier_name] - 1;
		} else {
			this.army[soldier_name] = 0;
		}
	}
	return true;
};

/**
 * Set the navy of the settlement.
 * 
 * @public
 * @param {Number} value
 * @returns {civitas.objects.settlement}
 */
civitas.objects.settlement.prototype.set_navy = function(value) {
	this.navy = value;
	return this;
};

/**
 * Set the soldiers of the settlement.
 * 
 * @public
 * @param {Number} value
 * @returns {civitas.objects.settlement}
 */
civitas.objects.settlement.prototype.set_army = function(value) {
	this.army = value;
	return this;
};

/**
 * Release all the mercenary armies.
 * 
 * @public
 * @returns {civitas.objects.settlement}
 */
civitas.objects.settlement.prototype.release_mercenaries = function() {
	this._mercenary = [];
	if (this.is_player()) {
		this.core().notify('At the end of the year, mercenaries from your city have been released.');
	}
	return this;
};

/**
 * Get the total number of soldiers available in this settlement.
 * 
 * @public
 * @returns {Number}
 */
civitas.objects.settlement.prototype.get_army = function() {
	return this.army;
};
	
/**
 * Get the total number of ships available in this settlement.
 * 
 * @public
 * @returns {Number}
 */
civitas.objects.settlement.prototype.get_navy = function() {
	return this.navy;
};

/**
 * Check if this mercenary army has already been recruited.
 * 
 * @public
 * @param {String} handle
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.is_mercenary_recruited = function(handle) {
	for (var i = 0; i < this._mercenary.length; i++) {
		if (this._mercenary[i].handle === handle) {
			return true;
		}
	}
	return false;
};

/**
 * Release a recruited mercenary army.
 *
 * @public
 * @param {Number} id
 * @returns {civitas.objects.settlement}
 */
civitas.objects.settlement.prototype.release_mercenary = function(id) {
	var mercenary_army_data = civitas.MERCENARIES[id];
	this._mercenary.splice(id, 1);
	if (this.is_player()) {
		this.core().notify(mercenary_army_data.name + ' has been released from its duties.');
	}
	return this;
};
