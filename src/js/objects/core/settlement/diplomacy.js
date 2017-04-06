/**
 * Perform diplomacy missions.
 *
 * @public
 * @param {Number|civitas.objects.settlement|String} settlement
 * @param {Number} mode
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.diplomacy = function(settlement, mode) {
	if (this.can_diplomacy() === true) {
		if (typeof settlement === 'number') {
			this.status[settlement].status = mode;
			if (mode === civitas.DIPLOMACY_WAR) {
				this.status[settlement].influence = 0;
			}
		} else if (typeof settlement === 'object') {
			this.status[settlement.get_id()].status = mode;
			if (mode === civitas.DIPLOMACY_WAR) {
				this.status[settlement].influence = 0;
			}
		} else {

		}
		this.get_core().save_and_refresh();
		return true;
	}
	return false;
};

/**
 * Check if this settlement can conduct diplomacy missions.
 *
 * @public
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.can_diplomacy = function() {
	return this.is_building_built('embassy');
};

/**
 * Returns the influenceof this settlement with a specific settlement.
 * 
 * @public
 * @param {String} settlement
 * @returns {Number}
 */
civitas.objects.settlement.prototype.get_influence_with_settlement = function(settlement) {
	if (typeof settlement === 'number') {
		return this.status[settlement].influence;
	} else if (typeof settlement === 'object') {
		return this.status[settlement.get_id()].influence;
	} else if (typeof settlement === 'string') {
		return this.status[this.get_core().get_settlement(settlement)].influence;
	}
	
};
	
/**
 * Set the influence of this settlement.
 * 
 * @public
 * @returns {civitas.objects.settlement}
 * @param {Object} value
 */
civitas.objects.settlement.prototype.set_status = function(value) {
	this.status = value;
	return this;
};
	
/**
 * Decrease the influence of this settlement.
 * 
 * @public
 * @param {String} settlement
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.settlement.prototype.lower_influence = function(settlement, value) {
	this.status[settlement].influence = this.status[settlement].influence - value;
	if (this.status[settlement].influence < 0) {
		this.status[settlement].influence = 0;
	}
	return this.status[settlement].influence;
};
	
/**
 * Increase the influence of this settlement.
 * 
 * @public
 * @param {String} settlement
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.settlement.prototype.raise_influence = function(settlement, value) {
	console.log(value);
	this.status[settlement].influence = this.status[settlement].influence + value;
	if (this.status[settlement].influence > 100) {
		this.status[settlement].influence = 100;
	}
	return this.status[settlement].influence;
};
	
/**
 * Return all the status of this settlement with all the other cities.
 * 
 * @public
 * @returns {Object}
 */
civitas.objects.settlement.prototype.get_status = function() {
	return this.status;
};
	
/**
 * Return the diplomacy status of this settlement.
 * 
 * @public
 * @returns {Object}
 */
civitas.objects.settlement.prototype.get_diplomacy_status = function(settlement) {
	return {
		id: this.status[settlement].status,
		name: civitas.DIPLOMACIES[this.status[settlement].status]
	};
};

/**
 * Propose a pact to the specified settlement.
 *
 * @public
 * @returns {civitas.objects.settlement}
 * @param {civitas.objects.settlement}
 */
civitas.objects.settlement.prototype.propose_pact = function(settlement) {
	if (this.can_diplomacy() === true) {
		// TODO
		return true;
	}
	return false
};

/**
 * Assign a spy to the specified settlement.
 *
 * @public
 * @returns {civitas.objects.settlement}
 * @param {civitas.objects.settlement}
 */
civitas.objects.settlement.prototype.assign_spy = function(settlement) {
	if (this.can_diplomacy() === true) {
		// TODO
		return true;
	}
	return false
};
