/**
 * Main Game army object.
 * 
 * @param {Object} params
 * @class {civitas.objects.army}
 * @returns {civitas.objects.army}
 */
civitas.objects.army = function (params) {

	/**
	 * Pointer to the city this army is located in.
	 * 
	 * @type {civitas.objects.city}
	 * @private
	 */
	this.city = null;

	/**
	 * Requirements of this ship.
	 * 
	 * @type {Object}
	 * @private
	 */
	this.cost = null;

	/**
	 * Get the name of this ship.
	 * 
	 * @type {String}
	 * @private
	 */
	this.name = null;

	/**
	 * List of soldiers in this army.
	 *
	 * @type {Array}
	 * @private
	 */
	this.soldiers = [];

	/**
	 * List of ships in this army.
	 *
	 * @type {Array}
	 * @private
	 */
	this.ships = [];

	/**
	 * Object destructor
	 * 
	 * @private
	 * @returns {Boolean}
	 */
	this.__destructor = function () {
		return false;
	};

	/**
	 * Method for destroying(disbanding) the army.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.destroy = function () {
		return this.__destructor();
	};

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {civitas.objects.army}
	 * @param {Object} params
	 */
	this.__init = function (params) {
		this.city = params.city;
		this.name = params.name;
		this.cost = params.data.cost;
		return this;
	};

	/**
	 * Get the city this army is located into.
	 * 
	 * @public
	 * @returns {civitas.objects.city}
	 */
	this.get_city = function () {
		return this.city;
	};

	/**
	 * Get the name of this army.
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_name = function () {
		return this.name;
	};

	/**
	 * Get a pointer to the game core.
	 * 
	 * @public
	 * @returns {civitas.game}
	 */
	this.get_core = function () {
		return this.get_city().get_core();
	};

	// Fire up the constructor
	return this.__init(params);
};
