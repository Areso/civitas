/**
 * Return the value of this settlement's espionage.
 * 
 * @public
 * @returns {Number}
 */
civitas.objects.settlement.prototype.get_espionage = function() {
	return this.resources.espionage;
};

/**
 * Raise the espionage of this settlement by the specified amount.
 * 
 * @public
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.settlement.prototype.raise_espionage = function(value) {
	if (typeof value === 'undefined') {
		value = 1;
	}
	return this.set_espionage(this.get_espionage() + value);
};

/**
 * Lower the espionage of this settlement by the specified amount.
 * 
 * @public
 * @param {Number} amount
 * @returns {Number}
 */
civitas.objects.settlement.prototype.lower_espionage = function(value) {
	if (typeof value === 'undefined') {
		value = 1;
	}
	return this.set_espionage(this.get_espionage() - value);
};

/**
 * Reset the espionage of this settlement to 1.
 * 
 * @returns {Number}
 * @public
 */
civitas.objects.settlement.prototype.reset_espionage = function() {
	this.resources.espionage = 1;
	return this;
};

/**
 * Set the espionage of this settlement.
 * 
 * @public
 * @returns {Number}
 * @param {Number} value
 */
civitas.objects.settlement.prototype.set_espionage = function(value) {
	if (value < 1 || this.resources.espionage < 1) {
		this.resources.espionage = 1;
	} else {
		this.resources.espionage = value;
	}
	if (this.resources.espionage >= civitas.MAX_ESPIONAGE_VALUE) {
		this.resources.espionage = civitas.MAX_ESPIONAGE_VALUE;
	}
	return this.get_espionage();
};
