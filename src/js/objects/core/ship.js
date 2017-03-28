/**
 * Main Game ship object.
 * 
 * @param {Object} params
 * @class {civitas.objects.ship}
 * @returns {civitas.objects.ship}
 */
civitas.objects.ship = function (params) {

	/**
	 * Pointer to the city this ship is located in.
	 * 
	 * @type {civitas.objects.city}
	 * @private
	 */
	this.city = null;

	/**
	 * Attack rating of this ship.
	 * 
	 * @type {Number}
	 * @private
	 */
	this.attack = 0;

	/**
	 * Defense rating of this ship.
	 * 
	 * @type {Number}
	 * @private
	 */
	this.defense = 0;

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
	 * Object destructor
	 * 
	 * @private
	 * @returns {Boolean}
	 */
	this.__destructor = function () {
		return false;
	};

	/**
	 * Method for destroying(disbanding) the ship.
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
	 * @returns {civitas.objects.ship}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		this.city = params.city;
		this.name = params.name;
		this.attack = params.data.attack;
		this.defense = params.data.defense;
		this.cost = params.data.cost;
		return this;
	};

	/**
	 * Get the attack rating of this ship.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_attack = function () {
		return this.attack;
	};

	/**
	 * Get the defense rating of this ship.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_defense = function () {
		return this.defense;
	};

	/**
	 * Get the recruitment costs of this ship.
	 * 
	 * @returns {Object}
	 * @public
	 */
	this.get_cost = function () {
		return this.cost;
	};

	/**
	 * Get the city this ship is located into.
	 * 
	 * @public
	 * @returns {civitas.objects.city}
	 */
	this.get_city = function () {
		return this.city;
	};

	/**
	 * Get the name of this ship.
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
	return this.__constructor(params);
};
