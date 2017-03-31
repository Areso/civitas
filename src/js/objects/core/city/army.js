/**
 * Recruit a soldier for the city's army.
 * 
 * @public
 * @param {String} name
 * @returns {Boolean}
 */
civitas.objects.city.prototype.recruit_mercenary_army = function(name) {
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
					data: soldier
				});
				army.army.push(_soldier);
			}
			this.mercenary.push(army);
			this.get_core().notify('The mercenaries of the ' + civitas.MERCENARIES[i].name + ' are now available for skirmish missions for the duration of one year.', 'Mercenaries recruited.');
			this.get_core().refresh_ui();
			this.get_core().refresh_panels();
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
civitas.objects.city.prototype.recruit_ship = function(ship_name) {
	for (var item in civitas.SHIPS) {
		if (ship_name === item) {
			var ship = civitas.SHIPS[item];
			if (!this.remove_resources(ship.cost)) {
				return false;
			}
			var _ship = new civitas.objects.ship({
				name: item,
				data: ship
			});
			this.navy.push(_ship);
			this.get_core().refresh_ui();
			this.get_core().refresh_panels();
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
civitas.objects.city.prototype.recruit_soldier = function(soldier_name) {
	for (var item in civitas.SOLDIERS) {
		if (soldier_name === item) {
			var soldier = civitas.SOLDIERS[item];
			if (!this.remove_resources(soldier.cost)) {
				return false;
			}
			var _soldier = new civitas.objects.soldier({
				name: item,
				data: soldier
			});
			this.army.push(_soldier);
			this.get_core().refresh_ui();
			this.get_core().refresh_panels();
			this.get_core().notify('A new ' + soldier_name + ' has been recruited.', 'New soldier');
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
 * @returns {civitas.objects.city}
 */
civitas.objects.city.prototype._recruit_ship = function(ship_name) {
	for (var item in civitas.SHIPS) {
		if (ship_name === item) {
			var ship = civitas.SHIPS[item];
			var _ship = new civitas.objects.ship({
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
 * @returns {civitas.objects.city}
 */
civitas.objects.city.prototype._recruit_soldier = function(soldier_name) {
	for (var item in civitas.SOLDIERS) {
		if (soldier_name === item) {
			var soldier = civitas.SOLDIERS[item];
			var _soldier = new civitas.objects.soldier({
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
civitas.objects.city.prototype.get_navy_size = function() {
	return this.get_navy().length;
};

/**
 * Get the army size of this city.
 * 
 * @public
 * @returns {Number}
 */
civitas.objects.city.prototype.get_army_size = function() {
	return this.get_army().length;
};

/**
 * Disband a ship from the city's navy.
 * 
 * @public
 * @param {String} ship_name
 * @returns {Boolean}
 */
civitas.objects.city.prototype.disband_ship = function(ship_name) {
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
civitas.objects.city.prototype.disband_soldier = function(soldier_name) {
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
 * @returns {civitas.objects.city}
 */
civitas.objects.city.prototype.set_mercenary = function(value) {
	this.mercenary = value;
	return this;
};

/**
 * Set the navy of the city.
 * 
 * @public
 * @param {Number} value
 * @returns {civitas.objects.city}
 */
civitas.objects.city.prototype.set_navy = function(value) {
	this.navy = value;
	return this;
};

/**
 * Set the soldiers of the city.
 * 
 * @public
 * @param {Number} value
 * @returns {civitas.objects.city}
 */
civitas.objects.city.prototype.set_army = function(value) {
	this.army = value;
	return this;
};

/**
 * Release all the mercenary armies.
 * 
 * @public
 * @returns {civitas.objects.city}
 */
civitas.objects.city.prototype.release_mercenaries = function() {
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
 * @returns {civitas.objects.city}
 */
civitas.objects.city.prototype.setup_navy = function(hidden, data) {
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
 * @returns {civitas.objects.city}
 */
civitas.objects.city.prototype.setup_army = function(hidden, data) {
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
 * Get the total number of soldiers available in this city.
 * 
 * @public
 * @returns {Number}
 */
civitas.objects.city.prototype.get_army = function() {
	return this.army;
};
	
/**
 * Get the total number of ships available in this city.
 * 
 * @public
 * @returns {Number}
 */
civitas.objects.city.prototype.get_navy = function() {
	return this.navy;
};

/**
 * Get the total number of mercenaries available for this city.
 * 
 * @public
 * @returns {Number}
 */
civitas.objects.city.prototype.get_mercenary = function() {
	return this.mercenary;
};

/**
 * Get the navy of this city in an object format.
 * 
 * @public
 * @returns {Object}
 */
civitas.objects.city.prototype.get_navy_total = function() {
	var total = 0;
	var total_navy = {};
	for (var item in civitas.SHIPS) {
		total_navy[item] = 0;
	}
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
civitas.objects.city.prototype.get_army_total = function() {
	var total = 0;
	var total_army = {};
	for (var item in civitas.SOLDIERS) {
		total_army[item] = 0;
	}
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
civitas.objects.city.prototype.get_mercenary_total = function() {
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
civitas.objects.city.prototype.is_mercenary_recruited = function(handle) {
	for (var i = 0; i < this.mercenary.length; i++) {
		if (this.mercenary[i].handle === handle) {
			return true;
		}
	}
	return false;
};
