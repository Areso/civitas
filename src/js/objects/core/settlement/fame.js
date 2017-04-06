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
 * Set the fame of the settlement.
 * 
 * @public
 * @param {Object} amount
 * @returns {civitas.objects.settlement}
 */
civitas.objects.settlement.prototype.set_fame = function(amount) {
	this.resources.fame = amount;
	return this;
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
	this.set_fame(this.get_fame() + amount);
	return this.get_fame();
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
	if ((this.resources.fame - amount) >= 1) {
		this.set_fame(this.get_fame() - amount);
	}
	return this.get_fame();
};

/**
 * Set this settlement's fame to the specified value.
 * 
 * @public
 * @param {Number} amount
 * @returns {Number}
 */
civitas.objects.settlement.prototype.set_fame = function(amount) {
	var needed = civitas.LEVELS[this.get_level()];
	this.resources.fame = amount;
	$('header .cityfame > span').css({
		width: Math.floor((this.get_fame() * 100) / needed) + '%'
	});
	return amount;
};

/**
 * Reset the fame of this settlement to 1.
 * 
 * @returns {civitas.objects.settlement}
 * @public
 */
civitas.objects.settlement.prototype.reset_fame = function() {
	this.resources.fame = 1;
	return this;
};
