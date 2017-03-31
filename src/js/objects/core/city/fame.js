/**
 * Get the fame this city has.
 * 
 * @public
 * @returns {Object}
 */
civitas.objects.city.prototype.get_fame = function() {
	return this.resources.fame;
};

/**
 * Set the fame of the city.
 * 
 * @public
 * @param {Object} value
 * @returns {civitas.objects.city}
 */
civitas.objects.city.prototype.set_fame = function(value) {
	this.resources.fame = value;
	return this;
};

/**
 * Increase this city's fame by the specified amount.
 * 
 * @public
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.city.prototype.inc_fame = function(value) {
	return this.set_fame(this.get_fame() + value);
};

/**
 * Decrease this city's fame by the specified amount.
 * 
 * @public
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.city.prototype.dec_fame = function(value) {
	return this.set_fame(this.get_fame() - value);
};

/**
 * Set this city's fame to the specified value.
 * 
 * @public
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.city.prototype.set_fame = function(value) {
	this.resources.fame = value;
	return value;
};
