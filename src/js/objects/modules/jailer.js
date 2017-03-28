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
	 * @type {civitas.game}
	 */
	this.core = null;

	/**
	 * Module version.
	 * 
	 * @private
	 * @type {String}
	 */
	this.version = '0.2.0';
	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {civitas.modules.jailer}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		this.core = params.core;
		return this;
	};

	/**
	 * Return the module version.
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_version = function () {
		return this.version;
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

	// Fire up the constructor
	return this.__constructor(params);
};
