/**
 * Game jailer (enforcing security) object.
 * 
 * @param {Object} params
 * @class {civitas.modules.jailer}
 * @returns {civitas.modules.jailer}
 */
civitas.modules.jailer = function (params) {

	/**
	 * Reference to the core object.
	 *
	 * @private
	 * @type {civitas.game}
	 */
	this._core = null;

	/**
	 * Module version.
	 * 
	 * @private
	 * @type {String}
	 */
	this._version = '0.2.0';

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {civitas.modules.jailer}
	 * @param {Object} params
	 */
	this.__init = function (params) {
		this._core = params.core;
		return this;
	};

	/**
	 * Return the module version.
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_version = function () {
		return this._version;
	};

	/**
	 * Perform an actual security audit.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.check = function () {
		return true;
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
