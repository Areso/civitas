/**
 * Main Game history object.
 * 
 * @param {Object} params
 * @class {city_builder.modules.history}
 * @returns {city_builder.modules.history}
 */
city_builder.modules.history = function (params) {

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
	 * @returns {city_builder.modules.history}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		this.core = params.core;
		// TODO
		return this;
	};

	// Fire up the constructor
	return this.__constructor(params);
};
