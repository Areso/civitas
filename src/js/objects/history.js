/**
 * Main Game history object.
 * 
 * @param {type} params
 * @class {city_builder.history}
 * @returns {city_builder.history}
 */
city_builder.history = function (params) {

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
	 * @returns {city_builder.history}
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
