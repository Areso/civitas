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
	if (typeof amount === 'undefined') {
		amount = 1;
	}
	return this.set_research(this.get_research() + amount);
};

/**
 * Lower the research of this settlement by the specified amount.
 * 
 * @public
 * @param {Number} amount
 * @returns {Number}
 */
civitas.objects.settlement.prototype.lower_research = function(amount) {
	if (typeof amount === 'undefined') {
		amount = 1;
	}
	return this.set_research(this.get_research() - amount);
};

/**
 * Reset the research of this settlement to 1.
 * 
 * @returns {civitas.objects.settlement}
 * @public
 */
civitas.objects.settlement.prototype.reset_research = function() {
	this.resources.research = 1;
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
	if (this.resources.research >= civitas.MAX_RESEARCH_VALUE) {
		this.resources.research = civitas.MAX_RESEARCH_VALUE;
	} else if (value < 1 || this.resources.research < 1) {
		this.resources.research = 1;
	} else {
		this.resources.research = value;
	}
	$('.cityresearch').html(this.get_research());
	return this.get_research();
};
