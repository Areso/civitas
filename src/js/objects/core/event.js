/**
 * Main Game event object.
 * 
 * @param {Object} params
 * @class {civitas.objects.event}
 * @returns {civitas.objects.event}
 */
civitas.objects.event = function (params) {

	/**
	 * Reference to the core object.
	 * 
	 * @type {civitas.game}
	 */
	this.core = null;

	/**
	 * Name of the event.
	 *
	 * @private
	 * @type {String}
	 */
	this.name = null;

	/**
	 * Handle of the event.
	 *
	 * @private
	 * @type {String}
	 */
	this.handle = null;

	/**
	 * Event's chance to occur.
	 *
	 * @private
	 * @type {Number}
	 */
	this.chance = 0;

	/**
	 * Event's effect.
	 *
	 * @private
	 * @type {Number}
	 */
	this.effect = null;

	/**
	 * Description of the event.
	 *
	 * @private
	 * @type {String}
	 */
	this.description = null;

	/**
	 * Event data.
	 *
	 * @private
	 * @type {Object}
	 */
	this.data = null;

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {civitas.objects.event}
	 * @param {Object} params
	 */
	this.__init = function (params) {
		this.core = params.core;
		this.name = params.name;
		this.handle = params.handle;
		this.chance = (typeof params.chance !== 'undefined') ? params.chance : 0.001;
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
		if (random <= this.chance) {
			this._process();
			return true;
		}
		return false;
	};

	/**
	 * Notify the player that this event occured.
	 *
	 * @public
	 * @returns {civitas.objects.event}
	 */
	this.notify = function() {
		this.core._notify({
			title: 'Event occured: ' + this.name,
			content: this.description
				.replace(/SETTLEMENT/g, this.data.settlement)
				.replace(/AMOUNT/g, this.data.amount),
			timeout: false,
			other: true
		});
		return this;
	};

	/**
	 * Internal function for processing the event data.
	 * 
	 * @private
	 * @returns {civitas.objects.event}
	 */
	this._process = function () {
		this.notify();
		var with_settlement = this.core.get_settlement(this.data.settlement);
		switch (this.effect) {
			case civitas.EVENT_EFFECT_LOSE_COINS:
				this.core.get_settlement().dec_coins(this.data.amount);
				break;
			case civitas.EVENT_EFFECT_GAIN_COINS:
				this.core.get_settlement().inc_coins(this.data.amount);
				break;
			case civitas.EVENT_EFFECT_RAISE_INFLUENCE:
				this.core.get_settlement().raise_influence(with_settlement.get_id(), this.data.amount, 'city');
				break;
			case civitas.EVENT_EFFECT_LOWER_INFLUENCE:
				this.core.get_settlement().lower_influence(with_settlement.get_id(), this.data.amount, 'city');
				break;
			case civitas.EVENT_EFFECT_GAIN_FAME:
				this.core.get_settlement().raise_fame(this.data.amount);
				break;
			case civitas.EVENT_EFFECT_LOSE_FAME:
				this.core.get_settlement().lower_fame(this.data.amount);
				break;
			case civitas.EVENT_EFFECT_GAIN_ESPIONAGE:
				this.core.get_settlement().raise_espionage(this.data.amount);
				break;
			case civitas.EVENT_EFFECT_LOSE_ESPIONAGE:
				this.core.get_settlement().lower_espionage(this.data.amount);
				break;
			case civitas.EVENT_EFFECT_DESTROY_BUILDING:
				break;
		}
		return this;
	};

	// Fire up the constructor
	return this.__init(params);
};
