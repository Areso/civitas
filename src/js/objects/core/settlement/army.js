/**
 * Internal method for the initial setup of the settlement's army.
 *
 * @private
 * @param {Object} params
 * @returns {Object}
 */
civitas.objects.settlement.prototype._setup_army = function(params) {
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
civitas.objects.settlement.prototype._setup_navy = function(params) {
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
 * Setup mercenary armies.
 *
 * @public
 * @param {Array} mercenary_list
 * @returns {civitas.objects.settlement}
 */
civitas.objects.settlement.prototype.setup_mercenary = function(mercenary_list) {
	for (var i = 0; i < mercenary_list.length; i++) {
		this.recruit_mercenary_army(mercenary_list[i], true);
	}
	return this;
};

/**
 * Get the list of settlement mercenary armies, for export reasons.
 *
 * @public
 * @returns {Array}
 */
civitas.objects.settlement.prototype.get_mercenary_list = function() {
	return this.mercenary_list;
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
	return this.is_building_built('camp') || this.is_building_built('castle');
};

/**
 * Recruit a soldier for the settlement's army.
 * 
 * @public
 * @param {String} name
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.recruit_mercenary_army = function(name, hidden) {
	for (var i = 0; i < civitas.MERCENARIES.length; i++) {
		if (name === civitas.MERCENARIES[i].handle) {
			var price = civitas.MERCENARIES[i].cost;
			if (this.dec_coins(price) === false) {
				return false;
			}
			var army = {
				id: i,
				handle: name,
				army: []
			};
			for (var item in civitas.MERCENARIES[i].army) {
				var soldier = civitas.SOLDIERS[item];
				var _soldier = new civitas.objects.soldier({
					name: item,
					settlement: this,
					data: soldier
				});
				army.army.push(_soldier);
			}
			this.mercenary.push(army);
			if (hidden !== true) {
				//this.mercenary_list.push(name);
				this.get_core().notify('The mercenaries of the ' + civitas.MERCENARIES[i].name + ' are now available for skirmish missions for the duration of one year.', 'Mercenaries recruited.');
				this.get_core().refresh();
				this.get_core().save();
			}
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
	if (typeof this.navy[ship_name] !== 'undefined') {
		this.navy[ship_name] = this.navy[ship_name] + 1;
	} else {
		this.navy[ship_name] = 1;
	}
	this.get_core().save_and_refresh();
	this.get_core().notify('A new ' + ship_name + ' ship has been constructed.', 'New ship');
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
	if (typeof this.army[soldier_name] !== 'undefined') {
		this.army[soldier_name] = this.army[soldier_name] + 1;
	} else {
		this.army[soldier_name] = 1;
	}
	this.get_core().save_and_refresh();
	this.get_core().notify('A new ' + soldier_name + ' has been recruited.', 'New soldier');
	return true;
};

/**
 * Internal function for recruiting a ship for the settlement's navy.
 * 
 * @public
 * @param {String} ship_name
 * @returns {civitas.objects.settlement}
 */
civitas.objects.settlement.prototype._recruit_ship = function(ship_name) {
	if (typeof this.navy[ship_name] !== 'undefined') {
		this.navy[ship_name] = this.navy[ship_name] + 1;
	} else {
		this.navy[ship_name] = 1;
	}
	return this;
};

/**
 * Internal function for recruiting a soldier for the settlement's army.
 * 
 * @public
 * @param {String} soldier_name
 * @returns {civitas.objects.settlement}
 */
civitas.objects.settlement.prototype._recruit_soldier = function(soldier_name) {
	if (typeof this.army[soldier_name] !== 'undefined') {
		this.army[soldier_name] = this.army[soldier_name] + 1;
	} else {
		this.army[soldier_name] = 1;
	}
	return this;
};

/**
 * Get the navy size of this settlement.
 * 
 * @public
 * @returns {Number}
 */
civitas.objects.settlement.prototype.get_navy_size = function() {
	return this.get_navy().length;
};

/**
 * Get the army size of this settlement.
 * 
 * @public
 * @returns {Number}
 */
civitas.objects.settlement.prototype.get_army_size = function() {
	return this.get_army().length;
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
 * Set the mercenaries of the settlement.
 * 
 * @public
 * @param {Number} value
 * @returns {civitas.objects.settlement}
 */
civitas.objects.settlement.prototype.set_mercenary = function(value) {
	this.mercenary = value;
	return this;
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
	this.mercenary = [];
	this.get_core().notify('At the end of the year, mercenaries from your city have been released.');
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
 * Get the total number of mercenaries available for this settlement.
 * 
 * @public
 * @returns {Number}
 */
civitas.objects.settlement.prototype.get_mercenary = function() {
	return this.mercenary;
};

/**
 * Get the navy of this settlement in an object format.
 * 
 * @public
 * @returns {Object}
 */
civitas.objects.settlement.prototype.get_navy_total = function() {
	var total = 0;
	for (var item in this.navy) {
		total = total + this.navy[item];
	}
	return {
		total: total,
		navy: this.navy
	};
};

/**
 * Get the army of this settlement in an object format.
 * 
 * @public
 * @returns {Object}
 */
civitas.objects.settlement.prototype.get_army_total = function() {
	var total = 0;
	for (var item in this.army) {
		total = total + this.army[item];
	}
	return {
		total: total,
		army: this.army
	};
};

/**
 * Get the mercenaries of this settlement in an object format.
 * 
 * @public
 * @returns {Object}
 */
civitas.objects.settlement.prototype.get_mercenary_total = function() {
	var total = 0;
	var total_army = {};
	for (var item in civitas.SOLDIERS) {
		total_army[item] = 0;
	}
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
 * Check if this mercenary army has already been recruited.
 * 
 * @public
 * @param {String} handle
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.is_mercenary_recruited = function(handle) {
	for (var i = 0; i < this.mercenary.length; i++) {
		if (this.mercenary[i].handle === handle) {
			return true;
		}
	}
	return false;
};
