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
	 * Internal function for processing the event data.
	 * 
	 * @private
	 * @returns {civitas.objects.event}
	 */
	this._process = function () {
		var core = this.get_core();
		var amount = this.data.amount;
		var random_settlement_id = civitas.utils.get_random(1, core.settlements.length);
		var with_settlement = core.get_settlement(random_settlement_id);
		switch (this.effect) {
			case civitas.EVENT_EFFECT_LOSE_COINS:
				core.get_settlement().dec_coins(amount);
				break;
			case civitas.EVENT_EFFECT_GAIN_COINS:
				core.get_settlement().inc_coins(amount);
				break;
			case civitas.EVENT_EFFECT_RAISE_INFLUENCE:
				core.get_settlement().raise_influence(with_settlement.get_id(), amount);
				break;
			case civitas.EVENT_EFFECT_LOWER_INFLUENCE:
				core.get_settlement().lower_influence(with_settlement.get_id(), amount);
				break;
			case civitas.EVENT_EFFECT_GAIN_FAME:
				core.get_settlement().raise_fame(amount);
				break;
			case civitas.EVENT_EFFECT_LOSE_FAME:
				core.get_settlement().lower_fame(amount);
				break;
			case civitas.EVENT_EFFECT_GAIN_ESPIONAGE:
				core.get_settlement().raise_espionage(amount);
				break;
			case civitas.EVENT_EFFECT_LOSE_ESPIONAGE:
				core.get_settlement().lower_espionage(amount);
				break;
			case civitas.EVENT_EFFECT_LOSE_FAITH:
				core.get_settlement().lower_faith(amount);
				break;
			case civitas.EVENT_EFFECT_GAIN_FAITH:
				core.get_settlement().raise_faith(amount);
				break;
			case civitas.EVENT_EFFECT_LOSE_RESEARCH:
				core.get_settlement().lower_research(amount);
				break;
			case civitas.EVENT_EFFECT_GAIN_RESEARCH:
				core.get_settlement().raise_research(amount);
				break;
			case civitas.EVENT_EFFECT_DESTROY_BUILDING:
				break;
			case civitas.EVENT_EFFECT_UPGRADE_BUILDING:
				break;
		}
		if (core.get_settlement().is_player()) {
			core._notify({
				title: 'Event occured: ' + this.name,
				content: this.description
					.replace(/SETTLEMENT/g, with_settlement.get_name())
					.replace(/AMOUNT/g, this.data.amount),
				timeout: false,
				other: true
			});
		}
		return this;
	};

	/**
	 * Return a pointer to the game core.
	 * 
	 * @public
	 * @returns {civitas.game}
	 */
	this.get_core = function() {
		return this.core;
	};

	// Fire up the constructor
	return this.__init(params);
};
