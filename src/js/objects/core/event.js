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
	 * @private
	 * @type {civitas.game}
	 */
	this._core = null;

	/**
	 * Name of the event.
	 *
	 * @private
	 * @type {String}
	 */
	this._name = null;

	/**
	 * Event's chance to occur.
	 *
	 * @private
	 * @type {Number}
	 */
	this._chance = 0;

	/**
	 * Event's effect.
	 *
	 * @private
	 * @type {Number}
	 */
	this._effect = null;

	/**
	 * Description of the event.
	 *
	 * @private
	 * @type {String}
	 */
	this._description = null;

	/**
	 * Event data for lowering stuff.
	 *
	 * @private
	 * @type {Object}
	 */
	this._lower = null;

	/**
	 * Event data for raising stuff.
	 *
	 * @private
	 * @type {Object}
	 */
	this._raise = null;

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {civitas.objects.event}
	 * @param {Object} params
	 */
	this.__init = function (params) {
		this._core = params.core;
		this._name = params.name;
		this._chance = (typeof params.chance !== 'undefined') ? params.chance : 0.001;
		this._description = params.description;
		this._raise = typeof params.raise !== 'undefined' ? params.raise : null;
		this._lower = typeof params.lower !== 'undefined' ? params.lower : null;
		this.process();
		return this;
	};

	/**
	 * Process the event data.
	 * 
	 * @public
	 * @returns {civitas.objects.event}
	 */
	this.process = function () {
		var core = this.core();
		var random_settlement_id = civitas.utils.get_random(1, core.settlements.length);
		var with_settlement = core.get_settlement(random_settlement_id);
		var description = this._description.replace(/SETTLEMENT/g, with_settlement.name());
		if (this._raise !== null) {
			for (var item in this._raise) {
				if (item === 'influence') {
					core.get_settlement().raise_influence(with_settlement.id(), this._raise[item]);
				} else {
					core.get_settlement().add_to_storage(item, this._raise[item]);
				}
				var replace = new RegExp(item.toUpperCase(), 'g');
				description = description.replace(replace, this._raise[item]);
			}
		}
		if (this._lower !== null) {
			for (var item in this._lower) {
				if (item === 'influence') {
					core.get_settlement().lower_influence(with_settlement.id(), this._lower[item]);
				} else {
					core.get_settlement().remove_resource_silent(item, this._lower[item]);
				}
				var replace = new RegExp(item.toUpperCase(), 'g');
				description = description.replace(replace, this._lower[item]);
			}
		}
		if (core.get_settlement().is_player()) {
			core._notify({
				title: 'Event occured: ' + this._name,
				content: description,
				timeout: false,
				mode: civitas.NOTIFY_EVENT
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
	this.core = function() {
		return this._core;
	};

	// Fire up the constructor
	return this.__init(params);
};
