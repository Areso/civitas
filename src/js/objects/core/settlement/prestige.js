/**
 * Return the value of this settlement's prestige.
 * 
 * @public
 * @returns {Number}
 */
civitas.objects.settlement.prototype.get_prestige = function() {
	return this.resources.prestige;
};

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
	return this.set_prestige(this.get_prestige() + amount);
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
	return this.set_prestige(this.get_prestige() - amount);
};

/**
 * Reset the prestige of this settlement to 1.
 * 
 * @returns {civitas.objects.settlement}
 * @public
 */
civitas.objects.settlement.prototype.reset_prestige = function() {
	this.resources.prestige = 1;
	return this;
};

/**
 * Set the prestige of this settlement.
 * 
 * @public
 * @returns {civitas.objects.settlement}
 * @param {Number} value
 */
civitas.objects.settlement.prototype.set_prestige = function(value) {
	if (value < 1 || this.resources.prestige < 1) {
		this.resources.prestige = 1;
	} else {
		this.resources.prestige = value;
	}
	if (this.resources.prestige >= civitas.MAX_PRESTIGE_VALUE) {
		this.resources.prestige = civitas.MAX_PRESTIGE_VALUE;
	}
	$('.cityprestige').html(this.get_prestige());
	return this.get_prestige();
};
