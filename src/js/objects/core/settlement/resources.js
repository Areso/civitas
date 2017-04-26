/**
 * Increase this settlement's coins by the specified amount.
 * 
 * @public
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.settlement.prototype.inc_coins = function(value) {
	return this.coins(this.coins() + value);
};
	
/**
 * Decrease this settlement's coins by the specified amount.
 * 
 * @public
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.settlement.prototype.dec_coins = function(value) {
	if (!this.has_coins(value)) {
		return false;
	}
	this.coins(this.coins() - value);
	return true;
};
	
/**
 * Get/set the coins of the settlement.
 * 
 * @public
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.settlement.prototype.coins = function(value) {
	if (typeof value !== 'undefined') {
		this.resources.coins = value;
	}
	return this.resources.coins;
};
		
/**
 * Remove a specific amount of a resource silently from this settlement's storage.
 * 
 * @public
 * @param {String} resource
 * @param {Number} amount
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.remove_resource_silent = function(resource, amount) {
	var res = this.get_resources();
	res[resource] = res[resource] - amount;
	if (res[resource] < 0) {
		res[resource] = 0;
	}
	return true;
};
	
/**
 * Remove a specific amount of a resource from this settlement's storage.
 * 
 * @public
 * @param {String} resource
 * @param {Number} amount
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.remove_resource = function(resource, amount) {
	var res = this.get_resources();
	if (!this.has_resources(resource, amount)) {
		return false;
	}
	res[resource] = res[resource] - amount;
	return true;
};
	
/**
 * Remove resources from this settlement's storage.
 * 
 * @public
 * @param {Object} resources
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.remove_resources = function(resources) {
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
 * Check if the settlement has a specific storage space.
 * 
 * @public
 * @param {Number} quantity
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.has_storage_space_for = function(quantity) {
	var storage = this.storage();
	if (!this.has_storage_space(true)) {
		return false;
	}
	if ((storage.occupied + quantity) > storage.all) {
		//this.get_core().error('There is no storage space in your city to accomodate the new goods.');
		return false;
	}
	return true;
};
	
/**
 * Check if this settlement has enough storage space.
 * 
 * @public
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.has_storage_space = function(alert) {
	var storage = this.storage();
	if (storage.occupied >= storage.all) {
		if (alert === true) {
			if (this.is_player()) {
				this.get_core().error('There is no storage space in your city.');
			}
		}
		return false;
	}
	return true;
};
	
/**
 * Get/set the storage space of this settlement.
 * 
 * @public
 * @returns {Object}
 */
civitas.objects.settlement.prototype.storage = function(value) {
	if (typeof value !== 'undefined') {
		this.properties.storage = value;
	}
	var storage = 0;
	for (var item in this.get_resources()) {
		if ($.inArray(item, civitas.NON_RESOURCES) === -1) {
			storage += this.get_resources()[item];
		}
	}
	return {
		occupied: storage,
		all: this.properties.storage
	};
};
	
/**
 * Adjust the resources according to the settlement owner.
 *
 * @private
 * @returns {Object}
 */
civitas.objects.settlement.prototype._build_resources = function(_resources) {
	var difficulty = this.get_core().get_difficulty();
	var _trades = {};
	if (!this.is_player()) {
		if (this.is_city() && typeof civitas.SETTLEMENTS[this.id()] !== 'undefined') {
			_trades = civitas.SETTLEMENTS[this.id()].trades.exports;
		}
		for (var item in civitas.RESOURCES) {
			if (typeof _resources[item] === 'undefined') {
				if (typeof _trades[item] !== 'undefined') {
					_resources[item] = civitas.utils.get_random_by_importance(_trades[item]);
				} else {
					_resources[item] = 0;
				}
			}
		}
	} else {
		if (typeof _resources === 'undefined') {
			_resources = civitas.START_RESOURCES[difficulty - 1];
		}
		for (var item in civitas.RESOURCES) {
			if (typeof _resources[item] === 'undefined') {
				_resources[item] = 0;
			}
		}
	}
	return _resources;
};

/**
 * Add a specified amount of a resource to the storage of this settlement.
 * 
 * @public
 * @param {String} item
 * @param {Number} amount
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.add_to_storage = function(item, amount) {
	if (!civitas.utils.resource_exists(item)) {
		if (this.is_player()) {
			this.get_core().error('The resource you specified does not exist.');
		}
		return false;
	}
	var res = this.get_resources();
	if (typeof res[item] !== 'undefined') {
		res[item] = res[item] + amount;
	} else {
		res[item] = amount;
	}
	return true;
};
	
/**
 * Check if the settlement has the required coins to create this building.
 * 
 * @public
 * @param {Number} coins
 * @param {Boolean} alert
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.has_coins = function(coins, alert) {
	if (this.coins() - coins < 0) {
		if (alert !== false) {
			if (this.is_player()) {
				this.get_core().error(this.name() + ' doesn`t have enough ' + civitas.utils.get_resource_name('coins') + '.');
			}
		}
		return false;
	}
	return true;
};
	
/**
 * Check if this settlement has the specified goods in storage.
 * 
 * @public
 * @param {String} resource
 * @param {Number} amount
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.has_resources = function(resource, amount) {
	if (!civitas.utils.resource_exists(resource)) {
		if (this.is_player()) {
			this.get_core().error('The resource you specified does not exist.');
		}
		return false;
	}
	var res = this.get_resources();
	if ((res[resource] - amount) < 0) {
		if (this.is_player()) {
			this.get_core().error(this.name() + ' does not have enough ' + civitas.utils.get_resource_name(resource) + '.');
		}
		return false;
	}
	return true;
};

/**
 * Get the resources available in this settlement.
 * 
 * @public
 * @returns {Object}
 */
civitas.objects.settlement.prototype.get_resources = function() {
	return this.resources;
};
	
/**
 * Set the resources of the settlement.
 * 
 * @public
 * @param {Object} value
 * @returns {civitas.objects.settlement}
 */
civitas.objects.settlement.prototype.set_resources = function(value) {
	this.resources = value;
	return this;
};
