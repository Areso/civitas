/**
 * Main Game AI (Artificial Intelligence) object.
 * 
 * @param {type} params
 * @class {city_builder.ai}
 * @returns {city_builder.__constructor}
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
	 * @returns {city_builder.ai}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		this.core = params.core;
		return this;
	};

	// Fire up the constructor
	return this.__constructor(params);
};
