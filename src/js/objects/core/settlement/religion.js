/**
 * Change religion of your settlement.
 *
 * @public
 * @param {Number|String} id
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.change_religion = function(id) {
	if (this.get_faith() !== civitas.MAX_FAITH_VALUE && id !== 0) {
		if (this.is_player()) {
			this.get_core().error('You don`t have enough faith to switch religions.');
		}
		return false;
	}
	if ((typeof id === 'number' && this.get_religion().id === id) || (typeof id === 'string' && this.get_religion().name === id)) {
		if (this.is_player()) {
			this.get_core().error('You cannot switch religion to your already existing one.');
		}
		return false;
	}
	if (this.set_religion(id)) {
		this.reset_faith();
		this.refresh_heroes();
		if (this.is_player()) {
			this.get_core().notify('Your settlement`s new religion is <strong>' + this.get_religion().name.capitalize() + '</strong>');
		}
		this.get_core().save_and_refresh();
		return true;
	} else {
		if (this.is_player()) {
			this.get_core().error('Unable to switch religion to the specified one.');
		}
		return false;
	}
	return false;
};

/**
 * Set religion to the specified value.
 *
 * @public
 * @param {Number|String} value
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.set_religion = function(value) {
	if (typeof value === 'number') {
		this.religion = value;
		return true;
	} else if (typeof value === 'string') {
		var pos = $.inArray(value, civitas.RELIGIONS);
		if (pos !== -1) {
			this.religion = pos;
			return true;
		}
	}
	return false;
};

/**
 * Return the religion of this settlement.
 * 
 * @public
 * @returns {Object}
 */
civitas.objects.settlement.prototype.get_religion = function() {
	return {
		id: this.religion,
		name: civitas.RELIGIONS[this.religion]
	};
};

/**
 * Return the value of this settlement's faith.
 * 
 * @public
 * @returns {Number}
 */
civitas.objects.settlement.prototype.get_faith = function() {
	return this.resources.faith;
};

/**
 * Raise the faith of this settlement by the specified amount.
 * 
 * @public
 * @param {Number} value
 * @returns {Number}
 */
civitas.objects.settlement.prototype.raise_faith = function(value) {
	if (typeof value === 'undefined') {
		value = 1;
	}
	return this.set_faith(this.get_faith() + value);
};

/**
 * Lower the faith of this settlement by the specified amount.
 * 
 * @public
 * @param {Number} amount
 * @returns {Number}
 */
civitas.objects.settlement.prototype.lower_faith = function(value) {
	if (typeof value === 'undefined') {
		value = 1;
	}
	return this.set_faith(this.get_faith() - value);
};

/**
 * Reset the faith of this settlement to 1.
 * 
 * @returns {Number}
 * @public
 */
civitas.objects.settlement.prototype.reset_faith = function() {
	this.resources.faith = 1;
	return this;
};

/**
 * Set the faith of this settlement.
 * 
 * @public
 * @returns {Number}
 * @param {Number} value
 */
civitas.objects.settlement.prototype.set_faith = function(value) {
	if (value < 1 || this.resources.faith < 1) {
		this.resources.faith = 1;
	} else {
		this.resources.faith = value;
	}
	if (this.resources.faith >= civitas.MAX_FAITH_VALUE) {
		this.resources.faith = civitas.MAX_FAITH_VALUE;
	}
	return this.get_faith();
};
