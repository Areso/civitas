/**
 * Raise the prestige of this settlement by the specified amount.
 * 
 * @public
 * @param {Number} amount
 * @returns {Number}
 */
civitas.objects.settlement.prototype.raise_prestige = function(amount) {
	if (typeof amount === 'undefined') {
		amount = 1;
	}
	return this.prestige(this.prestige() + amount);
};

/**
 * Lower the prestige of this settlement by the specified amount.
 * 
 * @public
 * @param {Number} amount
 * @returns {Number}
 */
civitas.objects.settlement.prototype.lower_prestige = function(amount) {
	if (typeof amount === 'undefined') {
		amount = 1;
	}
	return this.prestige(this.prestige() - amount);
};

/**
 * Reset the prestige of this settlement to 1.
 * 
 * @returns {Number}
 * @public
 */
civitas.objects.settlement.prototype.reset_prestige = function() {
	return this.prestige(1);
};

/**
 * Get/set the prestige of this settlement.
 * 
 * @public
 * @returns {Number}
 * @param {Number} value
 */
civitas.objects.settlement.prototype.prestige = function(value) {
	if (typeof value !== 'undefined') {
		if (value < 1 || this.resources.prestige < 1) {
			this.resources.prestige = 1;
		} else {
			this.resources.prestige = value;
		}
		if (this.resources.prestige >= civitas.MAX_PRESTIGE_VALUE) {
			this.resources.prestige = civitas.MAX_PRESTIGE_VALUE;
		}
	}
	return this.resources.prestige;
};
