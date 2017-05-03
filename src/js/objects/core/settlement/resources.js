civitas.objects.settlement.prototype.merge_resources = function(resources) {
	if (typeof resources !== 'undefined') {
		for (var item in resources) {
			if ($.inArray(item, civitas.NON_RESOURCES) === -1) {
				this.add_to_storage(item, resources[item]);
			}
		}
	}
};

civitas.objects.settlement.prototype.get_spoils = function() {
	var resources = this.get_resources();
	var tmp_res = Object.keys(resources);
	var spoils = {};
	var tmp;
	var resource;
	var random_resource;
	var count = 0;
	while (count < 3) {
		random_resource = tmp_res[Math.floor(Math.random() * tmp_res.length)];
		resource = resources[random_resource];
		if ($.inArray(random_resource, civitas.NON_RESOURCES) === -1 && resource > 0) {
			if (this.remove_resource(random_resource, resource)) {
				spoils[random_resource] = resource;
				count++;
			}
		}
	}
	return spoils;
};

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
civitas.objects.settlement.prototype._fill_resources = function(_resources) {
	var difficulty = this.core().difficulty();
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
		return false;
	}
	if (!this.has_storage_space_for(item, amount)) {
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
				this.core().error(this.name() + ' doesn`t have enough ' + civitas.utils.get_resource_name('coins') + '.');
			}
		}
		return false;
	}
	return true;
};

/**
 * Remove the specified resources from the settlement's storage.
 *
 * @public
 * @param {Object} resources
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.remove_resources = function(resources) {
	var good = true;
	for (var item in resources) {
		good = this.remove_resource(item, resources[item]);
		if (good === false) {
			return false;
		}
	}
	return true;
};

/**
 * Remove the amount of specified resource from the settlement's storage.
 *
 * @public
 * @param {String} resource
 * @param {Number} amount
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.remove_resource = function(resource, amount) {
	var resources = this.get_resources();
	resources[resource] = resources[resource] - amount;
	if (resources[resource] < 0) {
		resources[resource] = 0;
	}
	return true;
};

/**
 * Check if the settlement has storage space for the amount of specified resource.
 *
 * @public
 * @param {String|Object} resources
 * @param {Number} amount
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.has_storage_space_for = function(resources, amount) {
	var total = 0;
	if (typeof amount === 'undefined') {
		for (var item in resources) {
			if ($.inArray(item, civitas.NON_RESOURCES) === -1) {
				total += resources[item];
			}
		}
	} else {
		if ($.inArray(resources, civitas.NON_RESOURCES) === -1) {
			total += amount;
		}
	}
	var storage = this.storage();
	if ((storage.occupied + total) > storage.all) {
		return false;
	}
	return true;
};

/**
 * Check if the settlement has the specified resources.
 *
 * @public
 * @param {Object} resources
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.has_resources = function(resources) {
	var good = true;
	for (var item in resources) {
		good = this.has_resource(item, resources[item]);
		if (good === false) {
			return false;
		}
	}
	return good;
};

/**
 * Check if the settlement has the amount of specified resource.
 *
 * @public
 * @param {String} resource
 * @param {Number} amount
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.has_resource = function(resource, amount) {
	var resources = this.get_resources();
	if (!civitas.utils.resource_exists(resource)) {
		return false;
	}
	if (resources[resource] - amount < 0) {
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
