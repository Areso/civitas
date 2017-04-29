/**
 * Perform diplomacy missions.
 *
 * @public
 * @param {Number|civitas.objects.settlement} settlement
 * @param {Number} mode
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.diplomacy = function(settlement, mode) {
	if (typeof settlement === 'object') {
		settlement = settlement.id();
	}
	if (this.can_diplomacy() === true && typeof settlement === 'number') {
		this._status[settlement].status = mode;
		if (mode === civitas.DIPLOMACY_WAR) {
			this.reset_influence(settlement);
		} else if (mode === civitas.DIPLOMACY_ALLIANCE) {
			this.set_influence(settlement, civitas.MAX_INFLUENCE_VALUE);
		} else if (mode === civitas.DIPLOMACY_PACT) {
			this.set_influence(settlement, Math.ceil(civitas.MAX_INFLUENCE_VALUE / 2));
		} else if (mode === civitas.DIPLOMACY_CEASE_FIRE) {
			this.set_influence(settlement, Math.ceil(civitas.MAX_INFLUENCE_VALUE / 4));
		} else if (mode === civitas.DIPLOMACY_VASSAL) {
			this.set_influence(settlement, civitas.MAX_INFLUENCE_VALUE);
		}
		this.core().save_and_refresh();
		return true;
	}
	return false;
};

civitas.objects.settlement.prototype.status = function(settlement, value) {
	if (typeof value !== 'undefined') {
		this._status[settlement] = value;
	}
	if (typeof settlement !== 'undefined') {
		return this._status[settlement];
	} else {
		return this._status;
	}
};

/**
 * Check if this settlement can recruit heroes.
 *
 * @public
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.can_recruit_heroes = function() {
	return this.is_building_built('tavern');
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
		return this._status[settlement].influence;
	} else if (typeof settlement === 'object') {
		return this._status[settlement.id()].influence;
	} else if (typeof settlement === 'string') {
		return this._status[this.core().get_settlement(settlement)].influence;
	}
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
	if (typeof value === 'undefined') {
		value = 1;
	}
	return this.set_influence(settlement, this.get_influence_with_settlement(settlement) - value);
};

/**
 * Set the influence with the specified settlement to this value.
 *
 * @public
 * @param {civitas.objects.settlement} settlement
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.settlement.prototype.set_influence = function(settlement, value) {
	if (typeof settlement === 'object') {
		settlement = settlement.id();
	} else if (typeof settlement === 'string') {
		settlement = this.core().get_settlement(settlement);
	}
	if (value < 1 || this._status[settlement].influence < 1) {
		this._status[settlement].influence = 1;
	} else {
		this._status[settlement].influence = value;
	}
	if (this._status[settlement].influence >= civitas.MAX_INFLUENCE_VALUE) {
		this._status[settlement].influence = civitas.MAX_INFLUENCE_VALUE;
	}
	return this.get_influence_with_settlement(settlement);
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
	if (typeof value === 'undefined') {
		value = 1;
	}
	return this.set_influence(settlement, this.get_influence_with_settlement(settlement) + value);
};

/**
 * Reset the influence of this settlement to 1.
 * 
 * @param {Number} settlement_id
 * @returns {civitas.objects.settlement}
 * @public
 */
civitas.objects.settlement.prototype.reset_influence = function(settlement_id) {
	this.set_influence(settlement_id, 1);
	return this;
};
	
/**
 * Return the diplomacy status of this settlement.
 * 
 * @public
 * @returns {Object}
 */
civitas.objects.settlement.prototype.get_diplomacy_status = function(settlement) {
	return {
		id: this._status[settlement].status,
		name: civitas.DIPLOMACIES[this._status[settlement].status].capitalize()
	};
};
