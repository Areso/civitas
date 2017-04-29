/**
 * Change religion of your settlement.
 *
 * @public
 * @param {Number|String} id
 * @returns {Boolean}
 */
civitas.objects.settlement.prototype.change_religion = function(id) {
	if (this.faith() !== civitas.MAX_FAITH_VALUE && id !== 0) {
		if (this.is_player()) {
			this.core().error('You don`t have enough faith to switch religions.');
		}
		return false;
	}
	if ((typeof id === 'number' && this.religion().id === id) || (typeof id === 'string' && this.religion().name === id)) {
		if (this.is_player()) {
			this.core().error('You cannot switch religion to your already existing one.');
		}
		return false;
	}
	if (this.religion(id)) {
		this.reset_faith();
		this.refresh_heroes();
		if (this.is_player()) {
			this.core().notify('Your settlement`s new religion is <strong>' + this.religion().name + '</strong>');
		}
		this.core().save_and_refresh();
		return true;
	} else {
		if (this.is_player()) {
			this.core().error('Unable to switch religion to the specified one.');
		}
		return false;
	}
	return false;
};

/**
 * Get/set the religion of this settlement.
 * 
 * @public
 * @returns {Object}
 */
civitas.objects.settlement.prototype.religion = function(value) {
	if (typeof value !== 'undefined') {
		if (typeof value === 'number') {
			this.properties.religion = value;
			return true;
		} else if (typeof value === 'string') {
			var pos = $.inArray(value, civitas.RELIGIONS);
			if (pos !== -1) {
				this.properties.religion = pos;
				return true;
			}
		}
	}
	return {
		id: this.properties.religion,
		name: civitas.RELIGIONS[this.properties.religion].capitalize()
	};
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
	return this.faith(this.faith() + value);
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
	return this.faith(this.faith() - value);
};

/**
 * Reset the faith of this settlement to 1.
 * 
 * @returns {Number}
 * @public
 */
civitas.objects.settlement.prototype.reset_faith = function() {
	return this.faith(1);
};

/**
 * Get/set the faith of this settlement.
 * 
 * @public
 * @returns {Number}
 * @param {Number} value
 */
civitas.objects.settlement.prototype.faith = function(value) {
	if (typeof value !== 'undefined') {
		if (value < 1 || this.resources.faith < 1) {
			this.resources.faith = 1;
		} else {
			this.resources.faith = value;
		}
		if (this.resources.faith >= civitas.MAX_FAITH_VALUE) {
			this.resources.faith = civitas.MAX_FAITH_VALUE;
		}
	}
	return this.resources.faith;
};
