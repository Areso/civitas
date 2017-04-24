/**
 * Get the fame this settlement has.
 * 
 * @public
 * @returns {Object}
 */
civitas.objects.settlement.prototype.get_fame = function() {
	return this.resources.fame;
};

/**
 * Increase this settlement's fame by the specified amount.
 * 
 * @public
 * @param {Number} amount
 * @returns {Number}
 */
civitas.objects.settlement.prototype.raise_fame = function(amount) {
	if (typeof amount === 'undefined') {
		amount = 1;
	}
	return this.set_fame(this.get_fame() + amount);
};

/**
 * Decrease this settlement's fame by the specified amount.
 * 
 * @public
 * @param {Number} amount
 * @returns {Number}
 */
civitas.objects.settlement.prototype.lower_fame = function(amount) {
	if (typeof amount === 'undefined') {
		amount = 1;
	}
	return this.set_fame(this.get_fame() - amount);
};

/**
 * Set this settlement's fame to the specified value.
 * 
 * @public
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.settlement.prototype.set_fame = function(value) {
	var needed = civitas.LEVELS[this.get_level()];
	if (this.resources.fame >= civitas.LEVELS[civitas.MAX_SETTLEMENT_LEVEL - 1]) {
		this.resources.fame = civitas.LEVELS[civitas.MAX_SETTLEMENT_LEVEL - 1];
	} else if (value < 0 || this.resources.fame < 0) {
		this.resources.fame = 0;
	} else {
		this.resources.fame = value;
	}
	if (this.is_player()) {
		$('header .cityfame > span').css({
			width: Math.floor((this.get_fame() * 100) / needed) + '%'
		});
	}
	return value;
};

/**
 * Reset the fame of this settlement to 1.
 * 
 * @returns {civitas.objects.settlement}
 * @public
 */
civitas.objects.settlement.prototype.reset_fame = function() {
	this.set_fame(0);
	return this;
};
