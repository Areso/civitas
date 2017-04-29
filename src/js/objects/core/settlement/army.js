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
	if (typeof this.navy[ship_name] !== 'undefined') {
		this.navy[ship_name] = this.navy[ship_name] + 1;
	} else {
		this.navy[ship_name] = 1;
	}
	if (this.is_player()) {
		this.core().save_and_refresh();
		this.core().notify('A new ' + ship_name + ' ship has been constructed.', 'New ship');
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
	if (typeof this.army[soldier_name] !== 'undefined') {
		this.army[soldier_name] = this.army[soldier_name] + 1;
	} else {
		this.army[soldier_name] = 1;
	}
	if (this.is_player()) {
		this.core().save_and_refresh();
		this.core().notify('A new ' + soldier_name + ' has been recruited.', 'New soldier');
	}
	return true;
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
 * Get the navy of this settlement in an object format.
 * 
 * @public
 * @param {Object} navy
 * @returns {Object}
 */
civitas.objects.settlement.prototype.get_navy_total = function(navy) {
	var attack = 0;
	var defense = 0;
	var total = 0;
	if (typeof navy === 'undefined') {
		navy = this.navy;
	}
	for (var item in navy) {
		attack += civitas.SHIPS[item].attack * navy[item];
		defense += civitas.SHIPS[item].defense * navy[item];
		total = total + navy[item];
	}
	return {
		total: total,
		attack: attack,
		defense: defense,
		navy: navy
	};
};

/**
 * Get the army of this settlement in an object format.
 * 
 * @public
 * @param {Object} army
 * @returns {Object}
 */
civitas.objects.settlement.prototype.get_army_total = function(army) {
	var total = 0;
	var attack = 0;
	var defense = 0;
	if (typeof army === 'undefined') {
		army = this.army;
	}
	for (var item in army) {
		attack += civitas.SOLDIERS[item].attack * army[item];
		defense += civitas.SOLDIERS[item].defense * army[item];
		total += army[item];
	}
	return {
		total: total,
		attack: attack,
		defense: defense,
		army: army
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
