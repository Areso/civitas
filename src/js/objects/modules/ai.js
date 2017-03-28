/**
 * Main Game AI (Artificial Intelligence) object.
 * 
 * @param {Object} params
 * @class {city_builder.modules.ai}
 * @returns {city_builder.modules.ai}
 */
city_builder.modules.ai = function (params) {

	/**
	 * Reference to the core object.
	 * 
	 * @type {city_builder.game}
	 */
	this.core = null;

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {city_builder.modules.ai}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		this.core = params.core;
		return this;
	};

	// Fire up the constructor
	return this.__constructor(params);
};
