/**
 * Return the value of this city's prestige.
 * 
 * @public
 * @returns {Number}
 */
civitas.objects.city.prototype.get_prestige = function() {
	return this.resources.prestige;
};

/**
 * Raise the prestige of this city by the specified amount.
 * 
 * @public
 * @param {Number} amount
 * @returns {Number}
 */
civitas.objects.city.prototype.raise_prestige = function(amount) {
	if (typeof amount !== 'undefined') {
		this.resources.prestige += amount;
	} else {
		++this.resources.prestige;
	}
	$('.cityprestige').html(this.get_prestige());
	this.get_core().notify('The prestige of your city raised.');
	return this.resources.prestige;
};

/**
 * Lower the prestige of this city by the specified amount.
 * 
 * @public
 * @param {Number} amount
 * @returns {Number}
 */
civitas.objects.city.prototype.lower_prestige = function(amount) {
	if (typeof amount !== 'undefined') {
		if ((this.resources.prestige - amount) >= 1) {
			this.resources.prestige -= amount;
			this.get_core().notify('The prestige of your city lowered.');
		}
	} else {
		if ((this.resources.prestige - 1) >= 1) {
			--this.resources.prestige;
			this.get_core().notify('The prestige of your city lowered.');
		}
	}
	$('.cityprestige').html(this.get_prestige());
	return this.resources.prestige;
};

/**
 * Reset the prestige of this city to 1.
 * 
 * @returns {civitas.objects.city}
 * @public
 */
civitas.objects.city.prototype.reset_prestige = function() {
	this.resources.prestige = 1;
	$('.cityprestige').html(this.get_prestige());
	return this;
};

/**
 * Set the prestige of this city.
 * 
 * @public
 * @returns {civitas.objects.city}
 * @param {Number} value
 */
civitas.objects.city.prototype.set_prestige = function(value) {
	this.resources.prestige = value;
	$('.cityprestige').html(this.get_prestige());
	return this;
};

/**
 * Increase this city's prestige by the specified amount.
 * 
 * @public
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.city.prototype.inc_prestige = function(value) {
	return this.set_prestige(this.get_prestige() + value);
};

/**
 * Decrease this city's prestige by the specified amount.
 * 
 * @public
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.city.prototype.dec_prestige = function(value) {
	return this.set_prestige(this.get_prestige() - value);
};

/**
 * Set this city's prestige to the specified value.
 * 
 * @public
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.city.prototype.set_prestige = function(value) {
	this.resources.prestige = value;
	return value;
};
	