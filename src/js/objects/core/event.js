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
	 * Event data for lowering stuff.
	 *
	 * @private
	 * @type {Object}
	 */
	this.lower = null;

	/**
	 * Event data for raising stuff.
	 *
	 * @private
	 * @type {Object}
	 */
	this.raise = null;

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
		this.raise = typeof params.raise !== 'undefined' ? params.raise : null;
		this.lower = typeof params.lower !== 'undefined' ? params.lower : null;
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
		var core = this.get_core();
		var random_settlement_id = civitas.utils.get_random(1, core.settlements.length);
		var with_settlement = core.get_settlement(random_settlement_id);
		var description = this.description.replace(/SETTLEMENT/g, with_settlement.name());
		if (this.raise !== null) {
			for (var item in this.raise) {
				if (item === 'influence') {
					core.get_settlement().raise_influence(with_settlement.id(), this.raise[item]);
				} else {
					core.get_settlement().add_to_storage(item, this.raise[item]);
				}
				var replace = new RegExp(item.toUpperCase(), 'g');
				description = description.replace(replace, this.raise[item]);
			}
		}
		if (this.lower !== null) {
			for (var item in this.lower) {
				if (item === 'influence') {
					core.get_settlement().lower_influence(with_settlement.id(), this.lower[item]);
				} else {
					core.get_settlement().remove_resource_silent(item, this.lower[item]);
				}
				var replace = new RegExp(item.toUpperCase(), 'g');
				description = description.replace(replace, this.lower[item]);
			}
		}
		if (core.get_settlement().is_player()) {
			core._notify({
				title: 'Event occured: ' + this.name,
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
	this.get_core = function() {
		return this.core;
	};

	// Fire up the constructor
	return this.__init(params);
};
