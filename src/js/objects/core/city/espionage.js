/**
 * Return the value of this city's espionage.
 * 
 * @public
 * @returns {Number}
 */
civitas.objects.city.prototype.get_espionage = function() {
	return this.resources.espionage;
};

/**
 * Raise the espionage of this city by the specified amount.
 * 
 * @public
 * @param {Number} amount
 * @returns {Number}
 */
civitas.objects.city.prototype.raise_espionage = function(amount) {
	if (typeof amount === 'undefined') {
		amount = 1;
	}
	this.set_espionage(this.get_espionage() + amount);
	this.get_core().notify('The espionage of your city raised.');
	return this.get_espionage();
};

/**
 * Lower the espionage of this city by the specified amount.
 * 
 * @public
 * @param {Number} amount
 * @returns {Number}
 */
civitas.objects.city.prototype.lower_espionage = function(amount) {
	if (typeof amount === 'undefined') {
		amount = 1;
	}
	if ((this.resources.espionage - amount) >= 1) {
		this.set_espionage(this.get_espionage() - amount);
		this.get_core().notify('The espionage of your city lowered.');
	}
	return this.get_espionage();
};

/**
 * Reset the espionage of this city to 1.
 * 
 * @returns {Number}
 * @public
 */
civitas.objects.city.prototype.reset_espionage = function() {
	return this.set_espionage(1);
};

/**
 * Set the espionage of this city.
 * 
 * @public
 * @returns {Number}
 * @param {Number} amount
 */
civitas.objects.city.prototype.set_espionage = function(amount) {
	this.resources.espionage = amount;
	$('.cityespionage').html(this.get_espionage());
	return amount;
};
