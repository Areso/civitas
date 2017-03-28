/**
 * Game jailer (enforcing security) object.
 * 
 * @param {Object} params
 * @class {city_builder.modules.jailer}
 * @returns {city_builder.modules.jailer}
 */
city_builder.modules.jailer = function (params) {

	/**
	 * Reference to the core object.
	 * 
	 * @type {city_builder.game}
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
	 * @returns {city_builder.modules.jailer}
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
