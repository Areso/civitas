/**
 * Main Game building object.
 * 
 * @param {type} params
 * @class {city_builder.building}
 * @returns {city_builder.event}
 */
city_builder.event = function (params) {

	/**
	 * Reference to the core object.
	 * 
	 * @type {city_builder.game}
	 */
	this.core = null;

	this.name = null;

	this.handle = null;

	this.chance = 0;

	this.effect = null;
	
	this.description = null;

	this.data = null;

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {city_builder.event}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		this.core = params.core;
		this.name = params.name;
		this.handle = params.handle;
		this.chance = params.chance;
		this.description = params.description;
		this.data = params.data;
		this.effect = params.effect;
		this.process();
		return this;
	};

	/**
	 * Process the event data.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.process = function () {
		var random = Math.random().toFixed(4);
		if (random < this.chance) {
			this._process();
			return true;
		}
		return false;
	};

	this.notify = function() {
		this.core._notify({
			title: 'Event occured: ' + this.name,
			content: this.description.replace(/CITY/g, this.data.city).replace(/AMOUNT/g, this.data.amount),
			timeout: false,
			other: true
		});
	};
	
	/**
	 * Internal function for processing the event data.
	 * 
	 * @private
	 * @returns {city_builder.event}
	 */
	this._process = function () {
		this.notify();
		switch (this.effect) {
			case city_builder.EVENT_EFFECT_LOSE_COINS:
				this.core.get_city().dec_coins_amount(this.data.amount);
				break;
			case city_builder.EVENT_EFFECT_GAIN_COINS:
				this.core.get_city().inc_coins_amount(this.data.amount);
				break;
			case city_builder.EVENT_EFFECT_RAISE_INFLUENCE:
				this.core.get_city().raise_influence(this.core.get_city(this.data.city), this.data.amount);
				break;
			case city_builder.EVENT_EFFECT_LOWER_INFLUENCE:
				this.core.get_city().lower_influence(this.core.get_city(this.data.city), this.data.amount);
				break;
			case city_builder.EVENT_EFFECT_GAIN_FAME:
				this.core.get_city().inc_fame_amount(this.data.amount);
				break;
			case city_builder.EVENT_EFFECT_LOSE_FAME:
				this.core.get_city().dec_fame_amount(this.data.amount);
				break;
			case city_builder.EVENT_EFFECT_DESTROY_BUILDING:
				break;
		}
		return this;
	};

	// Fire up the constructor
	return this.__constructor(params);
};
