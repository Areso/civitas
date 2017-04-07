/**
 * Check if this settlement can recruit soldiers.
 *
 * @public
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.can_research = function() {
	return this.is_building_built('academy');
};

/**
 * Return the value of this settlement's research.
 * 
 * @public
 * @returns {Number}
 */
civitas.objects.settlement.prototype.get_research = function() {
	return this.resources.research;
};

/**
 * Raise the research of this settlement by the specified amount.
 * 
 * @public
 * @param {Number} amount
 * @returns {Number}
 */
civitas.objects.settlement.prototype.raise_research = function(amount) {
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
 * Lower the research of this settlement by the specified amount.
 * 
 * @public
 * @param {Number} amount
 * @returns {Number}
 */
civitas.objects.settlement.prototype.lower_research = function(amount) {
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
 * Reset the research of this settlement to 1.
 * 
 * @returns {civitas.objects.settlement}
 * @public
 */
civitas.objects.settlement.prototype.reset_research = function() {
	this.resources.research = 1;
	$('.cityresearch').html(this.get_research());
	return this;
};

/**
 * Set the research of this settlement.
 * 
 * @public
 * @returns {civitas.objects.settlement}
 * @param {Number} value
 */
civitas.objects.settlement.prototype.set_research = function(value) {
	this.resources.research = value;
	$('.cityresearch').html(this.get_research());
	return this;
};

/**
 * Increase this settlement's research by the specified amount.
 * 
 * @public
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.settlement.prototype.inc_research = function(value) {
	return this.set_research(this.get_research() + value);
};

/**
 * Decrease this settlement's research by the specified amount.
 * 
 * @public
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.settlement.prototype.dec_research = function(value) {
	return this.set_research(this.get_research() - value);
};

/**
 * Set this settlement's research to the specified value.
 * 
 * @public
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.settlement.prototype.set_research = function(value) {
	this.resources.research = value;
	return value;
};
