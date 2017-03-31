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
	if (typeof amount !== 'undefined') {
		this.resources.espionage += amount;
	} else {
		++this.resources.espionage;
	}
	$('.cityespionage').html(this.get_espionage());
	this.get_core().notify('The espionage of your city raised.');
	return this.resources.espionage;
};

/**
 * Lower the espionage of this city by the specified amount.
 * 
 * @public
 * @param {Number} amount
 * @returns {Number}
 */
civitas.objects.city.prototype.lower_espionage = function(amount) {
	if (typeof amount !== 'undefined') {
		if ((this.resources.espionage - amount) >= 1) {
			this.resources.espionage -= amount;
			this.get_core().notify('The espionage of your city lowered.');
		}
	} else {
		if ((this.resources.espionage - 1) >= 1) {
			--this.resources.espionage;
			this.get_core().notify('The espionage of your city lowered.');
		}
	}
	$('.cityespionage').html(this.get_espionage());
	return this.resources.espionage;
};

/**
 * Reset the espionage of this city to 1.
 * 
 * @returns {civitas.objects.city}
 * @public
 */
civitas.objects.city.prototype.reset_espionage = function() {
	this.resources.espionage = 1;
	$('.cityespionage').html(this.get_espionage());
	return this;
};

/**
 * Set the espionage of this city.
 * 
 * @public
 * @returns {civitas.objects.city}
 * @param {Number} value
 */
civitas.objects.city.prototype.set_espionage = function(value) {
	this.resources.espionage = value;
	$('.cityespionage').html(this.get_espionage());
	return this;
};

/**
 * Increase this city's espionage by the specified amount.
 * 
 * @public
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.city.prototype.inc_espionage = function(value) {
	return this.set_espionage(this.get_espionage() + value);
};

/**
 * Decrease this city's espionage by the specified amount.
 * 
 * @public
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.city.prototype.dec_espionage = function(value) {
	return this.set_espionage(this.get_espionage() - value);
};

/**
 * Set this city's espionage to the specified value.
 * 
 * @public
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.city.prototype.set_espionage = function(value) {
	this.resources.espionage = value;
	return value;
};
