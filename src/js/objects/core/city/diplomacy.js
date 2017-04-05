/**
 * Perform diplomacy missions.
 *
 * @public
 * @param {Number|civitas.objects.city|String} city
 * @param {Number} mode
 * @param {String} with_who
 * @returns {civitas.objects.city}
 */
civitas.objects.city.prototype.diplomacy = function(city, mode, with_who) {
	if (typeof with_who === 'undefined') {
		with_who = 'city';
	}
	if (typeof city === 'number') {
		this.status[with_who][city].status = mode;
		if (mode === civitas.DIPLOMACY_WAR) {
			this.status[with_who][city].influence = 0;
		}
	} else if (typeof city === 'object') {
		this.status[with_who][city.get_id()].status = mode;
		if (mode === civitas.DIPLOMACY_WAR) {
			this.status[with_who][city].influence = 0;
		}
	} else {

	}
	this.get_core().save_and_refresh();
	return this;
};

/**
 * Check if this city can conduct diplomacy missions.
 *
 * @public
 * @returns {Boolean}
 */
civitas.objects.city.prototype.can_diplomacy = function() {
	return this.is_building_built('embassy');
};

/**
 * Returns the influenceof this city with a specific city.
 * 
 * @public
 * @param {String} city
 * @returns {Number}
 */
civitas.objects.city.prototype.get_influence_with_city = function(city) {
	if (typeof city === 'number') {
		return this.status.city[city].influence;
	} else if (typeof city === 'object') {
		return this.status.city[city.get_id()].influence;
	} else if (typeof city === 'string') {
		return this.status.city[this.get_core().get_city(city)].influence;
	}
	
};
	
/**
 * Set the influence of this city.
 * 
 * @public
 * @returns {civitas.objects.city}
 * @param {Object} value
 */
civitas.objects.city.prototype.set_status = function(value) {
	this.status = value;
	return this;
};
	
/**
 * Decrease the influence of this city.
 * 
 * @public
 * @param {String} city
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.city.prototype.lower_influence = function(city, value, with_who) {
	if (this.status[with_who][city].influence - value >= 0) {
		this.status[with_who][city].influence = this.status[with_who][city].influence - value;
	}
	return this.status[with_who][city].influence;
};
	
/**
 * Increase the influence of this city.
 * 
 * @public
 * @param {String} city
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.city.prototype.raise_influence = function(city, value, with_who) {
	if (this.status[with_who][city].influence + value <= 100) {
		this.status[with_who][city].influence = this.status[with_who][city].influence + value;
	}
	return this.status[with_who][city].influence;
};
	
/**
 * Return all the status of this city with all the other cities.
 * 
 * @public
 * @returns {Object}
 */
civitas.objects.city.prototype.get_status = function() {
	return this.status;
};
	
/**
 * Return the diplomacy status of this city.
 * 
 * @public
 * @returns {Object}
 */
civitas.objects.city.prototype.get_diplomacy_status = function(city, with_who) {
	return {
		id: this.status[with_who][city].status,
		name: civitas.DIPLOMACIES[this.status[with_who][city].status]
	};
};

/**
 * Propose a pact to the specified city.
 *
 * @public
 * @returns {civitas.objects.city}
 * @param {civitas.objects.city}
 */
civitas.objects.city.prototype.propose_pact = function(city) {
	// TODO
	return this;
};

/**
 * Assign a spy to the specified city.
 *
 * @public
 * @returns {civitas.objects.city}
 * @param {civitas.objects.city}
 */
civitas.objects.city.prototype.assign_spy = function(city) {
	// TODO
	return this;
};
