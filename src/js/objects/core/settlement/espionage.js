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
 * @param {Number} amount
 * @returns {Number}
 */
civitas.objects.settlement.prototype.raise_espionage = function(amount) {
	if (typeof amount === 'undefined') {
		amount = 1;
	}
	this.set_espionage(this.get_espionage() + amount);
	this.get_core().notify('The espionage of your city raised.');
	return this.get_espionage();
};

/**
 * Lower the espionage of this settlement by the specified amount.
 * 
 * @public
 * @param {Number} amount
 * @returns {Number}
 */
civitas.objects.settlement.prototype.lower_espionage = function(amount) {
	if (typeof amount === 'undefined') {
		amount = 1;
	}
	if ((this.resources.espionage - amount) >= 1) {
		this.set_espionage(this.get_espionage() - amount);
		this.get_core().notify('The espionage of your settlement lowered.');
	}
	return this.get_espionage();
};

/**
 * Reset the espionage of this settlement to 1.
 * 
 * @returns {Number}
 * @public
 */
civitas.objects.settlement.prototype.reset_espionage = function() {
	return this.set_espionage(1);
};

/**
 * Set the espionage of this settlement.
 * 
 * @public
 * @returns {Number}
 * @param {Number} amount
 */
civitas.objects.settlement.prototype.set_espionage = function(amount) {
	this.resources.espionage = amount;
	$('.cityespionage').html(this.get_espionage());
	return amount;
};
