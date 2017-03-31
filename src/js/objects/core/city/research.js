/**
 * Return the value of this city's research.
 * 
 * @public
 * @returns {Number}
 */
civitas.objects.city.prototype.get_research = function() {
	return this.resources.research;
};

/**
 * Raise the research of this city by the specified amount.
 * 
 * @public
 * @param {Number} amount
 * @returns {Number}
 */
civitas.objects.city.prototype.raise_research = function(amount) {
	if (typeof amount !== 'undefined') {
		this.resources.research += amount;
	} else {
		++this.resources.research;
	}
	$('.cityresearch').html(this.get_research());
	this.get_core().notify('The research of your city raised.');
	return this.resources.research;
};

/**
 * Lower the research of this city by the specified amount.
 * 
 * @public
 * @param {Number} amount
 * @returns {Number}
 */
civitas.objects.city.prototype.lower_research = function(amount) {
	if (typeof amount !== 'undefined') {
		if ((this.resources.research - amount) >= 1) {
			this.resources.research -= amount;
			this.get_core().notify('The research of your city lowered.');
		}
	} else {
		if ((this.resources.research - 1) >= 1) {
			--this.resources.research;
			this.get_core().notify('The research of your city lowered.');
		}
	}
	$('.cityresearch').html(this.get_research());
	return this.resources.research;
};

/**
 * Reset the research of this city to 1.
 * 
 * @returns {civitas.objects.city}
 * @public
 */
civitas.objects.city.prototype.reset_research = function() {
	this.resources.research = 1;
	$('.cityresearch').html(this.get_research());
	return this;
};

/**
 * Set the research of this city.
 * 
 * @public
 * @returns {civitas.objects.city}
 * @param {Number} value
 */
civitas.objects.city.prototype.set_research = function(value) {
	this.resources.research = value;
	$('.cityresearch').html(this.get_research());
	return this;
};

/**
 * Increase this city's research by the specified amount.
 * 
 * @public
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.city.prototype.inc_research = function(value) {
	return this.set_research(this.get_research() + value);
};

/**
 * Decrease this city's research by the specified amount.
 * 
 * @public
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.city.prototype.dec_research = function(value) {
	return this.set_research(this.get_research() - value);
};

/**
 * Set this city's research to the specified value.
 * 
 * @public
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.city.prototype.set_research = function(value) {
	this.resources.research = value;
	return value;
};
