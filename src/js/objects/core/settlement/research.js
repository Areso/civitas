/**
 * Check if this settlement can recruit soldiers.
 *
 * @public
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.can_research = function() {
	return this.is_building_built('academy');
};

/**
 * Raise the research of this settlement by the specified amount.
 * 
 * @public
 * @param {Number} amount
 * @returns {Number}
 */
civitas.objects.settlement.prototype.raise_research = function(amount) {
	if (typeof amount === 'undefined') {
		amount = 1;
	}
	return this.research(this.research() + amount);
};

/**
 * Lower the research of this settlement by the specified amount.
 * 
 * @public
 * @param {Number} amount
 * @returns {Number}
 */
civitas.objects.settlement.prototype.lower_research = function(amount) {
	if (typeof amount === 'undefined') {
		amount = 1;
	}
	return this.research(this.research() - amount);
};

/**
 * Reset the research of this settlement to 1.
 * 
 * @returns {Number}
 * @public
 */
civitas.objects.settlement.prototype.reset_research = function() {
	return this.research(1);
};

/**
 * Get/set the research of this settlement.
 * 
 * @public
 * @returns {Number}
 * @param {Number} value
 */
civitas.objects.settlement.prototype.research = function(value) {
	if (typeof value !== 'undefined') {
		if (value < 1 || this.resources.research < 1) {
			this.resources.research = 1;
		} else {
			this.resources.research = value;
		}
		if (this.resources.research >= civitas.MAX_RESEARCH_VALUE) {
			this.resources.research = civitas.MAX_RESEARCH_VALUE;
		}
	}
	return this.resources.research;
};
